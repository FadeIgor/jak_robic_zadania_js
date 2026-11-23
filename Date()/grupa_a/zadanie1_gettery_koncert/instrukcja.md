# Sprawdzian Grupa A – Zadanie 1: Data koncertu

## Cel

Festiwal „Nowa Fala”: strona pyta o datę koncertu (rok, miesiąc 1–12, dzień). W elemencie o id „wynik” pokaż rok, wartość z `getMonth()` oraz dzień miesiąca.

## Przydatne

Zastanów się, czym różni się miesiąc, który wpisuje człowiek (1–12), od miesiąca w konstruktorze i w `getMonth` (0–11). Gettery i konstruktor są na ściędze. Kilka linii sklejasz znakiem `"\n"`. Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

## Wymagania

1. Trzy liczby pobierasz z `prompt` i budujesz `Date`.
2. W pudełku widać trzy linie: „Rok: ”, „Miesiąc (getMonth): ” oraz „Dzień: ”.
3. W linii `getMonth` pokazujesz indeks, bez dodawania 1.
4. W stopce zostawiasz imię, nazwisko i klasę.

## Przykład

Wpisz `2026`, `7` i `18`. W pudełku pojawiają się linie „Rok: 2026”, „Miesiąc (getMonth): 6” i „Dzień: 18”.
