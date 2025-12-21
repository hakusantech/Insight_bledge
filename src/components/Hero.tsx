import HeroTypewriter from "./HeroTypewriter";

export default function Hero() {
  return (
    <section className="hero" aria-label="Tokyo skyline at night">
      <div className="hero-typewriter">
        <HeroTypewriter />
        <p className="hero-tagline">
          深い洞察や気づきを、成長に繋げる橋渡しをする
        </p>
      </div>
    </section>
  );
}

