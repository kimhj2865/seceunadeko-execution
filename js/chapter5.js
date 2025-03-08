 let cursor = 0;
	let choiceActive = false; // 선택지 활성화 여부

	const choiceCursor = 25; // 선택지가 나타날 시점

const scenario = [
	{
		"text": "당신은 눈을 뜬다."
	},
	{
		"text": "눈앞에 보이는 것은, 흩어진 서류들, 새까만 문, 그리고 한 사람."
	},
	{
		"text": "익숙한 얼굴이다."
	},
	{
		"name": "나카노하라 미나토",
		"text": "먼저… 찾아와 있었구나…"
	} ,
	{
		"name": "후카와 유키치",
		"text": "목적지까지 길을 찾는 게 저의 일이니까요."
	} ,
	{
		"name": "나카노하라 미나토",
		"text": "…길을… 많이 헤맸어."
	} , //5
	{
		"name": "후카와 유키치",
		"text": "예."
	} ,
	{
		"name": "나카노하라 미나토",
		"text": "사람도 많이 만났고,"
	} ,
	{
		"name": "후카와 유키치",
		"text": "그렇습니까."
	} ,
	{
		"name": "나카노하라 미나토",
		"text": "많이… 아프기도 했고."
	},
	{
		"name": "후카와 유키치",
		"text": "그건… 그래 보입니다."
	},//10
	 {
		"name": "나카노하라 미나토",
		"text": "아마 지도가 없어서 그랬나 봐…"
	},
	 {
		"name": "나카노하라 미나토",
		"text": "제대로 죽어야겠다는 목표는 있는데, 거기까지 가는 길을 몰라서…"
	},
	 {
		"name": "후카와 유키치",
		"text": "…그런데 보통 사람은 자기가 죽고 싶다고 사람을 죽이지는 않습니다."
	},
	 {
		"name": "나카노하라 미나토",
		"text": "……알고 있어…."
	},
	 {
		"name": "후카와 유키치",
		"text": "알고 있는 사람이 그렇게 행동합니까?"
	},//15
	 {
		"name": "후카와 유키치",
		"text": "잔소리가 듣기 싫으니까 그렇게 말씀하시는 것 아닙니까?"
	},
	 {
	 	"name": "나카노하라 미나토",
		"text": "…..아… 집요해…. 알고 있다니까……."
	},
	{
		"name": "후카와 유키치",
		"text": "정말로 알고 있는 사람이라면 이렇게 도망치지도 않을겁니다."
	},
	{
		"name": "나카노하라 미나토",
		"text": "…그것도, 알고 있어……."
	},
	{
		"text": "유키치는 길게 한숨을 내쉰다."
	},//20
	{
		"name": "후카와 유키치",
		"text": "…이 앞은 저도 길을 모릅니다."
	},
	{
		"name": "나카노하라 미나토",
		"text": "응… 괜찮아. "
	},
	{
		"name": "나카노하라 미나토",
		"text": "내가 혼자… 가야 할 길이니까…"
	},
	{
		"name": "후카와 유키치",
		"text": "그렇습니까… 건투를 빕니다."
	},
	{
		"text": "당신은⋯⋯⋯⋯⋯⋯"
	},//-----------------------------25
	{
		"name": "나카노하라 미나토",
		"text": "……유키치. 네 덕분에 여기까지 올 수 있었어."
	},
	{
		"name": "나카노하라 미나토",
		"text": "죽여서 미안했어."
	},
	{
		"name": "나카노하라 미나토",
		"text": "그리고,"
	},
	{
		"name": "나카노하라 미나토",
		"text": "나를 찾아줘서 고마워…."
	},
	{
		"text": "문을 열면 빛이 쏟아진다."
	},//30
	{
		"text": "눈이 부시다."
	},
	{
		"text": "깜빡,"
	},
	{
		"text": "눈이 감겼다가……"
	}
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
  
  if (cursor >= 95) { 
    imageElement.style.display = 'block';
  } else {
    imageElement.style.display = 'none';
  }
}

// 메인 이미지 변경 함수
function changeMainImage(cursor) {
	const imageElement = document.getElementById('main-image');
	
		if (cursor === 1) {imageElement.src = './img/main/main-5-1.gif';}
		if (cursor === 30) {imageElement.src = './img/main/main-5-2.jpg';}
		if (cursor === 31) {imageElement.src = './img/main/main-5-3.jpg';}
		if (cursor === 32) {imageElement.src = './img/main/main-5-4.jpg';}
}

// 상태 이미지 변경 함수
function changeStatusImage(cursor) {
	const imageElement = document.getElementById('status');
	
		if (cursor === 92) {imageElement.src = './img/status/status-4-danger.gif';}
		if (cursor === 97) {imageElement.src = './img/status/status-4-die.png';}
		if (cursor === 99) {imageElement.src = './img/status/status-4-danger.gif';}
}

// 심장 이미지 변경 함수
function changeHeartImage(cursor) {
	const imageElement = document.getElementById('heart');
	
		if (cursor === 92) {imageElement.src = './img/heart/heart-danger.gif';}
		if (cursor === 97) {imageElement.src = './img/heart/heart-die.gif';}
		if (cursor === 99) {imageElement.src = './img/heart/heart-danger.gif';}
}

// 두상 이미지 변경 함수
function changeFaceImage(cursor) {
	const imageElement = document.getElementById('face');
	
		if (cursor === 5) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 7) {imageElement.src = './img/face/head-normaltalk.png';}
		if (cursor === 9) {imageElement.src = './img/face/head-Closesmallweat.png';}
		if (cursor === 11) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 12) {imageElement.src = './img/face/head-normaltalk.png';}
		if (cursor === 14) {imageElement.src = './img/face/head-normaltalkweat.png';}
		if (cursor === 17) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 19) {imageElement.src = './img/face/head-side.png';}
		if (cursor === 22) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 23) {imageElement.src = './img/face/head-normal.png';}
		if (cursor === 26) {imageElement.src = './img/face/head-normaltalk.png';}
		if (cursor === 27) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 29) {imageElement.src = './img/face/head-normaltalk.png';}
		if (cursor === 32) {imageElement.src = './img/face/head-Close.png';}

}

// 캐릭터 이미지 변경 함수
function changeCharacterImage(cursor) {
	const imageElement = document.getElementById('character');
	
		if (cursor === 2) {imageElement.src = './img/character/Yuukichi-1.png';}
		if (cursor === 4) {imageElement.src = './img/character/Yuukichi-2.png';}
		if (cursor === 6) {imageElement.src = './img/character/Yuukichi-1.png';}
		if (cursor === 10) {imageElement.src = './img/character/Yuukichi-3.png';}
		if (cursor === 11) {imageElement.src = './img/character/Yuukichi-1.png';}
		if (cursor === 13) {imageElement.src = './img/character/Yuukichi-2.png';}
		if (cursor === 15) {imageElement.src = './img/character/Yuukichi-3.png';}
		if (cursor === 18) {imageElement.src = './img/character/Yuukichi-2.png';}
		if (cursor === 21) {imageElement.src = './img/character/Yuukichi-1.png';}
		if (cursor === 24) {imageElement.src = './img/character/Yuukichi-2.png';}
		if (cursor === 26) {imageElement.src = './img/character/Yuukichi-1.png';}


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
			window.location.href = 'lastchapter.html';
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