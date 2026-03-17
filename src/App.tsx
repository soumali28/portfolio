import { useEffect, useState } from "react";
import About from "./components/about/about";
import Header from "./components/hero-section/header";
import HowIWork from "./components/how-I-work/howIWork";
import Work from "./components/work/work";
import TopDesign from "./components/hero-section/top-design";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Education from "./components/education/education";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials/testimonials";

function App() {
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

export default App;
