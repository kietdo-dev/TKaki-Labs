'use client';

import { useEffect, useRef, useState } from 'react';
import { SITE_DATA as data } from '@/lib/content';
import { Buy } from '@/components/shared/Shopee';

const links = [
  ['#san-pham', 'Sản phẩm'],
  ['#bang-size', 'Bảng size'],
  ['#ve-tkaki', 'Về TKaki-Labs'],
  ['#lien-he', 'Liên hệ'],
] as const;

function Navigation({ onNavigate }: { onNavigate: () => void }) {
  return (
    <>
      {links.map(([href, label]) => (
        <a href={href} onClick={onNavigate} key={href}>
          {label}
        </a>
      ))}
    </>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="draft-bar">
        Bản nháp <span>Thông tin sản phẩm đang được bổ sung</span>
      </div>
      <header className="header">
        <div className="header-inner">
          <a href="#" className="logo" aria-label="TKaki-Labs — Trang chủ">
            <img src="/assets/logo.png" alt="TKaki-Labs" width={180} height={180} />
          </a>
          <nav className="desktop-nav" aria-label="Điều hướng chính">
            <Navigation onNavigate={closeMenu} />
          </nav>
          <div className="header-actions">
            <div id="header-buy">
              <Buy url={data.links.shopeeShop} />
            </div>
            <button
              ref={toggleRef}
              className="menu-toggle"
              aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Điều hướng trên điện thoại"
          hidden={!menuOpen}
        >
          <Navigation onNavigate={closeMenu} />
        </nav>
      </header>
    </>
  );
}
