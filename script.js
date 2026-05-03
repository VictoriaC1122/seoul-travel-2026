const STORAGE_KEYS = {
  lang: "seoul-handbook-lang",
  currency: "seoul-handbook-currency",
  checklist: "seoul-handbook-checklist-v3",
};

const state = {
  lang: localStorage.getItem(STORAGE_KEYS.lang) || "zh-Hant",
  currency: localStorage.getItem(STORAGE_KEYS.currency) || "TWD",
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
    heroTitle: "Seoul Travel 2026",
    heroSubtitle: "May 2026 · Seoul · Hanbok Shooting · Hotel · Budget",
    navOverview: "總覽",
    navHotel: "住宿",
    navHanbok: "韓服",
    navRoute: "路線",
    navBudget: "預算",
    navChecklist: "清單",
    overviewKicker: "Overview",
    overviewTitle: "Overview",
    overviewSnapshotTitle: "Trip snapshot",
    overviewAlertsTitle: "Important alerts",
    overviewFlightTitle: "Flights and support",
    overviewItineraryTitle: "Daily itinerary",
    hotelKicker: "Hotel",
    hotelTitle: "Hotel",
    hotelGalleryTitle: "Hotel photos",
    hotelExteriorCaption: "飯店外觀",
    hotelRoomCaption: "高級雙床房",
    hanbokKicker: "Hanbok",
    hanbokTitle: "Hanbok",
    hanbokRulesTitle: "Shooting notes",
    hanbokReferenceTitle: "Reference photos",
    hanbokCaptionOne: "霧藍韓服參考",
    hanbokCaptionTwo: "景福宮白色韓服參考",
    hanbokCaptionThree: "宮殿石階參考",
    hanbokCaptionFour: "走廊肖像參考",
    instructionsCaption: "店家拍攝規則",
    routeKicker: "Route",
    routeTitle: "Route",
    routeStepsTitle: "Route steps",
    routeTimelineTitle: "Suggested timing",
    routeOptionsTitle: "Route cards",
    subwayMapTitle: "Subway map",
    subwayCaption: "首爾地鐵官方路線圖",
    budgetKicker: "Budget",
    budgetTitle: "Budget",
    budgetSummaryTitle: "Budget summary",
    budgetBreakdownTitle: "Simple breakdown",
    totalTripCostLabel: "總花費預估",
    perPersonCostLabel: "每人預估",
    paidSoFarLabel: "目前已付",
    remainingTripBudgetLabel: "後續還需準備",
    totalTripCostNote: "含韓服、飯店、交通、餐食、購物",
    perPersonCostNote: "以兩人平均分攤估算",
    paidSoFarNote: "目前已知訂金",
    remainingTripBudgetNote: "扣除訂金後的其餘預算",
    checklistKicker: "Checklist",
    checklistTitle: "Checklist",
    linksTitle: "Useful links",
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
    mapsLabel: "Google Maps",
    openLink: "開啟",
  },
  en: {
    languageSwitcher: "Language",
    currencySwitcher: "Currency",
    heroTitle: "Seoul Travel 2026",
    heroSubtitle: "May 2026 · Seoul · Hanbok Shooting · Hotel · Budget",
    navOverview: "Overview",
    navHotel: "Hotel",
    navHanbok: "Hanbok",
    navRoute: "Route",
    navBudget: "Budget",
    navChecklist: "Checklist",
    overviewKicker: "Overview",
    overviewTitle: "Overview",
    overviewSnapshotTitle: "Trip snapshot",
    overviewAlertsTitle: "Important alerts",
    overviewFlightTitle: "Flights and support",
    overviewItineraryTitle: "Daily itinerary",
    hotelKicker: "Hotel",
    hotelTitle: "Hotel",
    hotelGalleryTitle: "Hotel photos",
    hotelExteriorCaption: "Hotel exterior",
    hotelRoomCaption: "Deluxe twin room",
    hanbokKicker: "Hanbok",
    hanbokTitle: "Hanbok",
    hanbokRulesTitle: "Shooting notes",
    hanbokReferenceTitle: "Reference photos",
    hanbokCaptionOne: "Blue hanbok reference",
    hanbokCaptionTwo: "White hanbok at Gyeongbokgung",
    hanbokCaptionThree: "Palace stairs reference",
    hanbokCaptionFour: "Corridor portrait reference",
    instructionsCaption: "Store shooting instructions",
    routeKicker: "Route",
    routeTitle: "Route",
    routeStepsTitle: "Route steps",
    routeTimelineTitle: "Suggested timing",
    routeOptionsTitle: "Route cards",
    subwayMapTitle: "Subway map",
    subwayCaption: "Official Seoul Metro map",
    budgetKicker: "Budget",
    budgetTitle: "Budget",
    budgetSummaryTitle: "Budget summary",
    budgetBreakdownTitle: "Simple breakdown",
    totalTripCostLabel: "Estimated total",
    perPersonCostLabel: "Estimated per person",
    paidSoFarLabel: "Paid so far",
    remainingTripBudgetLabel: "Still to prepare",
    totalTripCostNote: "Includes hanbok, hotel, transport, food, and shopping",
    perPersonCostNote: "Split evenly for two people",
    paidSoFarNote: "Known deposit already paid",
    remainingTripBudgetNote: "Remaining trip budget after deposit",
    checklistKicker: "Checklist",
    checklistTitle: "Checklist",
    linksTitle: "Useful links",
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
    heroTitle: "Seoul Travel 2026",
    heroSubtitle: "May 2026 · Seoul · Hanbok Shooting · Hotel · Budget",
    navOverview: "개요",
    navHotel: "호텔",
    navHanbok: "한복",
    navRoute: "루트",
    navBudget: "예산",
    navChecklist: "체크",
    overviewKicker: "Overview",
    overviewTitle: "Overview",
    overviewSnapshotTitle: "Trip snapshot",
    overviewAlertsTitle: "Important alerts",
    overviewFlightTitle: "Flights and support",
    overviewItineraryTitle: "Daily itinerary",
    hotelKicker: "Hotel",
    hotelTitle: "Hotel",
    hotelGalleryTitle: "Hotel photos",
    hotelExteriorCaption: "호텔 외관",
    hotelRoomCaption: "디럭스 트윈룸",
    hanbokKicker: "Hanbok",
    hanbokTitle: "Hanbok",
    hanbokRulesTitle: "Shooting notes",
    hanbokReferenceTitle: "Reference photos",
    hanbokCaptionOne: "블루 한복 레퍼런스",
    hanbokCaptionTwo: "경복궁 화이트 한복 레퍼런스",
    hanbokCaptionThree: "궁전 계단 레퍼런스",
    hanbokCaptionFour: "복도 초상 레퍼런스",
    instructionsCaption: "매장 촬영 안내",
    routeKicker: "Route",
    routeTitle: "Route",
    routeStepsTitle: "Route steps",
    routeTimelineTitle: "Suggested timing",
    routeOptionsTitle: "Route cards",
    subwayMapTitle: "Subway map",
    subwayCaption: "서울 메트로 공식 노선도",
    budgetKicker: "Budget",
    budgetTitle: "Budget",
    budgetSummaryTitle: "Budget summary",
    budgetBreakdownTitle: "Simple breakdown",
    totalTripCostLabel: "총 예상 비용",
    perPersonCostLabel: "1인 예상 비용",
    paidSoFarLabel: "현재까지 결제",
    remainingTripBudgetLabel: "추가로 준비할 금액",
    totalTripCostNote: "한복, 호텔, 교통, 식비, 쇼핑 포함",
    perPersonCostNote: "2인 균등 분담 기준",
    paidSoFarNote: "현재 확인된 예약금",
    remainingTripBudgetNote: "예약금을 제외한 나머지 예산",
    checklistKicker: "Checklist",
    checklistTitle: "Checklist",
    linksTitle: "Useful links",
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
    mapsLabel: "Google Maps",
    openLink: "열기",
  },
};

const data = {
  heroSummary: [
    { label: { "zh-Hant": "Hotel", en: "Hotel", ko: "Hotel" }, value: { "zh-Hant": "Local Stitch Creator Town Seogyo", en: "Local Stitch Creator Town Seogyo", ko: "Local Stitch Creator Town Seogyo" } },
    { label: { "zh-Hant": "Hanbok time", en: "Hanbok time", ko: "Hanbok time" }, value: { "zh-Hant": "May 19, 14:00", en: "May 19, 14:00", ko: "May 19, 14:00" } },
    { label: { "zh-Hant": "Total cost", en: "Total cost", ko: "Total cost" }, value: { "zh-Hant": "940,000 KRW", en: "940,000 KRW", ko: "940,000 KRW" } },
    { label: { "zh-Hant": "Deposit", en: "Deposit", ko: "Deposit" }, value: { "zh-Hant": "300 CNY", en: "300 CNY", ko: "300 CNY" } },
    { label: { "zh-Hant": "Remaining", en: "Remaining", ko: "Remaining" }, value: { "zh-Hant": "about 880,000 KRW", en: "about 880,000 KRW", ko: "about 880,000 KRW" } },
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
  flights: [
    { label: { "zh-Hant": "去程", en: "Outbound", ko: "출국" }, route: "TPE → ICN", date: "2026-05-15", time: "15:30 - 19:05", cabin: { "zh-Hant": "經濟艙基本", en: "Economy Basic", ko: "이코노미 베이직" } },
    { label: { "zh-Hant": "回程", en: "Return", ko: "귀국" }, route: "ICN → TPE", date: "2026-05-20", time: "20:05 - 21:50", cabin: { "zh-Hant": "經濟艙基本", en: "Economy Basic", ko: "이코노미 베이직" } },
  ],
  hotel: {
    title: { "zh-Hant": "Local Stitch Creator Town Seogyo（洛卡斯提奇創作者小鎮西橋店）", en: "Local Stitch Creator Town Seogyo", ko: "Local Stitch Creator Town Seogyo" },
    subtitle: { "zh-Hant": "高級雙床房 · 5 晚 · 2 人", en: "Deluxe Twin Room · 5 nights · 2 guests", ko: "디럭스 트윈룸 · 5박 · 2인" },
    chips: ["Hongdae", "5 nights", "2 guests", "Deluxe Twin"],
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
    { label: { "zh-Hant": "Step 1", en: "Step 1", ko: "Step 1" }, title: { "zh-Hant": "Hotel", en: "Hotel", ko: "Hotel" }, desc: { "zh-Hant": "Local Stitch Creator Town Seogyo", en: "Local Stitch Creator Town Seogyo", ko: "Local Stitch Creator Town Seogyo" } },
    { label: { "zh-Hant": "Step 2", en: "Step 2", ko: "Step 2" }, title: { "zh-Hant": "Station", en: "Station", ko: "Station" }, desc: { "zh-Hant": "弘大入口站", en: "Hongik Univ. Station", ko: "홍대입구역" } },
    { label: { "zh-Hant": "Step 3", en: "Step 3", ko: "Step 3" }, title: { "zh-Hant": "Bukchon", en: "Bukchon", ko: "Bukchon" }, desc: { "zh-Hant": "安國站 2 號出口附近", en: "Near Anguk Station Exit 2", ko: "안국역 2번 출구 근처" } },
    { label: { "zh-Hant": "Step 4", en: "Step 4", ko: "Step 4" }, title: { "zh-Hant": "Hanbok shop", en: "Hanbok shop", ko: "Hanbok shop" }, desc: { "zh-Hant": "옥한복", en: "Ok Hanbok", ko: "옥한복" } },
  ],
  routeTimeline: [
    { time: "13:00", title: { "zh-Hant": "從飯店出發", en: "Leave hotel", ko: "호텔 출발" }, desc: { "zh-Hant": "最穩的出發時間。", en: "Safest departure time.", ko: "가장 안전한 출발 시간." } },
    { time: "13:40", title: { "zh-Hant": "抵達附近", en: "Arrive nearby", ko: "근처 도착" }, desc: { "zh-Hant": "預留找路時間。", en: "Keep buffer for finding the place.", ko: "길 찾기 버퍼 확보." } },
    { time: "14:00", title: { "zh-Hant": "韓服預約", en: "Hanbok appointment", ko: "한복 예약" }, desc: { "zh-Hant": "準時到店。", en: "Be on time at the shop.", ko: "정시에 도착." } },
    { time: "After", title: { "zh-Hant": "晚餐 / 備份照片", en: "Dinner / back up photos", ko: "저녁 / 사진 백업" }, desc: { "zh-Hant": "拍完先吃飯，再備份手機照片。", en: "Dinner first, then back up phone photos.", ko: "식사 후 휴대폰 사진 백업." } },
  ],
  routeCards: [
    { title: { "zh-Hant": "Subway", en: "Subway", ko: "Subway" }, start: { "zh-Hant": "飯店", en: "Hotel", ko: "Hotel" }, destination: { "zh-Hant": "安國 / 北村", en: "Anguk / Bukchon", ko: "안국 / 북촌" }, duration: { "zh-Hant": "35-45 分鐘", en: "35-45 min", ko: "35-45분" }, cost: { "zh-Hant": "低成本", en: "Low cost", ko: "저비용" }, useCase: { "zh-Hant": "最穩", en: "Most stable", ko: "가장 안정적" }, desc: { "zh-Hant": "弘大入口站 → 2 號線 → 乙支路 3 街 → 3 號線 → 安國站。", en: "Hongik Univ. Station → Line 2 → Euljiro 3-ga → Line 3 → Anguk.", ko: "홍대입구역 → 2호선 → 을지로3가 → 3호선 → 안국역." }, href: "https://www.google.com/maps/search/%EC%98%A5%ED%95%9C%EB%B3%B5/" },
    { title: { "zh-Hant": "Taxi", en: "Taxi", ko: "Taxi" }, start: { "zh-Hant": "飯店", en: "Hotel", ko: "Hotel" }, destination: { "zh-Hant": "韓服店", en: "Hanbok shop", ko: "한복 매장" }, duration: { "zh-Hant": "20-25 分鐘", en: "20-25 min", ko: "20-25분" }, cost: { "zh-Hant": "₩8,000-12,000", en: "₩8,000-12,000", ko: "₩8,000-12,000" }, useCase: { "zh-Hant": "怕迷路", en: "Best if you want less stress", ko: "길 찾기 스트레스 줄일 때" }, desc: { "zh-Hant": "最直接，最省腦。", en: "The easiest option with the least thinking.", ko: "가장 직접적이고 편한 선택." }, href: "https://www.google.com/maps/search/%EC%98%A5%ED%95%9C%EB%B3%B5/" },
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
    { day: "Day 1", date: "2026-05-15", plan: { "zh-Hant": "抵達首爾、飯店 check-in", en: "Arrive in Seoul and check in", ko: "서울 도착 후 체크인" }, location: { "zh-Hant": "仁川機場 → 弘大", en: "Incheon → Hongdae", ko: "인천공항 → 홍대" }, costKrw: 30000, transport: { "zh-Hant": "AREX / 巴士 / 計程車", en: "AREX / bus / taxi", ko: "AREX / 버스 / 택시" }, reminder: { "zh-Hant": "第一天不要排太滿。", en: "Do not overpack the first day.", ko: "첫날은 무리하지 않기." }, open: true },
    { day: "Day 2", date: "2026-05-16", plan: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" }, location: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" }, costKrw: 60000, transport: { "zh-Hant": "依當天調整", en: "Adjust later", ko: "당일 조정" }, reminder: { "zh-Hant": "保留彈性。", en: "Keep it flexible.", ko: "유동적으로 두기." } },
    { day: "Day 3", date: "2026-05-17", plan: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" }, location: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" }, costKrw: 60000, transport: { "zh-Hant": "依當天調整", en: "Adjust later", ko: "당일 조정" }, reminder: { "zh-Hant": "保留彈性。", en: "Keep it flexible.", ko: "유동적으로 두기." } },
    { day: "Day 4", date: "2026-05-18", plan: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" }, location: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" }, costKrw: 60000, transport: { "zh-Hant": "依當天調整", en: "Adjust later", ko: "당일 조정" }, reminder: { "zh-Hant": "晚上整理拍攝用品。", en: "Prep for the shoot in the evening.", ko: "저녁에 촬영 준비물 정리." } },
    { day: "Day 5", date: "2026-05-19", plan: { "zh-Hant": "景福宮 + 北村 + 韓服拍攝", en: "Gyeongbokgung + Bukchon + Hanbok", ko: "경복궁 + 북촌 + 한복" }, location: { "zh-Hant": "安國 / 北村", en: "Anguk / Bukchon", ko: "안국 / 북촌" }, costKrw: 940000, transport: { "zh-Hant": "13:00 前從飯店出發", en: "Leave hotel before 13:00", ko: "13:00 전 호텔 출발" }, reminder: { "zh-Hant": "今天最重要的是準時與備份照片。", en: "Being on time and backing up photos are the priorities.", ko: "정시 도착과 사진 백업이 핵심." }, open: true },
    { day: "Day 6", date: "2026-05-20", plan: { "zh-Hant": "退房、最後採買、前往機場", en: "Check out and go to the airport", ko: "체크아웃 후 공항 이동" }, location: { "zh-Hant": "弘大 → 仁川機場", en: "Hongdae → Incheon", ko: "홍대 → 인천공항" }, costKrw: 40000, transport: { "zh-Hant": "AREX / 巴士 / 計程車", en: "AREX / bus / taxi", ko: "AREX / 버스 / 택시" }, reminder: { "zh-Hant": "不要太晚整理行李。", en: "Do not leave packing too late.", ko: "짐 정리를 너무 늦게 하지 않기." } },
  ],
  checklistGroups: [
    { id: "before", title: { "zh-Hant": "Before departure", en: "Before departure", ko: "Before departure" }, items: [
      { id: "passport", title: { "zh-Hant": "護照", en: "Passport", ko: "Passport" }, desc: { "zh-Hant": "確認效期與放置位置。", en: "Check validity and where it is packed.", ko: "유효기간과 보관 위치 확인." } },
      { id: "esim", title: { "zh-Hant": "eSIM / 漫遊", en: "eSIM / roaming", ko: "eSIM / roaming" }, desc: { "zh-Hant": "抵達後能立刻上網。", en: "Make sure data works on arrival.", ko: "도착 직후 데이터 사용 가능." } },
      { id: "powerbank", title: { "zh-Hant": "行動電源", en: "Power bank", ko: "Power bank" }, desc: { "zh-Hant": "導航和拍照很耗電。", en: "Navigation and photos drain battery.", ko: "지도와 사진으로 배터리 소모 큼." } },
    ]},
    { id: "hanbok", title: { "zh-Hant": "Hanbok shooting day", en: "Hanbok shooting day", ko: "Hanbok shooting day" }, items: [
      { id: "makeup", title: { "zh-Hant": "補妝 / 整髮用品", en: "Makeup touch-up items", ko: "Makeup touch-up items" }, desc: { "zh-Hant": "不要臨時找東西。", en: "Keep them ready in advance.", ko: "미리 챙겨 두기." } },
      { id: "original-count", title: { "zh-Hant": "確認 200 張原片", en: "Confirm 200 originals", ko: "Confirm 200 originals" }, desc: { "zh-Hant": "拍攝前後都再確認。", en: "Reconfirm before and after the shoot.", ko: "촬영 전후 모두 확인." } },
      { id: "retouch-count", title: { "zh-Hant": "確認 12 張精修", en: "Confirm 12 retouched", ko: "Confirm 12 retouched" }, desc: { "zh-Hant": "口頭再確認一次。", en: "Verbal reconfirmation helps.", ko: "구두 재확인." } },
      { id: "mv-addon", title: { "zh-Hant": "確認 MV 加購", en: "Confirm MV add-on", ko: "Confirm MV add-on" }, desc: { "zh-Hant": "確認列入最終方案。", en: "Make sure it is in the final plan.", ko: "최종 플랜 포함 여부 확인." } },
    ]},
    { id: "payment", title: { "zh-Hant": "Payment", en: "Payment", ko: "Payment" }, items: [
      { id: "credit-card", title: { "zh-Hant": "信用卡", en: "Credit card", ko: "Credit card" }, desc: { "zh-Hant": "確認海外刷卡。", en: "Confirm overseas use.", ko: "해외 결제 확인." } },
      { id: "krw-cash", title: { "zh-Hant": "韓元現金", en: "KRW cash", ko: "KRW cash" }, desc: { "zh-Hant": "刷卡加價時更穩。", en: "Safer if card surcharge happens.", ko: "카드 추가요금 대비." } },
      { id: "deposit-record", title: { "zh-Hant": "300 CNY 訂金紀錄", en: "300 CNY deposit record", ko: "300 CNY deposit record" }, desc: { "zh-Hant": "現場對帳用。", en: "Helpful for reconciling on site.", ko: "현장 대조용." } },
      { id: "surcharge", title: { "zh-Hant": "確認刷卡 10%", en: "Confirm 10% card surcharge", ko: "Confirm 10% card surcharge" }, desc: { "zh-Hant": "付款前先問清楚。", en: "Ask before the final payment.", ko: "최종 결제 전 확인." } },
    ]},
    { id: "after", title: { "zh-Hant": "After shooting", en: "After shooting", ko: "After shooting" }, items: [
      { id: "backup-photos", title: { "zh-Hant": "先備份照片", en: "Back up photos", ko: "사진 백업" }, desc: { "zh-Hant": "手機拍攝素材先備份。", en: "Back up phone photos early.", ko: "휴대폰 사진 먼저 백업." } },
    ]},
  ],
  usefulLinks: [
    { title: { "zh-Hant": "Stay & Route", en: "Stay & Route", ko: "Stay & Route" }, links: [
      { label: { "zh-Hant": "Agoda 飯店頁", en: "Agoda hotel page", ko: "Agoda hotel page" }, href: "https://www.agoda.com/zh-tw/localstitch-seogyo-town/hotel/seoul-kr.html?checkIn=2026-05-15&los=5&adults=2&rooms=1&travellerType=1&ds=qgMT%2Bi%2FlTw7Mxwmp" },
      { label: { "zh-Hant": "韓服店 Google Maps", en: "Hanbok shop Google Maps", ko: "Hanbok shop Google Maps" }, href: "https://www.google.com/maps/search/%EC%98%A5%ED%95%9C%EB%B3%B5/" },
    ]},
    { title: { "zh-Hant": "Hanbok & Media", en: "Hanbok & Media", ko: "Hanbok & Media" }, links: [
      { label: { "zh-Hant": "工作室頁面", en: "Studio profile", ko: "Studio profile" }, href: "http://xhslink.com/o/1yRuTcW00pc" },
      { label: { "zh-Hant": "MV 範例", en: "MV sample", ko: "MV sample" }, href: "http://xhslink.com/o/15TW7yFNm7q" },
    ]},
    { title: { "zh-Hant": "Money & Membership", en: "Money & Membership", ko: "Money & Membership" }, links: [
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

function renderI18n() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (t[state.lang][key]) node.textContent = t[state.lang][key];
  });
}

function renderHero() {
  document.getElementById("heroSummary").innerHTML = data.heroSummary
    .map((item) => `<article class="summary-card"><div class="summary-label">${getText(item.label)}</div><div class="summary-value">${getText(item.value)}</div></article>`)
    .join("");
}

function renderOverview() {
  document.getElementById("overviewStats").innerHTML = data.overviewStats
    .map((item) => `<article class="mini-stat-card"><div class="mini-stat-label">${getText(item.label)}</div><div class="mini-stat-value">${getText(item.value)}</div></article>`)
    .join("");
  document.getElementById("importantAlerts").innerHTML = data.importantAlerts
    .map((item) => `<article class="bullet-card"><div class="bullet-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.desc)}</div></article>`)
    .join("");
  document.getElementById("flightCards").innerHTML = data.flights
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
  document.getElementById("itineraryList").innerHTML = data.itinerary
    .map(
      (item) => `
        <details class="itinerary-card" ${item.open ? "open" : ""}>
          <summary class="accordion-summary">
            <div class="accordion-topline"><span class="day-chip">${item.day}</span><span class="date-label">${item.date}</span></div>
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
  document.getElementById("hotelCard").innerHTML = `
    <h3>${getText(hotel.title)}</h3>
    <p class="card-intro">${getText(hotel.subtitle)}</p>
    <div class="hotel-pill-row">${hotel.chips.map((chip) => `<span class="pill">${chip}</span>`).join("")}</div>
    <div class="price-stack">
      ${hotel.notes.map((item) => `<div class="price-row"><div class="price-label">${getText(item.title)}</div><div class="price-value">${formatCurrency(item.krw)}</div><div class="budget-original">${formatCurrency(item.krw, "KRW")}</div></div>`).join("")}
    </div>
    <div class="bullet-stack">${hotel.copy.map((item) => `<article class="bullet-card"><div class="bullet-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.desc)}</div></article>`).join("")}</div>
    <div class="route-actions"><a class="action-link" href="${hotel.href}" target="_blank" rel="noreferrer">Agoda</a></div>
  `;
}

function renderHanbok() {
  document.getElementById("hanbokPlanCard").innerHTML = `
    <h3>${t[state.lang].reservedPlanTitle}</h3>
    <div class="price-stack">
      <div class="price-row"><div class="price-label">${t[state.lang].packageText}</div><div class="price-value">640,000 KRW</div></div>
      <div class="price-row"><div class="price-label">${t[state.lang].addonText}</div><div class="price-value">300,000 KRW</div></div>
      <div class="price-row"><div class="price-label">${t[state.lang].totalText}</div><div class="price-value">940,000 KRW</div></div>
      <div class="price-row"><div class="price-label">${t[state.lang].depositText}</div><div class="price-value">300 CNY</div></div>
    </div>
    <div class="include-chip-row">${data.hanbok.includes.map((item) => `<span class="include-chip">${getText(item)}</span>`).join("")}</div>
    <div class="warning-chip-row"><span class="warning-chip">${t[state.lang].surchargeText}</span><span class="warning-chip">${t[state.lang].cashText}</span></div>
  `;
  document.getElementById("hanbokRules").innerHTML = data.hanbok.rules
    .map((item) => `<article class="bullet-card"><div class="bullet-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.desc)}</div></article>`)
    .join("");
}

function renderRoute() {
  document.getElementById("routeSteps").innerHTML = data.routeSteps
    .map((item) => `<article class="step-card"><div class="step-label">${getText(item.label)}</div><div class="bullet-title">${getText(item.title)}</div><div class="bullet-desc">${getText(item.desc)}</div></article>`)
    .join("");
  document.getElementById("routeTimeline").innerHTML = data.routeTimeline
    .map((item) => `<article class="timeline-card"><div class="timeline-time">${item.time}</div><div><div class="bullet-title">${getText(item.title)}</div><div class="timeline-desc">${getText(item.desc)}</div></div></article>`)
    .join("");
  document.getElementById("routeCards").innerHTML = data.routeCards
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
  const totalTripKrw = 940000 + 19247 * rates.TWD.krwPerUnit + 120000 + 360000 + 250000;
  const perPersonKrw = totalTripKrw / 2;
  const paidSoFarKrw = 300 * rates.CNY.krwPerUnit;
  const remainingTripKrw = totalTripKrw - paidSoFarKrw;

  document.getElementById("budgetHighlights").innerHTML = [
    { label: t[state.lang].totalTripCostLabel, value: totalTripKrw, note: t[state.lang].totalTripCostNote },
    { label: t[state.lang].perPersonCostLabel, value: perPersonKrw, note: t[state.lang].perPersonCostNote },
    { label: t[state.lang].paidSoFarLabel, value: paidSoFarKrw, note: t[state.lang].paidSoFarNote },
    { label: t[state.lang].remainingTripBudgetLabel, value: remainingTripKrw, note: t[state.lang].remainingTripBudgetNote },
  ]
    .map(
      (item) => `
        <article class="bullet-card budget-highlight-item">
          <div class="bullet-title">${item.label}</div>
          <div class="budget-main">${formatCurrency(item.value)}</div>
          <div class="budget-original">${formatCurrency(item.value, "KRW")} · ${item.note}</div>
        </article>
      `
    )
    .join("");

  document.getElementById("budgetSummary").innerHTML = data.budgetSummary
    .map((item) => `<article class="budget-summary-card"><div class="budget-summary-label">${getText(item.label)}</div><div class="budget-summary-value">${formatCurrency(item.krw)}</div><div class="budget-original">${formatCurrency(item.krw, "KRW")}</div></article>`)
    .join("");
  document.getElementById("budgetCards").innerHTML = data.budgetRows
    .map(
      (item) => `
        <article class="budget-card">
          <div class="budget-summary-label">${getText(item.item)}</div>
          <div class="budget-main">${formatCurrency(item.krw)}</div>
          <div class="budget-original">${item.original} · ${getText(item.note)}</div>
        </article>
      `
    )
    .join("");
}

function renderChecklist() {
  const saved = checklistState();
  document.getElementById("checklistGroups").innerHTML = data.checklistGroups
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
  document.getElementById("linksGrid").innerHTML = data.usefulLinks
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
  renderOverview();
  renderHotel();
  renderHanbok();
  renderRoute();
  renderBudget();
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

function bindNavSpy() {
  const desktopLinks = [...document.querySelectorAll("[data-nav]")];
  const mobileLinks = [...document.querySelectorAll("[data-mobile-nav]")];
  const sections = [...document.querySelectorAll(".section-block")];
  const activate = () => {
    const marker = window.scrollY + 140;
    let current = sections[0]?.id || "";
    sections.forEach((section) => {
      if (section.offsetTop <= marker) current = section.id;
    });
    desktopLinks.forEach((link) => link.classList.toggle("active", link.dataset.nav === current));
    mobileLinks.forEach((link) => link.classList.toggle("active", link.dataset.mobileNav === current));
  };
  activate();
  window.addEventListener("scroll", activate, { passive: true });
  window.addEventListener("resize", activate);
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
bindNavSpy();
bindImageModal();
bindProgress();
