# Zadanie 1: Odczyt adresu strony

## Cel

W szablonie jest przycisk „Pokaż adres” (`#pokaz`) oraz spany `#href`, `#host`, `#sciezka` i `#protokol` z myślnikami. Twoja praca jest w `script.js`. Po kliknięciu w tych spanach pojawiają się odpowiednie części `location` z przeglądarki, a nie tekst wpisany na sztywno w HTML.

To jest odczyt adresu okna (BOM), nie rysowanie na `canvas` i nie wysyłka formularza.

## Przydatne

- `location.href` to cały adres. `location.hostname` to host. `location.pathname` to ścieżka. `location.protocol` to protokół z dwukropkiem (`https:` albo `file:`).
- Na stronę wypisujesz przez `textContent`.
- Przy pliku otwartym z dysku host bywa pusty, a protokół to `file:`. To normalne — wypisujesz to, co przeglądarka naprawdę widzi.

## Wymagania

1. Wartości biorą się z obiektu `location`, a nie z gotowego napisu w HTML.
2. Spany aktualizują się dopiero po kliknięciu „Pokaż adres”.

## Przykład

Otwórz stronę. W spanach widać myślniki. Kliknij „Pokaż adres”. W `#href` pojawia się pełny URL, w `#protokol` widać `file:` albo `http:`, a w `#sciezka` ścieżkę pliku. Jeśli otwierasz plik z dysku, `#host` może zostać pusty.
