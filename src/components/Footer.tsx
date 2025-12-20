import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>InsightBridge</h3>
            <p style={{ opacity: 0.6, maxWidth: '300px', fontSize: '0.9rem', lineHeight: '1.8' }}>
              私たちは、深い洞察と確かなアプローチで、次世代のリーダーたちの成長を支援するプロフェッショナル集団です。
            </p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/#about">Our Mission</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/#services">Executive Assessment</Link></li>
              <li><Link href="/#services">Executive Coaching</Link></li>
            </ul>
          </div>
          <div className="footer-col" id="contact">
            <h4>Contact</h4>
            <ul style={{ opacity: 0.6, fontSize: '0.85rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>contact@insightbridge.com</li>
              <li>東京都千代田区（詳細はお問い合わせください）</li>
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

