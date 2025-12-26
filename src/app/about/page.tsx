"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="page-wrapper">
      <Header />

      <main>
        {/* Page Hero */}
        <section className="section" style={{ paddingTop: '180px', paddingBottom: '80px', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>About Us</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', fontFamily: 'var(--font-noto-serif-jp)', marginBottom: '3rem' }}>私たちについて</p>
            
            <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <a href="/message" className="nav-item" style={{ fontSize: '0.9rem', fontWeight: 600 }}>代表挨拶</a>
              <a href="/profile" className="nav-item" style={{ fontSize: '0.9rem', fontWeight: 600 }}>代表プロフィール</a>
            </nav>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section bg-light">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ marginBottom: '6rem', textAlign: 'center' }}>
              <span style={{ display: 'block', color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.1em' }}>MISSION</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>ミッション</h2>
              <p style={{ fontSize: '1.5rem', lineHeight: '2', fontWeight: 500, fontFamily: 'var(--font-noto-serif-jp)', borderLeft: '4px solid var(--color-primary)', paddingLeft: '2rem', textAlign: 'left', display: 'inline-block' }}>
                日本のリーダーの成長支援を通じて、<br />
                日本社会の発展に貢献する。
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.1em' }}>VISION</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>ビジョン</h2>
              <p style={{ fontSize: '1.5rem', lineHeight: '2', fontWeight: 500, fontFamily: 'var(--font-noto-serif-jp)', borderLeft: '4px solid var(--color-secondary)', paddingLeft: '2rem', textAlign: 'left', display: 'inline-block' }}>
                日本のリーダーの成長を支援するビジネス領域において、<br />
                顧客から最も信頼される企業になる。
              </p>
            </div>
          </div>
        </section>

        {/* Origin */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ textAlign: 'center' }}>社名の由来</h2>
            <div style={{ padding: '3rem', backgroundColor: '#fff', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', borderRadius: '8px' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '2', marginBottom: '0', textAlign: 'justify' }}>
                リーダーが持つ強みや課題に対し、アセスメントやコーチングを通じて深い洞察や気づき（<span style={{color: 'var(--color-primary)', fontWeight: 'bold'}}>Insight</span>）を提供することにより、リーダーの更なる成長へと繋げる橋渡し（<span style={{color: 'var(--color-secondary)', fontWeight: 'bold'}}>Bridge</span>）になりたいとの思いから、社名を「<span style={{fontWeight: 'bold'}}>インサイトブリッジ</span>」にしました。
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="section bg-light">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ textAlign: 'center' }}>会社概要</h2>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.03)' }}>
              <dl style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', borderBottom: '1px solid #eee' }}>
                <dt style={{ padding: '1.5rem', backgroundColor: '#f9fafb', fontWeight: 'bold', borderRight: '1px solid #eee', display: 'flex', alignItems: 'center' }}>商号</dt>
                <dd style={{ padding: '1.5rem', margin: 0 }}>インサイトブリッジ株式会社<br /><span style={{ fontSize: '0.9em', color: '#666' }}>(Insight Bridge Co., Ltd.)</span></dd>
              </dl>
              <dl style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', borderBottom: '1px solid #eee' }}>
                <dt style={{ padding: '1.5rem', backgroundColor: '#f9fafb', fontWeight: 'bold', borderRight: '1px solid #eee', display: 'flex', alignItems: 'center' }}>設立</dt>
                <dd style={{ padding: '1.5rem', margin: 0 }}>2022年5月</dd>
              </dl>
              <dl style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', borderBottom: '1px solid #eee' }}>
                <dt style={{ padding: '1.5rem', backgroundColor: '#f9fafb', fontWeight: 'bold', borderRight: '1px solid #eee', display: 'flex', alignItems: 'center' }}>資本金</dt>
                <dd style={{ padding: '1.5rem', margin: 0 }}>700万円</dd>
              </dl>
              <dl style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', borderBottom: '1px solid #eee' }}>
                <dt style={{ padding: '1.5rem', backgroundColor: '#f9fafb', fontWeight: 'bold', borderRight: '1px solid #eee', display: 'flex', alignItems: 'center' }}>代表取締役</dt>
                <dd style={{ padding: '1.5rem', margin: 0 }}>岩本 秀和</dd>
              </dl>
              <dl style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', borderBottom: '1px solid #eee' }}>
                <dt style={{ padding: '1.5rem', backgroundColor: '#f9fafb', fontWeight: 'bold', borderRight: '1px solid #eee', display: 'flex', alignItems: 'center' }}>事業内容</dt>
                <dd style={{ padding: '1.5rem', margin: 0 }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>経営人材の評価（エグゼクティブ・アセスメント）</li>
                    <li>経営人材のコーチング・育成（エグゼクティブ・コーチング）</li>
                  </ul>
                </dd>
              </dl>
              <dl style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
                <dt style={{ padding: '1.5rem', backgroundColor: '#f9fafb', fontWeight: 'bold', borderRight: '1px solid #eee', display: 'flex', alignItems: 'center' }}>取引銀行</dt>
                <dd style={{ padding: '1.5rem', margin: 0 }}>
                  三菱UFJ銀行 武蔵境支店<br />
                  三井住友銀行 吉祥寺支店
                </dd>
              </dl>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

