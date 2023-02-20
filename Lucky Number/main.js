async function randomNumber(className) {
    let numberEs = document.getElementsByClassName(className);
    for (let e of numberEs) {
        await new Promise(resolve => {
            setTimeout(() => {
                e.innerHTML = Math.floor(Math.random() * 10);
                resolve("done")
            }, 2000);
        });
    }
}
