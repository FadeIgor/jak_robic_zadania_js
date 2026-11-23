// Twoje rozwiazanie

let rok = Number(prompt("Podaj rok"));
let miesiac = Number(prompt("Podaj miesiac(1-12)"));
let dzien = Number(prompt("Podaj dzien"));

let rok_fest = Number(prompt("Podaj rok"));
let miesiac_fest = Number(prompt("Podaj miesiac(1-12)"));
let dzien_fest = Number(prompt("Podaj dzien"));

const dzisiaj = new Date(rok,miesiac, dzien)

const dataFestiwalu = new Date(rok_fest,miesiac_fest, dzien_fest)

const roznicaCzasu = dataFestiwalu - dzisiaj;


const roznicaDni = Math.ceil(roznicaCzasu / (1000 * 60 * 60 * 24));


const wynik = document.getElementById('wynik');

if (roznicaDni > 0) {
    wynik.textContent = `Do festiwalu pozostało ${roznicaDni} dni!`;
} else if (roznicaDni === 0) {
    wynik.textContent = `Festiwal jest dzisiaj!`;
} else {
    wynik.textContent = `Festiwal już się odbył.`;
}