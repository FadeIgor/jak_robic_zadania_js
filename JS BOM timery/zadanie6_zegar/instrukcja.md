# Zadanie 6: Zegar z interwałem

## Cel

W szablonie jest akapit `#zegar` z tekstem `--:--:--` oraz przyciski „Start” (`#start`) i „Stop” (`#stop`). Twoja praca jest w `script.js`. „Start” odpala `setInterval`: co sekundę `#zegar` pokazuje bieżącą godzinę. „Stop” wyłącza interwał. Ponowne „Start” nie odpala drugiego timera równolegle.

To aktualizacja tekstu w HTML, nie `canvas`.

## Przydatne

- Godzinę bierzesz z `new Date().toLocaleTimeString("pl-PL")` (dział 08).
- `setInterval` zwraca identyfikator. Zapamiętaj go w zmiennej i przy Stop wywołaj `clearInterval`, potem ustaw zmienną na `null`.
- Jeśli identyfikator nie jest `null`, nie wołaj drugiego `setInterval`. Inaczej dwa zegary tykają naraz i Stop zatrzyma tylko jeden.

## Wymagania

1. „Start” zaczyna aktualizację, a „Stop” ją kończy.
2. Godzina w `#zegar` zmienia się sama, bez kolejnych kliknięć.
3. „Stop” naprawdę zatrzymuje tykanie.

## Przykład

Kliknij „Start”. Cyfry w `#zegar` zmieniają się co sekundę i pokazują aktualną godzinę. Kliknij „Stop”. Ostatnia godzina zostaje na stronie i się nie zmienia. Kliknij „Start” ponownie. Zegar znowu tyka, ale nie szybciej niż raz na sekundę.
