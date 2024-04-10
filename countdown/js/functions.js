/**
 * Description placeholder
 * @date 10/4/2024 - 16:52:16
 *
 * @param {number} second
 */
function countdownFunctions(second) { // creo funzione countdown
    const countdown = setInterval(function () {
        console.log(second);
        let items = second <= 9 ? "0" + second : second; // aggiungo lo zero se il numero è auna cifra
        printHtml(items, "countdown");
        if (second === 0) { // se il countdown è arrivato a  0 fermo il processo
            clearInterval(countdown);
            printHtml("Buon Anno!!!", "happy")
        }
        second--; // ad ogni interazione diminuisco i secondi di uno
    }, 1000);

}
/**
 * Description placeholder
 * @date 10/4/2024 - 17:07:25
 *
 * @param {*} items
 */
function printHtml(items, id) {
    document.getElementById(id).innerHTML = items;

}