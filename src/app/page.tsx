import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />

      <main>
        <Hero />
        {/* Other sections removed temporarily */}
      </main>

      <Footer />
    </div>
  );
}
