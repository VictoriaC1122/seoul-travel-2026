const STORAGE_KEYS = {
  lang: "seoul-handbook-lang",
  currency: "seoul-handbook-currency",
  checklist: "seoul-handbook-checklist-v2",
};

const state = {
  lang: localStorage.getItem(STORAGE_KEYS.lang) || "zh-Hant",
  currency: localStorage.getItem(STORAGE_KEYS.currency) || "TWD",
};

const rates = {
  KRW: { symbol: "₩", krwPerUnit: 1, decimals: 0 },
  TWD: { symbol: "NT$", krwPerUnit: 41.8, decimals: 0 },
  CNY: { symbol: "¥", krwPerUnit: 186.5, decimals: 0 },
};

const trip = {
  startDate: "2026-05-15",
  endDate: "2026-05-20",
  hanbokDate: "2026-05-19",
};

const t = {
  "zh-Hant": {
    languageSwitcher: "語言",
    currencySwitcher: "幣別",
    heroKicker: "Victoria Cheng · Aiden",
    heroTitle: "Seoul Travel Handbook 2026",
    heroSubtitle: "May 2026 · Seoul · Hanbok Shooting · Hotel · Budget",
    navOverview: "總覽",
    navTripOverview: "旅行總覽",
    navHotel: "住宿",
    navHanbok: "韓服",
    navRoute: "路線",
    navBudget: "預算",
    navItinerary: "行程",
    navChecklist: "清單",
    navLinks: "連結",
    overviewKicker: "Hero Dashboard",
    overviewTitle: "Hero dashboard",
    overviewLead: "先把最重要的資訊變成一眼就能掃到的 dashboard，像日期、住宿、韓服預約、訂金和剩餘款項都不需要再往下找。",
    overviewSnapshotTitle: "Trip snapshot",
    overviewTodayTitle: "Today focus",
    todayLabel: "今日重點",
    tripOverviewKicker: "Trip Overview",
    tripOverviewTitle: "Trip overview",
    tripOverviewLead: "這一區像旅行助理的總覽頁，負責提醒你哪些已經定案、哪些最需要提早準備。",
    tripOverviewLockedTitle: "Locked plans",
    tripOverviewAlertsTitle: "Important alerts",
    flightSnapshotTitle: "Flight snapshot",
    memberBenefitsTitle: "China Airlines Paragon",
    memberBenefitsLead: "只留這趟真的用得到的黑卡權益，讓它有用而不是只是在堆資訊。",
    hotelKicker: "Hotel",
    hotelTitle: "Hotel",
    hotelLead: "住在弘大是這趟最穩的安排，吃飯方便，晚上回去方便，拍攝日出發也清楚。",
    hotelGalleryTitle: "Hotel photos",
    hotelExteriorCaption: "飯店外觀",
    hotelRoomCaption: "高級雙床房",
    hanbokKicker: "Hanbok Shooting",
    hanbokTitle: "Hanbok shooting",
    hanbokLead: "韓服預約是這趟最重要的核心活動，所以付款、包含內容、警告事項和參考圖都放在一起。",
    hanbokRulesTitle: "Shooting notes",
    hanbokReferenceTitle: "Hanbok reference photos",
    hanbokCaptionOne: "霧藍韓服參考",
    hanbokCaptionTwo: "景福宮白色韓服參考",
    hanbokCaptionThree: "宮殿石階參考",
    hanbokCaptionFour: "走廊肖像參考",
    instructionsTitle: "Shooting instructions",
    instructionsCaption: "店家拍攝規則",
    routeKicker: "Transportation",
    routeTitle: "Transportation",
    routeLead: "交通資訊改成 route cards，比起純文字更像真正會拿來看路線的旅行頁。",
    routeTimelineTitle: "Hanbok day timeline",
    airportRouteTitle: "Airport and arrival",
    subwayMapTitle: "Subway map",
    subwayCaption: "首爾地鐵官方路線圖",
    budgetKicker: "Budget",
    budgetTitle: "Budget",
    budgetLead: "預算主顯示跟著你選的幣別切換，但韓國付款相關的韓元金額會一直保留在底下。",
    budgetSummaryTitle: "Budget summary",
    budgetTotalTitle: "Total estimated trip cost",
    budgetTableTitle: "Interactive budget",
    budgetTableLead: "桌機保持清楚表格，手機則會變成好讀的堆疊卡片。",
    budgetTableItem: "項目",
    budgetTableMain: "目前幣別",
    budgetTableNote: "備註",
    itineraryKicker: "Daily Itinerary",
    itineraryTitle: "Daily itinerary",
    itineraryLead: "每日行程改成手風琴卡片，手機收起來不會太長，打開後該看的欄位也很完整。",
    checklistKicker: "Checklist",
    checklistTitle: "Checklist",
    checklistLead: "Checklist 會記住你勾選過的狀態，所以它比較像 travel companion，而不是一次性的備忘錄。",
    linksKicker: "Useful Links",
    linksTitle: "Useful links",
    linksLead: "把訂房、會員、匯率、地圖與工作室頁面收在一起，臨時要開的時候不用翻聊天紀錄。",
    mapsLabel: "Google Maps",
    naverLabel: "Naver Maps",
    kakaoLabel: "Kakao Maps",
    openLink: "開啟",
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
    todayBeforeTrip: "出發前最值得先整理的是付款與拍攝日準備。",
    todayOnHanbok: "今天是韓服拍攝日，直接看路線、出發時間與付款提醒。",
    todayDuringTrip: "旅行中優先查看今天的 itinerary 和 route。",
    todayAfterTrip: "旅程結束後可以回頭整理預算與照片備份。",
  },
  en: {
    languageSwitcher: "Language",
    currencySwitcher: "Currency",
    heroKicker: "Victoria Cheng · Aiden",
    heroTitle: "Seoul Travel Handbook 2026",
    heroSubtitle: "May 2026 · Seoul · Hanbok Shooting · Hotel · Budget",
    navOverview: "Overview",
    navTripOverview: "Trip Overview",
    navHotel: "Hotel",
    navHanbok: "Hanbok",
    navRoute: "Route",
    navBudget: "Budget",
    navItinerary: "Itinerary",
    navChecklist: "Checklist",
    navLinks: "Links",
    overviewKicker: "Hero Dashboard",
    overviewTitle: "Hero dashboard",
    overviewLead: "The key trip details are turned into a quick-scan dashboard first, so dates, hotel, hanbok appointment, deposit, and balance are visible immediately.",
    overviewSnapshotTitle: "Trip snapshot",
    overviewTodayTitle: "Today focus",
    todayLabel: "Today",
    tripOverviewKicker: "Trip Overview",
    tripOverviewTitle: "Trip overview",
    tripOverviewLead: "This area works like a travel assistant summary: what is locked in, what needs prep, and what deserves attention first.",
    tripOverviewLockedTitle: "Locked plans",
    tripOverviewAlertsTitle: "Important alerts",
    flightSnapshotTitle: "Flight snapshot",
    memberBenefitsTitle: "China Airlines Paragon",
    memberBenefitsLead: "Only the black-card benefits that matter to this trip are kept here, so the section stays practical instead of crowded.",
    hotelKicker: "Hotel",
    hotelTitle: "Hotel",
    hotelLead: "Hongdae is the most stable base for this trip: easy food access, easier late returns, and a clean launch point for the shoot day.",
    hotelGalleryTitle: "Hotel photos",
    hotelExteriorCaption: "Hotel exterior",
    hotelRoomCaption: "Deluxe twin room",
    hanbokKicker: "Hanbok Shooting",
    hanbokTitle: "Hanbok shooting",
    hanbokLead: "The hanbok reservation is the core event of the trip, so payment, inclusions, warnings, and references all stay together.",
    hanbokRulesTitle: "Shooting notes",
    hanbokReferenceTitle: "Hanbok reference photos",
    hanbokCaptionOne: "Blue hanbok reference",
    hanbokCaptionTwo: "White hanbok at Gyeongbokgung",
    hanbokCaptionThree: "Palace stairs reference",
    hanbokCaptionFour: "Corridor portrait reference",
    instructionsTitle: "Shooting instructions",
    instructionsCaption: "Store shooting instructions",
    routeKicker: "Transportation",
    routeTitle: "Transportation",
    routeLead: "Transport is presented as route cards, so the section feels like an actual route planner rather than a note block.",
    routeTimelineTitle: "Hanbok day timeline",
    airportRouteTitle: "Airport and arrival",
    subwayMapTitle: "Subway map",
    subwayCaption: "Official Seoul Metro map",
    budgetKicker: "Budget",
    budgetTitle: "Budget",
    budgetLead: "The selected currency drives the main display, while Korean-payment KRW values stay visible underneath.",
    budgetSummaryTitle: "Budget summary",
    budgetTotalTitle: "Total estimated trip cost",
    budgetTableTitle: "Interactive budget",
    budgetTableLead: "Desktop keeps a clean table, while mobile turns it into stacked cards that stay easier to scan.",
    budgetTableItem: "Item",
    budgetTableMain: "Selected",
    budgetTableNote: "Note",
    itineraryKicker: "Daily Itinerary",
    itineraryTitle: "Daily itinerary",
    itineraryLead: "Daily plans use accordion cards, so iPhone reading stays compact while still keeping the most useful fields visible.",
    checklistKicker: "Checklist",
    checklistTitle: "Checklist",
    checklistLead: "Checklist progress is saved locally, so the page behaves more like a travel companion than a static memo.",
    linksKicker: "Useful Links",
    linksTitle: "Useful links",
    linksLead: "Booking pages, exchange rates, maps, and studio links are grouped together so you do not have to dig through messages later.",
    mapsLabel: "Google Maps",
    naverLabel: "Naver Maps",
    kakaoLabel: "Kakao Maps",
    openLink: "Open",
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
    todayBeforeTrip: "Before departure, payment and shoot-day prep deserve the most attention.",
    todayOnHanbok: "Today is the hanbok shooting day. Check route, departure timing, and payment reminders first.",
    todayDuringTrip: "During the trip, the daily itinerary and route section should be your first stop.",
    todayAfterTrip: "After the trip, the budget and photo-backup sections are the most useful to revisit.",
  },
  ko: {
    languageSwitcher: "언어",
    currencySwitcher: "통화",
    heroKicker: "Victoria Cheng · Aiden",
    heroTitle: "Seoul Travel Handbook 2026",
    heroSubtitle: "May 2026 · Seoul · Hanbok Shooting · Hotel · Budget",
    navOverview: "개요",
    navTripOverview: "여행 개요",
    navHotel: "호텔",
    navHanbok: "한복",
    navRoute: "루트",
    navBudget: "예산",
    navItinerary: "일정",
    navChecklist: "체크",
    navLinks: "링크",
    overviewKicker: "Hero Dashboard",
    overviewTitle: "Hero dashboard",
    overviewLead: "핵심 여행 정보를 먼저 대시보드처럼 보여 주어서 날짜, 호텔, 한복 예약, 예약금, 잔액을 바로 읽을 수 있습니다.",
    overviewSnapshotTitle: "Trip snapshot",
    overviewTodayTitle: "Today focus",
    todayLabel: "Today",
    tripOverviewKicker: "Trip Overview",
    tripOverviewTitle: "Trip overview",
    tripOverviewLead: "이 영역은 여행 비서처럼 작동합니다. 무엇이 확정되었는지, 무엇을 준비해야 하는지, 무엇이 가장 중요한지를 먼저 보여 줍니다.",
    tripOverviewLockedTitle: "Locked plans",
    tripOverviewAlertsTitle: "Important alerts",
    flightSnapshotTitle: "Flight snapshot",
    memberBenefitsTitle: "China Airlines Paragon",
    memberBenefitsLead: "이번 여행에 실제로 도움이 되는 블랙카드 혜택만 남겨 두어서 정보가 과하지 않게 유지됩니다.",
    hotelKicker: "Hotel",
    hotelTitle: "Hotel",
    hotelLead: "홍대는 이번 여행의 가장 안정적인 베이스입니다. 식사, 늦은 귀가, 촬영일 출발 모두 편합니다.",
    hotelGalleryTitle: "Hotel photos",
    hotelExteriorCaption: "호텔 외관",
    hotelRoomCaption: "디럭스 트윈룸",
    hanbokKicker: "Hanbok Shooting",
    hanbokTitle: "Hanbok shooting",
    hanbokLead: "한복 예약은 이번 여행의 핵심 일정이라 결제, 포함 내용, 주의사항, 레퍼런스를 함께 묶었습니다.",
    hanbokRulesTitle: "Shooting notes",
    hanbokReferenceTitle: "Hanbok reference photos",
    hanbokCaptionOne: "블루 한복 레퍼런스",
    hanbokCaptionTwo: "경복궁 화이트 한복 레퍼런스",
    hanbokCaptionThree: "궁전 계단 레퍼런스",
    hanbokCaptionFour: "복도 초상 레퍼런스",
    instructionsTitle: "Shooting instructions",
    instructionsCaption: "매장 촬영 안내",
    routeKicker: "Transportation",
    routeTitle: "Transportation",
    routeLead: "교통 정보는 route card 형태로 정리해서 메모 페이지보다 실제 이동 페이지처럼 느껴지도록 했습니다.",
    routeTimelineTitle: "Hanbok day timeline",
    airportRouteTitle: "Airport and arrival",
    subwayMapTitle: "Subway map",
    subwayCaption: "서울 메트로 공식 노선도",
    budgetKicker: "Budget",
    budgetTitle: "Budget",
    budgetLead: "선택한 통화가 메인 표시가 되지만, 한국 결제 기준인 KRW 값은 항상 아래에 유지됩니다.",
    budgetSummaryTitle: "Budget summary",
    budgetTotalTitle: "Total estimated trip cost",
    budgetTableTitle: "Interactive budget",
    budgetTableLead: "데스크톱은 표 형태로 유지하고, 모바일에서는 더 읽기 쉬운 스택 카드처럼 동작합니다.",
    budgetTableItem: "항목",
    budgetTableMain: "선택 통화",
    budgetTableNote: "메모",
    itineraryKicker: "Daily Itinerary",
    itineraryTitle: "Daily itinerary",
    itineraryLead: "일정 카드는 아코디언으로 만들어서 모바일에서는 짧게 접어 두고 필요할 때만 열 수 있습니다.",
    checklistKicker: "Checklist",
    checklistTitle: "Checklist",
    checklistLead: "체크 상태가 로컬에 저장되어서 이 페이지가 단순한 메모보다 여행 동반 앱처럼 느껴집니다.",
    linksKicker: "Useful Links",
    linksTitle: "Useful links",
    linksLead: "예약 페이지, 환율, 지도, 스튜디오 링크를 함께 모아서 나중에 다시 찾기 쉽게 했습니다.",
    mapsLabel: "Google Maps",
    naverLabel: "Naver Maps",
    kakaoLabel: "Kakao Maps",
    openLink: "열기",
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
    todayBeforeTrip: "출발 전에는 결제와 촬영일 준비를 먼저 정리하는 것이 가장 중요합니다.",
    todayOnHanbok: "오늘은 한복 촬영일입니다. 루트, 출발 시간, 결제 메모를 먼저 확인하세요.",
    todayDuringTrip: "여행 중에는 오늘 일정과 루트 섹션이 가장 먼저 볼 만합니다.",
    todayAfterTrip: "여행 후에는 예산과 사진 백업 섹션을 다시 보는 편이 가장 유용합니다.",
  },
};

const data = {
  heroTags: {
    "zh-Hant": ["Victoria + Aiden", "May 2026", "Hongdae stay", "Hanbok shooting", "Budget ready"],
    en: ["Victoria + Aiden", "May 2026", "Hongdae stay", "Hanbok shooting", "Budget ready"],
    ko: ["Victoria + Aiden", "May 2026", "Hongdae stay", "Hanbok shooting", "Budget ready"],
  },
  heroSummary: [
    { icon: "DT", label: { "zh-Hant": "Travel date", en: "Travel date", ko: "Travel date" }, value: { "zh-Hant": "2026/05/15 - 2026/05/20", en: "2026/05/15 - 2026/05/20", ko: "2026/05/15 - 2026/05/20" } },
    { icon: "HT", label: { "zh-Hant": "Hotel", en: "Hotel", ko: "Hotel" }, value: { "zh-Hant": "Local Stitch Creator Town Seogyo", en: "Local Stitch Creator Town Seogyo", ko: "Local Stitch Creator Town Seogyo" } },
    { icon: "HB", label: { "zh-Hant": "Hanbok appointment", en: "Hanbok appointment", ko: "Hanbok appointment" }, value: { "zh-Hant": "2026/05/19 Tue 14:00", en: "2026/05/19 Tue 14:00", ko: "2026/05/19 Tue 14:00" } },
    { icon: "TT", label: { "zh-Hant": "Total Hanbok cost", en: "Total Hanbok cost", ko: "Total Hanbok cost" }, value: { "zh-Hant": "940,000 KRW", en: "940,000 KRW", ko: "940,000 KRW" } },
    { icon: "DP", label: { "zh-Hant": "Deposit", en: "Deposit", ko: "Deposit" }, value: { "zh-Hant": "300 CNY", en: "300 CNY", ko: "300 CNY" } },
    { icon: "RM", label: { "zh-Hant": "Remaining balance", en: "Remaining balance", ko: "Remaining balance" }, value: { "zh-Hant": "about 880,000 KRW", en: "about 880,000 KRW", ko: "about 880,000 KRW" } },
  ],
  overviewStats: [
    { label: { "zh-Hant": "Trip length", en: "Trip length", ko: "Trip length" }, value: { "zh-Hant": "6 天 5 夜", en: "6 days / 5 nights", ko: "6일 5박" } },
    { label: { "zh-Hant": "Stay base", en: "Stay base", ko: "Stay base" }, value: { "zh-Hant": "弘大 / Seogyo", en: "Hongdae / Seogyo", ko: "홍대 / 서교" } },
    { label: { "zh-Hant": "Main appointment", en: "Main appointment", ko: "Main appointment" }, value: { "zh-Hant": "5/19 14:00 韓服拍攝", en: "May 19, 14:00 hanbok shoot", ko: "5/19 14:00 한복 촬영" } },
    { label: { "zh-Hant": "Safe departure", en: "Safe departure", ko: "Safe departure" }, value: { "zh-Hant": "12:45 - 13:00", en: "12:45 - 13:00", ko: "12:45 - 13:00" } },
  ],
  lockedPlans: [
    { title: { "zh-Hant": "住宿已定", en: "Hotel locked", ko: "숙소 확정" }, desc: { "zh-Hant": "5/15 - 5/20 住在 Local Stitch Creator Town Seogyo，高級雙床房，兩人入住。", en: "May 15-20 at Local Stitch Creator Town Seogyo in a Deluxe Twin room for two.", ko: "5/15 - 5/20 Local Stitch Creator Town Seogyo 디럭스 트윈룸 2인 숙박." } },
    { title: { "zh-Hant": "韓服方案已定", en: "Hanbok plan locked", ko: "한복 플랜 확정" }, desc: { "zh-Hant": "64 萬韓元高級方案 + 30 萬 MV，加起來 94 萬韓元。", en: "640,000 KRW premium package + 300,000 KRW MV add-on, total 940,000 KRW.", ko: "640,000 KRW 프리미엄 패키지 + 300,000 KRW MV, 총 940,000 KRW." } },
    { title: { "zh-Hant": "重點景點已定", en: "Key places locked", ko: "핵심 장소 확정" }, desc: { "zh-Hant": "5/19 放景福宮、北村韓屋村與韓服拍攝，整體氣氛很一致。", en: "May 19 is built around Gyeongbokgung, Bukchon Hanok Village, and the hanbok shoot.", ko: "5/19 일정은 경복궁, 북촌한옥마을, 한복 촬영 중심으로 정리됨." } },
  ],
  importantAlerts: [
    { title: { "zh-Hant": "不要壓線", en: "Do not cut it too close", ko: "시간을 너무 타이트하게 잡지 않기" }, desc: { "zh-Hant": "店家遲到 20 分鐘有罰款，而且北村真的容易迷路。", en: "The store applies a penalty after a 20-minute delay, and Bukchon is genuinely easy to get lost in.", ko: "20분 지각 벌금이 있고 북촌은 실제로 길 찾기가 헷갈리기 쉽습니다." } },
    { title: { "zh-Hant": "原片與精修要確認", en: "Confirm original and retouched counts", ko: "원본 / 보정 수량 확인" }, desc: { "zh-Hant": "當天務必再次確認 200 張原片與 12 張精修。", en: "Reconfirm the 200 original photos and 12 retouched photos on the day itself.", ko: "당일 200장 원본과 12장 보정을 다시 확인하세요." } },
    { title: { "zh-Hant": "卡片可能加收 10%", en: "Card may add 10%", ko: "카드 결제 10% 추가 가능" }, desc: { "zh-Hant": "若店家刷卡加價，準備韓元現金會比較穩。", en: "If the shop adds a card surcharge, KRW cash will be the safer backup.", ko: "카드 수수료가 붙는다면 KRW 현금이 더 안전한 대안입니다." } },
  ],
  flights: [
    {
      label: { "zh-Hant": "去程", en: "Outbound", ko: "출국" },
      route: "TPE → ICN",
      date: "2026-05-15",
      time: "15:30 - 19:05",
      code: "CI 0162",
      cabin: { "zh-Hant": "經濟艙基本", en: "Economy Basic", ko: "이코노미 베이직" },
    },
    {
      label: { "zh-Hant": "回程", en: "Return", ko: "귀국" },
      route: "ICN → TPE",
      date: "2026-05-20",
      time: "20:05 - 21:50",
      code: "CI return",
      cabin: { "zh-Hant": "經濟艙基本", en: "Economy Basic", ko: "이코노미 베이직" },
    },
  ],
  memberBenefits: [
    { title: { "zh-Hant": "額外託運 20 公斤", en: "Extra 20 kg baggage", ko: "추가 수하물 20kg" }, desc: { "zh-Hant": "華航 Paragon 會員在符合條件的自營國際航班可享額外託運額度。", en: "Paragon members get extra baggage on eligible China Airlines operated international flights.", ko: "Paragon 회원은 대상 화항 자사 국제선에서 추가 수하물 혜택을 받을 수 있습니다." } },
    { title: { "zh-Hant": "免費選位", en: "Complimentary seat selection", ko: "무료 좌석 지정" }, desc: { "zh-Hant": "對這趟經濟艙最實用，建議出發前先看可選區域。", en: "Especially useful for this economy fare, so checking seat options before departure is worth it.", ko: "이번 이코노미 운임에서 체감이 큰 혜택이라 출발 전에 좌석 옵션을 확인할 가치가 있습니다." } },
    { title: { "zh-Hant": "優先服務與貴賓室", en: "Priority services and lounge", ko: "우선 서비스와 라운지" }, desc: { "zh-Hant": "優先報到、優先登機、優先行李和貴賓室都屬於這趟值得先確認的便利權益。", en: "Priority check-in, boarding, baggage, and lounge access are the most useful convenience perks for this trip.", ko: "우선 체크인, 탑승, 수하물, 라운지 이용이 이번 여행에서 가장 유용한 편의 혜택입니다." } },
  ],
  hotel: {
    title: { "zh-Hant": "Local Stitch Creator Town Seogyo（洛卡斯提奇創作者小鎮西橋店）", en: "Local Stitch Creator Town Seogyo", ko: "Local Stitch Creator Town Seogyo" },
    subtitle: { "zh-Hant": "高級雙床房 · 5 晚 · 2 人", en: "Deluxe Twin Room · 5 nights · 2 guests", ko: "디럭스 트윈룸 · 5박 · 2인" },
    chips: ["Hongdae", "5 nights", "2 guests", "Deluxe Twin"],
    totalTwd: 19247,
    notes: [
      { title: { "zh-Hant": "飯店總價", en: "Hotel total", ko: "호텔 총액" }, krw: 19247 * rates.TWD.krwPerUnit },
      { title: { "zh-Hant": "平均每晚", en: "Per night", ko: "1박 평균" }, krw: (19247 / 5) * rates.TWD.krwPerUnit },
      { title: { "zh-Hant": "每人分攤", en: "Per person", ko: "1인 기준" }, krw: (19247 / 2) * rates.TWD.krwPerUnit },
      { title: { "zh-Hant": "每人每晚", en: "Per person / night", ko: "1인 1박 기준" }, krw: (19247 / 10) * rates.TWD.krwPerUnit },
    ],
    copy: [
      { title: { "zh-Hant": "住弘大最省事", en: "Hongdae is the easiest base", ko: "홍대가 가장 편한 베이스" }, desc: { "zh-Hant": "吃飯、晚上回去和最後幾天購物都很順。", en: "Food, late returns, and shopping days all become easier from Hongdae.", ko: "식사, 늦은 귀가, 쇼핑 일정이 모두 더 편해집니다." } },
      { title: { "zh-Hant": "拍攝日出發點很清楚", en: "Clear starting point for shoot day", ko: "촬영일 출발지가 명확함" }, desc: { "zh-Hant": "從這裡去安國站動線簡單，不需要再臨時換計畫。", en: "The route to Anguk is simple from here, with less last-minute confusion.", ko: "안국역 이동 동선이 단순해서 당일 스트레스가 적습니다." } },
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
      { title: { "zh-Hant": "準時比什麼都重要", en: "Punctuality matters most", ko: "정시 도착이 가장 중요" }, desc: { "zh-Hant": "20 分鐘遲到會罰款，還可能縮短拍攝時間。", en: "A 20-minute delay triggers a penalty and may shorten the shoot.", ko: "20분 지각 시 벌금이 있고 촬영 시간이 줄어들 수 있습니다." } },
      { title: { "zh-Hant": "路線建議保守抓", en: "Keep the route timing conservative", ko: "이동 시간은 보수적으로 잡기" }, desc: { "zh-Hant": "北村那區太容易繞錯路，所以最穩還是 12:45 到 13:00 間出門。", en: "Bukchon is easy to navigate poorly, so leaving around 12:45 to 13:00 is safer.", ko: "북촌은 길 찾기가 쉽지 않아서 12:45 - 13:00 출발이 가장 안전합니다." } },
      { title: { "zh-Hant": "原片與精修數量要再口頭確認", en: "Reconfirm the promised photo counts", ko: "원본 / 보정 수량을 다시 확인" }, desc: { "zh-Hant": "拍攝前後都可以再確認 200 原片與 12 精修。", en: "It is worth confirming the 200 originals and 12 retouched images both before and after the shoot.", ko: "촬영 전후 모두 원본 200장과 보정 12장을 다시 확인하세요." } },
    ],
    mediaLinks: [
      { label: { "zh-Hant": "MV 範例", en: "MV sample", ko: "MV sample" }, href: "http://xhslink.com/o/15TW7yFNm7q" },
      { label: { "zh-Hant": "工作室頁面", en: "Studio profile", ko: "Studio profile" }, href: "http://xhslink.com/o/1yRuTcW00pc" },
    ],
  },
  routeTimeline: [
    { time: "13:00", title: { "zh-Hant": "從飯店出發", en: "Leave hotel", ko: "호텔 출발" }, desc: { "zh-Hant": "搭地鐵或直接叫車，這個時間點最穩。", en: "Take the subway or call a taxi; this is the safest departure time.", ko: "지하철 또는 택시 이동. 이 시간이 가장 안전합니다." } },
    { time: "13:40", title: { "zh-Hant": "抵達安國 / 北村附近", en: "Arrive near Anguk / Bukchon", ko: "안국 / 북촌 근처 도착" }, desc: { "zh-Hant": "保留一點時間找路，不要衝最後幾分鐘。", en: "Keep a little buffer for navigation instead of rushing the last few minutes.", ko: "길 찾기 여유를 남겨 두는 편이 좋습니다." } },
    { time: "14:00", title: { "zh-Hant": "韓服預約時間", en: "Hanbok appointment", ko: "한복 예약 시간" }, desc: { "zh-Hant": "準時到店是這天最重要的事。", en: "Arriving on time is the most important mission of the day.", ko: "정시에 도착하는 것이 가장 중요합니다." } },
    { time: "After", title: { "zh-Hant": "晚餐 / 咖啡 / 照片備份", en: "Dinner / cafe / photo backup", ko: "저녁 / 카페 / 사진 백업" }, desc: { "zh-Hant": "拍攝結束後找地方吃飯，也順手把手機照片先備份。", en: "After shooting, settle into dinner or a cafe and back up phone photos early.", ko: "촬영 후 식사나 카페로 이동하고 휴대폰 사진도 미리 백업해 두세요." } },
  ],
  routeCards: [
    {
      title: { "zh-Hant": "Subway route", en: "Subway route", ko: "Subway route" },
      start: { "zh-Hant": "Local Stitch Creator Town Seogyo", en: "Local Stitch Creator Town Seogyo", ko: "Local Stitch Creator Town Seogyo" },
      destination: { "zh-Hant": "옥한복 / Bukchon area", en: "Ok Hanbok / Bukchon area", ko: "Ok Hanbok / Bukchon area" },
      duration: { "zh-Hant": "35-45 分鐘", en: "35-45 min", ko: "35-45분" },
      cost: { "zh-Hant": "低成本", en: "Low cost", ko: "저비용" },
      useCase: { "zh-Hant": "最穩、最可控", en: "Most stable and predictable", ko: "가장 안정적이고 예측 가능" },
      desc: { "zh-Hant": "弘大入口站 → 2 號線到乙支路 3 街 → 轉 3 號線到安國站 → 2 號出口步行 5-8 分鐘。", en: "Hongik Univ. Station → Line 2 to Euljiro 3-ga → transfer to Line 3 to Anguk → Exit 2 and walk 5-8 minutes.", ko: "홍대입구역 → 2호선 을지로3가 → 3호선 안국역 환승 → 2번 출구 도보 5-8분." },
      links: [{ type: "google", href: "https://www.google.com/maps/search/%EC%98%A5%ED%95%9C%EB%B3%B5/" }],
    },
    {
      title: { "zh-Hant": "Taxi route", en: "Taxi route", ko: "Taxi route" },
      start: { "zh-Hant": "Local Stitch Creator Town Seogyo", en: "Local Stitch Creator Town Seogyo", ko: "Local Stitch Creator Town Seogyo" },
      destination: { "zh-Hant": "옥한복 / Bukchon area", en: "Ok Hanbok / Bukchon area", ko: "Ok Hanbok / Bukchon area" },
      duration: { "zh-Hant": "20-25 分鐘", en: "20-25 min", ko: "20-25분" },
      cost: { "zh-Hant": "約 ₩8,000-12,000", en: "About ₩8,000-12,000", ko: "약 ₩8,000-12,000" },
      useCase: { "zh-Hant": "怕迷路或懶得換線", en: "Best if you want less navigation stress", ko: "길 찾기 스트레스를 줄이고 싶을 때" },
      desc: { "zh-Hant": "如果當天只想輕鬆到店，這是最直接的方案。", en: "This is the cleanest choice if you just want the easiest arrival on shooting day.", ko: "촬영일에 가장 편하게 이동하고 싶다면 이 방법이 가장 단순합니다." },
      links: [{ type: "google", href: "https://www.google.com/maps/search/%EC%98%A5%ED%95%9C%EB%B3%B5/" }],
    },
    {
      title: { "zh-Hant": "Arrival walk", en: "Arrival walk", ko: "Arrival walk" },
      start: { "zh-Hant": "安國站 2 號出口", en: "Anguk Station Exit 2", ko: "안국역 2번 출구" },
      destination: { "zh-Hant": "韓服店門口", en: "Hanbok shop entrance", ko: "한복 매장 입구" },
      duration: { "zh-Hant": "5-8 分鐘", en: "5-8 min", ko: "5-8분" },
      cost: { "zh-Hant": "步行", en: "Walking", ko: "도보" },
      useCase: { "zh-Hant": "最後一段找路", en: "Final approach", ko: "마지막 접근 구간" },
      desc: { "zh-Hant": "這一段最容易因找路而延遲，所以提早到附近最重要。", en: "This final stretch is where time is easiest to lose, so reaching the area early matters most.", ko: "마지막 도보 구간에서 시간이 가장 쉽게 늘어나므로 근처에 먼저 도착하는 것이 핵심입니다." },
      links: [{ type: "google", href: "https://www.google.com/maps/search/%EC%98%A5%ED%95%9C%EB%B3%B5/" }],
    },
  ],
  airportNotes: [
    { title: { "zh-Hant": "仁川到飯店", en: "Incheon to hotel", ko: "인천에서 호텔" }, desc: { "zh-Hant": "抵達後可走 AREX 或巴士到弘大，再步行或短程計程車到飯店。", en: "After landing, take AREX or a bus toward Hongdae, then walk or use a short taxi to the hotel.", ko: "도착 후 AREX 또는 버스로 홍대까지 이동한 뒤 도보나 짧은 택시로 호텔 이동." } },
    { title: { "zh-Hant": "回程抓寬鬆一點", en: "Keep return timing generous", ko: "귀국일은 여유 있게" }, desc: { "zh-Hant": "5/20 晚上回程航班，最後一天不要把購物和移動排太滿。", en: "The return flight is in the evening on May 20, so avoid compressing the final day too much.", ko: "5/20 저녁 귀국편이라 마지막 날은 쇼핑과 이동을 너무 빽빽하게 넣지 않는 편이 좋습니다." } },
  ],
  budgetRows: [
    { item: { "zh-Hant": "韓服套餐", en: "Hanbok package", ko: "한복 패키지" }, krw: 640000, original: "640,000 KRW", note: { "zh-Hant": "高級方案", en: "Premium package", ko: "프리미엄 패키지" } },
    { item: { "zh-Hant": "MV 加購", en: "MV add-on", ko: "MV 추가" }, krw: 300000, original: "300,000 KRW", note: { "zh-Hant": "MV 影片", en: "MV video", ko: "MV 영상" } },
    { item: { "zh-Hant": "訂金", en: "Deposit", ko: "예약금" }, krw: 300 * rates.CNY.krwPerUnit, original: "300 CNY", note: { "zh-Hant": "已付", en: "Already paid", ko: "이미 결제" } },
    { item: { "zh-Hant": "剩餘韓服款", en: "Remaining Hanbok balance", ko: "남은 한복 잔액" }, krw: 880000, original: "about 880,000 KRW", note: { "zh-Hant": "現場補款", en: "To pay on site", ko: "현장 결제" } },
    { item: { "zh-Hant": "飯店", en: "Hotel", ko: "호텔" }, krw: 19247 * rates.TWD.krwPerUnit, original: "NT$19,247", note: { "zh-Hant": "5 晚 2 人", en: "5 nights for 2", ko: "5박 2인" } },
    { item: { "zh-Hant": "機票", en: "Flights", ko: "항공권" }, krw: 12718 * rates.TWD.krwPerUnit, original: "NT$12,718", note: { "zh-Hant": "目前截圖票價", en: "Current screenshot fare", ko: "현재 스크린샷 기준" } },
    { item: { "zh-Hant": "交通預算", en: "Transportation estimate", ko: "교통 예산" }, krw: 120000, original: "120,000 KRW", note: { "zh-Hant": "地鐵 + 計程車彈性抓法", en: "Flexible subway + taxi planning", ko: "지하철 + 택시 혼합 예상" } },
    { item: { "zh-Hant": "餐食預算", en: "Food estimate", ko: "식비 예산" }, krw: 360000, original: "360,000 KRW", note: { "zh-Hant": "兩人粗估", en: "Planning estimate for two", ko: "2인 계획용 추정" } },
    { item: { "zh-Hant": "購物預算", en: "Shopping estimate", ko: "쇼핑 예산" }, krw: 250000, original: "250,000 KRW", note: { "zh-Hant": "彈性抓法", en: "Flexible placeholder", ko: "유동적 가정" } },
  ],
  itinerary: [
    {
      day: "Day 1",
      date: "2026-05-15",
      plan: { "zh-Hant": "抵達首爾、飯店 check-in", en: "Arrive in Seoul and check in", ko: "서울 도착 후 체크인" },
      location: { "zh-Hant": "仁川機場 → 弘大", en: "Incheon Airport → Hongdae", ko: "인천공항 → 홍대" },
      costKrw: 30000,
      transport: { "zh-Hant": "AREX / 巴士 / 短程計程車", en: "AREX / airport bus / short taxi", ko: "AREX / 버스 / 짧은 택시" },
      reminder: { "zh-Hant": "不要排太滿，先把交通與入住順好。", en: "Do not overpack the first evening; keep arrival and check-in smooth.", ko: "첫날은 무리하지 말고 이동과 체크인을 먼저 안정적으로." },
      open: true,
    },
    {
      day: "Day 2",
      date: "2026-05-16",
      plan: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" },
      location: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" },
      costKrw: 60000,
      transport: { "zh-Hant": "依當天行程調整", en: "Adjust based on the day plan", ko: "당일 일정에 맞춰 조정" },
      reminder: { "zh-Hant": "保留空白給當天心情。", en: "Keep this open for mood-based planning.", ko: "그날 분위기에 맞게 유동적으로 두기." },
    },
    {
      day: "Day 3",
      date: "2026-05-17",
      plan: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" },
      location: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" },
      costKrw: 60000,
      transport: { "zh-Hant": "依當天行程調整", en: "Adjust based on the day plan", ko: "당일 일정에 맞춰 조정" },
      reminder: { "zh-Hant": "可以把推薦景點留到這一天再決定。", en: "This is a good day for adding optional recommendations later.", ko: "추가 추천 장소를 이 날에 넣어도 좋습니다." },
    },
    {
      day: "Day 4",
      date: "2026-05-18",
      plan: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" },
      location: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" },
      costKrw: 60000,
      transport: { "zh-Hant": "依當天行程調整", en: "Adjust based on the day plan", ko: "당일 일정에 맞춰 조정" },
      reminder: { "zh-Hant": "晚上先整理隔天拍攝要用的東西。", en: "Use the evening to prep for the hanbok day.", ko: "저녁에는 한복 촬영 준비물을 정리하는 편이 좋습니다." },
    },
    {
      day: "Day 5",
      date: "2026-05-19",
      plan: { "zh-Hant": "景福宮 + 北村韓屋村 + 韓服拍攝", en: "Gyeongbokgung + Bukchon + Hanbok shoot", ko: "경복궁 + 북촌 + 한복 촬영" },
      location: { "zh-Hant": "景福宮 / 北村 / 안국역", en: "Gyeongbokgung / Bukchon / Anguk", ko: "경복궁 / 북촌 / 안국역" },
      costKrw: 940000,
      transport: { "zh-Hant": "13:00 前從飯店出發，地鐵或計程車都可", en: "Leave hotel before 13:00; subway or taxi both work", ko: "13:00 전 호텔 출발, 지하철 또는 택시" },
      reminder: { "zh-Hant": "今天最重要的是準時、確認方案內容，以及拍完先備份照片。", en: "Today the priorities are being on time, confirming package details, and backing up photos after shooting.", ko: "오늘은 정시 도착, 패키지 내용 확인, 촬영 후 사진 백업이 가장 중요합니다." },
      open: true,
    },
    {
      day: "Day 6",
      date: "2026-05-20",
      plan: { "zh-Hant": "退房、最後採買、前往機場", en: "Check out, last shopping, airport transfer", ko: "체크아웃, 마지막 쇼핑, 공항 이동" },
      location: { "zh-Hant": "弘大 → 仁川機場", en: "Hongdae → Incheon Airport", ko: "홍대 → 인천공항" },
      costKrw: 40000,
      transport: { "zh-Hant": "AREX / 巴士 / 計程車", en: "AREX / bus / taxi", ko: "AREX / 버스 / 택시" },
      reminder: { "zh-Hant": "回程是晚上航班，行李和退房時間不要拖太晚。", en: "The return flight is in the evening, so do not push check-out and packing too late.", ko: "귀국편이 저녁이라 체크아웃과 짐 정리를 너무 늦추지 않는 편이 좋습니다." },
    },
  ],
  checklistGroups: [
    {
      id: "before-departure",
      title: { "zh-Hant": "Before departure", en: "Before departure", ko: "Before departure" },
      items: [
        { id: "passport", title: { "zh-Hant": "護照", en: "Passport", ko: "Passport" }, desc: { "zh-Hant": "確認效期與放置位置。", en: "Check validity and where it is packed.", ko: "유효기간과 보관 위치 확인." } },
        { id: "esim", title: { "zh-Hant": "eSIM / 漫遊", en: "eSIM / roaming", ko: "eSIM / roaming" }, desc: { "zh-Hant": "抵達後要能立刻上網。", en: "You want data working right after landing.", ko: "도착 직후 데이터 사용 가능 상태." } },
        { id: "powerbank", title: { "zh-Hant": "行動電源", en: "Power bank", ko: "Power bank" }, desc: { "zh-Hant": "導航與拍照會很耗電。", en: "Navigation and photos drain battery quickly.", ko: "지도와 사진으로 배터리 소모가 큼." } },
      ],
    },
    {
      id: "hanbok-day",
      title: { "zh-Hant": "Hanbok shooting day", en: "Hanbok shooting day", ko: "Hanbok shooting day" },
      items: [
        { id: "makeup", title: { "zh-Hant": "補妝 / 整髮用品", en: "Makeup touch-up items", ko: "Makeup touch-up items" }, desc: { "zh-Hant": "不要臨時找東西。", en: "Keep touch-up items ready in advance.", ko: "수정 화장 / 머리 정리 아이템 미리 준비." } },
        { id: "original-count", title: { "zh-Hant": "確認 200 張原片", en: "Confirm 200 original photos", ko: "Confirm 200 original photos" }, desc: { "zh-Hant": "出發前後都再確認。", en: "Reconfirm before and after the shoot.", ko: "촬영 전후 모두 다시 확인." } },
        { id: "retouch-count", title: { "zh-Hant": "確認 12 張精修", en: "Confirm 12 retouched photos", ko: "Confirm 12 retouched photos" }, desc: { "zh-Hant": "精修數量要口頭確認。", en: "Retouched count should be verbally reconfirmed.", ko: "보정 수량을 구두로 재확인." } },
        { id: "mv-addon", title: { "zh-Hant": "確認 MV 加購", en: "Confirm MV add-on", ko: "Confirm MV add-on" }, desc: { "zh-Hant": "確認有列入最終方案。", en: "Make sure the MV add-on is included in the final plan.", ko: "최종 플랜에 MV 추가가 포함되는지 확인." } },
      ],
    },
    {
      id: "hotel-checkin",
      title: { "zh-Hant": "Hotel / check-in", en: "Hotel / check-in", ko: "Hotel / check-in" },
      items: [
        { id: "hotel-booking", title: { "zh-Hant": "訂房紀錄", en: "Hotel booking record", ko: "Hotel booking record" }, desc: { "zh-Hant": "Agoda 訂房頁能即時打開。", en: "Keep the Agoda booking page easy to reopen.", ko: "Agoda 예약 페이지를 바로 열 수 있게 유지." } },
        { id: "late-return", title: { "zh-Hant": "夜晚返程路線", en: "Late return route", ko: "Late return route" }, desc: { "zh-Hant": "知道怎麼回弘大會很安心。", en: "Knowing the way back to Hongdae keeps evenings easier.", ko: "밤에 홍대로 돌아오는 루트 파악." } },
      ],
    },
    {
      id: "payment",
      title: { "zh-Hant": "Payment", en: "Payment", ko: "Payment" },
      items: [
        { id: "credit-card", title: { "zh-Hant": "信用卡", en: "Credit card", ko: "Credit card" }, desc: { "zh-Hant": "確認海外刷卡與黑卡權益。", en: "Confirm overseas card use and Paragon perks.", ko: "해외 결제 가능 여부와 Paragon 혜택 확인." } },
        { id: "krw-cash", title: { "zh-Hant": "韓元現金", en: "KRW cash", ko: "KRW cash" }, desc: { "zh-Hant": "刷卡加價時會更穩。", en: "Useful if card payment gets a surcharge.", ko: "카드 추가요금 발생 시 더 안전함." } },
        { id: "deposit-record", title: { "zh-Hant": "300 CNY 訂金紀錄", en: "300 CNY deposit record", ko: "300 CNY deposit record" }, desc: { "zh-Hant": "方便現場對帳。", en: "Helpful for reconciling on site.", ko: "현장 대조용으로 유용." } },
        { id: "surcharge", title: { "zh-Hant": "確認刷卡加收 10%", en: "Confirm 10% card surcharge", ko: "Confirm 10% card surcharge" }, desc: { "zh-Hant": "付款前先問清楚。", en: "Ask clearly before making the final payment.", ko: "최종 결제 전에 반드시 확인." } },
      ],
    },
    {
      id: "emergency",
      title: { "zh-Hant": "Emergency", en: "Emergency", ko: "Emergency" },
      items: [
        { id: "backup-photos", title: { "zh-Hant": "拍完先備份照片", en: "Back up photos after the shoot", ko: "Back up photos after the shoot" }, desc: { "zh-Hant": "手機拍攝素材先備份，不要等回飯店。", en: "Back up phone photos early rather than waiting until later.", ko: "휴대폰 사진은 가능한 빨리 백업." } },
        { id: "contact-links", title: { "zh-Hant": "確認工作室連結可開", en: "Studio links accessible", ko: "Studio links accessible" }, desc: { "zh-Hant": "臨時需要聯繫時比較安心。", en: "Useful if you need to reopen or reference the studio quickly.", ko: "스튜디오를 다시 열어봐야 할 때 대비." } },
      ],
    },
  ],
  usefulLinks: [
    {
      title: { "zh-Hant": "Stay & Route", en: "Stay & Route", ko: "Stay & Route" },
      desc: { "zh-Hant": "飯店與主要移動相關連結。", en: "Hotel and route-related links.", ko: "호텔과 주요 이동 링크." },
      links: [
        { label: { "zh-Hant": "Agoda 飯店頁", en: "Agoda hotel page", ko: "Agoda hotel page" }, href: "https://www.agoda.com/zh-tw/localstitch-seogyo-town/hotel/seoul-kr.html?checkIn=2026-05-15&los=5&adults=2&rooms=1&travellerType=1&ds=qgMT%2Bi%2FlTw7Mxwmp" },
        { label: { "zh-Hant": "韓服店 Google Maps", en: "Hanbok shop Google Maps", ko: "Hanbok shop Google Maps" }, href: "https://www.google.com/maps/search/%EC%98%A5%ED%95%9C%EB%B3%B5/" },
        { label: { "zh-Hant": "首爾地鐵官方圖", en: "Official Seoul Metro map", ko: "Official Seoul Metro map" }, href: "https://www.seoulmetro.co.kr/download/map_english.jpg" },
      ],
    },
    {
      title: { "zh-Hant": "Hanbok & Media", en: "Hanbok & Media", ko: "Hanbok & Media" },
      desc: { "zh-Hant": "工作室與 MV 參考。", en: "Studio and MV references.", ko: "스튜디오와 MV 참고 자료." },
      links: [
        { label: { "zh-Hant": "工作室頁面", en: "Studio profile", ko: "Studio profile" }, href: "http://xhslink.com/o/1yRuTcW00pc" },
        { label: { "zh-Hant": "MV 範例", en: "MV sample", ko: "MV sample" }, href: "http://xhslink.com/o/15TW7yFNm7q" },
      ],
    },
    {
      title: { "zh-Hant": "Money & Membership", en: "Money & Membership", ko: "Money & Membership" },
      desc: { "zh-Hant": "華航會員與匯率。", en: "Membership and exchange-rate references.", ko: "멤버십과 환율 참고." },
      links: [
        { label: { "zh-Hant": "華航會員權益", en: "China Airlines benefits", ko: "China Airlines benefits" }, href: "https://www.china-airlines.com/us/en/member/planning/introduction/membership-benefits" },
        { label: { "zh-Hant": "Paragon 黑卡權益", en: "Paragon benefits", ko: "Paragon benefits" }, href: "https://www.china-airlines.com/us/en/member/planning/introduction/membership-benefits/paragon.html" },
        { label: { "zh-Hant": "WOWPASS 即時匯率", en: "WOWPASS live rate", ko: "WOWPASS live rate" }, href: "https://www.wowexchange.net/exchange/rate?lang=en_US" },
      ],
    },
  ],
};

function getText(entry) {
  if (typeof entry === "string") return entry;
  return entry?.[state.lang] ?? "";
}

function getChecklistState() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.checklist) || "{}");
}

function setChecklistState(nextState) {
  localStorage.setItem(STORAGE_KEYS.checklist, JSON.stringify(nextState));
}

function formatCurrency(krw, currency = state.currency) {
  const meta = rates[currency];
  const amount = krw / meta.krwPerUnit;
  return `${meta.symbol}${Math.round(amount).toLocaleString()}`;
}

function summaryValueWithOriginal(krw) {
  return `
    <div class="budget-amount-main">${formatCurrency(krw)}</div>
    <div class="budget-original">${formatCurrency(krw, "KRW")}</div>
  `;
}

function routeLinkLabel(type) {
  if (type === "naver") return t[state.lang].naverLabel;
  if (type === "kakao") return t[state.lang].kakaoLabel;
  return t[state.lang].mapsLabel;
}

function renderI18n() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (t[state.lang][key]) node.textContent = t[state.lang][key];
  });
}

function renderHero() {
  document.getElementById("heroTags").innerHTML = data.heroTags[state.lang].map((tag) => `<span class="hero-tag">${tag}</span>`).join("");
  document.getElementById("heroSummary").innerHTML = data.heroSummary
    .map(
      (item) => `
        <article class="summary-card">
          <div class="summary-card-top">
            <div class="summary-label">${getText(item.label)}</div>
            <span class="summary-icon">${item.icon}</span>
          </div>
          <div class="summary-value">${getText(item.value)}</div>
        </article>
      `
    )
    .join("");
}

function renderTodayFocus() {
  const now = new Date().toISOString().slice(0, 10);
  let targetId = "checklist";
  let title = t[state.lang].todayLabel;
  let copy = t[state.lang].todayBeforeTrip;

  if (now < trip.startDate) {
    targetId = "checklist";
  } else if (now === trip.hanbokDate) {
    targetId = "route";
    copy = t[state.lang].todayOnHanbok;
  } else if (now >= trip.startDate && now <= trip.endDate) {
    targetId = "itinerary";
    copy = t[state.lang].todayDuringTrip;
  } else if (now > trip.endDate) {
    targetId = "budget";
    copy = t[state.lang].todayAfterTrip;
  }

  document.getElementById("todayFocus").innerHTML = `
    <span class="today-focus-chip">${title}</span>
    <div class="today-focus-title">${copy}</div>
    <p class="today-focus-copy">${getText(data.heroSummary[2].value)}</p>
    <div class="route-actions">
      <a class="action-link" href="#${targetId}">${t[state.lang].openLink}</a>
    </div>
  `;

  const todayFab = document.getElementById("todayFab");
  todayFab.dataset.target = targetId;
}

function renderOverview() {
  document.getElementById("overviewStats").innerHTML = data.overviewStats
    .map(
      (item) => `
        <article class="mini-stat-card">
          <div class="mini-stat-label">${getText(item.label)}</div>
          <div class="mini-stat-value">${getText(item.value)}</div>
        </article>
      `
    )
    .join("");

  document.getElementById("lockedPlans").innerHTML = data.lockedPlans.map((item) => `<article class="bullet-card"><div class="bullet-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.desc)}</div></article>`).join("");
  document.getElementById("importantAlerts").innerHTML = data.importantAlerts.map((item) => `<article class="bullet-card"><div class="bullet-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.desc)}</div></article>`).join("");
  document.getElementById("memberBenefits").innerHTML = data.memberBenefits.map((item) => `<article class="bullet-card"><div class="bullet-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.desc)}</div></article>`).join("");

  document.getElementById("flightCards").innerHTML = data.flights
    .map(
      (flight) => `
        <article class="flight-card">
          <span class="flight-kicker">${getText(flight.label)}</span>
          <div class="flight-route">${flight.route}</div>
          <div class="flight-meta">
            <div class="info-line"><span class="info-label">Date</span><span class="info-value">${flight.date}</span></div>
            <div class="info-line"><span class="info-label">Time</span><span class="info-value">${flight.time}</span></div>
            <div class="info-line"><span class="info-label">Class</span><span class="info-value">${getText(flight.cabin)}</span></div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderHotel() {
  const hotel = data.hotel;
  document.getElementById("hotelCard").innerHTML = `
    <div class="card-header">
      <h3>${getText(hotel.title)}</h3>
      <p class="card-intro">${getText(hotel.subtitle)}</p>
    </div>
    <div class="hotel-pill-row">${hotel.chips.map((chip) => `<span class="pill">${chip}</span>`).join("")}</div>
    <div class="price-stack">
      ${hotel.notes
        .map(
          (item) => `
            <div class="price-row">
              <div class="price-label">${getText(item.title)}</div>
              <div class="price-value">${formatCurrency(item.krw)}</div>
              <div class="budget-original">${formatCurrency(item.krw, "KRW")}</div>
            </div>
          `
        )
        .join("")}
    </div>
    <div class="bullet-stack">
      ${hotel.copy.map((item) => `<article class="bullet-card"><div class="bullet-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.desc)}</div></article>`).join("")}
    </div>
    <div class="route-actions">
      <a class="action-link" href="${hotel.href}" target="_blank" rel="noreferrer">Agoda</a>
    </div>
  `;
}

function renderHanbok() {
  document.getElementById("hanbokPlanCard").innerHTML = `
    <div class="card-header">
      <h3>Reserved Hanbok Plan</h3>
      <p class="card-intro">Premium booking snapshot for the May 19 shooting day.</p>
    </div>
    <div class="price-stack">
      <div class="price-row">
        <div class="price-label">Package</div>
        <div class="price-value">640,000 KRW premium package</div>
      </div>
      <div class="price-row">
        <div class="price-label">Add-on</div>
        <div class="price-value">300,000 KRW MV add-on</div>
      </div>
      <div class="price-row">
        <div class="price-label">Total</div>
        <div class="price-value">940,000 KRW</div>
      </div>
      <div class="price-row">
        <div class="price-label">Deposit</div>
        <div class="price-value">300 CNY</div>
      </div>
    </div>
    <div class="include-chip-row">${data.hanbok.includes.map((item) => `<span class="include-chip">${getText(item)}</span>`).join("")}</div>
    <div class="warning-chip-row">
      <span class="warning-chip">Card payment may add 10% surcharge</span>
    </div>
    <div class="payment-note">
      <strong>Prepare KRW cash if possible.</strong>
      <span class="budget-original">This makes the final on-site payment easier if the card surcharge is enforced.</span>
    </div>
    <div class="route-actions">${data.hanbok.mediaLinks.map((link) => `<a class="action-link" href="${link.href}" target="_blank" rel="noreferrer">${getText(link.label)}</a>`).join("")}</div>
  `;

  document.getElementById("hanbokRules").innerHTML = data.hanbok.rules.map((item) => `<article class="bullet-card"><div class="bullet-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.desc)}</div></article>`).join("");
}

function renderRoutes() {
  document.getElementById("routeTimeline").innerHTML = data.routeTimeline
    .map(
      (item) => `
        <article class="timeline-card">
          <div class="timeline-time">${item.time}</div>
          <div>
            <div class="timeline-title">${getText(item.title)}</div>
            <div class="timeline-desc">${getText(item.desc)}</div>
          </div>
        </article>
      `
    )
    .join("");

  document.getElementById("routeCards").innerHTML = data.routeCards
    .map(
      (item) => `
        <article class="glass-card route-card">
          <div class="route-top">
            <div>
              <div class="route-title">${getText(item.title)}</div>
              <div class="route-subline">${getText(item.useCase)}</div>
            </div>
            <span class="route-chip">${getText(item.duration)}</span>
          </div>
          <div class="route-stat">
            <div class="info-line"><span class="info-label">${t[state.lang].startLabel}</span><span class="info-value">${getText(item.start)}</span></div>
            <div class="info-line"><span class="info-label">${t[state.lang].destinationLabel}</span><span class="info-value">${getText(item.destination)}</span></div>
            <div class="info-line"><span class="info-label">${t[state.lang].costLabel}</span><span class="info-value">${getText(item.cost)}</span></div>
          </div>
          <div class="bullet-desc">${getText(item.desc)}</div>
          <div class="route-actions">
            ${item.links.map((link) => `<a class="action-link" href="${link.href}" target="_blank" rel="noreferrer">${routeLinkLabel(link.type)}</a>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

  document.getElementById("airportNotes").innerHTML = data.airportNotes.map((item) => `<article class="bullet-card"><div class="bullet-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.desc)}</div></article>`).join("");
}

function renderBudget() {
  const totalKrw = data.budgetRows.reduce((sum, row) => {
    const include = row.item["en"] !== "Deposit";
    return include ? sum + row.krw : sum;
  }, 0);

  const summaryItems = [
    { label: { "zh-Hant": "韓服總價", en: "Hanbok total", ko: "Hanbok total" }, krw: 940000 },
    { label: { "zh-Hant": "現場補款", en: "Remaining balance", ko: "Remaining balance" }, krw: 880000 },
    { label: { "zh-Hant": "飯店", en: "Hotel", ko: "Hotel" }, krw: 19247 * rates.TWD.krwPerUnit },
    { label: { "zh-Hant": "彈性預算", en: "Food + shopping", ko: "Food + shopping" }, krw: 610000 },
  ];

  document.getElementById("budgetSummary").innerHTML = summaryItems
    .map(
      (item) => `
        <article class="budget-summary-card">
          <div class="budget-summary-label">${getText(item.label)}</div>
          <div class="budget-summary-value">${formatCurrency(item.krw)}</div>
          <div class="budget-original">${formatCurrency(item.krw, "KRW")}</div>
        </article>
      `
    )
    .join("");

  document.getElementById("budgetTotal").innerHTML = `
    <article class="budget-total-card">
      <div class="budget-summary-label">${t[state.lang].budgetTotalTitle}</div>
      <div class="budget-total-value">${formatCurrency(totalKrw)}</div>
      <div class="budget-original">${formatCurrency(totalKrw, "KRW")}</div>
    </article>
  `;

  document.getElementById("budgetRows").innerHTML = data.budgetRows
    .map(
      (row) => `
        <tr>
          <td data-label="${t[state.lang].budgetTableItem}"><strong>${getText(row.item)}</strong></td>
          <td class="budget-main-col" data-label="${t[state.lang].budgetTableMain}">
            <div class="budget-amount-main">${formatCurrency(row.krw)}</div>
            <div class="budget-amount-original">${row.original}</div>
          </td>
          <td data-label="KRW">
            <div class="budget-amount-main">${formatCurrency(row.krw, "KRW")}</div>
            <div class="budget-amount-original">${row.original}</div>
          </td>
          <td data-label="TWD">
            <div class="budget-amount-main">${formatCurrency(row.krw, "TWD")}</div>
            <div class="budget-amount-original">${formatCurrency(row.krw, "KRW")}</div>
          </td>
          <td data-label="CNY">
            <div class="budget-amount-main">${formatCurrency(row.krw, "CNY")}</div>
            <div class="budget-amount-original">${formatCurrency(row.krw, "KRW")}</div>
          </td>
          <td data-label="${t[state.lang].budgetTableNote}">${getText(row.note)}</td>
        </tr>
      `
    )
    .join("");
}

function renderItinerary() {
  document.getElementById("itineraryList").innerHTML = data.itinerary
    .map(
      (item, index) => `
        <details class="itinerary-card" ${item.open ? "open" : ""}>
          <summary class="accordion-summary">
            <div class="accordion-topline">
              <span class="day-chip">${item.day}</span>
              <span class="date-label">${item.date}</span>
            </div>
            <h3>${getText(item.plan)}</h3>
          </summary>
          <div class="accordion-body">
            <div class="itinerary-meta-grid">
              <div class="itinerary-meta-card">
                <div class="itinerary-meta-label">${t[state.lang].locationLabel}</div>
                <div class="itinerary-meta-value">${getText(item.location)}</div>
              </div>
              <div class="itinerary-meta-card">
                <div class="itinerary-meta-label">${t[state.lang].estimatedCostLabel}</div>
                <div class="itinerary-meta-value">${formatCurrency(item.costKrw)}</div>
              </div>
              <div class="itinerary-meta-card">
                <div class="itinerary-meta-label">${t[state.lang].transportLabel}</div>
                <div class="itinerary-meta-value">${getText(item.transport)}</div>
              </div>
              <div class="itinerary-meta-card">
                <div class="itinerary-meta-label">${t[state.lang].reminderLabel}</div>
                <div class="itinerary-meta-value">${getText(item.reminder)}</div>
              </div>
            </div>
          </div>
        </details>
      `
    )
    .join("");
}

function renderChecklist() {
  const checklistState = getChecklistState();
  document.getElementById("checklistGroups").innerHTML = data.checklistGroups
    .map((group) => {
      const completed = group.items.filter((item) => checklistState[item.id]).length;
      return `
        <article class="glass-card checklist-group-card">
          <div class="checklist-group-top">
            <div>
              <h3>${getText(group.title)}</h3>
              <div class="checklist-progress">${completed} / ${group.items.length} ${t[state.lang].checklistProgress}</div>
            </div>
            <span class="progress-pill">${Math.round((completed / group.items.length) * 100)}%</span>
          </div>
          <div class="checklist-list">
            ${group.items
              .map(
                (item) => `
                  <article class="checklist-card">
                    <label class="check-toggle">
                      <input class="check-input" type="checkbox" data-check="${item.id}" ${checklistState[item.id] ? "checked" : ""} />
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
  document.getElementById("linksGrid").innerHTML = data.usefulLinks
    .map(
      (group) => `
        <article class="glass-card link-card">
          <h3>${getText(group.title)}</h3>
          <p class="card-intro">${getText(group.desc)}</p>
          <div class="link-list">
            ${group.links
              .map(
                (link) => `
                  <div class="link-row">
                    <span class="link-row-label">${getText(link.label)}</span>
                    <a class="link-button" href="${link.href}" target="_blank" rel="noreferrer">${t[state.lang].openLink}</a>
                  </div>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderAll() {
  renderI18n();
  renderHero();
  renderTodayFocus();
  renderOverview();
  renderHotel();
  renderHanbok();
  renderRoutes();
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
      bindChecklistInteractions();
    });
  });
  document.querySelectorAll("[data-currency]").forEach((button) => {
    button.addEventListener("click", () => {
      state.currency = button.dataset.currency;
      localStorage.setItem(STORAGE_KEYS.currency, state.currency);
      syncControls();
      renderBudget();
      renderHotel();
    });
  });
}

function bindChecklistInteractions() {
  document.querySelectorAll("[data-check]").forEach((input) => {
    input.addEventListener("change", () => {
      const next = getChecklistState();
      next[input.dataset.check] = input.checked;
      setChecklistState(next);
      renderChecklist();
      bindChecklistInteractions();
    });
  });
}

function bindNavSpy() {
  const links = [...document.querySelectorAll("[data-nav]")];
  const mobileLinks = [...document.querySelectorAll("[data-mobile-nav]")];
  const sections = [...document.querySelectorAll(".section-block")];

  const activate = () => {
    const currentPoint = window.scrollY + 160;
    let current = sections[0]?.id || "";
    sections.forEach((section) => {
      if (section.offsetTop <= currentPoint) current = section.id;
    });
    links.forEach((link) => link.classList.toggle("active", link.dataset.nav === current));
    mobileLinks.forEach((link) => link.classList.toggle("active", link.dataset.mobileNav === current));
  };

  activate();
  window.addEventListener("scroll", activate, { passive: true });
  window.addEventListener("resize", activate);
}

function bindTodayFab() {
  const button = document.getElementById("todayFab");
  button.addEventListener("click", () => {
    const target = button.dataset.target || "checklist";
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function bindImageModal() {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const closeButton = document.getElementById("modalClose");

  document.querySelectorAll(".gallery-trigger").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
      const captionKey = button.dataset.captionKey;
      modalImage.src = button.dataset.image;
      modalImage.alt = image?.alt || "";
      modalCaption.textContent = captionKey ? t[state.lang][captionKey] || "" : "";
      modal.showModal();
    });
  });

  closeButton.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => {
    const dialogRect = modal.getBoundingClientRect();
    const isInDialog =
      dialogRect.top <= event.clientY &&
      event.clientY <= dialogRect.top + dialogRect.height &&
      dialogRect.left <= event.clientX &&
      event.clientX <= dialogRect.left + dialogRect.width;
    if (!isInDialog) modal.close();
  });
}

function bindProgress() {
  const progress = document.getElementById("pageProgress");
  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.width = `${Math.min(Math.max(ratio, 0), 100)}%`;
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

renderAll();
bindControls();
bindChecklistInteractions();
bindNavSpy();
bindTodayFab();
bindImageModal();
bindProgress();
