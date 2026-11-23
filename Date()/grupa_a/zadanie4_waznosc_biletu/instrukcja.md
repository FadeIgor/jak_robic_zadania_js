# Sprawdzian Grupa A – Zadanie 4: Ważność biletu

## Cel

Bilet kupiony w podanym dniu jest ważny `n` dni. Termin to dzień zakupu przesunięty o `n` dni kalendarzowych. Przesunięcie rób setterem dnia miesiąca, nie przez ręczne dodawanie milisekund. Wynik pokaż w elemencie o id „wynik”.

## Przydatne

Zastanów się, jak z kopii daty zakupu zrobić datę końca ważności i co się stanie, gdy przesunięcie wyjdzie poza koniec miesiąca. Format DD.MM.YYYY jest na ściędze. Kilka linii sklejasz znakiem `"\n"`. Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

## Wymagania

1. Wczytujesz datę zakupu i `n`.
2. W pudełku widać linie „Zakup: …” i „Ważny do: …” w formacie DD.MM.YYYY.
3. W stopce zostawiasz imię, nazwisko i klasę.

## Przykład

Wpisz `2026`, `6`, `28` i `5`. W pudełku pojawiają się linie „Zakup: 28.06.2026” i „Ważny do: 03.07.2026”.
