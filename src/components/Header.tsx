import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <Link href="/">
            <Image
              src="/logo.webp"
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
            <li className="nav-item-dropdown">
              <Link href="/about" className="nav-item">About Us</Link>
              <ul className="dropdown-menu">
                <li><Link href="/representative">代表挨拶・プロフィール</Link></li>
                <li><Link href="/partners">提携パートナー</Link></li>
              </ul>
            </li>
            <li><Link href="/#services" className="nav-item">Services</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

