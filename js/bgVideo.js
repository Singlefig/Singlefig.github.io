let playBtn;
window.onload = function() {
	playBtn = document.getElementById('play-btn');
	playBtn.classList.a
	playBtn.addEventListener('click', (e) => {
		e.preventDefault();
		if (isPlaying) {
			stopVideo();
		} else {
			playVideo();
		}
	});
}

let isPlaying = false;

const playClassName = 'play-icon-container';
const stopClassName = 'stop-icon-container';


const playVideo = () => {
	const video = document.getElementById('video');
	video.play();
	isPlaying = true;
	playBtn.classList.remove(playClassName);
	playBtn.classList.add(stopClassName);
}

const stopVideo = () => {
	const video = document.getElementById('video');
	video.pause();
	isPlaying = false;
	playBtn.classList.remove(stopClassName);
	playBtn.classList.add(playClassName);
}