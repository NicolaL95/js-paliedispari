const es_sel = prompt("premi 1 per la sezione dei palindromi, 2 per la sezione del pari e dispari");

if (es_sel == 1) {

    let w_chk = prompt("inserisci la parola da controllare");
    /* La stringa inserita ribaltata */
    let w_rev = w_chk.split('').reverse().join('');

    function isPalindroma() {
        /* .replace utilizzato per poter controllare le frasi palindrome */
        if (w_rev.replace(/\s+/g, '') == w_chk.replace(/\s+/g, '')) {
            const result = "La parola è palidroma!";
            return result;
        }
        else {
            const result = "La parola non è palidroma!";
            return result;
        }
    }
    const i_pal = isPalindroma();
    window.alert(i_pal);
}

if (es_sel == 2) {
    let p_d = prompt("scegli pari o dispari")
    /* Ciclo while per reinserire il valore in caso di errore  */
    while (p_d.toLowerCase() != "pari" && p_d.toLowerCase() != "dispari") {
        p_d = prompt("scegli pari o dispari");
    }
    const n_otf = prompt("scegli un numero da 1 a 5");
    while (parseInt(n_otf) < 1 | parseInt(n_otf) > 5) {
        n_otf = prompt("scegli un numero da 1 a 5");
    }
    function Random1to5() {
        let risultato = Math.floor(Math.random() * 5) + 1;
        return risultato;
    }
    const cpu_otf = Random1to5();
    const somma = parseInt(n_otf) + parseInt(cpu_otf);

    if (somma % 2 == 0 && p_d.toLowerCase() == "pari") {
        window.alert("complimenti, hai vinto");
    }
    else if (somma % 2 == 0 && p_d.toLowerCase() == "dispari") {
        window.alert("mi dispiace, hai perso");
    }

    else if (somma % 2 == 1 && p_d.toLowerCase() == "dispari") {
        window.alert("complimenti, hai vinto");
    }

    else if (somma % 2 == 1 && p_d.toLowerCase() == "pari") {
        window.alert("mi dispiace, hai perso");
    }

}