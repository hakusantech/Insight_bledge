import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

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
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="profile-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
              <div className="partner-image">
                <div style={{ width: '100%', position: 'relative', aspectRatio: '3/4', backgroundColor: '#fff', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                  <Image
                    src="/okumura.webp"
                    alt="提携パートナー 奥村 幸治"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              
              <div className="partner-details">
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-noto-serif-jp)', marginBottom: '0.5rem' }}>奥村 幸治</h2>
                <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '1.5rem' }}>Koji Okumura, Ph.D.</p>
                
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', lineHeight: '1.8', marginBottom: '2rem' }}>
                  ブリガム・ヤング大学心理学博士(Ph.D)<br />
                  ファイザー製薬株式会社 開発薬事部、DBM Novations事業部（キャリア研究 / アセスメント / 研修）、PDI/Korn Ferry コンサルタント等を経て現職。
                </p>

                <div style={{ marginBottom: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', marginBottom: '1.2rem' }}>主な経歴・実績</h3>
                  <div style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 600 }}>産業心理 / 臨床心理を応用した業務（25年以上）</p>
                    <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                      <li>・Psychometricsを使ったアセスメント開発、評価（採用 / 昇格 / 能力開発）</li>
                      <li style={{ paddingLeft: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>– 社会人基礎力・監修（日経ビジネス）</li>
                      <li style={{ paddingLeft: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>– 人間力診断・Prizm開発（NET）</li>
                      <li style={{ paddingLeft: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>– アセスメント開発・外部アドバイザー（エン・ジャパン）</li>
                      <li style={{ paddingLeft: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>– Saville Certification Trainer(Canning)SHL創始者Peter Savilleが開発したアセスメントを使用したコンサルテーション</li>
                      <li style={{ paddingLeft: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>– アセスメントバッテリーを使用した社長候補者選定（Russell Reynolds）</li>
                    </ul>
                  </div>
                </div>

                <div style={{ marginBottom: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', marginBottom: '1.2rem' }}>教育・リサーチ</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div>
                      <p style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>教育</p>
                      <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', lineHeight: '1.8' }}>
                        <li>・立教大学大学院 MBAスクール講師</li>
                        <li>・文教大学 / 専修大学 / ユタバレー州立大学 講師</li>
                        <li>・東京大学 / 一橋大学 ゲスト講師</li>
                      </ul>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>リサーチ</p>
                      <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', lineHeight: '1.8' }}>
                        <li>・リクルート・ワークス研究所</li>
                        <li>・立教大学ビジネスクリーター創出センター</li>
                        <li>・DBMライフキャリア研究所</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', marginBottom: '1.2rem' }}>心理臨床・社会活動</h3>
                  <div style={{ lineHeight: '1.8', fontSize: '0.9rem' }}>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
                      <li>・ユタ州立ユタバレー大学ウェルネスセンター / ISAT / 鮫島クリニック / 奥村クリニック</li>
                      <li>・神奈川県人材支援メンタルヘルス分科会座長、企業承継分科会座長</li>
                      <li>・メンタルヘルスセミナー講師</li>
                      <li>・元NPO国際ボンディング協会副理事</li>
                    </ul>
                  </div>
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

