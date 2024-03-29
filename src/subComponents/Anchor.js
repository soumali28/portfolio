import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Anchor, Link } from "../components/Allsvg";


const Container = styled.div`
position: relative;

`

const Slider = styled.div`
    position: fixed;
    top: 0;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(-100%);

    .chain{
        transform: rotate(135deg);
    }
`
 
const PreSlider = styled.div`
    position: absolute;
    top: 0;
    right: 2rem;
`

const AnchorComponent = (props) => {
    const ref = useRef();
    const hiddenRef = useRef();

    useEffect(() => {

        const handleScroll = () => {
            let scrollPosition = window.pageYOffset;
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;

            let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
            let diffP = (diff + 100) / (bodyHeight - windowSize);

            ref.current.style.transform = `translateY(${-diffP}rem)`;

            if(window.pageYOffset > 5){
                hiddenRef.current.style.display = 'none';
            }
            else{
                hiddenRef.current.style.display = 'block';
            }
        }

        window.addEventListener("scroll" , handleScroll);
        return() => window.removeEventListener("scroll" , handleScroll);
    })

 
    return(
        <Container>
        <PreSlider ref={hiddenRef} className='hidden' >
        <Anchor width={70} height={70} fill='#876445' />
        </PreSlider>
            <Slider ref={ref}>
                {
                    [...Array(props.numbers)].map((x,id) => {
                        return <Link key={id} width={25} height={25} fill='#876445' className="chain" />
                    })
                }
                <Anchor width={70} height={70} fill=' #876445' />
            </Slider>
        </Container>
    );
}

export default AnchorComponent;