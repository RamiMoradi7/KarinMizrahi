import About from "./components/About";
import ContactMe from "./components/Contact";
import Courses from "./components/Courses";
import HeroSection from "./components/Hero";
import NailsGallery from "./components/NailsGallery";
import Container from "./components/container";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Container>
        <About />
        <Courses />
        <ContactMe />
        <NailsGallery />
      </Container>
    </>
  );
}
