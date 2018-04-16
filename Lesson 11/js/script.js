window.addEventListener('DOMContentLoaded', function () {
	
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');

		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if(tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

// Timer

let deadline = '2018-04-22';

function getTimeRemainng(endTime) {
	let t = Date.parse(endTime) - Date.parse(new Date()),
		seconds = Math.floor((t/1000) % 60),
		minutes = Math.floor((t/1000/60) % 60),
		hours = Math.floor(t/(1000*60*60)),
		days = Math.floor(hours/24);

	return {
		'total': t,
		'days' : days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function setClock(id, endTime) {
	let timer = document.getElementById(id),
		days = timer.querySelector('.days'),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds'),
		t_days = timer.querySelector('.t-days'), //titles
		t_hours = timer.querySelector('.t-hours'),
		t_minutes = timer.querySelector('.t-minutes'),
		t_seconds = timer.querySelector('.t-seconds');

	let arr_1 = [0,5,6,7,8,9],
		arr_2 = [2,3,4];

		function updateClock() {
			let t = getTimeRemainng(endTime),
				a = t.days * 24,
				mod_hours = t.hours - a;

			if (t.hours <= 0 && t.minutes <= 0 && t.seconds <= 0) {
				days.innerHTML = '0';
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
				} else if (t.minutes < 10) {
					minutes.innerHTML = `0${t.minutes}`;
					} else if (t.seconds < 10) {
						seconds.innerHTML = `0${t.seconds}`;
						} else {
							days.innerHTML = t.days;
							hours.innerHTML = mod_hours;
							minutes.innerHTML = t.minutes;
							seconds.innerHTML = t.seconds;
			}
			let lastIntDays = t.days % 10,
				lastIntHours = mod_hours % 10,
				lastIntMinutes = t.minutes % 10,
				lastIntSeconds = t.seconds % 10;
			
			for (let i = 0; i < arr_2.length; i++) {
				if (lastIntSeconds == arr_2[i]) {
					t_seconds.innerHTML = 'Секунды';
				} else if (lastIntSeconds == 1) {
						t_seconds.innerHTML = 'Секунда';
					} else {
							for (let j = 0; j < arr_1.length; j++) {
								if (lastIntSeconds == arr_1[i]) {
									t_seconds.innerHTML = 'Секунд';
								}
							}
						}
			}

			for (let i = 0; i < arr_2.length; i++) {
				if (lastIntMinutes == arr_2[i]) {
					t_minutes.innerHTML = 'Минуты';
				} else if (lastIntMinutes == 1) {
						t_minutes.innerHTML = 'Минута';
					} else {
							for (let j = 0; j < arr_1.length; j++) {
								if (lastIntMinutes == arr_1[i]) {
									t_minutes.innerHTML = 'Минут';
								}
							}
						}
			}

			for (let i = 0; i < arr_2.length; i++) {
				if (lastIntHours == arr_2[i]) {
					t_hours.innerHTML = 'Часа';
				} else if (lastIntHours == 1) {
						t_hours.innerHTML = 'Час';
					} else {
							for (let j = 0; j < arr_1.length; j++) {
								if (lastIntHours == arr_1[i]) {
									t_hours.innerHTML = 'Часов';
								}
							}
						}
			}

			for (let i = 0; i < arr_2.length; i++) {
				if (lastIntDays == arr_2[i]) {
					t_days.innerHTML = 'Дня';
				} else if (lastIntDays == 1) {
						t_days.innerHTML = 'День';
					} else {
							for (let j = 0; j < arr_1.length; j++) {
								if (lastIntDays == arr_1[i]) {
									t_days.innerHTML = 'Дней';
								}
							}
						}
			}

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	updateClock();
	let timeInterval = setInterval(updateClock, 1000);
}

setClock('timer', deadline);

// Modal

let more = document.querySelector('.more'),
	info_block = document.querySelector('.info'),
	overlay = document.querySelector('.overlay'),
	popup = document.querySelector('.popup'),
	close = document.querySelector('.popup-close');

info_block.addEventListener('click', function (event) {
	if (event.target && event.target.className == 'description-btn') {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
});

more.addEventListener('click', function () {
	this.classList.add('more-splash');
	overlay.style.display = 'block';
	document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function () {
	popup.classList.remove('modal-move-up');
	popup.classList.add('modal-move-down');
	overlay.style.display = 'none';
	more.classList.remove('more-splash');
	document.body.style.overflow = '';
});

// SlowScroll 

function animate(draw, duration) {
	let start = performance.now();
	requestAnimationFrame(function animate(time) {
		let timePassed = time - start;
		if (timePassed > duration) {
			timePassed = duration;
		}

		draw(timePassed);

		if (timePassed < duration) {
			requestAnimationFrame(animate);
		}
	});
}

let menu = document.getElementsByTagName('nav')[0];

menu.addEventListener('click', function (event) {
	event.preventDefault();
	animate(function (timePassed) {
		let target = event.target;
		let section = document.getElementById(target.getAttribute('href').slice(1));
		window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);
	}, 1500);
});

// Form

let message = new Object();
message.loading = 'Загрузка';
message.success = 'Спасибо!';
message.failure = 'Ошибка';

let modal_form = document.getElementsByClassName('main-form')[0],
	form = document.getElementById('form'),
	modal_input = modal_form.getElementsByTagName('input'),
	input = form.getElementsByTagName('input'),
	statusMessage = document.createElement('div');

statusMessage.classList.add('status');

modal_form.addEventListener('submit', function (event) {
	event.preventDefault();
	modal_form.appendChild(statusMessage);

	// AJAX
	let request = new XMLHttpRequest();
	request.open('POST', 'server.php');

	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	let formData = new FormData(modal_form);

	request.send(formData);

	request.onreadystatechange = function () {
		if(request.readyState < 4) {
			statusMessage.innerHTML = message.loading;
		} else if (request.readyState === 4) {
			if (request.status == 200 && request.status < 300) {
				statusMessage.innerHTML = message.success;
			}
			else {
				statusMessage.innerHTML = message.failure;
			}
		}
	}
	for (let i = 0; i < modal_input.length; i++) {
		modal_input[i].value = '';
	}
});

form.addEventListener('submit', function (event) {
	event.preventDefault();
	form.appendChild(statusMessage);

	// AJAX
	let request = new XMLHttpRequest();
	request.open('POST', 'server.php');

	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	let formData = new FormData(form);

	request.send(formData);

	request.onreadystatechange = function () {
		if(request.readyState < 4) {
			statusMessage.innerHTML = message.loading;
		} else if (request.readyState === 4) {
			if (request.status == 200 && request.status < 300) {
				statusMessage.innerHTML = message.success;
			}
			else {
				statusMessage.innerHTML = message.failure;
			}
		}
	}
	for (let i = 0; i < input.length; i++) {
		input[i].value = '';
	}
});




});