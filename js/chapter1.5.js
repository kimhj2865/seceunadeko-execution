 let cursor = 0;
	let choiceActive = false; // 선택지 활성화 여부

	const choiceCursor = 52; // 선택지가 나타날 시점

const scenario = [
	{
		"text": "당신은 눈을 뜬다."
	},
	{
		"text": "눈앞에 보이는 것은, 철창이다."
	},
	{
		"text": "철창의 안에 서 있는 것은 당신 하나."
	},
	{
		"text": "손에 들린 건 빨간 버튼."
	} ,
	{
		"text": "바깥쪽에 서 있는 사람이 셋."
	} ,
	{
		"text": "…익숙한 풍경이다…."} , //5

	{	"text": "한 사람이 말을 걸어 온다."},

	{"name": "금서리",
	"text": "야, 너는 임마…. 비리비리한게 뭔 자신감으로 이딴 일을 벌이냐?"},

	{"name": "금서리",
	"text": "정상이 아닌줄은 알았는데 이렇게까지 음침할 줄은 몰랐다…."},

	{"name": "금서리",
	"text": "……이거 뭐, 미친놈한테 뭘 떠든다고 듣기는 할까 싶고…"},

	{"name": "나카노하라 미나토", "text": "………듣고 있어…."}, //10

	{"name": "나카노하라 미나토", "text": "대답 하지 않은 건… 틀린 말이 아니라서…"},	

	{"name": "나카노하라 미나토", "text": "딱히 할 말이 없어서…."},
	
	{"name": "금서리", "text": "너는 진짜…."},

	{"text": "눈앞의 사람은 깊은 한숨을 내쉰다."},

	{"text": "당신이 예상한 반응이다."},//15
	
	{"name": "나카노하라 미나토","text": "….나는 너처럼, 강하지 못해서…"},				
	
	{"name": "나카노하라 미나토", "text": "맞서 싸울 용기가 나지 않아서…"},
	
	{"name": "나카노하라 미나토", "text": "똑바로 보는 것 조차 하지 못해."},

	{"name": "나카노하라 미나토", "text": "한심하지…."},
	
	{"name": "금서리", "text": "그래, 한심해 죽겠다, 이 자식아."}, //20
	
	{"name": "금서리", "text": "사고 방식이 뒤틀려 있는 것도 정도가 있어야지."},				
	
	{"name": "금서리", "text": "제대로 책임 질 생각도 안하고, 여기서 이러고 있는 것도…"},
	
	{"name": "금서리", "text": "……"},
	
	{"name": "나카노하라 미나토", "text": "………잔소리는 끝났어…?"},

	{"name": "금서리", "text": "에휴, 됐다. 얘기해봤자 내 속만 터지지."}, //25

	{"name": "나카노하라 미나토", "text": "…응… 미안…"},

	{"name": "금서리", "text": "사과는 저쪽이나, 죽은 사람한테나 해. 내가 아니라."},
//--------------------------------------
	{"text": "두번째 사람이 말을 걸어 온다."},				

	{"name": "요시하라 키코", "text": "나카씨…"},
	
	{"name": "요시하라 키코", "text": "다른 사람을 상처입히는 건 끔찍하다고 하셨잖아요…."},				//30
	
	{"name": "나카노하라 미나토", "text": "응, 끔찍한 기분이야."},

	{"name": "나카노하라 미나토", "text": "그래서 줄곧, 너희들한테는…"},

	{"name": "나카노하라 미나토", "text": "…특히 너한테는… 미안했어……."},
	
	{"name": "요시하라 키코", "text": "…됐어요, 이제와서 그런 말…."},

	{"name": "요시하라 키코", "text": "……."},			//35

	{"name": "요시하라 키코", "text": "…그래도 저는, 나카씨가 죽지 않았으면 좋겠어요…"},

	{"name": "나카노하라 미나토", "text": "…너는 사람이 너무 좋아…."},

	{"name": "나카노하라 미나토", "text": "아니면… 그냥… 내가 듣고 싶은 말이려나…"},
 
	{"name": "나카노하라 미나토", "text": "이 공간도, 너도, 이것도… 다 내가 준비했던 거니까…"},			

	{"name": "나카노하라 미나토", "text": "자기만족인가…."}, //40

	{"name": "요시하라 키코", "text": "…"},

	{"name": "나카노하라 미나토", "text": "그렇게 죽음을 원했으면서, 이제와서 이런 말이라니,"},

	{"name": "나카노하라 미나토", "text": "웃기지도 않지……."},

	{"text": "하지만 여기에서 멈출 방법은 없다."},		

	{"text": "당신은 버튼을 내려다 본다."}, //45

	{"text": "당신은 버튼을 누르면 어떤 일이 일어나는지 알고 있다."},

	{"name": "요시하라 키코", "text": "…누르실 건가요…?"},

	{"name": "나카노하라 미나토", "text": "응… 그렇네…."},

	{"name": "요시하라 키코", "text": "말려도 듣지 않으시겠죠?"},		

	{"name": "나카노하라 미나토", "text": "……"}, 	//50

	{"name": "나카노하라 미나토", "text": "…응"},

	{"text": "당신은⋯⋯⋯⋯⋯⋯"},
//---------------------선택지--------------------------52
	{"text": "다른 선택지는 없다."},

	{"text": "그게 당신이 선택하고 걸어온 길이다."},			

	{"text": "버튼을 누르면 들리는 기괴한 소리."},//55

	{"text": "당신은 이 앞에 죽음이 기다리고 있을 것을 예상했지만…"},
//--------------------------------------
	{"name": "오닌교 하나", "text": "잠깐, 잠깐! 뭘 죽을 사람처럼 눈을 감고 있어?"},

	{"name": "오닌교 하나", "text": "눈을 떠 그린~! 히어로가 쉽게 포기하면 안돼~"},

	{"name": "나카노하라 미나토", "text": "……하지만, 곧 죽을 게… 사실이니까…."},

	{"name": "오닌교 하나", "text": "우리는 아직 너를 죽일 생각은 없어."}, //60

	{"name": "나카노하라 미나토", "text": "…어째서?"}	,	

	{"name": "나카노하라 미나토", "text": "철창 안에 있는 사람중… 한 명이 죽기 전에는… 벗어날 수 없다…"},

	{"name": "나카노하라 미나토", "text": "그런 규칙이잖아…."},

	{"name": "오닌교 하나", "text": "그건 네가 만든 규칙이니까. 여기서는 무~효."},

	{"name": "오닌교 하나", "text": "늘어져 있는 사람이랑 싸우는 건 그냥 괴롭히는 것 밖에 안되니까."}, //65

	{"name": "오닌교 하나", "text": "그런 건 하나도 재미도 없고…."}, 	

	{"name": "오닌교 하나", "text": "이 앞에 네가 만나야 될 사람이 한참 남았어!"},

	{"text": "철창 안으로 창이 쏟아져 내린다."},

	{"text": "검은  창 하나가 당신의 어깨를 꿰뚫는다."},

	{"name": "오닌교 하나", "text": "그러니까 이번에는 이걸로 끝~!"},		//70

	{"name": "오닌교 하나", "text": "아, 마지막으로…"},			

	{"name": "오닌교 하나", "text": "고마워!"},

	{"name": "오닌교 하나", "text": "나, 이 안에서 싸울 때, 정말 즐거웠으니까!"},

	{"text": "당신이 짚고 서 있는 바닥이 푹, 꺼진다."},

	{"name": "나카노하라 미나토", "text": "아…."}, //75

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
  
  if (cursor >= 69) { 
    imageElement.style.display = 'block';
  } else {
    imageElement.style.display = 'none';
  }
}

// 메인 이미지 변경 함수
function changeMainImage(cursor) {
	const imageElement = document.getElementById('main-image');
	
		if (cursor === 1) {imageElement.src = './img/main/main-1.5-1.gif';}
		if (cursor === 53) {imageElement.src = './img/main/main-1.5-2.jpg';}
		
}

// 상태 이미지 변경 함수
function changeStatusImage(cursor) {
	const imageElement = document.getElementById('status');
	
		if (cursor === 53) {imageElement.src = './img/status/status-1.5-warnning.gif';}
		if (cursor === 69) {imageElement.src = './img/status/status-1.5-warnning-blood.gif';}
}

// 심장 이미지 변경 함수
function changeHeartImage(cursor) {
	const imageElement = document.getElementById('heart');
	
		if (cursor === 53) {imageElement.src = './img/heart/heart-warnning.gif';}
		}

// 두상 이미지 변경 함수
function changeFaceImage(cursor) {
	const imageElement = document.getElementById('face');
	
		if (cursor === 1) {imageElement.src = './img/face/head-normalweat.png';}
		if (cursor === 5) {imageElement.src = './img/face/head-normaltalkweat.png';}
		if (cursor === 8) {imageElement.src = './img/face/head-side.png';}
		if (cursor === 10) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 12) {imageElement.src = './img/face/head-Closesmallweat.png';}
		if (cursor === 14) {imageElement.src = './img/face/head-normalweat.png';}
		if (cursor === 16) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 19) {imageElement.src = './img/face/head-Closesmallweat.png';}
		if (cursor === 24) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 26) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 27) {imageElement.src = './img/face/head-normaltalkweat.png';}
		
		if (cursor === 32) {imageElement.src = './img/face/head-Closesmallweat.png';}
		if (cursor === 33) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 37) {imageElement.src = './img/face/head-normaltalkweat.png';}
		if (cursor === 40) {imageElement.src = './img/face/head-side.png';}
		if (cursor === 45) {imageElement.src = './img/face/head-normalweat.png';}
		if (cursor === 53) {imageElement.src = './img/face/head-Closesmallweat.png';}
		if (cursor === 57) {imageElement.src = './img/face/head-normaltalkweat.png';}
		if (cursor === 63) {imageElement.src = './img/face/head-normalweat.png';}
		if (cursor === 68) {imageElement.src = './img/face/head-her.png';}
		if (cursor === 69) {imageElement.src = './img/face/head-die.png';}
		if (cursor === 75) {imageElement.src = './img/face/head-her.png';}

}

// 캐릭터 이미지 변경 함수
function changeCharacterImage(cursor) {
	const imageElement = document.getElementById('character');
	
		if (cursor === 6) {imageElement.src = './img/character/Seori-2.png';}
		if (cursor === 9) {imageElement.src = './img/character/Seori-3.png';}
		if (cursor === 10) {imageElement.src = './img/character/Seori-1.png';}
		if (cursor === 13) {imageElement.src = './img/character/Seori-3.png';}
		if (cursor === 20) {imageElement.src = './img/character/Seori-2.png';}
		if (cursor === 25) {imageElement.src = './img/character/Seori-3.png';}

		if (cursor === 28) {imageElement.src = './img/character/Kiko-1.png';}
		if (cursor === 30) {imageElement.src = './img/character/Kiko-3.png';}
		if (cursor === 31) {imageElement.src = './img/character/Kiko-1.png';}
		if (cursor === 34) {imageElement.src = './img/character/Kiko-2.png';}
		if (cursor === 35) {imageElement.src = './img/character/Kiko-3.png';}
		if (cursor === 36) {imageElement.src = './img/character/Kiko-2.png';}
		if (cursor === 41) {imageElement.src = './img/character/Kiko-1.png';}
		if (cursor === 47) {imageElement.src = './img/character/Kiko-2.png';}
		if (cursor === 49) {imageElement.src = './img/character/Kiko-3.png';}

		if (cursor === 55) {imageElement.src = './img/character/non.png';}

		if (cursor === 57) {imageElement.src = './img/character/hana-2.png';}
		if (cursor === 58) {imageElement.src = './img/character/hana-1.png';}
		if (cursor === 64) {imageElement.src = './img/character/hana-2.png';}
		if (cursor === 67) {imageElement.src = './img/character/hana-1.png';}
		if (cursor === 70) {imageElement.src = './img/character/hana-3.png';}
		if (cursor === 71) {imageElement.src = './img/character/hana-1.png';}
		if (cursor === 72) {imageElement.src = './img/character/hana-3.png';}
		

		if (cursor === 75) {imageElement.src = './img/character/non.png';}

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
			window.location.href = 'chapter2.html';
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