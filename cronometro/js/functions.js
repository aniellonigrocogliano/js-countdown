/**
 * Description placeholder
 * @date 10/4/2024 - 16:52:16
 *
 * @param {number} second
 */
function cronometroFunctions() { // creo funzione cronometro
    cronometro = setInterval(function () {

        if (second < 60) {
            second++; // ad ogni interazione aumento i secondi di uno
        } else {
            second = 0;  // se ci sono 60 secondi incremento di 1 i minuti e resetto i secondi
            minutes++
        }
        console.log(second, minutes);
        printHtml(minutes, second); // stampo il risultato
    }, 1000);

}
/**
 * Description placeholder
 * @date 10/4/2024 - 17:07:25
 *
 * @param {*} items
 */
function printHtml(minutes, second) {
    second = second <= 9 ? "0" + second : second; // aggiungo lo zero se il numero è auna cifra
    minutes = minutes <= 9 ? "0" + minutes : minutes // aggiungo lo zero se il numero è auna cifra
    document.getElementById("cronometro").innerHTML = minutes + " : " + second;

}