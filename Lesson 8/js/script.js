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
			for (var i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

// Timer

let deadline = '2018-04-08';

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






});