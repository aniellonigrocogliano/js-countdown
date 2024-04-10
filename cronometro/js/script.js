const start = document.querySelector(".green");
const stop = document.querySelector(".red");
const reset = document.querySelector(".blu");
let second = 0;
let minutes = 0;
let cronometro;
printHtml(minutes, second)
start.addEventListener("click", function () {
    cronometroFunctions();
})

stop.addEventListener("click", function () {
    clearInterval(cronometro);
})
reset.addEventListener("click", function () {
    clearInterval(cronometro);
    second = 0;
    minutes = 0;
    printHtml(minutes, second);
})

