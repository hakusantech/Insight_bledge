"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
        
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'nav-mobile-open' : ''}`} style={{ display: 'flex', alignItems: 'center' }}>
          <ul className="nav-list">
            <li className="nav-item-dropdown">
              <Link 
                href="/about" 
                className="nav-item"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                About Us
              </Link>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'dropdown-mobile-open' : ''}`}>
                <li><Link href="/representative" onClick={() => {setIsMobileMenuOpen(false); setIsDropdownOpen(false);}}>代表挨拶・プロフィール</Link></li>
                <li><Link href="/partners" onClick={() => {setIsMobileMenuOpen(false); setIsDropdownOpen(false);}}>提携パートナー</Link></li>
              </ul>
            </li>
            <li><Link href="/#services" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}