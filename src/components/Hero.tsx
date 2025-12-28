import HeroTypewriter from "./HeroTypewriter";

export default function Hero() {
  return (
    <section className="hero" aria-label="InsightBridge Hero Section">
      <div className="hero-bg-wrapper">
        <img
          src="/hero-visual-v5.webp"
          alt="InsightBridge - Leadership and Growth"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            position: 'absolute',
            inset: 0
          }}
        />
      </div>
      <div className="hero-typewriter">
        <HeroTypewriter />
        <p className="hero-tagline">
          深い洞察と気づきを、リーダーの成長への架け橋に。
        </p>
      </div>
    </section>
  );
}

