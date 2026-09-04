import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  CircuitBoard,
  Download,
  HeartPulse,
  Mail,
  RadioTower,
  ShieldCheck,
} from "lucide-react";
import { LocationTabs } from "@/components/location-tabs";
import downloadEntriesJson from "@/public/data/downloads.json";
import newsEntriesJson from "@/public/data/news.json";
import {
  achievements,
  company,
  medicalProducts,
  navigation,
  routeTitles,
} from "@/lib/site-data";

type PageProps = { section: string; slug: string };

type BoardEntry = {
  title: string;
  date: string;
  description?: string;
  url?: string;
};

const sectionLabels: Record<string, string> = {
  company: "회사소개",
  medical: "의료 장비",
  inspection: "검사 기기",
  "ai-iot": "AI / IoT",
  support: "고객 지원",
};

function PageHero({
  section,
  title,
  lead,
}: {
  section: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <div className="breadcrumbs">
          <Link href="/">홈</Link>
          <ChevronRight aria-hidden="true" />
          <span>{sectionLabels[section]}</span>
        </div>
        <p className="page-eyebrow">DASUN TECH</p>
        <h1>{title}</h1>
        <p className="page-lead">{lead}</p>
      </div>
    </section>
  );
}

function SubNavigation({ section, slug }: PageProps) {
  const group = navigation.find((item) => item.href.startsWith(`/${section}/`));
  if (!group) return null;

  return (
    <nav className="sub-navigation" aria-label={`${group.label} 하위 메뉴`}>
      <div>
        {group.items.map((item) => (
          <Link
            key={item.href}
            className={item.href === `/${section}/${slug}` ? "active" : undefined}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function CompanyOverview() {
  return (
    <>
      <PageHero
        section="company"
        title="회사소개"
        lead="방사성의약품 제조장치와 AI 검사·홈케어 기술을 현장에 연결합니다."
      />
      <SubNavigation section="company" slug="overview" />
      <main className="detail-main">
        <section className="intro-split">
          <div className="intro-heading">
            <p className="section-kicker">ABOUT DASUN TECH</p>
            <h2>의료와 산업 현장의 경험을 기술로 축적합니다.</h2>
          </div>
          <div className="intro-body">
            <p>
              다선테크는 국내 의료기관에 방사성의약품 자동합성·분주장치를
              공급한 경험과 AI 비전검사 시스템의 현장 납품·운영 경험을 바탕으로
              의료기기, 정밀 제조 검사, AI·IoT 홈케어 솔루션을 개발합니다.
            </p>
            <p>
              장비 설계부터 소프트웨어, 현장 설치와 운영 지원까지 실제 사용
              환경을 중심으로 기술을 구현합니다.
            </p>
          </div>
        </section>

        <section className="fact-strip" aria-label="회사 기본 정보">
          <div>
            <span>설립</span>
            <strong>{company.founded}</strong>
          </div>
          <div>
            <span>대표이사</span>
            <strong>{company.ceo}</strong>
          </div>
          <div>
            <span>사업영역</span>
            <strong>의료기기 · AI 검사 · 홈케어</strong>
          </div>
          <div>
            <span>부설연구소</span>
            <strong>서강대학교</strong>
          </div>
        </section>

        <section className="business-detail-grid">
          <article>
            <span>01</span>
            <HeartPulse aria-hidden="true" />
            <h3>방사성의약품 제조장치</h3>
            <p>
              PET 방사성의약품의 합성·정제·제제 및 정밀 분주 공정을 위한
              의료장비를 개발하고 공급합니다.
            </p>
          </article>
          <article>
            <span>02</span>
            <CircuitBoard aria-hidden="true" />
            <h3>AI 비전 자동검사</h3>
            <p>
              고속 라인스캔 카메라와 AI 분석을 이용해 생산 소재의 표면 결함을
              실시간으로 검출하고 분류합니다.
            </p>
          </article>
          <article>
            <span>03</span>
            <RadioTower aria-hidden="true" />
            <h3>AI·IoT 홈케어</h3>
            <p>
              CCTV 영상 분석과 자율주행 로봇을 연계해 위험 상황을 감지하고
              현장 대응을 지원합니다.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

function CeoMessage() {
  return (
    <>
      <PageHero
        section="company"
        title="CEO 인사말"
        lead="현장에서 검증되는 기술과 책임 있는 지원으로 신뢰를 쌓겠습니다."
      />
      <SubNavigation section="company" slug="ceo" />
      <main className="detail-main">
        <section className="ceo-section">
          <div className="ceo-mark" aria-hidden="true">
            <span>DASUN</span>
            <strong>TECH</strong>
          </div>
          <div className="ceo-copy">
            <p className="section-kicker">MESSAGE FROM CEO</p>
            <h2>기술을 현실의 가치로 연결하겠습니다.</h2>
            <p>
              다선테크는 기계공학 기반의 엔지니어링 역량을 바탕으로 2017년부터
              방사성의약품 합성장치의 의료기관 납품을 시작하며 국내 상업용
              자동합성장치 시장을 개척해 왔습니다.
            </p>
            <p>
              2024년에는 헝가리 Volta Energy Solution Hungary에 AI
              비전검사장치를 공급하며 카메라와 AI를 활용한 검사기기 분야로
              사업을 확장했습니다. 최근에는 AGV 자율주행로봇과 CCTV 영상 분석을
              결합한 낙상방지 스마트 로봇을 통해 돌봄 현장의 안전과 운영 효율을
              높이는 데 집중하고 있습니다.
            </p>
            <p>
              앞으로도 실제 현장에서 필요한 기술을 꾸준히 개발하고, 설치부터
              운영과 기술지원까지 책임 있게 함께하는 기업이 되겠습니다.
            </p>
            <div className="ceo-signature">
              <span>다선테크 대표이사</span>
              <strong>김종민</strong>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function History() {
  return (
    <>
      <PageHero
        section="company"
        title="회사연혁"
        lead="의료장비에서 AI 검사와 스마트 케어까지, 현장 납품 경험을 이어가고 있습니다."
      />
      <SubNavigation section="company" slug="history" />
      <main className="detail-main history-main">
        <div className="history-heading">
          <p className="section-kicker">MILESTONES</p>
          <h2>주요 납품 실적</h2>
          <p>최신 회사소개서 기준 · 최신순</p>
        </div>
        <ol className="timeline">
          {achievements.map((item, index) => (
            <li key={`${item.date}-${index}`}>
              <time>{item.date}</time>
              <span aria-hidden="true" />
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}

const teams = [
  {
    name: "의료장비 사업팀",
    description: "방사성의약품자동합성장치 및 분주장치 설치·운영·유지보수 및 기술지원",
    icon: HeartPulse,
  },
  {
    name: "검사장치 사업팀",
    description: "박판 AI 비전 검사 장비 설계·소프트웨어 및 딥러닝 모델 개발",
    icon: CircuitBoard,
  },
  {
    name: "AI로봇·IoT 사업팀",
    description: "CCTV 낙상방지 시스템 · 자율주행 AI 로봇 햇살이 · 홈케어 시스템",
    icon: RadioTower,
  },
];

function Organization() {
  return (
    <>
      <PageHero
        section="company"
        title="조직도"
        lead="연구개발과 현장 기술지원이 긴밀하게 연결된 실행 중심 조직입니다."
      />
      <SubNavigation section="company" slug="organization" />
      <main className="detail-main">
        <section className="org-chart" aria-label="다선테크 조직도">
          <div className="org-head">
            <span>다선테크</span>
            <strong>대표이사 / 개발소장</strong>
          </div>
          <div className="org-line" aria-hidden="true" />
          <div className="org-teams">
            {teams.map((team) => {
              const Icon = team.icon;
              return (
                <article key={team.name}>
                  <Icon aria-hidden="true" />
                  <h2>{team.name}</h2>
                  <p>{team.description}</p>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

function Partners() {
  return (
    <>
      <PageHero
        section="company"
        title="산업체 파트너"
        lead="의료기관, 연구기관, 제조기업과 함께 현장 중심의 기술을 만들어갑니다."
      />
      <SubNavigation section="company" slug="partners" />
      <main className="detail-main">
        <section className="partners-section">
          <div>
            <p className="section-kicker">OUR PARTNERS</p>
            <h2>기술은 협업을 통해 현장에 정착합니다.</h2>
            <p>
              다선테크는 의료, 연구, 제조 분야의 파트너들과 납품·운영 경험을
              쌓고 공동 기술개발을 이어가고 있습니다.
            </p>
          </div>
          <figure>
            <img
              src="/images/partners.png"
              alt="한국원자력의학원, 이대서울병원, 서울성모병원, 햇빛스마트요양원, 동남권원자력의학원, FutureChem, Volta Energy Solutions, 서강대학교 산학협력단 파트너 로고"
            />
          </figure>
        </section>
      </main>
    </>
  );
}

function MedicalProduct({ slug }: { slug: string }) {
  const product = medicalProducts[slug as keyof typeof medicalProducts];
  if (!product) return null;
  const productName = product.name;

  return (
    <>
      <PageHero
        section="medical"
        title={product.name}
        lead={product.category}
      />
      <SubNavigation section="medical" slug={slug} />
      <main className="detail-main">
        <section
          className={`product-visual ${product.image ? "" : "no-image"} ${slug === "mcri" ? "mcri-product" : "enlarged-product"}`}
        >
          <div className="product-copy">
            <p className="section-kicker">MEDICAL EQUIPMENT</p>
            <h2>{product.name}</h2>
            <p className="product-category">{product.category}</p>
            <p className="product-lead">{product.lead}</p>
            <ul className="check-list">
              {product.points.map((point) => (
                <li key={point}>
                  <Check aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="product-actions">
              <Link className="primary-link" href="/support/product-inquiry">
                제품 문의하기 <ArrowRight aria-hidden="true" />
              </Link>
              {product.brochure ? (
                <a
                  className="brochure-link"
                  href={product.brochure}
                  target="_blank"
                  rel="noreferrer"
                >
                  제품 브로셔 (PDF) <Download aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
          {product.image ? (
            <figure>
              <img src={product.image} alt={product.imageAlt} />
              <figcaption>실제 제품 이미지</figcaption>
            </figure>
          ) : (
            <div className="product-nameplate" aria-label={`${productName} 제품 안내`}>
              <span>DASUN TECH</span>
              <strong>{productName}</strong>
              <p>상세 제품 이미지와 사양은 문의를 통해 안내드립니다.</p>
            </div>
          )}
        </section>
        <section className="medical-process">
          <div>
            <p className="section-kicker">FIELD-ORIENTED ENGINEERING</p>
            <h2>설치 이후의 운영까지 고려합니다.</h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              <strong>현장 협의</strong>
              <p>사용 환경과 운영 조건을 확인합니다.</p>
            </li>
            <li>
              <span>02</span>
              <strong>설치·적용</strong>
              <p>현장 조건에 맞춰 장비를 설치하고 운용을 지원합니다.</p>
            </li>
            <li>
              <span>03</span>
              <strong>기술지원</strong>
              <p>유지보수와 운영 관련 기술문의를 지원합니다.</p>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}

function PddPage() {
  const features = [
    "라인스캔 카메라 기반 이미지 획득",
    "실시간 결함 모니터링",
    "결함별 스냅샷 저장",
    "유형·크기별 결함 구분",
    "결함 발생 알림",
    "분석 모니터를 통한 현장 확인",
  ];

  return (
    <>
      <PageHero
        section="inspection"
        title="PDD"
        lead="생산 소재의 표면 결함을 실시간으로 검출하고 분석하는 AI 비전검사 시스템입니다."
      />
      <SubNavigation section="inspection" slug="pdd" />
      <main className="detail-main">
        <section className="pdd-hero">
          <figure>
            <img
              src="/images/pdd-camera-interior-03.jpg"
              alt="생산라인 내부에 설치된 PDD 카메라 및 조명 장치"
            />
            <figcaption>생산라인 내부 PDD 카메라 촬영 장치</figcaption>
          </figure>
          <div>
            <p className="section-kicker">PLATER DEFECT DETECTION</p>
            <h2>현장에서 결함을 빠르게 확인합니다.</h2>
            <p>
              PDD는 생산라인에서 획득한 이미지를 분석해 소재 표면의 결함을
              실시간으로 모니터링하고, 결함 이미지와 유형·크기 정보를 확인할 수
              있도록 구성된 검사 시스템입니다.
            </p>
            <ul className="feature-grid">
              {features.map((feature) => (
                <li key={feature}>
                  <ShieldCheck aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="system-flow">
          <div className="flow-heading">
            <p className="section-kicker">SYSTEM FLOW</p>
            <h2>PDD 시스템 구성</h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              <strong>라인스캔 카메라</strong>
              <p>생산 소재의 표면 이미지를 연속 획득</p>
            </li>
            <li>
              <span>02</span>
              <strong>검출장비</strong>
              <p>획득 이미지와 결함 데이터를 처리</p>
            </li>
            <li>
              <span>03</span>
              <strong>분석 모니터</strong>
              <p>결함 유형·크기·스냅샷과 알림 확인</p>
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}

function FallPrevention() {
  return (
    <>
      <PageHero
        section="ai-iot"
        title="CCTV 낙상 방지 Edge Device"
        lead="CCTV 영상을 AI로 분석해 위험 행동을 감지하고 현장 대응을 지원합니다."
      />
      <SubNavigation section="ai-iot" slug="fall-prevention" />
      <main className="detail-main">
        <section className="iot-visual">
          <div>
            <p className="section-kicker">AI FALL PREVENTION</p>
            <h2>위험 징후를 화면에서 즉시 확인합니다.</h2>
            <p>
              다중 CCTV 영상을 기반으로 어르신의 자세와 움직임을 분석하고,
              침상 이탈 등 위험 상황이 감지되면 모니터 화면에 경고 문구와
              팝업을 표시합니다.
            </p>
            <blockquote>“어르신이 침대에 걸터앉아계십니다.”</blockquote>
          </div>
          <figure>
            <img
              src="/images/fall-monitoring.png"
              alt="다중 CCTV 영상에 AI 인식 박스와 어르신이 침대에 걸터앉아계십니다 경고 팝업이 표시된 화면"
            />
            <figcaption>CCTV 낙상방지 실제 모니터링 화면</figcaption>
          </figure>
        </section>
        <section className="system-flow">
          <div className="flow-heading">
            <p className="section-kicker">RESPONSE FLOW</p>
            <h2>감지부터 현장 대응까지</h2>
          </div>
          <ol className="five-step">
            {["CCTV 영상", "AI Pose·행동 분석", "위험상황 감지", "경고·알림", "햇살이 이동 및 대응"].map(
              (step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </li>
              ),
            )}
          </ol>
        </section>
      </main>
    </>
  );
}

function Haetsali() {
  const functions = [
    "AGV 기반 병실 자동 순회",
    "CCTV AI 모션 감지 연계",
    "위험 상황 경고 및 보호사 호출 지원",
    "PC용 앱 Healthmon을 통한 실시간 가동·상황 확인",
    "환자 바이탈 체크 및 기록 지원",
    "대화·음악·이야기 챗봇 기능",
  ];

  return (
    <>
      <PageHero
        section="ai-iot"
        title="자율주행 AI 로봇 햇살이"
        lead="낙상 위험을 감지하면 현장으로 이동해 경고와 돌봄 대응을 지원하는 케어로봇입니다."
      />
      <SubNavigation section="ai-iot" slug="haetsali" />
      <main className="detail-main">
        <section className="robot-feature">
          <div className="robot-collage">
            <figure className="robot-photo">
              <img src="/images/haetsali-transparent.png" alt="자율주행 AI 로봇 햇살이 정면" />
              <figcaption>자율주행 AI 로봇 햇살이</figcaption>
            </figure>
            <figure className="location-photo">
              <img
                src="/images/haetsali-operation.jpg"
                alt="햇빛스마트요양원 내부에서 운행 중인 자율주행 AI 로봇 햇살이"
              />
              <figcaption>실제 운행 장소 · 햇빛스마트요양원</figcaption>
            </figure>
          </div>
          <div>
            <p className="section-kicker">AI CARE ROBOT</p>
            <h2>자율주행과 영상 분석을 하나의 대응 체계로 연결합니다.</h2>
            <p>
              햇살이는 CCTV 영상 분석 시스템과 연계해 위험 상황이 발생한
              호실로 이동하고, 음성 경고와 현장 모니터링을 통해 보호사의 대응을
              지원합니다.
            </p>
            <ul className="check-list">
              {functions.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

function EmptyBoard({ type }: { type: "news" | "downloads" }) {
  const isNews = type === "news";
  const rawEntries = (isNews ? newsEntriesJson : downloadEntriesJson) as BoardEntry[];
  const entries = [...rawEntries]
    .filter(
      (entry) =>
        entry &&
        typeof entry.title === "string" &&
        entry.title.trim().length > 0 &&
        typeof entry.date === "string" &&
        entry.date.trim().length > 0,
    )
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        section="support"
        title={isNews ? "NEWS" : "자료실"}
        lead={
          isNews
            ? "다선테크의 새로운 소식과 현장 이야기를 전합니다."
            : "제품과 기술 관련 자료를 확인할 수 있습니다."
        }
      />
      <SubNavigation section="support" slug={isNews ? "news" : "downloads"} />
      <main className="detail-main">
        <section className="board-shell">
          <div className="board-head">
            <span>번호</span>
            <strong>{isNews ? "제목" : "자료명"}</strong>
            <span>등록일</span>
            <span aria-hidden="true" />
          </div>
          {entries.length === 0 ? (
            <div className="empty-state">
              {isNews ? <Building2 aria-hidden="true" /> : <Download aria-hidden="true" />}
              <h2>등록된 {isNews ? "소식이" : "자료가"} 없습니다.</h2>
              <p>새로운 내용이 준비되는 대로 이곳에서 안내드리겠습니다.</p>
            </div>
          ) : (
            <ol className="board-list">
              {entries.map((entry, index) => {
                const rowContent = (
                  <>
                    <span className="board-number">{entries.length - index}</span>
                    <span className="board-copy">
                      <strong>{entry.title}</strong>
                      {entry.description ? <small>{entry.description}</small> : null}
                    </span>
                    <time dateTime={entry.date}>{entry.date}</time>
                    <span className="board-action" aria-hidden="true">
                      {entry.url ? (
                        isNews ? <ArrowRight /> : <Download />
                      ) : null}
                    </span>
                  </>
                );

                return (
                  <li key={`${entry.date}-${entry.title}-${index}`}>
                    {entry.url ? (
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noreferrer"
                        download={isNews ? undefined : true}
                      >
                        {rowContent}
                      </a>
                    ) : (
                      <div>{rowContent}</div>
                    )}
                  </li>
                );
              })}
            </ol>
          )}
        </section>
      </main>
    </>
  );
}

function Inquiry({ technical = false }: { technical?: boolean }) {
  const title = technical ? "기술문의" : "제품문의";
  const subject = encodeURIComponent(`[다선테크 ${title}] 문의드립니다`);
  return (
    <>
      <PageHero
        section="support"
        title={title}
        lead={
          technical
            ? "장비 운영과 기술지원에 관한 문의를 남겨주세요."
            : "제품 도입과 적용에 관한 문의를 남겨주세요."
        }
      />
      <SubNavigation
        section="support"
        slug={technical ? "technical-inquiry" : "product-inquiry"}
      />
      <main className="detail-main">
        <section className="inquiry-panel">
          <div>
            <p className="section-kicker">CONTACT DASUN TECH</p>
            <h2>{title} 안내</h2>
            <p>
              문의 제품과 현장, 요청 내용을 이메일에 적어 보내주시면 확인 후
              연락드리겠습니다.
            </p>
            <ul>
              <li>문의 대상 제품 또는 시스템명</li>
              <li>설치·운영 예정 현장</li>
              <li>요청 내용과 회신 받을 연락처</li>
            </ul>
          </div>
          <div className="contact-card">
            <Mail aria-hidden="true" />
            <span>이메일 문의</span>
            <strong>{company.email}</strong>
            <a href={`mailto:${company.email}?subject=${subject}`}>
              이메일 작성하기 <ArrowRight aria-hidden="true" />
            </a>
            <hr />
            <span>대표전화</span>
            <strong>{company.phone}</strong>
          </div>
        </section>
      </main>
    </>
  );
}

function Location() {
  return (
    <>
      <PageHero
        section="support"
        title="찾아오시는 길"
        lead="본사와 부설연구소 위치를 선택해 확인할 수 있습니다."
      />
      <SubNavigation section="support" slug="location" />
      <main className="detail-main">
        <LocationTabs />
      </main>
    </>
  );
}

export function DetailPage({ section, slug }: PageProps) {
  if (section === "company") {
    if (slug === "overview") return <CompanyOverview />;
    if (slug === "ceo") return <CeoMessage />;
    if (slug === "history") return <History />;
    if (slug === "organization") return <Organization />;
    if (slug === "partners") return <Partners />;
  }

  if (section === "medical") return <MedicalProduct slug={slug} />;
  if (section === "inspection" && slug === "pdd") return <PddPage />;
  if (section === "ai-iot" && slug === "fall-prevention") return <FallPrevention />;
  if (section === "ai-iot" && slug === "haetsali") return <Haetsali />;
  if (section === "support") {
    if (slug === "news") return <EmptyBoard type="news" />;
    if (slug === "downloads") return <EmptyBoard type="downloads" />;
    if (slug === "product-inquiry") return <Inquiry />;
    if (slug === "technical-inquiry") return <Inquiry technical />;
    if (slug === "location") return <Location />;
  }

  return null;
}

export function getPageTitle(section: string, slug: string) {
  return routeTitles[`/${section}/${slug}`];
}
