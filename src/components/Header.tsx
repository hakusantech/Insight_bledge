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
          <ul className="nav-list">
            <li><Link href="/about" className="nav-item">About Us</Link></li>
            <li><Link href="/#services" className="nav-item">Services</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

