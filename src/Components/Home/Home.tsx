import IntroSection from "../Intro-section";
import Client from "../Clients";
import Projects from "../Projects";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <IntroSection></IntroSection>
      <Client></Client>
      <Projects></Projects>
      <Footer />
    </>
  );
}
