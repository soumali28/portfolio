import { useEffect, useState } from "react";
import TopDesign from "../components/hero-section/top-design";
import Header from "../components/hero-section/header";
import About from "../components/about/about";
import Work from "../components/work/work";
import Skills from "../components/skills/skills";
import Projects from "../components/projects/projects";
import HowIWork from "../components/how-I-work/howIWork";
import Education from "../components/education/education";
import Testimonials from "../components/testimonials/testimonials";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onFirstScroll = () => {
      setHasScrolled(true);

      window.removeEventListener("wheel", onFirstScroll);
      window.removeEventListener("touchmove", onFirstScroll);
      window.removeEventListener("keydown", onKeyDown);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", "Space"].includes(e.code)) {
        onFirstScroll();
      }
    };

    window.addEventListener("wheel", onFirstScroll, { passive: true });
    window.addEventListener("touchmove", onFirstScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onFirstScroll);
      window.removeEventListener("touchmove", onFirstScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <>
      <TopDesign />
      <div className="space-y-3 px-6">
        <Header hasScrolled={hasScrolled} />
        {hasScrolled && (
          <>
            <About />
            <Work />
            <Skills />
            <Projects />
            <HowIWork />
            <Education />
            <Testimonials />
            <Footer />
          </>
        )}
      </div>
      {hasScrolled && <Navbar />}
    </>
  );
}

export default Home;
