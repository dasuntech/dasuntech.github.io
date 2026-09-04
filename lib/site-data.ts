export type NavItem = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  href: string;
  items: NavItem[];
};

export const navigation: NavGroup[] = [
  {
    label: "회사소개",
    href: "/company/overview",
    items: [
      { label: "회사소개", href: "/company/overview" },
      { label: "CEO 인사말", href: "/company/ceo" },
      { label: "회사연혁", href: "/company/history" },
      { label: "조직도", href: "/company/organization" },
      { label: "산업체 파트너", href: "/company/partners" },
    ],
  },
  {
    label: "의료 장비",
    href: "/medical/scube-fdg",
    items: [
      { label: "sCUBE FDG", href: "/medical/scube-fdg" },
      { label: "sCUBE RXN-P&F", href: "/medical/scube-rxn-pf" },
      { label: "sCUBE M", href: "/medical/scube-m" },
      { label: "sCUBE D", href: "/medical/scube-d" },
      { label: "Container Opener", href: "/medical/container-opener" },
      { label: "mCRI", href: "/medical/mcri" },
    ],
  },
  {
    label: "검사 기기",
    href: "/inspection/pdd",
    items: [{ label: "PDD", href: "/inspection/pdd" }],
  },
  {
    label: "AI / IoT",
    href: "/ai-iot/fall-prevention",
    items: [
      {
        label: "CCTV 낙상 방지 경보 시스템",
        href: "/ai-iot/fall-prevention",
      },
      { label: "자율주행 AI 로봇 햇살이", href: "/ai-iot/haetsali" },
    ],
  },
  {
    label: "고객 지원",
    href: "/support/news",
    items: [
      { label: "NEWS", href: "/support/news" },
      { label: "제품문의", href: "/support/product-inquiry" },
      { label: "기술문의", href: "/support/technical-inquiry" },
      { label: "자료실", href: "/support/downloads" },
      { label: "찾아오시는 길", href: "/support/location" },
    ],
  },
];

export const routeTitles: Record<string, string> = Object.fromEntries(
  navigation.flatMap((group) => group.items.map((item) => [item.href, item.label])),
);

export const achievements = [
  {
    date: "2026.01",
    text: "남양주 햇빛스마트요양원 AI 스마트로봇 ‘햇살이’ 정식 납품 · 구독 서비스 시작",
  },
  {
    date: "2025.06",
    text: "부산 동남권원자력의학원 방사성의약품 sCUBE D 자동분주장비 납품 (OEM 방식)",
  },
  {
    date: "2025.03",
    text: "남양주 햇빛스마트요양원 홈케어 AI 스마트로봇 ‘햇살이’ 서비스 시작",
  },
  {
    date: "2025.03",
    text: "남양주 햇빛스마트요양원과 노인복지 스마트 공동개발 MOU 체결",
  },
  {
    date: "2024.08",
    text: "헝가리 Volta Energy Solution Hungary 비전 AI 검사장치 납품 (OEM 방식)",
  },
  {
    date: "2023.05",
    text: "부산 퓨쳐켐 기장센터 sCUBE Dispenser 의약품 분주장비 납품 (OEM 방식)",
  },
  {
    date: "2023.04",
    text: "서울 원자력의학원 sCUBE M(mIBG 희귀암 치료제 합성장치) 의약품 제조장비 납품 (OEM 방식)",
  },
  {
    date: "2022.11",
    text: "중국 베이징 HTA sCUBE RXN & P&F 의약품 자동합성장비 납품 (OEM 방식)",
  },
  {
    date: "2022.09",
    text: "대구 경북대병원 sCUBE Dispenser 의약품 자동분주장비 납품 (OEM 방식)",
  },
  {
    date: "2021.05",
    text: "서울성모병원 포터블 Gamma 방사선 계측기 납품",
  },
  {
    date: "2020.05",
    text: "제주 제주대학교병원 sCUBE RXN & P&F 의약품 자동합성장비 납품 (OEM 방식)",
  },
  {
    date: "2019.04",
    text: "서울성모병원 sCUBE RXN & P&F 및 sCUBE FDG 의약품 자동합성장비 납품 (OEM 방식)",
  },
];

export const medicalProducts = {
  "scube-fdg": {
    name: "sCUBE FDG",
    category: "방사성의약품 자동합성장치",
    lead: "PET 진단용 방사성의약품의 합성·정제·제제 공정을 자동화하는 sCUBE 시스템입니다.",
    image: "/images/scube-fdg.png",
    imageAlt: "sCUBE FDG 자동합성장치 실제 제품",
    brochure: "/brochures/Dasuntech_sCUBE_FDG_Brochure.pdf",
    points: [
      "방사성의약품 제조 공정 자동화",
      "합성·정제·제제 공정 구성",
      "의료 현장 납품 및 운영 경험 기반",
    ],
  },
  "scube-rxn-pf": {
    name: "sCUBE RXN-P&F",
    category: "방사성의약품 자동합성장치",
    lead: "질병의 조기 진단과 치료 평가에 활용되는 PET 방사성의약품 제조 공정을 위한 자동합성장치입니다.",
    image: "/images/scube-rxn-pf.png",
    imageAlt: "sCUBE RXN-P&F 자동합성장치 실제 제품",
    brochure: "/brochures/Dasuntech_sCUBE_RXN_PF_Brochure.pdf",
    points: [
      "방사성의약품 합성·정제 공정",
      "PET 방사성의약품 제조 대응",
      "국내외 의료기관 납품 경험 기반",
    ],
  },
  "scube-m": {
    name: "sCUBE M",
    category: "방사성의약품 자동합성장치",
    lead: "mIBG 희귀암 치료제 등 방사성의약품 제조를 위해 구성된 sCUBE 계열 합성장치입니다.",
    image: "/images/scube-m.png",
    imageAlt: "sCUBE M 자동합성장치 실제 제품",
    brochure: "/brochures/Dasuntech_sCUBE_M_Brochure.pdf",
    points: [
      "방사성의약품 제조 공정 대응",
      "의료기관 운영 환경을 고려한 시스템 구성",
      "2023년 원자력의학원 납품 실적",
    ],
  },
  "scube-d": {
    name: "sCUBE D",
    category: "방사성의약품 자동분주장치",
    lead: "생산된 PET 방사성의약품을 환자에게 전달 가능한 형태로 정밀 분주하는 자동화 장치입니다.",
    image: "/images/scube-d-field-v2.png",
    imageAlt: "sCUBE D 자동분주장치 실제 설치 현장",
    brochure: "/brochures/Dasuntech_sCUBE_D_Brochure.pdf",
    points: [
      "방사성의약품 자동분주",
      "당일 생산 의약품의 최종 분주 공정",
      "의료기관 납품 및 운영 경험 기반",
    ],
  },
  "container-opener": {
    name: "Container Opener",
    category: "방사성의약품 관련 장비",
    lead: "방사성의약품 제조·운영 공정을 지원하는 컨테이너 오픈 장비입니다.",
    image: "/images/container-opener.png",
    imageAlt: "Container Opener 제품 이미지",
    brochure: null,
    points: [
      "방사성의약품 관련 공정 지원",
      "의료 현장 운용을 고려한 장비 구성",
      "제품 상세 사양은 문의를 통해 안내",
    ],
  },
  mcri: {
    name: "mCRI",
    category: "방사능 측정장치",
    lead: "의료 및 연구 현장의 방사능 측정 업무를 지원하는 장치입니다.",
    image: "/images/mcri.png",
    imageAlt: "mCRI 다채널 방사선 검출기 실제 제품",
    brochure: null,
    points: [
      "방사능 측정 업무 지원",
      "의료·연구 현장 활용",
      "제품 상세 사양은 문의를 통해 안내",
    ],
  },
} as const;

export const allStaticRoutes = navigation.flatMap((group) =>
  group.items.map((item) => {
    const [section, slug] = item.href.split("/").filter(Boolean);
    return { section, slug };
  }),
);

export const company = {
  name: "다선테크",
  ceo: "김종민",
  founded: "2021년 11월",
  registration: "560-87-02457",
  phone: "02-705-8923",
  email: "dasuntech.inc@gmail.com",
  headquarters:
    "경기도 성남시 중원구 사기막골로 124, SKn타워 비즈센터동 513호",
  laboratory:
    "서울시 마포구 백범로 35, 서강대학교 떼이야르관 705호 융합의료기기 연구소",
};
