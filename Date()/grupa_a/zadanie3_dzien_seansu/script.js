// Twoje rozwiazanie
let rok = Number(prompt("Podaj rok"));
let miesiac = Number(prompt("Podaj miesiac(1-12)"));
let dzien = Number(prompt("Podaj dzien"));

const date = new Date(rok,miesiac, dzien)

let wynik = document.getElementById('wynik')

let dzien_tyg = ''

switch (date.getDay()){
    case 0:
        dzien_tyg = 'niedziela'
        break;
    case 1:
        dzien_tyg = 'poniedzialek'
        break;    
    case 2:
        dzien_tyg = 'wtorek'
        break;
    case 3:
        dzien_tyg = 'sroda'
        break;
    case 4:
        dzien_tyg = 'czwartek'
        break;    
    case 5:
        dzien_tyg = 'piatek'
        break;
    case 6:
        dzien_tyg = 'sobota'
        break;
}

wynik.textContent = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}, ${dzien_tyg}`