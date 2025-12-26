import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

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
                <div style={{ width: '100%', position: 'relative', aspectRatio: '3/4', backgroundColor: '#fff', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                  <Image
                    src="/CEO_photo-scaled.jpg"
                    alt="代表取締役 岩本 秀和"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              
              <div className="profile-details">
                <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-noto-serif-jp)', marginBottom: '0.5rem' }}>岩本 秀和</h3>
                <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '2rem' }}>Hidekazu Iwamoto</p>
                
                <div style={{ marginBottom: '3rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>経歴</h4>
                  <div style={{ lineHeight: '2', fontSize: '0.95rem' }}>
                    <p style={{ marginBottom: '1rem' }}>
                      2022年に経営人材の成長支援を行うインサイトブリッジ株式会社を創業。
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                      2006年から16年間にわたり、外資系大手リーダーシップ・コンサルティング・ファームであるエゴンゼンダー及びラッセル・レイノルズ・アソシエイツに勤務。ラッセル・レイノルズ・アソシエイツでは日本代表として、エグゼクティブ・アセスメント、エグゼクティブ・コーチング、エグゼクティブサーチ等のサービスを提供。日系大企業の社長後継プロジェクトや執行役員登用へ向けた経営幹部人材のアセスメント、次世代経営層育成プロジェクト等を数多く手掛ける。
                    </p>
                    <p>
                      リーダーシップ・コンサルティング業界に入る以前は、キャリアのスタートであるソニーを経て、A.T. カーニーでコンサルタントをつとめたのち、GEヘルスケアにて、マーケティング部長としてモニターとカーディオロジーの二つのグループを統括。
                    </p>
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>学歴・資格</h4>
                  <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2', fontSize: '0.95rem' }}>
                    <li>・慶應義塾大学文学部史学科卒業</li>
                    <li>・米国ペンシルバニア大学ウォートン・ビジネススクール経営学修士（MBA）取得</li>
                    <li>・国際コーチング連盟（ICF）認定コーチ</li>
                    <li>・Hogan Assessments認定コーチ</li>
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

