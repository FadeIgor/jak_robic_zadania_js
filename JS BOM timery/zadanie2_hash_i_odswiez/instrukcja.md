# Zadanie 2: Kotwica i odświeżenie

## Cel

W szablonie są przyciski „Oferta” (`#oferta`), „Kontakt” (`#kontakt`) i „Odśwież stronę” (`#odswiez`) oraz span `#aktualnyHash`. Twoja praca jest w `script.js`. Przyciski zakładek ustawiają `location.hash`. W `#aktualnyHash` widać bieżącą kotwicę. „Odśwież stronę” wywołuje `location.reload()`.

Zostajesz na tej samej stronie. Nie ustawiaj `location.href` na obcy adres. To nie jest `canvas` i nie jest wysyłka formularza.

## Przydatne

- `location.hash = "oferta"` ustawia kotwicę. Możesz podać nazwę z kratką albo bez — obie formy działają.
- Odczyt: `location.hash`. Gdy kotwicy nie ma, dostajesz pusty string. W spanie możesz wtedy pokazać „(brak)”.
- `location.reload()` odświeża stronę tak jak F5. Po odświeżeniu kotwica w adresie zostaje, ale skrypt startuje od nowa.

## Wymagania

1. Po kliknięciu zakładki w `#aktualnyHash` widać `#oferta` albo `#kontakt`.
2. Przycisk „Odśwież stronę” przeładowuje stronę.

## Przykład

Kliknij „Oferta”. W pasku adresu i w spanie `#aktualnyHash` widać `#oferta`. Kliknij „Kontakt”. Tekst w spanie zmienia się na `#kontakt`. Kliknij „Odśwież stronę”. Strona ładuje się od nowa; jeśli kotwica została w adresie, span znowu pokazuje `#kontakt` po tym, jak skrypt odczyta `location.hash`.
