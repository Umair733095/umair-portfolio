import IntroSection from "../Intro-section";
import Clients from "../Clients"
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <IntroSection></IntroSection>
      <Clients></Clients>
      <Footer />
    </>
  );
}
