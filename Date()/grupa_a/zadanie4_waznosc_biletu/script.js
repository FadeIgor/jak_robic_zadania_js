// Twoje rozwiazanie
let rok = Number(prompt("Podaj rok"));
let miesiac = Number(prompt("Podaj miesiac(1-12)"));
let dzien = Number(prompt("Podaj dzien"));
let dlugosc = Number(prompt("Podaj dlugosc"));

const date = new Date(rok,miesiac, dzien)

let waznydo = new Date(date.getTime())

waznydo.setDate(waznydo.getDate()+ dlugosc)

let wynik = document.getElementById('wynik')

wynik.textContent = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}, ${waznydo.getDate()}.${waznydo.getMonth()}.${waznydo.getFullYear()} `