# Zadanie 3: alert, confirm, prompt

## Cel

W szablonie jest przycisk „Zamelduj się” (`#start`) i pusty akapit `#komunikat`. Twoja praca jest w `script.js`. Kliknięcie otwiera `prompt` z pytaniem o imię. Anulowanie zapisuje w `#komunikat` tekst „Anulowano”. Puste imię (OK bez treści) zapisuje „Brak imienia”. Niepuste imię otwiera `confirm` z pytaniem, czy przywitać gościa. Po OK pojawia się `alert` i to samo zdanie w `#komunikat`. Po Anuluj w `confirm` w akapicie widać „Bez powitania”.

To okna przeglądarki (BOM), nie formularz z działu 19 i nie `canvas`.

## Przydatne

- `prompt` zwraca `null` po Anuluj, a po OK zwraca string (może być pusty). To dwie różne sytuacje.
- `confirm` zwraca `true` albo `false`. `alert` nic nie zwraca.
- `alert`, `confirm` i `prompt` wstrzymują dalszy JavaScript. `console.log` napisany pod dialogiem pojawi się w konsoli dopiero po zamknięciu okna. Najpierw zamknij dialog, potem czytaj F12.

## Wymagania

1. Obsługujesz ścieżki: Anuluj w `prompt`, puste imię, imię z potwierdzeniem i imię bez potwierdzenia.
2. Wynik widać w `#komunikat` na stronie, a nie tylko w oknie dialogowym.

## Przykład

Kliknij „Zamelduj się”, wpisz `Ola` i zatwierdź, potem w `confirm` kliknij OK. Pojawia się `alert` „Cześć, Ola”, a pod przyciskiem ten sam tekst. Kliknij ponownie, wpisz imię i w `confirm` wybierz Anuluj. W `#komunikat` widać „Bez powitania”. Kliknij trzeci raz i w `prompt` wybierz Anuluj. W akapicie pojawia się „Anulowano”. Gdy w `prompt` naciśniesz OK przy pustym polu, widać „Brak imienia”.
