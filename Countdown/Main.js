async function countDown() {
	let timeElm = document.getElementById("timer");
    let timer = timeElm.textContent;
    let timeArr = timer.split(':');
    let timeInSeconds = timeArr[0] * 60 + Number(timeArr[1]);
    var interval = setInterval(() => {
		timeInSeconds -= 1;
		let minutes = Math.floor(timeInSeconds / 60) + '';
		minutes = minutes.length == 1 ? '0' + minutes : minutes;
		let seconds = timeInSeconds % 60 + '';
		seconds = seconds.length == 1 ? '0' + seconds : seconds;
		timeElm.innerHTML = minutes + ':' + seconds;
		
		if (timeInSeconds == 0) {
			clearInterval(interval);
		}
    }, 1000);
}