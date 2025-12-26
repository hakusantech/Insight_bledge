import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Representative() {
  return (
    <div className="page-wrapper">
      <Header />
      
      <main>
        {/* Page Hero */}
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '80px', backgroundColor: 'var(--color-bg-light)' }}>
          <div className="container">
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontWeight: 700, letterSpacing: '0.3em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' }}>Representative</span>
            <h1 style={{ fontSize: '2.5rem', textAlign: 'center', color: 'var(--color-primary)', fontFamily: 'var(--font-noto-serif-jp)' }}>代表挨拶・プロフィール</h1>
          </div>
        </section>

        {/* Message Section */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-noto-serif-jp)', marginBottom: '3rem', textAlign: 'center', color: 'var(--color-primary)' }}>代表挨拶</h2>
            <div className="message-content" style={{ color: 'var(--color-text-main)', lineHeight: '2.2' }}>
              <p style={{ marginBottom: '2rem' }}>
                私が2006年にリーダシップ・コンサルティングの業界に入って以来今日までに、エグゼクティブ・アセスメントとエグゼクティブ・コーチングのサービス提供を通じて、約一千人の日系・外資系企業の経営層の方々にお会いさせて頂きました。
              </p>
              <p style={{ marginBottom: '2rem' }}>
                これら多くのリーダーの方々から私がお聞きしたのは、「（リーダーの立場になると）自身の強みや課題を振り返る機会や更なる成長へ向けたサポートを受ける機会がほとんどない」ということでした。
              </p>
              <p style={{ marginBottom: '2rem' }}>
                それ故に、サポートをさせて頂いたリーダーからは、自身を内省する機会を得たことに対して率直に感謝の言葉を頂くことが多くありました。私にとっては、リーダーの成長支援に貢献しているという実感を持つことが出来る瞬間であり、自分にとっての悦びであると共に仕事への情熱へと繋がってきました。
              </p>
              <p style={{ marginBottom: '2rem' }}>
                縁があって出会ったリーダーの方々に対して、自分がベストだと思うやりかたでサポートをしていきたいという思いから、エグゼクティブ・アセスメントとエグゼクティブ・コーチングにフォーカスした会社であるインサイトブリッジ社を創業しました。
              </p>
              <p style={{ marginBottom: '4rem' }}>
                日本のリーダーの更なる成長に向けて、これからも一生懸命にサポートを行って行きたいと考えております。
              </p>

              <div style={{ textAlign: 'right', marginTop: '2rem' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>代表取締役</p>
                <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-noto-serif-jp)', fontWeight: 700, letterSpacing: '0.1em' }}>岩本　秀和</p>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="section bg-light">
          <div className="container" style={{ maxWidth: '900px' }}>
            <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-noto-serif-jp)', marginBottom: '4rem', textAlign: 'center', color: 'var(--color-primary)' }}>代表プロフィール</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
              <div className="profile-image">
                <div style={{ width: '100%', aspectRatio: '3/4', backgroundColor: '#fff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', opacity: 0.5, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                  <span style={{ fontSize: '0.8rem' }}>PHOTO</span>
                </div>
              </div>
              
              <div className="profile-details">
                <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-noto-serif-jp)', marginBottom: '0.5rem' }}>岩本 秀和</h3>
                <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '2rem' }}>Hidekazu Iwamoto</p>
                
                <div style={{ marginBottom: '3rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>経歴</h4>
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
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>専門領域</h4>
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

