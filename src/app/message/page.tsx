import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Message() {
  return (
    <div className="page-wrapper">
      <Header />
      
      <main>
        {/* Page Hero */}
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '80px', backgroundColor: 'var(--color-bg-light)' }}>
          <div className="container">
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontWeight: 700, letterSpacing: '0.3em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' }}>Message</span>
            <h1 style={{ fontSize: '2.5rem', textAlign: 'center', color: 'var(--color-primary)', fontFamily: 'var(--font-noto-serif-jp)' }}>代表挨拶</h1>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
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

              <div style={{ textAlign: 'right', marginTop: '4rem' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>代表取締役</p>
                <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-noto-serif-jp)', fontWeight: 700, letterSpacing: '0.1em' }}>岩本　秀和</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

