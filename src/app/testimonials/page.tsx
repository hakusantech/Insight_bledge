import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      category: "Executive Assessment",
      client: "大手製造業 人事担当常務執行役員様",
      quote: "アセスメント結果の洞察の深さに驚きました。単なるスキル評価ではなく、本人の根源的な動機や、修羅場における行動特性まで見抜かれており、後継者計画（サクセッションプラン）の精度が飛躍的に高まりました。",
    },
    {
      id: 2,
      category: "Executive Coaching",
      client: "外資系製薬 執行役員様",
      quote: "コーチングを通じて、自分自身のリーダーシップスタイルを客観的に見つめ直すことができました。岩本さんの問いかけは鋭く、自分でも気づいていなかった『壁』を乗り越える大きなきっかけとなりました。",
    },
    {
      id: 3,
      category: "Executive Assessment",
      client: "メガバンク 人事部長様",
      quote: "客観的かつ多角的な評価により、抜擢人事に対する納得感が組織内で醸成されました。第三者としての専門的な視点が、我々の意思決定の質を一段引き上げてくれたと感じています。",
    },
    {
      id: 4,
      category: "Executive Coaching",
      client: "ITサービス 創業社長様",
      quote: "孤独な経営者の立場を深く理解し、伴走してくれる稀有なパートナーです。半年間のセッションで、組織の課題解決スピードが格段に上がり、自身の視座も一段高まったことを実感しています。",
    }
  ];

  return (
    <div className="page-wrapper">
      <Header />
      
      <main>
        {/* Page Hero - Modern Minimalism */}
        <section className="section" style={{ 
          paddingTop: '200px', 
          paddingBottom: '100px', 
          background: 'linear-gradient(135deg, var(--color-primary) 0%, #001a3d 100%)',
          color: '#fff',
          textAlign: 'center'
        }}>
          <div className="container">
            <span style={{ 
              display: 'inline-block', 
              padding: '4px 16px', 
              backgroundColor: 'rgba(255,255,255,0.1)', 
              borderRadius: '20px',
              fontSize: '0.75rem', 
              fontWeight: 700, 
              letterSpacing: '0.2em', 
              textTransform: 'uppercase', 
              marginBottom: '1.5rem',
              backdropFilter: 'blur(5px)'
            }}>Voices</span>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              marginBottom: '1.5rem', 
              fontFamily: 'var(--font-noto-serif-jp)',
              letterSpacing: '0.05em'
            }}>クライアントの声</h1>
            <p style={{ 
              fontSize: '1.1rem', 
              opacity: 0.8, 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.8' 
            }}>
              経営層の皆様と共に歩み、成長を支援してきた軌跡。<br />
              信頼をお寄せいただいたクライアント様からのフィードバックです。
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="section bg-light" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Subtle background decoration */}
          <div style={{ 
            position: 'absolute', 
            top: '10%', 
            right: '-10%', 
            width: '40%', 
            height: '40%', 
            background: 'radial-gradient(circle, rgba(0, 86, 179, 0.03) 0%, transparent 70%)',
            zIndex: 0
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: '2.5rem' 
            }}>
              {testimonials.map((t) => (
                <div key={t.id} style={{ 
                  backgroundColor: '#fff', 
                  padding: '3rem', 
                  borderRadius: '2px', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                  borderTop: '4px solid var(--color-secondary)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                }} className="testimonial-card">
                  <div style={{ 
                    fontSize: '3rem', 
                    fontFamily: 'serif', 
                    color: 'var(--color-secondary)', 
                    opacity: 0.2, 
                    lineHeight: 1,
                    marginBottom: '-1rem'
                  }}>“</div>
                  
                  <p style={{ 
                    fontSize: '1.05rem', 
                    lineHeight: '2.2', 
                    color: 'var(--color-text-main)', 
                    fontFamily: 'var(--font-noto-serif-jp)',
                    fontWeight: 500,
                    marginBottom: '2.5rem',
                    flex: 1
                  }}>
                    {t.quote}
                  </p>
                  
                  <div style={{ 
                    borderTop: '1px solid #eee', 
                    paddingTop: '1.5rem' 
                  }}>
                    <span style={{ 
                      display: 'block', 
                      fontSize: '0.75rem', 
                      color: 'var(--color-secondary)', 
                      fontWeight: 700, 
                      letterSpacing: '0.1em',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase'
                    }}>
                      {t.category}
                    </span>
                    <p style={{ 
                      fontSize: '0.9rem', 
                      fontWeight: 700, 
                      color: 'var(--color-primary)',
                      marginBottom: 0
                    }}>
                      {t.client}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing Message */}
            <div style={{ 
              marginTop: '8rem', 
              textAlign: 'center', 
              maxWidth: '700px', 
              margin: '8rem auto 0',
              padding: '4rem',
              backgroundColor: 'var(--color-primary)',
              color: '#fff',
              borderRadius: '4px'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>更なる価値の提供を目指して</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.9, lineHeight: '2' }}>
                私たちは、これからもリーダーの皆様が持つ真の可能性を解き放ち、<br />
                組織と社会の発展に貢献し続けることをお約束します。
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      <style jsx>{`
        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 40px 80px rgba(0, 43, 91, 0.08);
        }
      `}</style>
    </div>
  );
}

