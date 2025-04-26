import { Header } from "../Header";
import { Hero } from "../Hero";
import { About } from "../About";
import { Why } from "../Why";
import { Services } from "../Services";
import { Map } from "../Map";
import { Certificates } from "../Certificates";
import { Footer } from "../Footer";

export function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Why />
      <Certificates />
      <Services />
      <Map />
      <Footer />
    </main>
  );
}
