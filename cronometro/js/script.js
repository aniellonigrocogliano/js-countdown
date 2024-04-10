const start = document.querySelector(".green");
const stop = document.querySelector(".red");
const reset = document.querySelector(".blu");
let second = 0;
let minutes = 0;
let cronometro;
let flag = false;
printHtml(minutes, second)
start.addEventListener("click", function () {
    if (!flag) {
        cronometroFunctions();
        flag = true;
    }

})

stop.addEventListener("click", function () {
    clearInterval(cronometro);
    flag= false;
})
reset.addEventListener("click", function () {
    clearInterval(cronometro);
    second = 0;
    minutes = 0;
    flag = false;
    printHtml(minutes, second);
})

