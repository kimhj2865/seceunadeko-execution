 let cursor = 0;
	let choiceActive = false; // 선택지 활성화 여부

	const choiceCursor = 86; // 선택지가 나타날 시점

const scenario = [
	{
		"text": "당신은 눈을 뜬다."
	},
	{
		"text": "눈앞에 보이는 것은⋯⋯"
	},
	{
		"text": "⋯쿠로사마와 장미꽃?"
	},
	{
		"text": "당신은 푹신한 인형더미 위에 올라가 있다."
	} ,
		{
			"name": "후카우라 유우노",
		"text": "서프라이즈~. 나카노하라군을 위해 준비했어."
	} ,
		{"name": "후카우라 유우노",
		"text": "어때, 오랜 친구를 보는 건? 마음에 들어?"
	} , //5
	{
		"name": "나카노하라 미나토",
		"text": "⋯⋯응. 제법."
	} ,
	{
		"name": "나카노하라 미나토",
		"text": "며칠동안 조금⋯ 그리웠는데…. 이렇게 보여줘서 고마워⋯."
	} ,
	{
		"name": "후카우라 유우노",
		"text": "우리한테는 그렇게 못되게 굴었던 녀석인데, 그렇게 반응하니까 기분이 영⋯"
	} ,
	{
		"name": "후카우라 유우노",
		"text": "⋯그래도! 관객이 만족했다면 성공적인 쇼인 거겠지."
	},
	{
		"name": "나카노하라 미나토",
		"text": "⋯여기는, 뭔가⋯ 평화롭네… 다칠 일도 없을 것 같고⋯."
	},//10
	 {
		"name": "후카우라 유우노",
		"text": "나카노하라군. 나는 내 일에 목숨을 걸고 있기는 하지만⋯"
	},
	 {
		"name": "후카우라 유우노",
		"text": "⋯피나 죽음, 그런 건 괴도의 방식이 아니란 말씀!"
	},
	 {
		"name": "후카우라 유우노",
		"text": "피 대신 로맨틱한 장미꽃잎을 날리는 거라면 모를까~."
	},
	 {
		"name": "후카우라 유우노",
		"text": "아무도 다치지 않게 나쁜 사람의 비밀을 까발리는 게 내 방식이니까~."
	},
	 {
		"name": "나카노하라 미나토",
		"text": "⋯맞아. 초고교급 괴도는 그런 사람이지⋯."
	},//15
	 {
		"name": "나카노하라 미나토",
		"text": "네가 쿠로사마를 멈췄기 때문에 여기까지 몰린 거나 다름없으니까⋯."
	},
	 {
		"name": "나카노하라 미나토",
		"text": "아마, 네가 없었다면 나는… 이러지도 저러지도 못하고⋯"
	},
	 {
		"name": "나카노하라 미나토",
		"text": "계속, 애매한 상태로⋯ 거기 머물러 있었겠지."
	},
	{
		"name": "나카노하라 미나토",
		"text": "⋯네 덕분에 이렇게 끝까지 올 수 있었어. 고마워."
	},
	{
		"name": "후카우라 유우노",
		"text": "⋯이런 걸로 감사인사 하지 말란 말이야! 정말이지⋯"
	},//20
	{
		"name": "후카우라 유우노",
		"text": "자, 이제 마지막 한 사람만 남았지?"
	},
	{
		"name": "후카우라 유우노",
		"text": "너를 만나려고 기다리고 있을테니까, 얼른 가 보라고~"
	},
	{
		"name": "나카노하라 미나토",
		"text": "⋯⋯응, 이만 가볼게⋯."
	},
	{
		"text": "마지막으로 작별인사를 끝마치기도 전에, 익숙한 감각이 느껴진다."
	},
	{
		"text": "발 밑의 땅이 꺼지는 부양감, 그리고 이어지는 속도감."	
		},//25
		{
		"text": "당신은 어둠속으로 추락한다."	
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
	
		if (cursor === 2) {imageElement.src = './img/main/main-4.5-1.gif';}
		if (cursor === 13) {imageElement.src = './img/main/main-4.5-2.gif';}
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
	
		if (cursor === 1) {imageElement.src = './img/face/head-normaltalkweat.png';}
		if (cursor === 4) {imageElement.src = './img/face/head-normalweat.png';}
		if (cursor === 6) {imageElement.src = './img/face/head-normaltalk.png';}
		if (cursor === 7) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 8) {imageElement.src = './img/face/head-normal.png';}
		if (cursor === 10) {imageElement.src = './img/face/head-normaltalk.png';}
		if (cursor === 15) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 19) {imageElement.src = './img/face/head-normaltalk.png';}
		if (cursor === 23) {imageElement.src = './img/face/head-normal.png';}
}

// 캐릭터 이미지 변경 함수
function changeCharacterImage(cursor) {
	const imageElement = document.getElementById('character');
	
		if (cursor === 4) {imageElement.src = './img/character/Yuuno-1.png';}
		if (cursor === 8) {imageElement.src = './img/character/Yuuno-3.png';}
		if (cursor === 9) {imageElement.src = './img/character/Yuuno-2.png';}
		if (cursor === 10) {imageElement.src = './img/character/Yuuno-1.png';}
		if (cursor === 11) {imageElement.src = './img/character/Yuuno-2.png';}
		if (cursor === 13) {imageElement.src = './img/character/Yuuno-3.png';}
		if (cursor === 20) {imageElement.src = './img/character/Yuuno-2.png';}
		if (cursor === 21) {imageElement.src = './img/character/Yuuno-1.png';}
		if (cursor === 24) {imageElement.src = './img/character/Yuuno-3.png';}


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
			window.location.href = 'chapter5.html';
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