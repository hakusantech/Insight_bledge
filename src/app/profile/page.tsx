import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Profile() {
  return (
    <div className="page-wrapper">
      <Header />
      
      <main>
        {/* Page Hero */}
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '80px', backgroundColor: 'var(--color-bg-light)' }}>
          <div className="container">
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontWeight: 700, letterSpacing: '0.3em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' }}>Profile</span>
            <h1 style={{ fontSize: '2.5rem', textAlign: 'center', color: 'var(--color-primary)', fontFamily: 'var(--font-noto-serif-jp)' }}>代表プロフィール</h1>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
              <div className="profile-image">
                <div style={{ width: '100%', aspectRatio: '3/4', backgroundColor: 'var(--color-bg-light)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', opacity: 0.5 }}>
                  {/* Placeholder for Profile Photo */}
                  <span style={{ fontSize: '0.8rem' }}>PHOTO</span>
                </div>
              </div>
              
              <div className="profile-details">
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-noto-serif-jp)', marginBottom: '0.5rem' }}>岩本 秀和</h2>
                <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '2rem' }}>Hidekazu Iwamoto</p>
                
                <div style={{ marginBottom: '3rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>経歴</h3>
                  <div style={{ lineHeight: '2', fontSize: '0.95rem' }}>
                    <p style={{ marginBottom: '1rem' }}>
                      2006年よりリーダーシップ・コンサルティング業界に従事。大手外資系組織人事コンサルティングファーム等を経て、エグゼクティブ・アセスメントおよびエグゼクティブ・コーチングの専門家として活動。
                    </p>
                    <p>
                      これまで日系・外資系企業の経営層（CEO、取締役、事業部長クラス）約一千名に対し、選抜・育成・登用のためのアセスメントおよび成長支援のためのコーチングを提供してきた実績を持つ。
                    </p>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>専門領域</h3>
                  <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2', fontSize: '0.95rem' }}>
                    <li>・エグゼクティブ・アセスメント</li>
                    <li>・エグゼクティブ・コーチング</li>
                    <li>・次世代リーダー育成体系の構築支援</li>
                    <li>・経営チームのチームビルディング</li>
                  </ul>
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

