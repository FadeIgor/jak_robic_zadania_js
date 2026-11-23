// Twoje rozwiazanie
let rok = Number(prompt("Podaj rok"));
let miesiac = Number(prompt("Podaj miesiac(1-12)"));
let dzien = Number(prompt("Podaj dzien"));

const date = new Date(rok,miesiac, dzien)

let wynik = document.getElementById('wynik')

wynik.textContent = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`