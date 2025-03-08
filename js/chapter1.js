 let cursor = 0;
  let choiceActive = false; // 선택지 활성화 여부

  const choiceCursor = 36; // 선택지가 나타날 시점

const scenario = [
  {
    "text": "당신은 눈을 뜬다."
  },
  {
    "text": "눈앞에 보이는 것은, 어둠이다."
  },
  {
    "text": "발을 움직여 보면, 겨우 서 있을 크기의 바닥이 느껴진다."
  },
  {
    "text": "당신이 움직일때마다 바닥은 덜컥거리며 진동한다."
  } ,
    {
    "text": "당신은 깨닫는다. 발밑의 이건 바닥이 아니라⋯"
  } ,
    {
    "text": "의자다."
  } ,
      {
    "text": "의식하는 순간, 조명이 켜진다."
  } ,
     {
    "text": "이곳은, 처형장."
  } ,
      {
    "text": "당신은, 사형수다."
  }, 
  {
    "name": "시쿠라 세이야",
    "text": "[죄목을 읊어 줘야 할까?]"
  },
   //10
  {
    "text": "익숙한 기계음이다."
  },
   {
    "name": "나카노하라 미나토",
    "text": "⋯이제 말은⋯ 하지 않는거야⋯?"
  },
   {
    "name": "시쿠라 세이야",
    "text": "[더이상 너를 믿지 않으니까.]"
  },
   {
    "name": "나카노하라 미나토",
    "text": "씁쓸하네⋯."
  },
   {
    "name": "나카노하라 미나토",
    "text": "이렇게 될 것 같아서⋯⋯. 처음부터 믿지 않았으면 했는데."
  },
   {
    "name": "나카노하라 미나토",
    "text": "적어도 나한테는, 마음의 문을 닫아 뒀으면 했는데."
  },
   {
    "name": "나카노하라 미나토",
    "text": "⋯⋯한번 더 상처를 주고 싶지는 않았거든⋯."
  },
   {
    "name": "시쿠라 세이야",
    "text": "⋯⋯."
  },
   {
    "name": "시쿠라 세이야",
    "text": "[걱정하는 것처럼 말하지 마.]"
  },
  {
    "name": "시쿠라 세이야",
    "text": "[진심으로 하는 말도 아니잖아…]"
  },
  //20
  {
    "name": "나카노하라 미나토",
    "text": "나는 늘 진심을 말했어."
  },
  {
    "name": "나카노하라 미나토",
    "text": "너랑 내가 닮은 게 마음에 들었던 것도,"
  },
  {
    "name": "나카노하라 미나토",
    "text": "친구가 되어서 기뻤던 것도,"
  },
  {
    "name": "나카노하라 미나토",
    "text": "같이 여행을 가고 싶었던 것도⋯"
  },
  {
    "name": "나카노하라 미나토",
    "text": "형이 되어줘서 고맙다는 말도⋯⋯"
  },
  {
    "name": "나카노하라 미나토",
    "text": "어느 것 하나 거짓은 없었어."
  },
  {
    "name": "나카노하라 미나토",
    "text": "나는 그 때, 진심으로 네 손에 죽었으면 했어⋯."
  },
  {
    "name": "나카노하라 미나토",
    "text": "⋯⋯결국, 잘 안 됐지만⋯."
  },
 
  {
    "name": "시쿠라 세이야",
    "text": "⋯⋯."
  },
  {
    "name": "시쿠라 세이야",
    "text": "[변명은 됐어.]"
  },
 //30
   {
    "name": "시쿠라 세이야",
    "text": "[너를 믿은 내가 잘못이지…]"
  },
  {
    "name": "시쿠라 세이야",
    "text": "[죄명은 배신.]"
  },
  {
    "name": "시쿠라 세이야",
    "text": "[판결은 사형이야.]"
  },
    {
    "name": "시쿠라 세이야",
    "text": "[⋯더 할말은 있어?]"
  },
    {
    "name": "나카노하라 미나토",
    "text": "⋯"
  },
  {
    "name": "나카노하라 미나토",
    "text": "⋯상처를 줘서, 미안해⋯⋯."
  },
  { 
    "text": "당신은⋯⋯⋯⋯⋯⋯"
  },
  //36
  { 
    "text": "덜컹,"
  },
  { 
    "text": "발밑의 바닥이 꺼진다."
  },
  { 
    "text": "당신은 밧줄에 매달렸다."
  },
  { 
    "text": "경동맥이 압박된다."
  },
  { 
    "text": "숨이 막힌다."
  },
  { 
    "text": "눈앞이 온통 새하얘진다."
  },
  { 
    "text": "더이상은,"
  },
  { 
    "text": "버틸 수,"
  },
  { 
    "text": "없다⋯"
  },

  { 
    "text": "의식과 함께 밧줄이 뚝, 끊기는 순간."
  },
  { 
    "text": "당신은 숨이 끊어진다."
  },
   { 
    "text": "⋯⋯⋯⋯⋯⋯"
  },
  { 
    "text": "그러나 죽음에 이르지는 못한다."
  },
  { 
    "text": "삶은 계속된다."
  }];

let isTyping = false;

// 타이핑 효과 함수
function typeText(text, element, callback) {
  let index = 0;
  element.innerHTML = ''; // 텍스트 초기화
  isTyping = true; // 🔴 타이핑 시작

  const typingInterval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
      isTyping = false; // 🔴 타이핑 종료 후 다시 클릭 가능
      if (callback) callback();
    }
  }, 50);
}



// 메인 이미지 변경 함수
function changeMainImage(cursor) {
  const imageElement = document.getElementById('main-image');
  
    if (cursor === 6) {imageElement.src = './img/main/main-1-1.gif';}
    if (cursor === 37) {imageElement.src = './img/main/main-1-2.jpg';}
    if (cursor === 39) {imageElement.src = './img/main/main-1-2.jpg';}
    if (cursor === 46) {imageElement.src = './img/main/main-1-4.jpg';}
}

// 상태 이미지 변경 함수
function changeStatusImage(cursor) {
  const imageElement = document.getElementById('status');
  
    if (cursor === 38) {imageElement.src = './img/status/status-1-danger.gif';}
    if (cursor === 47) {imageElement.src = './img/status/status-1-die.png';}
    if (cursor === 49) {imageElement.src = './img/status/status-1-danger.gif';}
}

// 심장 이미지 변경 함수
function changeHeartImage(cursor) {
  const imageElement = document.getElementById('heart');
  
    if (cursor === 38) {imageElement.src = './img/heart/heart-danger.gif';}
    if (cursor === 47) {imageElement.src = './img/heart/heart-die.gif';}
    if (cursor === 49) {imageElement.src = './img/heart/heart-danger.gif';}
}

// 두상 이미지 변경 함수
function changeFaceImage(cursor) {
  const imageElement = document.getElementById('face');
  
    if (cursor === 11) {imageElement.src = './img/face/head-Close.png';}
    if (cursor === 13) {imageElement.src = './img/face/head-normaltalk.png';}
    if (cursor === 16) {imageElement.src = './img/face/head-side.png';}
    if (cursor === 20) {imageElement.src = './img/face/head-Close.png';}
    if (cursor === 21) {imageElement.src = './img/face/head-normaltalk.png';}
    if (cursor === 24) {imageElement.src = './img/face/head-side.png';}
    if (cursor === 27) {imageElement.src = './img/face/head-sideWeat.png';}
    if (cursor === 35) {imageElement.src = './img/face/head-SmileSad.png';}
    if (cursor === 37) {imageElement.src = './img/face/head-die.png';}
    if (cursor === 47) {imageElement.src = './img/face/head-diered.png';}
}

// 캐릭터 이미지 변경 함수
function changeCharacterImage(cursor) {
  const imageElement = document.getElementById('character');
  
    if (cursor === 9) {imageElement.src = './img/character/Seiya-2.png';}
    if (cursor === 12) {imageElement.src = './img/character/Seiya-1.png';}
    if (cursor === 17) {imageElement.src = './img/character/Seiya-3.png';}
    if (cursor === 28) {imageElement.src = './img/character/Seiya-2.png';}
    if (cursor === 30) {imageElement.src = './img/character/Seiya-3.png';}
    if (cursor === 31) {imageElement.src = './img/character/Seiya-1.png';}
    if (cursor === 41) {imageElement.src = './img/character/Seiya-1.png';}
}



// 선택지 표시 함수
function showChoices() {
  document.getElementById('selector-wrapper').style.opacity = 1;
  document.getElementById('selector-wrapper').style.pointerEvents = 'auto'; // 클릭 활성화
  choiceActive = true;
}

// 선택지 숨김 함수
function hideChoices() {
  document.getElementById('selector-wrapper').style.opacity = 0;
  document.getElementById('selector-wrapper').style.pointerEvents = 'none'; // 클릭 비활성화
  choiceActive = false;
}


// 스크립트 진행 함수
const parse = (i = 0) => {
  const { text, name } = scenario[i];

  document.getElementById('name').style.display = 'none';
  document.getElementById('text').innerHTML = '';

  if (name) {
    document.getElementById('name').style.display = 'grid';
    document.getElementById('name').innerText = name;
  }

  typeText(text, document.getElementById('text'), () => {
    if (cursor === choiceCursor) {
      showChoices();
    }
  });


  // cursor 값에 따라 이미지 변경
  changeMainImage(cursor);
 changeHeartImage(cursor);
  changeStatusImage(cursor);
  changeFaceImage(cursor);
  changeCharacterImage(cursor);
};


parse(cursor);


// 화면 클릭 시 진행 (선택지가 없을 때만 가능)
document.body.addEventListener('click', () => {
  if (!choiceActive && !isTyping) { // 🔴 타이핑 중에는 클릭 비활성화
    cursor++;
    if (cursor < scenario.length) {
      parse(cursor);
    } else {
      window.location.href = 'chapter1.5.html';
    }
  }
});


// 선택지 클릭 시 동작
document.querySelectorAll('#selector li').forEach(choice => {
  choice.addEventListener('click', () => {
    cursor++;
    hideChoices();
    parse(cursor);
  });
});