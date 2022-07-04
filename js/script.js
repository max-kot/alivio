/*--- Mobile Menu ---*/
const menuBtn = document.querySelector('.mobile-btn');
const menuIcon = document.querySelector('.mobile-btn__icon');
const menuList = document.querySelector('.header__menu');

menuBtn.addEventListener('click', function () {
	menuIcon.classList.toggle('active');
	menuList.classList.toggle('active');
	document.querySelector('body').classList.toggle('no-scroll');
})

/*---Video ---*/
const videoBtn = document.querySelector('.story-video__btn');
const videoFile = document.querySelector('.story-video__video');
const videoBtnIcon = document.querySelector('.story-video__icon');
const videoOverlay = document.querySelector('.story-video__overlay')



videoBtn.addEventListener('click', function () {
	function toggleOverlay(event) {
		if (event.type === 'mouseleave') {
			videoOverlay.classList.add('hidden');
		} else {
			videoOverlay.classList.remove('hidden');
		}
	}


	if (videoFile.paused) {
		videoFile.play();
		videoBtnIcon.src = 'img/story/video-pause.svg';
		videoOverlay.onmouseleave = toggleOverlay;
		videoOverlay.onmouseenter = toggleOverlay;

	} else {
		videoFile.pause();
		videoBtnIcon.src = 'img/story/video-play.svg';
		videoOverlay.onmouseleave = null;
		videoOverlay.onmouseenter = null;
	}

})
