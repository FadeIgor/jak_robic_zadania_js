# Sprawdzian Grupa A – Zadanie 6: Podsumowanie festiwalu

## Cel

Strona pyta o datę koncertu i datę dzisiaj. W elemencie o id „wynik” pokaż datę koncertu w formacie DD.MM.YYYY, dzień tygodnia, liczbę dni od dzisiaj do koncertu oraz status: „przed nami” gdy dni są dodatnie, „dzisiaj” gdy zero, „już się odbył” gdy ujemne.

## Przydatne

To zadanie łączy format daty, dzień tygodnia i różnicę w dniach. Status bierz z liczby dni, a nie z porównania napisów. Składnia jest na ściędze. Kilka linii sklejasz znakiem `"\n"`. Wynik wypisujesz przez `document.getElementById("wynik").textContent`. Nie używaj `document.write`.

## Wymagania

1. Wczytujesz koncert i dzisiaj (po trzy liczby).
2. W pudełku widać linię „Koncert: DD.MM.YYYY, nazwa”, linię „Dni: …” i status.
3. W stopce zostawiasz imię, nazwisko i klasę.

## Przykład

Wpisz koncert `2026`, `9`, `10` i dzisiaj `2026`, `9`, `1`. W pudełku pojawiają się linie „Koncert: 10.09.2026, czwartek”, „Dni: 9” i „przed nami”. Gdy dzisiaj to ten sam dzień, status to „dzisiaj”. Gdy dzisiaj to `2026`, `9`, `12`, status to „już się odbył”, a dni to −2.
