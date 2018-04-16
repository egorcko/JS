function modal() {
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
}

module.exports = modal;