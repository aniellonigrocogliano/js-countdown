/**
 * Description placeholder
 * @date 10/4/2024 - 16:52:16
 *
 * @param {number} second
 */
function countdownFunctions(second) { // creo funzione countdown
    const countdown = setInterval( function(){
        console.log(second);
        second--; // ad ogni interazione diminuisco i secondi di uno
        if(second<0){ // se il countdown è arrivato a  0 fermo il processo
            clearInterval(countdown);
        }
    }, 1000);
    
}