import HeroTypewriter from "./HeroTypewriter";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" aria-label="Tokyo skyline at night">
      <div className="hero-bg-wrapper">
        <Image
          src="/hero-visual.webp"
          alt="Tokyo skyline at night"
          fill
          priority
          style={{ objectFit: 'cover' }}
          quality={85}
        />
      </div>
      <div className="hero-typewriter">
        <HeroTypewriter />
        <p className="hero-tagline">
          深い洞察や気づきを、成長に繋げる橋渡しをする
        </p>
      </div>
    </section>
  );
}

