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

        {/* Mission Section */}
        <section id="mission" className="section">
          <div className="container">
            <div className="mission-wrapper">
              <span className="section-label">Our Mission</span>
              <h2 className="mission-statement">
                日本のリーダーの成長支援を通じて、<br />
                日本社会の発展に貢献する。
              </h2>
              <p className="mission-description">
                私たちは、単なるスキルの向上に留まらず、リーダーが持つ真の可能性を引き出し、<br />
                組織全体のトランスフォーメーションを加速させるための「架け橋」となります。
              </p>
              <div className="mission-cta">
                <a href="/about" className="btn btn-outline">About Us</a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="section bg-light">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Our Services</span>
              <h2 className="section-title">提供サービス</h2>
            </div>
            
            <div className="services-grid">
              {/* Service 1: Executive Assessment */}
              <div className="service-card">
                <h3 className="service-name">Executive Assessment</h3>
                <p className="service-jp-name">経営人材の評価</p>
                <div className="service-description">
                  <p>
                    経営人材のアセスメントにおける豊富な経験と専門知識。
                    コンピテンシー・ベースト・インタビューや行動心理テストを組み合わせ、クライアントのニーズに合わせた最適な評価スキームを構築します。
                  </p>
                </div>
              </div>

              {/* Service 2: Executive Coaching */}
              <div className="service-card">
                <h3 className="service-name">Executive Coaching</h3>
                <p className="service-jp-name">経営人材のコーチング・育成</p>
                <div className="service-description">
                  <p>
                    経営層及び次世代リーダーに対するパーソナライズされたコーチング。
                    アセスメントに基づいた深い自己洞察を促し、潜在能力を最大限に引き出すことで、持続的な成長と成果創出を支援します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
