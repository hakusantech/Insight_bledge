import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="page-wrapper">
      <Header />
      
      <main>
        {/* Page Hero */}
        <section className="section" style={{ paddingTop: '160px', paddingBottom: '80px', backgroundColor: 'var(--color-bg-light)' }}>
          <div className="container">
            <span style={{ display: 'block', color: 'var(--color-secondary)', fontWeight: 700, letterSpacing: '0.3em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' }}>Legal</span>
            <h1 style={{ fontSize: '2.5rem', textAlign: 'center', color: 'var(--color-primary)', fontFamily: 'var(--font-noto-serif-jp)' }}>プライバシーポリシー</h1>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <div className="privacy-content" style={{ lineHeight: '2', color: 'var(--color-text-main)' }}>
              <p style={{ marginBottom: '3rem', textAlign: 'center', opacity: 0.8 }}>
                インサイトブリッジ株式会社は、岩本秀和を個人情報管理責任者とし、個人情報の適正な管理及び継続的な改善を実施致します。<br />
                私たちのサイトアドレスは https://insightbridge.co.jp です。
              </p>

              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderLeft: '4px solid var(--color-primary)', paddingLeft: '1rem', marginBottom: '1.5rem', textAlign: 'left', fontFamily: 'var(--font-noto-serif-jp)' }}>個人情報保護方針について</h2>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>個人情報の取得</h3>
                <p>インサイトブリッジ株式会社は、エグゼクティブ・アセスメント及びエグゼクティブ・コーチングを行う会社であり、そのようなサービスを提供するために必要なさまざまな個人情報を収集、使用、および保存しています。</p>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>個人情報の定義</h3>
                <p>個人情報とは、利用者ご本人に関する情報で、当該情報に含まれる氏名、生年月日、住所、電話番号、メールアドレス、文化的背景、資格、職歴、雇用に関する詳細及び、その他の記述等により、利用者個人を識別できるものを言います。また、その情報のみでは識別できない場合であっても、ほかの情報と照合することで、結果的に利用者個人を識別することができるものも、ここでの個人情報に含みます。</p>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>個人情報の利用</h3>
                <p>インサイトブリッジ株式会社は、個人情報を以下の利用目的の達成に必要な範囲内で、利用致します。以下に定めのない目的で個人情報を利用する場合は、あらかじめご本人の同意を得た上で行ないます。</p>
                <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '1rem' }}>
                  <li>１．サービスの提供や付随する業務</li>
                  <li>２．サービスの開発・改善及びマーケティング</li>
                  <li>３．サービスの案内</li>
                  <li>４．サービスに関する統計的資料を作成するため</li>
                  <li>５．お見積のご依頼・ご相談に対する回答及び資料送付</li>
                </ul>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>個人情報の安全管理</h3>
                <p>インサイトブリッジ株式会社は、取り扱う個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。</p>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>個人情報の保有期間</h3>
                <p>インサイトブリッジ株式会社は、利用者の個人情報を、本サービスを提供するに際し、上記の利用目的を達成するために必要な期間に限って保有いたします。</p>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>個人情報の外部委託</h3>
                <p>インサイトブリッジ株式会社は、個人情報の取り扱い業務の全部または一部を第三者に委託する場合があります。当該委託先に個人情報の開示を行う場合には、委託先に対して厳正な調査を行い、取り扱いを委託された個人情報の安全管理が図られるよう、当該第三者に対する必要かつ適切な監督を行います。</p>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>個人情報の第三者への提供</h3>
                <p>インサイトブリッジ株式会社は、上記「個人情報の外部委託」に記載した外部委託先へ預託する場合を除き、個人情報をあらかじめご本人の同意を得ることなく、第三者に提供致しません。ただし、法の要請等に基づく場合は個人情報を提供する場合があります。</p>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>個人情報の開示・訂正等</h3>
                <p>インサイトブリッジ株式会社は、ご本人から自己の個人情報についての開示の請求がある場合、ご本人を確認させていただいたうえで、合理的な期間内に対応いたします。個人情報の内容に誤りがあり、ご本人から訂正・追加・削除の請求がある場合は、ご本人を確認させていただいたうえで、調査の上、合理的な期間内にこれらの請求に対応致します。</p>
              </div>

              <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '4px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>お問い合わせ先</h3>
                <p style={{ marginBottom: '0.5rem' }}>インサイトブリッジ株式会社　個人情報管理窓口係</p>
                <p>e-mail: <a href="mailto:privacy@insightbridge.co.jp" style={{ color: 'var(--color-secondary)', fontWeight: 500 }}>privacy@insightbridge.co.jp</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}


