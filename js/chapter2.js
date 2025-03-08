 let cursor = 0;
	let choiceActive = false; // 선택지 활성화 여부

	const choiceCursor = 82; // 선택지가 나타날 시점

const scenario = [
	{
		"text": "당신은 눈을 뜬다."
	},
	{
		"text": "눈앞에 보이는 것은, 장작이다."
	},
	{
		"text": "당신은 나무 기둥에 묶여 있다."
	},
	{
		"text": "주변에 있는 것은 아무것도 들지 않은 사람과,"
	} ,
		{
		"text": "성냥을 든 사람과,"
	} ,
		{
		"text": "횃불을 든 사람."
	} ,
			{
		"text": "⋯아무것도 들지 않은 사람이 이야기한다."
		//7
	} ,
	{
		"name": "아케호시 유우토",
		"text": "미나토군, 상태는 어때? 힘들지는 않아?"
	},
	{
		"name": "나카노하라 미나토",
		"text": "…괜찮아… 이런 아픔은 익숙하니까⋯."
	},
	 {
		"name": "아케호시 유우토",
		"text": "몸은 괜찮다니까 다행이네. 마음쪽은 어때?"
	}, //10
	 {
		"name": "나카노하라 미나토",
		"text": "마음?..."
	},
	 {
		"name": "아케호시 유우토",
		"text": "죄책감 때문에 끔찍하게 무거운 상태려나⋯."
	},
	 {
		"name": "나카노하라 미나토",
		"text": "네가 나에게, 돌아와서 기쁘다고 했을 때 만큼. 어쩌면⋯ 그 이상으로."
	},
	 {
		"name": "나카노하라 미나토",
		"text": "나는 그런 말을 들을 이유도, 자격도 없는 사람인데…."
	},
	 {
		"name": "아케호시 유우토",
		"text": "미나토 군, 나는⋯."
	}, //15
	 {
		"name": "아케호시 유우토",
		"text": "⋯아직도 네가 살기를 원해. 이런 말도 무거워?"
	},
	 {
		"name": "나카노하라 미나토",
		"text": "⋯무겁네… 너무, 무거워서⋯⋯"
	},
	{
		"name": "나카노하라 미나토",
		"text": "⋯⋯"
	},
	{
		"name": "나카노하라 미나토",
		"text": "⋯나, 아마도 너한테 큰 상처를 줬을거야."
	},
	{
		"name": "나카노하라 미나토",
		"text": "네가 열심히 준비한 일을 전부 망쳐 놨지."
	},//20
	{
		"name": "나카노하라 미나토",
		"text": "나는 늘 그래⋯."
	},
	{
		"name": "나카노하라 미나토",
		"text": "내 주변에 있는 건, 전부 다⋯ 엉망이 되거나, 괴로워지거나⋯."
	},
	{
		"name": "나카노하라 미나토",
		"text": "과거를 돌이켜 보면 바꾸고 싶은 일들 투성이야⋯"
	},
	{
		"name": "나카노하라 미나토",
		"text": "후회없이 살고 싶은 네 곁에있기엔, 나는 너무 후회로 얼룩져 있어서⋯"
	},
	{
		"name": "나카노하라 미나토",
		"text": "‘뒤돌아보지 마.’"
	},//25
	{
		"name": "나카노하라 미나토",
		"text": "‘너의 삶을 최선을 다해 살아.’"
	},
 
	{
		"name": "나카노하라 미나토",
		"text": "그런 말은, 나한테는 어울리지 않아⋯"
	},
	{
		"name": "나카노하라 미나토",
		"text": "나는 너처럼 근사한 사람이 되지 못하니까⋯."
	},
 //30
	 {
		"name": "아케호시 유우토",
		"text": "⋯미나토군, 돌아가면 안될까?"
	},
	{
		"name": "아케호시 유우토",
		"text": "다들 기다리고 있을거야."
	}, //30
	{
		"name": "나카노하라 미나토",
		"text": "⋯⋯"
	},
		{
		"text": "이런 말을 뱉는 것 조차 주변에 우울을 뿌리고 다니는 것처럼 느껴진다."
	},
		{
		"text": "당신은 마음이 더욱 무거워졌다."
	},
	{
		"text": "차라리 빨리 불이 붙어서, "
	},
	{ 
		"text": "까맣게 타 버려서,"
	}, //35
	{ 
		"text": "사라질 수만 있다면⋯⋯."
	},
	{ 
		"name": "사잔카 미조레",
		"text": "어~~이! 뭘 축 늘어져 있는 거야?"
	},//37
	{ 
		"name": "사잔카 미조레",
		"text": "아직 미조레님의 저주는 시작도 하지 않았다고!"
	},
	{ 
		"name": "사잔카 미조레",
		"text": "나를 이런 꼴로 만들다니, 철저하게 복수해 주마─!!! 시금치녀석──!!!!"
	},
	{ 
		"text": "⋯이라고 말하는 이가 들고 있는 것은, 작은 성냥 한 개비다."
	},//40
	{ 
		"text": "이걸로는 상처는 입힐지언정, 누군가를 죽일 수는 없을 것이다⋯."
	},
	{ 
		"text": "처음부터, 그 누구도 악의 따위는 없었을텐데⋯. "
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "있잖아⋯  불은⋯ 뜨겁지⋯."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "아마 너희도 뜨거웠겠지⋯⋯."
	},

	{ 
		"name": "사잔카 미조레",
		"text": "하아아아아?"
	}, //45
	{ 
		"name": "사잔카 미조레",
		"text": "뜬금없이 뭐라는 거야!"
	},
	 { 
		"name": "사잔카 미조레",
		"text": "이 미조레님한테 그런 불 따위는 아무것도 아니거든?!"
	},
	{ 
		"name": "사잔카 미조레",
		"text": "시금치같은 녀석이나 열기 때문에 시들어 가겠지!"
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯맞아. 나, 불에는 조금 약하니까⋯." 
	},
	{ 
		"name": "사잔카 미조레",
		"text": "아니아니. 쉽게 인정하라고 한 말 아니니까."
	}, //50
	{ 
		"name": "사잔카 미조레",
		"text": "여기서는 제대로 반박하라고!"
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯⋯하지만⋯ 맞는 말이라서, 딱히⋯ 할 얘기가⋯⋯." 
	},
	{ 
		"name": "사잔카 미조레",
		"text": "윽… 이래서 우중충한 놈이란⋯⋯."
	},
	{ 
		"name": "사잔카 미조레",
		"text": "야! 너도 뭐라고 한마디 해 봐!"
	},
	{ 
		"name": "후부키 유키호",
		"text": "뭐예요, 나한테 명령 하지 마세요!"
	}, //55
	{ 
		"name": "후부키 유키호",
		"text": "당신이 그러지 않아도 한마디 해 줄 생각이었으니까요⋯!"
	},
	{ 
		"text": "횃불을 든 사람이 입을 연다."
	},
	{ 
		"name": "후부키 유키호",
		"text": "아아⋯ 미나토님, 당신이라는 사람은⋯ 정말 최악이에요!"
	},
	{ 
		"name": "후부키 유키호",
		"text": "당신 때문에⋯. 너 때문에⋯⋯"
	},
	{ 
		"name": "후부키 유키호",
		"text": "너 때문에, 내가 이런 꼴이 됐어⋯!!"
	},
	{ 
		"name": "후부키 유키호",
		"text": "그런 주제에 태연하게 사람들 틈에 섞여서 하하호호⋯"
	}, //60
	{ 
		"name": "후부키 유키호",
		"text": "가증스럽기 짝이 없다고!!! "
	},
	{ 
		"text": "그 말을 듣는 당신은⋯"
	},
	{ 
		"text": "어째서인지 웃음이 나온다."
	},
	{ 
		"text": "이런 최악의 평가에 마음이 안심되는 건 왜일까?⋯."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "네 말이 맞아, 나만큼 최악인 사람은 보기 드물겠지⋯." 
	},//65
	{ 
		"name": "나카노하라 미나토",
		"text": "있잖아, 너는 네 모습을 숨기려고 하지만⋯" 
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "내 눈에는 설녀 보다는 화마인 네 모습이 더 아름다워." 
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "아마 바보같은 사람들이나 네 안의 절망을 두려워하겠지." 
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "주변 평판같은 건 신경쓰지 않았다면 더 밝게 타올랐을텐데⋯." 
	},
	{ 
		"name": "후부키 유키호",
		"text": "그럴 기회도 없이 불을 꺼트려 버린 게 누구인데요!"
	}, //70
	{ 
		"name": "후부키 유키호",
		"text": "정말⋯ 마지막까지⋯⋯!"
	},
	{ 
		"text": "횃불을 든 이는 소매로 얼굴을 가리며 물러난다."
	},
	{ 
		"text": "⋯마녀를 처형할 때가 온 것 같다."
	},
	{ 
		"text": "⋯⋯"
	},
	{ 
		"text": "성냥이 횃불에 옮겨붙고"
	}, //75
	{ 
		"text": "횃불은 장작에 옮겨붙는다. "
	},
	{ 
		"text": "그리고 일 순간에, 불이 커진다."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯⋯" 
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "그거 알아? 화형은, 불에 타서 죽는 것 보다는⋯" 
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "연기 때문에 질식하는 거래." 
	},//80
	{ 
		"name": "나카노하라 미나토",
		"text": "뜨겁고 해로운 유독가스가 폐를 손상시켜서, 숨을 잘 못 쉬게 만들어서⋯." 
	},
	{ 
		"text": "숨을 쉬려고 괴로워하다가⋯." 
	},
	{ 
		"text": "당신은⋯⋯⋯⋯⋯⋯" 
	},//83
	{ 
		"text": "목구멍이 뜨겁다." 
	},
	{ 
		"text": "숨이 잘 쉬어지지 않는다." 
	}, //85
	{ 
		"text": "공기를 찾아 숨을 들이마셔 보지만," 
	},
	{ 
		"text": "코로 들어오는 것은 새카만 연기 뿐이다." 
	},
	{ 
		"text": "숨을 쉬려고 괴로워 하면서," 
	},
	{ 
		"text": "당신은 숨이 끊어진다." 
	},
	{ 
		"text": "⋯⋯⋯⋯⋯⋯" 
	}, //90
	{ 
		"text": "그러나 죽음에 이르지는 못한다." 
	},
	 { 
		"text": "삶은 계속된다." 
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
  
  if (cursor >= 77) { 
    imageElement.style.display = 'block';
  } else {
    imageElement.style.display = 'none';
  }
}

// 메인 이미지 변경 함수
function changeMainImage(cursor) {
	const imageElement = document.getElementById('main-image');
	
		if (cursor === 2) {imageElement.src = './img/main/main-2-1.gif';}
		if (cursor === 36) {imageElement.src = './img/main/main-2-3.gif';}
		if (cursor === 56) {imageElement.src = './img/main/main-2-2.gif';}
		if (cursor === 73) {imageElement.src = './img/main/main-2-1.gif';}
}

// 상태 이미지 변경 함수
function changeStatusImage(cursor) {
	const imageElement = document.getElementById('status');
	
		if (cursor === 81) {imageElement.src = './img/status/status-2-danger.gif';}
		if (cursor === 89) {imageElement.src = './img/status/status-2-die.png';}
		if (cursor === 91) {imageElement.src = './img/status/status-2-danger.gif';}
}

// 심장 이미지 변경 함수
function changeHeartImage(cursor) {
	const imageElement = document.getElementById('heart');
	
		if (cursor === 81) {imageElement.src = './img/heart/heart-danger.gif';}
		if (cursor === 89) {imageElement.src = './img/heart/heart-die.gif';}
		if (cursor === 91) {imageElement.src = './img/heart/heart-danger.gif';}
}

// 두상 이미지 변경 함수
function changeFaceImage(cursor) {
	const imageElement = document.getElementById('face');
	
		if (cursor === 1) {imageElement.src = './img/face/head-side.png';}
		if (cursor === 8) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 12) {imageElement.src = './img/face/head-Closesmallweat.png';}
		if (cursor === 17) {imageElement.src = './img/face/head-Closeweat.png';}
		if (cursor === 18) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 22) {imageElement.src = './img/face/head-side.png';}
		if (cursor === 24) {imageElement.src = './img/face/head-normaltalkweat.png';}
		if (cursor === 28) {imageElement.src = './img/face/head-Closesmallweat.png';}
		if (cursor === 30) {imageElement.src = './img/face/head-side.png';}
		if (cursor === 36) {imageElement.src = './img/face/head-normaltalkweat.png';}
		if (cursor === 41) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 43) {imageElement.src = './img/face/head-Closeweat.png';}
		if (cursor === 46) {imageElement.src = './img/face/head-normalweat.png';}
		if (cursor === 48) {imageElement.src = './img/face/head-Closeweat.png';}
		if (cursor === 54) {imageElement.src = './img/face/head-normalweat.png';}
		if (cursor === 62) {imageElement.src = './img/face/head-SmileWeat.png';}
		if (cursor === 69) {imageElement.src = './img/face/head-SmileShadow.png';}
		if (cursor === 74) {imageElement.src = './img/face/head-die.png';}
		if (cursor === 81) {imageElement.src = './img/face/head-SmileShadow.png';}
		if (cursor === 84) {imageElement.src = './img/face/head-die.png';}
		if (cursor === 89) {imageElement.src = './img/face/head-diered.png';}

}

// 캐릭터 이미지 변경 함수
function changeCharacterImage(cursor) {
	const imageElement = document.getElementById('character');
	
		if (cursor === 7) {imageElement.src = './img/character/Yuto-2.png';}
		if (cursor === 9) {imageElement.src = './img/character/Yuto-1.png';}
		if (cursor === 11) {imageElement.src = './img/character/Yuto-2.png';}
		if (cursor === 12) {imageElement.src = './img/character/Yuto-3.png';}
		if (cursor === 14) {imageElement.src = './img/character/Yuto-2.png';}
		if (cursor === 15) {imageElement.src = './img/character/Yuto-1.png';}
		if (cursor === 19) {imageElement.src = './img/character/Yuto-3.png';}
		if (cursor === 28) {imageElement.src = './img/character/Yuto-2.png';}
		if (cursor === 29) {imageElement.src = './img/character/Yuto-1.png';}
	
		if (cursor === 36) {imageElement.src = './img/character/Mizore-1.png';}
		if (cursor === 38) {imageElement.src = './img/character/Mizore-3.png';}
		if (cursor === 42) {imageElement.src = './img/character/Mizore-1.png';}
		if (cursor === 44) {imageElement.src = './img/character/Mizore-3.png';}
		if (cursor === 49) {imageElement.src = './img/character/Mizore-2.png';}
		if (cursor === 50) {imageElement.src = './img/character/Mizore-3.png';}
		if (cursor === 52) {imageElement.src = './img/character/Mizore-2.png';}
		if (cursor === 53) {imageElement.src = './img/character/Mizore-1.png';}
		
		if (cursor === 54) {imageElement.src = './img/character/Yukiho-2.png';}
		if (cursor === 59) {imageElement.src = './img/character/Yukiho-3.png';}
		if (cursor === 65) {imageElement.src = './img/character/Yukiho-2.png';}
		if (cursor === 67) {imageElement.src = './img/character/Yukiho-1.png';}
		if (cursor === 70) {imageElement.src = './img/character/Yukiho-2.png';}

if (cursor === 71) {imageElement.src = './img/character/Yukiho-1.png';}

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
			window.location.href = 'chapter3.html';
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