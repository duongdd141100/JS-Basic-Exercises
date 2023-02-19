function randomNumber(className) {
    let numberEs = document.getElementsByClassName(className);
    Array.from(numberEs).forEach(async e => {
        await new Promise(() => {
            setTimeout(() => {
                e.innerHTML = Math.floor(Math.random() * 10);
            }, 2000);
        });
        console.log(1);
    });
}