
let rokKoncertu = parseInt(prompt("Podaj rok koncertu:"));
let miesiacKoncertu = parseInt(prompt("Podaj miesiąc koncertu (1-12):")) - 1;
let dzienKoncertu = parseInt(prompt("Podaj dzień koncertu:"));

let rokDzisiaj = parseInt(prompt("Podaj dzisiejszy rok:"));
let miesiacDzisiaj = parseInt(prompt("Podaj dzisiejszy miesiąc (1-12):")) - 1;
let dzienDzisiaj = parseInt(prompt("Podaj dzisiejszy dzień:"));

let dataKoncertu = new Date(rokKoncertu, miesiacKoncertu, dzienKoncertu);
let dataDzisiaj = new Date(rokDzisiaj, miesiacDzisiaj, dzienDzisiaj);

let dd = String(dataKoncertu.getDate()).padStart(2, '0');
let mm = String(dataKoncertu.getMonth() + 1).padStart(2, '0');
let yyyy = dataKoncertu.getFullYear();
let dataSformatowana = dd + "." + mm + "." + yyyy;

let dniTygodnia = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
let nazwaDnia = dniTygodnia[dataKoncertu.getDay()];

let milisekundyNaDobe = 1000 * 60 * 60 * 24;
let roznicaCzasu = dataKoncertu.getTime() - dataDzisiaj.getTime();
let liczbaDni = Math.round(roznicaCzasu / milisekundyNaDobe);

let status;
if (liczbaDni > 0) {
    status = "przed nami";
} else if (liczbaDni === 0) {
    status = "dzisiaj";
} else {
    status = "już się odbył";
}

let wynikTekst = "Koncert: " + dataSformatowana + ", " + nazwaDnia + "\n" +
                 "Dni: " + liczbaDni + "\n" +
                 status;

document.getElementById("wynik").textContent = wynikTekst;