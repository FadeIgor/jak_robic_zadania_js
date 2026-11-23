# Zadanie 4: Komunikat znika po czasie

## Cel

W szablonie jest przycisk „Zapisz” (`#pokaz`) i akapit `#toast` z klasą `hidden` oraz tekstem „Zapisano”. Twoja praca jest w `script.js`. Kliknięcie zdejmuje klasę `hidden`, więc komunikat widać. Po trzech sekundach klasa wraca i komunikat znika sam, bez drugiego kliknięcia.

To `setTimeout` i klasa CSS, nie `canvas`.

## Przydatne

- `classList.remove("hidden")` pokazuje element. `classList.add("hidden")` chowa go z powrotem.
- `setTimeout` przyjmuje funkcję i liczbę milisekund. Trzy sekundy to `3000`.
- Jeśli ktoś kliknie drugi raz, zanim minie czas, możesz wyczyścić stary timer przez `clearTimeout`, żeby znikanie nie pływało.

## Wymagania

1. Na starcie toast jest ukryty klasą `hidden` z HTML.
2. Komunikat znika sam po około trzech sekundach, bez drugiego kliknięcia.

## Przykład

Otwórz stronę. Napisu „Zapisano” nie widać. Kliknij „Zapisz”. Na stronie pojawia się „Zapisano”. Poczekaj trzy sekundy. Tekst znowu znika.
