# Zadanie 7: Odliczanie

## Cel

W szablonie jest pole `#sekundy` (domyślnie 5), przycisk „Start” (`#start`) i akapit `#ekran` z myślnikiem. Twoja praca jest w `script.js`. „Start” bierze liczbę z pola i co sekundę zmniejsza wartość pokazywaną w `#ekran`. Gdy licznik dochodzi do zera, interwał się kończy i widać „Koniec”.

To `setInterval` i `textContent`, nie `canvas`.

## Przydatne

- `Number(...)` zamienia treść pola na liczbę. Sprawdź, czy wynik jest skończony i dodatni. Puste albo niedodatnie pole nie startuje timera.
- Trzymaj zmienną z pozostałymi sekundami. Co 1000 ms odejmujesz 1. Przy `<= 0` wołasz `clearInterval` i wpisujesz „Koniec”.
- Ponowny Start po końcu ma działać od nowa. Gdy interwał jeszcze trwa, nie odpalaj drugiego.

## Wymagania

1. Liczba sekund na ekranie zgadza się z wartością z `#sekundy`.
2. Po zero licznik nie schodzi na liczby ujemne.
3. Puste albo niedodatnie pole nie uruchamia odliczania.

## Przykład

Wpisz `3` i kliknij „Start”. W `#ekran` widać kolejno 3, potem 2, potem 1, a na końcu „Koniec”. Zostaw pole puste albo wpisz `0` i kliknij „Start”. Ekran nie zaczyna odliczania w dół.
