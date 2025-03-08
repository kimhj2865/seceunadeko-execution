let cursor = 0;
let choiceActive = false; // 선택지 활성화 여부

const choiceCursor = 41; // 선택지가 나타날 시점

const scenario = [
	{"text": "당신은 눈을 뜬다."},
	{"text": "눈앞에는 새하얀 풍경이 보인다."},
	{"text": "당신 외에는 아무것도 존재하지 않는다."},
	{"text": "눈이 내리는 소리, 바람소리, 그 사이 불순물 같은 숨쉬는 소리."},
	{"text": "당신의 가쁜 호흡소리다."},
	{"text": "이곳은 당신만이 사라지면 완벽할 풍경이다."}, //5
	{"text": "⋯⋯⋯⋯⋯⋯"},
	{"text": "얼마나 걸어 왔을까."},
	{"text": "당신은 멈춰섰다."},
	{"text": "앞으로 나아가도 소용없다."},
	{"text": "돌아가기에는 늦었다."},				//10
	{"text": "…너무, 늦어 버렸다."},
	{"text": "늘 그랬다."},
	{"text": "앞은 기약 없는 지옥과 같았고,"},
	{"text": "돌아간다는 선택지는, 당신에게 없는 것 같았다."},
	{"text": "끝까지 갈 수밖에 없다고 생각했지만…."}, //15
	{"text": "그 조차 번번히 실패하는 당신이었다."},
	{"text": "결과적으로, 매번 애매한 자리에서 멈춰서게 되는 것이다…"},
	{"text": "당신은 그 자리에 반듯하게 눕는다."},//--------18
	{"text": "하늘에서는 눈이 내린다."},
	{"text": "마음은 평화롭다."},//20
	{"text": "손발이 점점 차가워진다."},
	{"text": "손끝부터 감각이 사라져간다."},
	{"text": "발."},
	{"text": "무릎."},
	{"text": "허벅지."},//-----------------------------25
	{"text": "허리."},
	{"text": "가슴."},
	{"text": "그리고 목 바로 아래까지."},
	{"text": "모든 것이 사라져가는 것 같다."},
	{"text": "이번이야말로 마지막이라는 직감이 든다."},//30
	{"text": "기쁜가? 슬픈가?"},
	{"text": "후련하기도 하고, 괴롭기도 하고,"},
	{"text": "전부 포기하고 싶기도 하고, 포기하고 싶지 않기도 하고,"},
	{"text": "후련하기도 하고, 괴롭기도 하고,"},
	{"text": "비참하기도 하고, 행복하기도 하고…"},				//35
	{"text": "그립기도 하고, 꼴도 보기 싫기도 해서……"},
	{"text": "온갖 감정이 엉망진창으로 뒤섞여서……."},
	{"text": "이 기분을 뭐라고 정의하면 좋을까?..."},
	{"text": "언제나처럼 답은 나오지 않는다."},
	{"text": "⋯"},					//40
	{"text": "당신은⋯⋯⋯⋯⋯⋯"},		//--------------------------------41
	{"text": "누군가와 닿고 싶다."},
	{"text": "기분을 전하고 싶다."},
	{"text": "품에 안기고 싶다."},			//44
	{"text": "붙잡고 엉엉 울고 싶다."},
	{"text": "무언가를, 말하고 싶다."},
	{"text": "…전하고 싶은 말이 있다."},
	{"text": "하지만, 입이 움직여지지 않아…."},			//49
	{"text": "눈이 쌓여간다."},
	{"text": "모든 것이 덮어간다."},
	{"text": "이대로 흔적 하나 없이 사라질 수 있다면⋯⋯"},			//52
	{"text": "—————"},
	{"text": "실험이 종료되었습니다."}
];

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

function toggleBigImage(cursor) {
  const imageElement = document.getElementById('main-big');
  if (cursor >= 44) { 
    imageElement.style.display = 'block';
  } else {
    imageElement.style.display = 'none';
  }
}

function changeMainBigImage(cursor) {
  const imageElement = document.getElementById('main-big');
  
  if (cursor === 49) {imageElement.src = './img/main/main-5-9.png';}
  if (cursor === 52) {imageElement.src = './img/main/main-5-10.png';}
}


function changeMainImage(cursor) {
	const imageElement = document.getElementById('main-image');
	if (cursor === 18) {imageElement.src = './img/main/main-5-6.gif';}
	if (cursor === 41) {imageElement.src = './img/main/main-5-7.gif';}
}

function changeStatusImage(cursor) {
	const imageElement = document.getElementById('status');
	if (cursor === 30) {imageElement.src = './img/status/status-5-warnning.gif';}
	if (cursor === 53) {imageElement.src = './img/status/status-5-die.png';}
}

function changeHeartImage(cursor) {
	const imageElement = document.getElementById('heart');
	if (cursor === 30) {imageElement.src = './img/heart/heart-warnning.gif';}
	if (cursor === 53) {imageElement.src = './img/heart/heart-die.gif';}
}

function changeFaceImage(cursor) {
	const imageElement = document.getElementById('face');
	if (cursor === 5) {imageElement.src = './img/face/head-Close.png';}
	if (cursor === 7) {imageElement.src = './img/face/head-normal.png';}
	if (cursor === 18) {imageElement.src = './img/face/head-Close.png';}
	if (cursor === 41) {imageElement.src = './img/face/head-die.png';}

	
}

function changeCharacterImage(cursor) {
	const imageElement = document.getElementById('character');
}

function showChoices() {
	document.getElementById('selector-wrapper').style.opacity = 1;
	document.getElementById('selector-wrapper').style.pointerEvents = 'auto';
	choiceActive = true;
}

function hideChoices() {
	document.getElementById('selector-wrapper').style.opacity = 0;
	document.getElementById('selector-wrapper').style.pointerEvents = 'none';
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
	toggleBigImage(cursor);
	changeMainBigImage(cursor)
};

parse(cursor);

// 화면 클릭 시 진행
document.body.addEventListener('click', () => {
	if (!choiceActive && !isTyping) {
		cursor++;
		if (cursor < scenario.length) {
			parse(cursor);
		} else {
			window.open("https://x.com", "_blank");
		}
	}
});

document.querySelectorAll('#selector li').forEach(choice => {
	choice.addEventListener('click', () => {
		cursor++;
		hideChoices();
		parse(cursor);
	});
});
