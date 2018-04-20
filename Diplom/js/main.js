window.addEventListener('DOMContentLoaded', function () {

	let main_page = document.querySelector('.main'),
		custom_page = document.querySelector('.custom');

	// Modal

	let popup_overlay = document.querySelector('.overlay'),
		popup_btn = document.getElementById('popup-btn'),
		popup_window = document.querySelector('.popup');

	popup_btn.addEventListener('click', function(){
		popup_overlay.style.display = 'none';
		main_page.style.display = 'none';
		custom_page.style.display = 'flex';
		let childs = document.querySelectorAll('div.custom > div');
		for (let i = 0; i < childs.length; i++) {
			childs[i].style.display = 'block';
		}
	});

	// Custom data

	let main_name = document.querySelector('.name'),
		main_age = document.querySelector('.age'),
		main_sex = document.querySelector('.sex'),
		main_views = document.querySelector('.views'),
		main_bio = document.querySelector('.bio'),
		custom_name = document.getElementById('name');
		custom_age = document.getElementById('age'),
		radio = document.querySelector('.radio'),
		custom_sex_male = radio.getElementsByTagName('input')[0],
		custom_sex_female = radio.getElementsByTagName('input')[1],
		custom_views = document.getElementById('select'),
		custom_bio = document.getElementById('bio'),
		custom_done_btn = document.getElementById('ready');

	custom_done_btn.addEventListener('click', function (event) {
		event.preventDefault();

		if (custom_sex_male.checked) {
			var sex_val = custom_sex_male.value;
		} else {sex_val = custom_sex_female.value}
		
		const canidate = new candidateData(custom_name.value, custom_age.value, sex_val, custom_views.value, custom_bio.value);
		canidate.createCandidate();
		main_page.style.display = 'block';
	});

	class candidateData {
		constructor (name, age, sex, views, bio) {
			this.name = name;
			this.age = age;
			this.sex = sex;
			this.views = views;
			this.bio = bio;
		}
		createCandidate() {
			main_name.textContent = this.name;
			main_age.textContent = `${this.age} лет`;
			main_sex.textContent = this.sex;
			main_views.textContent = this.views;
			main_bio.textContent = this.bio;
		}
	}

	// Custom view choise

	let skinCounter = 1,
		hairCounter = 1,
		clothesCounter = 1;

	if (custom_sex_male.checked) {
		var genderArray = [1,2,3];
	} else if (custom_sex_female.checked){
			genderArray = [4,5,6];
		}

	let skin_prev = document.querySelectorAll('div.skin > div.prev')[0],
		skin_next = document.querySelectorAll('div.skin > div.next')[0],
		skin_color = document.getElementsByClassName('skin-color'),
		hair_prev = document.querySelectorAll('div.hair > div.prev')[0],
		hair_next = document.querySelectorAll('div.hair > div.next')[0],
		hair_style = document.getElementsByClassName('hair-style'),
		clothes_prev = document.querySelectorAll('div.clothes > div.prev')[0],
		clothes_next = document.querySelectorAll('div.clothes > div.next')[0],
		clothes_style = document.getElementsByClassName('clothes-style');

	let center_hair = document.getElementById('person-hair'),
		center_clothes = document.getElementById('person-clothes');

	skinShow(skinCounter);
	hairShow(hairCounter);
	clothesShow(clothesCounter);

	function skinShow(n) {
		if (n < 1) {skinCounter = skin_color.length};
		if (n > skin_color.length) {skinCounter = 1};

		for (let i = 0; i < skin_color.length; i++) {
			skin_color[i].style.display = 'none';
		};
		let currentSkin = document.getElementsByClassName(`skin-color-${skinCounter}`)[0];
		currentSkin.style.display = 'block';

		console.log(n);
	}

	function plusSlidesSkin(n) {
		skinShow(skinCounter += n);
	};

	skin_prev.addEventListener('click', function(){
		plusSlidesSkin(-1);
	});
	skin_next.addEventListener('click', function(){
		plusSlidesSkin(1);
	});
	

	function hairShow(n) {
		if (n < 1) {hairCounter = hair_style.length};
		if (n > hair_style.length) {hairCounter = 1};

		for (let i = 0; i < hair_style.length; i++) {
			hair_style[i].style.display = 'none';
		};
		
		let currentHair = document.getElementsByClassName(`hair-style-${hairCounter}`)[0];
		currentHair.style.display = 'block';
		center_hair.style.cssText = `background: url('img/hair/construct/hair-${hairCounter}.png') center no-repeat;
									background-size: cover;`;
	}

	function plusSlidesHair(n) {
		hairShow(hairCounter += n);
	};

	hair_prev.addEventListener('click', function(){
		plusSlidesHair(-1);
	});
	hair_next.addEventListener('click', function(){
		plusSlidesHair(1);
	});

	function clothesShow(n) {
		if (n < 1) {clothesCounter = clothes_style.length};
		if (n > clothes_style.length) {clothesCounter = 1};

		for (let i = 0; i < clothes_style.length; i++) {
			clothes_style[i].style.display = 'none';
		};
		let currentClothes = document.getElementsByClassName(`clothes-style-${clothesCounter}`)[0];
		currentClothes.style.display = 'block';
		center_clothes.style.cssText = `background: url('img/clothes/construct/clothes-${clothesCounter}.png') center no-repeat;
									background-size: cover;`;
	}

	function plusSlidesClothes(n) {
		clothesShow(clothesCounter += n);
	};

	clothes_prev.addEventListener('click', function(){
		plusSlidesClothes(-1);
	});
	clothes_next.addEventListener('click', function(){
		plusSlidesClothes(1);
	});

	
	









});