# Portfolio Template

Responsywny szablon strony portfolio inspirowany designem z [marcindoliszny.com](https://www.marcindoliszny.com).

## 🚀 Uruchomienie

### macOS / Linux

```bash
./start.sh
```

### Windows

```bash
start.bat
```

Alternatywnie, możesz ręcznie uruchomić serwer:

```bash
python3 -m http.server 8000
```

Następnie otwórz przeglądarkę i przejdź do: `http://localhost:8000`

## 📁 Struktura projektu

```
projekt2/
├── index.html          # Główna strona portfolio
├── work-project-1.html # Case study: Perdoo Growth Board
├── work-project-2.html # Case study: Setmore Appointments
├── work-project-3.html # Case study: Setmore Mobile App
├── work-project-4.html # Case study: LOG GE
├── style.css           # Niestandardowe style i animacje
├── script.js           # Interaktywność (menu mobile, scrolling)
├── start.sh            # Skrypt uruchamiający (macOS/Linux)
├── start.bat           # Skrypt uruchamiający (Windows)
└── README.md           # Ten plik
```

## 🎨 Cechy

- ✅ W pełni responsywny design (mobile-first)
- ✅ Stylowanie z Tailwind CSS (przez CDN)
- ✅ Płynne przewijanie między sekcjami
- ✅ Animacje przy scrollowaniu
- ✅ Mobilne menu hamburgerowe
- ✅ Czysty HTML, CSS i JavaScript (vanilla)
- ✅ Szybkie ładowanie (brak ciężkich zależności)
- ✅ Dostępność (semantic HTML, focus states)

## 📝 Personalizacja

### 1. Zmień treść w `index.html`

Edytuj następujące sekcje:

- **Logo i nagłówek**: Zamień "Twoje Imię" na swoje dane
- **Sekcja Hero**: Dostosuj tytuł i opis
- **Projekty**: Dodaj swoje case studies w sekcji "Selected work"
- **Doświadczenie**: Zaktualizuj timeline z Twoją historią kariery
- **Kontakt**: Zmień linki do LinkedIn i email

### 2. Dostosuj kolory w `style.css`

Zmienne CSS na początku pliku:

```css
:root {
    --color-primary: #111827;
    --color-secondary: #6b7280;
    --color-accent: #f3f4f6;
}
```

### 3. Dodaj obrazy projektów

Zamień placeholder'y cyfr w kartach projektów na rzeczywiste obrazy:

```html
<div class="bg-gray-100 rounded-lg overflow-hidden mb-6">
    <img src="sciezka/do/obrazu.jpg" alt="Opis projektu" />
</div>
```

### 4. Zmień czcionki

W sekcji `<head>` pliku `index.html` możesz zmienić Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=TwojaCzcionka:wght@300;400;600&display=swap" rel="stylesheet">
```

## 🎯 Sekcje strony

### Strona główna (index.html)
1. **Header** - Stała nawigacja z logo i menu
2. **Hero** - Powitanie i główny opis
3. **Selected Work** - Portfolio projektów (4 karty z linkami do case studies)
4. **Experience** - Timeline doświadczenia zawodowego
5. **Contact** - Sekcja kontaktowa CTA
6. **Footer** - Stopka z copyright

### Podstrony Case Study
Każdy projekt ma dedykowaną podstronę z:
- Hero z tytułem projektu
- Sekcja Overview
- Szczegóły procesu designu (Discovery, Ideation, Prototyping, Validation)
- Sidebar z informacjami o projekcie (Scope, Team, Tools, Deliverables)
- Metryki i wyniki końcowe
- Linki do innych projektów

## 🛠️ Technologie

- HTML5
- CSS3 (Custom styles)
- Tailwind CSS 3.x (CDN)
- Vanilla JavaScript (ES6+)
- Python HTTP Server (development)

## 📱 Responsywność

Breakpointy Tailwind:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

Aby wdrożyć stronę na produkcję:

### GitHub Pages

1. Utwórz repozytorium na GitHub
2. Wypchnij pliki do repozytorium
3. W Settings → Pages, wybierz branch main
4. Strona będzie dostępna pod: `username.github.io/nazwa-repo`

### Netlify / Vercel

1. Przeciągnij folder do dashboard
2. Strona zostanie automatycznie wdrożona

### Klasyczny hosting

Wgraj wszystkie pliki na serwer przez FTP.

## 💡 Dodatkowe funkcje

W pliku `script.js` znajdują się zakomentowane funkcje opcjonalne:

- `initActiveNavigation()` - Podświetlanie aktywnej sekcji w menu
- `initParallax()` - Efekt parallax w hero section
- `initScrollToTop()` - Przycisk "powrót do góry"
- `initLazyLoading()` - Lazy loading obrazów

Odkomentuj je na końcu pliku, aby włączyć.

## 📄 Licencja

Szablon jest darmowy do użytku osobistego i komercyjnego.

## 🤝 Wsparcie

W razie problemów:
1. Sprawdź konsolę przeglądarki (F12) w poszukiwaniu błędów
2. Upewnij się, że Python jest zainstalowany
3. Sprawdź, czy port 8000 jest wolny

---

Powodzenia z Twoim portfolio! 🎉

