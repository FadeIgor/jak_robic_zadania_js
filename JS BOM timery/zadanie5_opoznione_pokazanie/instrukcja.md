# Zadanie 5: Pokaż za dwie sekundy

## Cel

W szablonie jest przycisk „Pokaż za 2 s” (`#uruchom`) i pusty akapit `#wynik`. Twoja praca jest w `script.js`. Kliknięcie nie wstawia docelowego tekstu od razu. Po dwóch sekundach w `#wynik` pojawia się „Gotowe”.

To `setTimeout`, nie `canvas` i nie wysyłka formularza.

## Przydatne

- `setTimeout` przyjmuje funkcję i `2000` milisekund. Pierwszy argument to funkcja, nie string z kodem.
- Od razu po kliknięciu możesz wpisać „Czekaj…”, a po czasie podmienić na „Gotowe”. Ten pierwszy napis nie jest wymagany.
- Timer nie rysuje obrazka. Tylko później ustawia `textContent`.

## Wymagania

1. Tekst „Gotowe” pojawia się z opóźnieniem około dwóch sekund.
2. Pierwszy argument `setTimeout` to funkcja, nie napis.

## Przykład

Kliknij „Pokaż za 2 s”. Przez chwilę `#wynik` jest pusty (albo widać „Czekaj…”). Po około dwóch sekundach w akapicie pojawia się „Gotowe”.
