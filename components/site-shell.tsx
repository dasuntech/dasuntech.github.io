import Link from "next/link";
import { ChevronDown, Mail, MapPin, Menu, Phone } from "lucide-react";
import { company, navigation } from "@/lib/site-data";

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="다선테크 홈페이지">
      <img src="/images/dasuntech-ci.png" alt="다선테크 CI" />
      <span>다선테크</span>
    </Link>
  );
}

function DesktopNavigation() {
  return (
    <nav className="desktop-nav" aria-label="주요 메뉴">
      {navigation.map((group) => (
        <div className="nav-group" key={group.label}>
          <Link href={group.href} className="nav-group-link">
            {group.label}
            <ChevronDown aria-hidden="true" />
          </Link>
          <div className="dropdown" role="menu">
            <div className="dropdown-heading">{group.label}</div>
            {group.items.map((item) => (
              <Link key={item.href} href={item.href} role="menuitem">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

function MobileNavigation() {
  return (
    <details className="mobile-nav">
      <summary aria-label="메뉴 열기">
        <Menu aria-hidden="true" />
        <span>메뉴</span>
      </summary>
      <div className="mobile-nav-panel">
        {navigation.map((group) => (
          <details key={group.label} className="mobile-nav-group">
            <summary>
              {group.label}
              <ChevronDown aria-hidden="true" />
            </summary>
            <div>
              {group.items.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        ))}
        <Link className="mobile-contact" href="/support/product-inquiry">
          문의하기
        </Link>
      </div>
    </details>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <DesktopNavigation />
        <Link className="header-contact" href="/support/product-inquiry">
          문의하기
        </Link>
        <MobileNavigation />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Brand />
          <p className="footer-intro">
            의료기기, AI 비전 검사, AI·IoT 홈케어 시스템을 개발하고 현장에
            적용합니다.
          </p>
        </div>
        <div className="footer-contact-list">
          <a href={`tel:${company.phone.replaceAll("-", "")}`}>
            <Phone aria-hidden="true" />
            <span>
              대표전화
              <strong>{company.phone}</strong>
            </span>
          </a>
          <a href={`mailto:${company.email}`}>
            <Mail aria-hidden="true" />
            <span>
              이메일
              <strong>{company.email}</strong>
            </span>
          </a>
        </div>
      </div>
      <div className="footer-addresses">
        <p>
          <MapPin aria-hidden="true" />
          <span>
            <strong>본사</strong> {company.headquarters}
          </span>
        </p>
        <p>
          <MapPin aria-hidden="true" />
          <span>
            <strong>부설연구소</strong> {company.laboratory}
          </span>
        </p>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} DASUN TECH. All rights reserved.</span>
        <span>사업자등록번호 {company.registration}</span>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
