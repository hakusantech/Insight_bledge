import HeroTypewriter from "./HeroTypewriter";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" aria-label="InsightBridge Hero Section">
      <div className="hero-bg-wrapper">
        <Image
          src="/hero-visual-v5.webp"
          alt="InsightBridge - Leadership and Growth"
          fill
          priority
          quality={85}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="hero-typewriter">
        <HeroTypewriter />
        <p className="hero-tagline">
          深い洞察と気づきを、リーダーの成長への架け橋に。
        </p>
        <p className="hero-origin">
          リーダーが持つ強みや課題に対して、アセスメントやコーチングを通じて深い洞察や気づき（Insight）を提供し、その先のさらなる成長へとつなぐ橋渡し（Bridge）でありたい──。そんな想いを込めています。
        </p>
      </div>
    </section>
  );
}