const STORAGE_KEYS = {
  lang: "seoul-handbook-lang",
  currency: "seoul-handbook-currency",
  checklist: "seoul-handbook-checklist-v3",
  page: "seoul-handbook-page",
};

const PAGE_IDS = ["overview", "flights", "hotel", "hanbok", "route", "budget", "itinerary", "notes"];

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
    heroDestinations: "弘大 · 北村韓屋村 · 景福宮 · 安國 · 首爾",
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
    overviewTitle: "韓國旅行行程總覽",
    overviewLead: "整理這次旅程的日期與地點，讓行程節奏一目了然。",
    overviewSnapshotTitle: "旅程亮點",
    overviewRecommendTitle: "順路可排",
    overviewAlertsTitle: "當日主題",
    overviewNotesTitle: "行程節奏",
    overviewFlightTitle: "航班與支援",
    overviewItineraryTitle: "每日行程",
    itineraryKicker: "行程",
    itineraryLead: "每天先看主要安排、區域、交通和提醒。",
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
    hanbokLead: "拍攝那天先開這頁就好。",
    hanbokRulesTitle: "拍攝提醒",
    hanbokReferenceTitle: "參考照片",
    hanbokCaptionOne: "霧藍韓服參考",
    hanbokCaptionTwo: "景福宮白色韓服參考",
    hanbokCaptionThree: "宮殿石階參考",
    hanbokCaptionFour: "走廊肖像參考",
    instructionsCaption: "店家拍攝規則",
    routeKicker: "交通",
    routeTitle: "交通",
    routeLead: "怎麼去、搭什麼、幾點出門，這頁看完就夠。",
    routeStepsTitle: "路線步驟",
    routeTimelineTitle: "建議時間",
    routeOptionsTitle: "交通方式",
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
    notesLead: "一些零碎但會用到的，都放這裡。",
    checklistTitle: "清單",
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
    heroCity: "Seoul",
    heroAreaStay: "Hongdae",
    heroAreaShoot: "Bukchon / Anguk",
    heroAreaPalace: "Gyeongbokgung",
    heroDestinations: "Hongdae · Bukchon Hanok Village · Gyeongbokgung · Anguk · Seoul",
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
    overviewTitle: "Seoul Travel Overview",
    overviewLead: "A clear overview of the travel dates and places for this trip.",
    overviewSnapshotTitle: "Trip highlights",
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
    heroDestinations: "홍대 · 북촌한옥마을 · 경복궁 · 안국 · 서울",
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
    overviewTitle: "서울 여행 일정 개요",
    overviewLead: "이번 여행의 날짜와 지역을 한눈에 볼 수 있도록 정리했습니다.",
    overviewSnapshotTitle: "여행 하이라이트",
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
    { label: { "zh-Hant": "住宿", en: "Hotel", ko: "호텔" }, value: { "zh-Hant": "洛卡斯提奇創作者小鎮西橋店", en: "Local Stitch Creator Town Seogyo", ko: "로컬스티치 크리에이터 타운 서교" } },
    { label: { "zh-Hant": "旅行日期", en: "Travel dates", ko: "여행 날짜" }, value: { "zh-Hant": "2026 / 05 / 15 - 2026 / 05 / 20", en: "2026 / 05 / 15 - 2026 / 05 / 20", ko: "2026 / 05 / 15 - 2026 / 05 / 20" } },
    { label: { "zh-Hant": "旅行地點", en: "Travel areas", ko: "여행 지역" }, value: { "zh-Hant": "弘大 · 北村 · 景福宮 · 聖水", en: "Hongdae · Bukchon · Gyeongbokgung · Seongsu", ko: "홍대 · 북촌 · 경복궁 · 성수" } },
  ],
  keyInfo: [
    {
      label: { "zh-Hant": "旅遊日期", en: "Travel dates", ko: "여행 날짜" },
      value: { "zh-Hant": "2026 / 05 / 15 - 2026 / 05 / 20", en: "2026 / 05 / 15 - 2026 / 05 / 20", ko: "2026 / 05 / 15 - 2026 / 05 / 20" },
      note: { "zh-Hant": "五晚首爾行程", en: "Five nights in Seoul", ko: "서울 5박 일정" },
    },
    {
      label: { "zh-Hant": "旅行地點", en: "Travel areas", ko: "여행 지역" },
      value: { "zh-Hant": "弘大 · 北村 · 景福宮 · 聖水", en: "Hongdae · Bukchon · Gyeongbokgung · Seongsu", ko: "홍대 · 북촌 · 경복궁 · 성수" },
      note: { "zh-Hant": "以西村與江南動線延伸", en: "Extended with west-side and Gangnam routes", ko: "서촌과 강남 동선으로 이어짐" },
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
      { title: { "zh-Hant": "準時比什麼都重要", en: "Punctuality matters most", ko: "정시 도착이 가장 중요" }, desc: { "zh-Hant": "20 分鐘遲到會罰款，還可能縮短拍攝時間。", en: "A 20-minute delay triggers a penalty and may shorten the shoot.", ko: "20분 지각 시 벌금과 시간 단축이 있습니다." } },
      { title: { "zh-Hant": "12:45 - 13:00 出門差不多", en: "Leaving around 12:45 - 13:00 works well", ko: "12:45 - 13:00 출발이면 무난" }, desc: { "zh-Hant": "北村容易走錯，早一點到附近比較輕鬆。", en: "Bukchon is easy to get turned around in, so getting there a bit early helps.", ko: "북촌은 길이 헷갈리기 쉬워서 조금 일찍 도착하는 편이 편합니다." } },
    ],
  },
  routeSteps: [
    { label: { "zh-Hant": "第 1 步", en: "Step 1", ko: "1단계" }, title: { "zh-Hant": "飯店", en: "Hotel", ko: "호텔" }, desc: { "zh-Hant": "洛卡斯提奇創作者小鎮西橋店", en: "Local Stitch Creator Town Seogyo", ko: "로컬스티치 크리에이터 타운 서교" } },
    { label: { "zh-Hant": "第 2 步", en: "Step 2", ko: "2단계" }, title: { "zh-Hant": "車站", en: "Station", ko: "역" }, desc: { "zh-Hant": "弘大入口站", en: "Hongik Univ. Station", ko: "홍대입구역" } },
    { label: { "zh-Hant": "第 3 步", en: "Step 3", ko: "3단계" }, title: { "zh-Hant": "北村", en: "Bukchon", ko: "북촌" }, desc: { "zh-Hant": "安國站 2 號出口附近", en: "Near Anguk Station Exit 2", ko: "안국역 2번 출구 근처" } },
    { label: { "zh-Hant": "第 4 步", en: "Step 4", ko: "4단계" }, title: { "zh-Hant": "韓服店", en: "Hanbok shop", ko: "한복 매장" }, desc: { "zh-Hant": "옥한복", en: "Ok Hanbok", ko: "옥한복" } },
  ],
  routeTimeline: [
    { time: "13:00", title: { "zh-Hant": "從飯店出發", en: "Leave hotel", ko: "호텔 출발" }, desc: { "zh-Hant": "抓這個時間差不多。", en: "This timing works well.", ko: "이 시간쯤 출발하면 무난합니다." } },
    { time: "13:40", title: { "zh-Hant": "抵達附近", en: "Arrive nearby", ko: "근처 도착" }, desc: { "zh-Hant": "預留找路時間。", en: "Keep buffer for finding the place.", ko: "길 찾기 버퍼 확보." } },
    { time: "14:00", title: { "zh-Hant": "韓服預約", en: "Hanbok appointment", ko: "한복 예약" }, desc: { "zh-Hant": "準時到店。", en: "Be on time at the shop.", ko: "정시에 도착." } },
    { time: "After", title: { "zh-Hant": "晚餐 / 備份照片", en: "Dinner / back up photos", ko: "저녁 / 사진 백업" }, desc: { "zh-Hant": "拍完先吃飯，再備份手機照片。", en: "Dinner first, then back up phone photos.", ko: "식사 후 휴대폰 사진 백업." } },
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
      plan: { "zh-Hant": "抵達首爾、入住、弘大附近吃晚餐", en: "Arrive, check in, and have dinner around Hongdae", ko: "도착 후 체크인, 홍대 근처에서 저녁" },
      location: { "zh-Hant": "仁川機場 → 弘大", en: "Incheon → Hongdae", ko: "인천공항 → 홍대" },
      area: { "zh-Hant": "弘大", en: "Hongdae", ko: "홍대" },
      image: {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hongdae_Main_Road%2C_Seoul.jpg",
        alt: { "zh-Hant": "弘大主街街景", en: "Hongdae main road streetscape", ko: "홍대 메인 거리 풍경" },
        caption: { "zh-Hant": "弘大主街", en: "Hongdae Main Road", ko: "홍대 메인 거리" },
      },
      rhythm: { "zh-Hant": "長途移動日，重點放在順利入住與輕鬆進入首爾節奏。", en: "Arrival day is best kept easy, with check-in and a soft start to the trip.", ko: "이동이 많은 날이라 체크인과 가벼운 시작에 집중하는 흐름이 좋습니다." },
      hotelFlow: { "zh-Hant": "Local Stitch Creator Town Seogyo 出發與入住，晚上回到弘大休息。", en: "Arrive at Local Stitch Creator Town Seogyo and keep the evening around Hongdae.", ko: "Local Stitch Creator Town Seogyo 체크인 후 저녁도 홍대에서 마무리하는 흐름입니다." },
      costKrw: 50000,
      transport: { "zh-Hant": "AREX / 機場巴士 / 計程車，先到飯店放行李", en: "AREX / airport bus / taxi, then drop bags at the hotel", ko: "AREX / 공항버스 / 택시로 이동 후 호텔 체크인" },
      reminder: { "zh-Hant": "第一天不另外拉遠區域，直接把晚餐和便利店補貨留在弘大就好。", en: "Keep the first evening local and use Hongdae for dinner and quick essentials.", ko: "첫날은 멀리 이동하지 말고 홍대에서 저녁과 간단한 장보기를 해결하는 편이 좋습니다." },
      foodPlan: [
        { label: { "zh-Hant": "晚餐", en: "Dinner", ko: "저녁" }, title: { "zh-Hant": "弘大 / 延南洞一帶", en: "Hongdae / Yeonnam-dong", ko: "홍대 / 연남동" }, note: { "zh-Hant": "第一晚以飯店附近好找、好進的餐廳為主。", en: "Keep the first dinner close to the hotel and easy to access.", ko: "첫날 저녁은 숙소 근처에서 편하게 들어갈 수 있는 곳 위주가 좋습니다." } },
        { label: { "zh-Hant": "咖啡", en: "Coffee", ko: "카페" }, title: { "zh-Hant": "延南洞巷內咖啡店", en: "Yeonnam-dong cafe lane", ko: "연남동 골목 카페" }, note: { "zh-Hant": "如果還有精神，可以挑一間坐一下就回飯店。", en: "If you still have energy, stop by one cafe before heading back.", ko: "여유가 있으면 카페 한 곳 정도 들렀다가 돌아오면 됩니다." } },
      ],
      areaPicks: [
        { type: { "zh-Hant": "好拍照", en: "Photo", ko: "포토" }, title: { "zh-Hant": "京義線林道公園", en: "Gyeongui Line Forest Park", ko: "경의선숲길" }, note: { "zh-Hant": "傍晚散步很順，第一天拍街景也不費力。", en: "Easy for an evening walk and light first-day street shots.", ko: "저녁 산책과 첫날 가벼운 거리 사진에 잘 맞습니다." } },
        { type: { "zh-Hant": "逛街", en: "Shopping", ko: "쇼핑" }, title: { "zh-Hant": "AK& 弘大", en: "AK& Hongdae", ko: "AK& 홍대" }, note: { "zh-Hant": "最後補貨或簡單逛街都方便。", en: "Good for quick browsing and picking up anything you still need.", ko: "가볍게 둘러보거나 필요한 것을 보충하기 좋습니다." } },
        { type: { "zh-Hant": "散步", en: "Walk", ko: "산책" }, title: { "zh-Hant": "延南洞主街", en: "Yeonnam-dong main lanes", ko: "연남동 메인 골목" }, note: { "zh-Hant": "第一晚最適合用來熟悉住宿周邊。", en: "A comfortable way to get familiar with the neighborhood on night one.", ko: "첫날 숙소 주변 감을 잡기에 가장 무난한 구역입니다." } },
      ],
      timeline: [
        { time: "19:05", title: { "zh-Hant": "抵達仁川機場", en: "Arrive at Incheon", ko: "인천 도착" }, desc: { "zh-Hant": "入境、提領行李，整理網路與交通卡。", en: "Clear immigration, collect luggage, and sort out data and transit.", ko: "입국과 수하물 수령 후 데이터와 교통카드를 정리합니다." } },
        { time: "20:15", title: { "zh-Hant": "前往弘大飯店", en: "Transfer to Hongdae hotel", ko: "홍대 숙소로 이동" }, desc: { "zh-Hant": "以最順的方式直接到飯店，先完成入住。", en: "Head straight to the hotel by the easiest route and check in first.", ko: "가장 편한 동선으로 바로 호텔로 이동해 먼저 체크인합니다." } },
        { time: "21:15", title: { "zh-Hant": "弘大晚餐散步", en: "Dinner and a short Hongdae walk", ko: "홍대 저녁과 가벼운 산책" }, desc: { "zh-Hant": "飯後在延南洞或弘大主街簡單走走，熟悉周邊。", en: "After dinner, take an easy walk around Yeonnam-dong or the main Hongdae streets.", ko: "식사 후 연남동이나 홍대 메인 거리 쪽을 가볍게 둘러봅니다." } },
        { time: "22:30", title: { "zh-Hant": "回飯店休息", en: "Return to hotel", ko: "호텔 복귀" }, desc: { "zh-Hant": "早點回房休息，讓隔天可以完整開始行程。", en: "Turn in early so the next day starts cleanly.", ko: "다음 날 일정을 위해 일찍 숙소로 돌아옵니다." } },
      ],
    },
    {
      day: { "zh-Hant": "第 2 天", en: "Day 2", ko: "2일차" },
      date: "2026-05-16",
      plan: { "zh-Hant": "漢南洞 + Leeum + 咖啡散步", en: "Hannam-dong + Leeum + cafes", ko: "한남동 + 리움 + 카페" },
      location: { "zh-Hant": "漢江鎮 / 漢南洞", en: "Hangangjin / Hannam-dong", ko: "한강진 / 한남동" },
      area: { "zh-Hant": "漢南洞", en: "Hannam-dong", ko: "한남동" },
      image: {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hannam-dong%2C_where_art_and_culture_meet.jpg",
        alt: { "zh-Hant": "漢南洞街景", en: "Hannam-dong streetscape", ko: "한남동 거리 풍경" },
        caption: { "zh-Hant": "漢南洞街區", en: "Hannam-dong", ko: "한남동 거리" },
      },
      rhythm: { "zh-Hant": "這天適合排成一條線：博物館、街區散步、咖啡店，整體不用跨區。", en: "This day works best as one continuous line: museum, neighborhood walk, then cafes without hopping districts.", ko: "이날은 미술관, 거리 산책, 카페를 한 줄로 잇는 구성이 잘 맞고 굳이 다른 지역으로 넘어갈 필요가 없습니다." },
      hotelFlow: { "zh-Hant": "早上從弘大出發到漢江鎮，晚上回弘大休息。", en: "Leave Hongdae in the morning for Hangangjin and return to Hongdae at night.", ko: "아침에 홍대에서 출발해 한강진으로 갔다가 저녁에는 다시 홍대로 돌아오는 흐름입니다." },
      costKrw: 120000,
      transport: { "zh-Hant": "地鐵到漢江鎮站，這區慢慢走最適合", en: "Take the subway to Hangangjin Station and walk the area slowly", ko: "한강진역으로 가서 천천히 걷는 일정이 잘 맞습니다." },
      reminder: { "zh-Hant": "Leeum 放前段最順，後面就一路接漢南洞主街與咖啡店。", en: "Starting with Leeum makes the rest of Hannam flow naturally.", ko: "리움을 앞에 두면 이후 한남동 메인 거리와 카페 쪽으로 자연스럽게 이어집니다." },
      foodPlan: [
        { label: { "zh-Hant": "早午餐", en: "Brunch", ko: "브런치" }, title: { "zh-Hant": "漢江鎮站周邊", en: "Around Hangangjin Station", ko: "한강진역 근처" }, note: { "zh-Hant": "先吃完再進 Leeum，節奏最順。", en: "Have brunch before Leeum for the cleanest start.", ko: "브런치를 먼저 먹고 리움으로 들어가는 흐름이 가장 편합니다." } },
        { label: { "zh-Hant": "咖啡", en: "Coffee", ko: "카페" }, title: { "zh-Hant": "Blue Square Book Park 一帶", en: "Blue Square / Book Park area", ko: "블루스퀘어 / 북파크" }, note: { "zh-Hant": "看展後接書店或咖啡，氣氛很適合這一天。", en: "A bookstore or coffee stop after the museum fits the mood of this day well.", ko: "미술관 이후 서점이나 카페를 붙이면 하루 분위기가 자연스럽습니다." } },
        { label: { "zh-Hant": "晚餐", en: "Dinner", ko: "저녁" }, title: { "zh-Hant": "弘大回程晚餐", en: "Dinner back in Hongdae", ko: "홍대 복귀 저녁" }, note: { "zh-Hant": "晚上回弘大吃飯，比留在漢南洞更輕鬆。", en: "Dinner back in Hongdae keeps the evening easier than staying out in Hannam.", ko: "저녁은 한남동보다 홍대로 돌아와 먹는 편이 더 편합니다." } },
      ],
      areaPicks: [
        { type: { "zh-Hant": "好拍照", en: "Photo", ko: "포토" }, title: { "zh-Hant": "Leeum Museum 外觀與入口", en: "Leeum Museum exterior", ko: "리움미술관 외관" }, note: { "zh-Hant": "建築線條很乾淨，拍照也比較有質感。", en: "The architecture gives you a refined photo backdrop.", ko: "건축선이 깔끔해서 사진 톤도 좋게 나옵니다." } },
        { type: { "zh-Hant": "咖啡 / 書店", en: "Coffee / books", ko: "카페 / 서점" }, title: { "zh-Hant": "Blue Square Book Park", en: "Blue Square Book Park", ko: "블루스퀘어 북파크" }, note: { "zh-Hant": "如果想要安靜一點的停留點，這裡很適合。", en: "A good stop if you want something slower and quieter.", ko: "조금 더 조용한 머무름이 필요하면 이쪽이 잘 맞습니다." } },
        { type: { "zh-Hant": "逛街", en: "Shopping", ko: "쇼핑" }, title: { "zh-Hant": "漢南洞主街", en: "Hannam-dong main street", ko: "한남동 메인 거리" }, note: { "zh-Hant": "選物店與街景集中，整體散步感很好。", en: "The boutiques and street atmosphere hold together nicely here.", ko: "편집숍과 거리 분위기가 한데 모여 있어 걷기 좋습니다." } },
      ],
      timeline: [
        { time: "09:30", title: { "zh-Hant": "從飯店出發", en: "Leave the hotel", ko: "호텔 출발" }, desc: { "zh-Hant": "弘大出發，往漢江鎮站移動。", en: "Leave Hongdae and head toward Hangangjin Station.", ko: "홍대에서 출발해 한강진역으로 이동합니다." } },
        { time: "10:30", title: { "zh-Hant": "Leeum Museum", en: "Leeum Museum", ko: "리움미술관" }, desc: { "zh-Hant": "先看展覽空間，讓整天的節奏安靜開場。", en: "Start with the museum for a slower, more grounded opening to the day.", ko: "미술관부터 보고 하루의 리듬을 차분하게 시작합니다." } },
        { time: "13:00", title: { "zh-Hant": "漢南洞午餐", en: "Lunch in Hannam-dong", ko: "한남동 점심" }, desc: { "zh-Hant": "午餐後直接接主街散步，不用再折返。", en: "Have lunch nearby and continue walking the neighborhood without backtracking.", ko: "근처에서 점심을 먹고 그대로 메인 거리 산책으로 이어가면 됩니다." } },
        { time: "15:00", title: { "zh-Hant": "選物店與咖啡店", en: "Shops and cafes", ko: "편집숍과 카페" }, desc: { "zh-Hant": "下午留給漢南洞街景、選物店與一間好坐的咖啡店。", en: "Spend the afternoon on Hannam’s street atmosphere, shops, and one comfortable cafe.", ko: "오후는 한남동 거리 분위기와 편집숍, 카페 한 곳에 여유를 두는 구성이 좋습니다." } },
        { time: "18:30", title: { "zh-Hant": "回弘大", en: "Return to Hongdae", ko: "홍대로 복귀" }, desc: { "zh-Hant": "傍晚回飯店附近吃晚餐，節奏比較輕鬆。", en: "Head back toward Hongdae for dinner and an easy evening.", ko: "저녁에는 홍대로 돌아와 편하게 마무리합니다." } },
      ],
    },
    {
      day: { "zh-Hant": "第 3 天", en: "Day 3", ko: "3일차" },
      date: "2026-05-17",
      plan: { "zh-Hant": "狎鷗亭 + 江南 + COEX", en: "Apgujeong + Gangnam + COEX", ko: "압구정 + 강남 + 코엑스" },
      location: { "zh-Hant": "狎鷗亭羅德奧 / 江南", en: "Apgujeong Rodeo / Gangnam", ko: "압구정로데오 / 강남" },
      area: { "zh-Hant": "狎鷗亭 · 江南", en: "Apgujeong · Gangnam", ko: "압구정 · 강남" },
      image: {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Starfield_Library_COEX_20240218.jpg",
        alt: { "zh-Hant": "COEX 星光圖書館", en: "Starfield Library at COEX", ko: "코엑스 별마당도서관" },
        caption: { "zh-Hant": "COEX 星光圖書館", en: "Starfield Library", ko: "별마당도서관" },
      },
      rhythm: { "zh-Hant": "這天適合把狎鷗亭與江南排成同一條軸線，下午再收進 COEX。", en: "This day is strongest when Apgujeong and Gangnam are treated as one line, then closed out at COEX.", ko: "압구정과 강남을 한 축으로 묶고 마지막에 코엑스로 마무리하는 흐름이 가장 자연스럽습니다." },
      hotelFlow: { "zh-Hant": "從弘大出發進江南區，晚上再回弘大。", en: "Start from Hongdae into southern Seoul, then return to Hongdae at night.", ko: "홍대에서 강남권으로 들어갔다가 저녁에는 다시 홍대로 돌아오는 구성입니다." },
      costKrw: 150000,
      transport: { "zh-Hant": "上午先逛狎鷗亭，下午再接 COEX", en: "Start with Apgujeong in the morning, then move to COEX", ko: "오전은 압구정, 오후는 코엑스로 이어가면 됩니다." },
      reminder: { "zh-Hant": "狎鷗亭與 COEX 都在同一大方向，避免中間再插別的北邊區域。", en: "Apgujeong and COEX already share the same overall direction, so avoid detouring north in the middle.", ko: "압구정과 코엑스는 같은 방향축이라 중간에 북쪽 지역을 끼우지 않는 편이 좋습니다." },
      foodPlan: [
        { label: { "zh-Hant": "早午餐", en: "Brunch", ko: "브런치" }, title: { "zh-Hant": "狎鷗亭羅德奧站周邊", en: "Around Apgujeong Rodeo Station", ko: "압구정로데오역 주변" }, note: { "zh-Hant": "早午餐放這區很自然，之後直接接逛街。", en: "Brunch works naturally here before moving straight into shopping.", ko: "브런치를 이 구역에 두면 이후 쇼핑 동선으로 바로 이어가기 좋습니다." } },
        { label: { "zh-Hant": "咖啡", en: "Coffee", ko: "카페" }, title: { "zh-Hant": "VIEW376", en: "VIEW376", ko: "VIEW376" }, note: { "zh-Hant": "適合下午找一個有景的停留點。", en: "A good afternoon stop if you want a cafe with a more open view.", ko: "오후에 전망이 있는 카페 한 곳을 넣고 싶을 때 잘 맞습니다." } },
        { label: { "zh-Hant": "晚餐", en: "Dinner", ko: "저녁" }, title: { "zh-Hant": "COEX / 三成洞一帶", en: "COEX / Samseong-dong", ko: "코엑스 / 삼성동" }, note: { "zh-Hant": "收在 COEX 一帶吃晚餐，之後直接回弘大。", en: "Dinner near COEX makes for a clean finish before heading back.", ko: "코엑스 근처에서 저녁을 먹고 바로 홍대로 돌아오면 됩니다." } },
      ],
      areaPicks: [
        { type: { "zh-Hant": "逛街", en: "Shopping", ko: "쇼핑" }, title: { "zh-Hant": "狎鷗亭羅德奧街", en: "Apgujeong Rodeo Street", ko: "압구정로데오 거리" }, note: { "zh-Hant": "這區最適合做今天的前半段主軸。", en: "This is the strongest first-half anchor for the day.", ko: "오늘 전반부의 중심축으로 가장 잘 맞는 구역입니다." } },
        { type: { "zh-Hant": "好拍照", en: "Photo", ko: "포토" }, title: { "zh-Hant": "Starfield Library", en: "Starfield Library", ko: "별마당도서관" }, note: { "zh-Hant": "進 COEX 後最有代表性的畫面點。", en: "One of the most iconic visual stops once you reach COEX.", ko: "코엑스 안에서 가장 상징적인 화면 포인트입니다." } },
        { type: { "zh-Hant": "咖啡", en: "Coffee", ko: "카페" }, title: { "zh-Hant": "VIEW376", en: "VIEW376", ko: "VIEW376" }, note: { "zh-Hant": "如果下午想坐一下，這裡比商場裡更有切換感。", en: "If you want a break in the afternoon, this feels more distinct than staying inside the mall.", ko: "오후에 잠깐 쉬고 싶다면 몰 안보다 분위기 전환이 잘 됩니다." } },
      ],
      timeline: [
        { time: "10:00", title: { "zh-Hant": "從飯店出發", en: "Leave the hotel", ko: "호텔 출발" }, desc: { "zh-Hant": "弘大出發，直接進狎鷗亭羅德奧一帶。", en: "Leave Hongdae and go straight to the Apgujeong Rodeo area.", ko: "홍대에서 출발해 압구정로데오 일대로 바로 들어갑니다." } },
        { time: "11:00", title: { "zh-Hant": "狎鷗亭主街散步", en: "Apgujeong street walk", ko: "압구정 메인 거리 산책" }, desc: { "zh-Hant": "先排逛街和街景，早一點開始整體比較舒服。", en: "Start with the main streets and shops while the area still feels easier.", ko: "이 구역은 조금 일찍 시작하면 훨씬 여유롭게 보기 좋습니다." } },
        { time: "13:30", title: { "zh-Hant": "江南午餐", en: "Lunch in Gangnam", ko: "강남 점심" }, desc: { "zh-Hant": "午餐後直接往大路段與百貨 / 商場移動。", en: "After lunch, move further into the main Gangnam commercial area.", ko: "점심 후에는 강남 메인 상권 쪽으로 자연스럽게 넘어가면 됩니다." } },
        { time: "16:00", title: { "zh-Hant": "COEX 收尾", en: "COEX wrap-up", ko: "코엑스 마무리" }, desc: { "zh-Hant": "下午尾段放在 COEX，逛商場或書店都方便。", en: "Use COEX as the later stop for shopping, bookstore time, or just an indoor finish.", ko: "오후 후반은 코엑스에서 마무리하면 쇼핑이나 서점 동선이 편합니다." } },
        { time: "19:30", title: { "zh-Hant": "回弘大", en: "Return to Hongdae", ko: "홍대로 복귀" }, desc: { "zh-Hant": "晚上回到飯店附近，讓隔天不會太累。", en: "Head back to Hongdae for a softer finish to the day.", ko: "저녁에는 홍대로 돌아와 다음 날까지 무리 없게 마무리합니다." } },
      ],
    },
    {
      day: { "zh-Hant": "第 4 天", en: "Day 4", ko: "4일차" },
      date: "2026-05-18",
      plan: { "zh-Hant": "要看的展 + 聖水洞", en: "Your exhibition + Seongsu", ko: "보고 싶은 전시 + 성수" },
      location: { "zh-Hant": "聖水洞 / 首爾林", en: "Seongsu / Seoul Forest", ko: "성수 / 서울숲" },
      area: { "zh-Hant": "聖水洞", en: "Seongsu", ko: "성수" },
      image: {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Seoul_Forest_Park.jpg",
        alt: { "zh-Hant": "首爾林景色", en: "Seoul Forest Park view", ko: "서울숲 풍경" },
        caption: { "zh-Hant": "首爾林", en: "Seoul Forest", ko: "서울숲" },
      },
      rhythm: { "zh-Hant": "這天以展覽和聖水為主，節奏最好維持在城東這一帶，不再拆成兩個遠區。", en: "Let this day stay centered on the exhibition and Seongsu, ideally without splitting it into two distant districts.", ko: "이날은 전시와 성수 중심으로 두고, 가능하면 멀리 떨어진 다른 지역은 섞지 않는 편이 좋습니다." },
      hotelFlow: { "zh-Hant": "早上從弘大出發，如果展覽不在聖水，就把展覽排在前半段，下午回到聖水與首爾林。", en: "Leave Hongdae in the morning, place the exhibition first if it is elsewhere, and return to Seongsu / Seoul Forest for the afternoon.", ko: "아침에 홍대에서 출발하고, 전시가 다른 곳이면 먼저 보고 오후에는 성수와 서울숲으로 돌아오는 흐름이 좋습니다." },
      costKrw: 130000,
      transport: { "zh-Hant": "展覽排在中午前後，前後接聖水會比較順", en: "Put the exhibition around midday, then build Seongsu around it", ko: "전시는 점심 전후에 넣고 앞뒤로 성수를 붙이면 자연스럽습니다." },
      reminder: { "zh-Hant": "如果展覽在江南，建議和前一天互換；如果在城東 / 鐘路，這天的安排就很順。", en: "If the exhibition is in Gangnam, consider swapping with the previous day; if it is east or central, this structure works well.", ko: "전시가 강남권이면 전날과 바꾸는 편이 낫고, 성동이나 종로권이면 지금 구조가 잘 맞습니다." },
      foodPlan: [
        { label: { "zh-Hant": "早午餐", en: "Brunch", ko: "브런치" }, title: { "zh-Hant": "展覽附近先吃", en: "Eat near the exhibition first", ko: "전시 근처에서 먼저 식사" }, note: { "zh-Hant": "先把展覽看完，下午再把時間交給聖水。", en: "Finish the exhibition first, then give the afternoon fully to Seongsu.", ko: "전시를 먼저 끝내고 오후는 성수에 집중하는 편이 좋습니다." } },
        { label: { "zh-Hant": "咖啡", en: "Coffee", ko: "카페" }, title: { "zh-Hant": "聖水咖啡街", en: "Seongsu cafe streets", ko: "성수 카페거리" }, note: { "zh-Hant": "這區最適合下午慢慢坐一間。", en: "This area is best for a slower cafe break in the afternoon.", ko: "오후에 천천히 카페 한 곳에 머물기 좋은 구역입니다." } },
        { label: { "zh-Hant": "晚餐", en: "Dinner", ko: "저녁" }, title: { "zh-Hant": "聖水 / 首爾林周邊", en: "Seongsu / Seoul Forest", ko: "성수 / 서울숲" }, note: { "zh-Hant": "晚上留在這區吃完再回弘大，節奏比較完整。", en: "Staying in the district for dinner gives the day a cleaner finish.", ko: "저녁도 이 구역에서 먹고 돌아오면 하루 흐름이 훨씬 자연스럽습니다." } },
      ],
      areaPicks: [
        { type: { "zh-Hant": "好拍照", en: "Photo", ko: "포토" }, title: { "zh-Hant": "首爾林", en: "Seoul Forest", ko: "서울숲" }, note: { "zh-Hant": "如果想讓聖水這天有一點留白，這裡最適合收尾。", en: "If you want a little breathing room in the day, this is the best soft finish.", ko: "성수 일정에 여백을 주고 싶다면 여기서 마무리하는 구성이 가장 좋습니다." } },
        { type: { "zh-Hant": "逛街", en: "Shopping", ko: "쇼핑" }, title: { "zh-Hant": "聖水主街 / 演武場街", en: "Seongsu main streets / Yeonmujang-gil", ko: "성수 메인 거리 / 연무장길" }, note: { "zh-Hant": "逛街、看快閃和街景都集中在這裡。", en: "Shops, pop-ups, and the main street mood are all concentrated here.", ko: "편집숍, 팝업, 거리 분위기가 이 축에 모여 있습니다." } },
        { type: { "zh-Hant": "咖啡", en: "Coffee", ko: "카페" }, title: { "zh-Hant": "聖水咖啡街", en: "Seongsu cafe streets", ko: "성수 카페거리" }, note: { "zh-Hant": "拍照感和停留感都很強，適合慢慢挑。", en: "A good area for both visuals and relaxed cafe time.", ko: "사진 느낌도 좋고 카페에 오래 머물기에도 잘 맞는 구역입니다." } },
      ],
      timeline: [
        { time: "10:00", title: { "zh-Hant": "從飯店出發", en: "Leave the hotel", ko: "호텔 출발" }, desc: { "zh-Hant": "先往展覽所在區域或直接往聖水移動。", en: "Head to the exhibition first, or go straight to Seongsu if it is nearby.", ko: "전시 장소로 먼저 가거나, 가까우면 바로 성수로 이동합니다." } },
        { time: "11:30", title: { "zh-Hant": "看展", en: "Exhibition time", ko: "전시 관람" }, desc: { "zh-Hant": "把最想看的展排在前半天，避免晚上還要跨區。", en: "Place the exhibition in the first half of the day so the evening stays simple.", ko: "가장 보고 싶은 전시는 앞쪽에 두는 편이 저녁 동선을 단순하게 만듭니다." } },
        { time: "14:00", title: { "zh-Hant": "聖水午餐與散步", en: "Lunch and walk in Seongsu", ko: "성수 점심과 산책" }, desc: { "zh-Hant": "午餐後開始走聖水主街、選物店與咖啡店。", en: "After lunch, move through Seongsu’s main streets, shops, and cafes.", ko: "점심 후에는 성수 메인 거리, 편집숍, 카페 쪽으로 이어가면 됩니다." } },
        { time: "16:30", title: { "zh-Hant": "首爾林收尾", en: "Finish at Seoul Forest", ko: "서울숲 쪽으로 마무리" }, desc: { "zh-Hant": "如果想讓節奏更鬆一點，下午後段接首爾林最剛好。", en: "Seoul Forest is a good final stop if you want the day to soften toward evening.", ko: "오후 후반을 조금 느슨하게 마무리하고 싶다면 서울숲이 잘 맞습니다." } },
        { time: "19:00", title: { "zh-Hant": "回弘大", en: "Return to Hongdae", ko: "홍대로 복귀" }, desc: { "zh-Hant": "晚餐可以回弘大吃，也可以在聖水吃完再回。", en: "Either have dinner in Seongsu first or head back to Hongdae for the evening.", ko: "저녁은 성수에서 먹고 돌아오거나, 홍대로 돌아와 마무리해도 괜찮습니다." } },
      ],
    },
    {
      day: { "zh-Hant": "第 5 天", en: "Day 5", ko: "5일차" },
      date: "2026-05-19",
      plan: { "zh-Hant": "北村 + 韓服拍攝 + 景福宮外圍拍照", en: "Bukchon + hanbok shoot + palace exterior photos", ko: "북촌 + 한복 촬영 + 경복궁 외부 촬영" },
      location: { "zh-Hant": "安國 / 北村 / 光化門", en: "Anguk / Bukchon / Gwanghwamun", ko: "안국 / 북촌 / 광화문" },
      area: { "zh-Hant": "北村 · 景福宮", en: "Bukchon · Gyeongbokgung", ko: "북촌 · 경복궁" },
      image: {
        src: "./assets/images/S__180125890_0.jpg",
        alt: { "zh-Hant": "景福宮韓服拍攝參考圖", en: "Hanbok reference photo at Gyeongbokgung", ko: "경복궁 한복 촬영 레퍼런스" },
        caption: { "zh-Hant": "景福宮韓服日", en: "Hanbok day at Gyeongbokgung", ko: "경복궁 한복 촬영일" },
      },
      rhythm: { "zh-Hant": "這天已經有明確主題，整天都留給韓服拍攝、韓屋街景與宮殿外圍。", en: "This day already has a clear center, so keep it fully dedicated to the hanbok shoot, the hanok streets, and the palace exterior.", ko: "이날은 한복 촬영이라는 확실한 중심이 있어서 하루 전체를 북촌, 한옥 거리, 궁 외부에 집중하는 편이 좋습니다." },
      hotelFlow: { "zh-Hant": "中午前後從弘大出發，拍攝結束後可在安國 / 光化門附近吃晚餐，再回弘大。", en: "Leave Hongdae around midday, then after the shoot either dine near Anguk / Gwanghwamun or return to Hongdae.", ko: "점심 무렵 홍대에서 출발하고, 촬영 후에는 안국이나 광화문 근처에서 저녁을 먹고 홍대로 돌아오는 흐름이 좋습니다." },
      costKrw: 980000,
      transport: { "zh-Hant": "13:00 前從飯店出發，先到北村附近", en: "Leave before 13:00 and get into Bukchon first", ko: "13:00 전에 출발해서 먼저 북촌 쪽에 도착하면 됩니다." },
      reminder: { "zh-Hant": "景福宮週二不進宮內部，外圍拍照和光化門周邊已經很夠拍。", en: "Since the palace interior is closed on Tuesday, the exterior and Gwanghwamun side are enough for this day.", ko: "화요일이라 궁 내부는 들어가지 않고, 외부와 광화문 주변만으로도 충분히 좋은 화면이 나옵니다." },
      foodPlan: [
        { label: { "zh-Hant": "出發前", en: "Before heading out", ko: "출발 전" }, title: { "zh-Hant": "弘大簡單吃 / 喝咖啡", en: "A light coffee or bite in Hongdae", ko: "홍대에서 가볍게 커피 / 식사" }, note: { "zh-Hant": "這天中午才出發，先在飯店附近整理好狀態再出門。", en: "Since you head out around midday, start with something light near the hotel.", ko: "정오 무렵 출발이라 숙소 근처에서 가볍게 정리하고 나가는 편이 좋습니다." } },
        { label: { "zh-Hant": "下午", en: "Afternoon", ko: "오후" }, title: { "zh-Hant": "安國 / 北村附近咖啡", en: "Coffee around Anguk / Bukchon", ko: "안국 / 북촌 카페" }, note: { "zh-Hant": "如果拍攝中段有空檔，可以在這區短暫停留。", en: "If there is a gap in the shoot, this is the best place for a short cafe stop.", ko: "촬영 중간에 여유가 생기면 이 근처에서 잠깐 쉬기 좋습니다." } },
        { label: { "zh-Hant": "晚餐", en: "Dinner", ko: "저녁" }, title: { "zh-Hant": "光化門 / 安國一帶", en: "Gwanghwamun / Anguk", ko: "광화문 / 안국" }, note: { "zh-Hant": "拍完後直接在附近吃飯，比再回弘大找餐廳更順。", en: "Dinner nearby after the shoot is smoother than rushing back first.", ko: "촬영 후 바로 근처에서 저녁을 먹는 편이 훨씬 자연스럽습니다." } },
      ],
      areaPicks: [
        { type: { "zh-Hant": "好拍照", en: "Photo", ko: "포토" }, title: { "zh-Hant": "北村韓屋村", en: "Bukchon Hanok Village", ko: "북촌한옥마을" }, note: { "zh-Hant": "韓服拍攝最核心的街景會在這裡。", en: "This is the visual heart of the hanbok shoot day.", ko: "한복 촬영일의 가장 핵심적인 거리 풍경은 이쪽에 있습니다." } },
        { type: { "zh-Hant": "好拍照", en: "Photo", ko: "포토" }, title: { "zh-Hant": "光化門廣場", en: "Gwanghwamun Square", ko: "광화문광장" }, note: { "zh-Hant": "如果想接比較開闊的畫面，這裡最好用。", en: "If you want a wider, more open visual finish, this is the place.", ko: "조금 더 넓고 열린 장면을 원하면 이쪽이 가장 좋습니다." } },
        { type: { "zh-Hant": "散步", en: "Walk", ko: "산책" }, title: { "zh-Hant": "安國 / 三清洞周邊", en: "Anguk / Samcheong-dong", ko: "안국 / 삼청동 주변" }, note: { "zh-Hant": "拍攝前後都適合慢慢走，和北村動線也接得上。", en: "This works well before or after the shoot and flows naturally with Bukchon.", ko: "촬영 전후로 천천히 걷기 좋고 북촌과도 자연스럽게 이어집니다." } },
      ],
      timeline: [
        { time: "12:45", title: { "zh-Hant": "從飯店出發", en: "Leave the hotel", ko: "호텔 출발" }, desc: { "zh-Hant": "弘大出發，先進安國與北村一帶。", en: "Leave Hongdae and head into Anguk and Bukchon first.", ko: "홍대에서 출발해 안국과 북촌 쪽으로 먼저 이동합니다." } },
        { time: "13:40", title: { "zh-Hant": "抵達安國 / 北村", en: "Arrive in Anguk / Bukchon", ko: "안국 / 북촌 도착" }, desc: { "zh-Hant": "先熟悉街區位置，再往韓服店移動。", en: "Use the buffer to settle into the area before moving toward the shop.", ko: "구역 감을 먼저 잡고 한복 매장으로 이동합니다." } },
        { time: "14:00", title: { "zh-Hant": "韓服拍攝", en: "Hanbok appointment", ko: "한복 촬영" }, desc: { "zh-Hant": "拍攝主體集中在北村、韓屋巷弄與景福宮外圍。", en: "The main visual route stays around Bukchon, the hanok alleys, and the palace exterior.", ko: "촬영 동선은 북촌, 한옥 골목, 경복궁 외부에 집중합니다." } },
        { time: "17:30", title: { "zh-Hant": "光化門 / 安國晚餐", en: "Dinner near Gwanghwamun or Anguk", ko: "광화문 / 안국 저녁" }, desc: { "zh-Hant": "拍完後可以就近吃飯，再回飯店整理照片。", en: "Have dinner nearby after the shoot, then head back and sort photos later.", ko: "촬영 후에는 근처에서 저녁을 먹고 돌아와 사진을 정리하면 됩니다." } },
        { time: "20:00", title: { "zh-Hant": "回弘大", en: "Return to Hongdae", ko: "홍대로 복귀" }, desc: { "zh-Hant": "晚上回到飯店，整理手機照片與隔天節奏。", en: "Return to the hotel and use the night to back up photos and reset for the next day.", ko: "숙소로 돌아와 사진을 백업하고 다음 날 흐름을 정리합니다." } },
      ],
    },
    {
      day: { "zh-Hant": "第 6 天", en: "Day 6", ko: "6일차" },
      date: "2026-05-20",
      plan: { "zh-Hant": "退房、弘大最後採買、前往機場", en: "Check out, do last shopping in Hongdae, then head to the airport", ko: "체크아웃 후 홍대에서 마지막 쇼핑, 공항 이동" },
      location: { "zh-Hant": "弘大 → 仁川機場", en: "Hongdae → Incheon", ko: "홍대 → 인천공항" },
      area: { "zh-Hant": "弘大", en: "Hongdae", ko: "홍대" },
      image: {
        src: "https://commons.wikimedia.org/wiki/Special:FilePath/Street_hongdae_Seoul.jpg",
        alt: { "zh-Hant": "弘大街頭夜景", en: "Hongdae street scene", ko: "홍대 거리 풍경" },
        caption: { "zh-Hant": "弘大收尾日", en: "Last day in Hongdae", ko: "홍대 마무리 일정" },
      },
      rhythm: { "zh-Hant": "最後一天不要再開新區域，把時間留給弘大與機場移動最穩。", en: "The last day is best kept local to Hongdae and the airport transfer rather than opening a new area.", ko: "마지막 날은 새로운 지역을 넣지 말고 홍대와 공항 이동에 집중하는 편이 가장 안정적입니다." },
      hotelFlow: { "zh-Hant": "從飯店退房後，行李可先寄放或直接整理好，傍晚再前往機場。", en: "After checking out, keep your luggage sorted and use the remaining hours around Hongdae before leaving for the airport.", ko: "체크아웃 후에는 짐을 정리해두고 남은 시간은 홍대 근처에서 보내다가 저녁에 공항으로 이동합니다." },
      costKrw: 70000,
      transport: { "zh-Hant": "退房後先待在弘大附近，傍晚再往機場去", en: "Stay around Hongdae after check-out, then head to the airport in the evening", ko: "체크아웃 후에는 홍대 근처에 있다가 저녁에 공항으로 가면 됩니다." },
      reminder: { "zh-Hant": "回程 20:05 起飛，最後半天以舒服收尾為主，不建議再跨區。", en: "With a 20:05 departure, the final half day is better as a soft finish without crossing the city again.", ko: "20:05 비행편이라 마지막 반나절은 무리하지 않고 편하게 마무리하는 편이 좋습니다." },
      foodPlan: [
        { label: { "zh-Hant": "早午餐", en: "Brunch", ko: "브런치" }, title: { "zh-Hant": "弘大 / 延南洞", en: "Hongdae / Yeonnam-dong", ko: "홍대 / 연남동" }, note: { "zh-Hant": "最後一餐留在熟悉的區域最舒服。", en: "A final meal in a familiar neighborhood makes the last day feel easier.", ko: "마지막 식사는 익숙한 구역에 두는 편이 훨씬 편합니다." } },
        { label: { "zh-Hant": "下午咖啡", en: "Afternoon coffee", ko: "오후 카페" }, title: { "zh-Hant": "弘大主街或京義線林道", en: "Main Hongdae streets or Gyeongui Line park", ko: "홍대 메인 거리 / 경의선숲길" }, note: { "zh-Hant": "取行李前留一個舒服的停留點就好。", en: "One last easy cafe stop is enough before picking up luggage.", ko: "짐 찾기 전에 카페 한 곳 정도로 마무리하면 충분합니다." } },
      ],
      areaPicks: [
        { type: { "zh-Hant": "逛街", en: "Shopping", ko: "쇼핑" }, title: { "zh-Hant": "AK& 弘大", en: "AK& Hongdae", ko: "AK& 홍대" }, note: { "zh-Hant": "最後採買很方便，也離飯店不遠。", en: "Convenient for last shopping and still close to the hotel.", ko: "마지막 쇼핑하기 좋고 숙소와도 가깝습니다." } },
        { type: { "zh-Hant": "散步", en: "Walk", ko: "산책" }, title: { "zh-Hant": "京義線林道公園", en: "Gyeongui Line Forest Park", ko: "경의선숲길" }, note: { "zh-Hant": "如果不想再逛商場，這裡最適合最後半天。", en: "If you do not want more indoor shopping, this is the best light option.", ko: "쇼핑보다 가벼운 산책이 좋다면 마지막 반나절은 여기 쪽이 잘 맞습니다." } },
        { type: { "zh-Hant": "咖啡", en: "Coffee", ko: "카페" }, title: { "zh-Hant": "延南洞咖啡街", en: "Yeonnam-dong cafe streets", ko: "연남동 카페거리" }, note: { "zh-Hant": "離飯店近，也適合在出發前留一點餘裕。", en: "Close to the hotel and easy to fit in before heading out.", ko: "숙소와 가깝고 출발 전 여유를 두기에도 좋습니다." } },
      ],
      timeline: [
        { time: "09:30", title: { "zh-Hant": "飯店退房", en: "Check out of the hotel", ko: "호텔 체크아웃" }, desc: { "zh-Hant": "先整理好行李，把行程留在弘大附近。", en: "Get luggage sorted first and keep the rest of the day close to the hotel area.", ko: "짐을 먼저 정리하고 남은 일정은 홍대 근처로 두는 편이 좋습니다." } },
        { time: "11:00", title: { "zh-Hant": "弘大最後散步", en: "Last walk around Hongdae", ko: "홍대 마지막 산책" }, desc: { "zh-Hant": "把想補買的東西和最後一頓早午餐留在這裡。", en: "Use this time for final shopping and one last brunch or cafe stop.", ko: "마지막 쇼핑과 브런치, 카페 한 곳 정도를 여기서 마무리하면 됩니다." } },
        { time: "16:30", title: { "zh-Hant": "回飯店附近取行李", en: "Pick up luggage", ko: "짐 찾기" }, desc: { "zh-Hant": "回到飯店附近整理出發節奏，再前往機場。", en: "Return near the hotel, collect luggage, and set up the airport transfer.", ko: "숙소 쪽으로 돌아와 짐을 찾고 공항 이동을 준비합니다." } },
        { time: "17:30", title: { "zh-Hant": "前往仁川機場", en: "Head to Incheon Airport", ko: "인천공항으로 이동" }, desc: { "zh-Hant": "傍晚出發最穩，留足機場辦理與晚間交通時間。", en: "Leaving in the early evening gives enough room for airport procedures and evening traffic.", ko: "초저녁에 출발하면 공항 수속과 저녁 이동 시간을 여유 있게 확보할 수 있습니다." } },
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
  const importantAlerts = document.getElementById("importantAlerts");
  const overviewNotes = document.getElementById("overviewNotes");
  const overviewRecommendations = document.getElementById("overviewRecommendations");
  if (!importantAlerts || !overviewNotes || !overviewRecommendations) return;
  overviewRecommendations.innerHTML = data.overviewRecommendations
    .map(
      (item) => `<article class="mini-stat-card"><div class="mini-stat-label">${getText(item.tag)}</div><div class="mini-stat-value">${getText(item.title)}</div><div class="budget-original">${getText(item.desc)}</div></article>`
    )
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
              <span class="itinerary-hotel-line">${getText({ "zh-Hant": "弘大飯店出發", en: "Start from Hongdae hotel", ko: "홍대 호텔 출발" })}</span>
            </div>
            <h3>${getText(item.plan)}</h3>
            <p class="itinerary-rhythm">${getText(item.rhythm)}</p>
          </summary>
          <div class="accordion-body">
            <div class="itinerary-story-card">
              <div class="itinerary-meta-label">${getText({ "zh-Hant": "動線整理", en: "Flow", ko: "동선 정리" })}</div>
              <div class="itinerary-story-text">${getText(item.hotelFlow)}</div>
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
                <div class="itinerary-meta-label">${getText({ "zh-Hant": "用餐建議", en: "Food suggestions", ko: "식사 제안" })}</div>
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
                <div class="itinerary-meta-label">${getText({ "zh-Hant": "區域推薦", en: "Area picks", ko: "지역 추천" })}</div>
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
            </div>
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
