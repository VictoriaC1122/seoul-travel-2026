const STORAGE_KEYS = {
  lang: "seoul-handbook-lang",
  currency: "seoul-handbook-currency",
  checklist: "seoul-handbook-checklist-v3",
  page: "seoul-handbook-page",
};

const PAGE_IDS = ["overview", "flights", "hotel", "hanbok", "route", "budget", "itinerary", "notes"];

const PAGE_ALIASES = {
  checklist: "notes",
  links: "notes",
};

function normalizePage(page) {
  if (!page) return null;
  if (PAGE_IDS.includes(page)) return page;
  return PAGE_ALIASES[page] || null;
}

function getRequestedPage() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = normalizePage(params.get("page"));
  if (fromQuery) return fromQuery;
  return normalizePage(localStorage.getItem(STORAGE_KEYS.page)) || "overview";
}

const state = {
  lang: localStorage.getItem(STORAGE_KEYS.lang) || "zh-Hant",
  currency: localStorage.getItem(STORAGE_KEYS.currency) || "TWD",
  page: getRequestedPage(),
};

const rates = {
  KRW: { symbol: "₩", krwPerUnit: 1 },
  TWD: { symbol: "NT$", krwPerUnit: 41.8 },
  CNY: { symbol: "¥", krwPerUnit: 186.5 },
};

const COSTS = {
  hotelTwdTotal: 19247,
  flightTwdPerPerson: 12718,
  travelers: 2,
  transportKrw: 120000,
  foodKrw: 360000,
  shoppingKrw: 250000,
  hanbokTotalKrw: 940000,
  hanbokRemainingKrw: 880000,
  hanbokDepositCny: 300,
};

const t = {
  "zh-Hant": {
    languageSwitcher: "語言",
    currencySwitcher: "幣別",
    heroKicker: "Seoul travel handbook",
    heroTitle: "首爾旅行 2026",
    heroSubtitle: "2026 年 5 月 · 首爾旅行手冊",
    heroDates: "2026 / 05 / 15 - 2026 / 05 / 20",
    heroCity: "首爾",
    heroAreaStay: "弘大",
    heroAreaShoot: "北村 / 安國",
    heroAreaPalace: "景福宮",
    heroDestinations: "弘大 · 漢南洞 · 狎鷗亭 · 聖水 · 北村 · 安國",
    heroNarrative: "從韓屋街巷與宮牆光影開始，沿著地鐵線穿過咖啡廳、選物店、夜晚餐桌與城市轉場，把首爾的日常節奏慢慢收進行李裡。",
    heroPrimaryAction: "查看行程",
    heroSecondaryAction: "韓服資訊",
    keyInfoTitle: "旅程摘要",
    jumpLinksTitle: "分頁入口",
    navOverview: "總覽",
    navFlights: "航班",
    navHotel: "住宿",
    navHanbok: "韓服",
    navRoute: "交通",
    navBudget: "預算",
    navItinerary: "行程",
    navNotes: "備註",
    overviewKicker: "總覽",
    overviewTitle: "首爾旅程總覽",
    overviewLead: "先把日期、街區和每天的旅行節奏收在同一頁，翻開就能知道這趟旅程會往哪裡走。",
    overviewSnapshotTitle: "旅程亮點",
    overviewPreviewTitle: "每日預覽",
    overviewPracticalTitle: "實用資訊",
    overviewRecommendTitle: "順路可排",
    overviewAlertsTitle: "當日主題",
    overviewNotesTitle: "行程節奏",
    overviewFlightTitle: "航班與支援",
    overviewItineraryTitle: "每日行程",
    itineraryKicker: "行程",
    itineraryLead: "把每天的區域、節奏與移動方式收在一起，翻到哪一天就能立刻進入旅程。",
    homeShortcutHanbok: "韓服",
    homeShortcutHanbokNote: "拍攝時間、方案與畫面整理在這裡",
    homeShortcutMap: "交通",
    homeShortcutMapNote: "移動方式與路線放在這頁",
    homeShortcutBudget: "預算",
    homeShortcutBudgetNote: "費用整理與換算都在這裡",
    homeShortcutHotel: "飯店",
    homeShortcutHotelNote: "住宿資訊、照片與連結整理在這頁",
    flightsKicker: "航班",
    flightsTitle: "航班",
    flightsLead: "航班、票價跟會員權益都放這裡，要核對時比較快。",
    flightsSummaryTitle: "航班資訊",
    flightsFareTitle: "票價與艙等",
    flightsLinkTitle: "官方連結",
    airlineBenefitsTitle: "中信華航黑卡重點",
    hotelKicker: "住宿",
    hotelTitle: "住宿",
    hotelLead: "住宿資料都放一起，要找地址或價格比較快。",
    hotelGalleryTitle: "住宿照片",
    hotelExteriorCaption: "飯店外觀",
    hotelRoomCaption: "高級雙床房",
    hanbokKicker: "韓服",
    hanbokTitle: "韓服",
    hanbokLead: "拍攝當天直接打開這頁，節奏和細節都會比較穩。",
    hanbokRulesTitle: "拍攝前讀一下",
    hanbokReferenceTitle: "參考照片",
    hanbokCaptionOne: "霧藍韓服參考",
    hanbokCaptionTwo: "景福宮白色韓服參考",
    hanbokCaptionThree: "宮殿石階參考",
    hanbokCaptionFour: "走廊肖像參考",
    instructionsCaption: "店家拍攝規則",
    routeKicker: "交通",
    routeTitle: "交通",
    routeLead: "把出發時間、移動方式和沿途節奏整理在一起，出門前看這頁就好。",
    routeStepsTitle: "今日路線",
    routeTimelineTitle: "出發節奏",
    routeOptionsTitle: "移動方式",
    subwayMapTitle: "地鐵圖",
    subwayCaption: "首爾地鐵官方路線圖",
    budgetKicker: "預算",
    budgetTitle: "預算",
    budgetLead: "預算先這樣抓，切幣別時也會一起留韓元給你看。",
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
    notesLead: "把旅途中會回頭確認的資料留在這裡，找起來比較安心。",
    checklistTitle: "行前清單",
    linksTitle: "實用連結",
    bottomHome: "首頁",
    bottomSchedule: "備註",
    bottomChecklist: "清單",
    bottomHanbok: "韓服",
    bottomMap: "交通",
    bottomBudget: "預算",
    bottomItinerary: "行程",
    dateText: "日期",
    timeText: "時間",
    classText: "艙等",
    flightNumberText: "航班",
    departureText: "出發",
    arrivalText: "抵達",
    countryText: "國家",
    cityText: "城市",
    airportText: "機場",
    terminalText: "航廈",
    reservedPlanTitle: "已預約韓服方案",
    packageText: "套餐",
    addonText: "加購",
    totalText: "總計",
    depositText: "訂金",
    surchargeText: "卡片可能加收 10%",
    cashText: "韓元現金先備著",
    startLabel: "起點",
    destinationLabel: "目的地",
    durationLabel: "時間",
    costLabel: "費用",
    useCaseLabel: "最適合",
    locationLabel: "地點",
    estimatedCostLabel: "預估花費",
    transportLabel: "移動方式",
    reminderLabel: "貼心提醒",
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
    heroCity: "Seoul",
    heroAreaStay: "Hongdae",
    heroAreaShoot: "Bukchon / Anguk",
    heroAreaPalace: "Gyeongbokgung",
    heroDestinations: "Hongdae · Hannam-dong · Apgujeong · Seongsu · Bukchon · Anguk",
    heroNarrative: "Start with hanok lanes and palace walls, then move through subway lines, cafes, select shops, and warm evening tables until Seoul settles naturally into your luggage.",
    heroPrimaryAction: "View itinerary",
    heroSecondaryAction: "Hanbok details",
    keyInfoTitle: "Trip summary",
    jumpLinksTitle: "Sections",
    navOverview: "Overview",
    navFlights: "Flights",
    navHotel: "Hotel",
    navHanbok: "Hanbok",
    navRoute: "Transportation",
    navBudget: "Budget",
    navItinerary: "Itinerary",
    navNotes: "Notes",
    overviewKicker: "Overview",
    overviewTitle: "Seoul Journey Overview",
    overviewLead: "See the dates, districts, and rhythm of the trip in one place before diving into each day.",
    overviewSnapshotTitle: "Trip highlights",
    overviewPreviewTitle: "Day-by-day preview",
    overviewPracticalTitle: "Practical info",
    overviewRecommendTitle: "Worth fitting in",
    overviewAlertsTitle: "Day themes",
    overviewNotesTitle: "Travel rhythm",
    overviewFlightTitle: "Flights and support",
    overviewItineraryTitle: "Daily itinerary",
    itineraryKicker: "Itinerary",
    itineraryLead: "Each day shows the plan, area, transport, cost, and reminder.",
    homeShortcutHanbok: "Hanbok",
    homeShortcutHanbokNote: "Timing, package, and visual references",
    homeShortcutMap: "Transport",
    homeShortcutMapNote: "Routes and transfers in one place",
    homeShortcutBudget: "Budget",
    homeShortcutBudgetNote: "Costs and conversions at a glance",
    homeShortcutHotel: "Hotel",
    homeShortcutHotelNote: "Stay details, photos, and booking link",
    flightsKicker: "Flights",
    flightsTitle: "Flights",
    flightsLead: "Flights, fare details, and member perks are all here for quick checking.",
    flightsSummaryTitle: "Flight details",
    flightsFareTitle: "Fare and cabin notes",
    flightsLinkTitle: "Official links",
    airlineBenefitsTitle: "CTBC China Airlines black card highlights",
    hotelKicker: "Hotel",
    hotelTitle: "Hotel",
    hotelLead: "The address, room type, and price are all here on one page.",
    hotelGalleryTitle: "Hotel photos",
    hotelExteriorCaption: "Hotel exterior",
    hotelRoomCaption: "Deluxe twin room",
    hanbokKicker: "Hanbok",
    hanbokTitle: "Hanbok",
    hanbokLead: "Open this page first on the shoot day.",
    hanbokRulesTitle: "Shooting notes",
    hanbokReferenceTitle: "Reference photos",
    hanbokCaptionOne: "Blue hanbok reference",
    hanbokCaptionTwo: "White hanbok at Gyeongbokgung",
    hanbokCaptionThree: "Palace stairs reference",
    hanbokCaptionFour: "Corridor portrait reference",
    instructionsCaption: "Store shooting instructions",
    routeKicker: "Transportation",
    routeTitle: "Transportation",
    routeLead: "How to go, what to take, and when to leave are all here.",
    routeStepsTitle: "Route steps",
    routeTimelineTitle: "Suggested timing",
    routeOptionsTitle: "Route cards",
    subwayMapTitle: "Subway map",
    subwayCaption: "Official Seoul Metro map",
    budgetKicker: "Budget",
    budgetTitle: "Budget",
    budgetLead: "Use this as the rough budget page. KRW stays visible for payment.",
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
    notesLead: "Day plans, checklists, and links are all here.",
    checklistTitle: "Checklist",
    linksTitle: "Useful links",
    bottomHome: "Home",
    bottomSchedule: "Schedule",
    bottomChecklist: "Checklist",
    bottomHanbok: "Hanbok",
    bottomMap: "Map",
    bottomBudget: "Budget",
    bottomItinerary: "Itinerary",
    dateText: "Date",
    timeText: "Time",
    classText: "Class",
    flightNumberText: "Flight",
    departureText: "Departure",
    arrivalText: "Arrival",
    countryText: "Country",
    cityText: "City",
    airportText: "Airport",
    terminalText: "Terminal",
    reservedPlanTitle: "Reserved Hanbok Plan",
    packageText: "Package",
    addonText: "Add-on",
    totalText: "Total",
    depositText: "Deposit",
    surchargeText: "Card may +10%",
    cashText: "Bring KRW cash if you can",
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
    heroCity: "서울",
    heroAreaStay: "홍대",
    heroAreaShoot: "북촌 / 안국",
    heroAreaPalace: "경복궁",
    heroDestinations: "홍대 · 한남동 · 압구정 · 성수 · 북촌 · 안국",
    heroNarrative: "한옥 골목과 궁궐 담장에서 시작해 지하철 노선을 따라 카페, 편집숍, 저녁 식탁과 도시의 리듬을 천천히 여행 가방에 담아가는 서울 일정입니다.",
    heroPrimaryAction: "일정 보기",
    heroSecondaryAction: "한복 정보",
    keyInfoTitle: "여행 요약",
    jumpLinksTitle: "페이지 이동",
    navOverview: "개요",
    navFlights: "항공편",
    navHotel: "호텔",
    navHanbok: "한복",
    navRoute: "교통",
    navBudget: "예산",
    navItinerary: "일정",
    navNotes: "메모",
    overviewKicker: "개요",
    overviewTitle: "서울 여행 개요",
    overviewLead: "날짜, 동네, 하루 리듬을 한 페이지에 모아두어 전체 흐름을 먼저 잡을 수 있습니다.",
    overviewSnapshotTitle: "여행 하이라이트",
    overviewPreviewTitle: "하루 미리보기",
    overviewPracticalTitle: "실용 정보",
    overviewRecommendTitle: "같이 보기 좋은 곳",
    overviewAlertsTitle: "하루 테마",
    overviewNotesTitle: "일정 흐름",
    overviewFlightTitle: "항공편 및 지원",
    overviewItineraryTitle: "일별 일정",
    itineraryKicker: "일정",
    itineraryLead: "하루별로 주요 일정, 구역, 이동, 비용, 메모를 같이 봅니다.",
    homeShortcutHanbok: "한복",
    homeShortcutHanbokNote: "촬영 시간, 플랜, 레퍼런스 정리",
    homeShortcutMap: "교통",
    homeShortcutMapNote: "이동 동선과 노선 정리",
    homeShortcutBudget: "예산",
    homeShortcutBudgetNote: "예산과 환산 금액 한눈에 보기",
    homeShortcutHotel: "호텔",
    homeShortcutHotelNote: "숙소 정보, 사진, 예약 링크 정리",
    flightsKicker: "항공편",
    flightsTitle: "항공편",
    flightsLead: "항공편, 운임, 회원 혜택을 한 페이지에 모아뒀습니다.",
    flightsSummaryTitle: "항공편 정보",
    flightsFareTitle: "운임 및 좌석 메모",
    flightsLinkTitle: "공식 링크",
    airlineBenefitsTitle: "중신 화항 블랙카드 핵심",
    hotelKicker: "호텔",
    hotelTitle: "호텔",
    hotelLead: "주소, 객실, 가격을 한 페이지에 모아뒀습니다.",
    hotelGalleryTitle: "호텔 사진",
    hotelExteriorCaption: "호텔 외관",
    hotelRoomCaption: "디럭스 트윈룸",
    hanbokKicker: "한복",
    hanbokTitle: "한복",
    hanbokLead: "촬영 당일엔 이 페이지부터 보면 됩니다.",
    hanbokRulesTitle: "촬영 안내",
    hanbokReferenceTitle: "레퍼런스 사진",
    hanbokCaptionOne: "블루 한복 레퍼런스",
    hanbokCaptionTwo: "경복궁 화이트 한복 레퍼런스",
    hanbokCaptionThree: "궁전 계단 레퍼런스",
    hanbokCaptionFour: "복도 초상 레퍼런스",
    instructionsCaption: "매장 촬영 안내",
    routeKicker: "교통",
    routeTitle: "교통",
    routeLead: "어떻게 가는지, 뭘 타는지, 몇 시에 나가면 되는지 여기서 보면 됩니다.",
    routeStepsTitle: "이동 순서",
    routeTimelineTitle: "추천 시간표",
    routeOptionsTitle: "이동 옵션",
    subwayMapTitle: "지하철 노선도",
    subwayCaption: "서울 메트로 공식 노선도",
    budgetKicker: "예산",
    budgetTitle: "예산",
    budgetLead: "예산은 일단 이 정도로 보면 됩니다. KRW도 같이 남겨둡니다.",
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
    notesLead: "자잘하지만 필요한 것들은 여기에 모아뒀습니다.",
    checklistTitle: "체크리스트",
    linksTitle: "유용한 링크",
    bottomHome: "홈",
    bottomSchedule: "일정",
    bottomChecklist: "체크",
    bottomHanbok: "한복",
    bottomMap: "교통",
    bottomBudget: "예산",
    bottomItinerary: "일정",
    dateText: "날짜",
    timeText: "시간",
    classText: "좌석 등급",
    flightNumberText: "항공편",
    departureText: "출발",
    arrivalText: "도착",
    countryText: "국가",
    cityText: "도시",
    airportText: "공항",
    terminalText: "터미널",
    reservedPlanTitle: "예약된 한복 플랜",
    packageText: "패키지",
    addonText: "추가",
    totalText: "총액",
    depositText: "예약금",
    surchargeText: "카드 결제 시 10% 추가 가능",
    cashText: "가능하면 KRW 현금도 챙기기",
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
    { label: { "zh-Hant": "今晚落腳", en: "Base", ko: "숙소 베이스" }, value: { "zh-Hant": "弘大西橋 · Local Stitch", en: "Seogyo, Hongdae · Local Stitch", ko: "서교 · 로컬스티치" } },
    { label: { "zh-Hant": "旅程天數", en: "Length", ko: "여행 기간" }, value: { "zh-Hant": "6 天 5 夜", en: "6 days / 5 nights", ko: "6일 5박" } },
    { label: { "zh-Hant": "主題日", en: "Anchor day", ko: "핵심 일정" }, value: { "zh-Hant": "5/19 北村韓服拍攝", en: "May 19 · Bukchon hanbok shoot", ko: "5/19 북촌 한복 촬영" } },
    { label: { "zh-Hant": "城市節奏", en: "Travel rhythm", ko: "여행 리듬" }, value: { "zh-Hant": "街區散步、咖啡、購物與宮牆畫面", en: "Neighborhood walks, cafes, shopping, and palace walls", ko: "거리 산책, 카페, 쇼핑, 궁 담장" } },
  ],
  keyInfo: [
    {
      label: { "zh-Hant": "旅遊日期", en: "Travel dates", ko: "여행 날짜" },
      value: { "zh-Hant": "2026 / 05 / 15 - 2026 / 05 / 20", en: "2026 / 05 / 15 - 2026 / 05 / 20", ko: "2026 / 05 / 15 - 2026 / 05 / 20" },
      note: { "zh-Hant": "五晚首爾行程", en: "Five nights in Seoul", ko: "서울 5박 일정" },
    },
    {
      label: { "zh-Hant": "旅行地點", en: "Travel areas", ko: "여행 지역" },
      value: { "zh-Hant": "弘大 · 漢南洞 · 狎鷗亭 · 聖水 · 北村", en: "Hongdae · Hannam-dong · Apgujeong · Seongsu · Bukchon", ko: "홍대 · 한남동 · 압구정 · 성수 · 북촌" },
      note: { "zh-Hant": "沿著不同街區一天一天展開", en: "One district rhythm per day", ko: "하루에 한 축씩 움직이는 구성" },
    },
    {
      label: { "zh-Hant": "旅程主題", en: "Themes", ko: "여행 테마" },
      value: { "zh-Hant": "韓食、咖啡、購物、韓屋與宮牆", en: "Food, cafes, shopping, hanok, palace walls", ko: "음식, 카페, 쇼핑, 한옥, 궁 담장" },
      note: { "zh-Hant": "把首爾的日常、都會感與傳統畫面排進同一趟旅程裡", en: "A mix of everyday Seoul, polished city scenes, and traditional visuals", ko: "서울의 일상, 도시감, 전통적인 장면을 함께 담은 구성" },
    },
  ],
  flights: [
    {
      label: { "zh-Hant": "去程", en: "Outbound", ko: "출국" },
      airline: "China Airlines",
      airlineCode: "CI",
      flightNo: "CI 0162",
      route: "TPE → ICN",
      date: "2026-05-15",
      time: "15:30 → 19:05",
      cabin: { "zh-Hant": "經濟艙基本", en: "Economy Basic", ko: "이코노미 베이직" },
      departure: {
        country: { "zh-Hant": "台灣", en: "Taiwan", ko: "대만" },
        city: { "zh-Hant": "台北", en: "Taipei", ko: "타이베이" },
        airport: { "zh-Hant": "桃園國際機場", en: "Taoyuan International Airport", ko: "타오위안 국제공항" },
        terminal: { "zh-Hant": "第 1 航廈", en: "Terminal 1", ko: "제1터미널" },
      },
      arrival: {
        country: { "zh-Hant": "韓國", en: "South Korea", ko: "대한민국" },
        city: { "zh-Hant": "首爾", en: "Seoul", ko: "서울" },
        airport: { "zh-Hant": "仁川國際機場", en: "Incheon International Airport", ko: "인천국제공항" },
        terminal: { "zh-Hant": "第 2 航廈", en: "Terminal 2", ko: "제2터미널" },
      },
    },
    {
      label: { "zh-Hant": "回程", en: "Return", ko: "귀국" },
      airline: "China Airlines",
      airlineCode: "CI",
      flightNo: "China Airlines",
      route: "ICN → TPE",
      date: "2026-05-20",
      time: "20:05 → 21:50",
      cabin: { "zh-Hant": "經濟艙基本", en: "Economy Basic", ko: "이코노미 베이직" },
      departure: {
        country: { "zh-Hant": "韓國", en: "South Korea", ko: "대한민국" },
        city: { "zh-Hant": "首爾", en: "Seoul", ko: "서울" },
        airport: { "zh-Hant": "仁川國際機場", en: "Incheon International Airport", ko: "인천국제공항" },
        terminal: { "zh-Hant": "第 2 航廈", en: "Terminal 2", ko: "제2터미널" },
      },
      arrival: {
        country: { "zh-Hant": "台灣", en: "Taiwan", ko: "대만" },
        city: { "zh-Hant": "台北", en: "Taipei", ko: "타이베이" },
        airport: { "zh-Hant": "桃園國際機場", en: "Taoyuan International Airport", ko: "타오위안 국제공항" },
        terminal: { "zh-Hant": "第 1 航廈", en: "Terminal 1", ko: "제1터미널" },
      },
    },
  ],
  flightFareNotes: [
    { title: { "zh-Hant": "票價", en: "Fare", ko: "운임" }, desc: { "zh-Hant": "目前以每人機票 NT$12,718 估算，兩人合計約 NT$25,436。", en: "Current planning uses NT$12,718 per person, or about NT$25,436 for two travelers.", ko: "현재는 1인 항공권 NT$12,718 기준으로 보고 있으며, 2인 합계는 약 NT$25,436입니다." } },
    { title: { "zh-Hant": "出發航班", en: "Outbound flight", ko: "출국편" }, desc: { "zh-Hant": "2026/05/15 CI 0162，15:30 台北桃園出發，19:05 抵達首爾仁川。", en: "May 15, 2026 on CI 0162, departing Taipei Taoyuan at 15:30 and arriving Seoul Incheon at 19:05.", ko: "2026년 5월 15일 CI 0162편으로 15:30 타이베이 출발, 19:05 인천 도착입니다." } },
    { title: { "zh-Hant": "回程航班", en: "Return flight", ko: "귀국편" }, desc: { "zh-Hant": "2026/05/20 20:05 首爾仁川出發，21:50 抵達台北桃園。", en: "Return leaves Seoul Incheon at 20:05 on May 20, 2026 and lands in Taipei Taoyuan at 21:50.", ko: "귀국편은 2026년 5월 20일 20:05 인천 출발, 21:50 타이베이 도착입니다." } },
  ],
  airlineBenefits: [
    { title: { "zh-Hant": "優先報到與登機", en: "Priority check-in and boarding", ko: "우선 체크인과 탑승" }, desc: { "zh-Hant": "中信華航聯名卡鼎尊無限卡頁面可查到優先報到櫃檯與尊榮優先登機禮遇，這趟最實用。", en: "The CTBC China Airlines Infinite card page highlights priority check-in and priority boarding, which are especially useful on this trip.", ko: "중신 화항 제휴카드 최고급 카드 페이지에는 우선 체크인과 우선 탑승 혜택이 정리되어 있어 이번 여행에 가장 실용적입니다." } },
    { title: { "zh-Hant": "貴賓室與機場服務", en: "Lounge and airport services", ko: "라운지와 공항 서비스" }, desc: { "zh-Hant": "卡面也有全球貴賓室禮遇與國際機場接送等服務，出發前可以再看一次當期規則。", en: "The card page also lists lounge access and airport transfer-related services; it is worth checking the latest terms before departure.", ko: "카드 페이지에는 라운지 이용과 공항 이동 관련 서비스도 정리되어 있으니 출발 전에 최신 조건을 한 번 더 보는 편이 좋습니다." } },
    { title: { "zh-Hant": "華夏會員與哩程", en: "Dynasty membership and miles", ko: "화하회원 및 마일리지" }, desc: { "zh-Hant": "官方頁面有提到最優享華夏會員金卡會籍與較高哩程回饋，若要累積哩程這張卡比較有感。", en: "The official page mentions premium Dynasty membership treatment and stronger mileage earning, so it is a good card if mileage matters to you.", ko: "공식 페이지에는 화하회원 관련 우대와 높은 마일 적립 내용이 있어 마일리지 중심이면 가치가 큽니다." } },
    { title: { "zh-Hant": "出發前再核對一次", en: "Check the live terms once more", ko: "출발 전에 한 번 더 확인" }, desc: { "zh-Hant": "以中信官網目前公告為準，像接送次數、使用門檻與登錄方式都建議出發前再看一遍。", en: "Use the current CTBC page as the final source of truth, especially for transfer quotas, thresholds, and registration details.", ko: "공항 이동 서비스 횟수, 사용 기준, 사전 등록 조건 등은 중신 공식 페이지 기준으로 다시 확인하는 편이 안전합니다." } },
  ],
  flightLinks: [
    { label: { "zh-Hant": "中信華航聯名卡官方頁", en: "CTBC China Airlines co-branded card", ko: "중신 화항 제휴카드 공식 페이지" }, href: "https://www.ctbcbank.com/twrbo/zh_tw/cc_index/cc_product/cc_introduction/cc_travel/cc_travel_CI.html" },
    { label: { "zh-Hant": "中信信用卡機場接送 / 旅遊權益", en: "CTBC airport transfer and travel benefits", ko: "중신 공항 이동 / 여행 혜택" }, href: "https://www.ctbcbank.com/twrbo/zh_tw/cc_index/cc_service/airport.html" },
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
      { title: { "zh-Hant": "飯店總價", en: "Hotel total", ko: "호텔 총액" }, krw: COSTS.hotelTwdTotal * rates.TWD.krwPerUnit },
      { title: { "zh-Hant": "平均每晚", en: "Per night", ko: "1박 평균" }, krw: (COSTS.hotelTwdTotal / 5) * rates.TWD.krwPerUnit },
      { title: { "zh-Hant": "每人分攤", en: "Per person", ko: "1인 기준" }, krw: (COSTS.hotelTwdTotal / COSTS.travelers) * rates.TWD.krwPerUnit },
      { title: { "zh-Hant": "每人每晚", en: "Per person / night", ko: "1인 1박 기준" }, krw: (COSTS.hotelTwdTotal / (5 * COSTS.travelers)) * rates.TWD.krwPerUnit },
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
      { title: { "zh-Hant": "準時到，畫面才從容", en: "Punctuality matters most", ko: "정시 도착이 가장 중요" }, desc: { "zh-Hant": "若晚到超過 20 分鐘，店家會另外計費，拍攝時間也可能跟著縮短。", en: "A 20-minute delay triggers a penalty and may shorten the shoot.", ko: "20분 지각 시 벌금과 시간 단축이 있습니다." } },
      { title: { "zh-Hant": "12:45 - 13:00 出門最從容", en: "Leaving around 12:45 - 13:00 works well", ko: "12:45 - 13:00 출발이면 무난" }, desc: { "zh-Hant": "北村巷子容易繞，早一點到附近，拍攝前心情也會比較穩。", en: "Bukchon is easy to get turned around in, so getting there a bit early helps.", ko: "북촌은 길이 헷갈리기 쉬워서 조금 일찍 도착하는 편이 편합니다." } },
    ],
  },
  routeSteps: [
    { label: { "zh-Hant": "第 1 步", en: "Step 1", ko: "1단계" }, title: { "zh-Hant": "飯店", en: "Hotel", ko: "호텔" }, desc: { "zh-Hant": "洛卡斯提奇創作者小鎮西橋店", en: "Local Stitch Creator Town Seogyo", ko: "로컬스티치 크리에이터 타운 서교" } },
    { label: { "zh-Hant": "第 2 步", en: "Step 2", ko: "2단계" }, title: { "zh-Hant": "車站", en: "Station", ko: "역" }, desc: { "zh-Hant": "弘大入口站", en: "Hongik Univ. Station", ko: "홍대입구역" } },
    { label: { "zh-Hant": "第 3 步", en: "Step 3", ko: "3단계" }, title: { "zh-Hant": "北村", en: "Bukchon", ko: "북촌" }, desc: { "zh-Hant": "安國站 2 號出口附近", en: "Near Anguk Station Exit 2", ko: "안국역 2번 출구 근처" } },
    { label: { "zh-Hant": "第 4 步", en: "Step 4", ko: "4단계" }, title: { "zh-Hant": "韓服店", en: "Hanbok shop", ko: "한복 매장" }, desc: { "zh-Hant": "옥한복", en: "Ok Hanbok", ko: "옥한복" } },
  ],
  routeTimeline: [
    { time: "13:00", title: { "zh-Hant": "從飯店出發", en: "Leave hotel", ko: "호텔 출발" }, desc: { "zh-Hant": "從弘大這個時間出門，整體步調最剛好。", en: "This timing works well.", ko: "이 시간쯤 출발하면 무난합니다." } },
    { time: "13:40", title: { "zh-Hant": "抵達附近", en: "Arrive nearby", ko: "근처 도착" }, desc: { "zh-Hant": "先到安國附近，留一點找路和整理心情的空間。", en: "Keep buffer for finding the place.", ko: "길 찾기 버퍼 확보." } },
    { time: "14:00", title: { "zh-Hant": "韓服預約", en: "Hanbok appointment", ko: "한복 예약" }, desc: { "zh-Hant": "準時到店，後面整段拍攝都會更從容。", en: "Be on time at the shop.", ko: "정시에 도착." } },
    { time: "After", title: { "zh-Hant": "夜晚收尾", en: "Dinner / back up photos", ko: "저녁 / 사진 백업" }, desc: { "zh-Hant": "拍攝結束後先好好吃一頓晚餐，再把手機裡的照片慢慢備份，讓這一天安穩收進記憶裡。", en: "Dinner first, then back up phone photos.", ko: "식사 후 휴대폰 사진 백업." } },
  ],
  routeCards: [
    { title: { "zh-Hant": "地鐵", en: "Subway", ko: "지하철" }, start: { "zh-Hant": "飯店", en: "Hotel", ko: "호텔" }, destination: { "zh-Hant": "安國 / 北村", en: "Anguk / Bukchon", ko: "안국 / 북촌" }, duration: { "zh-Hant": "35-45 分鐘", en: "35-45 min", ko: "35-45분" }, cost: { "zh-Hant": "省一點", en: "Lower cost", ko: "비용 적게" }, useCase: { "zh-Hant": "平穩走法", en: "Easy standard route", ko: "무난한 이동" }, desc: { "zh-Hant": "弘大入口站 → 2 號線 → 乙支路 3 街 → 3 號線 → 安國站。", en: "Hongik Univ. Station → Line 2 → Euljiro 3-ga → Line 3 → Anguk.", ko: "홍대입구역 → 2호선 → 을지로3가 → 3호선 → 안국역." }, href: "https://www.google.com/maps/search/%EC%98%A5%ED%95%9C%EB%B3%B5/" },
    { title: { "zh-Hant": "計程車", en: "Taxi", ko: "택시" }, start: { "zh-Hant": "飯店", en: "Hotel", ko: "호텔" }, destination: { "zh-Hant": "韓服店", en: "Hanbok shop", ko: "한복 매장" }, duration: { "zh-Hant": "20-25 分鐘", en: "20-25 min", ko: "20-25분" }, cost: { "zh-Hant": "₩8,000-12,000", en: "₩8,000-12,000", ko: "₩8,000-12,000" }, useCase: { "zh-Hant": "懶得轉車時", en: "Good if you want the easy option", ko: "갈아타기 싫을 때" }, desc: { "zh-Hant": "路最直，也比較省心。", en: "This is the straightest and easiest option.", ko: "가장 단순하고 편한 선택입니다." }, href: "https://www.google.com/maps/search/%EC%98%A5%ED%95%9C%EB%B3%B5/" },
  ],
  budgetSummary: [
    { label: { "zh-Hant": "韓服總價", en: "Hanbok total", ko: "한복 총액" }, krw: COSTS.hanbokTotalKrw },
    { label: { "zh-Hant": "現場補款", en: "Remaining balance", ko: "현장 결제 잔액" }, krw: COSTS.hanbokRemainingKrw },
    { label: { "zh-Hant": "飯店", en: "Hotel", ko: "호텔" }, krw: COSTS.hotelTwdTotal * rates.TWD.krwPerUnit },
    { label: { "zh-Hant": "機票（2 人）", en: "Flights (2 travelers)", ko: "항공권(2인)" }, krw: COSTS.flightTwdPerPerson * COSTS.travelers * rates.TWD.krwPerUnit },
    { label: { "zh-Hant": "交通 + 餐食 + 購物", en: "Transport + food + shopping", ko: "교통 + 식비 + 쇼핑" }, krw: COSTS.transportKrw + COSTS.foodKrw + COSTS.shoppingKrw },
  ],
  budgetRows: [
    { item: { "zh-Hant": "韓服套餐", en: "Hanbok package", ko: "한복 패키지" }, krw: 640000, original: "640,000 KRW", note: { "zh-Hant": "高級方案", en: "Premium package", ko: "프리미엄 패키지" } },
    { item: { "zh-Hant": "MV 加購", en: "MV add-on", ko: "MV 추가" }, krw: 300000, original: "300,000 KRW", note: { "zh-Hant": "MV 影片", en: "MV video", ko: "MV 영상" } },
    { item: { "zh-Hant": "訂金", en: "Deposit", ko: "예약금" }, krw: COSTS.hanbokDepositCny * rates.CNY.krwPerUnit, original: "300 CNY", note: { "zh-Hant": "已付", en: "Already paid", ko: "이미 결제" } },
    { item: { "zh-Hant": "剩餘韓服款", en: "Remaining Hanbok balance", ko: "남은 한복 잔액" }, krw: COSTS.hanbokRemainingKrw, original: "about 880,000 KRW", note: { "zh-Hant": "微信轉帳約 ¥4,720", en: "About ¥4,720 by WeChat transfer", ko: "위챗 송금 기준 약 ¥4,720" } },
    { item: { "zh-Hant": "飯店", en: "Hotel", ko: "호텔" }, krw: COSTS.hotelTwdTotal * rates.TWD.krwPerUnit, original: "NT$19,247", note: { "zh-Hant": "5 晚 2 人", en: "5 nights for 2", ko: "5박 2인" } },
    { item: { "zh-Hant": "機票（每人）", en: "Flight (per person)", ko: "항공권(1인)" }, krw: COSTS.flightTwdPerPerson * rates.TWD.krwPerUnit, original: "NT$12,718", note: { "zh-Hant": "每人票價", en: "Fare per traveler", ko: "1인 항공권" } },
    { item: { "zh-Hant": "機票（兩人）", en: "Flights (2 travelers)", ko: "항공권(2인)" }, krw: COSTS.flightTwdPerPerson * COSTS.travelers * rates.TWD.krwPerUnit, original: "NT$25,436", note: { "zh-Hant": "兩人合計", en: "Total for two", ko: "2인 합계" } },
    { item: { "zh-Hant": "交通", en: "Transportation", ko: "교통" }, krw: COSTS.transportKrw, original: "120,000 KRW", note: { "zh-Hant": "地鐵 / 計程車抓法", en: "Subway / taxi planning", ko: "지하철 / 택시 예상" } },
    { item: { "zh-Hant": "餐食", en: "Food", ko: "식비" }, krw: COSTS.foodKrw, original: "360,000 KRW", note: { "zh-Hant": "兩人粗估", en: "Planning estimate for two", ko: "2인 예상" } },
    { item: { "zh-Hant": "購物", en: "Shopping", ko: "쇼핑" }, krw: COSTS.shoppingKrw, original: "250,000 KRW", note: { "zh-Hant": "彈性抓法", en: "Flexible placeholder", ko: "유동적 가정" } },
  ],
  itinerary: [
    {
      day: { "zh-Hant": "第 1 天", en: "Day 1", ko: "1일차" },
      date: "2026-05-15",
      plan: { "zh-Hant": "初抵首爾，從弘大的夜色慢慢進入旅程", en: "Arrive, check in, and have dinner around Hongdae", ko: "도착 후 체크인, 홍대 근처에서 저녁" },
      location: { "zh-Hant": "仁川機場 → 弘大", en: "Incheon → Hongdae", ko: "인천공항 → 홍대" },
      area: { "zh-Hant": "弘大", en: "Hongdae", ko: "홍대" },
      image: {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hongdae_Main_Road%2C_Seoul.jpg",
        alt: { "zh-Hant": "弘大主街街景", en: "Hongdae main road streetscape", ko: "홍대 메인 거리 풍경" },
        caption: { "zh-Hant": "弘大主街", en: "Hongdae Main Road", ko: "홍대 메인 거리" },
      },
      rhythm: { "zh-Hant": "這一天不急著塞滿行程，重點是順利落地、進飯店、讓自己慢慢跟上首爾的節奏。夜晚留給弘大的街景與一頓舒服的晚餐，剛好作為整趟旅程的開場。", en: "Arrival day is best kept easy, with check-in and a soft start to the trip.", ko: "이동이 많은 날이라 체크인과 가벼운 시작에 집중하는 흐름이 좋습니다." },
      hotelFlow: { "zh-Hant": "從 Local Stitch Creator Town Seogyo 安頓下來後，晚上就在弘大附近散步、吃飯，讓第一晚維持輕鬆也保留餘裕。", en: "Arrive at Local Stitch Creator Town Seogyo and keep the evening around Hongdae.", ko: "Local Stitch Creator Town Seogyo 체크인 후 저녁도 홍대에서 마무리하는 흐름입니다." },
      costKrw: 50000,
      transport: { "zh-Hant": "搭 AREX、機場巴士或計程車都可以，先把行李送進飯店，再用步行把夜晚留給弘大。", en: "AREX / airport bus / taxi, then drop bags at the hotel", ko: "AREX / 공항버스 / 택시로 이동 후 호텔 체크인" },
      reminder: { "zh-Hant": "第一晚不另外拉遠區域，把晚餐、便利店補貨和熟悉住宿周邊都留在弘大，整體會比較順。", en: "Keep the first evening local and use Hongdae for dinner and quick essentials.", ko: "첫날은 멀리 이동하지 말고 홍대에서 저녁과 간단한 장보기를 해결하는 편이 좋습니다." },
      foodPlan: [
        { label: { "zh-Hant": "夜晚餐桌", en: "Dinner", ko: "저녁" }, title: { "zh-Hant": "弘大 / 延南洞一帶", en: "Hongdae / Yeonnam-dong", ko: "홍대 / 연남동" }, note: { "zh-Hant": "第一晚就近找一間順眼的餐廳，不用特地追名店，舒服吃完最重要。", en: "Keep the first dinner close to the hotel and easy to access.", ko: "첫날 저녁은 숙소 근처에서 편하게 들어갈 수 있는 곳 위주가 좋습니다." } },
        { label: { "zh-Hant": "晚點小歇", en: "Coffee", ko: "카페" }, title: { "zh-Hant": "延南洞巷內咖啡店", en: "Yeonnam-dong cafe lane", ko: "연남동 골목 카페" }, note: { "zh-Hant": "如果還有精神，可以挑一間安靜的咖啡店坐一下，再慢慢走回飯店。", en: "If you still have energy, stop by one cafe before heading back.", ko: "여유가 있으면 카페 한 곳 정도 들렀다가 돌아오면 됩니다." } },
      ],
      areaPicks: [
        { type: { "zh-Hant": "好拍照", en: "Photo", ko: "포토" }, title: { "zh-Hant": "京義線林道公園", en: "Gyeongui Line Forest Park", ko: "경의선숲길" }, note: { "zh-Hant": "傍晚散步很順，第一天拍街景也不費力。", en: "Easy for an evening walk and light first-day street shots.", ko: "저녁 산책과 첫날 가벼운 거리 사진에 잘 맞습니다." } },
        { type: { "zh-Hant": "逛街", en: "Shopping", ko: "쇼핑" }, title: { "zh-Hant": "AK& 弘大", en: "AK& Hongdae", ko: "AK& 홍대" }, note: { "zh-Hant": "最後補貨或簡單逛街都方便。", en: "Good for quick browsing and picking up anything you still need.", ko: "가볍게 둘러보거나 필요한 것을 보충하기 좋습니다." } },
        { type: { "zh-Hant": "散步", en: "Walk", ko: "산책" }, title: { "zh-Hant": "延南洞主街", en: "Yeonnam-dong main lanes", ko: "연남동 메인 골목" }, note: { "zh-Hant": "第一晚最適合用來熟悉住宿周邊。", en: "A comfortable way to get familiar with the neighborhood on night one.", ko: "첫날 숙소 주변 감을 잡기에 가장 무난한 구역입니다." } },
      ],
      timeline: [
        { time: "19:05", title: { "zh-Hant": "抵達仁川機場", en: "Arrive at Incheon", ko: "인천 도착" }, desc: { "zh-Hant": "在機場完成入境與取行李，也順手把網路、交通卡這些旅途基本功準備好。", en: "Clear immigration, collect luggage, and sort out data and transit.", ko: "입국과 수하물 수령 후 데이터와 교통카드를 정리합니다." } },
        { time: "20:15", title: { "zh-Hant": "前往弘大飯店", en: "Transfer to Hongdae hotel", ko: "홍대 숙소로 이동" }, desc: { "zh-Hant": "先直奔飯店，把長途移動的疲憊留在這一段，接下來就能把步調慢下來。", en: "Head straight to the hotel by the easiest route and check in first.", ko: "가장 편한 동선으로 바로 호텔로 이동해 먼저 체크인합니다." } },
        { time: "21:15", title: { "zh-Hant": "弘大夜晚散步", en: "Dinner and a short Hongdae walk", ko: "홍대 저녁과 가벼운 산책" }, desc: { "zh-Hant": "晚餐後沿著弘大或延南洞慢慢走一小段，讓首爾的第一個夜晚自然展開。", en: "After dinner, take an easy walk around Yeonnam-dong or the main Hongdae streets.", ko: "식사 후 연남동이나 홍대 메인 거리 쪽을 가볍게 둘러봅니다." } },
        { time: "22:30", title: { "zh-Hant": "回飯店休息", en: "Return to hotel", ko: "호텔 복귀" }, desc: { "zh-Hant": "早點回房，替接下來幾天留住體力，也讓旅程從一個舒服的夜晚開始。", en: "Turn in early so the next day starts cleanly.", ko: "다음 날 일정을 위해 일찍 숙소로 돌아옵니다." } },
      ],
    },
    {
      day: { "zh-Hant": "第 2 天", en: "Day 2", ko: "2일차" },
      date: "2026-05-16",
      plan: { "zh-Hant": "漢南洞的展覽、街景與午後咖啡", en: "Hannam-dong + Leeum + cafes", ko: "한남동 + 리움 + 카페" },
      location: { "zh-Hant": "漢江鎮 / 漢南洞", en: "Hangangjin / Hannam-dong", ko: "한강진 / 한남동" },
      area: { "zh-Hant": "漢南洞", en: "Hannam-dong", ko: "한남동" },
      image: {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hannam-dong%2C_where_art_and_culture_meet.jpg",
        alt: { "zh-Hant": "漢南洞街景", en: "Hannam-dong streetscape", ko: "한남동 거리 풍경" },
        caption: { "zh-Hant": "漢南洞街區", en: "Hannam-dong", ko: "한남동 거리" },
      },
      rhythm: { "zh-Hant": "這一天適合把步調放慢，從展覽空間一路走進漢南洞的街區氣氛。上午先用藝術和建築定下節奏，午後再把時間交給街景、選物店與咖啡店，整體很完整，也不用來回跨區。", en: "This day works best as one continuous line: museum, neighborhood walk, then cafes without hopping districts.", ko: "이날은 미술관, 거리 산책, 카페를 한 줄로 잇는 구성이 잘 맞고 굳이 다른 지역으로 넘어갈 필요가 없습니다." },
      hotelFlow: { "zh-Hant": "早上從弘大出發前往漢江鎮，傍晚再回到弘大，把這一天收在熟悉的住宿周邊，節奏會比較舒服。", en: "Leave Hongdae in the morning for Hangangjin and return to Hongdae at night.", ko: "아침에 홍대에서 출발해 한강진으로 갔다가 저녁에는 다시 홍대로 돌아오는 흐름입니다." },
      costKrw: 120000,
      transport: { "zh-Hant": "搭地鐵到漢江鎮最順，之後主要靠步行穿過漢南洞，這樣比較能感受到街區本身的節奏。", en: "Take the subway to Hangangjin Station and walk the area slowly", ko: "한강진역으로 가서 천천히 걷는 일정이 잘 맞습니다." },
      reminder: { "zh-Hant": "把 Leeum 放在前半段，接著一路往漢南洞主街與咖啡店延伸，整天的路線會很自然。", en: "Starting with Leeum makes the rest of Hannam flow naturally.", ko: "리움을 앞에 두면 이후 한남동 메인 거리와 카페 쪽으로 자연스럽게 이어집니다." },
      foodPlan: [
        { label: { "zh-Hant": "晨間補給", en: "Brunch", ko: "브런치" }, title: { "zh-Hant": "漢江鎮站周邊", en: "Around Hangangjin Station", ko: "한강진역 근처" }, note: { "zh-Hant": "先吃點東西再進 Leeum，整體開場會更從容。", en: "Have brunch before Leeum for the cleanest start.", ko: "브런치를 먼저 먹고 리움으로 들어가는 흐름이 가장 편합니다." } },
        { label: { "zh-Hant": "午後小歇", en: "Coffee", ko: "카페" }, title: { "zh-Hant": "Blue Square Book Park 一帶", en: "Blue Square / Book Park area", ko: "블루스퀘어 / 북파크" }, note: { "zh-Hant": "看完展後接書店或咖啡，剛好把這天的氣氛拉得更安靜一點。", en: "A bookstore or coffee stop after the museum fits the mood of this day well.", ko: "미술관 이후 서점이나 카페를 붙이면 하루 분위기가 자연스럽습니다." } },
        { label: { "zh-Hant": "夜晚餐桌", en: "Dinner", ko: "저녁" }, title: { "zh-Hant": "弘大回程晚餐", en: "Dinner back in Hongdae", ko: "홍대 복귀 저녁" }, note: { "zh-Hant": "晚上回弘大吃飯，比留在漢南洞更能保留一點輕鬆收尾的感覺。", en: "Dinner back in Hongdae keeps the evening easier than staying out in Hannam.", ko: "저녁은 한남동보다 홍대로 돌아와 먹는 편이 더 편합니다." } },
      ],
      areaPicks: [
        { type: { "zh-Hant": "好拍照", en: "Photo", ko: "포토" }, title: { "zh-Hant": "Leeum Museum 外觀與入口", en: "Leeum Museum exterior", ko: "리움미술관 외관" }, note: { "zh-Hant": "建築線條很乾淨，拍照也比較有質感。", en: "The architecture gives you a refined photo backdrop.", ko: "건축선이 깔끔해서 사진 톤도 좋게 나옵니다." } },
        { type: { "zh-Hant": "咖啡 / 書店", en: "Coffee / books", ko: "카페 / 서점" }, title: { "zh-Hant": "Blue Square Book Park", en: "Blue Square Book Park", ko: "블루스퀘어 북파크" }, note: { "zh-Hant": "如果想要安靜一點的停留點，這裡很適合。", en: "A good stop if you want something slower and quieter.", ko: "조금 더 조용한 머무름이 필요하면 이쪽이 잘 맞습니다." } },
        { type: { "zh-Hant": "逛街", en: "Shopping", ko: "쇼핑" }, title: { "zh-Hant": "漢南洞主街", en: "Hannam-dong main street", ko: "한남동 메인 거리" }, note: { "zh-Hant": "選物店與街景集中，整體散步感很好。", en: "The boutiques and street atmosphere hold together nicely here.", ko: "편집숍과 거리 분위기가 한데 모여 있어 걷기 좋습니다." } },
      ],
      timeline: [
        { time: "09:30", title: { "zh-Hant": "從飯店出發", en: "Leave the hotel", ko: "호텔 출발" }, desc: { "zh-Hant": "從弘大往漢江鎮移動，讓這一天從比較安靜的城區氣氛開始。", en: "Leave Hongdae and head toward Hangangjin Station.", ko: "홍대에서 출발해 한강진역으로 이동합니다." } },
        { time: "10:30", title: { "zh-Hant": "Leeum Museum", en: "Leeum Museum", ko: "리움미술관" }, desc: { "zh-Hant": "先用展覽和建築把一天打開，節奏會比一開始就逛街更耐看。", en: "Start with the museum for a slower, more grounded opening to the day.", ko: "미술관부터 보고 하루의 리듬을 차분하게 시작합니다." } },
        { time: "13:00", title: { "zh-Hant": "漢南洞午間風味", en: "Lunch in Hannam-dong", ko: "한남동 점심" }, desc: { "zh-Hant": "午餐後順著街區一路散步，不用回頭，這天的動線會很漂亮。", en: "Have lunch nearby and continue walking the neighborhood without backtracking.", ko: "근처에서 점심을 먹고 그대로 메인 거리 산책으로 이어가면 됩니다." } },
        { time: "15:00", title: { "zh-Hant": "街景、選物與咖啡", en: "Shops and cafes", ko: "편집숍과 카페" }, desc: { "zh-Hant": "午後把時間留給漢南洞最迷人的街景，慢慢逛、慢慢坐，才是這區最好的打開方式。", en: "Spend the afternoon on Hannam’s street atmosphere, shops, and one comfortable cafe.", ko: "오후는 한남동 거리 분위기와 편집숍, 카페 한 곳에 여유를 두는 구성이 좋습니다." } },
        { time: "18:30", title: { "zh-Hant": "回弘大", en: "Return to Hongdae", ko: "홍대로 복귀" }, desc: { "zh-Hant": "傍晚回到飯店周邊，把晚餐留給熟悉的街口，也讓整天自然收尾。", en: "Head back toward Hongdae for dinner and an easy evening.", ko: "저녁에는 홍대로 돌아와 편하게 마무리합니다." } },
      ],
    },
    {
      day: { "zh-Hant": "第 3 天", en: "Day 3", ko: "3일차" },
      date: "2026-05-17",
      plan: { "zh-Hant": "狎鷗亭與江南，一整天的都會步調", en: "Apgujeong + Gangnam + COEX", ko: "압구정 + 강남 + 코엑스" },
      location: { "zh-Hant": "狎鷗亭羅德奧 / 江南", en: "Apgujeong Rodeo / Gangnam", ko: "압구정로데오 / 강남" },
      area: { "zh-Hant": "狎鷗亭 · 江南", en: "Apgujeong · Gangnam", ko: "압구정 · 강남" },
      image: {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Starfield_Library_COEX_20240218.jpg",
        alt: { "zh-Hant": "COEX 星光圖書館", en: "Starfield Library at COEX", ko: "코엑스 별마당도서관" },
        caption: { "zh-Hant": "COEX 星光圖書館", en: "Starfield Library", ko: "별마당도서관" },
      },
      rhythm: { "zh-Hant": "這一天的主題比較鮮明，是首爾偏都會感的一面。從狎鷗亭的街區質感一路延伸到江南與 COEX，上午偏逛街、午後偏室內與咖啡，節奏會一路往熱鬧推進。", en: "This day is strongest when Apgujeong and Gangnam are treated as one line, then closed out at COEX.", ko: "압구정과 강남을 한 축으로 묶고 마지막에 코엑스로 마무리하는 흐름이 가장 자연스럽습니다." },
      hotelFlow: { "zh-Hant": "從弘大出發進江南區，晚上再回到弘大，讓白天和夜晚各自留在適合的區域。", en: "Start from Hongdae into southern Seoul, then return to Hongdae at night.", ko: "홍대에서 강남권으로 들어갔다가 저녁에는 다시 홍대로 돌아오는 구성입니다." },
      costKrw: 150000,
      transport: { "zh-Hant": "上午先走狎鷗亭與江南主軸，下午再順勢往 COEX 收尾，動線最乾淨。", en: "Start with Apgujeong in the morning, then move to COEX", ko: "오전은 압구정, 오후는 코엑스로 이어가면 됩니다." },
      reminder: { "zh-Hant": "狎鷗亭、江南和 COEX 本來就在同一條軸線上，中間不要再插進北邊區域，整天才會有完整感。", en: "Apgujeong and COEX already share the same overall direction, so avoid detouring north in the middle.", ko: "압구정과 코엑스는 같은 방향축이라 중간에 북쪽 지역을 끼우지 않는 편이 좋습니다." },
      foodPlan: [
        { label: { "zh-Hant": "晨間補給", en: "Brunch", ko: "브런치" }, title: { "zh-Hant": "狎鷗亭羅德奧站周邊", en: "Around Apgujeong Rodeo Station", ko: "압구정로데오역 주변" }, note: { "zh-Hant": "早午餐放在這一帶最自然，吃完就能直接走進狎鷗亭的街區節奏。", en: "Brunch works naturally here before moving straight into shopping.", ko: "브런치를 이 구역에 두면 이후 쇼핑 동선으로 바로 이어가기 좋습니다." } },
        { label: { "zh-Hant": "午後小歇", en: "Coffee", ko: "카페" }, title: { "zh-Hant": "VIEW376", en: "VIEW376", ko: "VIEW376" }, note: { "zh-Hant": "如果下午想找一個能稍微坐下來的地方，這裡很適合把節奏放慢一下。", en: "A good afternoon stop if you want a cafe with a more open view.", ko: "오후에 전망이 있는 카페 한 곳을 넣고 싶을 때 잘 맞습니다." } },
        { label: { "zh-Hant": "夜晚餐桌", en: "Dinner", ko: "저녁" }, title: { "zh-Hant": "COEX / 三成洞一帶", en: "COEX / Samseong-dong", ko: "코엑스 / 삼성동" }, note: { "zh-Hant": "把晚餐留在 COEX 一帶，剛好替這一天的都會感作結，再從容回弘大。", en: "Dinner near COEX makes for a clean finish before heading back.", ko: "코엑스 근처에서 저녁을 먹고 바로 홍대로 돌아오면 됩니다." } },
      ],
      areaPicks: [
        { type: { "zh-Hant": "逛街", en: "Shopping", ko: "쇼핑" }, title: { "zh-Hant": "狎鷗亭羅德奧街", en: "Apgujeong Rodeo Street", ko: "압구정로데오 거리" }, note: { "zh-Hant": "這區最適合做今天的前半段主軸。", en: "This is the strongest first-half anchor for the day.", ko: "오늘 전반부의 중심축으로 가장 잘 맞는 구역입니다." } },
        { type: { "zh-Hant": "好拍照", en: "Photo", ko: "포토" }, title: { "zh-Hant": "Starfield Library", en: "Starfield Library", ko: "별마당도서관" }, note: { "zh-Hant": "進 COEX 後最有代表性的畫面點。", en: "One of the most iconic visual stops once you reach COEX.", ko: "코엑스 안에서 가장 상징적인 화면 포인트입니다." } },
        { type: { "zh-Hant": "咖啡", en: "Coffee", ko: "카페" }, title: { "zh-Hant": "VIEW376", en: "VIEW376", ko: "VIEW376" }, note: { "zh-Hant": "如果下午想坐一下，這裡比商場裡更有切換感。", en: "If you want a break in the afternoon, this feels more distinct than staying inside the mall.", ko: "오후에 잠깐 쉬고 싶다면 몰 안보다 분위기 전환이 잘 됩니다." } },
      ],
      timeline: [
        { time: "10:00", title: { "zh-Hant": "從飯店出發", en: "Leave the hotel", ko: "호텔 출발" }, desc: { "zh-Hant": "從弘大一路往狎鷗亭移動，這天的城市感會從這一段慢慢展開。", en: "Leave Hongdae and go straight to the Apgujeong Rodeo area.", ko: "홍대에서 출발해 압구정로데오 일대로 바로 들어갑니다." } },
        { time: "11:00", title: { "zh-Hant": "狎鷗亭主街散步", en: "Apgujeong street walk", ko: "압구정 메인 거리 산책" }, desc: { "zh-Hant": "先把上午留給狎鷗亭的街景與選店，讓都會感從比較從容的步調開始。", en: "Start with the main streets and shops while the area still feels easier.", ko: "이 구역은 조금 일찍 시작하면 훨씬 여유롭게 보기 좋습니다." } },
        { time: "13:30", title: { "zh-Hant": "江南午間風味", en: "Lunch in Gangnam", ko: "강남 점심" }, desc: { "zh-Hant": "中午往江南主街延伸，午餐後就能自然接進更熱鬧的商場與街區。", en: "After lunch, move further into the main Gangnam commercial area.", ko: "점심 후에는 강남 메인 상권 쪽으로 자연스럽게 넘어가면 됩니다." } },
        { time: "16:00", title: { "zh-Hant": "COEX 收尾", en: "COEX wrap-up", ko: "코엑스 마무리" }, desc: { "zh-Hant": "把下午尾段交給 COEX，無論逛書店、商場或找間咖啡店坐下來都很順。", en: "Use COEX as the later stop for shopping, bookstore time, or just an indoor finish.", ko: "오후 후반은 코엑스에서 마무리하면 쇼핑이나 서점 동선이 편합니다." } },
        { time: "19:30", title: { "zh-Hant": "回弘大", en: "Return to Hongdae", ko: "홍대로 복귀" }, desc: { "zh-Hant": "晚上回到飯店附近，把熱鬧留在白天，夜晚再慢慢收回自己的步調。", en: "Head back to Hongdae for a softer finish to the day.", ko: "저녁에는 홍대로 돌아와 다음 날까지 무리 없게 마무리합니다." } },
      ],
    },
    {
      day: { "zh-Hant": "第 4 天", en: "Day 4", ko: "4일차" },
      date: "2026-05-18",
      plan: { "zh-Hant": "展覽與聖水，留給午後最輕鬆的街區散步", en: "Your exhibition + Seongsu", ko: "보고 싶은 전시 + 성수" },
      location: { "zh-Hant": "聖水洞 / 首爾林", en: "Seongsu / Seoul Forest", ko: "성수 / 서울숲" },
      area: { "zh-Hant": "聖水洞", en: "Seongsu", ko: "성수" },
      image: {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Seoul_Forest_Park.jpg",
        alt: { "zh-Hant": "首爾林景色", en: "Seoul Forest Park view", ko: "서울숲 풍경" },
        caption: { "zh-Hant": "首爾林", en: "Seoul Forest", ko: "서울숲" },
      },
      rhythm: { "zh-Hant": "這一天適合留給比較輕盈的城市散步。先把最想看的展排進前半天，午後再回到聖水，把選物店、咖啡街和首爾林串成一條舒服的節奏，整天會很有首爾日常的味道。", en: "Let this day stay centered on the exhibition and Seongsu, ideally without splitting it into two distant districts.", ko: "이날은 전시와 성수 중심으로 두고, 가능하면 멀리 떨어진 다른 지역은 섞지 않는 편이 좋습니다." },
      hotelFlow: { "zh-Hant": "從弘大出發，如果展覽不在聖水，就把前半天留給展覽，下午再把時間收回聖水與首爾林，晚上回弘大休息。", en: "Leave Hongdae in the morning, place the exhibition first if it is elsewhere, and return to Seongsu / Seoul Forest for the afternoon.", ko: "아침에 홍대에서 출발하고, 전시가 다른 곳이면 먼저 보고 오후에는 성수와 서울숲으로 돌아오는 흐름이 좋습니다." },
      costKrw: 130000,
      transport: { "zh-Hant": "把展覽放在前半天或中午前後，接著一路往聖水延伸，這天的動線會最流暢。", en: "Put the exhibition around midday, then build Seongsu around it", ko: "전시는 점심 전후에 넣고 앞뒤로 성수를 붙이면 자연스럽습니다." },
      reminder: { "zh-Hant": "如果展覽其實在江南，和前一天互換會更合理；如果在城東或市中心，這樣的安排就很順。", en: "If the exhibition is in Gangnam, consider swapping with the previous day; if it is east or central, this structure works well.", ko: "전시가 강남권이면 전날과 바꾸는 편이 낫고, 성동이나 종로권이면 지금 구조가 잘 맞습니다." },
      foodPlan: [
        { label: { "zh-Hant": "晨間補給", en: "Brunch", ko: "브런치" }, title: { "zh-Hant": "展覽附近先吃", en: "Eat near the exhibition first", ko: "전시 근처에서 먼저 식사" }, note: { "zh-Hant": "先把展覽看完，下午再把時間完整留給聖水，會更有餘裕。", en: "Finish the exhibition first, then give the afternoon fully to Seongsu.", ko: "전시를 먼저 끝내고 오후는 성수에 집중하는 편이 좋습니다." } },
        { label: { "zh-Hant": "午後小歇", en: "Coffee", ko: "카페" }, title: { "zh-Hant": "聖水咖啡街", en: "Seongsu cafe streets", ko: "성수 카페거리" }, note: { "zh-Hant": "這區很適合挑一間咖啡店坐下來，讓下午的節奏慢慢鬆開。", en: "This area is best for a slower cafe break in the afternoon.", ko: "오후에 천천히 카페 한 곳에 머물기 좋은 구역입니다." } },
        { label: { "zh-Hant": "夜晚餐桌", en: "Dinner", ko: "저녁" }, title: { "zh-Hant": "聖水 / 首爾林周邊", en: "Seongsu / Seoul Forest", ko: "성수 / 서울숲" }, note: { "zh-Hant": "晚上留在這區吃完再回弘大，整天會有比較完整的收尾感。", en: "Staying in the district for dinner gives the day a cleaner finish.", ko: "저녁도 이 구역에서 먹고 돌아오면 하루 흐름이 훨씬 자연스럽습니다." } },
      ],
      areaPicks: [
        { type: { "zh-Hant": "好拍照", en: "Photo", ko: "포토" }, title: { "zh-Hant": "首爾林", en: "Seoul Forest", ko: "서울숲" }, note: { "zh-Hant": "如果想讓聖水這天有一點留白，這裡最適合收尾。", en: "If you want a little breathing room in the day, this is the best soft finish.", ko: "성수 일정에 여백을 주고 싶다면 여기서 마무리하는 구성이 가장 좋습니다." } },
        { type: { "zh-Hant": "逛街", en: "Shopping", ko: "쇼핑" }, title: { "zh-Hant": "聖水主街 / 演武場街", en: "Seongsu main streets / Yeonmujang-gil", ko: "성수 메인 거리 / 연무장길" }, note: { "zh-Hant": "逛街、看快閃和街景都集中在這裡。", en: "Shops, pop-ups, and the main street mood are all concentrated here.", ko: "편집숍, 팝업, 거리 분위기가 이 축에 모여 있습니다." } },
        { type: { "zh-Hant": "咖啡", en: "Coffee", ko: "카페" }, title: { "zh-Hant": "聖水咖啡街", en: "Seongsu cafe streets", ko: "성수 카페거리" }, note: { "zh-Hant": "拍照感和停留感都很強，適合慢慢挑。", en: "A good area for both visuals and relaxed cafe time.", ko: "사진 느낌도 좋고 카페에 오래 머물기에도 잘 맞는 구역입니다." } },
      ],
      timeline: [
        { time: "10:00", title: { "zh-Hant": "從飯店出發", en: "Leave the hotel", ko: "호텔 출발" }, desc: { "zh-Hant": "先往展覽所在區域，或直接往聖水移動，讓這一天從比較輕鬆的城市步調開始。", en: "Head to the exhibition first, or go straight to Seongsu if it is nearby.", ko: "전시 장소로 먼저 가거나, 가까우면 바로 성수로 이동합니다." } },
        { time: "11:30", title: { "zh-Hant": "看展", en: "Exhibition time", ko: "전시 관람" }, desc: { "zh-Hant": "把最想看的展放在前半天，先把注意力交給展覽，下午再回到街區散步。", en: "Place the exhibition in the first half of the day so the evening stays simple.", ko: "가장 보고 싶은 전시는 앞쪽에 두는 편이 저녁 동선을 단순하게 만듭니다." } },
        { time: "14:00", title: { "zh-Hant": "聖水午間風味與散步", en: "Lunch and walk in Seongsu", ko: "성수 점심과 산책" }, desc: { "zh-Hant": "午餐後順著聖水主街慢慢走，選物店、街角小店和咖啡香都會一路跟著你。", en: "After lunch, move through Seongsu’s main streets, shops, and cafes.", ko: "점심 후에는 성수 메인 거리, 편집숍, 카페 쪽으로 이어가면 됩니다." } },
        { time: "16:30", title: { "zh-Hant": "首爾林收尾", en: "Finish at Seoul Forest", ko: "서울숲 쪽으로 마무리" }, desc: { "zh-Hant": "下午後段把節奏放慢，留一點空白給首爾林，這天會收得特別舒服。", en: "Seoul Forest is a good final stop if you want the day to soften toward evening.", ko: "오후 후반을 조금 느슨하게 마무리하고 싶다면 서울숲이 잘 맞습니다." } },
        { time: "19:00", title: { "zh-Hant": "回弘大", en: "Return to Hongdae", ko: "홍대로 복귀" }, desc: { "zh-Hant": "晚餐可以留在聖水，也可以回弘大再吃，讓一天在自己喜歡的節奏裡慢慢收尾。", en: "Either have dinner in Seongsu first or head back to Hongdae for the evening.", ko: "저녁은 성수에서 먹고 돌아오거나, 홍대로 돌아와 마무리해도 괜찮습니다." } },
      ],
    },
    {
      day: { "zh-Hant": "第 5 天", en: "Day 5", ko: "5일차" },
      date: "2026-05-19",
      plan: { "zh-Hant": "北村與韓服的一天，把畫面留給韓屋與宮牆", en: "Bukchon + hanbok shoot + palace exterior photos", ko: "북촌 + 한복 촬영 + 경복궁 외부 촬영" },
      location: { "zh-Hant": "安國 / 北村 / 光化門", en: "Anguk / Bukchon / Gwanghwamun", ko: "안국 / 북촌 / 광화문" },
      area: { "zh-Hant": "北村 · 景福宮", en: "Bukchon · Gyeongbokgung", ko: "북촌 · 경복궁" },
      image: {
        src: "./assets/images/S__180125890_0.jpg",
        alt: { "zh-Hant": "景福宮韓服拍攝參考圖", en: "Hanbok reference photo at Gyeongbokgung", ko: "경복궁 한복 촬영 레퍼런스" },
        caption: { "zh-Hant": "景福宮韓服日", en: "Hanbok day at Gyeongbokgung", ko: "경복궁 한복 촬영일" },
      },
      rhythm: { "zh-Hant": "這一天的主題很明確，整段時間都留給韓服、北村的韓屋巷弄，以及景福宮外圍的空景與宮牆。比起趕景點，更適合把自己放進畫面裡，慢慢走、慢慢拍。", en: "This day already has a clear center, so keep it fully dedicated to the hanbok shoot, the hanok streets, and the palace exterior.", ko: "이날은 한복 촬영이라는 확실한 중심이 있어서 하루 전체를 북촌, 한옥 거리, 궁 외부에 집중하는 편이 좋습니다." },
      hotelFlow: { "zh-Hant": "中午前後從弘大出發，拍攝結束後就在安國或光化門附近吃晚餐，再帶著照片與餘韻回弘大。", en: "Leave Hongdae around midday, then after the shoot either dine near Anguk / Gwanghwamun or return to Hongdae.", ko: "점심 무렵 홍대에서 출발하고, 촬영 후에는 안국이나 광화문 근처에서 저녁을 먹고 홍대로 돌아오는 흐름이 좋습니다." },
      costKrw: 980000,
      transport: { "zh-Hant": "建議 13:00 前從飯店出發，先進北村與安國一帶，把拍攝前的節奏留得從容一點。", en: "Leave before 13:00 and get into Bukchon first", ko: "13:00 전에 출발해서 먼저 북촌 쪽에 도착하면 됩니다." },
      reminder: { "zh-Hant": "景福宮週二不開放宮內參觀，不過外圍宮牆、光化門與北村街景已經很夠拍，也更適合把節奏放在畫面上。", en: "Since the palace interior is closed on Tuesday, the exterior and Gwanghwamun side are enough for this day.", ko: "화요일이라 궁 내부는 들어가지 않고, 외부와 광화문 주변만으로도 충분히 좋은 화면이 나옵니다." },
      foodPlan: [
        { label: { "zh-Hant": "出發前小歇", en: "Before heading out", ko: "출발 전" }, title: { "zh-Hant": "弘大簡單吃 / 喝咖啡", en: "A light coffee or bite in Hongdae", ko: "홍대에서 가볍게 커피 / 식사" }, note: { "zh-Hant": "這天中午才出發，先在飯店附近慢慢整理好狀態，再出門會更好拍。", en: "Since you head out around midday, start with something light near the hotel.", ko: "정오 무렵 출발이라 숙소 근처에서 가볍게 정리하고 나가는 편이 좋습니다." } },
        { label: { "zh-Hant": "午後空檔", en: "Afternoon", ko: "오후" }, title: { "zh-Hant": "安國 / 北村附近咖啡", en: "Coffee around Anguk / Bukchon", ko: "안국 / 북촌 카페" }, note: { "zh-Hant": "如果拍攝中段有空檔，可以在這區短暫坐一下，讓節奏慢慢接回來。", en: "If there is a gap in the shoot, this is the best place for a short cafe stop.", ko: "촬영 중간에 여유가 생기면 이 근처에서 잠깐 쉬기 좋습니다." } },
        { label: { "zh-Hant": "夜晚餐桌", en: "Dinner", ko: "저녁" }, title: { "zh-Hant": "光化門 / 安國一帶", en: "Gwanghwamun / Anguk", ko: "광화문 / 안국" }, note: { "zh-Hant": "拍完後直接在附近吃飯最順，也能把這一天的情緒慢慢收進夜色裡。", en: "Dinner nearby after the shoot is smoother than rushing back first.", ko: "촬영 후 바로 근처에서 저녁을 먹는 편이 훨씬 자연스럽습니다." } },
      ],
      areaPicks: [
        { type: { "zh-Hant": "好拍照", en: "Photo", ko: "포토" }, title: { "zh-Hant": "北村韓屋村", en: "Bukchon Hanok Village", ko: "북촌한옥마을" }, note: { "zh-Hant": "韓服拍攝最核心的街景會在這裡。", en: "This is the visual heart of the hanbok shoot day.", ko: "한복 촬영일의 가장 핵심적인 거리 풍경은 이쪽에 있습니다." } },
        { type: { "zh-Hant": "好拍照", en: "Photo", ko: "포토" }, title: { "zh-Hant": "光化門廣場", en: "Gwanghwamun Square", ko: "광화문광장" }, note: { "zh-Hant": "如果想接比較開闊的畫面，這裡最好用。", en: "If you want a wider, more open visual finish, this is the place.", ko: "조금 더 넓고 열린 장면을 원하면 이쪽이 가장 좋습니다." } },
        { type: { "zh-Hant": "散步", en: "Walk", ko: "산책" }, title: { "zh-Hant": "安國 / 三清洞周邊", en: "Anguk / Samcheong-dong", ko: "안국 / 삼청동 주변" }, note: { "zh-Hant": "拍攝前後都適合慢慢走，和北村動線也接得上。", en: "This works well before or after the shoot and flows naturally with Bukchon.", ko: "촬영 전후로 천천히 걷기 좋고 북촌과도 자연스럽게 이어집니다." } },
      ],
      timeline: [
        { time: "12:45", title: { "zh-Hant": "從飯店出發", en: "Leave the hotel", ko: "호텔 출발" }, desc: { "zh-Hant": "從弘大往安國移動，讓自己在進入拍攝前先慢慢進入這一區的氣氛。", en: "Leave Hongdae and head into Anguk and Bukchon first.", ko: "홍대에서 출발해 안국과 북촌 쪽으로 먼저 이동합니다." } },
        { time: "13:40", title: { "zh-Hant": "抵達安國 / 北村", en: "Arrive in Anguk / Bukchon", ko: "안국 / 북촌 도착" }, desc: { "zh-Hant": "先花一點時間熟悉街區位置，等心情沉下來，再往韓服店移動。", en: "Use the buffer to settle into the area before moving toward the shop.", ko: "구역 감을 먼저 잡고 한복 매장으로 이동합니다." } },
        { time: "14:00", title: { "zh-Hant": "韓服拍攝", en: "Hanbok appointment", ko: "한복 촬영" }, desc: { "zh-Hant": "整段畫面會集中在北村的巷弄、韓屋街景與景福宮外圍，把這一天完整留給鏡頭。", en: "The main visual route stays around Bukchon, the hanok alleys, and the palace exterior.", ko: "촬영 동선은 북촌, 한옥 골목, 경복궁 외부에 집중합니다." } },
        { time: "17:30", title: { "zh-Hant": "光化門 / 安國晚餐", en: "Dinner near Gwanghwamun or Anguk", ko: "광화문 / 안국 저녁" }, desc: { "zh-Hant": "拍攝後就在附近吃晚餐，把畫面留在腦海裡，也讓夜晚有個柔和的收尾。", en: "Have dinner nearby after the shoot, then head back and sort photos later.", ko: "촬영 후에는 근처에서 저녁을 먹고 돌아와 사진을 정리하면 됩니다." } },
        { time: "20:00", title: { "zh-Hant": "回弘大", en: "Return to Hongdae", ko: "홍대로 복귀" }, desc: { "zh-Hant": "晚上回到飯店後，把照片備份好，也替隔天留一點安靜整理的時間。", en: "Return to the hotel and use the night to back up photos and reset for the next day.", ko: "숙소로 돌아와 사진을 백업하고 다음 날 흐름을 정리합니다." } },
      ],
    },
    {
      day: { "zh-Hant": "第 6 天", en: "Day 6", ko: "6일차" },
      date: "2026-05-20",
      plan: { "zh-Hant": "最後半天留給弘大，慢慢把首爾收進行李裡", en: "Check out, do last shopping in Hongdae, then head to the airport", ko: "체크아웃 후 홍대에서 마지막 쇼핑, 공항 이동" },
      location: { "zh-Hant": "弘大 → 仁川機場", en: "Hongdae → Incheon", ko: "홍대 → 인천공항" },
      area: { "zh-Hant": "弘大", en: "Hongdae", ko: "홍대" },
      image: {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Street_hongdae_Seoul.jpg",
        alt: { "zh-Hant": "弘大街頭夜景", en: "Hongdae street scene", ko: "홍대 거리 풍경" },
        caption: { "zh-Hant": "弘大收尾日", en: "Last day in Hongdae", ko: "홍대 마무리 일정" },
      },
      rhythm: { "zh-Hant": "最後一天不需要再開新區域，把時間留給熟悉的弘大、最後一頓喜歡的餐點，還有出發前那種微微捨不得的散步感，會比硬塞景點更有餘韻。", en: "The last day is best kept local to Hongdae and the airport transfer rather than opening a new area.", ko: "마지막 날은 새로운 지역을 넣지 말고 홍대와 공항 이동에 집중하는 편이 가장 안정적입니다." },
      hotelFlow: { "zh-Hant": "從飯店退房後，行李先整理好，白天就留在弘大附近慢慢收尾，傍晚再從容往機場出發。", en: "After checking out, keep your luggage sorted and use the remaining hours around Hongdae before leaving for the airport.", ko: "체크아웃 후에는 짐을 정리해두고 남은 시간은 홍대 근처에서 보내다가 저녁에 공항으로 이동합니다." },
      costKrw: 70000,
      transport: { "zh-Hant": "退房後就待在弘大一帶，傍晚再往機場移動，這樣最穩也最輕鬆。", en: "Stay around Hongdae after check-out, then head to the airport in the evening", ko: "체크아웃 후에는 홍대 근처에 있다가 저녁에 공항으로 가면 됩니다." },
      reminder: { "zh-Hant": "回程 20:05 起飛，最後半天以舒服收尾為主，不建議再跨區折返。", en: "With a 20:05 departure, the final half day is better as a soft finish without crossing the city again.", ko: "20:05 비행편이라 마지막 반나절은 무리하지 않고 편하게 마무리하는 편이 좋습니다." },
      foodPlan: [
        { label: { "zh-Hant": "晨間補給", en: "Brunch", ko: "브런치" }, title: { "zh-Hant": "弘大 / 延南洞", en: "Hongdae / Yeonnam-dong", ko: "홍대 / 연남동" }, note: { "zh-Hant": "最後一頓留在熟悉的街區最舒服，也比較有旅程慢慢收尾的感覺。", en: "A final meal in a familiar neighborhood makes the last day feel easier.", ko: "마지막 식사는 익숙한 구역에 두는 편이 훨씬 편합니다." } },
        { label: { "zh-Hant": "午後小歇", en: "Afternoon coffee", ko: "오후 카페" }, title: { "zh-Hant": "弘大主街或京義線林道", en: "Main Hongdae streets or Gyeongui Line park", ko: "홍대 메인 거리 / 경의선숲길" }, note: { "zh-Hant": "取行李前找一個舒服的停留點坐一下，替首爾留一個安靜的句點。", en: "One last easy cafe stop is enough before picking up luggage.", ko: "짐 찾기 전에 카페 한 곳 정도로 마무리하면 충분합니다." } },
      ],
      areaPicks: [
        { type: { "zh-Hant": "逛街", en: "Shopping", ko: "쇼핑" }, title: { "zh-Hant": "AK& 弘大", en: "AK& Hongdae", ko: "AK& 홍대" }, note: { "zh-Hant": "最後採買很方便，也離飯店不遠。", en: "Convenient for last shopping and still close to the hotel.", ko: "마지막 쇼핑하기 좋고 숙소와도 가깝습니다." } },
        { type: { "zh-Hant": "散步", en: "Walk", ko: "산책" }, title: { "zh-Hant": "京義線林道公園", en: "Gyeongui Line Forest Park", ko: "경의선숲길" }, note: { "zh-Hant": "如果不想再逛商場，這裡最適合最後半天。", en: "If you do not want more indoor shopping, this is the best light option.", ko: "쇼핑보다 가벼운 산책이 좋다면 마지막 반나절은 여기 쪽이 잘 맞습니다." } },
        { type: { "zh-Hant": "咖啡", en: "Coffee", ko: "카페" }, title: { "zh-Hant": "延南洞咖啡街", en: "Yeonnam-dong cafe streets", ko: "연남동 카페거리" }, note: { "zh-Hant": "離飯店近，也適合在出發前留一點餘裕。", en: "Close to the hotel and easy to fit in before heading out.", ko: "숙소와 가깝고 출발 전 여유를 두기에도 좋습니다." } },
      ],
      timeline: [
        { time: "09:30", title: { "zh-Hant": "飯店退房", en: "Check out of the hotel", ko: "호텔 체크아웃" }, desc: { "zh-Hant": "先把行李整理好，讓最後半天不用再被零碎事情打斷。", en: "Get luggage sorted first and keep the rest of the day close to the hotel area.", ko: "짐을 먼저 정리하고 남은 일정은 홍대 근처로 두는 편이 좋습니다." } },
        { time: "11:00", title: { "zh-Hant": "弘大最後散步", en: "Last walk around Hongdae", ko: "홍대 마지막 산책" }, desc: { "zh-Hant": "把最後想補買的東西、最後一頓早午餐，和對這趟旅程的小小留戀，都留在這一段。", en: "Use this time for final shopping and one last brunch or cafe stop.", ko: "마지막 쇼핑과 브런치, 카페 한 곳 정도를 여기서 마무리하면 됩니다." } },
        { time: "16:30", title: { "zh-Hant": "回飯店附近取行李", en: "Pick up luggage", ko: "짐 찾기" }, desc: { "zh-Hant": "回到飯店附近，把出發前的節奏慢慢收齊，再準備往機場去。", en: "Return near the hotel, collect luggage, and set up the airport transfer.", ko: "숙소 쪽으로 돌아와 짐을 찾고 공항 이동을 준비합니다." } },
        { time: "17:30", title: { "zh-Hant": "前往仁川機場", en: "Head to Incheon Airport", ko: "인천공항으로 이동" }, desc: { "zh-Hant": "傍晚出發最穩，也替這趟首爾旅程留下從容的最後一段路。", en: "Leaving in the early evening gives enough room for airport procedures and evening traffic.", ko: "초저녁에 출발하면 공항 수속과 저녁 이동 시간을 여유 있게 확보할 수 있습니다." } },
      ],
    },
  ],
  checklistGroups: [
    { id: "before", title: { "zh-Hant": "出發前", en: "Before departure", ko: "출발 전" }, items: [
      { id: "passport", title: { "zh-Hant": "護照", en: "Passport", ko: "여권" }, desc: { "zh-Hant": "確認效期與放置位置。", en: "Check validity and where it is packed.", ko: "유효기간과 보관 위치 확인." } },
      { id: "esim", title: { "zh-Hant": "eSIM / 漫遊", en: "eSIM / roaming", ko: "eSIM / roaming" }, desc: { "zh-Hant": "抵達後能立刻上網。", en: "Make sure data works on arrival.", ko: "도착 직후 데이터 사용 가능." } },
      { id: "powerbank", title: { "zh-Hant": "行動電源", en: "Power bank", ko: "보조배터리" }, desc: { "zh-Hant": "導航和拍照很耗電。", en: "Navigation and photos drain battery.", ko: "지도와 사진으로 배터리 소모가 큽니다." } },
    ]},
    { id: "airport", title: { "zh-Hant": "機場", en: "Airport", ko: "공항" }, items: [
      { id: "credit-card", title: { "zh-Hant": "信用卡", en: "Credit card", ko: "신용카드" }, desc: { "zh-Hant": "確認海外刷卡。", en: "Confirm overseas use.", ko: "해외 결제 가능 여부 확인." } },
      { id: "hotel-address", title: { "zh-Hant": "飯店地址截圖", en: "Hotel address screenshot", ko: "호텔 주소 캡처" }, desc: { "zh-Hant": "臨時搭車時比較不會慌。", en: "Useful when you need a quick taxi or directions.", ko: "급하게 택시를 탈 때 도움이 됩니다." } },
    ]},
    { id: "local", title: { "zh-Hant": "韓國當地", en: "In Korea", ko: "한국에서" }, items: [
      { id: "krw-cash", title: { "zh-Hant": "韓元現金", en: "KRW cash", ko: "KRW 현금" }, desc: { "zh-Hant": "刷卡加價時更穩。", en: "Safer if card surcharge happens.", ko: "카드 추가요금이 있을 때 더 안전합니다." } },
      { id: "deposit-record", title: { "zh-Hant": "300 CNY 訂金紀錄", en: "300 CNY deposit record", ko: "300 CNY 예약금 기록" }, desc: { "zh-Hant": "現場對帳用。", en: "Helpful for reconciling on site.", ko: "현장 확인용." } },
      { id: "insurance", title: { "zh-Hant": "旅遊保險資料", en: "Travel insurance record", ko: "여행 보험 정보" }, desc: { "zh-Hant": "把投保確認信和保單號碼留在手機裡。", en: "Keep the confirmation email and policy number on your phone.", ko: "확인 메일과 보험 번호를 휴대폰에 저장해 두기." } },
    ]},
    { id: "hanbok", title: { "zh-Hant": "拍照 / 韓服", en: "Photo / Hanbok", ko: "촬영 / 한복" }, items: [
      { id: "makeup", title: { "zh-Hant": "補妝 / 整髮用品", en: "Makeup touch-up items", ko: "수정 화장 / 헤어 용품" }, desc: { "zh-Hant": "不要臨時找東西。", en: "Keep them ready in advance.", ko: "당일 허둥대지 않게 미리 챙기기." } },
      { id: "original-count", title: { "zh-Hant": "確認 200 張原片", en: "Confirm 200 originals", ko: "원본 200장 확인" }, desc: { "zh-Hant": "拍攝前後都再確認。", en: "Reconfirm before and after the shoot.", ko: "촬영 전후 모두 다시 확인." } },
      { id: "retouch-count", title: { "zh-Hant": "確認 12 張精修", en: "Confirm 12 retouched", ko: "보정 12장 확인" }, desc: { "zh-Hant": "口頭再確認一次。", en: "Verbal reconfirmation helps.", ko: "구두로 한 번 더 확인." } },
      { id: "mv-addon", title: { "zh-Hant": "確認 MV 加購", en: "Confirm MV add-on", ko: "MV 추가 확인" }, desc: { "zh-Hant": "確認列入最終方案。", en: "Make sure it is in the final plan.", ko: "최종 플랜에 포함됐는지 확인." } },
      { id: "surcharge", title: { "zh-Hant": "確認刷卡 10%", en: "Confirm 10% card surcharge", ko: "카드 10% 추가 확인" }, desc: { "zh-Hant": "付款前先問清楚。", en: "Ask before the final payment.", ko: "최종 결제 전에 먼저 확인." } },
    ]},
    { id: "after", title: { "zh-Hant": "回程前", en: "Before return", ko: "귀국 전" }, items: [
      { id: "backup-photos", title: { "zh-Hant": "先備份照片", en: "Back up photos", ko: "사진 백업" }, desc: { "zh-Hant": "手機拍攝素材先備份。", en: "Back up phone photos early.", ko: "휴대폰 사진 먼저 백업." } },
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
    { title: { "zh-Hant": "行程參考", en: "Area references", ko: "동선 참고 링크" }, links: [
      { label: { "zh-Hant": "聖水洞官方介紹", en: "Official Seongsu guide", ko: "성수 공식 가이드" }, href: "https://visit.seoul.kr/en/articles/seongsu-dong-guide-2025" },
      { label: { "zh-Hant": "狎鷗亭羅德奧導覽", en: "Apgujeong Rodeo guide", ko: "압구정로데오 가이드" }, href: "https://visit.seoul.kr/en/articles/apgujeong-rodeo-street-guide-2026" },
      { label: { "zh-Hant": "漢南洞導覽", en: "Hannam-dong guide", ko: "한남동 가이드" }, href: "https://visit.seoul.kr/en/articles/hannam-dong-guide-2025" },
    ]},
    { title: { "zh-Hant": "付款與會員", en: "Money & Membership", ko: "결제 및 회원 혜택" }, links: [
      { label: { "zh-Hant": "華航會員權益", en: "China Airlines benefits", ko: "China Airlines benefits" }, href: "https://www.china-airlines.com/us/en/member/planning/introduction/membership-benefits" },
      { label: { "zh-Hant": "WOWPASS 即時匯率", en: "WOWPASS live rate", ko: "WOWPASS live rate" }, href: "https://www.wowexchange.net/exchange/rate?lang=en_US" },
      { label: { "zh-Hant": "景福宮官方開放時間", en: "Gyeongbokgung official hours", ko: "경복궁 공식 운영시간" }, href: "https://www.royalpalacekr.org/html/eng_gbg/guide/guide01_tab01.html" },
      { label: { "zh-Hant": "Leeum 官方資訊", en: "Leeum official info", ko: "리움 공식 정보" }, href: "https://visit.seoul.kr/en/things-to-do/leeum-museum" },
    ]},
  ],
};

const overviewContent = {
  themes: [
    { "zh-Hant": "韓食餐桌", en: "Korean dining", ko: "한식 식탁" },
    { "zh-Hant": "咖啡廳散步", en: "Cafe walks", ko: "카페 산책" },
    { "zh-Hant": "選物與購物", en: "Shopping", ko: "쇼핑" },
    { "zh-Hant": "宮殿與韓屋", en: "Palaces & hanok", ko: "궁궐과 한옥" },
    { "zh-Hant": "城市夜色", en: "Seoul at night", ko: "서울의 밤" },
  ],
  snapshot: [
    {
      label: { "zh-Hant": "旅程天數", en: "Length", ko: "여행 기간" },
      value: { "zh-Hant": "6 天 5 夜", en: "6 days / 5 nights", ko: "6일 5박" },
      note: { "zh-Hant": "以弘大為據點，沿著不同街區慢慢展開。", en: "Based in Hongdae, with each day branching into a different district.", ko: "홍대를 베이스로 두고 하루씩 다른 동네로 뻗어가는 일정입니다." },
    },
    {
      label: { "zh-Hant": "主要街區", en: "Main districts", ko: "주요 동네" },
      value: { "zh-Hant": "弘大・漢南洞・狎鷗亭・聖水・北村", en: "Hongdae · Hannam-dong · Apgujeong · Seongsu · Bukchon", ko: "홍대 · 한남동 · 압구정 · 성수 · 북촌" },
      note: { "zh-Hant": "每天盡量留在同一條城市軸線，不把移動切得太碎。", en: "Each day stays on one clean city axis rather than hopping too much.", ko: "하루는 한 축 안에서 움직이도록 정리해 동선을 잘게 쪼개지 않았습니다." },
    },
    {
      label: { "zh-Hant": "住宿區域", en: "Stay", ko: "숙소" },
      value: { "zh-Hant": "弘大西橋", en: "Seogyo / Hongdae", ko: "서교 · 홍대" },
      note: { "zh-Hant": "晚餐、回飯店與最後採買都很順，夜晚也有街區散步感。", en: "Easy for dinner, late returns, and last-day shopping with a lively night atmosphere.", ko: "저녁 식사, 늦은 귀가, 마지막 쇼핑이 모두 편하고 밤 산책도 좋습니다." },
    },
    {
      label: { "zh-Hant": "移動方式", en: "Getting around", ko: "이동 방식" },
      value: { "zh-Hant": "地鐵＋步行為主", en: "Subway + walking", ko: "지하철 + 도보" },
      note: { "zh-Hant": "拍攝日與夜間回程再視體力補上計程車。", en: "Taxis are most useful on the hanbok day or for late-night returns.", ko: "한복 촬영일과 밤 귀가 구간만 택시를 보조로 생각하면 됩니다." },
    },
    {
      label: { "zh-Hant": "體力節奏", en: "Energy", ko: "체력 리듬" },
      value: { "zh-Hant": "街區散步日居多", en: "Mostly walking days", ko: "도시 산책 위주" },
      note: { "zh-Hant": "狎鷗亭／江南與北村拍攝日步行量較高，其餘天數都留了緩衝。", en: "Apgujeong/Gangnam and the hanbok day are the heaviest; the other days stay lighter.", ko: "압구정·강남과 한복 촬영일은 걷는 양이 많고, 나머지는 여유를 남겨두었습니다." },
    },
    {
      label: { "zh-Hant": "預約與排隊", en: "Booking notes", ko: "예약 메모" },
      value: { "zh-Hant": "韓服日最需要準時", en: "Hanbok day matters most", ko: "한복 촬영일 우선" },
      note: { "zh-Hant": "咖啡廳與熱門餐廳先留彈性，真正需要守時的是 5/19 的韓服拍攝。", en: "Cafes and restaurants can stay flexible; the only fixed timing day is the hanbok appointment on 5/19.", ko: "카페와 식당은 유연하게 보고, 정말 시간을 지켜야 하는 건 5/19 한복 촬영입니다." },
    },
  ],
  highlights: [
    {
      tag: { "zh-Hant": "韓屋與宮牆", en: "Hanok & palace", ko: "한옥과 궁궐" },
      date: { "zh-Hant": "5/19 北村・安國", en: "May 19 · Bukchon / Anguk", ko: "5/19 · 북촌 / 안국" },
      title: { "zh-Hant": "把鏡頭留給北村巷弄與景福宮外圍", en: "A day framed by Bukchon alleys and the palace walls", ko: "북촌 골목과 궁궐 담장을 담는 하루" },
      desc: { "zh-Hant": "這天不趕景點，讓韓服、韓屋與宮牆光影成為整趟旅程最有畫面的段落。", en: "This day slows down on purpose so the hanbok, hanok lanes, and palace walls can carry the strongest visuals of the trip.", ko: "이날은 명소를 많이 넣지 않고 한복과 한옥, 궁 담장의 분위기를 온전히 남기는 데 집중합니다." },
    },
    {
      tag: { "zh-Hant": "城市散步", en: "City walks", ko: "도시 산책" },
      date: { "zh-Hant": "弘大・延南洞", en: "Hongdae / Yeonnam-dong", ko: "홍대 / 연남동" },
      title: { "zh-Hant": "把夜晚與最後半天都留給弘大", en: "Hongdae carries both the first night and the final half day", ko: "첫날 밤과 마지막 반나절을 홍대에 남겨둔 일정" },
      desc: { "zh-Hant": "從抵達首爾的第一頓晚餐，到回程前最後一杯咖啡，弘大會是最穩也最有生活感的背景。", en: "From the first dinner after landing to the last coffee before the airport, Hongdae holds the trip together.", ko: "도착 첫 저녁부터 귀국 전 마지막 커피까지, 홍대가 이번 여행의 생활감 있는 배경이 됩니다." },
    },
    {
      tag: { "zh-Hant": "展覽與咖啡", en: "Art & cafes", ko: "전시와 카페" },
      date: { "zh-Hant": "5/16 漢南洞", en: "May 16 · Hannam-dong", ko: "5/16 · 한남동" },
      title: { "zh-Hant": "先看展，再把午後留給漢南洞街景", en: "Begin with Leeum, then drift into Hannam’s streets", ko: "리움에서 시작해 한남동 오후로 이어지는 흐름" },
      desc: { "zh-Hant": "這一天從博物館與建築開始，後面自然接上選物店、書店與咖啡，節奏安靜但不無聊。", en: "The day opens with architecture and exhibitions, then naturally moves into boutiques, books, and coffee.", ko: "전시와 건축으로 문을 열고 편집숍, 서점, 카페로 이어지는 차분한 하루입니다." },
    },
    {
      tag: { "zh-Hant": "購物與都會感", en: "Shopping & city polish", ko: "쇼핑과 도회적 분위기" },
      date: { "zh-Hant": "5/17 狎鷗亭・江南", en: "May 17 · Apgujeong / Gangnam", ko: "5/17 · 압구정 / 강남" },
      title: { "zh-Hant": "把狎鷗亭、江南與 COEX 排成一條漂亮的城市軸線", en: "A polished city line from Apgujeong to Gangnam and COEX", ko: "압구정에서 강남, 코엑스로 이어지는 매끈한 도시 축" },
      desc: { "zh-Hant": "這天適合穿好走的鞋，沿著都會感最強的街區移動，購物、美妝與咖啡都能一次收進來。", en: "Wear good walking shoes and let one polished urban route hold your shopping, beauty stops, and cafe breaks.", ko: "편한 신발을 신고 이동하면 쇼핑, 뷰티, 카페를 한 줄로 담기 좋은 날입니다." },
    },
    {
      tag: { "zh-Hant": "聖水午後", en: "Seongsu afternoon", ko: "성수 오후" },
      date: { "zh-Hant": "5/18 展覽・聖水", en: "May 18 · Exhibition / Seongsu", ko: "5/18 · 전시 / 성수" },
      title: { "zh-Hant": "展覽看完，把最鬆弛的街區散步留給聖水", en: "After the exhibition, let Seongsu carry the softer half of the day", ko: "전시 뒤에는 성수의 느슨한 거리 리듬으로 마무리" },
      desc: { "zh-Hant": "選物店、咖啡香與首爾林的綠意會把整天收得很舒服，也很適合安排拍照與小採買。", en: "Shops, cafes, and Seoul Forest soften the day and make room for photos and easy shopping.", ko: "편집숍, 카페, 서울숲이 하루를 부드럽게 정리해 주고 사진과 가벼운 쇼핑에도 잘 맞습니다." },
    },
  ],
  practical: [
    {
      title: { "zh-Hant": "航班與機場交通", en: "Flights & airport transfer", ko: "항공편과 공항 이동" },
      items: [
        { "zh-Hant": "去程 5/15 15:30 台北出發，抵達後直接往弘大，第一晚只留在住宿周邊。", en: "Arrive on 5/15 and head straight to Hongdae; keep the first night local.", ko: "5/15 도착 후 바로 홍대로 이동하고 첫날 밤은 숙소 주변만 두는 구성이 좋습니다." },
        { "zh-Hant": "回程 5/20 20:05 起飛，最後半天不再跨區，讓機場移動保持從容。", en: "With a 20:05 return flight, keep the final half day local and calm.", ko: "귀국편이 20:05라 마지막 반나절은 멀리 가지 않는 편이 안정적입니다." },
      ],
    },
    {
      title: { "zh-Hant": "住宿與晚間節奏", en: "Stay & evenings", ko: "숙소와 밤 시간" },
      items: [
        { "zh-Hant": "住在弘大最大的好處，是晚餐、回飯店和最後採買都不用重新規劃。", en: "Staying in Hongdae makes dinners, returns, and last-day shopping easy.", ko: "홍대 숙소는 저녁, 귀가, 마지막 쇼핑까지 모두 간단하게 이어집니다." },
        { "zh-Hant": "如果某天走得比較累，晚餐直接收在弘大通常會比留在外區更舒服。", en: "If a day feels tiring, letting dinner land back in Hongdae is usually the easiest choice.", ko: "하루가 길어졌다면 저녁을 홍대에서 마무리하는 편이 가장 편합니다." },
      ],
    },
    {
      title: { "zh-Hant": "地鐵與轉場", en: "Subway rhythm", ko: "지하철과 이동 리듬" },
      items: [
        { "zh-Hant": "這趟以地鐵加步行為主，真正需要計程車的通常只有拍攝日或太晚回飯店的時候。", en: "Most of the trip works by subway and walking; taxis are most useful on the hanbok day or late at night.", ko: "대부분은 지하철과 도보로 충분하고, 택시는 한복 촬영일이나 늦은 귀가 때가 가장 유용합니다." },
        { "zh-Hant": "像安國、弘大、江南這種大站轉乘時，時間不要抓太緊，留一點城市轉場的緩衝。", en: "For bigger stations like Anguk, Hongdae, or Gangnam, leave transfer buffer instead of scheduling too tightly.", ko: "안국, 홍대, 강남처럼 큰 역은 환승 여유를 조금 남겨두는 편이 좋습니다." },
      ],
    },
    {
      title: { "zh-Hant": "餐廳與預約", en: "Restaurants & reservations", ko: "식당과 예약" },
      items: [
        { "zh-Hant": "午餐留給街區核心，晚上再視體力決定要不要回弘大收尾，整體最順。", en: "Lunch works best in the core district; decide dinner by energy and whether you want to return to Hongdae.", ko: "점심은 메인 구역에서, 저녁은 체력에 따라 현지에서 먹거나 홍대로 돌아오는 식이 가장 자연스럽습니다." },
        { "zh-Hant": "熱門餐廳如果現場候位太長，不用硬等，首爾街區裡通常很快就能找到下一間順眼的選擇。", en: "If a popular restaurant wait feels too long, Seoul usually gives you another good option a few steps away.", ko: "인기 식당 대기가 너무 길다면 굳이 기다리지 않아도 근처에 괜찮은 대안이 많은 편입니다." },
      ],
    },
    {
      title: { "zh-Hant": "咖啡廳與甜點", en: "Cafes & dessert", ko: "카페와 디저트" },
      items: [
        { "zh-Hant": "漢南洞、聖水、延南洞都適合安排一間真正想坐下來的咖啡廳，不用刻意塞滿兩三間。", en: "Hannam, Seongsu, and Yeonnam each deserve one cafe you truly want to sit in, not three rushed stops.", ko: "한남동, 성수, 연남동은 카페를 여러 곳보다 한 곳을 오래 머무는 방식이 더 잘 어울립니다." },
        { "zh-Hant": "甜點和咖啡最適合放在下午轉場，讓走路與購物之間有一段可以慢下來的空檔。", en: "Dessert and coffee work best as an afternoon pause between walking and shopping.", ko: "디저트와 커피는 걷기와 쇼핑 사이의 속도를 낮춰 주는 오후 휴식으로 두는 편이 좋습니다." },
      ],
    },
    {
      title: { "zh-Hant": "購物與退稅", en: "Shopping & tax refund", ko: "쇼핑과 환급" },
      items: [
        { "zh-Hant": "狎鷗亭／江南適合排服飾與城市型購物，聖水比較適合選物與街區小店。", en: "Apgujeong/Gangnam are better for fashion and polished city shopping; Seongsu suits select shops and smaller finds.", ko: "압구정·강남은 패션과 도회적 쇼핑, 성수는 편집숍과 작은 상점들에 더 잘 맞습니다." },
        { "zh-Hant": "如果當天有大量採買，先把退稅單和戰利品整理好，回飯店時比較不會手忙腳亂。", en: "On bigger shopping days, organize tax slips and purchases early so the return to the hotel stays easy.", ko: "쇼핑이 많았던 날은 환급 영수증과 짐을 먼저 정리해 두는 편이 편합니다." },
      ],
    },
    {
      title: { "zh-Hant": "美妝採買", en: "Beauty restock", ko: "뷰티 쇼핑" },
      items: [
        { "zh-Hant": "美妝補貨建議集中在同一天處理，手上才不會天天提著購物袋。", en: "Beauty restocking is easier if you batch it into one day rather than carrying bags every day.", ko: "뷰티 제품은 하루에 몰아서 사는 편이 손에 짐이 덜하고 일정도 편합니다." },
        { "zh-Hant": "如果最後一天還有 Olive Young 或藥妝要補，盡量留在弘大附近一次解決。", en: "If you still need Olive Young or pharmacy shopping on the final day, keep it near Hongdae and do it in one stop.", ko: "마지막 날 올리브영이나 드럭스토어 보충이 남았다면 홍대 근처에서 한 번에 해결하는 편이 좋습니다." },
      ],
    },
    {
      title: { "zh-Hant": "網路、付款與翻譯 App", en: "Data, payment, translation apps", ko: "데이터, 결제, 번역 앱" },
      items: [
        { "zh-Hant": "手機網路、地圖、翻譯和飯店地址截圖先準備好，臨時叫車或找店時都會比較快。", en: "Prepare mobile data, maps, translation, and a hotel-address screenshot in advance for easier navigation and taxis.", ko: "모바일 데이터, 지도, 번역, 숙소 주소 캡처를 미리 준비해 두면 갑작스러운 이동이 훨씬 편합니다." },
        { "zh-Hant": "付款以刷卡搭配少量韓元現金最穩；需要現場補款的頁面，再回韓服或預算頁查看即可。", en: "Cards plus a small amount of KRW cash are the easiest mix; use the hanbok or budget page for exact payment details.", ko: "결제는 카드와 소량의 현금 조합이 가장 편하고, 정확한 금액은 한복/예산 페이지에서 다시 확인하면 됩니다." },
      ],
    },
    {
      title: { "zh-Hant": "天氣、穿搭與小提醒", en: "Weather, outfit, reminders", ko: "날씨와 옷차림" },
      items: [
        { "zh-Hant": "這趟幾乎每天都會走路，鞋子舒服比什麼都重要；拍照日再把穿搭重點放在層次與顏色。", en: "Comfortable shoes matter most on this trip; save styling energy for layers and color on the photo day.", ko: "이번 여행은 거의 매일 걷기 때문에 신발이 가장 중요하고, 촬영일에만 색감과 레이어를 더 신경 쓰면 됩니다." },
        { "zh-Hant": "購物日不要背太重的包，宮殿與韓屋日則記得防曬、頭髮整理與手機電量。", en: "Keep your bag light on shopping days; on palace and hanok days, remember sun protection, hair touch-ups, and battery life.", ko: "쇼핑하는 날은 가방을 가볍게, 궁궐과 한옥 일정에는 자외선과 헤어, 배터리를 챙기는 편이 좋습니다." },
      ],
    },
  ],
};

const itineraryGuide = {
  "2026-05-15": {
    theme: { "zh-Hant": "抵達首爾與弘大夜色", en: "Arrival and Hongdae at night", ko: "도착과 홍대의 밤" },
    energy: { "zh-Hant": "輕鬆", en: "Light", ko: "가벼움" },
    shoes: { "zh-Hant": "舒服好走的鞋", en: "Easy walking shoes", ko: "편한 신발" },
    booking: { "zh-Hant": "無需預約", en: "No bookings needed", ko: "예약 없음" },
    dining: { "zh-Hant": "弘大或延南洞晚餐＋一間安靜咖啡店", en: "Dinner in Hongdae or Yeonnam plus one easy cafe", ko: "홍대·연남동 저녁과 카페 한 곳" },
    shopping: { "zh-Hant": "便利店補貨、簡單逛弘大", en: "Convenience-store restock and light browsing", ko: "편의점 보충과 가벼운 홍대 둘러보기" },
    photo: { "zh-Hant": "弘大夜景與街口燈光", en: "Hongdae night streets", ko: "홍대 밤거리" },
    preview: { "zh-Hant": "長途移動後，把第一晚留給弘大的街景和晚餐，讓旅程從一個不趕時間的夜晚開始。", en: "After the long transfer, let Hongdae carry the first dinner and first walk.", ko: "긴 이동 뒤에는 홍대의 저녁과 밤거리로 천천히 여행을 시작합니다." },
    quickHighlights: [
      { "zh-Hant": "弘大夜晚散步", en: "Hongdae night walk", ko: "홍대 밤 산책" },
      { "zh-Hant": "延南洞咖啡店", en: "Yeonnam cafe stop", ko: "연남동 카페" },
      { "zh-Hant": "先熟悉飯店周邊", en: "Get familiar with the hotel area", ko: "숙소 주변 익히기" },
    ],
    flow: [
      { label: { "zh-Hant": "傍晚｜落地首爾", en: "Evening", ko: "저녁 전" }, title: { "zh-Hant": "先把機場移動收乾淨", en: "Move smoothly out of the airport", ko: "공항 이동 정리" }, desc: { "zh-Hant": "這天的重點不是塞景點，而是讓入境、交通卡和到飯店的節奏都穩穩落地。", en: "The point is not to chase sights, but to make arrival feel smooth.", ko: "이날은 명소보다 입국과 숙소 이동을 부드럽게 마무리하는 데 집중합니다." } },
      { label: { "zh-Hant": "夜晚｜今晚落腳", en: "Night", ko: "밤" }, title: { "zh-Hant": "先把行李放進弘大的日常裡", en: "Settle into Hongdae first", ko: "홍대에 먼저 안착" }, desc: { "zh-Hant": "把第一晚留給熟悉住宿周邊，後面幾天的移動會更安心。", en: "Staying close tonight makes the rest of the trip feel easier.", ko: "첫날 밤을 숙소 주변에 두면 이후 일정이 훨씬 편해집니다." } },
      { label: { "zh-Hant": "夜晚｜今日餐桌", en: "Dinner", ko: "저녁 식탁" }, title: { "zh-Hant": "弘大晚餐與延南洞街口", en: "Dinner in Hongdae", ko: "홍대 저녁" }, desc: { "zh-Hant": "就近找一間順眼的餐廳，不特別追名店，讓首爾第一餐吃得輕鬆一點。", en: "Keep the first meal easy and close to the hotel.", ko: "첫 식사는 가까운 곳에서 편하게 먹는 편이 좋습니다." } },
      { label: { "zh-Hant": "收尾｜慢慢進入首爾", en: "Wrap-up", ko: "마무리" }, title: { "zh-Hant": "留一小段街景給第一晚", en: "Leave room for one short walk", ko: "짧은 밤 산책" }, desc: { "zh-Hant": "晚餐後沿著弘大或延南洞走一小段，旅程就會自然地開始。", en: "One short post-dinner walk is enough to open the trip.", ko: "식사 후 짧게 걷는 것만으로도 여행이 자연스럽게 시작됩니다." } },
    ],
    reminders: [
      { "zh-Hant": "第一晚不要再跨區，把力氣留給後面幾天。", en: "Do not cross the city again on the first night.", ko: "첫날 밤에는 다른 구역까지 가지 않는 편이 좋습니다." },
      { "zh-Hant": "手機網路、T-money、飯店地址截圖先整理好，晚上會更省心。", en: "Sort out data, T-money, and the hotel address screenshot early.", ko: "데이터, 교통카드, 숙소 주소 캡처를 먼저 정리해 두세요." },
    ],
  },
  "2026-05-16": {
    theme: { "zh-Hant": "展覽、選物與漢南洞街景", en: "Art and Hannam streets", ko: "전시와 한남동 거리" },
    energy: { "zh-Hant": "普通", en: "Moderate", ko: "보통" },
    shoes: { "zh-Hant": "適合久走的平底鞋", en: "Comfortable all-day shoes", ko: "오래 걷기 좋은 신발" },
    booking: { "zh-Hant": "Leeum 若看特展可先查票", en: "Check Leeum exhibition tickets if needed", ko: "리움 특별전은 예매 확인" },
    dining: { "zh-Hant": "漢江鎮早午餐＋弘大晚餐", en: "Brunch near Hangangjin and dinner back in Hongdae", ko: "한강진 브런치와 홍대 저녁" },
    shopping: { "zh-Hant": "漢南洞選物店、書店、小型品牌店", en: "Select shops, bookstores, and smaller labels", ko: "편집숍, 서점, 작은 브랜드" },
    photo: { "zh-Hant": "Leeum 建築線條與漢南洞街景", en: "Leeum architecture and Hannam streets", ko: "리움 건축과 한남동 거리" },
    preview: { "zh-Hant": "這天適合慢一點，先用 Leeum 和建築把情緒定下來，再把午後留給漢南洞街區與咖啡店。", en: "Start with Leeum, then let Hannam and cafes soften the rest of the day.", ko: "리움으로 시작해 한남동 거리와 카페로 이어지는 느긋한 흐름입니다." },
    quickHighlights: [
      { "zh-Hant": "Leeum Museum", en: "Leeum Museum", ko: "리움미술관" },
      { "zh-Hant": "Blue Square Book Park", en: "Book Park", ko: "북파크" },
      { "zh-Hant": "漢南洞主街散步", en: "Hannam main street walk", ko: "한남동 메인 거리 산책" },
    ],
    flow: [
      { label: { "zh-Hant": "上午｜城市醒來", en: "Morning", ko: "오전" }, title: { "zh-Hant": "從展覽與建築打開這一天", en: "Open the day with art and architecture", ko: "전시와 건축으로 시작" }, desc: { "zh-Hant": "先進 Leeum，比直接開始逛街更能把整天的氣氛收穩。", en: "Starting at Leeum gives the whole day a calmer frame.", ko: "리움에서 시작하면 하루 분위기가 차분하게 잡힙니다." } },
      { label: { "zh-Hant": "中午｜韓食餐桌", en: "Midday", ko: "점심" }, title: { "zh-Hant": "午餐後順著街區往前走", en: "Let lunch lead into the neighborhood", ko: "점심 뒤 거리로 연결" }, desc: { "zh-Hant": "漢南洞的好處是不用折返，吃完就能直接接進主街與小巷。", en: "Hannam works best as one continuous route without backtracking.", ko: "한남동은 한 방향으로 이어가기에 좋은 동네입니다." } },
      { label: { "zh-Hant": "下午｜街區散步", en: "Afternoon", ko: "오후" }, title: { "zh-Hant": "選物、書店、咖啡慢慢排開", en: "Shops, books, and coffee at an easy pace", ko: "편집숍과 서점, 카페를 천천히" }, desc: { "zh-Hant": "這天不需要排太滿，漢南洞的重點本來就藏在慢慢走的節奏裡。", en: "Hannam feels best when you leave the afternoon loose.", ko: "한남동은 오후를 느슨하게 둘수록 더 잘 보입니다." } },
      { label: { "zh-Hant": "夜晚｜回弘大收尾", en: "Night", ko: "밤" }, title: { "zh-Hant": "晚餐收在熟悉的街口", en: "Finish where the stay feels easy", ko: "익숙한 홍대로 마무리" }, desc: { "zh-Hant": "如果不想拖太晚，回弘大吃飯會比留在外區更舒服。", en: "Returning to Hongdae keeps the evening simple.", ko: "저녁은 홍대로 돌아와 마무리하는 편이 편합니다." } },
    ],
    reminders: [
      { "zh-Hant": "這天會走不少路，但節奏偏鬆，適合穿舒服又稍微好看的鞋。", en: "You will walk quite a bit, but the pace stays gentle.", ko: "걷는 양은 있지만 전체적으로 여유 있는 날입니다." },
      { "zh-Hant": "咖啡店不用排太多間，留一間真正想坐下來的就夠。", en: "One good cafe stop is better than rushing through several.", ko: "카페는 여러 곳보다 한 곳을 오래 머무는 편이 좋습니다." },
    ],
  },
  "2026-05-17": {
    theme: { "zh-Hant": "狎鷗亭、江南與都會購物節奏", en: "Apgujeong and Gangnam shopping rhythm", ko: "압구정과 강남의 쇼핑 리듬" },
    energy: { "zh-Hant": "偏累", en: "High", ko: "조금 높은 편" },
    shoes: { "zh-Hant": "一定要好走，包包越輕越好", en: "Very comfortable shoes, light bag", ko: "편한 신발과 가벼운 가방" },
    booking: { "zh-Hant": "無硬性預約，但熱門店面保留排隊彈性", en: "No fixed booking, but allow for waiting time", ko: "예약보다는 대기 여유가 필요" },
    dining: { "zh-Hant": "狎鷗亭早午餐＋COEX 周邊晚餐", en: "Brunch in Apgujeong and dinner around COEX", ko: "압구정 브런치와 코엑스 저녁" },
    shopping: { "zh-Hant": "服飾、美妝、選物與百貨動線", en: "Fashion, beauty, select shops, and mall stops", ko: "패션, 뷰티, 편집숍, 백화점" },
    photo: { "zh-Hant": "狎鷗亭街景與 Starfield Library", en: "Apgujeong streets and Starfield Library", ko: "압구정 거리와 별마당도서관" },
    preview: { "zh-Hant": "這天偏都會感，把狎鷗亭與江南排成同一條路線，購物、美妝與咖啡都能收進來。", en: "This is the city-polish day: fashion, coffee, and malls in one line.", ko: "이번 일정에서 가장 도회적인 하루로, 쇼핑과 뷰티를 한 축으로 묶어둔 날입니다." },
    quickHighlights: [
      { "zh-Hant": "狎鷗亭羅德奧", en: "Apgujeong Rodeo", ko: "압구정로데오" },
      { "zh-Hant": "江南主街", en: "Gangnam main streets", ko: "강남 메인 거리" },
      { "zh-Hant": "COEX 星光圖書館", en: "Starfield Library", ko: "별마당도서관" },
    ],
    flow: [
      { label: { "zh-Hant": "上午｜輕鬆出門", en: "Morning", ko: "오전" }, title: { "zh-Hant": "先從狎鷗亭的街區質感開始", en: "Start with Apgujeong’s polished street mood", ko: "압구정의 거리 감도에서 시작" }, desc: { "zh-Hant": "早午餐後直接走進狎鷗亭羅德奧，步調會比較漂亮。", en: "Brunch first, then let Apgujeong unfold naturally on foot.", ko: "브런치 뒤에 로데오 거리를 걷는 흐름이 가장 자연스럽습니다." } },
      { label: { "zh-Hant": "中午｜都會餐桌", en: "Midday", ko: "점심" }, title: { "zh-Hant": "中段留給江南的熱鬧密度", en: "Let midday carry the denser Gangnam energy", ko: "강남의 밀도를 점심 이후로" }, desc: { "zh-Hant": "午餐後進江南主街，逛街與轉場都會更順。", en: "After lunch, move deeper into Gangnam’s busier shopping streets.", ko: "점심 뒤 강남 메인 상권으로 넘어가면 동선이 깔끔합니다." } },
      { label: { "zh-Hant": "下午｜美妝與服飾採買", en: "Afternoon", ko: "오후" }, title: { "zh-Hant": "把購物集中在同一天", en: "Batch shopping into one day", ko: "쇼핑을 하루에 모으기" }, desc: { "zh-Hant": "這樣後面幾天就不用一直提著戰利品，也比較適合補貨。", en: "A concentrated shopping day keeps the rest of the trip lighter.", ko: "쇼핑을 하루에 모으면 이후 일정이 훨씬 가벼워집니다." } },
      { label: { "zh-Hant": "夜晚｜城市夜色", en: "Night", ko: "밤" }, title: { "zh-Hant": "COEX 收尾，再回弘大", en: "Finish at COEX, then return to Hongdae", ko: "코엑스로 마무리 후 홍대 복귀" }, desc: { "zh-Hant": "晚餐與室內商場都可以留在 COEX 一帶，夜晚的節奏會很完整。", en: "COEX gives the day a clean indoor finish before heading back.", ko: "코엑스에서 저녁과 실내 이동을 정리하면 하루가 매끈하게 끝납니다." } },
    ],
    reminders: [
      { "zh-Hant": "這天購物成分高，包包不要太重，也最好預留一點行李空間。", en: "This is a shopping-heavy day, so keep your bag light and leave luggage space.", ko: "쇼핑 비중이 높은 날이라 가방은 가볍게, 캐리어 공간은 조금 남겨두는 편이 좋습니다." },
      { "zh-Hant": "熱門店面與咖啡廳可能要排隊，下午行程不要抓得太死。", en: "Popular shops and cafes may require waiting, so keep the afternoon flexible.", ko: "인기 매장과 카페 대기를 고려해 오후 일정을 너무 빽빽하게 잡지 마세요." },
    ],
  },
  "2026-05-18": {
    theme: { "zh-Hant": "展覽後接聖水與首爾林", en: "Exhibition and Seongsu", ko: "전시와 성수" },
    energy: { "zh-Hant": "普通", en: "Moderate", ko: "보통" },
    shoes: { "zh-Hant": "好走的鞋，適合慢慢逛", en: "Easy shoes for a slower walking day", ko: "천천히 걷기 좋은 신발" },
    booking: { "zh-Hant": "展覽若需預約先確認", en: "Check exhibition booking if needed", ko: "전시 예약 여부 확인" },
    dining: { "zh-Hant": "展覽周邊午餐＋聖水晚餐或回弘大", en: "Lunch near the exhibition and dinner in Seongsu or Hongdae", ko: "전시 주변 점심과 성수 또는 홍대 저녁" },
    shopping: { "zh-Hant": "選物店、快閃店、小型品牌", en: "Select shops, pop-ups, smaller brands", ko: "편집숍, 팝업, 작은 브랜드" },
    photo: { "zh-Hant": "聖水主街、首爾林、街角咖啡店", en: "Seongsu streets, Seoul Forest, and cafes", ko: "성수 거리, 서울숲, 카페" },
    preview: { "zh-Hant": "把前半天留給最想看的展，下午再接聖水與首爾林，整天會有一種輕鬆但不空的城市感。", en: "Let the exhibition take the first half, then soften into Seongsu and Seoul Forest.", ko: "전시로 시작하고 성수와 서울숲으로 이어지는 느슨한 도시 산책의 날입니다." },
    quickHighlights: [
      { "zh-Hant": "看展", en: "Exhibition time", ko: "전시 관람" },
      { "zh-Hant": "聖水主街", en: "Seongsu main streets", ko: "성수 메인 거리" },
      { "zh-Hant": "首爾林", en: "Seoul Forest", ko: "서울숲" },
    ],
    flow: [
      { label: { "zh-Hant": "上午｜文化開場", en: "Morning", ko: "오전" }, title: { "zh-Hant": "先把注意力留給展覽", en: "Give the first half to the exhibition", ko: "전시에 먼저 집중" }, desc: { "zh-Hant": "展覽放前半天最剛好，下午就能把心情慢慢切回街區散步。", en: "Seeing the exhibition earlier keeps the rest of the day easier.", ko: "전시는 앞쪽에 두는 편이 이후 동선을 더 편하게 만들어 줍니다." } },
      { label: { "zh-Hant": "中午｜午間風味", en: "Midday", ko: "점심" }, title: { "zh-Hant": "順著聖水一路吃進街景裡", en: "Let lunch lead into Seongsu’s streets", ko: "성수 거리로 이어지는 점심" }, desc: { "zh-Hant": "午餐後接主街最自然，剛好進入選物店和街角小店的節奏。", en: "Lunch works best as the handoff into Seongsu’s shops and side streets.", ko: "점심 뒤에 메인 거리와 편집숍으로 이어가면 흐름이 자연스럽습니다." } },
      { label: { "zh-Hant": "下午｜街區散步", en: "Afternoon", ko: "오후" }, title: { "zh-Hant": "把咖啡、拍照與小採買留給聖水", en: "Use Seongsu for coffee, photos, and easy shopping", ko: "카페, 사진, 가벼운 쇼핑을 성수에" }, desc: { "zh-Hant": "這區最適合慢慢挑店，不必急著多跑幾個點。", en: "Seongsu feels better when you browse slowly instead of rushing.", ko: "성수는 여러 곳을 급히 도는 것보다 천천히 고르는 방식이 더 잘 어울립니다." } },
      { label: { "zh-Hant": "傍晚｜城市留白", en: "Evening", ko: "저녁 무렵" }, title: { "zh-Hant": "首爾林把這天收得很舒服", en: "Let Seoul Forest soften the ending", ko: "서울숲으로 부드럽게 마무리" }, desc: { "zh-Hant": "如果還有體力，留一段首爾林步道，整天會更完整。", en: "A walk through Seoul Forest gives the day a calm finish.", ko: "서울숲 산책을 덧붙이면 하루가 훨씬 부드럽게 끝납니다." } },
    ],
    reminders: [
      { "zh-Hant": "如果展覽其實在江南一帶，這天可以和江南日對調，整體動線會更省。", en: "If the exhibition turns out to be in Gangnam, consider swapping this day with the Gangnam day.", ko: "전시 장소가 강남 쪽이라면 강남 일정과 날짜를 바꾸는 편이 더 효율적입니다." },
      { "zh-Hant": "聖水很容易邊走邊買，記得把購物袋重量留一點餘裕。", en: "Seongsu makes it easy to shop as you walk, so leave room in your hands and bag.", ko: "성수는 걷다 보면 자연스럽게 쇼핑이 늘어나니 짐 여유를 남겨두세요." },
    ],
  },
  "2026-05-19": {
    theme: { "zh-Hant": "韓服、韓屋與宮牆畫面", en: "Hanbok, hanok, palace walls", ko: "한복, 한옥, 궁궐 담장" },
    energy: { "zh-Hant": "拍照日", en: "Photo day", ko: "촬영일" },
    shoes: { "zh-Hant": "好穿脫、走路穩的鞋", en: "Easy on-off shoes with stable footing", ko: "벗고 신기 편한 안정적인 신발" },
    booking: { "zh-Hant": "14:00 韓服拍攝，務必提早抵達", en: "14:00 hanbok appointment, arrive early", ko: "14:00 한복 촬영, 여유 있게 도착" },
    dining: { "zh-Hant": "出門前簡單吃，拍完在安國或光化門晚餐", en: "Light start, then dinner in Anguk or Gwanghwamun", ko: "가볍게 시작하고 안국·광화문 저녁" },
    shopping: { "zh-Hant": "今天不安排重購物，讓手上保持輕鬆", en: "Keep shopping light today", ko: "오늘은 쇼핑을 가볍게" },
    photo: { "zh-Hant": "北村巷弄、宮牆、光化門廣場", en: "Bukchon alleys, palace walls, Gwanghwamun", ko: "북촌 골목, 궁 담장, 광화문광장" },
    preview: { "zh-Hant": "這天的主角不是景點數量，而是畫面。把時間留給北村、安國與景福宮外圍，整體會比硬塞更多地點好看很多。", en: "This day is about visuals, not how many places you can tick off.", ko: "이날은 장소 수보다 화면이 중요한 날입니다." },
    quickHighlights: [
      { "zh-Hant": "옥한복 14:00", en: "Ok Hanbok at 14:00", ko: "옥한복 14:00" },
      { "zh-Hant": "北村韓屋巷弄", en: "Bukchon hanok lanes", ko: "북촌 한옥 골목" },
      { "zh-Hant": "光化門與宮牆外景", en: "Gwanghwamun and palace exteriors", ko: "광화문과 궁 외경" },
    ],
    flow: [
      { label: { "zh-Hant": "中午前後｜出門準備", en: "Before noon", ko: "정오 전후" }, title: { "zh-Hant": "先把狀態整理好再進北村", en: "Get ready before heading into Bukchon", ko: "북촌 들어가기 전 컨디션 정리" }, desc: { "zh-Hant": "這天比起多排店，更重要的是把妝髮、手機電量和心情都準備好。", en: "This day is more about readiness than adding more stops.", ko: "이날은 다른 곳을 더 넣기보다 상태를 잘 정리하고 들어가는 것이 중요합니다." } },
      { label: { "zh-Hant": "下午｜宮殿與韓屋", en: "Afternoon", ko: "오후" }, title: { "zh-Hant": "把拍攝主軸留在同一區", en: "Keep the entire shoot in one visual district", ko: "같은 구역 안에서 촬영 축 유지" }, desc: { "zh-Hant": "北村、安國與景福宮外圍已經足夠，不需要再把路線拉得太遠。", en: "Bukchon, Anguk, and the palace exterior are already enough for a full visual day.", ko: "북촌, 안국, 궁 외곽만으로도 하루 화면이 충분합니다." } },
      { label: { "zh-Hant": "傍晚｜拍完慢慢收尾", en: "Late afternoon", ko: "늦은 오후" }, title: { "zh-Hant": "把晚餐留在安國或光化門", en: "Leave dinner near Anguk or Gwanghwamun", ko: "안국·광화문에서 저녁" }, desc: { "zh-Hant": "拍攝結束後不用急著趕回弘大，就近吃飯會讓整天的情緒更完整。", en: "Staying nearby for dinner gives the day a softer ending.", ko: "촬영 후 근처에서 저녁을 먹으면 하루의 여운이 자연스럽게 이어집니다." } },
      { label: { "zh-Hant": "夜晚｜安靜整理", en: "Night", ko: "밤" }, title: { "zh-Hant": "回飯店後先備份照片", en: "Back up photos after returning", ko: "숙소에서 사진 백업" }, desc: { "zh-Hant": "這天的手機相簿會很滿，回飯店先整理好，隔天會輕鬆很多。", en: "Your phone will be full today, so back up images once you return.", ko: "이날은 사진이 많으니 돌아와서 먼저 백업해 두는 편이 좋습니다." } },
    ],
    reminders: [
      { "zh-Hant": "今天最需要提早出門，北村找路和換裝都不要抓太緊。", en: "This is the one day that truly needs extra buffer.", ko: "이날은 길 찾기와 준비 시간을 넉넉히 잡는 것이 가장 중요합니다." },
      { "zh-Hant": "景福宮週二不開放宮內參觀，但外圍宮牆和廣場已經足夠有畫面。", en: "The palace interior is closed on Tuesday, but the exterior still gives plenty of strong visuals.", ko: "화요일이라 궁 내부는 닫혀 있지만 외곽만으로도 충분히 좋은 장면이 나옵니다." },
    ],
  },
  "2026-05-20": {
    theme: { "zh-Hant": "最後半天的弘大收尾", en: "A soft Hongdae finale", ko: "홍대로 마무리하는 마지막 반나절" },
    energy: { "zh-Hant": "輕鬆", en: "Light", ko: "가벼움" },
    shoes: { "zh-Hant": "輕便好走", en: "Light and easy shoes", ko: "가볍고 편한 신발" },
    booking: { "zh-Hant": "注意回程班機時間", en: "Just keep the return flight timing in mind", ko: "귀국편 시간 확인" },
    dining: { "zh-Hant": "最後一頓弘大早午餐＋咖啡", en: "One last Hongdae brunch and coffee", ko: "홍대 마지막 브런치와 커피" },
    shopping: { "zh-Hant": "補齊最後採買，不再開新區域", en: "Final shopping without opening a new district", ko: "새 구역 없이 마지막 쇼핑" },
    photo: { "zh-Hant": "弘大街口、延南洞與最後的城市小景", en: "Hongdae corners and the final street scenes", ko: "홍대와 연남동의 마지막 거리 장면" },
    preview: { "zh-Hant": "最後半天適合留在熟悉的弘大，吃一頓舒服的早午餐、補齊最後採買，再慢慢往機場去。", en: "Stay with the familiar rhythm of Hongdae before heading to the airport.", ko: "익숙한 홍대의 리듬 속에서 천천히 마무리한 뒤 공항으로 향하는 날입니다." },
    quickHighlights: [
      { "zh-Hant": "弘大最後散步", en: "Final Hongdae walk", ko: "홍대 마지막 산책" },
      { "zh-Hant": "延南洞咖啡", en: "Yeonnam coffee", ko: "연남동 카페" },
      { "zh-Hant": "傍晚前往機場", en: "Airport transfer before evening", ko: "저녁 전 공항 이동" },
    ],
    flow: [
      { label: { "zh-Hant": "上午｜輕鬆收拾", en: "Morning", ko: "오전" }, title: { "zh-Hant": "退房後把節奏留在飯店周邊", en: "Keep the day near the hotel after check-out", ko: "체크아웃 후 숙소 주변에 머물기" }, desc: { "zh-Hant": "最後一天不需要再開新區域，把時間留給熟悉的街角就好。", en: "No need to add a new district on the final day.", ko: "마지막 날은 새로운 지역을 더하지 않는 편이 좋습니다." } },
      { label: { "zh-Hant": "中午｜午間補給", en: "Midday", ko: "점심" }, title: { "zh-Hant": "最後一頓留給喜歡的弘大餐桌", en: "Leave the last meal to a favorite Hongdae table", ko: "좋아하는 홍대 식탁에 마지막 식사" }, desc: { "zh-Hant": "最後一餐不用特別正式，只要是這趟旅程會想記住的味道就好。", en: "The final meal only needs to feel memorable, not fancy.", ko: "마지막 식사는 화려하기보다 기억에 남는 편이면 충분합니다." } },
      { label: { "zh-Hant": "下午｜推薦採買", en: "Afternoon", ko: "오후" }, title: { "zh-Hant": "把最後補貨集中處理", en: "Wrap up the last shopping in one pass", ko: "마지막 쇼핑을 한 번에 정리" }, desc: { "zh-Hant": "Olive Young、零食或小禮物都在這半天解決，手上才不會一路提著。", en: "Use this half day for final beauty restocks, snacks, and gifts.", ko: "뷰티 보충, 간식, 선물은 이 반나절에 정리하는 편이 편합니다." } },
      { label: { "zh-Hant": "傍晚｜前往機場", en: "Evening", ko: "저녁 무렵" }, title: { "zh-Hant": "把最後一段城市轉場留得從容", en: "Leave calmly for the airport", ko: "공항으로 여유 있게 이동" }, desc: { "zh-Hant": "傍晚出發最穩，也替這趟首爾留一個不慌不忙的句點。", en: "Heading out in the early evening leaves a calm final stretch.", ko: "초저녁 공항 이동이 가장 안정적이고 마무리도 차분합니다." } },
    ],
    reminders: [
      { "zh-Hant": "今天不適合再衝遠區，提著行李與戰利品會很快累。", en: "Do not add a far district today; luggage and shopping will slow you down.", ko: "짐과 쇼핑백이 있기 때문에 먼 구역을 더하는 것은 비추천입니다." },
      { "zh-Hant": "如果最後還要買美妝或零食，盡量集中在同一間店一次解決。", en: "If you still need beauty or snack shopping, batch it into one stop.", ko: "뷰티나 간식 쇼핑이 남았다면 한 곳에서 한 번에 정리하는 편이 좋습니다." },
    ],
  },
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

function getGuide(item) {
  return itineraryGuide[item.date] || null;
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
  if (!data.heroSummary.length) {
    root.innerHTML = "";
    root.style.display = "none";
    return;
  }
  root.style.display = "";
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
  const overviewStory = document.getElementById("overviewStory");
  const overviewThemeChips = document.getElementById("overviewThemeChips");
  const overviewSnapshot = document.getElementById("overviewSnapshot");
  const journeyHighlights = document.getElementById("journeyHighlights");
  const dayPreviewList = document.getElementById("dayPreviewList");
  const practicalInfo = document.getElementById("practicalInfo");
  if (!overviewStory || !overviewThemeChips || !overviewSnapshot || !journeyHighlights || !dayPreviewList || !practicalInfo) return;

  overviewStory.textContent = t[state.lang].heroNarrative;
  overviewThemeChips.innerHTML = overviewContent.themes
    .map((item) => `<span class="pill">${getText(item)}</span>`)
    .join("");

  overviewSnapshot.innerHTML = overviewContent.snapshot
    .map(
      (item) => `
        <article class="overview-snapshot-card">
          <div class="mini-stat-label">${getText(item.label)}</div>
          <div class="snapshot-value">${getText(item.value)}</div>
          <div class="budget-original">${getText(item.note)}</div>
        </article>
      `
    )
    .join("");

  journeyHighlights.innerHTML = overviewContent.highlights
    .map(
      (item) => `
        <article class="highlight-card">
          <div class="highlight-top">
            <span class="progress-pill">${getText(item.tag)}</span>
            <span class="date-label">${getText(item.date)}</span>
          </div>
          <h4>${getText(item.title)}</h4>
          <p class="card-intro">${getText(item.desc)}</p>
        </article>
      `
    )
    .join("");

  dayPreviewList.innerHTML = data.itinerary
    .map((item) => {
      const guide = getGuide(item);
      return `
        <article class="day-preview-card">
          <div class="day-preview-top">
            <div>
              <div class="accordion-topline">
                <span class="day-chip">${getText(item.day)}</span>
                <span class="date-label">${item.date}</span>
              </div>
              <h4>${getText(item.plan)}</h4>
            </div>
            <button class="action-link preview-link" type="button" data-page-link="itinerary" aria-label="Open itinerary page">${t[state.lang].openLink}</button>
          </div>
          <div class="preview-meta-row">
            <span class="itinerary-area-chip">${getText(item.area)}</span>
            <span class="progress-pill">${guide ? getText(guide.energy) : ""}</span>
            <span class="progress-pill">${guide ? getText(guide.theme) : ""}</span>
          </div>
          <p class="card-intro">${guide ? getText(guide.preview) : getText(item.rhythm)}</p>
          <div class="preview-points">
            ${(guide?.quickHighlights || [])
              .map((point) => `<span class="preview-point">${getText(point)}</span>`)
              .join("")}
          </div>
          <div class="preview-meta-grid">
            <div class="itinerary-meta-card"><div class="itinerary-meta-label">${getText({ "zh-Hant": "體力節奏", en: "Energy", ko: "체력 리듬" })}</div><div class="itinerary-meta-value">${guide ? getText(guide.energy) : ""}</div></div>
            <div class="itinerary-meta-card"><div class="itinerary-meta-label">${getText({ "zh-Hant": "今日隨身小物", en: "Wear / carry", ko: "신발과 소지품" })}</div><div class="itinerary-meta-value">${guide ? getText(guide.shoes) : ""}</div></div>
            <div class="itinerary-meta-card"><div class="itinerary-meta-label">${getText({ "zh-Hant": "今日最值得期待", en: "Most worth looking forward to", ko: "오늘 기대 포인트" })}</div><div class="itinerary-meta-value">${guide ? getText(guide.photo) : getText(item.location)}</div></div>
            <div class="itinerary-meta-card"><div class="itinerary-meta-label">${getText({ "zh-Hant": "提早出門 / 預約", en: "Timing / booking", ko: "시간 / 예약" })}</div><div class="itinerary-meta-value">${guide ? getText(guide.booking) : ""}</div></div>
          </div>
        </article>
      `;
    })
    .join("");

  practicalInfo.innerHTML = overviewContent.practical
    .map(
      (group, index) => `
        <details class="practical-card" ${index === 0 ? "open" : ""}>
          <summary class="practical-summary">
            <span class="bullet-title">${getText(group.title)}</span>
            <span class="date-label">${getText({ "zh-Hant": "打開查看", en: "Open", ko: "열기" })}</span>
          </summary>
          <div class="practical-list">
            ${group.items.map((item) => `<div class="practical-item">${getText(item)}</div>`).join("")}
          </div>
        </details>
      `
    )
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
          <div class="flight-brand">
            <div class="flight-brand-mark" aria-hidden="true">✈</div>
            <div>
              <div class="flight-brand-name">${flight.airline}</div>
              <div class="flight-brand-code">${flight.airlineCode}</div>
            </div>
          </div>
          <div class="flight-topline">
            <span class="day-chip">${getText(flight.label)}</span>
            <span class="date-label">${flight.date}</span>
          </div>
          <div class="flight-route">${flight.route}</div>
          <div class="flight-time">${flight.time}</div>
          <div class="flight-meta">
            <div class="info-line"><span class="info-label">${t[state.lang].dateText}</span><span class="info-value">${flight.date}</span></div>
            <div class="info-line"><span class="info-label">${t[state.lang].flightNumberText}</span><span class="info-value">${flight.flightNo}</span></div>
            <div class="info-line"><span class="info-label">${t[state.lang].classText}</span><span class="info-value">${getText(flight.cabin)}</span></div>
          </div>
          <div class="flight-stop-grid">
            <article class="flight-stop-card">
              <div class="info-label">${t[state.lang].departureText}</div>
              <div class="flight-stop-list">
                <div class="flight-stop-row"><span>${t[state.lang].countryText}</span><strong>${getText(flight.departure.country)}</strong></div>
                <div class="flight-stop-row"><span>${t[state.lang].cityText}</span><strong>${getText(flight.departure.city)}</strong></div>
                <div class="flight-stop-row"><span>${t[state.lang].airportText}</span><strong>${getText(flight.departure.airport)}</strong></div>
                <div class="flight-stop-row"><span>${t[state.lang].terminalText}</span><strong>${getText(flight.departure.terminal)}</strong></div>
              </div>
            </article>
            <article class="flight-stop-card">
              <div class="info-label">${t[state.lang].arrivalText}</div>
              <div class="flight-stop-list">
                <div class="flight-stop-row"><span>${t[state.lang].countryText}</span><strong>${getText(flight.arrival.country)}</strong></div>
                <div class="flight-stop-row"><span>${t[state.lang].cityText}</span><strong>${getText(flight.arrival.city)}</strong></div>
                <div class="flight-stop-row"><span>${t[state.lang].airportText}</span><strong>${getText(flight.arrival.airport)}</strong></div>
                <div class="flight-stop-row"><span>${t[state.lang].terminalText}</span><strong>${getText(flight.arrival.terminal)}</strong></div>
              </div>
            </article>
          </div>
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
    .map((link) => `<div class="link-row"><span class="link-row-label">${getText(link.label)}</span><a class="link-button" href="${link.href}" target="_blank" rel="noreferrer" aria-label="${getText(link.label)}">${t[state.lang].openLink}</a></div>`)
    .join("");
}

function renderItinerary() {
  const itineraryList = document.getElementById("itineraryList");
  if (!itineraryList) return;
  itineraryList.innerHTML = data.itinerary
    .map(
      (item, index) => `
        <details class="itinerary-card" ${index === 0 ? "open" : ""}>
          <summary class="accordion-summary">
            <figure class="itinerary-cover">
              <img src="${item.image.src}" alt="${getText(item.image.alt)}" loading="lazy" />
              <figcaption>${getText(item.image.caption)}</figcaption>
            </figure>
            <div class="accordion-topline"><span class="day-chip">${getText(item.day)}</span><span class="date-label">${item.date}</span></div>
            <div class="itinerary-overline">
              <span class="itinerary-area-chip">${getText(item.area)}</span>
              <span class="itinerary-hotel-line">${getText(getGuide(item)?.theme || { "zh-Hant": "弘大飯店出發", en: "Start from Hongdae hotel", ko: "홍대 호텔 출발" })}</span>
            </div>
            <h3>${getText(item.plan)}</h3>
            <p class="itinerary-rhythm">${getText(getGuide(item)?.preview || item.rhythm)}</p>
          </summary>
          <div class="accordion-body">
            <div class="itinerary-day-header">
              <div class="itinerary-meta-card">
                <div class="itinerary-meta-label">${getText({ "zh-Hant": "當日主題", en: "Day theme", ko: "오늘의 테마" })}</div>
                <div class="itinerary-meta-value">${getText(getGuide(item)?.theme || item.area)}</div>
              </div>
              <div class="itinerary-meta-card">
                <div class="itinerary-meta-label">${getText({ "zh-Hant": "體力節奏", en: "Energy", ko: "체력 리듬" })}</div>
                <div class="itinerary-meta-value">${getText(getGuide(item)?.energy || { "zh-Hant": "普通", en: "Moderate", ko: "보통" })}</div>
              </div>
            </div>
            <div class="itinerary-glance-grid">
              <div class="itinerary-meta-card"><div class="itinerary-meta-label">${getText({ "zh-Hant": "出發時間", en: "Departure", ko: "출발 시간" })}</div><div class="itinerary-meta-value">${item.timeline[0]?.time || "-"}</div></div>
              <div class="itinerary-meta-card"><div class="itinerary-meta-label">${getText({ "zh-Hant": "主要區域", en: "Main area", ko: "주요 구역" })}</div><div class="itinerary-meta-value">${getText(item.area)}</div></div>
              <div class="itinerary-meta-card"><div class="itinerary-meta-label">${getText({ "zh-Hant": "今日餐桌", en: "Food focus", ko: "오늘의 식탁" })}</div><div class="itinerary-meta-value">${getText(getGuide(item)?.dining || { "zh-Hant": "", en: "", ko: "" })}</div></div>
              <div class="itinerary-meta-card"><div class="itinerary-meta-label">${getText({ "zh-Hant": "推薦採買", en: "Shopping focus", ko: "추천 쇼핑" })}</div><div class="itinerary-meta-value">${getText(getGuide(item)?.shopping || { "zh-Hant": "", en: "", ko: "" })}</div></div>
              <div class="itinerary-meta-card"><div class="itinerary-meta-label">${getText({ "zh-Hant": "穿搭提醒", en: "What to wear", ko: "옷차림" })}</div><div class="itinerary-meta-value">${getText(getGuide(item)?.shoes || { "zh-Hant": "", en: "", ko: "" })}</div></div>
              <div class="itinerary-meta-card"><div class="itinerary-meta-label">${getText({ "zh-Hant": "預約 / 排隊", en: "Booking / queue", ko: "예약 / 대기" })}</div><div class="itinerary-meta-value">${getText(getGuide(item)?.booking || { "zh-Hant": "", en: "", ko: "" })}</div></div>
            </div>
            <div class="itinerary-story-card">
              <div class="itinerary-meta-label">${getText({ "zh-Hant": "今日導語", en: "Day note", ko: "오늘의 안내" })}</div>
              <div class="itinerary-story-text">${getText(item.hotelFlow)}</div>
            </div>
            <div class="itinerary-flow-grid">
              ${(getGuide(item)?.flow || [])
                .map(
                  (block) => `
                    <article class="itinerary-flow-card">
                      <div class="itinerary-meta-label">${getText(block.label)}</div>
                      <div class="itinerary-curation-title">${getText(block.title)}</div>
                      <div class="itinerary-curation-note">${getText(block.desc)}</div>
                    </article>
                  `
                )
                .join("")}
            </div>
            <div class="itinerary-timeline">
              ${item.timeline
                .map(
                  (stop) => `
                    <article class="itinerary-stop">
                      <div class="itinerary-stop-time">${stop.time}</div>
                      <div class="itinerary-stop-body">
                        <div class="itinerary-stop-title">${getText(stop.title)}</div>
                        <div class="itinerary-stop-note">${getText(stop.desc)}</div>
                      </div>
                    </article>
                  `
                )
                .join("")}
            </div>
            <div class="itinerary-curation-grid">
              <article class="itinerary-curation-card">
                <div class="itinerary-meta-label">${getText({ "zh-Hant": "今日餐桌", en: "Today’s table", ko: "오늘의 식탁" })}</div>
                <div class="itinerary-curation-list">
                  ${item.foodPlan
                    .map(
                      (entry) => `
                        <div class="itinerary-curation-item">
                          <div class="itinerary-curation-top"><span class="progress-pill">${getText(entry.label)}</span><span class="itinerary-curation-title">${getText(entry.title)}</span></div>
                          <div class="itinerary-curation-note">${getText(entry.note)}</div>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </article>
              <article class="itinerary-curation-card">
                <div class="itinerary-meta-label">${getText({ "zh-Hant": "沿途亮點", en: "Along the route", ko: "동선 포인트" })}</div>
                <div class="itinerary-curation-list">
                  ${item.areaPicks
                    .map(
                      (entry) => `
                        <div class="itinerary-curation-item">
                          <div class="itinerary-curation-top"><span class="progress-pill">${getText(entry.type)}</span><span class="itinerary-curation-title">${getText(entry.title)}</span></div>
                          <div class="itinerary-curation-note">${getText(entry.note)}</div>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </article>
              <article class="itinerary-curation-card">
                <div class="itinerary-meta-label">${getText({ "zh-Hant": "推薦採買", en: "Shopping notes", ko: "추천 쇼핑" })}</div>
                <div class="itinerary-curation-list">
                  <div class="itinerary-curation-item">
                    <div class="itinerary-curation-top"><span class="progress-pill">${getText({ "zh-Hant": "購物節奏", en: "Shopping rhythm", ko: "쇼핑 리듬" })}</span><span class="itinerary-curation-title">${getText(getGuide(item)?.shopping || { "zh-Hant": "", en: "", ko: "" })}</span></div>
                    <div class="itinerary-curation-note">${getText(getGuide(item)?.photo || { "zh-Hant": "", en: "", ko: "" })}</div>
                  </div>
                </div>
              </article>
            </div>
            <div class="itinerary-meta-grid">
              <div class="itinerary-meta-card"><div class="itinerary-meta-label">${t[state.lang].locationLabel}</div><div class="itinerary-meta-value">${getText(item.location)}</div></div>
              <div class="itinerary-meta-card"><div class="itinerary-meta-label">${t[state.lang].estimatedCostLabel}</div><div class="itinerary-meta-value">${formatCurrency(item.costKrw)}</div><div class="budget-original">${formatCurrency(item.costKrw, "KRW")}</div></div>
              <div class="itinerary-meta-card"><div class="itinerary-meta-label">${t[state.lang].transportLabel}</div><div class="itinerary-meta-value">${getText(item.transport)}</div></div>
              <div class="itinerary-meta-card"><div class="itinerary-meta-label">${t[state.lang].reminderLabel}</div><div class="itinerary-meta-value">${getText(item.reminder)}</div></div>
            </div>
            <div class="itinerary-reminder-list">
              ${(getGuide(item)?.reminders || [])
                .map((note) => `<article class="bullet-card"><div class="bullet-title">${getText({ "zh-Hant": "貼心提醒", en: "Helpful note", ko: "작은 메모" })}</div><div class="bullet-desc">${getText(note)}</div></article>`)
                .join("")}
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
    <div class="route-actions"><a class="action-link" href="${hotel.href}" target="_blank" rel="noreferrer" aria-label="Open hotel booking page on Agoda">Agoda</a></div>
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
          <div class="route-actions"><a class="action-link" href="${item.href}" target="_blank" rel="noreferrer" aria-label="${t[state.lang].mapsLabel}">${t[state.lang].mapsLabel}</a></div>
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
  const hotelKrwTotal = COSTS.hotelTwdTotal * rates.TWD.krwPerUnit;
  const flightKrwTotal = COSTS.flightTwdPerPerson * COSTS.travelers * rates.TWD.krwPerUnit;
  const totalTripKrw = COSTS.hanbokTotalKrw + hotelKrwTotal + flightKrwTotal + COSTS.transportKrw + COSTS.foodKrw + COSTS.shoppingKrw;
  const perPersonKrw = totalTripKrw / COSTS.travelers;
  const paidSoFarKrw = COSTS.hanbokDepositCny * rates.CNY.krwPerUnit;
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
            ${group.links.map((link) => `<div class="link-row"><span class="link-row-label">${getText(link.label)}</span><a class="link-button" href="${link.href}" target="_blank" rel="noreferrer" aria-label="${getText(link.label)}">${t[state.lang].openLink}</a></div>`).join("")}
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
      bindPageNavigation();
      syncPageNavigation();
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
      bindPageNavigation();
      syncPageNavigation();
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

function updatePageUrl(page, { replace = false } = {}) {
  const nextPage = normalizePage(page) || "overview";
  const url = new URL(window.location.href);
  if (nextPage === "overview") {
    url.searchParams.delete("page");
  } else {
    url.searchParams.set("page", nextPage);
  }
  const method = replace ? "replaceState" : "pushState";
  window.history[method]({}, "", url);
}

function setPage(page, { scroll = true, updateUrl = true, replaceUrl = false } = {}) {
  const nextPage = normalizePage(page);
  if (!nextPage) return;
  if (state.page === nextPage) {
    if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  state.page = nextPage;
  localStorage.setItem(STORAGE_KEYS.page, nextPage);
  if (updateUrl) updatePageUrl(nextPage, { replace: replaceUrl });
  updateDocumentTitle();
  syncPageNavigation();
  if (scroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function bindPageNavigation() {
  document.querySelectorAll("[data-page-link]").forEach((link) => {
    if (link.dataset.pageBound === "true") return;
    link.dataset.pageBound = "true";
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
updatePageUrl(state.page, { replace: true });

window.addEventListener("popstate", () => {
  state.page = getRequestedPage();
  localStorage.setItem(STORAGE_KEYS.page, state.page);
  updateDocumentTitle();
  syncPageNavigation();
});
