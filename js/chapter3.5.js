 let cursor = 0;
	let choiceActive = false; // 선택지 활성화 여부

	const choiceCursor = 53; // 선택지가 나타날 시점

const scenario = [
	{
		"text": "당신은 눈을 뜬다."
	},
	{
		"text": "눈앞에 보이는 것은, 쓰레기와 진흙탕."
	},
	{
		"text": "당신은 깨닫는다."
	},
	{
		"text": "이곳은 밑바닥이다."
	} ,
	{
		"name": "나카노하라 미나토",
		"text": "…만날 거라고 예상되는 사람들이… 있는데…."
	} ,
	{
		"text": "말하기 무섭게 두 사람의 인영이 보인다. ."} , //5

	{"text": "이곳에서 살아온 이들이다…. "},

	{"name": "나카노하라 미나토",
	"text": "…여기가 그런 곳이야?..."},

	{"name": "나카노하라 미나토", 
	"text": "골목길에서 시비거는 사람이 있고, 네 주변을 해하는 사람이 있고…."},

	{"name": "에이건 리거", "text": "응. 지저분하고, 재미 없는 곳."},

	{"name": "에이건 리거", "text": "알아서 좋을 거 하나 없는 곳. "},	//10

	{"name": "나카노하라 미나토", "text": "…확실히, 이런 곳에서 좋은 기억은 가지기 어려울지도…."},
	
	{"name": "에이건 리거", "text": "…지긋지긋한 곳이지."},

	{"name": "에이건 리거", "text": "구역질나고, 더럽고,"},

	{"name": "에이건 리거", "text": "한 순간이라도 약한 모습을 보이면 금방 얕잡아보고."},
	
	{"name": "에이건 리거","text": "너 같은 건 이틀만에 골수까지 빼먹혔을 걸. "},				//15
	
	{"name": "나카노하라 미나토", "text": "…그래서 한 순간도 지지 않으려고 했구나."},
	
	{"name": "나카노하라 미나토", "text": "살아남으려고......."},

	{"name": "에이건 리거", "text": "……"},
	
	{"name": "나카노하라 미나토", "text": "...나는 늘 지는 삶만 살아왔거든."},
	
	{"name": "나카노하라 미나토", "text": "그래서, 나랑 다른 네가 신기하기도 하고"},				//20
	
	{"name": "나카노하라 미나토", "text": "부럽기도 하고,"},
	
	{"name": "나카노하라 미나토", "text": "아주 조금은… 질투 나기도 하고…."},
	
	{"name": "나카노하라 미나토", "text": "…있잖아, 끝까지 간다는 건 어떤 기분이야?"},

	{"name": "에이건 리거", "text": "…아직 끝을 못 봐서 몰라."},

	{"name": "에이건 리거", "text": "네가 살아있는 바람에 나까지 계속 작동하고 있잖아."},				//25

	{"name": "에이건 리거", "text": "…하여튼, 짜증나게……."},
	
	{"name": "나카노하라 미나토", "text": "걱정하지 마."},
	
	{"name": "나카노하라 미나토", "text": "…이번만큼은, 끝까지 가볼테니까…."},

	{"name": "나카노하라 미나토", "text": "......에이건."},
	
	{"name": "에이건 리거", "text": "왜, 또."},				//30

	{"name": "나카노하라 미나토", "text": "친구가 되어줘서 고마워."},	
//-----------------------------------
	{"name": "샤샤", "text": "…친구가 맞긴 합니까?"},

	{"name": "샤샤", "text": "지금까지 저희를 속여 오지 않았습니까."},

	{"name": "샤샤", "text": "저는, 이제… 뭐가 옳고, 뭐가 틀린건지……."},
 
	{"name": "나카노하라 미나토", "text": "…아직도 고민하고 있어?"},			//35

	{"name": "나카노하라 미나토", "text": "내가 여기에 들어왔다는 게 내가 틀렸다는 증거잖아."},

	{"name": "나카노하라 미나토", "text": "세계의 희망인 너희가 틀린 판단을 할 리가 없지…"},

	{"name": "샤샤", "text": "…저한테는 너무 어렵습니다."},

	{"name": "샤샤", "text": "……저는 그냥, 모두를 소중하게 여기고 싶었을 뿐인데…"},

	{"name": "나카노하라 미나토", "text": "…어렵지 않아."},		//40

	{"name": "나카노하라 미나토", "text": "그대로 총을 쏘면… 된다고 생각해…."},

	{"name": "샤샤", "text": "…죽여 달라는 말씀이십니까?"},

	{"name": "나카노하라 미나토", "text": "여기는, 내가 너희들에게 한 만큼 당해야… 다음으로 넘어가는 구조 같거든."},

	{"name": "나카노하라 미나토", "text": "계속 여기 머무를 수는 없잖아."},

	{"name": "나카노하라 미나토", "text": "소중하게 여길 가치가 없는 사람한테… 시간을 뺏기지 말라는 의미야."},		//45

	{"name": "샤샤", "text": "……"},

	{"name": "나카노하라 미나토", "text": "……네 은인이라면 어떻게 했을 것 같아?"},

	{"name": "나카노하라 미나토", "text": "총을 쐈을까?"},

	{"name": "샤샤", "text": "…은인이라면, 그랬을 겁니다."},

	{"name": "샤샤", "text": "그게… 옳으니까."},			//50

	{"text": "철컥, 총알이 장전되는 소리가 난다."},

	{"name": "나카노하라 미나토", "text": "…맞아. 단순하게 생각하면 되는 거야…."},

	{"text": "당신은………………"},//--------선택지 53

	{"text": "탕—."},

	{"text": "날카로운 총성과 함께 다리에 통증이 밀려온다."},

	{"text": "하지만 자리에 쓰러질 틈 없이…"}	,	//55

	{"text": "덜컹, 소리를 내며 바닥이 열린다."},

	{"text": "밑바닥의 아래에는 더한 밑바닥이 있다."},

	{"text": "뭐라 대답할 틈도 없이,"},

	{"text": "당신은 어둠 속으로 추락한다."}


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
  
  if (cursor >= 54) { 
    imageElement.style.display = 'block';
  } else {
    imageElement.style.display = 'none';
  }
}

// 메인 이미지 변경 함수
function changeMainImage(cursor) {
	const imageElement = document.getElementById('main-image');
	
		if (cursor === 3) {imageElement.src = './img/main/main-3.5-1.gif';}
		if (cursor === 54) {imageElement.src = './img/main/main-3.5-2.jpg';}
		
}

// 상태 이미지 변경 함수
function changeStatusImage(cursor) {
	const imageElement = document.getElementById('status');
	
		if (cursor === 54) {imageElement.src = './img/status/status-3.5-warnning-blood.gif';}
}

// 심장 이미지 변경 함수
function changeHeartImage(cursor) {
	const imageElement = document.getElementById('heart');
	
		if (cursor === 54) {imageElement.src = './img/heart/heart-warnning.gif';}
		}

// 두상 이미지 변경 함수
function changeFaceImage(cursor) {
	const imageElement = document.getElementById('face');
	
		if (cursor === 1) {imageElement.src = './img/face/head-normalweat.png';}
		if (cursor === 4) {imageElement.src = './img/face/head-normaltalkweat.png';}
		if (cursor === 7) {imageElement.src = './img/face/head-normaltalk.png';}
		if (cursor === 11) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 16) {imageElement.src = './img/face/head-normaltalk.png';}
		if (cursor === 17) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 20) {imageElement.src = './img/face/head-normaltalk.png';}
		if (cursor === 22) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 23) {imageElement.src = './img/face/head-normaltalk.png';}
		if (cursor === 28) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 29) {imageElement.src = './img/face/head-normaltalk.png';}
		if (cursor === 35) {imageElement.src = './img/face/head-normal.png';}
		if (cursor === 37) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 41) {imageElement.src = './img/face/head-normaltalk.png';}
		if (cursor === 47) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 52) {imageElement.src = './img/face/head-normal.png';}
		if (cursor === 53) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 54) {imageElement.src = './img/face/head-die.png';}

}

// 캐릭터 이미지 변경 함수
function changeCharacterImage(cursor) {
	const imageElement = document.getElementById('character');
	
		if (cursor === 7) {imageElement.src = './img/character/Agan-1.png';}
		if (cursor === 10) {imageElement.src = './img/character/Agan-3.png';}
		if (cursor === 12) {imageElement.src = './img/character/Agan-2.png';}
		if (cursor === 15) {imageElement.src = './img/character/Agan-3.png';}
		if (cursor === 18) {imageElement.src = './img/character/Agan-2.png';}
		if (cursor === 21) {imageElement.src = './img/character/Agan-1.png';}
		if (cursor === 24) {imageElement.src = './img/character/Agan-3.png';}
		if (cursor === 26) {imageElement.src = './img/character/Agan-2.png';}
		if (cursor === 30) {imageElement.src = './img/character/Agan-1.png';}

		if (cursor === 32) {imageElement.src = './img/character/Shasha-2.png';}
		if (cursor === 34) {imageElement.src = './img/character/Shasha-3.png';}
		if (cursor === 35) {imageElement.src = './img/character/Shasha-1.png';}
		if (cursor === 39) {imageElement.src = './img/character/Shasha-3.png';}
		if (cursor === 42) {imageElement.src = './img/character/Shasha-1.png';}
		if (cursor === 46) {imageElement.src = './img/character/Shasha-3.png';}
		if (cursor === 49) {imageElement.src = './img/character/Shasha-2.png';}
		if (cursor === 50) {imageElement.src = './img/character/Shasha-1.png';}

		if (cursor === 54) {imageElement.src = './img/character/non.png';}

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

	toggleBigImage(cursor);
};


parse(cursor);


// 화면 클릭 시 진행 (선택지가 없을 때만 가능)
document.body.addEventListener('click', () => {
	if (!choiceActive && !isTyping) { // 🔴 타이핑 중에는 클릭 비활성화
		cursor++;
		if (cursor < scenario.length) {
			parse(cursor);
		} else {
			window.location.href = 'chapter4.html';
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