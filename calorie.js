let totalCalories = 0;
let calorieEntries = JSON.parse(localStorage.getItem('calorieEntries')) || [];

// 칼로리 데이터베이스
const calorieData = {
    "KFC비스킷": 270,
    "햄버거": 340,
    "김치찌개": 245,
    "가지": 18,
    "갈아만든 배, 사과": 160,
    "감": 68,
    "감자 샐러드": 240,
    "강냉이": 80,
    "건 오징어채": 200,
    "검정콩": 38,
    "고구마": 131,
    "고등어": 75,
    "고추장": 34,
    "곱창전골": 550,
    "과일파르페": 258,
    "국수 삶은것": 200,
    "김 젠것": 11,
    "깍두기": 30,
    "꽁치 통조림": 100,
    "꿀": 69,
    "가자미": 50,
    "갈비탕": 330,
    "갈치": 50,
    "감자": 66,
    "감자튀김": 220,
    "건빵": 114,
    "건포도": 70,
    "경단": 223,
    "고등어 통조림": 100,
    "고추": 20,
    "곱창": 180,
    "과일젤리": 172,
    "광어": 50,
    "귤": 24,
    "김 초밥": 500,
    "깻잎": 45,
    "꽁치": 75,
    "꿀차": 72,
    "낙지전골": 185,
    "달걀 큰거": 75,
    "닭고기": 125,
    "당근주스": 65,
    "더블버거": 610,
    "도라지": 40,
    "도미": 50,
    "돌냄비우동": 565,
    "돼지 족발": 150,
    "두유": 125,
    "딸기잼": 63,
    "땅콩": 150,
    "떡국": 568,
    "떡볶이": 482,
    "닭고기꼬치구이": 50,
    "당근": 32,
    "대추음료": 125,
    "도넛츠": 125,
    "도리야": 760,
    "돈까스": 553,
    "돼지고기": 125,
    "된장찌개": 130,
    "딸기": 23,
    "딸기쉐이크": 362,
    "땅콩버터": 150,
    "떡라면": 580,
    "라면": 450,
    "라이트콜라": 27,
    "런천미트": 100,
    "레몬차": 59,
    "라면 1봉": 454,
    "라자냐": 548,
    "레몬소주": 80,
    "마가린": 103,
    "마른오징어": 200,
    "막걸리": 100,
    "만두국": 477,
    "맛술": 42,
    "모닝빵": 164,
    "모카빵": 305,
    "물냉면": 520,
    "미역국": 477,
    "밀가루": 20,
    "밀크쉐이크": 325,
    "마늘바게트": 65,
    "마요네즈": 90,
    "만두": 300,
    "맛살": 35,
    "맥도날드아이스크림": 310,
    "모밀국수": 530,
    "무": 18,
    "미싯가루": 20,
    "민어": 75,
    "밀크쉐이크(200ml)": 340,
    "바케트빵": 132,
    "바람떡": 267,
    "밤": 80,
    "배추김치": 30,
    "백설기": 241,
    "버터 작은술": 101,
    "벌꿀": 30,
    "병맥주": 100,
    "보리밥": 300,
    "볶음밥": 617,
    "북어": 100,
    "붕어빵": 200,
    "비빔국수": 519,
    "비빔밥": 500,
    "빼빼로": 100,
    "뽀또": 120,
    "바나나 큰 것": 100,
    "바이오거트": 110,
    "밥": 300,
    "배": 150,
    "뱀장어": 200,
    "버터 큰술": 101,
    "베이컨": 187,
    "병어": 75,
    "복숭아": 50,
    "부대찌개": 340,
    "불고기": 385,
    "브로콜리": 43,
    "비빔냉면": 578,
    "비스켓": 74,
    "뻥튀기": 180,
    "사과 큰 것": 100,
    "사탕": 75,
    "삼치": 75,
    "새우깡": 419,
    "새우칠리소스": 200,
    "생굴": 150,
    "생선초밥": 732,
    "샴페인": 20,
    "설탕": 35,
    "소금": 0,
    "소보로빵": 200,
    "소프트아이스크림": 250,
    "쇠고기": 125,
    "수박 큰 것": 50,
    "슈크림": 283,
    "스폰지빵": 296,
    "시루떡": 203,
    "식빵": 102,
    "식빵 + 잼": 165,
    "식용유/참기름": 120,
    "식혜": 240,
    "사이다": 105,
    "삼계탕": 633,
    "상추": 25,
    "새우야채튀김": 457,
    "샌드위치": 468,
    "생맥주": 185,
    "생크림": 45,
    "설렁탕": 212,
    "소갈비": 330,
    "소라빵": 279,
    "아몬드": 120,
    "안심스테이크": 663,
    "애플파이": 253,
    "야채크로켓": 310,
    "약밥": 237,
    "양상추": 10,
    "양송이": 30,
    "양파링": 470,
    "어묵 튀긴것": 150,
    "오렌지주스": 100,
    "오이": 19,
    "요구르트": 117,
    "우스터소스": 18,
    "웨하스": 508,
    "유자차": 67,
    "이면수": 75,
    "인절미": 225,
    "아이스크림": 220,
    "알탕": 140,
    "야채스프": 170,
    "야채튀김": 261,
    "양배추": 30,
    "양송이스프": 200,
    "양파": 54,
    "어묵 튀기지않은것": 90,
    "오렌지": 45,
    "오므라이스": 662,
    "옥수수": 200,
    "우동": 610,
    "우유": 125,
    "유부초밥": 800,
    "율무": 35,
    "이온음료": 60,
    "일본식우동": 332,
    "자몽": 100,
    "제크": 448,
    "주먹밥": 320,
    "짜장 라면": 462,
    "짜장밥": 1010,
    "잣": 135,
    "조기": 50,
    "진간장": 10,
    "짜장면": 670,
    "참께": 45,
    "참외": 100,
    "참치 통조림": 250,
    "찹쌀떡": 160,
    "청주": 260,
    "초코렛": 549,
    "치즈": 66,
    "참치 찌개": 209,
    "참치": 50,
    "청국장": 200,
    "추어탕": 200,
    "치즈버거": 320,
    "카레라이스": 402,
    "칼국수": 545,
    "커피+프림1+설탕": 138,
    "커피+프림1작은술": 25,
    "컵라면": 300,
    "케첩": 23,
    "코코아": 55,
    "콘프레이크": 117,
    "콜라": 135,
    "콩나물 익힌것": 30,
    "크림스프": 164,
    "카스테라": 317,
    "카라멜": 120,
    "커피 1잔": 5,
    "케이크": 330,
    "코울슬로샐러드": 139,
    "콘샐러드": 176,
    "콜라 1캔": 97,
    "콩나물국": 120,
    "크림빵": 294,
    "키위": 56,
    "파운드케익": 230,
    "팝콘": 459,
    "팥빵": 197,
    "포도": 68,
    "포장만두 찐것": 363,
    "풋고추": 30,
    "프랑크 햄": 89,
    "피자": 250,
    "파인애플": 58,
    "팥빙수": 367,
    "팥죽": 156,
    "포장만두 구운것": 471,
    "포테이토 칩": 330,
    "프랑크소세지": 100,
    "피망": 26,
    "핫도그": 280,
    "해파리냉채": 129,
    "해물탕": 82
};


// 초기화 함수
function initialize() {
    calorieEntries.forEach(entry => {
        addEntryToDOM(entry.food, entry.calories);
        totalCalories += entry.calories;
    });
    updateTotalCalories();
}

// BMR 계산 함수
function calculateCalories() {
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const activity = parseFloat(document.getElementById("activity").value);

    let bmr;
    if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const totalCal = Math.round(bmr * activity);
    document.getElementById("result").textContent = `하루 권장 칼로리: ${totalCal} kcal`;
}

// 음식 이름에 따른 칼로리 자동 업데이트
function updateCalories() {
    const foodItem = document.getElementById("foodItem").value.trim();
    const calories = calorieData[foodItem] || 0;
    document.getElementById("calories").value = calories;
}

// 새로운 항목 추가
function addCalorieEntry() {
    const foodItem = document.getElementById("foodItem").value.trim();
    const calories = parseInt(document.getElementById("calories").value);

    if (foodItem && !isNaN(calories) && calories > 0) {
        const entry = { food: foodItem, calories: calories };
        calorieEntries.push(entry);

        addEntryToDOM(foodItem, calories);
        totalCalories += calories;
        updateTotalCalories();

        localStorage.setItem('calorieEntries', JSON.stringify(calorieEntries));

        // 입력 필드 초기화
        document.getElementById("foodItem").value = '';
        document.getElementById("calories").value = '';
    } else {
        alert("올바른 음식명과 칼로리를 입력하세요.");
    }
}

// DOM에 항목 추가
function addEntryToDOM(food, calories) {
    const listItem = document.createElement("li");
    listItem.textContent = `${food}: ${calories} kcal`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.onclick = () => deleteEntry(food, calories, listItem);

    listItem.appendChild(deleteButton);
    document.getElementById("calorieList").appendChild(listItem);
}

// 항목 삭제
function deleteEntry(food, calories, listItem) {
    calorieEntries = calorieEntries.filter(entry => !(entry.food === food && entry.calories === calories));
    totalCalories -= calories;
    updateTotalCalories();
    document.getElementById("calorieList").removeChild(listItem);

    localStorage.setItem('calorieEntries', JSON.stringify(calorieEntries));
}

// 총 칼로리 업데이트
function updateTotalCalories() {
    document.getElementById("totalCalories").textContent = totalCalories;
}

// 기록 초기화
function clearEntries() {
    calorieEntries = [];
    totalCalories = 0;
    document.getElementById("calorieList").innerHTML = '';
    updateTotalCalories();
    localStorage.removeItem('calorieEntries');
}

// 초기화 실행
initialize();
