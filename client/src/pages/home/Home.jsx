import Hero from "./components/Hero";
import Destacados from "./components/Destacados";
import About from "./components/About";
import Reviews from "./components/Reviews";

import "./home.css";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <Destacados />
      <About />
      <Reviews />
    </main>
  );
}
