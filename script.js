const STORAGE_KEYS = {
  lang: "seoul-handbook-lang",
  currency: "seoul-handbook-currency",
  checklist: "seoul-handbook-checklist-v3",
  page: "seoul-handbook-page",
};

const PAGE_IDS = ["overview", "flights", "hotel", "hanbok", "route", "budget", "notes"];

const state = {
  lang: localStorage.getItem(STORAGE_KEYS.lang) || "zh-Hant",
  currency: localStorage.getItem(STORAGE_KEYS.currency) || "TWD",
  page: PAGE_IDS.includes(localStorage.getItem(STORAGE_KEYS.page)) ? localStorage.getItem(STORAGE_KEYS.page) : "overview",
};

const rates = {
  KRW: { symbol: "₩", krwPerUnit: 1 },
  TWD: { symbol: "NT$", krwPerUnit: 41.8 },
  CNY: { symbol: "¥", krwPerUnit: 186.5 },
};

const t = {
  "zh-Hant": {
    languageSwitcher: "語言",
    currencySwitcher: "幣別",
    heroKicker: "Seoul travel handbook",
    heroTitle: "首爾旅行 2026",
    heroSubtitle: "2026 年 5 月 · 首爾旅行手冊",
    heroDates: "2026 / 05 / 15 - 2026 / 05 / 20",
    heroDestinations: "弘大 · 北村韓屋村 · 景福宮 · 安國 · 首爾",
    keyInfoTitle: "今日 / 重點資訊",
    jumpLinksTitle: "快速切換",
    navOverview: "總覽",
    navFlights: "航班",
    navHotel: "住宿",
    navHanbok: "韓服",
    navRoute: "交通",
    navBudget: "預算",
    navNotes: "備註",
    overviewKicker: "總覽",
    overviewTitle: "先看這裡",
    overviewLead: "首頁只放真的會先看的，其他細節都分到各頁去找。",
    overviewSnapshotTitle: "旅行重點",
    overviewAlertsTitle: "當天重點",
    overviewNotesTitle: "出發前確認",
    overviewFlightTitle: "航班與支援",
    overviewItineraryTitle: "每日行程",
    homeShortcutHanbok: "韓服",
    homeShortcutHanbokNote: "拍攝當天直接開這頁",
    homeShortcutMap: "交通",
    homeShortcutMapNote: "看幾點出門",
    homeShortcutBudget: "預算",
    homeShortcutBudgetNote: "快速看總額和每人",
    homeShortcutHotel: "飯店",
    homeShortcutHotelNote: "地址和住宿資訊",
    flightsKicker: "航班",
    flightsTitle: "航班",
    flightsLead: "把航班、票價與會員權益放在同一頁，出發前和回程前都好核對。",
    flightsSummaryTitle: "航班資訊",
    flightsFareTitle: "票價與艙等",
    flightsLinkTitle: "官方連結",
    airlineBenefitsTitle: "華航黑卡重點",
    hotelKicker: "住宿",
    hotelTitle: "住宿",
    hotelLead: "地址、房型、價格先放一起，找住宿資訊不用翻。",
    hotelGalleryTitle: "住宿照片",
    hotelExteriorCaption: "飯店外觀",
    hotelRoomCaption: "高級雙床房",
    hanbokKicker: "韓服",
    hanbokTitle: "韓服",
    hanbokLead: "這頁最重要，拍攝當天直接開這裡就好。",
    hanbokRulesTitle: "拍攝提醒",
    hanbokReferenceTitle: "參考照片",
    hanbokCaptionOne: "霧藍韓服參考",
    hanbokCaptionTwo: "景福宮白色韓服參考",
    hanbokCaptionThree: "宮殿石階參考",
    hanbokCaptionFour: "走廊肖像參考",
    instructionsCaption: "店家拍攝規則",
    routeKicker: "交通",
    routeTitle: "交通",
    routeLead: "怎麼去、搭什麼、幾點出門，照這頁走就好。",
    routeStepsTitle: "路線步驟",
    routeTimelineTitle: "建議時間",
    routeOptionsTitle: "交通方式",
    subwayMapTitle: "地鐵圖",
    subwayCaption: "首爾地鐵官方路線圖",
    budgetKicker: "預算",
    budgetTitle: "預算",
    budgetLead: "預算大概抓這樣，主幣別可切，韓元會一起留著看。",
    budgetSummaryTitle: "預算摘要",
    budgetBreakdownTitle: "費用明細",
    budgetItemHeading: "項目",
    budgetSelectedHeading: "韓元",
    budgetKrwHeading: "台幣",
    budgetNoteHeading: "備註",
    totalTripCostLabel: "總花費預估",
    perPersonCostLabel: "每人預估",
    paidSoFarLabel: "目前已付",
    remainingTripBudgetLabel: "後續還需準備",
    totalTripCostNote: "含韓服、飯店、交通、餐食、購物",
    perPersonCostNote: "以兩人平均分攤估算",
    paidSoFarNote: "目前已知訂金",
    remainingTripBudgetNote: "扣除訂金後的其餘預算",
    notesKicker: "備註",
    notesTitle: "備註",
    notesLead: "剩下零碎但有用的，都放在這一頁。",
    checklistTitle: "清單",
    linksTitle: "實用連結",
    bottomHome: "Home",
    bottomSchedule: "Schedule",
    bottomHanbok: "Hanbok",
    bottomMap: "Map",
    bottomBudget: "Budget",
    dateText: "日期",
    timeText: "時間",
    classText: "艙等",
    reservedPlanTitle: "已預約韓服方案",
    packageText: "套餐",
    addonText: "加購",
    totalText: "總計",
    depositText: "訂金",
    surchargeText: "卡片可能加收 10%",
    cashText: "建議準備韓元現金",
    startLabel: "起點",
    destinationLabel: "目的地",
    durationLabel: "時間",
    costLabel: "費用",
    useCaseLabel: "最適合",
    locationLabel: "地點",
    estimatedCostLabel: "預估花費",
    transportLabel: "交通備註",
    reminderLabel: "提醒",
    checklistProgress: "完成",
    mapsLabel: "Google 地圖",
    openLink: "開啟",
  },
  en: {
    languageSwitcher: "Language",
    currencySwitcher: "Currency",
    heroKicker: "Seoul travel handbook",
    heroTitle: "Seoul Travel 2026",
    heroSubtitle: "May 2026 · Seoul Travel Handbook",
    heroDates: "2026 / 05 / 15 - 2026 / 05 / 20",
    heroDestinations: "Hongdae · Bukchon Hanok Village · Gyeongbokgung · Anguk · Seoul",
    keyInfoTitle: "Today / Key Info",
    jumpLinksTitle: "Jump Links",
    navOverview: "Overview",
    navFlights: "Flights",
    navHotel: "Hotel",
    navHanbok: "Hanbok",
    navRoute: "Transportation",
    navBudget: "Budget",
    navNotes: "Notes",
    overviewKicker: "Overview",
    overviewTitle: "Start here",
    overviewLead: "Keep the home page light. Use it as the front door, not the full data page.",
    overviewSnapshotTitle: "Trip snapshot",
    overviewAlertsTitle: "Today matters",
    overviewNotesTitle: "Before you go",
    overviewFlightTitle: "Flights and support",
    overviewItineraryTitle: "Daily itinerary",
    homeShortcutHanbok: "Hanbok",
    homeShortcutHanbokNote: "Open this on the shoot day",
    homeShortcutMap: "Transport",
    homeShortcutMapNote: "Check when to leave",
    homeShortcutBudget: "Budget",
    homeShortcutBudgetNote: "Quick total and per person",
    homeShortcutHotel: "Hotel",
    homeShortcutHotelNote: "Address and stay details",
    flightsKicker: "Flights",
    flightsTitle: "Flights",
    flightsLead: "Keep the flights, fare details, and China Airlines member perks on one page for quick checking.",
    flightsSummaryTitle: "Flight details",
    flightsFareTitle: "Fare and cabin notes",
    flightsLinkTitle: "Official links",
    airlineBenefitsTitle: "China Airlines Paragon highlights",
    hotelKicker: "Hotel",
    hotelTitle: "Hotel",
    hotelLead: "Keep the address, room type, and price together so this page is easy to use on the go.",
    hotelGalleryTitle: "Hotel photos",
    hotelExteriorCaption: "Hotel exterior",
    hotelRoomCaption: "Deluxe twin room",
    hanbokKicker: "Hanbok",
    hanbokTitle: "Hanbok",
    hanbokLead: "This is the most important page on the shoot day.",
    hanbokRulesTitle: "Shooting notes",
    hanbokReferenceTitle: "Reference photos",
    hanbokCaptionOne: "Blue hanbok reference",
    hanbokCaptionTwo: "White hanbok at Gyeongbokgung",
    hanbokCaptionThree: "Palace stairs reference",
    hanbokCaptionFour: "Corridor portrait reference",
    instructionsCaption: "Store shooting instructions",
    routeKicker: "Transportation",
    routeTitle: "Transportation",
    routeLead: "How to go, what to take, and when to leave. Just follow this page.",
    routeStepsTitle: "Route steps",
    routeTimelineTitle: "Suggested timing",
    routeOptionsTitle: "Route cards",
    subwayMapTitle: "Subway map",
    subwayCaption: "Official Seoul Metro map",
    budgetKicker: "Budget",
    budgetTitle: "Budget",
    budgetLead: "Use this as the rough budget page. Keep KRW visible for actual payment.",
    budgetSummaryTitle: "Budget summary",
    budgetBreakdownTitle: "Simple breakdown",
    budgetItemHeading: "Item",
    budgetSelectedHeading: "KRW",
    budgetKrwHeading: "TWD",
    budgetNoteHeading: "Note",
    totalTripCostLabel: "Estimated total",
    perPersonCostLabel: "Estimated per person",
    paidSoFarLabel: "Paid so far",
    remainingTripBudgetLabel: "Still to prepare",
    totalTripCostNote: "Includes hanbok, hotel, transport, food, and shopping",
    perPersonCostNote: "Split evenly for two people",
    paidSoFarNote: "Known deposit already paid",
    remainingTripBudgetNote: "Remaining trip budget after deposit",
    notesKicker: "Notes",
    notesTitle: "Notes",
    notesLead: "Loose but useful things live here: day plan, checklist, and links.",
    checklistTitle: "Checklist",
    linksTitle: "Useful links",
    bottomHome: "Home",
    bottomSchedule: "Schedule",
    bottomHanbok: "Hanbok",
    bottomMap: "Map",
    bottomBudget: "Budget",
    dateText: "Date",
    timeText: "Time",
    classText: "Class",
    reservedPlanTitle: "Reserved Hanbok Plan",
    packageText: "Package",
    addonText: "Add-on",
    totalText: "Total",
    depositText: "Deposit",
    surchargeText: "Card may +10%",
    cashText: "Prepare KRW cash",
    startLabel: "Start",
    destinationLabel: "Destination",
    durationLabel: "Duration",
    costLabel: "Cost",
    useCaseLabel: "Best use",
    locationLabel: "Location",
    estimatedCostLabel: "Estimated cost",
    transportLabel: "Transport note",
    reminderLabel: "Reminder",
    checklistProgress: "Done",
    mapsLabel: "Google Maps",
    openLink: "Open",
  },
  ko: {
    languageSwitcher: "언어",
    currencySwitcher: "통화",
    heroKicker: "Seoul travel handbook",
    heroTitle: "서울 여행 2026",
    heroSubtitle: "2026년 5월 · 서울 여행 핸드북",
    heroDates: "2026 / 05 / 15 - 2026 / 05 / 20",
    heroDestinations: "홍대 · 북촌한옥마을 · 경복궁 · 안국 · 서울",
    keyInfoTitle: "오늘 / 핵심 정보",
    jumpLinksTitle: "바로가기",
    navOverview: "개요",
    navFlights: "항공편",
    navHotel: "호텔",
    navHanbok: "한복",
    navRoute: "교통",
    navBudget: "예산",
    navNotes: "메모",
    overviewKicker: "개요",
    overviewTitle: "먼저 여기",
    overviewLead: "홈에는 바로 봐야 할 것만 두고, 자세한 내용은 각 페이지로 나눴습니다.",
    overviewSnapshotTitle: "여행 핵심 정보",
    overviewAlertsTitle: "당일 핵심",
    overviewNotesTitle: "출발 전 확인",
    overviewFlightTitle: "항공편 및 지원",
    overviewItineraryTitle: "일별 일정",
    homeShortcutHanbok: "한복",
    homeShortcutHanbokNote: "촬영 당일 이 페이지",
    homeShortcutMap: "교통",
    homeShortcutMapNote: "몇 시에 나갈지 확인",
    homeShortcutBudget: "예산",
    homeShortcutBudgetNote: "총액과 1인 금액",
    homeShortcutHotel: "호텔",
    homeShortcutHotelNote: "주소와 숙소 정보",
    flightsKicker: "항공편",
    flightsTitle: "항공편",
    flightsLead: "항공편, 운임, 회원 혜택을 한 페이지에 모아 출발 전과 귀국 전에 빠르게 확인할 수 있게 정리했습니다.",
    flightsSummaryTitle: "항공편 정보",
    flightsFareTitle: "운임 및 좌석 메모",
    flightsLinkTitle: "공식 링크",
    airlineBenefitsTitle: "중화항공 블랙카드 핵심",
    hotelKicker: "호텔",
    hotelTitle: "호텔",
    hotelLead: "주소, 객실, 가격을 한 페이지에 모아서 이동 중에도 보기 쉽게 정리했습니다.",
    hotelGalleryTitle: "호텔 사진",
    hotelExteriorCaption: "호텔 외관",
    hotelRoomCaption: "디럭스 트윈룸",
    hanbokKicker: "한복",
    hanbokTitle: "한복",
    hanbokLead: "촬영 당일 가장 먼저 열어볼 페이지입니다.",
    hanbokRulesTitle: "촬영 안내",
    hanbokReferenceTitle: "레퍼런스 사진",
    hanbokCaptionOne: "블루 한복 레퍼런스",
    hanbokCaptionTwo: "경복궁 화이트 한복 레퍼런스",
    hanbokCaptionThree: "궁전 계단 레퍼런스",
    hanbokCaptionFour: "복도 초상 레퍼런스",
    instructionsCaption: "매장 촬영 안내",
    routeKicker: "교통",
    routeTitle: "교통",
    routeLead: "어떻게 가는지, 무엇을 타는지, 몇 시에 나가면 되는지 이 페이지에만 정리했습니다.",
    routeStepsTitle: "이동 순서",
    routeTimelineTitle: "추천 시간표",
    routeOptionsTitle: "이동 옵션",
    subwayMapTitle: "지하철 노선도",
    subwayCaption: "서울 메트로 공식 노선도",
    budgetKicker: "예산",
    budgetTitle: "예산",
    budgetLead: "대략 이렇게 잡으면 됩니다. 실제 결제용으로 KRW도 같이 남겨둡니다.",
    budgetSummaryTitle: "예산 요약",
    budgetBreakdownTitle: "비용 상세",
    budgetItemHeading: "항목",
    budgetSelectedHeading: "KRW",
    budgetKrwHeading: "TWD",
    budgetNoteHeading: "메모",
    totalTripCostLabel: "총 예상 비용",
    perPersonCostLabel: "1인 예상 비용",
    paidSoFarLabel: "현재까지 결제",
    remainingTripBudgetLabel: "추가로 준비할 금액",
    totalTripCostNote: "한복, 호텔, 교통, 식비, 쇼핑 포함",
    perPersonCostNote: "2인 균등 분담 기준",
    paidSoFarNote: "현재 확인된 예약금",
    remainingTripBudgetNote: "예약금을 제외한 나머지 예산",
    notesKicker: "메모",
    notesTitle: "메모",
    notesLead: "자잘하지만 필요한 것들은 이 페이지에 모아두었습니다.",
    checklistTitle: "체크리스트",
    linksTitle: "유용한 링크",
    bottomHome: "Home",
    bottomSchedule: "일정",
    bottomHanbok: "한복",
    bottomMap: "지도",
    bottomBudget: "예산",
    dateText: "날짜",
    timeText: "시간",
    classText: "좌석 등급",
    reservedPlanTitle: "예약된 한복 플랜",
    packageText: "패키지",
    addonText: "추가",
    totalText: "총액",
    depositText: "예약금",
    surchargeText: "카드 결제 시 10% 추가 가능",
    cashText: "가능하면 KRW 현금 준비",
    startLabel: "출발",
    destinationLabel: "도착",
    durationLabel: "시간",
    costLabel: "비용",
    useCaseLabel: "추천 상황",
    locationLabel: "장소",
    estimatedCostLabel: "예상 비용",
    transportLabel: "교통 메모",
    reminderLabel: "리마인더",
    checklistProgress: "완료",
    mapsLabel: "구글 지도",
    openLink: "열기",
  },
};

const data = {
  heroSummary: [
    { label: { "zh-Hant": "住宿", en: "Hotel", ko: "호텔" }, value: { "zh-Hant": "洛卡斯提奇創作者小鎮西橋店", en: "Local Stitch Creator Town Seogyo", ko: "로컬스티치 크리에이터 타운 서교" } },
    { label: { "zh-Hant": "韓服時間", en: "Hanbok", ko: "한복 예약" }, value: { "zh-Hant": "5 月 19 日 14:00", en: "May 19, 14:00", ko: "5월 19일 14:00" } },
    { label: { "zh-Hant": "總費用", en: "Total", ko: "총액" }, value: { "zh-Hant": "940,000 韓元", en: "940,000 KRW", ko: "940,000원" } },
    { label: { "zh-Hant": "訂金", en: "Deposit", ko: "예약금" }, value: { "zh-Hant": "300 人民幣", en: "300 CNY", ko: "300위안" } },
    { label: { "zh-Hant": "提醒", en: "Reminder", ko: "리마인더" }, value: { "zh-Hant": "刷卡可能加收 10%", en: "Card may add 10%", ko: "카드 결제 시 10% 추가 가능" } },
  ],
  keyInfo: [
    {
      label: { "zh-Hant": "今天最重要", en: "Top priority", ko: "가장 중요한 일정" },
      value: { "zh-Hant": "5/19 14:00 韓服拍攝", en: "May 19, 14:00 hanbok shoot", ko: "5/19 14:00 한복 촬영" },
      note: { "zh-Hant": "建議 13:00 前出門", en: "Leave by about 13:00", ko: "13:00 전 출발 권장" },
    },
    {
      label: { "zh-Hant": "現場金額", en: "To pay on site", ko: "현장 결제 금액" },
      value: { "zh-Hant": "約 880,000 韓元", en: "about 880,000 KRW", ko: "약 880,000원" },
      note: { "zh-Hant": "建議備韓元現金", en: "Prepare KRW cash if possible", ko: "가능하면 KRW 현금 준비" },
    },
    {
      label: { "zh-Hant": "風險提醒", en: "Watch out", ko: "주의 사항" },
      value: { "zh-Hant": "遲到 20 分鐘會罰款", en: "20-minute delay triggers a penalty", ko: "20분 지각 시 벌금" },
      note: { "zh-Hant": "北村容易迷路", en: "Bukchon is easy to get lost in", ko: "북촌은 길 찾기 어려움" },
    },
  ],
  overviewStats: [
    { label: { "zh-Hant": "旅行長度", en: "Trip length", ko: "여행 기간" }, value: { "zh-Hant": "6 天 5 夜", en: "6 days / 5 nights", ko: "6일 5박" } },
    { label: { "zh-Hant": "住宿區域", en: "Stay area", ko: "숙소 지역" }, value: { "zh-Hant": "弘大 / Seogyo", en: "Hongdae / Seogyo", ko: "홍대 / 서교" } },
    { label: { "zh-Hant": "重點日期", en: "Key date", ko: "핵심 날짜" }, value: { "zh-Hant": "5/19 韓服拍攝", en: "May 19 hanbok", ko: "5/19 한복 촬영" } },
    { label: { "zh-Hant": "建議出門", en: "Leave by", ko: "출발 권장" }, value: { "zh-Hant": "12:45 - 13:00", en: "12:45 - 13:00", ko: "12:45 - 13:00" } },
  ],
  importantAlerts: [
    { title: { "zh-Hant": "韓服這天不要壓線", en: "Do not cut the hanbok day too close", ko: "한복 날은 시간 촉박 금지" }, desc: { "zh-Hant": "遲到 20 分鐘會罰款，而且北村容易迷路。", en: "A 20-minute delay triggers a penalty, and Bukchon is easy to get lost in.", ko: "20분 지각 벌금이 있고 북촌은 길 찾기가 어렵습니다." } },
    { title: { "zh-Hant": "原片與精修數量要再確認", en: "Reconfirm original and retouched counts", ko: "원본 / 보정 수량 재확인" }, desc: { "zh-Hant": "200 張原片與 12 張精修值得再口頭確認一次。", en: "The 200 originals and 12 retouched images are worth confirming again.", ko: "원본 200장과 보정 12장은 다시 확인할 가치가 있습니다." } },
    { title: { "zh-Hant": "卡片可能加收 10%", en: "Card may add 10%", ko: "카드 결제 10% 추가 가능" }, desc: { "zh-Hant": "刷卡前先問清楚，能帶韓元現金更穩。", en: "Ask before paying by card; KRW cash is the safer backup.", ko: "카드 결제 전 먼저 확인하고 KRW 현금을 준비하면 더 안전합니다." } },
  ],
  overviewNotes: [
    { title: { "zh-Hant": "前段先住得舒服", en: "Start with an easy base", ko: "숙소 베이스를 편하게" }, desc: { "zh-Hant": "弘大住宿讓吃飯、回飯店和最後幾天採買都很順。", en: "Staying in Hongdae keeps food, returns, and the final shopping days easy.", ko: "홍대 숙소는 식사, 귀가, 마지막 쇼핑 동선이 모두 편합니다." } },
    { title: { "zh-Hant": "5/19 是這趟核心", en: "May 19 is the key day", ko: "5월 19일이 핵심" }, desc: { "zh-Hant": "景福宮、北村和韓服拍攝都集中在這天，節奏不要壓太滿。", en: "Gyeongbokgung, Bukchon, and the hanbok shoot all sit on this day, so keep the pace clear.", ko: "경복궁, 북촌, 한복 촬영이 모두 이날에 몰려 있으니 동선을 단순하게 두는 편이 좋습니다." } },
    { title: { "zh-Hant": "現場付款先想好", en: "Plan the on-site payment first", ko: "현장 결제 계획 먼저" }, desc: { "zh-Hant": "韓服尾款金額高，又可能遇到刷卡加價，現金與卡都要準備。", en: "The hanbok balance is large and card surcharge is possible, so prepare both card and cash.", ko: "한복 잔액이 크고 카드 추가 요금 가능성도 있어서 현금과 카드를 둘 다 준비하는 편이 안전합니다." } },
  ],
  flights: [
    { label: { "zh-Hant": "去程", en: "Outbound", ko: "출국" }, route: "TPE → ICN", date: "2026-05-15", time: "15:30 - 19:05", cabin: { "zh-Hant": "經濟艙基本", en: "Economy Basic", ko: "이코노미 베이직" } },
    { label: { "zh-Hant": "回程", en: "Return", ko: "귀국" }, route: "ICN → TPE", date: "2026-05-20", time: "20:05 - 21:50", cabin: { "zh-Hant": "經濟艙基本", en: "Economy Basic", ko: "이코노미 베이직" } },
  ],
  flightFareNotes: [
    { title: { "zh-Hant": "票價", en: "Fare", ko: "운임" }, desc: { "zh-Hant": "兩人機票總計已知為 NT$12,718。", en: "Known airfare total is NT$12,718 for this booking.", ko: "현재 확인된 항공권 금액은 NT$12,718입니다." } },
    { title: { "zh-Hant": "出發航班", en: "Outbound flight", ko: "출국편" }, desc: { "zh-Hant": "2026/05/15 CI 0162，15:30 台北桃園出發，19:05 抵達首爾仁川。", en: "May 15, 2026 on CI 0162, departing Taipei Taoyuan at 15:30 and arriving Seoul Incheon at 19:05.", ko: "2026년 5월 15일 CI 0162편으로 15:30 타이베이 출발, 19:05 인천 도착입니다." } },
    { title: { "zh-Hant": "回程航班", en: "Return flight", ko: "귀국편" }, desc: { "zh-Hant": "2026/05/20 20:05 首爾仁川出發，21:50 抵達台北桃園。", en: "Return leaves Seoul Incheon at 20:05 on May 20, 2026 and lands in Taipei Taoyuan at 21:50.", ko: "귀국편은 2026년 5월 20일 20:05 인천 출발, 21:50 타이베이 도착입니다." } },
  ],
  airlineBenefits: [
    { title: { "zh-Hant": "額外托運", en: "Extra baggage", ko: "추가 수하물" }, desc: { "zh-Hant": "華航黑卡常見可再加 20kg 托運額度，實際仍以票規與現場為準。", en: "Paragon members commonly get an extra 20kg baggage allowance, subject to fare rules and airport handling.", ko: "블랙카드 회원은 일반적으로 추가 20kg 위탁수하물 혜택이 있으나 실제 적용은 운임 규정과 현장 기준을 따릅니다." } },
    { title: { "zh-Hant": "優先服務", en: "Priority services", ko: "우선 서비스" }, desc: { "zh-Hant": "可留意優先報到、優先登機、優先行李與貴賓室等權益。", en: "Look for priority check-in, boarding, baggage, and lounge access benefits.", ko: "우선 체크인, 우선 탑승, 우선 수하물, 라운지 이용 혜택을 확인하세요." } },
    { title: { "zh-Hant": "選位與哩程", en: "Seat selection and miles", ko: "좌석 선택 및 마일리지" }, desc: { "zh-Hant": "免費選位與額外哩程累積通常是這趟最實用的黑卡價值。", en: "Free seat selection and bonus mileage are usually the most practical perks for this trip.", ko: "무료 좌석 선택과 추가 마일 적립이 이번 여행에서 가장 실용적인 혜택입니다." } },
    { title: { "zh-Hant": "使用提醒", en: "Use note", ko: "이용 메모" }, desc: { "zh-Hant": "仍建議出發前在華航會員頁或訂位紀錄裡再確認這張票的實際適用權益。", en: "Still reconfirm the actual benefits for this ticket in your China Airlines account before departure.", ko: "출발 전 중화항공 회원 페이지나 예약 기록에서 이번 항공권에 적용되는 혜택을 다시 확인하는 것이 좋습니다." } },
  ],
  flightLinks: [
    { label: { "zh-Hant": "華航會員權益", en: "China Airlines membership benefits", ko: "중화항공 회원 혜택" }, href: "https://www.china-airlines.com/us/en/member/planning/introduction/membership-benefits" },
    { label: { "zh-Hant": "華航 Paragon 黑卡權益", en: "China Airlines Paragon benefits", ko: "중화항공 Paragon 혜택" }, href: "https://www.china-airlines.com/us/en/member/planning/introduction/membership-benefits/paragon.html" },
  ],
  hotel: {
    title: { "zh-Hant": "Local Stitch Creator Town Seogyo（洛卡斯提奇創作者小鎮西橋店）", en: "Local Stitch Creator Town Seogyo", ko: "Local Stitch Creator Town Seogyo" },
    subtitle: { "zh-Hant": "高級雙床房 · 5 晚 · 2 人", en: "Deluxe Twin Room · 5 nights · 2 guests", ko: "디럭스 트윈룸 · 5박 · 2인" },
    chips: [
      { "zh-Hant": "弘大", en: "Hongdae", ko: "홍대" },
      { "zh-Hant": "5 晚", en: "5 nights", ko: "5박" },
      { "zh-Hant": "2 人", en: "2 guests", ko: "2인" },
      { "zh-Hant": "高級雙床房", en: "Deluxe Twin", ko: "디럭스 트윈" },
    ],
    notes: [
      { title: { "zh-Hant": "飯店總價", en: "Hotel total", ko: "호텔 총액" }, krw: 19247 * rates.TWD.krwPerUnit },
      { title: { "zh-Hant": "平均每晚", en: "Per night", ko: "1박 평균" }, krw: (19247 / 5) * rates.TWD.krwPerUnit },
      { title: { "zh-Hant": "每人分攤", en: "Per person", ko: "1인 기준" }, krw: (19247 / 2) * rates.TWD.krwPerUnit },
      { title: { "zh-Hant": "每人每晚", en: "Per person / night", ko: "1인 1박 기준" }, krw: (19247 / 10) * rates.TWD.krwPerUnit },
    ],
    copy: [
      { title: { "zh-Hant": "住弘大最省事", en: "Hongdae is the easiest base", ko: "홍대가 가장 편한 베이스" }, desc: { "zh-Hant": "吃飯、晚上回去和最後幾天購物都很順。", en: "Food, late returns, and shopping days all become easier from Hongdae.", ko: "식사, 늦은 귀가, 쇼핑 일정이 모두 더 편해집니다." } },
      { title: { "zh-Hant": "拍攝日出發點很清楚", en: "Clear starting point for shoot day", ko: "촬영일 출발지가 명확함" }, desc: { "zh-Hant": "從這裡去安國站動線簡單。", en: "The route to Anguk is simple from here.", ko: "안국역 이동 동선이 단순합니다." } },
    ],
    href: "https://www.agoda.com/zh-tw/localstitch-seogyo-town/hotel/seoul-kr.html?checkIn=2026-05-15&los=5&adults=2&rooms=1&travellerType=1&ds=qgMT%2Bi%2FlTw7Mxwmp",
  },
  hanbok: {
    includes: [
      { "zh-Hant": "高定韓服", en: "High-end Hanbok", ko: "고급 한복" },
      { "zh-Hant": "明星等級攝影師", en: "Celebrity-level photographer", ko: "셀럽급 포토그래퍼" },
      { "zh-Hant": "明星等級化妝師", en: "Celebrity-level makeup artist", ko: "셀럽급 메이크업 아티스트" },
      { "zh-Hant": "200 張原片", en: "200 original photos", ko: "원본 200장" },
      { "zh-Hant": "12 張精修", en: "12 retouched photos", ko: "보정 12장" },
    ],
    rules: [
      { title: { "zh-Hant": "準時比什麼都重要", en: "Punctuality matters most", ko: "정시 도착이 가장 중요" }, desc: { "zh-Hant": "20 分鐘遲到會罰款，還可能縮短拍攝時間。", en: "A 20-minute delay triggers a penalty and may shorten the shoot.", ko: "20분 지각 시 벌금과 시간 단축이 있습니다." } },
      { title: { "zh-Hant": "建議 12:45 - 13:00 出門", en: "Leave around 12:45 - 13:00", ko: "12:45 - 13:00 출발 권장" }, desc: { "zh-Hant": "北村容易找錯路，寧可早到附近。", en: "Bukchon is easy to navigate poorly, so reaching the area early is safer.", ko: "북촌은 길 찾기가 어려워서 일찍 도착하는 편이 안전합니다." } },
    ],
  },
  routeSteps: [
    { label: { "zh-Hant": "第 1 步", en: "Step 1", ko: "1단계" }, title: { "zh-Hant": "飯店", en: "Hotel", ko: "호텔" }, desc: { "zh-Hant": "洛卡斯提奇創作者小鎮西橋店", en: "Local Stitch Creator Town Seogyo", ko: "로컬스티치 크리에이터 타운 서교" } },
    { label: { "zh-Hant": "第 2 步", en: "Step 2", ko: "2단계" }, title: { "zh-Hant": "車站", en: "Station", ko: "역" }, desc: { "zh-Hant": "弘大入口站", en: "Hongik Univ. Station", ko: "홍대입구역" } },
    { label: { "zh-Hant": "第 3 步", en: "Step 3", ko: "3단계" }, title: { "zh-Hant": "北村", en: "Bukchon", ko: "북촌" }, desc: { "zh-Hant": "安國站 2 號出口附近", en: "Near Anguk Station Exit 2", ko: "안국역 2번 출구 근처" } },
    { label: { "zh-Hant": "第 4 步", en: "Step 4", ko: "4단계" }, title: { "zh-Hant": "韓服店", en: "Hanbok shop", ko: "한복 매장" }, desc: { "zh-Hant": "옥한복", en: "Ok Hanbok", ko: "옥한복" } },
  ],
  routeTimeline: [
    { time: "13:00", title: { "zh-Hant": "從飯店出發", en: "Leave hotel", ko: "호텔 출발" }, desc: { "zh-Hant": "最穩的出發時間。", en: "Safest departure time.", ko: "가장 안전한 출발 시간." } },
    { time: "13:40", title: { "zh-Hant": "抵達附近", en: "Arrive nearby", ko: "근처 도착" }, desc: { "zh-Hant": "預留找路時間。", en: "Keep buffer for finding the place.", ko: "길 찾기 버퍼 확보." } },
    { time: "14:00", title: { "zh-Hant": "韓服預約", en: "Hanbok appointment", ko: "한복 예약" }, desc: { "zh-Hant": "準時到店。", en: "Be on time at the shop.", ko: "정시에 도착." } },
    { time: "After", title: { "zh-Hant": "晚餐 / 備份照片", en: "Dinner / back up photos", ko: "저녁 / 사진 백업" }, desc: { "zh-Hant": "拍完先吃飯，再備份手機照片。", en: "Dinner first, then back up phone photos.", ko: "식사 후 휴대폰 사진 백업." } },
  ],
  routeCards: [
    { title: { "zh-Hant": "地鐵", en: "Subway", ko: "지하철" }, start: { "zh-Hant": "飯店", en: "Hotel", ko: "호텔" }, destination: { "zh-Hant": "安國 / 北村", en: "Anguk / Bukchon", ko: "안국 / 북촌" }, duration: { "zh-Hant": "35-45 分鐘", en: "35-45 min", ko: "35-45분" }, cost: { "zh-Hant": "低成本", en: "Low cost", ko: "저비용" }, useCase: { "zh-Hant": "最穩", en: "Most stable", ko: "가장 안정적" }, desc: { "zh-Hant": "弘大入口站 → 2 號線 → 乙支路 3 街 → 3 號線 → 安國站。", en: "Hongik Univ. Station → Line 2 → Euljiro 3-ga → Line 3 → Anguk.", ko: "홍대입구역 → 2호선 → 을지로3가 → 3호선 → 안국역." }, href: "https://www.google.com/maps/search/%EC%98%A5%ED%95%9C%EB%B3%B5/" },
    { title: { "zh-Hant": "計程車", en: "Taxi", ko: "택시" }, start: { "zh-Hant": "飯店", en: "Hotel", ko: "호텔" }, destination: { "zh-Hant": "韓服店", en: "Hanbok shop", ko: "한복 매장" }, duration: { "zh-Hant": "20-25 分鐘", en: "20-25 min", ko: "20-25분" }, cost: { "zh-Hant": "₩8,000-12,000", en: "₩8,000-12,000", ko: "₩8,000-12,000" }, useCase: { "zh-Hant": "怕迷路時", en: "Best if you want less stress", ko: "길 찾기 스트레스 줄일 때" }, desc: { "zh-Hant": "最直接，最省腦。", en: "The easiest option with the least thinking.", ko: "가장 직접적이고 편한 선택." }, href: "https://www.google.com/maps/search/%EC%98%A5%ED%95%9C%EB%B3%B5/" },
  ],
  budgetSummary: [
    { label: { "zh-Hant": "韓服總價", en: "Hanbok total", ko: "Hanbok total" }, krw: 940000 },
    { label: { "zh-Hant": "現場補款", en: "Remaining balance", ko: "Remaining balance" }, krw: 880000 },
    { label: { "zh-Hant": "飯店", en: "Hotel", ko: "Hotel" }, krw: 19247 * rates.TWD.krwPerUnit },
    { label: { "zh-Hant": "交通 + 餐食 + 購物", en: "Transport + food + shopping", ko: "교통 + 식비 + 쇼핑" }, krw: 730000 },
  ],
  budgetRows: [
    { item: { "zh-Hant": "韓服套餐", en: "Hanbok package", ko: "한복 패키지" }, krw: 640000, original: "640,000 KRW", note: { "zh-Hant": "高級方案", en: "Premium package", ko: "프리미엄 패키지" } },
    { item: { "zh-Hant": "MV 加購", en: "MV add-on", ko: "MV 추가" }, krw: 300000, original: "300,000 KRW", note: { "zh-Hant": "MV 影片", en: "MV video", ko: "MV 영상" } },
    { item: { "zh-Hant": "訂金", en: "Deposit", ko: "예약금" }, krw: 300 * rates.CNY.krwPerUnit, original: "300 CNY", note: { "zh-Hant": "已付", en: "Already paid", ko: "이미 결제" } },
    { item: { "zh-Hant": "剩餘韓服款", en: "Remaining Hanbok balance", ko: "남은 한복 잔액" }, krw: 880000, original: "about 880,000 KRW", note: { "zh-Hant": "現場補款", en: "To pay on site", ko: "현장 결제" } },
    { item: { "zh-Hant": "飯店", en: "Hotel", ko: "호텔" }, krw: 19247 * rates.TWD.krwPerUnit, original: "NT$19,247", note: { "zh-Hant": "5 晚 2 人", en: "5 nights for 2", ko: "5박 2인" } },
    { item: { "zh-Hant": "交通", en: "Transportation", ko: "교통" }, krw: 120000, original: "120,000 KRW", note: { "zh-Hant": "地鐵 / 計程車抓法", en: "Subway / taxi planning", ko: "지하철 / 택시 예상" } },
    { item: { "zh-Hant": "餐食", en: "Food", ko: "식비" }, krw: 360000, original: "360,000 KRW", note: { "zh-Hant": "兩人粗估", en: "Planning estimate for two", ko: "2인 예상" } },
    { item: { "zh-Hant": "購物", en: "Shopping", ko: "쇼핑" }, krw: 250000, original: "250,000 KRW", note: { "zh-Hant": "彈性抓法", en: "Flexible placeholder", ko: "유동적 가정" } },
  ],
  itinerary: [
    { day: { "zh-Hant": "第 1 天", en: "Day 1", ko: "1일차" }, date: "2026-05-15", plan: { "zh-Hant": "抵達首爾、飯店入住", en: "Arrive in Seoul and check in", ko: "서울 도착 후 체크인" }, location: { "zh-Hant": "仁川機場 → 弘大", en: "Incheon → Hongdae", ko: "인천공항 → 홍대" }, costKrw: 30000, transport: { "zh-Hant": "AREX / 巴士 / 計程車", en: "AREX / bus / taxi", ko: "AREX / 버스 / 택시" }, reminder: { "zh-Hant": "第一天不要排太滿。", en: "Do not overpack the first day.", ko: "첫날은 무리하지 않기." }, open: true },
    { day: { "zh-Hant": "第 2 天", en: "Day 2", ko: "2일차" }, date: "2026-05-16", plan: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" }, location: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" }, costKrw: 60000, transport: { "zh-Hant": "依當天調整", en: "Adjust later", ko: "당일 조정" }, reminder: { "zh-Hant": "保留彈性。", en: "Keep it flexible.", ko: "유동적으로 두기." } },
    { day: { "zh-Hant": "第 3 天", en: "Day 3", ko: "3일차" }, date: "2026-05-17", plan: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" }, location: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" }, costKrw: 60000, transport: { "zh-Hant": "依當天調整", en: "Adjust later", ko: "당일 조정" }, reminder: { "zh-Hant": "保留彈性。", en: "Keep it flexible.", ko: "유동적으로 두기." } },
    { day: { "zh-Hant": "第 4 天", en: "Day 4", ko: "4일차" }, date: "2026-05-18", plan: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" }, location: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" }, costKrw: 60000, transport: { "zh-Hant": "依當天調整", en: "Adjust later", ko: "당일 조정" }, reminder: { "zh-Hant": "晚上整理拍攝用品。", en: "Prep for the shoot in the evening.", ko: "저녁에 촬영 준비물 정리." } },
    { day: { "zh-Hant": "第 5 天", en: "Day 5", ko: "5일차" }, date: "2026-05-19", plan: { "zh-Hant": "景福宮 + 北村 + 韓服拍攝", en: "Gyeongbokgung + Bukchon + Hanbok", ko: "경복궁 + 북촌 + 한복" }, location: { "zh-Hant": "安國 / 北村", en: "Anguk / Bukchon", ko: "안국 / 북촌" }, costKrw: 940000, transport: { "zh-Hant": "13:00 前從飯店出發", en: "Leave hotel before 13:00", ko: "13:00 전 호텔 출발" }, reminder: { "zh-Hant": "今天最重要的是準時與備份照片。", en: "Being on time and backing up photos are the priorities.", ko: "정시 도착과 사진 백업이 핵심." }, open: true },
    { day: { "zh-Hant": "第 6 天", en: "Day 6", ko: "6일차" }, date: "2026-05-20", plan: { "zh-Hant": "退房、最後採買、前往機場", en: "Check out and go to the airport", ko: "체크아웃 후 공항 이동" }, location: { "zh-Hant": "弘大 → 仁川機場", en: "Hongdae → Incheon", ko: "홍대 → 인천공항" }, costKrw: 40000, transport: { "zh-Hant": "AREX / 巴士 / 計程車", en: "AREX / bus / taxi", ko: "AREX / 버스 / 택시" }, reminder: { "zh-Hant": "不要太晚整理行李。", en: "Do not leave packing too late.", ko: "짐 정리를 너무 늦게 하지 않기." } },
  ],
  checklistGroups: [
    { id: "before", title: { "zh-Hant": "出發前", en: "Before departure", ko: "출발 전" }, items: [
      { id: "passport", title: { "zh-Hant": "護照", en: "Passport", ko: "Passport" }, desc: { "zh-Hant": "確認效期與放置位置。", en: "Check validity and where it is packed.", ko: "유효기간과 보관 위치 확인." } },
      { id: "esim", title: { "zh-Hant": "eSIM / 漫遊", en: "eSIM / roaming", ko: "eSIM / roaming" }, desc: { "zh-Hant": "抵達後能立刻上網。", en: "Make sure data works on arrival.", ko: "도착 직후 데이터 사용 가능." } },
      { id: "powerbank", title: { "zh-Hant": "行動電源", en: "Power bank", ko: "Power bank" }, desc: { "zh-Hant": "導航和拍照很耗電。", en: "Navigation and photos drain battery.", ko: "지도와 사진으로 배터리 소모 큼." } },
    ]},
    { id: "hanbok", title: { "zh-Hant": "韓服拍攝日", en: "Hanbok shooting day", ko: "한복 촬영일" }, items: [
      { id: "makeup", title: { "zh-Hant": "補妝 / 整髮用品", en: "Makeup touch-up items", ko: "Makeup touch-up items" }, desc: { "zh-Hant": "不要臨時找東西。", en: "Keep them ready in advance.", ko: "미리 챙겨 두기." } },
      { id: "original-count", title: { "zh-Hant": "確認 200 張原片", en: "Confirm 200 originals", ko: "Confirm 200 originals" }, desc: { "zh-Hant": "拍攝前後都再確認。", en: "Reconfirm before and after the shoot.", ko: "촬영 전후 모두 확인." } },
      { id: "retouch-count", title: { "zh-Hant": "確認 12 張精修", en: "Confirm 12 retouched", ko: "Confirm 12 retouched" }, desc: { "zh-Hant": "口頭再確認一次。", en: "Verbal reconfirmation helps.", ko: "구두 재확인." } },
      { id: "mv-addon", title: { "zh-Hant": "確認 MV 加購", en: "Confirm MV add-on", ko: "Confirm MV add-on" }, desc: { "zh-Hant": "確認列入最終方案。", en: "Make sure it is in the final plan.", ko: "최종 플랜 포함 여부 확인." } },
    ]},
    { id: "payment", title: { "zh-Hant": "付款", en: "Payment", ko: "결제" }, items: [
      { id: "credit-card", title: { "zh-Hant": "信用卡", en: "Credit card", ko: "Credit card" }, desc: { "zh-Hant": "確認海外刷卡。", en: "Confirm overseas use.", ko: "해외 결제 확인." } },
      { id: "krw-cash", title: { "zh-Hant": "韓元現金", en: "KRW cash", ko: "KRW cash" }, desc: { "zh-Hant": "刷卡加價時更穩。", en: "Safer if card surcharge happens.", ko: "카드 추가요금 대비." } },
      { id: "deposit-record", title: { "zh-Hant": "300 CNY 訂金紀錄", en: "300 CNY deposit record", ko: "300 CNY deposit record" }, desc: { "zh-Hant": "現場對帳用。", en: "Helpful for reconciling on site.", ko: "현장 대조용." } },
      { id: "surcharge", title: { "zh-Hant": "確認刷卡 10%", en: "Confirm 10% card surcharge", ko: "Confirm 10% card surcharge" }, desc: { "zh-Hant": "付款前先問清楚。", en: "Ask before the final payment.", ko: "최종 결제 전 확인." } },
    ]},
    { id: "after", title: { "zh-Hant": "拍攝後", en: "After shooting", ko: "촬영 후" }, items: [
      { id: "backup-photos", title: { "zh-Hant": "先備份照片", en: "Back up photos", ko: "사진 백업" }, desc: { "zh-Hant": "手機拍攝素材先備份。", en: "Back up phone photos early.", ko: "휴대폰 사진 먼저 백업." } },
    ]},
    { id: "emergency", title: { "zh-Hant": "緊急備用", en: "Emergency", ko: "비상 상황" }, items: [
      { id: "insurance", title: { "zh-Hant": "旅遊保險資料", en: "Travel insurance record", ko: "여행 보험 정보" }, desc: { "zh-Hant": "把投保確認信和保單號碼留在手機裡。", en: "Keep the confirmation email and policy number on your phone.", ko: "확인 메일과 보험 번호를 휴대폰에 저장해 두기." } },
      { id: "hotel-address", title: { "zh-Hant": "飯店地址截圖", en: "Hotel address screenshot", ko: "호텔 주소 캡처" }, desc: { "zh-Hant": "臨時搭車時比較不會慌。", en: "Useful when you need a quick taxi or directions.", ko: "급하게 택시를 탈 때 도움이 됩니다." } },
    ]},
  ],
  usefulLinks: [
    { title: { "zh-Hant": "住宿與路線", en: "Stay & Route", ko: "숙소 및 이동" }, links: [
      { label: { "zh-Hant": "Agoda 飯店頁", en: "Agoda hotel page", ko: "Agoda hotel page" }, href: "https://www.agoda.com/zh-tw/localstitch-seogyo-town/hotel/seoul-kr.html?checkIn=2026-05-15&los=5&adults=2&rooms=1&travellerType=1&ds=qgMT%2Bi%2FlTw7Mxwmp" },
      { label: { "zh-Hant": "韓服店 Google Maps", en: "Hanbok shop Google Maps", ko: "Hanbok shop Google Maps" }, href: "https://www.google.com/maps/search/%EC%98%A5%ED%95%9C%EB%B3%B5/" },
    ]},
    { title: { "zh-Hant": "韓服與影像", en: "Hanbok & Media", ko: "한복 및 영상" }, links: [
      { label: { "zh-Hant": "工作室頁面", en: "Studio profile", ko: "Studio profile" }, href: "http://xhslink.com/o/1yRuTcW00pc" },
      { label: { "zh-Hant": "MV 範例", en: "MV sample", ko: "MV sample" }, href: "http://xhslink.com/o/15TW7yFNm7q" },
    ]},
    { title: { "zh-Hant": "付款與會員", en: "Money & Membership", ko: "결제 및 회원 혜택" }, links: [
      { label: { "zh-Hant": "華航會員權益", en: "China Airlines benefits", ko: "China Airlines benefits" }, href: "https://www.china-airlines.com/us/en/member/planning/introduction/membership-benefits" },
      { label: { "zh-Hant": "WOWPASS 即時匯率", en: "WOWPASS live rate", ko: "WOWPASS live rate" }, href: "https://www.wowexchange.net/exchange/rate?lang=en_US" },
    ]},
  ],
};

function getText(entry) {
  if (typeof entry === "string") return entry;
  return entry?.[state.lang] ?? "";
}

function checklistState() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.checklist) || "{}");
}

function saveChecklist(stateValue) {
  localStorage.setItem(STORAGE_KEYS.checklist, JSON.stringify(stateValue));
}

function formatCurrency(krw, currency = state.currency) {
  const meta = rates[currency];
  return `${meta.symbol}${Math.round(krw / meta.krwPerUnit).toLocaleString()}`;
}

function updateDocumentTitle() {
  const pageTitleKey = `nav${state.page.charAt(0).toUpperCase()}${state.page.slice(1)}`;
  const pageTitle = t[state.lang][pageTitleKey] || "Overview";
  document.title = `Seoul Travel Handbook 2026 | ${pageTitle}`;
}

function renderI18n() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (t[state.lang][key]) node.textContent = t[state.lang][key];
  });
  updateDocumentTitle();
}

function renderHero() {
  const root = document.getElementById("heroSummary");
  if (!root) return;
  root.innerHTML = data.heroSummary
    .map((item) => `<article class="summary-card"><div class="summary-label">${getText(item.label)}</div><div class="summary-value">${getText(item.value)}</div></article>`)
    .join("");
}

function renderKeyInfo() {
  const keyInfoBar = document.getElementById("keyInfoBar");
  if (!keyInfoBar) return;
  keyInfoBar.innerHTML = data.keyInfo
    .map(
      (item) => `
        <article class="key-info-card">
          <div class="summary-label">${getText(item.label)}</div>
          <div class="summary-value">${getText(item.value)}</div>
          <div class="budget-original">${getText(item.note)}</div>
        </article>
      `
    )
    .join("");
}

function renderOverview() {
  const overviewStats = document.getElementById("overviewStats");
  const importantAlerts = document.getElementById("importantAlerts");
  const overviewNotes = document.getElementById("overviewNotes");
  if (!overviewStats || !importantAlerts || !overviewNotes) return;
  overviewStats.innerHTML = data.overviewStats
    .map((item) => `<article class="mini-stat-card"><div class="mini-stat-label">${getText(item.label)}</div><div class="mini-stat-value">${getText(item.value)}</div></article>`)
    .join("");
  importantAlerts.innerHTML = data.importantAlerts
    .map((item) => `<article class="bullet-card"><div class="bullet-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.desc)}</div></article>`)
    .join("");
  overviewNotes.innerHTML = data.overviewNotes
    .map((item) => `<article class="bullet-card"><div class="bullet-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.desc)}</div></article>`)
    .join("");
}

function renderFlights() {
  const flightPageCards = document.getElementById("flightPageCards");
  const airlineBenefits = document.getElementById("airlineBenefits");
  const flightFareNotes = document.getElementById("flightFareNotes");
  const flightLinks = document.getElementById("flightLinks");
  if (!flightPageCards || !airlineBenefits || !flightFareNotes || !flightLinks) return;

  flightPageCards.innerHTML = data.flights
    .map(
      (flight) => `
        <article class="flight-card">
          <div class="bullet-title">${getText(flight.label)} · ${flight.route}</div>
          <div class="info-line"><span class="info-label">${t[state.lang].dateText}</span><span class="info-value">${flight.date}</span></div>
          <div class="info-line"><span class="info-label">${t[state.lang].timeText}</span><span class="info-value">${flight.time}</span></div>
          <div class="info-line"><span class="info-label">${t[state.lang].classText}</span><span class="info-value">${getText(flight.cabin)}</span></div>
        </article>
      `
    )
    .join("");

  airlineBenefits.innerHTML = data.airlineBenefits
    .map((item) => `<article class="bullet-card"><div class="bullet-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.desc)}</div></article>`)
    .join("");

  flightFareNotes.innerHTML = data.flightFareNotes
    .map((item) => `<article class="bullet-card"><div class="bullet-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.desc)}</div></article>`)
    .join("");

  flightLinks.innerHTML = data.flightLinks
    .map((link) => `<div class="link-row"><span class="link-row-label">${getText(link.label)}</span><a class="link-button" href="${link.href}" target="_blank" rel="noreferrer">${t[state.lang].openLink}</a></div>`)
    .join("");
}

function renderItinerary() {
  const itineraryList = document.getElementById("itineraryList");
  if (!itineraryList) return;
  itineraryList.innerHTML = data.itinerary
    .map(
      (item) => `
        <details class="itinerary-card" ${item.open ? "open" : ""}>
          <summary class="accordion-summary">
            <div class="accordion-topline"><span class="day-chip">${getText(item.day)}</span><span class="date-label">${item.date}</span></div>
            <h3>${getText(item.plan)}</h3>
          </summary>
          <div class="accordion-body">
            <div class="itinerary-meta-grid">
              <div class="itinerary-meta-card"><div class="itinerary-meta-label">${t[state.lang].locationLabel}</div><div class="itinerary-meta-value">${getText(item.location)}</div></div>
              <div class="itinerary-meta-card"><div class="itinerary-meta-label">${t[state.lang].estimatedCostLabel}</div><div class="itinerary-meta-value">${formatCurrency(item.costKrw)}</div><div class="budget-original">${formatCurrency(item.costKrw, "KRW")}</div></div>
              <div class="itinerary-meta-card"><div class="itinerary-meta-label">${t[state.lang].transportLabel}</div><div class="itinerary-meta-value">${getText(item.transport)}</div></div>
              <div class="itinerary-meta-card"><div class="itinerary-meta-label">${t[state.lang].reminderLabel}</div><div class="itinerary-meta-value">${getText(item.reminder)}</div></div>
            </div>
          </div>
        </details>
      `
    )
    .join("");
}

function renderHotel() {
  const hotel = data.hotel;
  const hotelCard = document.getElementById("hotelCard");
  if (!hotelCard) return;
  hotelCard.innerHTML = `
    <h3>${getText(hotel.title)}</h3>
    <p class="card-intro">${getText(hotel.subtitle)}</p>
    <div class="hotel-pill-row">${hotel.chips.map((chip) => `<span class="pill">${getText(chip)}</span>`).join("")}</div>
    <div class="price-stack">
      ${hotel.notes.map((item) => `<div class="price-row"><div class="price-label">${getText(item.title)}</div><div class="price-value">${formatCurrency(item.krw)}</div><div class="budget-original">${formatCurrency(item.krw, "KRW")}</div></div>`).join("")}
    </div>
    <div class="bullet-stack">${hotel.copy.map((item) => `<article class="bullet-card"><div class="bullet-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.desc)}</div></article>`).join("")}</div>
    <div class="route-actions"><a class="action-link" href="${hotel.href}" target="_blank" rel="noreferrer">Agoda</a></div>
  `;
}

function renderHanbok() {
  const hanbokPlanCard = document.getElementById("hanbokPlanCard");
  const hanbokRules = document.getElementById("hanbokRules");
  if (!hanbokPlanCard || !hanbokRules) return;
  hanbokPlanCard.innerHTML = `
    <h3>${t[state.lang].reservedPlanTitle}</h3>
    <div class="price-stack">
      <div class="price-row"><div class="price-label">${getText({ "zh-Hant": "預約時間", en: "Appointment", ko: "예약 시간" })}</div><div class="price-value">${getText({ "zh-Hant": "5 月 19 日 14:00", en: "May 19, 14:00", ko: "5월 19일 14:00" })}</div></div>
      <div class="price-row"><div class="price-label">${t[state.lang].packageText}</div><div class="price-value">640,000 KRW</div></div>
      <div class="price-row"><div class="price-label">${t[state.lang].addonText}</div><div class="price-value">300,000 KRW</div></div>
      <div class="price-row"><div class="price-label">${t[state.lang].totalText}</div><div class="price-value">940,000 KRW</div></div>
      <div class="price-row"><div class="price-label">${t[state.lang].depositText}</div><div class="price-value">300 CNY</div></div>
    </div>
    <div class="payment-note"><strong>${getText({ "zh-Hant": "內容包含", en: "Includes", ko: "포함 내용" })}</strong><div class="bullet-desc">${getText({ "zh-Hant": "200 張原片 + 12 張精修", en: "200 original photos + 12 retouched photos", ko: "원본 200장 + 보정 12장" })}</div></div>
    <div class="include-chip-row">${data.hanbok.includes.map((item) => `<span class="include-chip">${getText(item)}</span>`).join("")}</div>
    <div class="warning-chip-row"><span class="warning-chip">${t[state.lang].surchargeText}</span><span class="warning-chip">${t[state.lang].cashText}</span></div>
  `;
  hanbokRules.innerHTML = data.hanbok.rules
    .map((item) => `<article class="bullet-card"><div class="bullet-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.desc)}</div></article>`)
    .join("");
}

function renderRoute() {
  const routeSteps = document.getElementById("routeSteps");
  const routeTimeline = document.getElementById("routeTimeline");
  const routeCards = document.getElementById("routeCards");
  if (!routeSteps || !routeTimeline || !routeCards) return;
  routeSteps.innerHTML = data.routeSteps
    .map((item) => `<article class="step-card"><div class="step-label">${getText(item.label)}</div><div class="bullet-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.desc)}</div></article>`)
    .join("");
  routeTimeline.innerHTML = data.routeTimeline
    .map((item) => `<article class="timeline-card"><div class="timeline-time">${item.time}</div><div><div class="bullet-title">${getText(item.title)}</div><div class="timeline-desc">${getText(item.desc)}</div></div></article>`)
    .join("");
  routeCards.innerHTML = data.routeCards
    .map(
      (item) => `
        <article class="route-card">
          <div class="route-top"><div><div class="route-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.useCase)}</div></div><span class="route-chip">${getText(item.duration)}</span></div>
          <div class="info-line"><span class="info-label">${t[state.lang].startLabel}</span><span class="info-value">${getText(item.start)}</span></div>
          <div class="info-line"><span class="info-label">${t[state.lang].destinationLabel}</span><span class="info-value">${getText(item.destination)}</span></div>
          <div class="info-line"><span class="info-label">${t[state.lang].costLabel}</span><span class="info-value">${getText(item.cost)}</span></div>
          <div class="bullet-desc">${getText(item.desc)}</div>
          <div class="route-actions"><a class="action-link" href="${item.href}" target="_blank" rel="noreferrer">${t[state.lang].mapsLabel}</a></div>
        </article>
      `
    )
    .join("");
}

function renderBudget() {
  const budgetHighlights = document.getElementById("budgetHighlights");
  const budgetSummary = document.getElementById("budgetSummary");
  const budgetCards = document.getElementById("budgetCards");
  const budgetTableBody = document.getElementById("budgetTableBody");
  const budgetSelectedHeading = document.getElementById("budgetSelectedHeading");
  const budgetOriginalHeading = document.getElementById("budgetOriginalHeading");
  if (!budgetHighlights || !budgetSummary || !budgetCards || !budgetTableBody) return;
  const totalTripKrw = 940000 + 19247 * rates.TWD.krwPerUnit + 120000 + 360000 + 250000;
  const perPersonKrw = totalTripKrw / 2;
  const paidSoFarKrw = 300 * rates.CNY.krwPerUnit;
  const remainingTripKrw = totalTripKrw - paidSoFarKrw;
  const selectedCurrency = state.currency;
  const selectedHeadingMap = {
    TWD: "TWD",
    KRW: "KRW",
    CNY: "CNY",
  };

  if (budgetSelectedHeading) budgetSelectedHeading.textContent = selectedHeadingMap[selectedCurrency];
  if (budgetOriginalHeading) budgetOriginalHeading.textContent = "KRW";

  budgetHighlights.innerHTML = [
    { label: t[state.lang].totalTripCostLabel, value: totalTripKrw, note: t[state.lang].totalTripCostNote },
    { label: t[state.lang].perPersonCostLabel, value: perPersonKrw, note: t[state.lang].perPersonCostNote },
    { label: t[state.lang].paidSoFarLabel, value: paidSoFarKrw, note: t[state.lang].paidSoFarNote },
    { label: t[state.lang].remainingTripBudgetLabel, value: remainingTripKrw, note: t[state.lang].remainingTripBudgetNote },
  ]
    .map(
      (item) => `
        <article class="bullet-card budget-highlight-item">
          <div class="bullet-title">${item.label}</div>
          <div class="budget-main">${formatCurrency(item.value, selectedCurrency)}</div>
          <div class="budget-original">${formatCurrency(item.value, "KRW")} · ${item.note}</div>
        </article>
      `
    )
    .join("");

  budgetSummary.innerHTML = data.budgetSummary
    .map((item) => `<article class="budget-summary-card"><div class="budget-summary-label">${getText(item.label)}</div><div class="budget-summary-value">${formatCurrency(item.krw, selectedCurrency)}</div><div class="budget-original">${formatCurrency(item.krw, "KRW")}</div></article>`)
    .join("");
  budgetCards.innerHTML = data.budgetRows
    .map(
      (item) => `
        <article class="budget-card">
          <div class="budget-summary-label">${getText(item.item)}</div>
          <div class="budget-main">${formatCurrency(item.krw, selectedCurrency)}</div>
          <div class="budget-original">${formatCurrency(item.krw, "KRW")} · ${getText(item.note)}</div>
        </article>
      `
    )
    .join("");
  budgetTableBody.innerHTML = data.budgetRows
    .map(
      (item) => `
        <tr>
          <td data-label="${t[state.lang].budgetItemHeading}">${getText(item.item)}</td>
          <td data-label="${selectedHeadingMap[selectedCurrency]}">${formatCurrency(item.krw, selectedCurrency)}</td>
          <td data-label="KRW">${formatCurrency(item.krw, "KRW")}</td>
          <td data-label="${t[state.lang].budgetNoteHeading}">${getText(item.note)}</td>
        </tr>
      `
    )
    .join("");
}

function renderChecklist() {
  const saved = checklistState();
  const checklistGroups = document.getElementById("checklistGroups");
  if (!checklistGroups) return;
  checklistGroups.innerHTML = data.checklistGroups
    .map((group) => {
      const completed = group.items.filter((item) => saved[item.id]).length;
      return `
        <article class="checklist-group-card">
          <div class="checklist-group-top">
            <div>
              <div class="bullet-title">${getText(group.title)}</div>
              <div class="budget-original">${completed} / ${group.items.length} ${t[state.lang].checklistProgress}</div>
            </div>
            <span class="progress-pill">${Math.round((completed / group.items.length) * 100)}%</span>
          </div>
          <div class="checklist-list">
            ${group.items
              .map(
                (item) => `
                  <article class="checklist-card">
                    <label class="check-toggle">
                      <input class="check-input" type="checkbox" data-check="${item.id}" ${saved[item.id] ? "checked" : ""} />
                      <span class="check-body">
                        <span class="check-mark" aria-hidden="true"></span>
                        <span>
                          <span class="check-title">${getText(item.title)}</span>
                          <span class="check-desc">${getText(item.desc)}</span>
                        </span>
                      </span>
                    </label>
                  </article>
                `
              )
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderLinks() {
  const linksGrid = document.getElementById("linksGrid");
  if (!linksGrid) return;
  linksGrid.innerHTML = data.usefulLinks
    .map(
      (group) => `
        <article class="link-block">
          <h3>${getText(group.title)}</h3>
          <div class="link-list">
            ${group.links.map((link) => `<div class="link-row"><span class="link-row-label">${getText(link.label)}</span><a class="link-button" href="${link.href}" target="_blank" rel="noreferrer">${t[state.lang].openLink}</a></div>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderAll() {
  renderI18n();
  renderHero();
  renderKeyInfo();
  renderOverview();
  renderFlights();
  renderHotel();
  renderHanbok();
  renderRoute();
  renderBudget();
  renderItinerary();
  renderChecklist();
  renderLinks();
}

function syncControls() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === state.lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-currency]").forEach((button) => {
    const active = button.dataset.currency === state.currency;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function bindControls() {
  syncControls();
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      localStorage.setItem(STORAGE_KEYS.lang, state.lang);
      syncControls();
      renderAll();
      bindChecklist();
      bindImageModal();
    });
  });
  document.querySelectorAll("[data-currency]").forEach((button) => {
    button.addEventListener("click", () => {
      state.currency = button.dataset.currency;
      localStorage.setItem(STORAGE_KEYS.currency, state.currency);
      syncControls();
      renderHotel();
      renderBudget();
      renderOverview();
      renderItinerary();
    });
  });
}

function bindChecklist() {
  document.querySelectorAll("[data-check]").forEach((input) => {
    input.addEventListener("change", () => {
      const next = checklistState();
      next[input.dataset.check] = input.checked;
      saveChecklist(next);
      renderChecklist();
      bindChecklist();
    });
  });
}

function syncPageNavigation() {
  document.body.dataset.page = state.page;
  document.querySelectorAll("[data-page-link]").forEach((link) => {
    const active = link.dataset.pageLink === state.page;
    link.classList.toggle("active", active);
    link.setAttribute("aria-current", active ? "page" : "false");
    link.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll("[data-page-panel]").forEach((panel) => {
    const active = panel.dataset.pagePanel === state.page;
    panel.hidden = !active;
    panel.classList.toggle("active", active);
  });
}

function setPage(page, { scroll = true } = {}) {
  if (!PAGE_IDS.includes(page)) return;
  state.page = page;
  localStorage.setItem(STORAGE_KEYS.page, page);
  updateDocumentTitle();
  syncPageNavigation();
  if (scroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function bindPageNavigation() {
  document.querySelectorAll("[data-page-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setPage(link.dataset.pageLink);
    });
  });
}

function bindImageModal() {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const close = document.getElementById("modalClose");
  document.querySelectorAll(".gallery-trigger").forEach((button) => {
    button.onclick = () => {
      const image = button.querySelector("img");
      modalImage.src = button.dataset.image;
      modalImage.alt = image?.alt || "";
      modalCaption.textContent = button.dataset.captionKey ? t[state.lang][button.dataset.captionKey] || "" : "";
      modal.showModal();
    };
  });
  close.onclick = () => modal.close();
  modal.onclick = (event) => {
    const rect = modal.getBoundingClientRect();
    const inside = rect.top <= event.clientY && event.clientY <= rect.bottom && rect.left <= event.clientX && event.clientX <= rect.right;
    if (!inside) modal.close();
  };
}

function bindProgress() {
  const bar = document.getElementById("pageProgress");
  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    bar.style.width = `${Math.min(Math.max(ratio, 0), 100)}%`;
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

renderAll();
bindControls();
bindChecklist();
bindPageNavigation();
syncPageNavigation();
bindImageModal();
bindProgress();
