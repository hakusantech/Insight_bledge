import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <Link href="/">
            <Image
              src="/logo (1).png"
              alt="InsightBridge Logo"
              width={160}
              height={45}
              style={{ objectFit: "contain", height: "auto" }}
              priority
            />
          </Link>
        </div>
        <nav className="nav" style={{ display: 'flex', alignItems: 'center' }}>
          <ul className="nav-list" style={{ marginRight: '3rem' }}>
            <li><Link href="/about" className="nav-item">About Us</Link></li>
            <li><Link href="/#services" className="nav-item">Services</Link></li>
          </ul>
          <Link href="/#contact" className="btn" style={{ padding: '10px 24px', fontSize: '0.8rem' }}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

