import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CircuitBoard,
  HeartPulse,
  MapPin,
  RadioTower,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { achievements, company } from "@/lib/site-data";

const businesses = [
  {
    number: "01",
    title: "의료 장비",
    subtitle: "방사성의약품 자동합성·분주장치",
    description:
      "PET 방사성의약품의 합성·정제·제제 및 정밀 분주 공정을 위한 의료장비를 개발합니다.",
    href: "/medical/scube-fdg",
    icon: HeartPulse,
    imageClass: "medical-business-image",
    image: "/images/scube-synthesis.png",
    alt: "다선테크 방사성의약품 자동합성장치",
  },
  {
    number: "02",
    title: "검사 기기",
    subtitle: "PDD AI 비전검사 시스템",
    description:
      "라인스캔 카메라와 AI 분석을 이용해 생산 소재의 표면 결함을 실시간으로 확인합니다.",
    href: "/inspection/pdd",
    icon: CircuitBoard,
    imageClass: "pdd-business-image",
    image: "/images/pdd-camera-interior-02.jpg",
    alt: "생산라인 내부에 설치된 PDD 카메라 촬영 장치",
  },
  {
    number: "03",
    title: "AI / IoT",
    subtitle: "낙상방지·자율주행 케어로봇",
    description:
      "CCTV 영상 분석과 자율주행 AI 로봇 햇살이를 연계해 돌봄 현장의 안전 대응을 지원합니다.",
    href: "/ai-iot/fall-prevention",
    icon: RadioTower,
    imageClass: "cctv-business-image",
    image: "/images/fall-monitoring.png",
    alt: "CCTV 낙상방지 다중 모니터링 화면",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="home-hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">MEDICAL · VISION AI · CARE ROBOTICS</p>
              <h1>
                의료와 산업 현장을
                <br />
                <span>하나의 기술로 연결합니다.</span>
              </h1>
              <p className="hero-description">
                방사성의약품 제조장치부터 AI 비전검사, 낙상방지 케어로봇까지
                다선테크는 현장에서 작동하는 기술을 만듭니다.
              </p>
              <div className="hero-actions">
                <Link className="primary-link" href="/company/overview">
                  다선테크 소개 <ArrowRight aria-hidden="true" />
                </Link>
                <Link className="secondary-link" href="/support/product-inquiry">
                  제품 문의
                </Link>
              </div>
              <div className="hero-facts" aria-label="다선테크 핵심 정보">
                <div>
                  <strong>3</strong>
                  <span>핵심 사업영역</span>
                </div>
                <div>
                  <strong>2019–2026</strong>
                  <span>주요 납품 실적</span>
                </div>
                <div>
                  <strong>R&amp;D</strong>
                  <span>서강대학교 부설연구소</span>
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-label="다선테크 주요 제품과 현장 이미지">
              <div className="hero-blue-field" />
              <figure className="hero-device">
                <img
                  src="/images/scube-rxn-pf.png"
                  alt="방사성의약품 자동합성장치 sCUBE RXN-P&F"
                />
                <figcaption>
                  <span>MEDICAL EQUIPMENT</span>
                  <strong>sCUBE System</strong>
                </figcaption>
              </figure>
              <figure className="hero-pdd">
                <img src="/images/pdd-field.png" alt="생산라인 PDD 검사 장비" />
                <figcaption>PDD · Vision AI</figcaption>
              </figure>
              <figure className="hero-robot">
                <img src="/images/haetsali-transparent.png" alt="자율주행 AI 로봇 햇살이" />
                <figcaption>AI Robot · 햇살이</figcaption>
              </figure>
              <div className="hero-label">
                <span>FIELD PROVEN</span>
                <strong>현장 중심의 기술</strong>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#business">
            <span>SCROLL</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="business-section" id="business">
          <div className="section-heading">
            <div>
              <p className="section-kicker">OUR BUSINESS</p>
              <h2>현장의 문제를 이해하는 세 가지 기술 영역</h2>
            </div>
            <p>
              제품 개발에 머무르지 않고 설치, 운영, 기술지원까지 실제 현장을
              중심으로 솔루션을 제공합니다.
            </p>
          </div>
          <div className="business-grid">
            {businesses.map((business) => {
              const Icon = business.icon;
              return (
                <Link href={business.href} key={business.number} className="business-card">
                  <div className={`business-image ${business.imageClass}`}>
                    <img src={business.image} alt={business.alt} />
                    <span>{business.number}</span>
                  </div>
                  <div className="business-card-copy">
                    <Icon aria-hidden="true" />
                    <p>{business.subtitle}</p>
                    <h3>{business.title}</h3>
                    <span>{business.description}</span>
                    <strong>
                      자세히 보기 <ArrowUpRight aria-hidden="true" />
                    </strong>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="ai-showcase">
          <div className="ai-showcase-copy">
            <p className="section-kicker">AI / IoT CARE SYSTEM</p>
            <h2>위험을 감지하고, 현장으로 이동하고, 대응을 연결합니다.</h2>
            <p>
              CCTV 영상에서 위험 행동을 감지하면 자율주행 AI 로봇 햇살이가
              해당 호실로 이동해 경고와 보호사 호출을 지원합니다.
            </p>
            <ol>
              <li><span>01</span> CCTV 영상 분석</li>
              <li><span>02</span> 위험상황 감지</li>
              <li><span>03</span> 햇살이 이동 및 대응</li>
            </ol>
            <Link className="text-link" href="/ai-iot/fall-prevention">
              낙상방지 시스템 보기 <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="ai-showcase-visual">
            <figure className="monitor-frame">
              <img
                src="/images/fall-monitoring.png"
                alt="CCTV 다중 모니터링 및 어르신이 침대에 걸터앉아계십니다 경고 화면"
              />
              <figcaption>어르신이 침대에 걸터앉아계십니다.</figcaption>
            </figure>
            <figure className="ai-robot-cutout">
              <img src="/images/haetsali-transparent.png" alt="자율주행 AI 로봇 햇살이" />
            </figure>
          </div>
        </section>

        <section className="achievement-section">
          <div className="achievement-intro">
            <p className="section-kicker">TRACK RECORD</p>
            <h2>주요 납품 실적</h2>
            <p>의료기관과 산업 현장에서 쌓은 최근 실적입니다.</p>
            <Link className="text-link" href="/company/history">
              전체 실적 보기 <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <ol className="achievement-list">
            {achievements.slice(0, 5).map((item, index) => (
              <li key={`${item.date}-${index}`}>
                <time>{item.date}</time>
                <p>{item.text}</p>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="partner-strip">
          <div>
            <p className="section-kicker">PARTNERS</p>
            <h2>산업체 파트너</h2>
            <p>의료·연구·제조 현장의 파트너와 함께 기술을 발전시킵니다.</p>
            <Link className="text-link" href="/company/partners">
              파트너 보기 <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <figure>
            <img
              src="/images/volta-energy-solutions.jpg"
              alt="Volta Energy Solutions 로고"
            />
          </figure>
        </section>

        <section className="home-contact">
          <div>
            <p className="section-kicker">CONTACT</p>
            <h2>도입과 기술지원이 필요하신가요?</h2>
            <p>현장과 문의 내용을 알려주시면 확인 후 안내드리겠습니다.</p>
            <div className="home-contact-actions">
              <Link className="primary-link light" href="/support/product-inquiry">
                제품 문의하기 <ArrowRight aria-hidden="true" />
              </Link>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a href={`tel:${company.phone.replaceAll("-", "")}`}>{company.phone}</a>
            </div>
          </div>
          <Link className="location-quick" href="/support/location">
            <MapPin aria-hidden="true" />
            <span>본사 · 부설연구소</span>
            <strong>찾아오시는 길</strong>
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
