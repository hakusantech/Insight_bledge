import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '0.1em', fontFamily: 'var(--font-noto-serif-jp)' }}>InsightBridge</h3>
            <p style={{ color: '#fff', opacity: 0.7, fontSize: '0.85rem', letterSpacing: '0.05em' }}>
              深い洞察や気づきを、成長に繋げる橋渡しをする
            </p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">会社概要</Link></li>
              <li><Link href="/representative">代表挨拶・プロフィール</Link></li>
              <li><Link href="/partners">提携パートナー</Link></li>
              <li><Link href="/privacy">プライバシーポリシー</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/#services">Executive Assessment</Link></li>
              <li><Link href="/#services">Executive Coaching</Link></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} InsightBridge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

