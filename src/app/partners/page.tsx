import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Partners() {
  return (
    <div className="page-wrapper">
      <Header />
      
      <main>
        {/* Page Hero */}
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '80px', backgroundColor: 'var(--color-bg-light)' }}>
          <div className="container">
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontWeight: 700, letterSpacing: '0.3em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' }}>Partners</span>
            <h1 style={{ fontSize: '2.5rem', textAlign: 'center', color: 'var(--color-primary)', fontFamily: 'var(--font-noto-serif-jp)' }}>提携パートナー</h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '2', color: 'var(--color-text-main)', marginBottom: '4rem' }}>
              インサイトブリッジ株式会社は、国内外の卓越した専門性を持つパートナーと提携し、<br />
              クライアントの多様なニーズに対して最適なソリューションを提供いたします。
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              {/* Partner Card 1 */}
              <div style={{ padding: '3rem 2rem', backgroundColor: '#fff', borderRadius: '4px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid rgba(0, 43, 91, 0.05)' }}>
                <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-noto-serif-jp)', color: 'var(--color-primary)', marginBottom: '1rem' }}>Global Consulting Partners</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
                  グローバル規模でのリーダーシップ・アセスメントや組織文化の診断において、世界トップクラスの知見を共有しています。
                </p>
              </div>

              {/* Partner Card 2 */}
              <div style={{ padding: '3rem 2rem', backgroundColor: '#fff', borderRadius: '4px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid rgba(0, 43, 91, 0.05)' }}>
                <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-noto-serif-jp)', color: 'var(--color-primary)', marginBottom: '1rem' }}>Executive Coaches</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
                  特定の業界や機能に深い造詣を持つ、独立系のシニア・エグゼクティブ・コーチとネットワークを構築しています。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

