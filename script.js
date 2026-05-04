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
    overviewLead: "首頁先看重點，其他細節再進各頁找。",
    overviewSnapshotTitle: "先看推薦與提醒",
    overviewRecommendTitle: "先看推薦",
    overviewAlertsTitle: "當天重點",
    overviewNotesTitle: "出發前確認",
    overviewFlightTitle: "航班與支援",
    overviewItineraryTitle: "每日行程",
    homeShortcutHanbok: "韓服",
    homeShortcutHanbokNote: "拍攝那天直接看這頁",
    homeShortcutMap: "交通",
    homeShortcutMapNote: "看幾點出門",
    homeShortcutBudget: "預算",
    homeShortcutBudgetNote: "快速看總額和每人",
    homeShortcutHotel: "飯店",
    homeShortcutHotelNote: "地址和住宿資訊",
    flightsKicker: "航班",
    flightsTitle: "航班",
    flightsLead: "航班、票價跟會員權益都放這裡，要核對時比較快。",
    flightsSummaryTitle: "航班資訊",
    flightsFareTitle: "票價與艙等",
    flightsLinkTitle: "官方連結",
    airlineBenefitsTitle: "華航黑卡重點",
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
    bottomHanbok: "韓服",
    bottomMap: "交通",
    bottomBudget: "預算",
    dateText: "日期",
    timeText: "時間",
    classText: "艙等",
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
    overviewLead: "Keep the home page simple. Open the section you need when you need it.",
    overviewSnapshotTitle: "Recommendations and reminders",
    overviewRecommendTitle: "Good places to start",
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
    flightsLead: "Flights, fare details, and member perks are all here for quick checking.",
    flightsSummaryTitle: "Flight details",
    flightsFareTitle: "Fare and cabin notes",
    flightsLinkTitle: "Official links",
    airlineBenefitsTitle: "China Airlines Paragon highlights",
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
    overviewLead: "홈에는 먼저 볼 것만 두고, 나머지는 각 페이지로 나눴습니다.",
    overviewSnapshotTitle: "추천과 리마인더",
    overviewRecommendTitle: "먼저 볼 추천",
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
    flightsLead: "항공편, 운임, 회원 혜택을 한 페이지에 모아뒀습니다.",
    flightsSummaryTitle: "항공편 정보",
    flightsFareTitle: "운임 및 좌석 메모",
    flightsLinkTitle: "공식 링크",
    airlineBenefitsTitle: "중화항공 블랙카드 핵심",
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
    bottomHanbok: "한복",
    bottomMap: "교통",
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
  overviewRecommendations: [
    {
      title: { "zh-Hant": "聖水洞", en: "Seongsu", ko: "성수" },
      desc: { "zh-Hant": "這區很適合排半天，逛店、喝咖啡、走街景都順。", en: "This area works well for half a day of shops, cafes, and easy walking.", ko: "이 구역은 반나절 쓰기 좋고, 편집숍과 카페, 거리 구경이 자연스럽게 이어집니다." },
      tag: { "zh-Hant": "先收進口袋", en: "Good first pick", ko: "우선 저장" },
    },
    {
      title: { "zh-Hant": "益善洞", en: "Ikseondong", ko: "익선동" },
      desc: { "zh-Hant": "韓屋街區加上餐廳和小店，適合排半天慢慢走。", en: "Hanok lanes with small shops and restaurants, good for a slow half day.", ko: "한옥 골목과 작은 가게, 식당이 모여 있어서 반나절 천천히 걷기 좋습니다." },
      tag: { "zh-Hant": "吃飯散步", en: "Food + walk", ko: "식사 + 산책" },
    },
    {
      title: { "zh-Hant": "首爾林", en: "Seoul Forest", ko: "서울숲" },
      desc: { "zh-Hant": "如果想排得輕鬆一點，這裡很好放。", en: "This is an easy stop if you want a lighter daytime plan.", ko: "조금 가볍게 가고 싶은 날에 넣기 좋습니다." },
      tag: { "zh-Hant": "輕鬆版行程", en: "Easy stop", ko: "가벼운 코스" },
    },
  ],
  importantAlerts: [
    { title: { "zh-Hant": "2026/05/19 是星期二", en: "May 19, 2026 is a Tuesday", ko: "2026/05/19 는 화요일" }, desc: { "zh-Hant": "景福宮週二休館，所以這天先排北村、韓服和景福宮外圍拍照。若想進宮裡，要改到別天。", en: "Gyeongbokgung is closed on Tuesdays, so this day is set for Bukchon, the hanbok shoot, and exterior palace photos. Move the palace interior visit to another day if you want to go inside.", ko: "경복궁은 화요일 휴궁이라서 이날은 북촌, 한복 촬영, 경복궁 외부 촬영으로 잡았습니다. 궁 안에 들어가고 싶으면 다른 날로 옮겨야 합니다." } },
    { title: { "zh-Hant": "韓服這天不要壓線", en: "Do not run late on the hanbok day", ko: "한복 날은 시간 여유 두기" }, desc: { "zh-Hant": "遲到 20 分鐘會罰款，而且北村真的很容易繞路。", en: "A 20-minute delay brings a penalty, and Bukchon is easy to get turned around in.", ko: "20분 지각 시 벌금이 있고 북촌은 길이 헷갈리기 쉽습니다." } },
    { title: { "zh-Hant": "原片與精修數量再問一次", en: "Ask again about photo counts", ko: "원본 / 보정 수량 한 번 더 확인" }, desc: { "zh-Hant": "200 張原片和 12 張精修，現場再確認一次比較安心。", en: "It is worth asking again on site about the 200 originals and 12 retouched photos.", ko: "원본 200장과 보정 12장은 현장에서 한 번 더 확인해두는 편이 마음이 편합니다." } },
    { title: { "zh-Hant": "刷卡前先問清楚", en: "Ask before paying by card", ko: "카드 결제 전 먼저 확인" }, desc: { "zh-Hant": "如果刷卡會加 10%，韓元現金就會比較好用。", en: "If card payment adds 10%, KRW cash will be easier.", ko: "카드 결제에 10%가 붙으면 KRW 현금이 더 편합니다." } },
  ],
  overviewNotes: [
    { title: { "zh-Hant": "住弘大還是方便", en: "Hongdae is still the easy base", ko: "홍대 베이스가 여전히 편함" }, desc: { "zh-Hant": "吃飯、回飯店和最後採買都比較順。", en: "Food, late returns, and final shopping are all easier from Hongdae.", ko: "식사, 귀가, 마지막 쇼핑까지 동선이 편합니다." } },
    { title: { "zh-Hant": "5/19 行程先不要排太滿", en: "Keep May 19 simple", ko: "5/19 일정은 단순하게" }, desc: { "zh-Hant": "北村、韓服和拍照都在這天，留點空比較好。", en: "Bukchon, the hanbok shoot, and photos are all on this day, so leave some space.", ko: "북촌, 한복 촬영, 사진 일정이 다 몰려 있어서 조금 비워두는 편이 좋습니다." } },
    { title: { "zh-Hant": "尾款先想好怎麼付", en: "Decide how to pay the balance", ko: "잔액 결제 방식 먼저 정하기" }, desc: { "zh-Hant": "金額不小，又可能遇到刷卡加價，卡跟現金都先準備。", en: "The balance is large and card surcharge is possible, so prepare both card and cash.", ko: "잔액이 크고 카드 추가 요금 가능성도 있어서 카드와 현금을 둘 다 준비해두는 편이 좋습니다." } },
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
      { title: { "zh-Hant": "出發前再看一次", en: "Check once more before departure", ko: "출발 전에 한 번 더 확인" }, desc: { "zh-Hant": "出發前再去華航會員頁或訂位紀錄看一下，會比較安心。", en: "Check your China Airlines account or booking record once more before departure.", ko: "출발 전에 중화항공 회원 페이지나 예약 기록을 한 번 더 보면 편합니다." } },
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
    { label: { "zh-Hant": "韓服總價", en: "Hanbok total", ko: "한복 총액" }, krw: 940000 },
    { label: { "zh-Hant": "現場補款", en: "Remaining balance", ko: "현장 결제 잔액" }, krw: 880000 },
    { label: { "zh-Hant": "飯店", en: "Hotel", ko: "호텔" }, krw: 19247 * rates.TWD.krwPerUnit },
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
    { day: { "zh-Hant": "第 1 天", en: "Day 1", ko: "1일차" }, date: "2026-05-15", plan: { "zh-Hant": "抵達首爾、入住、弘大附近吃晚餐", en: "Arrive, check in, and have dinner around Hongdae", ko: "도착 후 체크인, 홍대 근처에서 저녁" }, location: { "zh-Hant": "仁川機場 → 弘大", en: "Incheon → Hongdae", ko: "인천공항 → 홍대" }, costKrw: 50000, transport: { "zh-Hant": "AREX / 機場巴士 / 計程車，先到飯店放行李", en: "AREX / airport bus / taxi, then drop bags at the hotel", ko: "AREX / 공항버스 / 택시로 이동 후 호텔 체크인" }, reminder: { "zh-Hant": "第一天先輕鬆一點，吃飯和補貨就好。", en: "Keep the first day light. Dinner and small essentials are enough.", ko: "첫날은 가볍게 두고 저녁과 간단한 장보기 정도만 하면 됩니다." }, open: true },
    { day: { "zh-Hant": "第 2 天", en: "Day 2", ko: "2일차" }, date: "2026-05-16", plan: { "zh-Hant": "漢南洞 + Leeum + 咖啡散步", en: "Hannam-dong + Leeum + cafes", ko: "한남동 + 리움 + 카페" }, location: { "zh-Hant": "漢江鎮 / 漢南洞", en: "Hangangjin / Hannam-dong", ko: "한강진 / 한남동" }, costKrw: 120000, transport: { "zh-Hant": "地鐵到漢江鎮站，這區慢慢走最適合", en: "Take the subway to Hangangjin Station and walk the area slowly", ko: "한강진역으로 가서 천천히 걷는 일정이 잘 맞습니다." }, reminder: { "zh-Hant": "Leeum 週一休館，所以把這區放在週六。", en: "Leeum is closed on Mondays, so Saturday works better here.", ko: "리움이 월요일 휴관이라 이 구역은 토요일에 두는 쪽이 낫습니다." }, open: true },
    { day: { "zh-Hant": "第 3 天", en: "Day 3", ko: "3일차" }, date: "2026-05-17", plan: { "zh-Hant": "狎鷗亭 + 江南 + COEX", en: "Apgujeong + Gangnam + COEX", ko: "압구정 + 강남 + 코엑스" }, location: { "zh-Hant": "狎鷗亭羅德奧 / 江南", en: "Apgujeong Rodeo / Gangnam", ko: "압구정로데오 / 강남" }, costKrw: 150000, transport: { "zh-Hant": "上午先逛狎鷗亭，下午再接 COEX", en: "Start with Apgujeong in the morning, then move to COEX", ko: "오전은 압구정, 오후는 코엑스로 이어가면 됩니다." }, reminder: { "zh-Hant": "這區週末下午人會變多，早一點開始比較舒服。", en: "This area gets busier later in the day on weekends, so earlier feels better.", ko: "주말 오후가 되면 사람이 많아져서 조금 일찍 시작하는 편이 낫습니다." } },
    { day: { "zh-Hant": "第 4 天", en: "Day 4", ko: "4일차" }, date: "2026-05-18", plan: { "zh-Hant": "要看的展 + 聖水洞", en: "Your exhibition + Seongsu", ko: "보고 싶은 전시 + 성수" }, location: { "zh-Hant": "聖水洞 / 首爾林", en: "Seongsu / Seoul Forest", ko: "성수 / 서울숲" }, costKrw: 130000, transport: { "zh-Hant": "展覽排在中午前後，前後接聖水會比較順", en: "Put the exhibition around midday, then build Seongsu around it", ko: "전시는 점심 전후에 넣고 앞뒤로 성수를 붙이면 자연스럽습니다." }, reminder: { "zh-Hant": "把聖水放週一，人會少一點；如果展不在附近，再搭地鐵接回來。", en: "Seongsu is usually calmer on Monday. If the exhibition is elsewhere, come back by subway after it.", ko: "성수는 월요일이 조금 더 한산합니다. 전시가 다른 곳이면 보고 나서 다시 넘어오면 됩니다." } },
    { day: { "zh-Hant": "第 5 天", en: "Day 5", ko: "5일차" }, date: "2026-05-19", plan: { "zh-Hant": "北村 + 韓服拍攝 + 景福宮外圍拍照", en: "Bukchon + hanbok shoot + palace exterior photos", ko: "북촌 + 한복 촬영 + 경복궁 외부 촬영" }, location: { "zh-Hant": "安國 / 北村 / 光化門", en: "Anguk / Bukchon / Gwanghwamun", ko: "안국 / 북촌 / 광화문" }, costKrw: 980000, transport: { "zh-Hant": "13:00 前從飯店出發，先到北村附近", en: "Leave before 13:00 and get into Bukchon first", ko: "13:00 전에 출발해서 먼저 북촌 쪽에 도착하면 됩니다." }, reminder: { "zh-Hant": "這天是星期二，景福宮裡面休館，所以先抓外圍和光化門一帶。", en: "This is a Tuesday, so Gyeongbokgung is closed inside. Plan around the exterior and Gwanghwamun area.", ko: "이날은 화요일이라 경복궁 내부는 휴궁입니다. 외부와 광화문 쪽으로 보면 됩니다." }, open: true },
    { day: { "zh-Hant": "第 6 天", en: "Day 6", ko: "6일차" }, date: "2026-05-20", plan: { "zh-Hant": "退房、弘大最後採買、前往機場", en: "Check out, do last shopping in Hongdae, then head to the airport", ko: "체크아웃 후 홍대에서 마지막 쇼핑, 공항 이동" }, location: { "zh-Hant": "弘大 → 仁川機場", en: "Hongdae → Incheon", ko: "홍대 → 인천공항" }, costKrw: 70000, transport: { "zh-Hant": "退房後先待在弘大附近，傍晚再往機場去", en: "Stay around Hongdae after check-out, then head to the airport in the evening", ko: "체크아웃 후에는 홍대 근처에 있다가 저녁에 공항으로 가면 됩니다." }, reminder: { "zh-Hant": "回程 20:05 起飛，最後一天不要跑太遠。", en: "The flight leaves at 20:05, so keep the last day close.", ko: "귀국편이 20:05라 마지막 날은 너무 멀리 가지 않는 편이 좋습니다." } },
  ],
  checklistGroups: [
    { id: "before", title: { "zh-Hant": "出發前", en: "Before departure", ko: "출발 전" }, items: [
      { id: "passport", title: { "zh-Hant": "護照", en: "Passport", ko: "여권" }, desc: { "zh-Hant": "確認效期與放置位置。", en: "Check validity and where it is packed.", ko: "유효기간과 보관 위치 확인." } },
      { id: "esim", title: { "zh-Hant": "eSIM / 漫遊", en: "eSIM / roaming", ko: "eSIM / roaming" }, desc: { "zh-Hant": "抵達後能立刻上網。", en: "Make sure data works on arrival.", ko: "도착 직후 데이터 사용 가능." } },
      { id: "powerbank", title: { "zh-Hant": "行動電源", en: "Power bank", ko: "보조배터리" }, desc: { "zh-Hant": "導航和拍照很耗電。", en: "Navigation and photos drain battery.", ko: "지도와 사진으로 배터리 소모가 큽니다." } },
    ]},
    { id: "hanbok", title: { "zh-Hant": "韓服拍攝日", en: "Hanbok shooting day", ko: "한복 촬영일" }, items: [
      { id: "makeup", title: { "zh-Hant": "補妝 / 整髮用品", en: "Makeup touch-up items", ko: "수정 화장 / 헤어 용품" }, desc: { "zh-Hant": "不要臨時找東西。", en: "Keep them ready in advance.", ko: "당일 허둥대지 않게 미리 챙기기." } },
      { id: "original-count", title: { "zh-Hant": "確認 200 張原片", en: "Confirm 200 originals", ko: "원본 200장 확인" }, desc: { "zh-Hant": "拍攝前後都再確認。", en: "Reconfirm before and after the shoot.", ko: "촬영 전후 모두 다시 확인." } },
      { id: "retouch-count", title: { "zh-Hant": "確認 12 張精修", en: "Confirm 12 retouched", ko: "보정 12장 확인" }, desc: { "zh-Hant": "口頭再確認一次。", en: "Verbal reconfirmation helps.", ko: "구두로 한 번 더 확인." } },
      { id: "mv-addon", title: { "zh-Hant": "確認 MV 加購", en: "Confirm MV add-on", ko: "MV 추가 확인" }, desc: { "zh-Hant": "確認列入最終方案。", en: "Make sure it is in the final plan.", ko: "최종 플랜에 포함됐는지 확인." } },
    ]},
    { id: "payment", title: { "zh-Hant": "付款", en: "Payment", ko: "결제" }, items: [
      { id: "credit-card", title: { "zh-Hant": "信用卡", en: "Credit card", ko: "신용카드" }, desc: { "zh-Hant": "確認海外刷卡。", en: "Confirm overseas use.", ko: "해외 결제 가능 여부 확인." } },
      { id: "krw-cash", title: { "zh-Hant": "韓元現金", en: "KRW cash", ko: "KRW 현금" }, desc: { "zh-Hant": "刷卡加價時更穩。", en: "Safer if card surcharge happens.", ko: "카드 추가요금이 있을 때 더 안전합니다." } },
      { id: "deposit-record", title: { "zh-Hant": "300 CNY 訂金紀錄", en: "300 CNY deposit record", ko: "300 CNY 예약금 기록" }, desc: { "zh-Hant": "現場對帳用。", en: "Helpful for reconciling on site.", ko: "현장 확인용." } },
      { id: "surcharge", title: { "zh-Hant": "確認刷卡 10%", en: "Confirm 10% card surcharge", ko: "카드 10% 추가 확인" }, desc: { "zh-Hant": "付款前先問清楚。", en: "Ask before the final payment.", ko: "최종 결제 전에 먼저 확인." } },
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
