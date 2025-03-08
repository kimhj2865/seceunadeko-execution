 let cursor = 0;
	let choiceActive = false; // 선택지 활성화 여부

	const choiceCursor = 74; // 선택지가 나타날 시점

const scenario = [
	{
		"text": "당신은 눈을 뜬다."
	},
	{
		"text": "눈앞에 보이는 풍경은, ㅁ$%^@이다."
	},
	{
		"text": "당신은 무릎을 꿇고 앉아 있다."
	},
	{
		"text": "당신과 마주보고 앉아있는 사람은 셋."
	} ,
		{
		"text": "그리고⋯⋯"
	} ,
		{
		"text": "등 뒤에,"
	} , //5
	{
		"text": "무언가가,"
	} ,
	{
		"text": "있다."
	} ,
			{
		"text": "⋯⋯."
	} ,
	{
		"text": "눈앞의 사람이 말을 걸어온다."
	},
	{
		"name": "허승재",
		"text": "미나토."
	},//10
	 {
		"name": "나카노하라 미나토",
		"text": "⋯⋯국화꽃⋯ 선물하고 싶었는데⋯"
	},
	 {
		"name": "나카노하라 미나토",
		"text": "꽃이… 아직 안 피었어."
	},
	 {
		"name": "나카노하라 미나토",
		"text": "이제와서 받고 싶은 마음이 들 거라고.. 생각하지도 않지만⋯."
	},
	 {
		"name": "나카노하라 미나토",
		"text": "내가 또 망쳐놨어. 그렇지?⋯"
	},
	 {
		"name": "허승재",
		"text": "괜찮아, 내가 알아서 서리해가지 뭐."
	},//15
	 {
		"name": "허승재",
		"text": "나도 조금은 같이 돌봤으니까 한 송이정도는 괜찮지?"
	},
	 {
		"name": "나카노하라 미나토",
		"text": "네가 가지고 싶다면⋯."
	},
	 {
		"name": "허승재",
		"text": "그리고, 망했다면 수습하면 된다고 말했었잖아."
	},
	{
		"name": "허승재",
		"text": "그건 벌써 포기한 거야?"
	},
	{
		"name": "나카노하라 미나토",
		"text": "내 능력 밖의 일 같아서⋯ 포기는 빠를수록 좋다길래⋯"
	},//20
	{
		"name": "허승재",
		"text": "이런 쪽으로는 또 결단이 빠르네⋯."
	},
	{
		"name": "허승재",
		"text": "포기를 결단할 용기로 수습할 생각을 했다면 좋았을텐데."
	},
	{
		"name": "나카노하라 미나토",
		"text": "무너지지 않을 각오가 부족한가 봐⋯."
	},
	{
		"name": "허승재",
		"text": "그래서 이렇게 도망치고 있는 거고?"
	},
	{
		"name": "나카노하라 미나토",
		"text": "⋯"
	},//25
	{
		"name": "허승재",
		"text": "그 방법, 잘 통할 것 같아?"
	},
	{
		"name": "나카노하라 미나토",
		"text": "⋯⋯아마도."
	},
	{
		"name": "나카노하라 미나토",
		"text": "이번만큼은, 확실히⋯ 준비했으니까⋯"
	},
	{
		"name": "나카노하라 미나토",
		"text": "엄청나게 넓어서, 아무도 나를 찾지 못할 곳으로⋯."
	},
	 {
		"name": "허승재",
		"text": "글쎄, 내 생각엔 아마 안통할 것 같은데. 두고봐야 알겠네."
	},//30
	{
		"text": "첫 번째 사람이 말을 마친다."
	},
	{
		"text": "두 번째 사람이 입을 연다."
	},//---------------------------------
		{
		"name": "토야마 사나에",
		"text": "노다씨의 방식은 이해할 수가 없어⋯."
	},
		{
			"name": "토야마 사나에",
		"text": "아니, 애초에 어디부터 어디까지 믿으면 좋을지도 모르겠어."
	},
	{
		"name": "토야마 사나에",
		"text": "역시 저번에 말했던 건 거짓말이었지?"
	},//35
	{ 
		"name": "토야마 사나에",
		"text": "전부 다 입에 발린 소리였지?⋯."
	}, 
	{ 
			"name": "나카노하라 미나토",
		"text": "⋯그렇게 보이려나⋯⋯."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "이렇게 말해서 믿어줄 지는 모르겠지만, 진심이었어."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "너희들한테서는 새로운 것들을 정말 많이 받았거든⋯."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "내 사진을 보고 싫지 않았던 건 처음이었어."
	},//40
	{ 
		"name": "나카노하라 미나토",
		"text": "난 그걸 제법 근사한 일이라고 생각해⋯."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯⋯여전히 거울도 보고싶은 마음이 안 드는데, 신기하지⋯."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯진심이 전해지면 좋을텐데, 어때?⋯"
	},
	{ 
		"name": "토야마 사나에",
		"text": "⋯이제와서 그런 말을 믿을 수 있을 리가 없잖아!"
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "아… 역시 그런가⋯. "
	},//45
	{ 
		"name": "나카노하라 미나토",
		"text": "…내가 늘, 그렇지 뭐⋯."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "이런 애매한 사람이라서 미안해⋯⋯."
	},
	{ 
		"name": "토야마 사나에",
		"text": "⋯그런 얘기는 됐어."
	},
	 { 
		"name": "토야마 사나에",
		"text": "나는 더이상 할 말 없으니까."
	},
	{ 
		"text": "두 번째 사람이 말을 마친다."
	},//50
	{ 
		"text": "세 번째 사람이 입을 연다." 
	}, //-------------------------------------------
	{ 
		"name": "키츠네즈카 텐네",
		"text": "나카노하라 미나토."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯⋯"
	},
	{ 
		"name": "키츠네즈카 텐네",
		"text": "할 말은 많은데… 너무 많아서 오히려 안 나오네." 
	},
	{ 
		"name": "키츠네즈카 텐네",
		"text": "나한테 할 말 없어?"
	},//55
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯⋯미안⋯."
	},
	{ 
		"name": "키츠네즈카 텐네",
		"text": "미안하다는 말 말고."
	},
	{ 
		"name": "키츠네즈카 텐네",
		"text": "의미 없는 사과는 이제 질렸어⋯."
	},
	{ 
		"text": "죄악감에 속이 울렁거린다."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "이제와서⋯ 돌아갈 방법은 없어⋯."
	},//60
	{ 
		"name": "나카노하라 미나토",
		"text": "알잖아. 죽음은, 돌이킬 수 없는 거⋯."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "그 뒤로는 아무것도 없다는 것도⋯⋯."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "여기서 몇 명이 죽었더라⋯"
	}, 
	{ 
		"name": "나카노하라 미나토",
		"text": "그런데 어떻게, 원인인 내가 살아 있을 수 있어⋯?⋯."
	},
	{ 
		"name": "키츠네즈카 텐네",
		"text": "그러니까 네가 책임 져야지."
	},//65
	{ 
		"name": "키츠네즈카 텐네",
		"text": "이렇게 죽음으로 도망갈 게 아니라."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯⋯."
	},
	{ 
		"name": "키츠네즈카 텐네",
		"text": "결국 우리를 핑계거리로 사용하는 것 뿐이네…." 
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯⋯⋯⋯" 
	},
	{ 
		"name": "키츠네즈카 텐네",
		"text": "도망치지 마." 
	},//70
	{ 
		"name": "키츠네즈카 텐네",
		"text": "눈 돌리지 마." 
	},
	{ 
		"name": "키츠네즈카 텐네",
		"text": "나를 쳐다 봐." 
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯⋯⋯⋯"
	}, 
	{ 
		"text": "나를 쳐다 봐. 나를 쳐다 봐. 나를 쳐다 봐. 나를 쳐다 봐. 나를 쳐다 봐. 나를 쳐다 봐. 나를 쳐다 봐. 나를 쳐다 봐. 나를 쳐다 봐. 나를 쳐다 봐. 나를 쳐다 봐. 나를 쳐다 봐. 나를 쳐다 봐. 나를 쳐다 봐. 나를 쳐다 봐. 나를 쳐다 봐. 나를 쳐다 봐. 나를 쳐다 봐. 나를 쳐다 봐."
	},
	{ 
		"text": "차마 마주할 수 없다."
	},//75
	{ 
		"text": "그럴 용기 같은 건, 당신 안에 존재하지 않는다⋯."
	},
	{ 
		"name": "나카노하라 미나토",
		"text": "⋯미안해."
	},
	{ 
		"name": "키츠네즈카 텐네",
		"text": "⋯그래?⋯"
	},
	{ 
		"name": "키츠네즈카 텐네",
		"text": "끝까지 나를 후회하게 만드네⋯⋯."
	},
	{ 
		"text": "쿵"
	},//80
	{ 
		"text": "커다란 발자국 소리가 울린다." 
	},
	{ 
		"text": "쿵" 
	},
	{ 
		"text": "저주가 내려온다." 
	},
	{ 
		"text": "쿵" 
	},
	{ 
		"text": "시야가 붉어진다." 
	},//85
	{ 
		"text": "온몸이 갈기갈기 찢기는 것 같다." 
	},
	{ 
		"text": "울컥, 속에서 뭔가 쏟아져 나온다." 
	},
	{ 
		"text": "머리가 점점 식어가는 것 같다⋯." 
	},
	{ 
		"text": "그렇게, ㅁ$%^@에 의해⋯⋯" 
	},
	{ 
		"text": "⋯아니, 상상력에 의해서인가⋯." 
	},//90
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
	}//94
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
  
  if (cursor >= 100) { 
    imageElement.style.display = 'block';
  } else {
    imageElement.style.display = 'none';
  }
}

// 메인 이미지 변경 함수
function changeMainImage(cursor) {
	const imageElement = document.getElementById('main-image');
	
		if (cursor === 7) {imageElement.src = './img/main/main-3-1.gif';}
		if (cursor === 80) {imageElement.src = './img/main/main-3-3.jpg';}
		if (cursor === 82) {imageElement.src = './img/main/main-3-2.jpg';}
		if (cursor === 84) {imageElement.src = './img/main/main-3-4.jpg';}
}

// 상태 이미지 변경 함수
function changeStatusImage(cursor) {
	const imageElement = document.getElementById('status');
	
		if (cursor === 80) {imageElement.src = './img/status/status-3-danger.gif';}
		if (cursor === 91) {imageElement.src = './img/status/status-3-die.png';}
		if (cursor === 93) {imageElement.src = './img/status/status-3-danger.gif';}
}

// 심장 이미지 변경 함수
function changeHeartImage(cursor) {
	const imageElement = document.getElementById('heart');
	
		if (cursor === 80) {imageElement.src = './img/heart/heart-danger.gif';}
		if (cursor === 91) {imageElement.src = './img/heart/heart-die.gif';}
		if (cursor === 93) {imageElement.src = './img/heart/heart-danger.gif';}
}

// 두상 이미지 변경 함수
function changeFaceImage(cursor) {
	const imageElement = document.getElementById('face');
	
		if (cursor === 1) {imageElement.src = './img/face/head-normaltalkweat.png';}
		if (cursor === 6) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 7) {imageElement.src = './img/face/head-Closeweat.png';}
		if (cursor === 9) {imageElement.src = './img/face/head-normaltalkweat.png';}
		if (cursor === 11) {imageElement.src = './img/face/head-normalweat.png';}
		if (cursor === 13) {imageElement.src = './img/face/head-side.png';}
		if (cursor === 14) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 17) {imageElement.src = './img/face/head-normaltalkweat.png';}
		if (cursor === 23) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 25) {imageElement.src = './img/face/head-side.png';}
		if (cursor === 27) {imageElement.src = './img/face/head-normaltalkweat.png';}
		if (cursor === 31) {imageElement.src = './img/face/head-normalweat.png';}

		if (cursor === 37) {imageElement.src = './img/face/head-normaltalk.png';}
		if (cursor === 39) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 40) {imageElement.src = './img/face/head-normaltalk.png';}
		if (cursor === 42) {imageElement.src = './img/face/head-Close.png';}
		if (cursor === 45) {imageElement.src = './img/face/head-normaltalkweat.png';}
		if (cursor === 47) {imageElement.src = './img/face/head-Closesmallweat.png';}
		if (cursor === 48) {imageElement.src = './img/face/head-side.png';}

		if (cursor === 53) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 56) {imageElement.src = './img/face/head-Closeweat.png';}
		if (cursor === 60) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 62) {imageElement.src = './img/face/head-Closeweat.png';}
		if (cursor === 64) {imageElement.src = './img/face/head-die.png';}
		if (cursor === 65) {imageElement.src = './img/face/head-her.png';}
		if (cursor === 67) {imageElement.src = './img/face/head-sideWeat.png';}
		if (cursor === 73) {imageElement.src = './img/face/head-Closeweat.png';}
		if (cursor === 74) {imageElement.src = './img/face/head-die.png';}
		if (cursor === 82) {imageElement.src = './img/face/head-herred.png';}
				if (cursor === 85) {imageElement.src = './img/face/head-diered.png';}
		

}

// 캐릭터 이미지 변경 함수
function changeCharacterImage(cursor) {
	const imageElement = document.getElementById('character');
	
		if (cursor === 10) {imageElement.src = './img/character/SeungJae-2.png';}
		if (cursor === 15) {imageElement.src = './img/character/SeungJae-3.png';}
		if (cursor === 16) {imageElement.src = './img/character/SeungJae-1.png';}
		if (cursor === 19) {imageElement.src = './img/character/SeungJae-2.png';}
		if (cursor === 22) {imageElement.src = './img/character/SeungJae-3.png';}
		if (cursor === 24) {imageElement.src = './img/character/SeungJae-1.png';}
		if (cursor === 30) {imageElement.src = './img/character/SeungJae-2.png';}

		if (cursor === 33) {imageElement.src = './img/character/Sanae-1.png';}
		if (cursor === 36) {imageElement.src = './img/character/Sanae-3.png';}
		if (cursor === 38) {imageElement.src = './img/character/Sanae-2.png';}
		if (cursor === 43) {imageElement.src = './img/character/Sanae-1.png';}
		if (cursor === 44) {imageElement.src = './img/character/Sanae-3.png';}
		if (cursor === 47) {imageElement.src = './img/character/Sanae-1.png';}
		if (cursor === 48) {imageElement.src = './img/character/Sanae-2.png';}

		if (cursor === 52) {imageElement.src = './img/character/NENE-2.png';}
		if (cursor === 55) {imageElement.src = './img/character/NENE-1.png';}
		if (cursor === 58) {imageElement.src = './img/character/NENE-2.png';}
		if (cursor === 65) {imageElement.src = './img/character/NENE-1.png';}
		if (cursor === 68) {imageElement.src = './img/character/NENE-2.png';}
		if (cursor === 70) {imageElement.src = './img/character/NENE-3.png';}
		if (cursor === 78) {imageElement.src = './img/character/NENE-1.png';}
		if (cursor === 79) {imageElement.src = './img/character/NENE-2.png';}
		if (cursor === 80) {imageElement.src = './img/character/NENE-3.png';}

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
			window.location.href = 'chapter3.5.html';
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