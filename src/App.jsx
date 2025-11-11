import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Art from "./components/Art";
import Books from "./components/Books";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import Music from "./components/Music";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="dark bg-bg-dark text-text-light">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Art />
        <Books />
        <Technology />
        <Projects />
        <Music />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}