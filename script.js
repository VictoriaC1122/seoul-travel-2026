const state = {
  lang: localStorage.getItem("seoul-handbook-lang") || "zh-Hant",
  currency: localStorage.getItem("seoul-handbook-currency") || "TWD",
};

const rates = {
  KRW: { symbol: "₩", krwPerUnit: 1, decimals: 0 },
  TWD: { symbol: "NT$", krwPerUnit: 41.8, decimals: 0 },
  CNY: { symbol: "¥", krwPerUnit: 186.5, decimals: 0 },
};

const text = {
  "zh-Hant": {
    languageSwitcher: "語言",
    currencySwitcher: "幣別",
    heroKicker: "Victoria Cheng · Aiden",
    heroTitle: "Seoul Travel Handbook 2026",
    heroSubtitle: "May 2026 · Seoul · Hanbok Shooting · Hotel · Routes · Budget",
    heroBadgeOne: "清楚、可行、可出門直接用",
    heroBadgeTwo: "三語切換 · 三幣別切換",
    navOverview: "總覽",
    navHotel: "住宿",
    navHanbok: "韓服拍攝",
    navTransportation: "交通",
    navBudget: "預算",
    navChecklist: "清單",
    navLinks: "連結",
    overviewEyebrow: "Overview",
    overviewHeading: "Overview",
    overviewLead: "把出發前最常回來查的資訊排在最前面，像航班、飯店、韓服預約、出發時間和付款重點都能一眼看到。",
    snapshotHeading: "Trip Snapshot",
    flightSnapshotHeading: "Flight Snapshot",
    notesHeading: "Important Notes",
    blackCardHeading: "China Airlines Paragon",
    blackCardLead: "只留這趟首爾航班真正可能用得到的黑卡權益，細節還是以華航當下票規與會員頁為準。",
    hotelEyebrow: "Hotel",
    hotelHeading: "Hotel",
    hotelLead: "住在弘大對這趟最省事，晚回去方便，吃飯方便，去安國和景福宮也算順。",
    hotelGalleryHeading: "Hotel Photos",
    hotelExteriorCaption: "飯店外觀",
    hotelRoomCaption: "高級雙床房",
    hanbokEyebrow: "Hanbok Shooting",
    hanbokHeading: "Hanbok Shooting",
    hanbokLead: "這是整趟最重要的預約，費用、訂金、包含內容、當天提醒與樣片都放在同一區。",
    hanbokRulesHeading: "Shooting Notes",
    hanbokReferenceHeading: "Hanbok Reference Photos",
    hanbokCaptionOne: "霧藍韓服參考",
    hanbokCaptionTwo: "景福宮白色韓服參考",
    hanbokCaptionThree: "宮殿石階參考",
    hanbokCaptionFour: "走廊肖像參考",
    instructionsHeading: "Shooting Instructions",
    instructionsCaption: "店家拍攝規則",
    transportEyebrow: "Transportation",
    transportHeading: "Transportation",
    transportLead: "交通區先把 5/19 韓服拍攝當天的動線整理好，從飯店出發、幾點出門、搭地鐵或叫車都能直接看。",
    subwayMapHeading: "Subway Map",
    subwayCaption: "首爾地鐵官方路線圖",
    airportTransferHeading: "Airport and Arrival",
    budgetEyebrow: "Budget",
    budgetHeading: "Budget",
    budgetLead: "目前幣別切換會把選定幣別當成主顯示，但韓國現場付款會一直保留韓元欄位。",
    budgetSummaryHeading: "Budget Summary",
    budgetFocusHeading: "Current Currency Focus",
    budgetTableHeading: "Budget Calculator",
    budgetTableLead: "目前選定幣別會高亮，但韓元金額會一直保留作為現場付款參考。",
    budgetTableItem: "項目",
    budgetTableNote: "備註",
    checklistEyebrow: "Checklist",
    checklistHeading: "Checklist",
    checklistLead: "出發前和拍攝前一定會確認的項目放在這裡，手機上也能直接勾。",
    linksEyebrow: "Useful Links",
    linksHeading: "Useful Links",
    linksLead: "把會反覆打開的訂房頁、匯率、地圖、會員權益和工作室連結收在一起。",
    mapsButton: "Open in Google Maps",
    openLink: "開啟",
  },
  en: {
    languageSwitcher: "Language",
    currencySwitcher: "Currency",
    heroKicker: "Victoria Cheng · Aiden",
    heroTitle: "Seoul Travel Handbook 2026",
    heroSubtitle: "May 2026 · Seoul · Hanbok Shooting · Hotel · Routes · Budget",
    heroBadgeOne: "Clear, practical, and travel-ready",
    heroBadgeTwo: "3 languages · 3 currencies",
    navOverview: "Overview",
    navHotel: "Hotel",
    navHanbok: "Hanbok Shooting",
    navTransportation: "Transportation",
    navBudget: "Budget",
    navChecklist: "Checklist",
    navLinks: "Useful Links",
    overviewEyebrow: "Overview",
    overviewHeading: "Overview",
    overviewLead: "The most frequently checked details come first, so flights, hotel, hanbok booking, departure timing, and payment details are all easy to scan.",
    snapshotHeading: "Trip Snapshot",
    flightSnapshotHeading: "Flight Snapshot",
    notesHeading: "Important Notes",
    blackCardHeading: "China Airlines Paragon",
    blackCardLead: "Only the benefits that are genuinely useful for this Seoul trip are listed here. Final handling still depends on the live fare rules.",
    hotelEyebrow: "Hotel",
    hotelHeading: "Hotel",
    hotelLead: "Hongdae is a practical base for this trip, especially for easy food stops, late returns, and smoother transfers to Anguk or Gyeongbokgung.",
    hotelGalleryHeading: "Hotel Photos",
    hotelExteriorCaption: "Hotel exterior",
    hotelRoomCaption: "Deluxe twin room",
    hanbokEyebrow: "Hanbok Shooting",
    hanbokHeading: "Hanbok Shooting",
    hanbokLead: "This is the key reservation of the trip, so package details, deposit, included services, reminders, and references stay together here.",
    hanbokRulesHeading: "Shooting Notes",
    hanbokReferenceHeading: "Hanbok Reference Photos",
    hanbokCaptionOne: "Blue hanbok reference",
    hanbokCaptionTwo: "White hanbok at the palace",
    hanbokCaptionThree: "Palace stair reference",
    hanbokCaptionFour: "Corridor portrait reference",
    instructionsHeading: "Shooting Instructions",
    instructionsCaption: "Store shooting instructions",
    transportEyebrow: "Transportation",
    transportHeading: "Transportation",
    transportLead: "The transport section is centered on the May 19 hanbok appointment, with departure time, subway steps, and taxi backup all in one place.",
    subwayMapHeading: "Subway Map",
    subwayCaption: "Official Seoul Metro route map",
    airportTransferHeading: "Airport and Arrival",
    budgetEyebrow: "Budget",
    budgetHeading: "Budget",
    budgetLead: "The selected currency becomes the main reading view, while KRW always stays visible for on-site Korean payments.",
    budgetSummaryHeading: "Budget Summary",
    budgetFocusHeading: "Current Currency Focus",
    budgetTableHeading: "Budget Calculator",
    budgetTableLead: "The currently selected currency is highlighted, but original KRW remains visible for payment planning.",
    budgetTableItem: "Item",
    budgetTableNote: "Note",
    checklistEyebrow: "Checklist",
    checklistHeading: "Checklist",
    checklistLead: "These are the items most worth confirming before departure and before the shooting day, especially on mobile.",
    linksEyebrow: "Useful Links",
    linksHeading: "Useful Links",
    linksLead: "Keep the hotel page, exchange rate page, maps, membership benefits, and studio links grouped here for fast reopening.",
    mapsButton: "Open in Google Maps",
    openLink: "Open",
  },
  ko: {
    languageSwitcher: "언어",
    currencySwitcher: "통화",
    heroKicker: "Victoria Cheng · Aiden",
    heroTitle: "Seoul Travel Handbook 2026",
    heroSubtitle: "May 2026 · Seoul · Hanbok Shooting · Hotel · Routes · Budget",
    heroBadgeOne: "깔끔하고 바로 쓰기 쉬운 여행 대시보드",
    heroBadgeTwo: "3개 언어 · 3개 통화",
    navOverview: "개요",
    navHotel: "호텔",
    navHanbok: "한복 촬영",
    navTransportation: "교통",
    navBudget: "예산",
    navChecklist: "체크리스트",
    navLinks: "링크",
    overviewEyebrow: "Overview",
    overviewHeading: "Overview",
    overviewLead: "가장 자주 다시 확인하게 되는 정보부터 앞에 두어서 항공, 호텔, 한복 예약, 출발 시간, 결제 포인트를 한눈에 볼 수 있습니다.",
    snapshotHeading: "Trip Snapshot",
    flightSnapshotHeading: "Flight Snapshot",
    notesHeading: "Important Notes",
    blackCardHeading: "China Airlines Paragon",
    blackCardLead: "이번 서울 여행에서 실제로 유용한 블랙카드 혜택만 골라 정리했습니다. 최종 적용은 실시간 운임 규정을 다시 확인하는 편이 안전합니다.",
    hotelEyebrow: "Hotel",
    hotelHeading: "Hotel",
    hotelLead: "홍대 숙소는 식사와 늦은 귀가가 편하고, 안국이나 경복궁으로 이동하기에도 안정적인 베이스입니다.",
    hotelGalleryHeading: "Hotel Photos",
    hotelExteriorCaption: "호텔 외관",
    hotelRoomCaption: "디럭스 트윈룸",
    hanbokEyebrow: "Hanbok Shooting",
    hanbokHeading: "Hanbok Shooting",
    hanbokLead: "이번 여행의 핵심 예약이라 패키지, 예약금, 포함 내용, 당일 메모와 레퍼런스를 한곳에 모았습니다.",
    hanbokRulesHeading: "Shooting Notes",
    hanbokReferenceHeading: "Hanbok Reference Photos",
    hanbokCaptionOne: "블루 한복 레퍼런스",
    hanbokCaptionTwo: "궁궐 화이트 한복 레퍼런스",
    hanbokCaptionThree: "궁전 계단 레퍼런스",
    hanbokCaptionFour: "복도 초상 레퍼런스",
    instructionsHeading: "Shooting Instructions",
    instructionsCaption: "매장 촬영 안내",
    transportEyebrow: "Transportation",
    transportHeading: "Transportation",
    transportLead: "교통 구간은 5월 19일 한복 촬영을 중심으로 정리했고, 출발 시간과 지하철 동선, 택시 대안을 함께 넣었습니다.",
    subwayMapHeading: "Subway Map",
    subwayCaption: "서울 메트로 공식 노선도",
    airportTransferHeading: "Airport and Arrival",
    budgetEyebrow: "Budget",
    budgetHeading: "Budget",
    budgetLead: "선택한 통화가 메인 표시가 되지만, 한국 현장 결제를 위해 KRW 금액은 항상 함께 보여 줍니다.",
    budgetSummaryHeading: "Budget Summary",
    budgetFocusHeading: "Current Currency Focus",
    budgetTableHeading: "Budget Calculator",
    budgetTableLead: "선택한 통화 열을 강조하되, 실제 결제 참고용 KRW는 계속 유지합니다.",
    budgetTableItem: "항목",
    budgetTableNote: "메모",
    checklistEyebrow: "Checklist",
    checklistHeading: "Checklist",
    checklistLead: "출발 전과 촬영 전 꼭 확인하면 좋은 항목을 모바일에서도 바로 체크할 수 있게 정리했습니다.",
    linksEyebrow: "Useful Links",
    linksHeading: "Useful Links",
    linksLead: "예약 페이지, 환율, 지도, 회원 혜택, 스튜디오 링크를 빠르게 다시 열 수 있도록 한곳에 모았습니다.",
    mapsButton: "Open in Google Maps",
    openLink: "열기",
  },
};

const data = {
  heroSummary: [
    {
      label: { "zh-Hant": "Trip dates", en: "Trip dates", ko: "Trip dates" },
      value: { "zh-Hant": "2026/05/15 - 2026/05/20", en: "2026/05/15 - 2026/05/20", ko: "2026/05/15 - 2026/05/20" },
    },
    {
      label: { "zh-Hant": "Hotel", en: "Hotel", ko: "Hotel" },
      value: { "zh-Hant": "Local Stitch Creator Town Seogyo", en: "Local Stitch Creator Town Seogyo", ko: "Local Stitch Creator Town Seogyo" },
    },
    {
      label: { "zh-Hant": "Hanbok appointment", en: "Hanbok appointment", ko: "Hanbok appointment" },
      value: { "zh-Hant": "2026/05/19 Tue 14:00", en: "2026/05/19 Tue 14:00", ko: "2026/05/19 Tue 14:00" },
    },
    {
      label: { "zh-Hant": "Reserved package", en: "Reserved package", ko: "Reserved package" },
      value: {
        "zh-Hant": "640,000 KRW package + 300,000 KRW MV",
        en: "640,000 KRW package + 300,000 KRW MV",
        ko: "640,000 KRW package + 300,000 KRW MV",
      },
    },
    {
      label: { "zh-Hant": "Total", en: "Total", ko: "Total" },
      value: { "zh-Hant": "940,000 KRW", en: "940,000 KRW", ko: "940,000 KRW" },
    },
    {
      label: { "zh-Hant": "Deposit", en: "Deposit", ko: "Deposit" },
      value: { "zh-Hant": "300 CNY", en: "300 CNY", ko: "300 CNY" },
    },
    {
      label: { "zh-Hant": "Includes", en: "Includes", ko: "Includes" },
      value: {
        "zh-Hant": "200 originals + 12 retouched",
        en: "200 originals + 12 retouched",
        ko: "200 originals + 12 retouched",
      },
    },
  ],
  overviewStats: [
    {
      label: { "zh-Hant": "旅行長度", en: "Trip length", ko: "여행 기간" },
      value: { "zh-Hant": "6 天 5 夜", en: "6 days / 5 nights", ko: "6일 5박" },
    },
    {
      label: { "zh-Hant": "住宿區域", en: "Stay area", ko: "숙소 지역" },
      value: { "zh-Hant": "弘大 Seogyo", en: "Hongdae / Seogyo", ko: "홍대 / 서교" },
    },
    {
      label: { "zh-Hant": "重點日期", en: "Key date", ko: "핵심 날짜" },
      value: { "zh-Hant": "5/19 韓服拍攝", en: "May 19 hanbok shoot", ko: "5/19 한복 촬영" },
    },
    {
      label: { "zh-Hant": "出發提醒", en: "Departure note", ko: "출발 메모" },
      value: { "zh-Hant": "13:00 前出門", en: "Leave before 13:00", ko: "13:00 전 출발" },
    },
  ],
  overviewNotes: [
    {
      title: { "zh-Hant": "5/19 最好 12:45 出門", en: "12:45 is the safest departure", ko: "12:45 출발이 가장 안전함" },
      desc: {
        "zh-Hant": "店家有遲到規則，北村那區也真的很容易找路找太久，所以這天不要壓線。",
        en: "The shop has a late policy and Bukchon is easy to get lost in, so avoid pushing the schedule too tightly.",
        ko: "지각 규정이 있고 북촌은 길 찾기가 헷갈리기 쉬워서, 이 날은 시간 여유를 두는 편이 좋습니다.",
      },
    },
    {
      title: { "zh-Hant": "卡片付款可能有 10% 手續費", en: "Card payment may add a 10% surcharge", ko: "카드 결제 시 10% 추가 가능" },
      desc: {
        "zh-Hant": "韓服現場如果刷卡，先確認店家是否另外加收 10%，有需要就準備韓元現金。",
        en: "If you plan to pay by card on site, confirm whether the store adds 10% and prepare KRW cash if needed.",
        ko: "현장에서 카드 결제를 할 경우 10% 추가 여부를 먼저 확인하고, 필요하면 KRW 현금을 준비하세요.",
      },
    },
    {
      title: { "zh-Hant": "原片和精修張數當天再確認", en: "Reconfirm original and retouched counts", ko: "원본과 보정 수량 재확인" },
      desc: {
        "zh-Hant": "方案包含 200 張原片和 12 張精修，當天拍攝前後都值得再口頭確認一次。",
        en: "The package includes 200 original files and 12 retouched images, so it is worth confirming that again before and after the shoot.",
        ko: "패키지에는 원본 200장과 보정 12장이 포함되어 있으니 촬영 전후로 다시 한 번 확인하는 편이 좋습니다.",
      },
    },
  ],
  flights: {
    outbound: {
      label: { "zh-Hant": "去程", en: "Outbound", ko: "출국" },
      route: "TPE → ICN",
      date: "2026-05-15",
      time: "15:30 - 19:05",
      code: "CI 0162",
      cabin: { "zh-Hant": "經濟艙基本", en: "Economy Basic", ko: "이코노미 베이직" },
    },
    return: {
      label: { "zh-Hant": "回程", en: "Return", ko: "귀국" },
      route: "ICN → TPE",
      date: "2026-05-20",
      time: "20:05 - 21:50",
      code: "CI",
      cabin: { "zh-Hant": "經濟艙基本", en: "Economy Basic", ko: "이코노미 베이직" },
    },
    airportNotes: [
      {
        title: { "zh-Hant": "機場到飯店", en: "Airport to hotel", ko: "공항에서 호텔까지" },
        desc: {
          "zh-Hant": "抵達仁川後可走 AREX 或機場巴士到弘大，再轉步行或短程計程車到飯店。",
          en: "After arriving at Incheon, use AREX or an airport bus toward Hongdae, then walk or take a short taxi to the hotel.",
          ko: "인천 도착 후 AREX 또는 공항버스로 홍대까지 이동한 뒤, 도보나 짧은 택시로 호텔에 가면 됩니다.",
        },
      },
      {
        title: { "zh-Hant": "機上餐與自動報到", en: "Meals and auto check-in", ko: "기내식과 자동 체크인" },
        desc: {
          "zh-Hant": "5/14 前完成預訂餐點與自動報到設定，避免出發前臨時補做。",
          en: "Complete meal ordering and auto check-in by May 14 to keep departure day lighter.",
          ko: "5월 14일 전 기내식과 자동 체크인 설정을 마쳐 두는 편이 좋습니다.",
        },
      },
      {
        title: { "zh-Hant": "保險已收到", en: "Insurance received", ko: "보험 확인 완료" },
        desc: {
          "zh-Hant": "目前已收到安達旅遊保險確認通知，可當成出發前文件確認項。",
          en: "The Chubb travel insurance confirmation has already been received and can stay on the pre-departure checklist.",
          ko: "처브 여행 보험 확인 메일을 이미 받아서 출발 전 서류 체크 항목으로 유지하면 됩니다.",
        },
      },
    ],
    blackCard: [
      {
        title: { "zh-Hant": "額外託運 20 公斤", en: "Extra 20 kg checked baggage", ko: "추가 위탁수하물 20kg" },
        desc: {
          "zh-Hant": "華航官方會員權益頁列有 Paragon 會員的額外託運額度，限華航 / 華信自營國際航班。",
          en: "The official China Airlines benefit page lists extra checked baggage for Paragon members on eligible China Airlines / Mandarin Airlines international flights.",
          ko: "화항 공식 회원 페이지 기준으로 Paragon 회원은 대상 화항/화신 자사 국제선에서 추가 위탁수하물 혜택이 있습니다.",
        },
      },
      {
        title: { "zh-Hant": "免費選位", en: "Complimentary seat selection", ko: "무료 좌석 지정" },
        desc: {
          "zh-Hant": "這趟經濟艙很實用，建議出發前再看一次可選的免費座位區。",
          en: "Especially useful for this economy booking, so it is worth checking the eligible seat zones again before departure.",
          ko: "이번 이코노미 예약에서 체감도가 높아서 출발 전에 무료 좌석 가능 범위를 다시 확인해 두는 편이 좋습니다.",
        },
      },
      {
        title: { "zh-Hant": "優先服務與貴賓室", en: "Priority handling and lounge access", ko: "우선 서비스와 라운지" },
        desc: {
          "zh-Hant": "優先報到、優先登機、優先行李與貴賓室都屬於值得出發前再確認一次的權益。",
          en: "Priority check-in, boarding, baggage handling, and lounge access are the most relevant convenience benefits to reconfirm before the trip.",
          ko: "우선 체크인, 우선 탑승, 우선 수하물, 라운지 이용은 출발 전에 다시 한 번 확인할 만한 핵심 편의 혜택입니다.",
        },
      },
      {
        title: { "zh-Hant": "額外 25% 哩程", en: "Extra 25% mileage bonus", ko: "추가 25% 마일 적립" },
        desc: {
          "zh-Hant": "適用航班可享額外哩程累積，之後如果有繼續搭華航很有感。",
          en: "Eligible scheduled flights receive a mileage bonus, which is useful if you continue flying China Airlines later.",
          ko: "대상 정기편은 추가 마일 적립이 가능해서 이후에도 화항을 타게 된다면 체감이 있습니다.",
        },
      },
    ],
  },
  hotel: {
    title: { "zh-Hant": "Local Stitch Creator Town Seogyo（洛卡斯提奇創作者小鎮西橋店）", en: "Local Stitch Creator Town Seogyo", ko: "Local Stitch Creator Town Seogyo" },
    subtitle: {
      "zh-Hant": "高級雙床房 · 2026/05/15 - 2026/05/20 · 兩人入住",
      en: "Deluxe Twin Room · 2026/05/15 - 2026/05/20 · 2 guests",
      ko: "디럭스 트윈룸 · 2026/05/15 - 2026/05/20 · 2인",
    },
    totalTwd: 19247,
    chips: ["Hongdae", "5 nights", "2 guests", "Deluxe Twin"],
    rows: [
      { label: { "zh-Hant": "飯店總價", en: "Hotel total", ko: "호텔 총액" }, amountKrw: 19247 * rates.TWD.krwPerUnit },
      { label: { "zh-Hant": "平均每晚", en: "Per night", ko: "1박 평균" }, amountKrw: (19247 / 5) * rates.TWD.krwPerUnit },
      { label: { "zh-Hant": "每人分攤", en: "Per person", ko: "1인 기준" }, amountKrw: (19247 / 2) * rates.TWD.krwPerUnit },
      { label: { "zh-Hant": "每人每晚", en: "Per person / night", ko: "1인 1박 기준" }, amountKrw: (19247 / 10) * rates.TWD.krwPerUnit },
    ],
    notes: [
      {
        title: { "zh-Hant": "住弘大真的省事", en: "Hongdae is practical", ko: "홍대 베이스가 실용적" },
        desc: {
          "zh-Hant": "回飯店方便、吃飯方便，也適合最後幾天購物後再慢慢整理。",
          en: "Easy for food, late returns, and coming back after shopping days.",
          ko: "식사와 늦은 귀가, 쇼핑 후 정리에 모두 편합니다.",
        },
      },
      {
        title: { "zh-Hant": "拍攝當天出發點清楚", en: "Clear starting point for shoot day", ko: "촬영일 출발지가 명확함" },
        desc: {
          "zh-Hant": "5/19 這天從這裡出發去安國最直觀，不用再臨時換住宿動線。",
          en: "On May 19 this is a clean starting point for reaching Anguk without extra transfer stress.",
          ko: "5월 19일 안국 이동 출발지로 무난하고 이동 스트레스가 적습니다.",
        },
      },
    ],
    booking: "https://www.agoda.com/zh-tw/localstitch-seogyo-town/hotel/seoul-kr.html?checkIn=2026-05-15&los=5&adults=2&rooms=1&travellerType=1&ds=qgMT%2Bi%2FlTw7Mxwmp",
  },
  hanbok: {
    cardTitle: { "zh-Hant": "Reserved Hanbok Plan", en: "Reserved Hanbok Plan", ko: "Reserved Hanbok Plan" },
    package: { "zh-Hant": "64 萬韓元高級方案", en: "640,000 KRW premium package", ko: "640,000 KRW premium package" },
    addon: { "zh-Hant": "30 萬韓元 MV", en: "300,000 KRW MV", ko: "300,000 KRW MV" },
    total: { "zh-Hant": "總計 94 萬韓元", en: "Total 940,000 KRW", ko: "Total 940,000 KRW" },
    deposit: { "zh-Hant": "已付訂金 300 人民幣", en: "Deposit paid: 300 CNY", ko: "Deposit paid: 300 CNY" },
    note: {
      "zh-Hant": "刷卡可能加收 10%，若需要請先準備韓元現金。",
      en: "Credit card may have a 10% surcharge; prepare KRW cash if needed.",
      ko: "Credit card may have a 10% surcharge; prepare KRW cash if needed.",
    },
    includes: [
      { "zh-Hant": "高定韓服", en: "High-end hanbok", ko: "고급 한복" },
      { "zh-Hant": "明星等級攝影 / 妝造", en: "Celebrity-level photographer / makeup", ko: "셀럽급 촬영 / 메이크업" },
      { "zh-Hant": "200 張原片", en: "200 original photos", ko: "원본 200장" },
      { "zh-Hant": "12 張精修", en: "12 retouched photos", ko: "보정 12장" },
      { "zh-Hant": "MV 成片", en: "Edited MV", ko: "완성 MV" },
    ],
    rules: [
      {
        title: { "zh-Hant": "店家遲到規則", en: "Late arrival policy", ko: "지각 규정" },
        desc: {
          "zh-Hant": "遲到 20 分鐘會罰 ₩50,000，還可能直接壓縮拍攝時間。",
          en: "A 20-minute delay triggers a ₩50,000 penalty and may shorten the actual shooting time.",
          ko: "20분 지각 시 ₩50,000 벌금이 있고 실제 촬영 시간이 줄어들 수 있습니다.",
        },
      },
      {
        title: { "zh-Hant": "北村真的容易迷路", en: "Bukchon is easy to get lost in", ko: "북촌은 길 찾기가 헷갈리기 쉬움" },
        desc: {
          "zh-Hant": "就算時間算得剛好，也可能會被找路吃掉，所以保險版還是建議 12:45 出門。",
          en: "Even a realistic schedule can be eaten up by wayfinding, so the safer departure is still 12:45.",
          ko: "시간을 맞춰도 길 찾기 때문에 늦어질 수 있어서, 안전하게는 12:45 출발을 추천합니다.",
        },
      },
      {
        title: { "zh-Hant": "當天要再確認原片與精修數量", en: "Reconfirm the photo counts", ko: "원본 / 보정 수량 재확인" },
        desc: {
          "zh-Hant": "出發前和拍攝後都可以再問一次 200 張原片和 12 張精修是否照方案處理。",
          en: "It is worth confirming both before and after the shoot that the 200 original files and 12 retouched images follow the package.",
          ko: "촬영 전후 모두 원본 200장과 보정 12장이 패키지대로 진행되는지 다시 확인하면 좋습니다.",
        },
      },
    ],
    links: [
      { label: { "zh-Hant": "MV 範例", en: "MV sample", ko: "MV sample" }, href: "http://xhslink.com/o/15TW7yFNm7q" },
      { label: { "zh-Hant": "工作室頁面", en: "Studio profile", ko: "Studio profile" }, href: "http://xhslink.com/o/1yRuTcW00pc" },
    ],
  },
  routeTimeline: [
    {
      label: { "zh-Hant": "Start", en: "Start", ko: "Start" },
      value: { "zh-Hant": "Local Stitch Creator Town Seogyo", en: "Local Stitch Creator Town Seogyo", ko: "Local Stitch Creator Town Seogyo" },
    },
    {
      label: { "zh-Hant": "Destination", en: "Destination", ko: "Destination" },
      value: { "zh-Hant": "옥한복 / Bukchon area", en: "Ok Hanbok / Bukchon area", ko: "Ok Hanbok / Bukchon area" },
    },
    {
      label: { "zh-Hant": "Appointment", en: "Appointment", ko: "Appointment" },
      value: { "zh-Hant": "14:00", en: "14:00", ko: "14:00" },
    },
    {
      label: { "zh-Hant": "Recommended departure", en: "Recommended departure", ko: "Recommended departure" },
      value: { "zh-Hant": "around 13:00", en: "around 13:00", ko: "around 13:00" },
    },
  ],
  routes: [
    {
      title: { "zh-Hant": "Subway", en: "Subway", ko: "Subway" },
      duration: { "zh-Hant": "35-45 分鐘", en: "35-45 min", ko: "35-45분" },
      cost: { "zh-Hant": "最穩", en: "Most stable", ko: "가장 안정적" },
      desc: {
        "zh-Hant": "弘大入口站 → 2 號線到乙支路 3 街 → 轉 3 號線到安國站 → 2 號出口步行 5-8 分鐘。",
        en: "Hongik Univ. Station → Line 2 to Euljiro 3-ga → transfer to Line 3 to Anguk → Exit 2 and walk 5-8 minutes.",
        ko: "홍대입구역 → 2호선 을지로3가 → 3호선 안국역 환승 → 2번 출구에서 도보 5-8분.",
      },
      href: "https://www.google.com/maps/search/%EC%98%A5%ED%95%9C%EB%B3%B5/",
    },
    {
      title: { "zh-Hant": "Taxi", en: "Taxi", ko: "Taxi" },
      duration: { "zh-Hant": "20-25 分鐘", en: "20-25 min", ko: "20-25분" },
      cost: { "zh-Hant": "約 ₩8,000-12,000", en: "About ₩8,000-12,000", ko: "약 ₩8,000-12,000" },
      desc: {
        "zh-Hant": "如果不想迷路，這是最輕鬆的方案。13:00 左右叫車最穩。",
        en: "This is the easiest option if you want to avoid navigation stress. Calling the car around 13:00 is the safer move.",
        ko: "길 찾기 스트레스를 줄이고 싶다면 가장 편한 선택입니다. 13:00 전후 호출이 무난합니다.",
      },
      href: "https://www.google.com/maps/search/%EC%98%A5%ED%95%9C%EB%B3%B5/",
    },
    {
      title: { "zh-Hant": "Walking segment", en: "Walking segment", ko: "Walking segment" },
      duration: { "zh-Hant": "5-8 分鐘", en: "5-8 min", ko: "5-8분" },
      cost: { "zh-Hant": "安國站 2 號出口", en: "From Anguk Exit 2", ko: "안국역 2번 출구" },
      desc: {
        "zh-Hant": "最後一段步行進北村，這段最容易多花時間，所以不要抓太緊。",
        en: "The final walk through the Bukchon area is where extra time is easiest to lose, so build in a small buffer.",
        ko: "북촌으로 들어가는 마지막 도보 구간에서 시간이 가장 쉽게 늘어나니 여유를 두는 편이 좋습니다.",
      },
      href: "https://www.google.com/maps/search/%EC%98%A5%ED%95%9C%EB%B3%B5/",
    },
  ],
  budgetSummary: [
    { label: { "zh-Hant": "兩人總計", en: "Total for two", ko: "2인 총액" }, amountKrw: 2276135 },
    { label: { "zh-Hant": "每人約", en: "Per person", ko: "1인 약" }, amountKrw: 1138068 },
    { label: { "zh-Hant": "韓服總價", en: "Hanbok total", ko: "한복 총액" }, amountKrw: 940000 },
    { label: { "zh-Hant": "現場預估補款", en: "Estimated on-site payment", ko: "현장 예상 결제" }, amountKrw: 880000 },
  ],
  budgetRows: [
    {
      item: { "zh-Hant": "Hanbok package", en: "Hanbok package", ko: "한복 패키지" },
      krw: 640000,
      note: { "zh-Hant": "64 萬韓元方案", en: "640,000 KRW package", ko: "640,000 KRW package" },
    },
    {
      item: { "zh-Hant": "MV add-on", en: "MV add-on", ko: "MV 추가" },
      krw: 300000,
      note: { "zh-Hant": "30 萬韓元 MV", en: "300,000 KRW MV", ko: "300,000 KRW MV" },
    },
    {
      item: { "zh-Hant": "Hanbok total", en: "Hanbok total", ko: "한복 총액" },
      krw: 940000,
      note: { "zh-Hant": "韓服 + MV", en: "Package + MV", ko: "패키지 + MV" },
    },
    {
      item: { "zh-Hant": "Deposit", en: "Deposit", ko: "예약금" },
      krw: 300 * rates.CNY.krwPerUnit,
      cny: 300,
      note: { "zh-Hant": "已付 300 CNY", en: "300 CNY already paid", ko: "300 CNY already paid" },
    },
    {
      item: { "zh-Hant": "Remaining balance", en: "Remaining balance", ko: "남은 잔액" },
      krw: 880000,
      note: { "zh-Hant": "現場補款預估", en: "Estimated on-site balance", ko: "현장 결제 예상" },
    },
  ],
  checklist: [
    {
      id: "passport",
      title: { "zh-Hant": "護照", en: "Passport", ko: "Passport" },
      desc: { "zh-Hant": "確認效期與隨身放置位置。", en: "Confirm validity and easy access.", ko: "유효기간과 휴대 위치 확인." },
    },
    {
      id: "esim",
      title: { "zh-Hant": "手機 / 漫遊 / eSIM", en: "Phone / roaming / eSIM", ko: "Phone / roaming / eSIM" },
      desc: { "zh-Hant": "落地後能不能立刻上網很重要。", en: "Make sure data works right after landing.", ko: "도착 직후 데이터 사용 가능 여부 확인." },
    },
    {
      id: "powerbank",
      title: { "zh-Hant": "行動電源", en: "Power bank", ko: "Power bank" },
      desc: { "zh-Hant": "拍照、導航和聯絡都會很耗電。", en: "Photos, navigation, and messaging drain battery quickly.", ko: "사진, 지도, 연락 때문에 배터리 소모가 큽니다." },
    },
    {
      id: "cash",
      title: { "zh-Hant": "韓元現金", en: "KRW cash", ko: "KRW cash" },
      desc: { "zh-Hant": "韓服現場補款和可能的卡片加價都要考慮。", en: "Useful for the hanbok balance and any card surcharge.", ko: "한복 잔액 결제와 카드 추가요금을 대비." },
    },
    {
      id: "card",
      title: { "zh-Hant": "信用卡", en: "Credit card", ko: "Credit card" },
      desc: { "zh-Hant": "確認海外刷卡與華航黑卡權益。", en: "Reconfirm overseas payment and Paragon benefits.", ko: "해외 결제 가능 여부와 Paragon 혜택 확인." },
    },
    {
      id: "makeup",
      title: { "zh-Hant": "妝髮準備", en: "Makeup / hair prep", ko: "Makeup / hair prep" },
      desc: { "zh-Hant": "拍攝當天不要臨時找東西。", en: "Do not leave beauty prep to the last minute.", ko: "촬영 당일 뷰티 준비를 급하게 하지 않도록." },
    },
    {
      id: "photo-count",
      title: { "zh-Hant": "確認原片 / 精修張數", en: "Confirm original / retouched counts", ko: "원본 / 보정 수량 확인" },
      desc: { "zh-Hant": "200 原片與 12 精修當天要再口頭確認。", en: "Reconfirm 200 original photos and 12 retouched photos.", ko: "원본 200장과 보정 12장을 다시 확인." },
    },
    {
      id: "card-fee",
      title: { "zh-Hant": "確認刷卡 10% 手續費", en: "Confirm 10% card surcharge", ko: "카드 결제 10% 추가 확인" },
      desc: { "zh-Hant": "現場付款前先問清楚。", en: "Ask before making the final payment.", ko: "최종 결제 전에 반드시 확인." },
    },
  ],
  usefulLinks: [
    {
      title: { "zh-Hant": "Booking & Maps", en: "Booking & Maps", ko: "Booking & Maps" },
      desc: {
        "zh-Hant": "住宿、韓服店和路線相關連結。",
        en: "Hotel, hanbok shop, and route references.",
        ko: "호텔, 한복 매장, 동선 관련 링크.",
      },
      links: [
        { label: { "zh-Hant": "Agoda 飯店頁", en: "Agoda hotel page", ko: "Agoda hotel page" }, href: "https://www.agoda.com/zh-tw/localstitch-seogyo-town/hotel/seoul-kr.html?checkIn=2026-05-15&los=5&adults=2&rooms=1&travellerType=1&ds=qgMT%2Bi%2FlTw7Mxwmp" },
        { label: { "zh-Hant": "韓服店 Google Maps", en: "Hanbok shop Google Maps", ko: "Hanbok shop Google Maps" }, href: "https://www.google.com/maps/search/%EC%98%A5%ED%95%9C%EB%B3%B5/" },
        { label: { "zh-Hant": "首爾地鐵官方圖", en: "Official Seoul Metro map", ko: "Official Seoul Metro map" }, href: "https://www.seoulmetro.co.kr/download/map_english.jpg" },
      ],
    },
    {
      title: { "zh-Hant": "Hanbok & Media", en: "Hanbok & Media", ko: "Hanbok & Media" },
      desc: {
        "zh-Hant": "工作室和 MV 參考。",
        en: "Studio and MV references.",
        ko: "스튜디오와 MV 레퍼런스.",
      },
      links: [
        { label: { "zh-Hant": "工作室頁面", en: "Studio profile", ko: "Studio profile" }, href: "http://xhslink.com/o/1yRuTcW00pc" },
        { label: { "zh-Hant": "MV 範例", en: "MV sample", ko: "MV sample" }, href: "http://xhslink.com/o/15TW7yFNm7q" },
      ],
    },
    {
      title: { "zh-Hant": "Money & Membership", en: "Money & Membership", ko: "Money & Membership" },
      desc: {
        "zh-Hant": "WOWPASS 匯率與華航黑卡權益。",
        en: "WOWPASS exchange info and China Airlines Paragon benefits.",
        ko: "WOWPASS 환율과 화항 Paragon 혜택.",
      },
      links: [
        { label: { "zh-Hant": "WOWPASS 即時匯率", en: "WOWPASS live rates", ko: "WOWPASS live rates" }, href: "https://www.wowexchange.net/exchange/rate?lang=en_US" },
        { label: { "zh-Hant": "華航會員權益", en: "China Airlines benefits", ko: "China Airlines benefits" }, href: "https://www.china-airlines.com/us/en/member/planning/introduction/membership-benefits" },
        { label: { "zh-Hant": "Paragon 黑卡說明", en: "Paragon benefits", ko: "Paragon benefits" }, href: "https://www.china-airlines.com/us/en/member/planning/introduction/membership-benefits/paragon.html" },
      ],
    },
  ],
};

function getText(entry) {
  if (typeof entry === "string") return entry;
  return entry?.[state.lang] ?? "";
}

function formatFromKrw(krw, currency = state.currency) {
  const meta = rates[currency];
  const amount = krw / meta.krwPerUnit;
  return `${meta.symbol}${Math.round(amount).toLocaleString()}`;
}

function makeSummaryCard(item) {
  return `
    <article class="summary-card">
      <div class="summary-card-label">${getText(item.label)}</div>
      <div class="summary-card-value">${getText(item.value)}</div>
    </article>
  `;
}

function makeStatCard(item) {
  return `
    <article class="stat-card">
      <div class="stat-label">${getText(item.label)}</div>
      <div class="stat-value">${getText(item.value)}</div>
    </article>
  `;
}

function makeBullet(item) {
  return `
    <article class="bullet-item">
      <div class="bullet-title">${getText(item.title)}</div>
      <div class="bullet-desc">${getText(item.desc)}</div>
    </article>
  `;
}

function makeLinkButton(item, className = "resource-link") {
  return `<a class="${className}" href="${item.href}" target="_blank" rel="noreferrer">${getText(item.label)}</a>`;
}

function renderI18nText() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (text[state.lang][key]) {
      node.textContent = text[state.lang][key];
    }
  });
  document.documentElement.lang = state.lang;
}

function renderHero() {
  document.getElementById("heroSummary").innerHTML = data.heroSummary.map(makeSummaryCard).join("");
}

function renderOverview() {
  document.getElementById("overviewStats").innerHTML = data.overviewStats.map(makeStatCard).join("");
  document.getElementById("overviewNotes").innerHTML = data.overviewNotes.map(makeBullet).join("");
  document.getElementById("blackCardBenefits").innerHTML = data.flights.blackCard.map(makeBullet).join("");
  document.getElementById("flightOverview").innerHTML = [data.flights.outbound, data.flights.return]
    .map(
      (flight) => `
        <article class="flight-overview-card">
          <span class="flight-kicker">${getText(flight.label)}</span>
          <div class="flight-main">${flight.route}</div>
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
    <h3>${getText(hotel.title)}</h3>
    <p class="card-intro">${getText(hotel.subtitle)}</p>
    <div class="tag-row">${hotel.chips.map((chip) => `<span class="tag">${chip}</span>`).join("")}</div>
    <div class="bullet-list">
      ${hotel.rows
        .map(
          (row) => `
            <article class="bullet-item">
              <div class="bullet-title">${getText(row.label)}</div>
              <div class="bullet-desc">${formatFromKrw(row.amountKrw)}</div>
            </article>
          `
        )
        .join("")}
    </div>
    <div class="bullet-list">${hotel.notes.map(makeBullet).join("")}</div>
    <div class="resource-actions">
      <a class="resource-link" href="${hotel.booking}" target="_blank" rel="noreferrer">Agoda</a>
    </div>
  `;
}

function renderHanbok() {
  const hanbok = data.hanbok;
  document.getElementById("hanbokPlanCard").innerHTML = `
    <div class="section-label">${getText(hanbok.cardTitle)}</div>
    <h3>${getText(hanbok.cardTitle)}</h3>
    <div class="bullet-list">
      <article class="bullet-item">
        <div class="bullet-title">Package</div>
        <div class="bullet-desc">${getText(hanbok.package)}</div>
      </article>
      <article class="bullet-item">
        <div class="bullet-title">Add-on</div>
        <div class="bullet-desc">${getText(hanbok.addon)}</div>
      </article>
      <article class="bullet-item">
        <div class="bullet-title">Total</div>
        <div class="bullet-desc">${getText(hanbok.total)}</div>
      </article>
      <article class="bullet-item">
        <div class="bullet-title">Deposit</div>
        <div class="bullet-desc">${getText(hanbok.deposit)}</div>
      </article>
    </div>
    <div class="tag-row">${hanbok.includes.map((item) => `<span class="tag">${getText(item)}</span>`).join("")}</div>
    <div class="accent-row">
      <span class="bullet-title">Note</span>
      <span class="accent-amount">${getText(hanbok.note)}</span>
    </div>
    <div class="resource-actions">${hanbok.links.map((link) => makeLinkButton(link)).join("")}</div>
  `;
  document.getElementById("hanbokRules").innerHTML = hanbok.rules.map(makeBullet).join("");
}

function renderTransportation() {
  document.getElementById("routeTimeline").innerHTML = data.routeTimeline
    .map(
      (step) => `
        <article class="timeline-chip">
          <div class="timeline-chip-label">${getText(step.label)}</div>
          <div class="timeline-chip-value">${getText(step.value)}</div>
        </article>
      `
    )
    .join("");

  document.getElementById("routeCards").innerHTML = data.routes
    .map(
      (route) => `
        <article class="route-card">
          <div class="route-card-header">
            <div>
              <div class="route-title">${getText(route.title)}</div>
              <div class="route-meta">${getText(route.duration)}</div>
            </div>
            <span class="route-chip">${getText(route.cost)}</span>
          </div>
          <div class="bullet-desc">${getText(route.desc)}</div>
          <div class="resource-actions">
            <a class="resource-link" href="${route.href}" target="_blank" rel="noreferrer">${text[state.lang].mapsButton}</a>
          </div>
        </article>
      `
    )
    .join("");

  document.getElementById("airportTransfer").innerHTML = data.flights.airportNotes.map(makeBullet).join("");
}

function makeBudgetSummaryCard(item) {
  return `
    <article class="stat-card">
      <div class="stat-label">${getText(item.label)}</div>
      <div class="stat-value">${formatFromKrw(item.amountKrw)}</div>
    </article>
  `;
}

function renderBudget() {
  document.getElementById("budgetSummary").innerHTML = data.budgetSummary.map(makeBudgetSummaryCard).join("");
  document.getElementById("budgetFocus").innerHTML = data.budgetRows
    .slice(0, 3)
    .map(
      (row) => `
        <article class="bullet-item">
          <div class="bullet-title">${getText(row.item)}</div>
          <div class="bullet-desc">${formatFromKrw(row.krw)} · KRW ${formatFromKrw(row.krw, "KRW")}</div>
        </article>
      `
    )
    .join("");

  const activeClass = (currency) => (currency === state.currency ? "active-col" : "");
  const body = document.getElementById("budgetBody");
  body.innerHTML = data.budgetRows
    .map((row) => {
      const cnyValue = typeof row.cny === "number" ? `${rates.CNY.symbol}${row.cny.toLocaleString()}` : formatFromKrw(row.krw, "CNY");
      return `
        <tr>
          <td data-label="${text[state.lang].budgetTableItem}"><strong>${getText(row.item)}</strong></td>
          <td class="${activeClass("KRW")}" data-label="KRW">${formatFromKrw(row.krw, "KRW")}</td>
          <td class="${activeClass("TWD")}" data-label="TWD">${formatFromKrw(row.krw, "TWD")}</td>
          <td class="${activeClass("CNY")}" data-label="CNY">${cnyValue}</td>
          <td data-label="${text[state.lang].budgetTableNote}">${getText(row.note)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderChecklist() {
  const checklistState = JSON.parse(localStorage.getItem("seoul-handbook-checklist") || "{}");
  document.getElementById("checklistGrid").innerHTML = data.checklist
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
    .join("");
}

function renderLinks() {
  document.getElementById("linksGrid").innerHTML = data.usefulLinks
    .map(
      (group) => `
        <article class="glass-card link-card">
          <h3>${getText(group.title)}</h3>
          <p>${getText(group.desc)}</p>
          <div class="link-list">
            ${group.links
              .map(
                (link) => `
                  <div class="link-item">
                    <span>${getText(link.label)}</span>
                    ${makeLinkButton(link)}
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
  renderI18nText();
  renderHero();
  renderOverview();
  renderHotel();
  renderHanbok();
  renderTransportation();
  renderBudget();
  renderChecklist();
  renderLinks();
}

function updateControlState() {
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
  updateControlState();
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      localStorage.setItem("seoul-handbook-lang", state.lang);
      updateControlState();
      renderAll();
      bindChecklistStorage();
    });
  });

  document.querySelectorAll("[data-currency]").forEach((button) => {
    button.addEventListener("click", () => {
      state.currency = button.dataset.currency;
      localStorage.setItem("seoul-handbook-currency", state.currency);
      updateControlState();
      renderBudget();
      renderHotel();
    });
  });
}

function bindChecklistStorage() {
  document.querySelectorAll("[data-check]").forEach((input) => {
    input.addEventListener("change", () => {
      const current = JSON.parse(localStorage.getItem("seoul-handbook-checklist") || "{}");
      current[input.dataset.check] = input.checked;
      localStorage.setItem("seoul-handbook-checklist", JSON.stringify(current));
    });
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

function bindNavSpy() {
  const links = document.querySelectorAll("[data-nav]");
  const sections = [...document.querySelectorAll(".page-section")];
  const activate = () => {
    const midpoint = window.scrollY + 160;
    let current = sections[0]?.id;
    sections.forEach((section) => {
      if (section.offsetTop <= midpoint) current = section.id;
    });
    links.forEach((link) => link.classList.toggle("active", link.dataset.nav === current));
  };
  activate();
  window.addEventListener("scroll", activate, { passive: true });
  window.addEventListener("resize", activate);
}

renderAll();
bindControls();
bindChecklistStorage();
bindProgress();
bindNavSpy();
