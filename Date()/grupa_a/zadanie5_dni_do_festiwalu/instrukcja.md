# Sprawdzian Grupa A – Zadanie 5: Dni do festiwalu

## Cel

Strona pyta o datę „dzisiaj” i datę festiwalu. W elemencie o id „wynik” pokaż, ile dni kalendarzowych jest od dzisiaj do festiwalu. Ujemna liczba oznacza, że festiwal już był.

## Przydatne

Zastanów się, jak z różnicy znaczników czasu dostać pełne dni i w którą stronę odejmować (festiwal minus dzisiaj). Zaokrąglenie i długość doby są na ściędze. Kilka linii sklejasz znakiem `"\n"`. Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

## Wymagania

1. Każdą datę wczytujesz jako trzy liczby.
2. W pudełku widać linie „Dzisiaj: …”, „Festiwal: …” i „Dni: …”.
3. W stopce zostawiasz imię, nazwisko i klasę.

## Przykład

Wpisz dzisiaj `2026`, `9`, `10` i festiwal `2026`, `9`, `20`. W pudełku pojawia się między innymi „Dni: 10”. Gdy zamienisz kolejność dat, liczba dni to −10.
