# Sprawdzian Grupa A – Zadanie 2: Data na plakacie

## Cel

Strona pyta o datę koncertu. W elemencie o id „wynik” pokaż ją w formacie DD.MM.YYYY. Dzień i miesiąc kalendarzowy mają zawsze dwie cyfry — brakującą uzupełniasz zerem z przodu.

## Przydatne

Zastanów się, jak z getterów złożyć datę z kropkami i jak dopełnić pojedynczą cyfrę do stałej długości. Pamiętaj, że `getMonth` nie jest miesiącem kalendarzowym. Składnia jest na ściędze. Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

## Wymagania

1. Z trzech liczb budujesz `Date`.
2. W pudełku widać jedną linię w formacie DD.MM.YYYY.
3. W stopce zostawiasz imię, nazwisko i klasę.

## Przykład

Wpisz `2026`, `7` i `8`. W pudełku pojawia się „08.07.2026”.
