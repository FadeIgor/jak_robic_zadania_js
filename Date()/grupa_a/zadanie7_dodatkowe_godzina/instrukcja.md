# Sprawdzian Grupa A – Zadanie 7 (dodatkowe): Godzina otwarcia kasy

## Cel

Strona pyta o godzinę (0–23) i minuty (0–59). Zbuduj `Date` z dowolną datą i tym czasem. W elemencie o id „wynik” pokaż godzinę w formacie HH:MM. Brakującą cyfrę uzupełniasz zerem z przodu.

## Przydatne

Zastanów się, jak konstruktor przyjmuje też godzinę i minuty oraz które gettery odczytują czas. Dopełnienie do dwóch znaków jest na ściędze. Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

## Wymagania

1. Godzinę i minuty pobierasz z `prompt`. Datę kalendarzową możesz wpisać na sztywno.
2. Czas odczytujesz getterami z obiektu `Date`, a nie sklejasz surowych liczb z okna.
3. W pudełku widać jedną linię HH:MM.
4. W stopce zostawiasz imię, nazwisko i klasę.

## Przykład

Wpisz `9` i `5`. W pudełku pojawia się „09:05”. Wpisz `18` i `0` — pojawia się „18:00”.
