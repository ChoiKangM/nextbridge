export const SITE_URL = 'https://nextbridge.vercel.app'

export const STATS = [
  { value: 500, label: '수강생', suffix: '+' },
  { value: 12, label: '협력 대학교', suffix: '개' },
  { value: 94, label: '취업 성공률', suffix: '%' },
  { value: 4, label: '주 완성 과정', suffix: '주' },
]

export const TARGET_GROUPS = [
  {
    icon: 'GraduationCap',
    title: '입학처 담당자',
    description: '웹 기반으로 학교를 소개하고 입시 결과를 정리하세요',
    bullets: [
      '지원자 포트폴리오 웹 페이지 제작',
      '입시 결과·통계 대시보드 구현',
      'QR코드 하나로 바로 공유 가능',
    ],
    color: 'indigo',
  },
  {
    icon: 'Briefcase',
    title: '취업 준비 대학생',
    description: 'AI로 나를 분석하고 웹으로 취업 경쟁력을 완성하세요',
    bullets: [
      '자기분석 → 직무분석 → 자소서 웹으로 완성',
      '채용담당자에게 링크 하나로 전달',
      'PPT보다 강렬한 나만의 포트폴리오',
    ],
    color: 'violet',
  },
  {
    icon: 'Rocket',
    title: '창업을 꿈꾸는 학생',
    description: '아이디어를 즉시 웹 MVP로 만들어 세상에 선보이세요',
    bullets: [
      '코딩 경험 없이도 서비스 구현 가능',
      '투자자·멘토에게 데모 사이트 제공',
      '4주 안에 실제 배포까지 완성',
    ],
    color: 'pink',
  },
  {
    icon: 'BookOpen',
    title: '교직원',
    description: '수업 자료와 연구 결과를 웹으로 더 효과적으로 전달하세요',
    bullets: [
      '강의 소개·연구 결과를 웹 페이지로',
      '학생들이 언제든 접근 가능한 자료',
      'PDF보다 인터랙티브한 교육 경험',
    ],
    color: 'emerald',
  },
]

export const CURRICULUM_WEEKS = [
  {
    week: 1,
    title: 'AI 도구 소개 & 바이브코딩 개념',
    goal: 'Claude Code, Cursor, v0 등 AI 코딩 도구를 익히고 바이브코딩 마인드셋을 형성합니다',
    deliverable: '첫 번째 웹 페이지 초안',
    topics: ['AI 코딩 도구 환경 설정', '바이브코딩이란?', '나의 첫 웹 페이지 만들기'],
  },
  {
    week: 2,
    title: '나만의 포트폴리오 웹사이트 구축',
    goal: '자신의 경험과 역량을 담은 포트폴리오 웹사이트를 완성합니다',
    deliverable: '완성된 포트폴리오 웹사이트',
    topics: ['포트폴리오 기획 & 구조 설계', 'AI와 함께 페이지 구현', '반응형 디자인 적용'],
  },
  {
    week: 3,
    title: '자기소개서 & 직무분석 웹 제작',
    goal: '취업에 활용할 수 있는 자기소개서와 직무분석 웹 페이지를 만듭니다',
    deliverable: '자소서 & 직무분석 웹 페이지',
    topics: ['AI로 자기분석 진행', '직무분석 웹 페이지 구현', '자기소개서 스토리텔링'],
  },
  {
    week: 4,
    title: '발표 & 실제 배포',
    goal: 'Vercel로 실제 인터넷에 배포하고 도메인을 연결합니다',
    deliverable: '실제 배포된 나만의 웹사이트',
    topics: ['Vercel 배포 실습', '커스텀 도메인 연결', '최종 발표 & 피드백'],
  },
]

export const OUTCOMES = [
  {
    id: 1,
    title: '취업 포트폴리오',
    type: '포트폴리오',
    university: 'OO대학교',
    description: 'UX 디자이너 취업을 위한 인터랙티브 포트폴리오',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    id: 2,
    title: '자기소개서 웹',
    type: '자소서',
    university: 'OO대학교',
    description: '마케터 직무를 위한 스토리텔링 자소서 웹',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 3,
    title: '직무분석 리포트',
    type: '직무분석',
    university: 'OO대학교',
    description: 'IT 기획자 직무를 심층 분석한 인터랙티브 리포트',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 4,
    title: '창업 아이디어 피칭 사이트',
    type: '창업',
    university: 'OO대학교',
    description: '투자자에게 보여주기 위한 스타트업 랜딩 페이지',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 5,
    title: '개발자 포트폴리오',
    type: '포트폴리오',
    university: 'OO대학교',
    description: '백엔드 개발자 취업을 위한 프로젝트 쇼케이스',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 6,
    title: '연구 결과 발표 웹',
    type: '교직원',
    university: 'OO대학교',
    description: '논문 연구 결과를 인터랙티브하게 제시하는 웹',
    color: 'from-violet-500 to-purple-600',
  },
]

export const OUTCOME_TYPE_COLORS: Record<string, string> = {
  포트폴리오: 'bg-indigo-100 text-indigo-700',
  자소서: 'bg-emerald-100 text-emerald-700',
  직무분석: 'bg-amber-100 text-amber-700',
  창업: 'bg-pink-100 text-pink-700',
  교직원: 'bg-violet-100 text-violet-700',
}
