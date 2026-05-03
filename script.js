const state = {
  lang: "zh-Hant",
  currency: "TWD",
};

const rates = {
  TWD: { symbol: "NT$", rate: 1, decimals: 0 },
  KRW: { symbol: "₩", rate: 41.8, decimals: 0 },
  CNY: { symbol: "¥", rate: 0.223, decimals: 0 },
};

const text = {
  "zh-Hant": {
    heroKicker: "Seoul travel handbook",
    heroTitle: "首爾 5 天 6 夜",
    heroSubtitle: "把住宿、韓服拍攝、交通和花費整理在同一頁，出發前看這裡就夠。",
    heroDates: "2026 / 05 / 15 - 2026 / 05 / 20",
    heroNames: "Victoria & Aiden",
    heroTags: ["弘大入住", "景福宮", "北村韓屋村", "聖水洞", "韓服拍攝"],
    navOverview: "總覽",
    navStay: "住宿",
    navFlights: "航班",
    navHanbok: "韓服",
    navItinerary: "行程",
    navRecommend: "推薦",
    navWowpass: "WOWPASS",
    navMap: "地圖",
    navBudget: "預算",
    overviewLabel: "Journey Overview",
    overviewTitle: "先把重要的排清楚，其他留給當天心情",
    overviewLead:
      "主色是從你上傳的韓服照抓出來的霧藍、奶白和一點淡粉，視覺會乾淨，但重點還是資訊要好找。",
    toneLabel: "Visual Tone",
    toneTitle: "這版先把真的會一直回來查的資訊放前面",
    toneLead:
      "像是 5/19 幾點出門、韓服還要付多少、住哪裡、回程幾點，打開就能直接看到，不用一直往下翻。",
    hotelPhotoCaption: "入住氛圍參考",
    subwayPhotoCaption: "首爾地鐵路網",
    highlightsLabel: "Key Highlights",
    highlightsTitle: "這趟已經確定的主線",
    notesLabel: "Travel Notes",
    notesTitle: "出發前先記住這幾件事",
    stayLabel: "Stay Plan",
    stayTitle: "住宿安排",
    stayLead: "住弘大是對的，回飯店方便，吃飯方便，最後幾天買東西也不用扛太遠。",
    flightLabel: "Flight & Support",
    flightTitle: "航班與旅遊支援",
    flightLead: "航班時間、保險和報到提醒都放這裡，出發前最後看一次就好。",
    hanbokLabel: "Hanbok Shoot",
    hanbokTitle: "5/19 韓服拍攝章節",
    hanbokLead: "這頁是重點。費用、規則、怎麼去、幾點出門都在這裡。",
    itineraryLabel: "Day by Day",
    itineraryTitle: "每日行程",
    itineraryLead: "先把一定會去的排進去，剩下的留白，當天想去哪再補。",
    recommendLabel: "Recommendations",
    recommendTitle: "如果還想加一點行程",
    recommendLead: "挑幾個和這趟氣質比較合的點先放著，不一定全去，但臨時想加行程時很好用。",
    recommendPlacesLabel: "Seoul Picks",
    recommendPlacesTitle: "首爾推薦",
    recommendSpaLabel: "Jjimjilbang",
    recommendSpaTitle: "汗蒸幕推薦",
    wowpassLabel: "Travel Money",
    wowpassTitle: "WOWPASS",
    wowpassLead: "如果你們不想一直換現金，WOWPASS 很適合拿來當旅遊卡。這裡先放用途和規劃匯率，實際匯率還是以官方頁面或機台當下顯示為準。",
    wowpassInfoLabel: "About WOWPASS",
    wowpassInfoTitle: "怎麼用",
    wowpassRateLabel: "Exchange",
    wowpassRateTitle: "匯率參考",
    mapLabel: "Route & Metro",
    mapTitle: "韓服拍攝路線與首爾地鐵圖",
    mapLead: "韓服拍攝當天怎麼從飯店到安國，這裡直接看。怕迷路就叫車。",
    budgetLabel: "Budget Overview",
    budgetTitle: "旅費整理",
    budgetLead: "可以切換台幣、韓元、人民幣。這裡先看大概，不是即時匯率。",
    budgetTableItem: "項目",
    budgetTableDetail: "說明",
    budgetTableAmount: "金額",
    budgetItemLabel: "項目",
    budgetDetailLabel: "說明",
    budgetAmountLabel: "金額",
  },
  en: {
    heroKicker: "Seoul travel handbook",
    heroTitle: "A K-drama Seoul Escape",
    heroSubtitle: "Built from hanbok blues, ivory whites, and soft blush tones into one polished six-day guide.",
    heroDates: "2026 / 05 / 15 - 2026 / 05 / 20",
    heroNames: "Victoria & Aiden",
    heroTags: ["Hongdae stay", "Gyeongbokgung", "Bukchon Hanok Village", "Seongsu", "Hanbok shoot"],
    navOverview: "Overview",
    navStay: "Stay",
    navFlights: "Flights",
    navHanbok: "Hanbok",
    navItinerary: "Itinerary",
    navRecommend: "Picks",
    navWowpass: "WOWPASS",
    navMap: "Map",
    navBudget: "Budget",
    overviewLabel: "Journey Overview",
    overviewTitle: "A Seoul trip that opens like the first scene of a gentle K-drama",
    overviewLead:
      "The visual system is sampled from your hanbok references: mist blue, ivory white, pale rose, and weathered wood for a refined editorial feel.",
    toneLabel: "Visual Tone",
    toneTitle: "More than a checklist: this is mood, movement, and reminders arranged beautifully",
    toneLead:
      "The site keeps your hotel, flights, hanbok appointment, transport plan, and budget in one calm place that still feels special on mobile.",
    hotelPhotoCaption: "Hotel vibe reference",
    subwayPhotoCaption: "Seoul subway network",
    highlightsLabel: "Key Highlights",
    highlightsTitle: "Core plans already locked in",
    notesLabel: "Travel Notes",
    notesTitle: "The reminders worth remembering now",
    stayLabel: "Stay Plan",
    stayTitle: "Hotel Stay",
    stayLead: "You will stay in Hongdae from May 15 to May 20, which makes food runs, subway transfers, and late returns much easier.",
    flightLabel: "Flight & Support",
    flightTitle: "Flights and travel support",
    flightLead: "Outbound, return, insurance, and card-related reminders are grouped together for quick pre-trip checks.",
    hanbokLabel: "Hanbok Shoot",
    hanbokTitle: "May 19 Hanbok shoot chapter",
    hanbokLead: "This section holds the package details, shop rules, departure timing, and transport backup plan.",
    itineraryLabel: "Day by Day",
    itineraryTitle: "Daily itinerary",
    itineraryLead: "The confirmed places are placed first, while the remaining space stays intentionally open.",
    recommendLabel: "Recommendations",
    recommendTitle: "If you want a few extra ideas",
    recommendLead: "These are the places that match the mood of this trip best. You do not need to fit them all in.",
    recommendPlacesLabel: "Seoul Picks",
    recommendPlacesTitle: "Where to go",
    recommendSpaLabel: "Jjimjilbang",
    recommendSpaTitle: "Spa picks",
    wowpassLabel: "Travel Money",
    wowpassTitle: "WOWPASS",
    wowpassLead: "WOWPASS is useful if you do not want to juggle too much cash. The rates below are planning references, while the live rate should be checked on the official page or kiosk.",
    wowpassInfoLabel: "About WOWPASS",
    wowpassInfoTitle: "How it works",
    wowpassRateLabel: "Exchange",
    wowpassRateTitle: "Rate reference",
    mapLabel: "Route & Metro",
    mapTitle: "Shoot route and Seoul subway map",
    mapLead: "The route from Local Stitch to the Bukchon / Anguk area is organized here, with Uber as a clean fallback.",
    budgetLabel: "Budget Overview",
    budgetTitle: "Trip budget",
    budgetLead: "Switch between TWD, KRW, and CNY. Conversions here are for planning, not live FX.",
    budgetTableItem: "Item",
    budgetTableDetail: "Detail",
    budgetTableAmount: "Amount",
    budgetItemLabel: "Item",
    budgetDetailLabel: "Detail",
    budgetAmountLabel: "Amount",
  },
  ko: {
    heroKicker: "Seoul travel handbook",
    heroTitle: "K-drama Mood Seoul Trip",
    heroSubtitle: "한복 사진의 안개빛 블루, 아이보리, 연한 로즈 컬러로 만든 세련된 6일 가이드입니다.",
    heroDates: "2026 / 05 / 15 - 2026 / 05 / 20",
    heroNames: "Victoria & Aiden",
    heroTags: ["홍대 숙소", "경복궁", "북촌한옥마을", "성수", "한복 촬영"],
    navOverview: "개요",
    navStay: "숙소",
    navFlights: "항공",
    navHanbok: "한복",
    navItinerary: "일정",
    navRecommend: "추천",
    navWowpass: "WOWPASS",
    navMap: "지도",
    navBudget: "예산",
    overviewLabel: "Journey Overview",
    overviewTitle: "부드러운 한국 드라마 첫 장면처럼 시작되는 서울 여행",
    overviewLead:
      "비주얼 컬러는 업로드한 한복 사진에서 가져왔습니다. 안개빛 블루, 아이보리, 옅은 장미빛, 우드 그레이 톤으로 정리했습니다.",
    toneLabel: "Visual Tone",
    toneTitle: "정보만 모은 사이트가 아니라 분위기와 동선을 예쁘게 정리한 여행 북",
    toneLead:
      "호텔, 항공, 한복 예약, 이동 루트, 예산을 한곳에 모아 두어서 모바일에서도 빠르게 확인할 수 있습니다.",
    hotelPhotoCaption: "숙소 분위기 참고",
    subwayPhotoCaption: "서울 지하철 노선도",
    highlightsLabel: "Key Highlights",
    highlightsTitle: "이미 확정된 핵심 플랜",
    notesLabel: "Travel Notes",
    notesTitle: "지금 가장 먼저 기억하면 좋은 메모",
    stayLabel: "Stay Plan",
    stayTitle: "숙소 정보",
    stayLead: "5월 15일부터 20일까지 홍대 생활권에 머물러서 이동과 식사, 쇼핑 후 복귀가 편합니다.",
    flightLabel: "Flight & Support",
    flightTitle: "항공과 여행 지원 정보",
    flightLead: "출도착, 보험, 카드 관련 메모를 한곳에 모아 출발 전 확인하기 쉽게 만들었습니다.",
    hanbokLabel: "Hanbok Shoot",
    hanbokTitle: "5월 19일 한복 촬영 페이지",
    hanbokLead: "패키지, 규정, 출발 시간, 교통 플랜 B까지 이 섹션에 정리했습니다.",
    itineraryLabel: "Day by Day",
    itineraryTitle: "일정표",
    itineraryLead: "확정된 장소를 먼저 넣고, 나머지는 여유 있게 비워 두었습니다.",
    recommendLabel: "Recommendations",
    recommendTitle: "조금 더 넣고 싶다면",
    recommendLead: "이번 여행 분위기와 잘 맞는 곳들만 골라 두었습니다. 전부 넣지 않아도 됩니다.",
    recommendPlacesLabel: "Seoul Picks",
    recommendPlacesTitle: "서울 추천",
    recommendSpaLabel: "Jjimjilbang",
    recommendSpaTitle: "찜질방 추천",
    wowpassLabel: "Travel Money",
    wowpassTitle: "WOWPASS",
    wowpassLead: "현금을 많이 들고 다니고 싶지 않다면 WOWPASS가 편합니다. 아래 환율은 계획용이고, 실제 환율은 공식 페이지나 기기 화면을 확인하는 편이 안전합니다.",
    wowpassInfoLabel: "About WOWPASS",
    wowpassInfoTitle: "사용법",
    wowpassRateLabel: "Exchange",
    wowpassRateTitle: "환율 참고",
    mapLabel: "Route & Metro",
    mapTitle: "촬영 이동 경로와 서울 지하철 지도",
    mapLead: "Local Stitch에서 북촌 / 안국역 근처까지 가는 방법과 Uber 대안을 함께 정리했습니다.",
    budgetLabel: "Budget Overview",
    budgetTitle: "여행 예산",
    budgetLead: "TWD, KRW, CNY 전환 가능. 아래 환산은 계획용입니다.",
    budgetTableItem: "항목",
    budgetTableDetail: "설명",
    budgetTableAmount: "금액",
    budgetItemLabel: "항목",
    budgetDetailLabel: "설명",
    budgetAmountLabel: "금액",
  },
};

const content = {
  heroSummary: [
    {
      label: { "zh-Hant": "住宿", en: "Stay", ko: "숙소" },
      value: { "zh-Hant": "Local Stitch\n弘大 5 晚", en: "Local Stitch\n5 nights", ko: "Local Stitch\n홍대 5박" },
    },
    {
      label: { "zh-Hant": "重點行程", en: "Main event", ko: "핵심 일정" },
      value: { "zh-Hant": "5/19 14:00\n韓服拍攝", en: "May 19, 14:00\nHanbok shoot", ko: "5/19 14:00\n한복 촬영" },
    },
    {
      label: { "zh-Hant": "今天先記", en: "Remember", ko: "메모" },
      value: { "zh-Hant": "12:45 出門最穩", en: "12:45 is safest", ko: "12:45 출발 권장" },
    },
  ],
  overviewStats: [
    { label: { "zh-Hant": "旅行長度", en: "Trip length", ko: "여행 기간" }, value: { "zh-Hant": "6 天 5 夜", en: "6 days / 5 nights", ko: "6일 5박" } },
    { label: { "zh-Hant": "住宿區域", en: "Stay area", ko: "숙소 지역" }, value: { "zh-Hant": "弘大 Local Stitch", en: "Hongdae Local Stitch", ko: "홍대 Local Stitch" } },
    { label: { "zh-Hant": "重點拍攝", en: "Featured shoot", ko: "핵심 촬영" }, value: { "zh-Hant": "5/19 14:00 韓服 MV", en: "May 19, 14:00 hanbok MV", ko: "5월 19일 14:00 한복 MV" } },
    { label: { "zh-Hant": "目前已定景點", en: "Confirmed places", ko: "확정 장소" }, value: { "zh-Hant": "景福宮・北村・聖水", en: "Gyeongbokgung, Bukchon, Seongsu", ko: "경복궁・북촌・성수" } },
  ],
  tonePoints: [
    {
      title: { "zh-Hant": "網站顏色直接拿韓服照來配", en: "Palette from hanbok", ko: "한복에서 가져온 컬러" },
      desc: {
        "zh-Hant": "霧藍、奶白、淡粉和一點木質灰，不會太甜，也比較耐看。",
        en: "Mist blue, ivory, soft blush, and weathered wood create a clean, cinematic tone.",
        ko: "안개빛 블루, 아이보리, 연한 핑크, 우드 그레이로 부드럽고 드라마틱한 무드를 만들었습니다.",
      },
    },
    {
      title: { "zh-Hant": "手機上也要快", en: "Mobile-first reading", ko: "모바일 우선" },
      desc: {
        "zh-Hant": "你人在外面最常查的是時間、地址和金額，所以先把這些放好。",
        en: "Bottom navigation and pinned switches keep timing and addresses easy to find on the go.",
        ko: "하단 내비게이션과 고정 전환 버튼으로 이동 중에도 시간을 빠르게 확인할 수 있습니다.",
      },
    },
    {
      title: { "zh-Hant": "不要一頁塞滿", en: "Calm information flow", ko: "정돈된 정보 흐름" },
      desc: {
        "zh-Hant": "住宿、韓服、行程、地圖分開看，比全部堆在一起舒服很多。",
        en: "Instead of crowding everything together, the guide breaks hotel, shoot, map, and budget into elegant chapters.",
        ko: "모든 정보를 한 번에 밀어 넣지 않고, 숙소와 촬영, 지도, 예산을 챕터별로 정리했습니다.",
      },
    },
  ],
  overviewHighlights: [
    {
      title: { "zh-Hant": "住弘大最省事", en: "Hongdae stay is a strong base", ko: "홍대 숙소 베이스가 안정적" },
      desc: {
        "zh-Hant": "吃飯方便，晚上回去也方便，跑景福宮、北村、聖水都不算麻煩。",
        en: "It is practical for food, rest, and moving to Anguk, Gyeongbokgung, and Seongsu.",
        ko: "식사와 휴식, 안국역, 경복궁, 성수 이동이 모두 편합니다.",
      },
    },
    {
      title: { "zh-Hant": "韓服方案已經是完整版", en: "The hanbok package is premium", ko: "한복 패키지가 완성도 높음" },
      desc: {
        "zh-Hant": "攝影、妝造、韓服、12 張精修、200 張原片和 MV 都含了。",
        en: "Includes photographer, makeup artist, premium hanbok, 12 retouched photos, 200 originals, and MV.",
        ko: "촬영감독, 메이크업, 프리미엄 한복, 보정 12장, 원본 200장, MV가 포함됩니다.",
      },
    },
    {
      title: { "zh-Hant": "景點方向也很順", en: "The route is photo-friendly", ko: "사진 찍기 좋은 동선" },
      desc: {
        "zh-Hant": "景福宮、北村和聖水放在同一趟裡，前後氣氛不會斷掉。",
        en: "Gyeongbokgung, Bukchon, and Seongsu create a cohesive mix of palace, alley, and design-district moods.",
        ko: "경복궁, 북촌, 성수의 분위기가 한 여행 안에서 자연스럽게 이어집니다.",
      },
    },
  ],
  overviewNotes: [
    {
      title: { "zh-Hant": "5/19 不要拖到 13:00 後", en: "Leave by 13:00 on May 19", ko: "5월 19일 13:00 전 출발" },
      desc: {
        "zh-Hant": "最穩還是 12:45 出門，這個我建議直接照做。",
        en: "Your safer version is 12:45, which is still the best recommendation.",
        ko: "가장 안전한 출발 시간은 12:45입니다.",
      },
    },
    {
      title: { "zh-Hant": "這間店遲到真的會罰", en: "A 20-minute delay triggers a penalty", ko: "20분 지각 시 벌금" },
      desc: {
        "zh-Hant": "超過 20 分鐘是 ₩50,000，而且還會吃掉拍攝時間。",
        en: "The stated rule is a ₩50,000 penalty and reduced shooting time.",
        ko: "규정상 20분 지각 시 ₩50,000 벌금과 촬영 시간 단축이 있습니다.",
      },
    },
    {
      title: { "zh-Hant": "文件先放一起", en: "Flight and insurance refs are already saved", ko: "항공과 보험 자료 정리 완료" },
      desc: {
        "zh-Hant": "航班、保險和 PDF 都在同一區，臨時要翻比較快。",
        en: "The site includes flight screenshots, insurance screenshots, and the PDF entry point.",
        ko: "항공 스크린샷, 보험 스크린샷, PDF 링크를 함께 넣었습니다.",
      },
    },
  ],
  stay: {
    title: { "zh-Hant": "Local Stitch Seogyo Town", en: "Local Stitch Seogyo Town", ko: "Local Stitch Seogyo Town" },
    subtitle: {
      "zh-Hant": "高級雙床房，5/15-5/20，兩人入住",
      en: "Deluxe Twin Room, May 15-20, for two guests",
      ko: "디럭스 트윈룸, 5월 15일-20일, 2인 숙박",
    },
    chips: ["Hongdae", "5 nights", "2 guests", "Deluxe Twin"],
    rows: [
      { label: { "zh-Hant": "總價", en: "Total", ko: "총액" }, amountTwd: 19247 },
      { label: { "zh-Hant": "平均每晚", en: "Per night", ko: "1박 평균" }, amountTwd: 19247 / 5 },
      { label: { "zh-Hant": "每人分攤", en: "Per person", ko: "1인 기준" }, amountTwd: 19247 / 2 },
      {
        label: { "zh-Hant": "優點", en: "Why this stay works", ko: "장점" },
        text: {
          "zh-Hant": "住弘大就是回飯店方便，拍完照或買完東西都不用再拉很遠。",
          en: "Great Hongdae base with easy returns after food, shopping, and long photo days.",
          ko: "홍대 생활권이라 식사, 쇼핑, 촬영 후 돌아오기 편합니다.",
        },
      },
    ],
    link: "https://www.agoda.com/zh-tw/localstitch-seogyo-town/hotel/seoul-kr.html?checkIn=2026-05-15&los=5&adults=2&rooms=1&travellerType=1&ds=qgMT%2Bi%2FlTw7Mxwmp",
  },
  flights: {
    depart: {
      tag: { "zh-Hant": "去程", en: "Outbound", ko: "출국" },
      title: { "zh-Hant": "台北 → 首爾", en: "Taipei → Seoul", ko: "타이베이 → 서울" },
      rows: [
        { label: { "zh-Hant": "日期", en: "Date", ko: "날짜" }, value: "2026-05-15" },
        { label: { "zh-Hant": "班機", en: "Flight", ko: "편명" }, value: "CI 0162" },
        { label: { "zh-Hant": "時間", en: "Time", ko: "시간" }, value: "15:30 TPE → 19:05 ICN" },
        { label: { "zh-Hant": "艙等", en: "Class", ko: "좌석 등급" }, value: { "zh-Hant": "經濟艙基本", en: "Economy Basic", ko: "이코노미 베이직" } },
      ],
    },
    back: {
      tag: { "zh-Hant": "回程", en: "Return", ko: "귀국" },
      title: { "zh-Hant": "首爾 → 台北", en: "Seoul → Taipei", ko: "서울 → 타이베이" },
      rows: [
        { label: { "zh-Hant": "日期", en: "Date", ko: "날짜" }, value: "2026-05-20" },
        { label: { "zh-Hant": "時間", en: "Time", ko: "시간" }, value: "20:05 ICN → 21:50 TPE" },
        { label: { "zh-Hant": "艙等", en: "Class", ko: "좌석 등급" }, value: { "zh-Hant": "經濟艙基本", en: "Economy Basic", ko: "이코노미 베이직" } },
        { label: { "zh-Hant": "票價", en: "Fare", ko: "운임" }, amountTwd: 12718 },
      ],
    },
    support: [
      {
        label: { "zh-Hant": "餐點提醒", en: "Meal reminder", ko: "기내식 메모" },
        value: {
          "zh-Hant": "5/14 前預訂餐點與自動報到。",
          en: "Pre-order meals and start auto check-in by May 14.",
          ko: "5월 14일 전 기내식과 자동 체크인을 확인하세요.",
        },
      },
      {
        label: { "zh-Hant": "保險", en: "Insurance", ko: "보험" },
        value: {
          "zh-Hant": "已收到安達旅綜投保確認通知。",
          en: "Chubb travel insurance confirmation is already received.",
          ko: "처브 여행 보험 확인 메일을 이미 받았습니다.",
        },
      },
      {
        label: { "zh-Hant": "卡片備忘", en: "Card note", ko: "카드 메모" },
        value: {
          "zh-Hant": "你有華航黑卡，出發前記得再看一次有沒有額外權益可用。",
          en: "You mentioned a China Airlines black card, so the site keeps a high-priority reminder to confirm benefits before departure.",
          ko: "중화항공 블랙카드가 있다고 남겨 두고, 출발 전 혜택 확인 메모를 넣어 두었습니다.",
        },
      },
    ],
  },
  hanbok: {
    highlights: [
      { label: { "zh-Hant": "拍攝時間", en: "Shoot time", ko: "촬영 시간" }, value: { "zh-Hant": "5/19（二）14:00", en: "Tue, May 19 at 14:00", ko: "5월 19일 화요일 14:00" } },
      { label: { "zh-Hant": "地點", en: "Location", ko: "장소" }, value: "옥한복 / Ok Hanbok" },
      { label: { "zh-Hant": "出發點", en: "Starting point", ko: "출발지" }, value: { "zh-Hant": "Local Stitch 弘大", en: "Local Stitch Hongdae", ko: "Local Stitch 홍대" } },
    ],
    plan: {
      title: { "zh-Hant": "當天交通方案", en: "Transport plan", ko: "당일 이동 플랜" },
      items: [
        {
          title: { "zh-Hant": "地鐵最穩", en: "Most stable: subway", ko: "가장 안정적: 지하철" },
          desc: {
            "zh-Hant": "弘大入口站 → 2號線到乙支路3街 → 轉 3 號線到安國站 → 2 號出口步行 5-8 分鐘。",
            en: "Hongik Univ. Station → Line 2 to Euljiro 3-ga → transfer to Line 3 to Anguk → Exit 2 and walk 5-8 minutes.",
            ko: "홍대입구역 → 2호선 을지로3가 → 3호선 안국역 환승 → 2번 출구에서 도보 5-8분.",
          },
        },
        {
          title: { "zh-Hant": "時間抓 35-45 分鐘", en: "Allow 35-45 minutes", ko: "35-45분 여유" },
          desc: {
            "zh-Hant": "最晚 13:00 出門，保險版 12:45 出門。",
            en: "Leave by 13:00 at the latest, or 12:45 for the safer version.",
            ko: "늦어도 13:00, 안전하게는 12:45 출발.",
          },
        },
        {
          title: { "zh-Hant": "怕迷路就叫車", en: "Use Uber if you want ease", ko: "길이 걱정되면 Uber" },
          desc: {
            "zh-Hant": "車程約 20-25 分鐘，約 ₩8,000-12,000。",
            en: "About 20-25 minutes by car, roughly ₩8,000-12,000.",
            ko: "차로 약 20-25분, 요금은 대략 ₩8,000-12,000.",
          },
        },
      ],
    },
    budget: {
      title: { "zh-Hant": "韓服方案費用", en: "Hanbok package cost", ko: "한복 패키지 비용" },
      items: [
        { title: { "zh-Hant": "闺蜜套餐", en: "Bestie package", ko: "친구 패키지" }, amountTwd: 15311.0, amountKrw: 640000 },
        { title: { "zh-Hant": "MV 加購", en: "MV add-on", ko: "MV 추가" }, amountTwd: 7177.0, amountKrw: 300000 },
        { title: { "zh-Hant": "總價", en: "Total", ko: "총액" }, amountTwd: 22488.0, amountKrw: 940000 },
        { title: { "zh-Hant": "已付訂金", en: "Deposit paid", ko: "예약금" }, amountCny: 300 },
        {
          title: { "zh-Hant": "現場約需支付", en: "Approx. to pay on site", ko: "현장 결제 예상" },
          amountKrw: 880000,
        },
      ],
      included: [
        { "zh-Hant": "明星攝影師", en: "Celebrity photographer", ko: "스타 포토그래퍼" },
        { "zh-Hant": "明星化妝師", en: "Celebrity makeup artist", ko: "스타 메이크업 아티스트" },
        { "zh-Hant": "高定韓服", en: "Premium hanbok styling", ko: "프리미엄 한복" },
        { "zh-Hant": "精修 12 張", en: "12 retouched photos", ko: "보정 12장" },
        { "zh-Hant": "原片 200 張", en: "200 original files", ko: "원본 200장" },
        { "zh-Hant": "MV 成片", en: "Edited MV video", ko: "편집 완료 MV" },
      ],
    },
    rules: [
      {
        title: { "zh-Hant": "遲到規則", en: "Late policy", ko: "지각 규정" },
        desc: {
          "zh-Hant": "超過 20 分鐘就是 ₩50,000，拍攝時間也會跟著變短。",
          en: "A 20-minute delay incurs a ₩50,000 penalty and cuts into shooting time.",
          ko: "20분 지각 시 ₩50,000 벌금과 촬영 시간 단축이 있습니다.",
        },
      },
      {
        title: { "zh-Hant": "北村容易迷路", en: "Bukchon is easy to get lost in", ko: "북촌은 길이 헷갈리기 쉬움" },
        desc: {
          "zh-Hant": "北村那區真的很容易繞一下就迷路，當天不要把時間抓太緊。",
          en: "Do not compress the schedule too tightly; leave time for navigation.",
          ko: "일정 여유를 두고 길 찾는 시간을 반드시 확보하세요.",
        },
      },
      {
        title: { "zh-Hant": "PDF 與工作室連結都已放上", en: "PDF and studio links are attached", ko: "PDF와 스튜디오 링크 포함" },
        desc: {
          "zh-Hant": "工作室頁、MV 範例和 PDF 都能直接從這裡打開。",
          en: "The Xiaohongshu studio reference and related links open directly from the site.",
          ko: "샤오홍슈 스튜디오 링크를 사이트에서 바로 열 수 있습니다.",
        },
      },
    ],
    links: [
      { label: { "zh-Hant": "小紅書 MV 範例", en: "MV sample", ko: "MV 샘플" }, href: "http://xhslink.com/o/15TW7yFNm7q" },
      { label: { "zh-Hant": "工作室頁面", en: "Studio profile", ko: "스튜디오 페이지" }, href: "http://xhslink.com/o/1yRuTcW00pc" },
    ],
  },
  itineraryHighlights: [
    { label: { "zh-Hant": "已排定", en: "Planned", ko: "확정 일정" }, value: { "zh-Hant": "5/19 景福宮・北村・韓服拍攝", en: "May 19: Gyeongbokgung, Bukchon, hanbok shoot", ko: "5/19 경복궁・북촌・한복 촬영" } },
    { label: { "zh-Hant": "住宿", en: "Stay", ko: "숙소" }, value: { "zh-Hant": "弘大 5 晚", en: "5 nights in Hongdae", ko: "홍대 5박" } },
    { label: { "zh-Hant": "主線", en: "Main storyline", ko: "메인 무드" }, value: { "zh-Hant": "清雅韓劇風", en: "Elegant K-drama mood", ko: "청아한 드라마 무드" } },
  ],
  itinerary: [
    {
      date: "2026-05-15",
      title: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" },
      desc: {
        "zh-Hant": "尚未安排",
        en: "Not arranged yet.",
        ko: "아직 정하지 않았습니다.",
      },
      tags: {
        "zh-Hant": ["尚未安排"],
        en: ["Not arranged yet"],
        ko: ["아직 미정"],
      },
    },
    {
      date: "2026-05-16",
      title: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" },
      desc: {
        "zh-Hant": "尚未安排",
        en: "Not arranged yet.",
        ko: "아직 정하지 않았습니다.",
      },
      tags: {
        "zh-Hant": ["尚未安排"],
        en: ["Not arranged yet"],
        ko: ["아직 미정"],
      },
    },
    {
      date: "2026-05-17",
      title: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" },
      desc: {
        "zh-Hant": "尚未安排",
        en: "Not arranged yet.",
        ko: "아직 정하지 않았습니다.",
      },
      tags: {
        "zh-Hant": ["尚未安排"],
        en: ["Not arranged yet"],
        ko: ["아직 미정"],
      },
    },
    {
      date: "2026-05-18",
      title: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" },
      desc: {
        "zh-Hant": "尚未安排",
        en: "Not arranged yet.",
        ko: "아직 정하지 않았습니다.",
      },
      tags: {
        "zh-Hant": ["尚未安排"],
        en: ["Not arranged yet"],
        ko: ["아직 미정"],
      },
    },
    {
      date: "2026-05-19",
      title: { "zh-Hant": "景福宮＋北村韓屋村＋韓服拍攝", en: "Gyeongbokgung, Bukchon, and hanbok shoot", ko: "경복궁 + 북촌 + 한복 촬영" },
      desc: {
        "zh-Hant": "這天先跑景福宮和北村韓屋村，14:00 到 옥한복 拍攝，建議 12:45 從飯店出發。",
        en: "Plan Gyeongbokgung and Bukchon first, then the 14:00 hanbok shoot at Ok Hanbok. Recommended departure: 12:45.",
        ko: "이날은 경복궁과 북촌을 먼저 보고, 14:00 옥한복 촬영으로 이어집니다. 숙소에서는 12:45 출발 권장.",
      },
      tags: {
        "zh-Hant": ["景福宮", "北村韓屋村", "14:00", "安國站", "不要遲到"],
        en: ["Gyeongbokgung", "Bukchon", "14:00", "Anguk Station", "Do not run late"],
        ko: ["경복궁", "북촌", "14:00", "안국역", "지각 금지"],
      },
    },
    {
      date: "2026-05-20",
      title: { "zh-Hant": "尚未安排", en: "Not arranged yet", ko: "아직 미정" },
      desc: {
        "zh-Hant": "尚未安排",
        en: "Not arranged yet.",
        ko: "아직 정하지 않았습니다.",
      },
      tags: {
        "zh-Hant": ["尚未安排"],
        en: ["Not arranged yet"],
        ko: ["아직 미정"],
      },
    },
  ],
  routeSteps: [
    {
      title: { "zh-Hant": "從飯店步行到弘大入口站", en: "Walk from the hotel to Hongik Univ. Station", ko: "숙소에서 홍대입구역까지 도보" },
      desc: { "zh-Hant": "約 10 分鐘。", en: "About 10 minutes.", ko: "약 10분." },
    },
    {
      title: { "zh-Hant": "2 號線轉 3 號線", en: "Take Line 2, then transfer to Line 3", ko: "2호선 후 3호선 환승" },
      desc: {
        "zh-Hant": "Hongik University Station → Euljiro 3-ga → Anguk Station。",
        en: "Hongik University Station → Euljiro 3-ga → Anguk Station.",
        ko: "홍대입구역 → 을지로3가 → 안국역.",
      },
    },
    {
      title: { "zh-Hant": "安國站 2 號出口", en: "Use Anguk Station Exit 2", ko: "안국역 2번 출구" },
      desc: {
        "zh-Hant": "出站後步行約 5-8 分鐘到韓服店。",
        en: "Walk another 5-8 minutes to the hanbok shop.",
        ko: "출구에서 한복집까지 도보 5-8분.",
      },
    },
    {
      title: { "zh-Hant": "Uber 備案", en: "Uber backup plan", ko: "Uber 플랜 B" },
      desc: {
        "zh-Hant": "約 20-25 分鐘，約 ₩8,000-12,000，怕迷路就直接叫車。",
        en: "Around 20-25 minutes and roughly ₩8,000-12,000 if you prefer the easier option.",
        ko: "약 20-25분, ₩8,000-12,000 정도. 편하게 가고 싶으면 호출하세요.",
      },
    },
  ],
  mapLinks: [
    {
      label: { "zh-Hant": "Local Stitch Agoda", en: "Local Stitch Agoda", ko: "Local Stitch Agoda" },
      href: "https://www.agoda.com/zh-tw/localstitch-seogyo-town/hotel/seoul-kr.html?checkIn=2026-05-15&los=5&adults=2&rooms=1&travellerType=1&ds=qgMT%2Bi%2FlTw7Mxwmp",
    },
    {
      label: { "zh-Hant": "옥한복 地圖", en: "Ok Hanbok map", ko: "옥한복 지도" },
      href: "https://www.google.com/maps/search/%EC%98%A5%ED%95%9C%EB%B3%B5/",
    },
    {
      label: { "zh-Hant": "首爾地鐵官方說明", en: "Seoul subway guide", ko: "서울 지하철 가이드" },
      href: "https://english.visitseoul.net/subway",
    },
  ],
  recommendPlaces: [
    {
      title: { "zh-Hant": "聖水＋首爾林", en: "Seongsu + Seoul Forest", ko: "성수 + 서울숲" },
      desc: {
        "zh-Hant": "如果想保留一點現在首爾最有設計感的區域，聖水還是很適合。最近首爾林到聖水一帶也正好有 2026 首爾國際庭園展。",
        en: "Seongsu is still a strong pick for design stores, cafes, and a current Seoul mood. The Seoul International Garden Show is also running around Seoul Forest and Seongsu in 2026.",
        ko: "성수는 여전히 디자인 숍과 카페, 요즘 서울 분위기를 보기 좋은 곳입니다. 2026 서울국제정원박람회도 서울숲-성수 일대에서 진행 중입니다.",
      },
      link: "https://visit.seoul.kr/en/neighborhoods/seongsu",
    },
    {
      title: { "zh-Hant": "益善洞", en: "Ikseon-dong", ko: "익선동" },
      desc: {
        "zh-Hant": "如果你們喜歡韓屋巷子但又想加一點咖啡店和約會感，益善洞很順，而且從安國 / 鐘路一帶接過去也方便。",
        en: "Ikseon-dong works well if you want hanok alleys with more cafes and date-night energy. It connects naturally with the Anguk / Jongno area.",
        ko: "한옥 골목에 카페와 데이트 무드를 조금 더하고 싶다면 익선동이 잘 맞습니다. 안국·종로 동선과도 자연스럽게 이어집니다.",
      },
      link: "https://english.visitseoul.net/attractions/IkseongdongHanokVillage/ENP037008",
    },
    {
      title: { "zh-Hant": "望遠市場", en: "Mangwon Market", ko: "망원시장" },
      desc: {
        "zh-Hant": "住弘大的話很適合挑一個早上或下午去望遠市場，吃小吃、逛一下附近咖啡店，節奏比較生活感。",
        en: "Since you are staying in Hongdae, Mangwon Market is an easy low-pressure add-on for snacks and a slower neighborhood afternoon.",
        ko: "홍대에 머문다면 망원시장은 가볍게 다녀오기 좋습니다. 간식 먹고 근처 카페까지 이어가기 편합니다.",
      },
      link: "https://visit.seoul.kr/en/places/mangwon-market",
    },
  ],
  recommendSpa: [
    {
      title: { "zh-Hant": "숲속한방랜드", en: "Supsok Hanbang Land", ko: "숲속한방랜드" },
      desc: {
        "zh-Hant": "如果你想要比較像韓國在地感的汗蒸幕，這個很適合。它主打傳統炭窯型汗蒸幕，而且離新村不算遠，從弘大過去也順。",
        en: "A good pick if you want a more traditional local-style jjimjilbang. It is known for charcoal kiln saunas and is reasonably convenient from Hongdae.",
        ko: "조금 더 전통적인 찜질방 분위기를 원하면 여기 추천입니다. 숯가마 스타일이 강점이고 홍대에서도 크게 멀지 않습니다.",
      },
      link: "https://visit.seoul.kr/en/places/supsok-hanbang-land",
    },
    {
      title: { "zh-Hant": "Spa Lei", en: "Spa Lei", ko: "스파레이" },
      desc: {
        "zh-Hant": "如果想去比較乾淨、安靜一點的路線，Spa Lei 會更舒服。女生去通常接受度很高，整體也比較精緻。",
        en: "If you want something cleaner, quieter, and more polished, Spa Lei is the softer choice. It is often recommended for women visitors.",
        ko: "조금 더 깔끔하고 조용한 쪽을 원하면 Spa Lei가 편합니다. 여성 방문객에게 특히 선호도가 높은 편입니다.",
      },
      link: "https://visit.seoul.kr/en/articles/seoul-jjimjilbang-spa-guide-2025",
    },
  ],
  wowpassInfo: [
    {
      title: { "zh-Hant": "像一張旅遊用預付卡", en: "A prepaid travel card", ko: "여행용 선불카드" },
      desc: {
        "zh-Hant": "可以先儲值，再拿來小額消費。很多人會把它當成在韓國旅遊時的主力支付卡之一。",
        en: "You top it up first and then use it for everyday spending in Korea.",
        ko: "먼저 충전한 뒤 소액 결제용으로 쓰기 편한 여행용 카드입니다.",
      },
    },
    {
      title: { "zh-Hant": "交通功能要另外確認", en: "Transit function should be checked separately", ko: "교통 기능은 별도 확인" },
      desc: {
        "zh-Hant": "WOWPASS 本身常會和交通功能一起被提到，但你出發前還是建議直接在官方頁或 App 再確認最新版本的使用方式。",
        en: "WOWPASS is often discussed alongside transit use, but it is still best to verify the current setup in the official app before departure.",
        ko: "교통 기능과 함께 많이 언급되지만, 출발 전 공식 앱에서 최신 사용 방식을 다시 확인하는 편이 좋습니다.",
      },
    },
    {
      title: { "zh-Hant": "最實用的用法", en: "Most practical use", ko: "가장 실용적인 사용법" },
      desc: {
        "zh-Hant": "先少量換入，吃飯、便利商店、咖啡和臨時小額支出用這張，現金就不用帶太多。",
        en: "Load a moderate amount first and use it for cafes, convenience stores, and smaller purchases.",
        ko: "처음엔 적당히만 충전해서 카페, 편의점, 식사 같은 소액 결제에 쓰는 방식이 가장 편합니다.",
      },
    },
  ],
  wowpassRates: [
    {
      title: { "zh-Hant": "網站規劃匯率", en: "Planning rate used on this site", ko: "이 사이트의 계획용 환율" },
      desc: {
        "zh-Hant": "目前網站換算先用 1 TWD ≈ 41.8 KRW，方便你快速抓預算。",
        en: "This site currently uses 1 TWD ≈ 41.8 KRW for planning.",
        ko: "이 사이트에서는 계획용으로 1 TWD ≈ 41.8 KRW를 사용하고 있습니다.",
      },
    },
    {
      title: { "zh-Hant": "人民幣參考", en: "CNY reference", ko: "위안화 참고" },
      desc: {
        "zh-Hant": "目前網站換算約用 1 CNY ≈ 187 KRW，主要是讓你估算訂金和現場補款。",
        en: "This site roughly uses 1 CNY ≈ 187 KRW for planning your deposit and remaining payment.",
        ko: "이 사이트에서는 대략 1 CNY ≈ 187 KRW로 계산하고 있습니다.",
      },
    },
    {
      title: { "zh-Hant": "即時匯率看官方", en: "Check live rates on the official page", ko: "실시간 환율은 공식 페이지 확인" },
      desc: {
        "zh-Hant": "WOWPASS / WOW EXCHANGE 的即時匯率會浮動，現場操作前請直接看官方頁面或機台畫面。",
        en: "WOWPASS / WOW EXCHANGE live rates move over time, so check the official page or kiosk right before exchanging.",
        ko: "WOWPASS / WOW EXCHANGE 실시간 환율은 계속 변하므로, 환전 직전에 공식 페이지나 기기 화면을 확인하세요.",
      },
      link: "https://www.wowexchange.net/exchange/rate?lang=en_US",
    },
  ],
  budgetSummary: [
    { label: { "zh-Hant": "兩人總計", en: "Total for two", ko: "2인 총액" }, amountTwd: 54453 },
    { label: { "zh-Hant": "每人約", en: "Per person", ko: "1인 약" }, amountTwd: 27227 },
    { label: { "zh-Hant": "飯店", en: "Hotel", ko: "숙소" }, amountTwd: 19247 },
    { label: { "zh-Hant": "機票", en: "Flights", ko: "항공" }, amountTwd: 12718 },
    { label: { "zh-Hant": "韓服方案", en: "Hanbok package", ko: "한복 패키지" }, amountKrw: 940000 },
  ],
  budgetRows: [
    {
      item: { "zh-Hant": "兩人總計", en: "Total for two", ko: "2인 총액" },
      detail: {
        "zh-Hant": "飯店 + 機票 + 韓服方案",
        en: "Hotel + flights + hanbok package",
        ko: "숙소 + 항공 + 한복 패키지",
      },
      amountTwd: 54453,
    },
    {
      item: { "zh-Hant": "每人約", en: "Per person", ko: "1인 약" },
      detail: {
        "zh-Hant": "以上三項平分兩人",
        en: "Split between two people",
        ko: "위 세 항목을 2인 기준으로 나눈 금액",
      },
      amountTwd: 27227,
    },
    {
      item: { "zh-Hant": "飯店", en: "Hotel", ko: "숙소" },
      detail: { "zh-Hant": "Local Stitch 5 晚，兩人", en: "Local Stitch for 5 nights, 2 guests", ko: "Local Stitch 5박, 2인" },
      amountTwd: 19247,
    },
    {
      item: { "zh-Hant": "機票", en: "Flights", ko: "항공" },
      detail: { "zh-Hant": "目前截圖票價", en: "Current screenshot fare", ko: "현재 스크린샷 기준" },
      amountTwd: 12718,
    },
    {
      item: { "zh-Hant": "韓服套餐", en: "Hanbok package", ko: "한복 패키지" },
      detail: { "zh-Hant": "闺蜜套餐 + MV", en: "Bestie package + MV", ko: "친구 패키지 + MV" },
      amountKrw: 940000,
    },
    {
      item: { "zh-Hant": "韓服訂金", en: "Hanbok deposit", ko: "한복 예약금" },
      detail: { "zh-Hant": "已付 300 人民幣", en: "300 CNY already paid", ko: "300위안 선결제" },
      amountCny: 300,
    },
    {
      item: { "zh-Hant": "現場需付", en: "To pay on site", ko: "현장 결제" },
      detail: { "zh-Hant": "約剩 ₩880,000", en: "Approx. remaining ₩880,000", ko: "약 ₩880,000 남음" },
      amountKrw: 880000,
    },
  ],
};

function getText(entry) {
  if (typeof entry === "string") return entry;
  return entry?.[state.lang] ?? "";
}

function amountFromItem(item) {
  if (state.currency === "TWD") {
    if (typeof item.amountTwd === "number") return item.amountTwd;
    if (typeof item.amountKrw === "number") return item.amountKrw / rates.KRW.rate;
    if (typeof item.amountCny === "number") return item.amountCny / rates.CNY.rate;
  }

  if (state.currency === "KRW") {
    if (typeof item.amountKrw === "number") return item.amountKrw;
    if (typeof item.amountTwd === "number") return item.amountTwd * rates.KRW.rate;
    if (typeof item.amountCny === "number") return (item.amountCny / rates.CNY.rate) * rates.KRW.rate;
  }

  if (state.currency === "CNY") {
    if (typeof item.amountCny === "number") return item.amountCny;
    if (typeof item.amountTwd === "number") return item.amountTwd * rates.CNY.rate;
    if (typeof item.amountKrw === "number") return (item.amountKrw / rates.KRW.rate) * rates.CNY.rate;
  }

  return 0;
}

function formatCurrency(item) {
  const amount = amountFromItem(item);
  const meta = rates[state.currency];
  return `${meta.symbol}${Math.round(amount).toLocaleString()}`;
}

function makeStatCard(item, value) {
  return `
    <article class="overview-stat">
      <div class="overview-stat-label">${getText(item.label)}</div>
      <div class="overview-stat-value">${value}</div>
    </article>
  `;
}

function makeMiniCard(item) {
  return `
    <article class="mini-card">
      <div class="mini-card-label">${getText(item.label)}</div>
      <div class="mini-card-value">${getText(item.value)}</div>
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

function makeLinkButton(link, fallbackLabel = "Link") {
  const label = link.label ? getText(link.label) : fallbackLabel;
  return `<a class="resource-link" href="${link.href || link.link}" target="_blank" rel="noreferrer">${label}</a>`;
}

function renderBulletList(elementId, items) {
  document.getElementById(elementId).innerHTML = items.map(makeBullet).join("");
}

function renderMiniCards(elementId, items) {
  document.getElementById(elementId).innerHTML = items.map(makeMiniCard).join("");
}

function renderLinkList(elementId, items, fallbackLabel) {
  document.getElementById(elementId).innerHTML = items.map((item) => makeLinkButton(item, fallbackLabel)).join("");
}

function renderOverview() {
  document.getElementById("overviewStats").innerHTML = content.overviewStats.map((item) => makeStatCard(item, getText(item.value))).join("");

  document.getElementById("tonePoints").innerHTML = content.tonePoints
    .map(
      (item) => `
        <div class="cover-point">
          <div class="bullet-title">${getText(item.title)}</div>
          <div class="bullet-desc">${getText(item.desc)}</div>
        </div>
      `
    )
    .join("");

  renderBulletList("overviewHighlights", content.overviewHighlights);
  renderBulletList("overviewNotes", content.overviewNotes);
}

function renderHero() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (text[state.lang][key]) node.textContent = text[state.lang][key];
  });

  document.getElementById("heroTags").innerHTML = text[state.lang].heroTags.map((tag) => `<span>${tag}</span>`).join("");
  document.getElementById("heroSummary").innerHTML = content.heroSummary
    .map(
      (item) => `
        <article class="hero-summary-card">
          <div class="hero-summary-label">${getText(item.label)}</div>
          <div class="hero-summary-value">${getText(item.value).replace("\n", "<br />")}</div>
        </article>
      `
    )
    .join("");
}

function renderStay() {
  document.getElementById("stayCard").innerHTML = `
    <div class="stay-card-top">
      <div>
        <h3 class="stay-card-title">${getText(content.stay.title)}</h3>
        <p class="stay-card-subtitle">${getText(content.stay.subtitle)}</p>
      </div>
      <span class="pill">${formatCurrency({ amountTwd: 19247 })}</span>
    </div>
    <div class="tag-list">${content.stay.chips.map((chip) => `<span>${chip}</span>`).join("")}</div>
    <div class="stay-detail-list">
      ${content.stay.rows
        .map((row) => {
          const value = row.text ? getText(row.text) : formatCurrency(row);
          return `
            <div class="stay-detail-row">
              <span class="stay-detail-label">${getText(row.label)}</span>
              <span class="stay-detail-value">${value}</span>
            </div>
          `;
        })
        .join("")}
    </div>
    <div class="resource-actions">
      <a class="resource-link" href="${content.stay.link}" target="_blank" rel="noreferrer">Agoda</a>
    </div>
  `;
}

function renderFlightCard(data, elementId) {
  document.getElementById(elementId).innerHTML = `
    <span class="flight-card-tag">${getText(data.tag)}</span>
    <h3>${getText(data.title)}</h3>
    <div class="stay-detail-list">
      ${data.rows
        .map((row) => {
          const value = typeof row.value === "object" ? getText(row.value) : row.value || formatCurrency(row);
          return `
            <div class="info-line">
              <span class="info-label">${getText(row.label)}</span>
              <span class="info-value">${value}</span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderFlights() {
  renderFlightCard(content.flights.depart, "departFlight");
  renderFlightCard(content.flights.back, "returnFlight");
  renderMiniCards("flightSupport", content.flights.support);
}

function renderHanbok() {
  renderMiniCards("hanbokHighlights", content.hanbok.highlights);

  document.getElementById("hanbokPlan").innerHTML = `
    <h3>${getText(content.hanbok.plan.title)}</h3>
    <div class="bullet-list">${content.hanbok.plan.items.map(makeBullet).join("")}</div>
  `;

  document.getElementById("hanbokBudget").innerHTML = `
    <h3>${getText(content.hanbok.budget.title)}</h3>
    <div class="bullet-list">
      ${content.hanbok.budget.items
        .map(
          (item) => `
            <article class="bullet-item">
              <div class="bullet-title">${getText(item.title)}</div>
              <div class="bullet-desc">${formatCurrency(item)}</div>
            </article>
          `
        )
        .join("")}
    </div>
    <div class="tag-list">${content.hanbok.budget.included.map((item) => `<span>${getText(item)}</span>`).join("")}</div>
  `;

  renderBulletList("hanbokRules", content.hanbok.rules);
  renderLinkList("hanbokLinks", content.hanbok.links);
}

function renderItinerary() {
  renderMiniCards("itineraryHighlights", content.itineraryHighlights);

  document.getElementById("timeline").innerHTML = content.itinerary
    .map(
      (day, index) => `
        <article class="timeline-card">
          <div class="timeline-card-header">
            <div>
              <div class="timeline-day-label">Day ${index + 1}</div>
              <div class="timeline-date">${day.date}</div>
              <h3>${getText(day.title)}</h3>
            </div>
          </div>
          <p class="bullet-desc">${getText(day.desc)}</p>
          <div class="tag-list">${day.tags[state.lang].map((tag) => `<span>${tag}</span>`).join("")}</div>
        </article>
      `
    )
    .join("");
}

function renderRecommendations() {
  document.getElementById("recommendPlaces").innerHTML = content.recommendPlaces
    .map(
      (item) => `
        <article class="bullet-item">
          <div class="bullet-title">${getText(item.title)}</div>
          <div class="bullet-desc">${getText(item.desc)}</div>
          <div class="resource-actions">
            ${makeLinkButton(item)}
          </div>
        </article>
      `
    )
    .join("");

  document.getElementById("recommendSpa").innerHTML = content.recommendSpa
    .map(
      (item) => `
        <article class="bullet-item">
          <div class="bullet-title">${getText(item.title)}</div>
          <div class="bullet-desc">${getText(item.desc)}</div>
          <div class="resource-actions">
            ${makeLinkButton(item)}
          </div>
        </article>
      `
    )
    .join("");
}

function renderWowpass() {
  renderBulletList("wowpassInfo", content.wowpassInfo);

  document.getElementById("wowpassRates").innerHTML = content.wowpassRates
    .map(
      (item) => `
        <article class="bullet-item">
          <div class="bullet-title">${getText(item.title)}</div>
          <div class="bullet-desc">${getText(item.desc)}</div>
          ${item.link ? `<div class="resource-actions">${makeLinkButton(item, "Official rate")}</div>` : ""}
        </article>
      `
    )
    .join("");
}

function renderMap() {
  document.getElementById("routeSteps").innerHTML = content.routeSteps
    .map(
      (step) => `
        <article class="route-step">
          <div class="route-step-title">${getText(step.title)}</div>
          <div class="route-step-desc">${getText(step.desc)}</div>
        </article>
      `
    )
    .join("");

  renderLinkList("mapLinks", content.mapLinks);
}

function renderBudget() {
  document.getElementById("budgetSummary").innerHTML = content.budgetSummary
    .map(
      (item) => `
        <article class="budget-summary-card">
          <div class="budget-summary-label">${getText(item.label)}</div>
          <div class="budget-summary-value">${formatCurrency(item)}</div>
        </article>
      `
    )
    .join("");

  const labels = text[state.lang];
  document.getElementById("budgetBody").innerHTML = content.budgetRows
    .map(
      (row) => `
        <tr>
          <td data-label="${labels.budgetItemLabel}">${getText(row.item)}</td>
          <td data-label="${labels.budgetDetailLabel}">${getText(row.detail)}</td>
          <td class="budget-amount" data-label="${labels.budgetAmountLabel}">${formatCurrency(row)}</td>
        </tr>
      `
    )
    .join("");
}

function bindControls() {
  document.querySelectorAll("[data-lang]").forEach((node) => {
    node.setAttribute("aria-pressed", String(node.dataset.lang === state.lang));
  });

  document.querySelectorAll("[data-currency]").forEach((node) => {
    node.setAttribute("aria-pressed", String(node.dataset.currency === state.currency));
  });

  document.querySelectorAll(".nav-item").forEach((node) => {
    node.setAttribute("aria-pressed", String(node.classList.contains("active")));
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      document.querySelectorAll("[data-lang]").forEach((node) => {
        const isActive = node.dataset.lang === state.lang;
        node.classList.toggle("active", isActive);
        node.setAttribute("aria-pressed", String(isActive));
      });
      renderAll();
    });
  });

  document.querySelectorAll("[data-currency]").forEach((button) => {
    button.addEventListener("click", () => {
      state.currency = button.dataset.currency;
      document.querySelectorAll("[data-currency]").forEach((node) => {
        const isActive = node.dataset.currency === state.currency;
        node.classList.toggle("active", isActive);
        node.setAttribute("aria-pressed", String(isActive));
      });
      renderAll();
    });
  });

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;
      document.querySelectorAll(".nav-item").forEach((node) => {
        const isActive = node === button;
        node.classList.toggle("active", isActive);
        node.setAttribute("aria-pressed", String(isActive));
      });
      document.querySelectorAll(".page-section").forEach((section) => section.classList.toggle("active", section.id === target));
      window.scrollTo({ top: 0, behavior: "smooth" });
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

function renderAll() {
  document.documentElement.lang = state.lang;
  renderHero();
  renderOverview();
  renderStay();
  renderFlights();
  renderHanbok();
  renderItinerary();
  renderRecommendations();
  renderWowpass();
  renderMap();
  renderBudget();
}

bindControls();
bindProgress();
renderAll();
