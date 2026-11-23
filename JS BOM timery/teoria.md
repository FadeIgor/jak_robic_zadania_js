# BOM i timery

W działach [`12`](../12_selektory_tresc/)–[`17`](../17_tablice_dom/) skrypt szukał znaczników, zmieniał tekst, klasy i listę na stronie. To jest **DOM** — drzewo dokumentu.

**BOM** (Browser Object Model) to API **okna przeglądarki**: jaki jest adres, jak szerokie jest okno, czy pokazać `alert`, kiedy odpalić kod za trzy sekundy. Korzeniem jest obiekt `window`. W przeglądarce `document` też wisi na `window` (`window.document`), ale do DOM idziesz przez `document`, a do adresu i timerów — przez `window` albo wprost `location`, `setTimeout` (to aliasy globalne).

Nie myl tego z **canvas**. `setInterval` nie „rysuje obrazka”. Aktualizuje tekst albo klasę w HTML, tak jak dotychczas, tylko **sam z siebie**, bez kliknięcia.

Skrypt ładujesz z `defer` albo na końcu `body`. Na stronę wypisujesz przez `textContent`, nie przez `document.write`.

---

## 1. `window`

`window` to globalny obiekt okna. Zmienna zapisana bez `const` / `let` / `var` ląduje na `window` — na zajęciach **nie** tak deklaruj; używaj `const` / `let`.

| Właściwość / metoda | Znaczenie |
| ------------------- | --------- |
| `innerWidth` / `innerHeight` | szerokość i wysokość **obszaru strony** (bez ramek przeglądarki), w pikselach |
| `outerWidth` / `outerHeight` | całe okno razem z paskami |
| `scrollX` / `scrollY` | o ile strona jest przewinięta |
| `scrollTo(x, y)` / `scrollBy(dx, dy)` | skok albo przesunięcie scrolla |
| `open(url, nazwa, cechy)` | nowe okno lub karta; często **zablokowane** jako popup |
| `close()` | zamyka okno otwarte przez `open` (własnej karty zwykle nie zamkniesz) |

```js
const szer = window.innerWidth;
const wys = window.innerHeight;
```

`resize` to zdarzenie okna (`window.addEventListener("resize", ...)`), gdy uczeń zmienia szerokość. Na INF.03 wystarczy odczytać wymiary po kliknięciu.

---

## 2. `location` — adres strony

`location` (albo `window.location`) opisuje **aktualny URL**.

| Część | Przykład dla `https://szkola.pl/lekcja.html?x=1#start` |
| ----- | ------------------------------------------------------ |
| `href` | cały adres |
| `protocol` | `https:` (z dwukropkiem) |
| `hostname` | `szkola.pl` |
| `host` | `szkola.pl` albo `szkola.pl:443` gdy jest port |
| `pathname` | `/lekcja.html` |
| `search` | `?x=1` (query; puste, gdy brak) |
| `hash` | `#start` (puste, gdy brak kotwicy) |
| `origin` | `https://szkola.pl` |

Na zajęciach plik otwarty z dysku ma często `protocol` równe `file:` i pusty `hostname`. To nie błąd — wypisz to, co przeglądarka naprawdę widzi.

### Metody

| Metoda | Działanie |
| ------ | --------- |
| `assign(url)` | przechodzi pod nowy adres (jak wpisanie w pasek); da się wrócić „Wstecz” |
| `replace(url)` | też przechodzi, ale **wyjmuje** bieżącą pozycję z historii |
| `reload()` | odświeża stronę (jak F5) |

`location.href = "inna.html"` robi to samo co `assign`.

Na ćwiczeniach **nie** wysyłaj klasy na `https://google.com`. Zostaw ucznia na zadaniu: zmień `location.hash`, wywołaj `reload()`, albo tylko **odczytaj** `href` / `pathname`.

```js
document.getElementById("adres").textContent = location.href;

document.getElementById("kontakt").addEventListener("click", function () {
  location.hash = "kontakt";
});

document.getElementById("odswiez").addEventListener("click", function () {
  location.reload();
});
```

Zdarzenie `hashchange` na `window` odpala się, gdy zmieni się kotwica (także strzałką „Wstecz”).

---

## 3. `history`

`history` to stos odwiedzonych adresów w tej karcie.

| Człon | Znaczenie |
| ----- | --------- |
| `length` | ile pozycji jest na stosie (liczba całkowita) |
| `back()` | jak przycisk Wstecz |
| `forward()` | jak Dalej |
| `go(-1)` / `go(2)` | skok o n pozycji |

`pushState` / `replaceState` (historia bez przeładowania) zostaw na później — to już mini-SPA, nie ten dział.

`history.back()` na pierwszej stronie w karcie **nic nie zrobi** albo wyjdzie z ćwiczenia. Na sprawdzianie lepiej go nie wymagać.

---

## 4. `navigator` i `screen`

`navigator` opisuje przeglądarkę i system.

| Właściwość | Znaczenie |
| ---------- | --------- |
| `userAgent` | długi napis (silnik, system) — do diagnostyki, nie do „wykrywania Chrome” na stałe |
| `language` | język UI, np. `pl` albo `pl-PL` |
| `onLine` | `true` / `false` — czy przeglądarka uważa, że jest sieć |

`screen` to **monitor**, nie okno.

| Właściwość | Znaczenie |
| ---------- | --------- |
| `width` / `height` | rozdzielczość ekranu |
| `availWidth` / `availHeight` | obszar bez paska zadań |
| `colorDepth` | bity koloru (zwykle 24 albo 32) |

Okno może być mniejsze niż ekran: porównaj `window.innerWidth` i `screen.width`.

---

## 5. `document.title` — tytuł karty

`document.title` to napis na **karcie przeglądarki** (i w pasku tytułu okna). Odczytujesz go jak zwykłą właściwość; zapisujesz przypisaniem.

```js
const stary = document.title; // odczyt
document.title = "4";         // zapis — widać na karcie
document.title = "Koniec";
```

**Po co:** odliczanie, status („Nagrywanie…”) albo synchronizacja licznika z kartą, gdy uczeń patrzy na inną stronę — tytuł i tak miga w pasku kart. Na extra sprawdzianie często co sekundę ustawiasz ten sam tekst w `document.title` i w elemencie na stronie (np. `#ekran`).

To nadal BOM / dokument okna, nie rysunek na `canvas`. Zmiana tytułu **nie** przeładowuje strony.

**Typowa pomyłka:** zmieniać tylko `textContent` w `#ekran` i zostawić stary tytuł karty — albo odwrotnie. Druga: szukać `window.title` (nie ma takiej standardowej właściwości do tego celu); właściwa ścieżka to `document.title`.

---

## 6. Okna dialogowe

Trzy funkcje **blokują** skrypt, aż uczeń kliknie. Wygląd okna zależy od przeglądarki — nie stylizujesz go CSS-em.

To samo co w semestrze 1: linia **pod** `prompt` (także `console.log`) czeka na OK albo Anuluj. W F12 wygląda to czasem tak, jakby logi nie działały — najpierw zamknij okno, potem czytaj konsolę. W pętli `while` / `do...while` (hasło do skutku, zgadywanka) każde pytanie znowu wstrzymuje kod; log za pętlą nie ruszy, dopóki warunek nie puści. Szerszy opis: [`01_skrypt_w_stronie`](../../jezyk/01_skrypt_w_stronie/teoria.md) i [`04_petle`](../../jezyk/04_petle/teoria/teoria.md).

| Funkcja | Co robi | Zwraca |
| ------- | ------- | ------ |
| `alert(tekst)` | komunikat, przycisk OK | `undefined` |
| `confirm(tekst)` | OK / Anuluj | `true` albo `false` |
| `prompt(tekst, domyślny)` | pole + OK / Anuluj | **string** albo `null` (Anuluj) |

```js
const ok = confirm("Na pewno usunąć?");
if (ok) {
  status.textContent = "Usunięto";
} else {
  status.textContent = "Anulowano";
}

const imie = prompt("Jak masz na imię?", "");
if (imie === null) {
  // Anuluj
} else if (imie === "") {
  // OK, ale pusto
} else {
  alert("Cześć, " + imie);
}
```

`prompt` zawsze daje napis. Do liczby: `Number(prompt("Sekundy:"))` i sprawdź `Number.isFinite`.

Nie buduj na dialogach całego UI — na stronie są przyciski i `textContent`. Dialog jest od potwierdzenia, krótkiego pytania albo komunikatu.

W tym dziale **nie** wysyłamy formularza (`submit`, `preventDefault`). To dział 19.

---

## 7. `setTimeout` — raz, później

```js
const id = setTimeout(function () {
  komunikat.classList.add("hidden");
}, 3000);
```

Pierwszy argument to **funkcja**, nie string. Drugi to opóźnienie w **milisekundach** (3000 = 3 s).

Zwracana wartość to numer timera. `clearTimeout(id)` anuluje, jeśli jeszcze nie zdążył odpalić.

Trzeci i kolejne argumenty (rzadziej na zajęciach) trafiają do funkcji jako parametry.

`setTimeout(fn, 0)` znaczy „zrób to przy najbliższej okazji, nie w tej chwili” — nie jest to dokładne zero.

---

## 8. `setInterval` — co jakiś czas

```js
let id = null;

function start() {
  if (id !== null) {
    return;
  }
  id = setInterval(function () {
    const teraz = new Date();
    zegar.textContent = teraz.toLocaleTimeString("pl-PL");
  }, 1000);
}

function stop() {
  clearInterval(id);
  id = null;
}
```

`clearInterval(id)` zatrzymuje pętlę. Jeśli nie zapamiętasz `id`, nie wyłączysz zegara.

Zabezpieczenie `if (id !== null) return` nie odpala drugiego interwału po ponownym „Start”.

`clearTimeout` i `clearInterval` w praktyce działają na siebie wzajemnie, ale na zajęciach czyść tym, czym startowałeś.

Dokładność: przeglądarka może opóźnić timer w karcie w tle. Do zegara szkolnego 1 s wystarczy. `requestAnimationFrame` jest do animacji klatka-po-klatce — nie ten dział.

---

## 9. Typowe zastosowania

**Komunikat (toast).** Pokazujesz element przez `classList.remove("hidden")`. Po dwóch albo trzech sekundach `setTimeout` znowu dodaje klasę `hidden`.

**Opóźnione pojawienie.** Klik „Pokaż za 2 s” uruchamia `setTimeout`. Dopiero po tym czasie skrypt ustawia `textContent`.

**Zegar.** `setInterval` co sekundę bierze `new Date()` i wypisuje `toLocaleTimeString` (dział 08).

**Odliczanie.** Trzymasz zmienną `pozostalo`. Co sekundę zmniejszasz ją o jeden. Przy zerze wołasz `clearInterval` i wypisujesz „Koniec”. Często ten sam tekst idzie też do `document.title` (sekcja 5).

**Slajder.** Masz tablicę tekstów albo kilka elementów `.slajd` w HTML. Interwał zmienia klasę `aktywny` (dział 15). Przyciski Start i Stop trzymają numer timera, żeby nie odpalić drugiego interwału.

**Potwierdzenie przed resetem.** Najpierw `confirm`. Dopiero po OK zerujesz indeks slajdu albo licznik.

---

## 10. Jaki problem, jakie narzędzie

Gdy pytasz o adres tej strony, czytasz `location.href`, `pathname`, `protocol` albo `hostname`.

Gdy chcesz zostać na stronie i tylko zmienić „zakładkę”, ustawiasz `location.hash`.

Gdy chcesz odświeżyć jak F5, wołasz `location.reload()`.

Gdy świadomie przechodzisz na inną podstronę, używasz `location.assign` albo `location.href`. Na sprawdzianie nie wysyłaj klasy na obcy serwis.

Gdy potrzebujesz OK albo Anuluj, wołasz `confirm`. Krótkie pytanie to `prompt` — pamiętaj, że Anuluj zwraca `null`.

Gdy coś ma się stać raz za N milisekund, używasz `setTimeout` i w razie potrzeby `clearTimeout`. Gdy coś ma się dziać co sekundę, używasz `setInterval` i `clearInterval`.

Gdy licznik ma być widać na karcie przeglądarki, ustawiasz `document.title` (odczyt/zapis stringa).

Szerokość okna to `window.innerWidth`. Szerokość monitora to `screen.width`. To nie jest to samo.

---

## 11. Czego nie robić

Nie podawaj pierwszego argumentu timera jako stringa (`setInterval("licz()", 1000)`). To stary zwyczaj, podobny do `eval`. Podawaj funkcję.

Nie odpalaj drugiego `setInterval` bez `clear`. Dostaniesz dwa zegary naraz i licznik będzie skakał częściej niż co sekundę.

Nie ustawiaj `location.href` na `https://…` w zadaniu, z którego uczeń ma nie wychodzić.

Nie rób z `window.open` jedynego sposobu na wynik. Przeglądarka często zablokuje popup.

Nie wymagaj `history.back()` jako jedynego testu. Z pierwszej strony w karcie uczeń wyjdzie z ćwiczenia.

Nie wysyłaj tu `<form>` i nie ćwicz `preventDefault`. To dział 19, nie 18.
