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

let deadline = '2018-04-28';

function getTimeRemainng(endTime) {
	let t = Date.parse(endTime) - Date.parse(new Date()),
		seconds = Math.floor((t/1000) % 60),
		minutes = Math.floor((t/1000/60) % 60),
		hours = Math.floor(t/(1000*60*60));

	return {
		'total': t,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function setClock(id, endTime) {
	let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemainng(endTime);
			if (t.hours <= 0 && t.minutes <= 0 && t.seconds <= 0) {
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
				} else if (t.hours < 10) {
					hours.innerHTML = '0'+t.hours;
					} else if (t.minutes < 10) {
						minutes.innerHTML = '0'+t.minutes;
						} else if (t.seconds < 10) {
							seconds.innerHTML = '0'+t.seconds;
							} else {
								hours.innerHTML = t.hours;
								minutes.innerHTML = t.minutes;
								seconds.innerHTML = t.seconds;
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





});