 let cursor = 0;
	let choiceActive = false; // 선택지 활성화 여부

	const choiceCursor = 86; // 선택지가 나타날 시점

const scenario = [
	{
		"text": "당신은 눈을 뜬다."
	},
	{
		"text": "눈앞에 보이는 것은, 링거다."
	},
	{
		"text": "이곳은 실험실."
	},
	{
		"text": "아, 익숙한 풍경이다⋯⋯"
	} ,
		{
			"name": "나기사 카토레아",
		"text": "그러니까⋯⋯. 뭐더라⋯⋯⋯ 이 약을 투여하면, 50% 확률로 부작용이⋯."
	} ,
		{"name": "나기사 카토레아",
		"text": "운⋯을 시험한다고⋯ 그랬던 것 같은⋯."
	} , //5
	{
		"name": "나기사 카토레아",
		"text": "⋯아⋯ 설명 귀찮⋯⋯."
	} ,
	{
		"name": "나기사 카토레아",
		"text": "대충⋯⋯ 이해했지⋯?"
	} ,
	{
		"name": "나기사 카토레아",
		"text": "이런 건⋯⋯ 익숙하잖아⋯⋯⋯."
	} ,
	{
		"name": "나카노하라 미나토",
		"text": "응⋯ 그러네."
	},
	{
		"name": "나카노하라 미나토",
		"text": "어떤 부작용인지는 모르고?"
	},//10
	 {
		"name": "나기사 카토레아",
		"text": "들었던 것 같은데⋯ ⋯설명하기⋯ 귀찮⋯⋯."
	},
	 {
		"name": "나카노하라 미나토",
		"text": "⋯여기 누워있는 사람이 너였다면, 분명 부작용 같은 건 피해갔겠지⋯."
	},
	 {
		"name": "나카노하라 미나토",
		"text": "⋯너한테 찾아올 행운이 나한테 조금이라도 왔더라면,"
	},
	 {
		"name": "나카노하라 미나토",
		"text": "여기까지 오지는 않았을텐데⋯⋯"
	},
	 {
		"name": "나카노하라 미나토",
		"text": "처음부터 태어나지 않았다면 좋았을텐데."
	},//15
	 {
		"name": "나카노하라 미나토",
		"text": "형이 죽지 않았다면."
	},
	 {
		"name": "나카노하라 미나토",
		"text": "하다못해 내가 같이 죽었었다면."
	},
	 {
		"name": "나카노하라 미나토",
		"text": "그 이후의 실험에서라도⋯⋯"
	},
	{
		"name": "나카노하라 미나토",
		"text": "여기 온 이후에라도⋯⋯."
	},
	{
		"name": "나카노하라 미나토",
		"text": "나한테는 딱 한번의 행운만이 필요했는데⋯⋯⋯."
	},//20
	{
		"name": "나기사 카토레아",
		"text": "으응⋯. 유감⋯⋯. 행운이라는 거, 내가 어떻게 나눠주고⋯ 할 수 있는 게 아니라⋯⋯."
	},
	{
		"name": "나기사 카토레아",
		"text": "후회해⋯⋯? 죽지 못한 거⋯⋯?"
	},
	{
		"name": "나카노하라 미나토",
		"text": "⋯응."
	},
	{
		"name": "나기사 카토레아",
		"text": "⋯⋯그거⋯. 진심?⋯⋯"
	},
	{
		"name": "나카노하라 미나토",
		"text": "⋯⋯⋯"
	},//25
	{
		"name": "나카노하라 미나토",
		"text": "잘 모르겠어⋯."
	},
	{
		"name": "나카노하라 미나토",
		"text": "그래도 여기서 그만둘 수는 없어."
	},
	{
		"name": "나카노하라 미나토",
		"text": "뒤돌아 볼 여유같은 건 없어⋯⋯."
	},
	{
		"text": "⋯약물이 반정도 투여되었다."
	},//----------------------29
	{
		"name": "마나하",
		"text": "⋯아니, 너는 언제든지 뒤돌아 볼 수 있어. 나랑 다르게."
	},//30
	{
		"name": "마나하",
		"text": "돌아보지 않으려고 하는 거지⋯."
	},
	 {
		"name": "나카노하라 미나토",
		"text": "⋯⋯그럴지도⋯."
	},
	{
		"name": "마나하",
		"text": "⋯나한테 미래에서 기다린다고 했잖아."
	},

		{
		"name": "마나하",
		"text": "이런 곳에서 멈출 생각이야?"
	},
	{
		"name": "마나하",
		"text": "이래서는 미래로 달려가도 네가 없어⋯."
	},//35
		{
		"name": "나카노하라 미나토",
		"text": "⋯어쩐지 슬픈 것 처럼 말하네⋯⋯."
	},
	{
		"name": "마나하",
		"text": "슬프니까. 네가 여기 있는 것도, 여기까지 오게 된 것도⋯ 전부⋯."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "마나하. 내가 바로 네 슬픔의 원인이야."
	}, 
	{ 
			"name": "나카노하라 미나토",
		"text": "네가 지금까지 흘렸던 눈물들, 전부 내 탓이야."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "내 불행에 너희들을 끌고 들어온 거라고⋯⋯."
	},//40
	{ 
		"name": "나카노하라 미나토",
		"text": "그걸 숨기고 가증스럽게 같이 슬퍼했어."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "그때 감정만큼은 진심이었다고 하지만⋯ 너희들 입장에서, 그런 건 기만일 뿐이고⋯⋯."
	},
	{ 
		"text": "침묵이 흐른다."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯마나하. 아마 나는 죽게 될 거야."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "그럼 너는, 이번에도 나를 위해 울어 줄까?"
	},//45
	{ 
		"name": "마나하",
		"text": "⋯⋯응. 말했잖아. 미워하지는 못할 것 같다고⋯."
	},
	{ 
		"name": "마나하",
		"text": "아마 펑펑 울거야. 평소보다 두 배로 울지도 몰라."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "너는 마음이 너무 약해⋯."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯역시, 나 같은 건 기록하지 말고,"
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "기억 하지 말고⋯⋯."
	},//50
	{ 
		"name": "나카노하라 미나토",
		"text": "전부 다 잊어버리는 편이 나을텐데⋯⋯."
	},
	{ 
		"text": "⋯"
	},
	 { 
		"text": "하나 더, 묻고 싶은 것이 있다."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯아직도 너한테 나는 소중한 기억이야?"
	},
	{ 
		"text": "답은 돌아오지 않는다." 
	}, //55
	{ 
		"text": "⋯"
	},
	{ 
		"text": "⋯약물이 전부 투여되었다."
	},
	{ 
		"text": "남은 건 결과를 기다리는 것 뿐이다"
	},//-------------------------------------------
	{ 
		"name": "마타라이 아시타",
		"text": "기껏 훌륭한 모르모트를 사용할 기회인데, 이런 실험을 하게 될 줄은 몰랐어." 
	},
	{ 
		"name": "마타라이 아시타",
		"text": "미래에 쓸 데도 없고, 오직 고통을 주기 위한 실험이라니⋯."
	},//60
	{ 
		"name": "마타라이 아시타",
		"text": "네가 원하는 실험이라는 게 이런 거야?"
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯딱히, 이런 걸 원하지는 않았지만… 이 처형은, 나한테 벌을 주기 위해 설계됐으니까, 최대의 고통을⋯."
	},
	{ 
		"name": "마타라이 아시타",
		"text": "그건 핑계고, 네가 지금 하는 게 자해라는 건 알고 있지?"
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯⋯너는 가끔, 사람이.. 할 말이 없게 만들어⋯ "
	},
	{ 
		"name": "마타라이 아시타",
		"text": "이제와서 새삼스럽게."
	},//65
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯⋯"
	},
	{ 
		"name": "마타라이 아시타",
		"text": "⋯자, 마지막 순간이잖아. 하고 싶은 말은 없어?"
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯그런 거 없어⋯."
	}, 
	{ 
		"name": "마타라이 아시타",
		"text": "거짓말."
	},
	{ 
		"name": "마타라이 아시타",
		"text": "있잖아, 묻고 싶은 거."
	},//70
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯⋯."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "마타라이."
	},
	{ 
		"name": "마타라이 아시타",
		"text": "응." 
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "아직도 우리는 친구야?" 
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "안아달라고 하면, 안아줄 수 있어?" 
	},//75
	{ 
		"name": "나카노하라 미나토",
		"text": "아직도 나한테 내일이 있었으면 좋겠어?⋯⋯." 
	},
	{ 
		"name": "마타라이 아시타",
		"text": "너는 어떤 대답이 듣고 싶어?" 
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯⋯친구같은 건 그만둘 거라고⋯."
	}, 
	{ 
		"name": "나카노하라 미나토",
		"text": "너 같은건 정말 싫다고, 그렇게 말해주면 좋겠어."
	},
	{ 
		"name": "마타라이 아시타",
		"text": "미련을 떨쳐버리는 건 스스로의 힘으로 하는 게 좋아."
	},//80
	{ 
		"name": "마타라이 아시타",
		"text": "이렇게 남의 입을 빌리는 게 아니라."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯⋯"
	},
	{ 
		"name": "마타라이 아시타",
		"text": "⋯미나토. 내 소견으로 너는 이미 죽었어도 이상하지 않은 상태야."
	},
	{ 
		"name": "마타라이 아시타",
		"text": "죽으려고 마음 먹으면 당장이라도 죽을 수 있었겠지."
	},
	{ 
		"name": "마타라이 아시타",
		"text": "그럼, 왜 아직까지 살아있는 거야?" 
	},//85
	{ 
		"text": "당신은⋯⋯⋯⋯." 
	},//-----------------------86
	{ 
		"text": "나는⋯⋯." 
	},
	{ 
		"text": "뭔가 말하려 입을 벌리는 순간," 
	},
	{ 
		"text": "툭. 투둑." 
	},
	{ 
		"text": "말 대신 쏟아지는 건 핏덩이다." 
	}, //90
	{ 
		"name": "마타라이 아시타",
		"text": "아, 이런. 약물의 부작용이…." 
	},
	{ 
		"text": "몸 속에서는 무언가가 계속 쏟아져 나온다." 
	},
	{ 
		"text": "울컥, 울컥, 주르륵." 
	},
	{ 
		"text": "입 안에는 기분나쁜 비린맛이 가득하다." 
	},
	{ 
		"text": "끄륵, 끅……." 
	},//95
	{ 
		"text": "무언가 말하려고 해도, 피가 끓는 소리밖에 나오지 않고…" 
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
	}//100
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
	
		if (cursor === 1) {imageElement.src = './img/main/main-4-1.gif';}
		if (cursor === 89) {imageElement.src = './img/main/main-4-2.jpg';}
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
		if (cursor === 9) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 10) {imageElement.src = './img/face/head-normaltalk.png';}
		if (cursor === 12) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 14) {imageElement.src = './img/face/head-side.png';}
		if (cursor === 15) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 20) {imageElement.src = './img/face/head-die.png';}
		if (cursor === 23) {imageElement.src = './img/face/head-side.png';}
		if (cursor === 26) {imageElement.src = './img/face/head-Closeweat.png';}
		if (cursor === 27) {imageElement.src = './img/face/head-sideWeat.png';}


		if (cursor === 30) {imageElement.src = './img/face/head-normaltalkweat.png';}
		if (cursor === 32) {imageElement.src = './img/face/head-normalweat.png';}
		if (cursor === 33) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 39) {imageElement.src = './img/face/head-Closesmallweat.png';}
		if (cursor === 40) {imageElement.src = './img/face/head-Closeweat.png';}
		if (cursor === 44) {imageElement.src = './img/face/head-normaltalk.png';}
		if (cursor === 48) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 52) {imageElement.src = './img/face/head-side.png';}
		if (cursor === 54) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 55) {imageElement.src = './img/face/head-side.png';}

		if (cursor === 59) {imageElement.src = './img/face/head-normalweat.png';}
		if (cursor === 62) {imageElement.src = './img/face/head-normaltalkweat.png';}
		if (cursor === 64) {imageElement.src = './img/face/head-Closesmallweat.png';}
		if (cursor === 66) {imageElement.src = './img/face/head-normalweat.png';}

		if (cursor === 68) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 71) {imageElement.src = './img/face/head-side.png';}
		if (cursor === 72) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 74) {imageElement.src = './img/face/head-SmileWeat.png';}
		if (cursor === 76) {imageElement.src = './img/face/head-SmileShadow.png';}
		if (cursor === 80) {imageElement.src = './img/face/head-her.png';}
		if (cursor === 86) {imageElement.src = './img/face/head-die.png';}
		if (cursor === 89) {imageElement.src = './img/face/head-her.png';}
		if (cursor === 92) {imageElement.src = './img/face/head-diered.png';}

}

// 캐릭터 이미지 변경 함수
function changeCharacterImage(cursor) {
	const imageElement = document.getElementById('character');
	
		if (cursor === 4) {imageElement.src = './img/character/Nagisa-1.png';}
		if (cursor === 6) {imageElement.src = './img/character/Nagisa-2.png';}
		if (cursor === 7) {imageElement.src = './img/character/Nagisa-3.png';}
		if (cursor === 11) {imageElement.src = './img/character/Nagisa-2.png';}
		if (cursor === 15) {imageElement.src = './img/character/Nagisa-1.png';}
		if (cursor === 21) {imageElement.src = './img/character/Nagisa-3.png';}
		if (cursor === 22) {imageElement.src = './img/character/Nagisa-1.png';}

		if (cursor === 30) {imageElement.src = './img/character/Manaha-1.png';}
		if (cursor === 31) {imageElement.src = './img/character/Manaha-3.png';}
		if (cursor === 33) {imageElement.src = './img/character/Manaha-2.png';}
		if (cursor === 35) {imageElement.src = './img/character/Manaha-3.png';}
		if (cursor === 37) {imageElement.src = './img/character/Manaha-1.png';}
		if (cursor === 44) {imageElement.src = './img/character/Manaha-2.png';}
		if (cursor === 46) {imageElement.src = './img/character/Manaha-3.png';}

		if (cursor === 54) {imageElement.src = './img/character/non.png';}

		if (cursor === 59) {imageElement.src = './img/character/Ashita-1.png';}
		if (cursor === 60) {imageElement.src = './img/character/Ashita-2.png';}
		if (cursor === 63) {imageElement.src = './img/character/Ashita-3.png';}
		if (cursor === 65) {imageElement.src = './img/character/Ashita-1.png';}
		if (cursor === 67) {imageElement.src = './img/character/Ashita-2.png';}
		if (cursor === 69) {imageElement.src = './img/character/Ashita-3.png';}
		if (cursor === 73) {imageElement.src = './img/character/Ashita-1.png';}
		if (cursor === 80) {imageElement.src = './img/character/Ashita-3.png';}
		if (cursor === 83) {imageElement.src = './img/character/Ashita-2.png';}
		if (cursor === 85) {imageElement.src = './img/character/Ashita-1.png';}
		if (cursor === 91) {imageElement.src = './img/character/Ashita-3.png';}


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
			window.location.href = 'chapter4.5.html';
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