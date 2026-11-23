
let godzina = parseInt(prompt("Podaj godzinę (0-23):"));
let minuty = parseInt(prompt("Podaj minuty (0-59):"));

let dataCzas = new Date();
dataCzas.setHours(godzina);
dataCzas.setMinutes(minuty);

let odczytanaGodzina = dataCzas.getHours();
let odczytaneMinuty = dataCzas.getMinutes();

let hh = String(odczytanaGodzina).padStart(2, '0');
let mm = String(odczytaneMinuty).padStart(2, '0');

let wynikTekst = hh + ":" + mm;

document.getElementById("wynik").textContent = wynikTekst;