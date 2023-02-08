async function countDown() {
    let timer = document.getElementById("timer").value;
    let timeArr = timer.split(':');
    let timeInSeconds = timeArr[0] * 3600 + timeArr[1] * 60 + timeArr[2];
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(timeInSeconds);
            timeInSeconds -= 1;
    }, timeInSeconds * 1000)});
    console.log("aaaaaaaaa");
}