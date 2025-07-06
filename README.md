# 💖 Binge Therapy 💖

**La guida di Brunella alle serie che curano l'anima**

Un sito web completo e responsive creato per una bomboniera di laurea, con QR code integrato per condividere la passione per le serie tv.

## 🎯 Caratteristiche

### Design & Stile
- **Palette rosa pastello e magenta** ispirata all'adesivo bomboniera
- **Stile pop femminile ed elegante** con font moderni (Poppins, Comic Neue)
- **Design completamente responsive** per mobile, tablet e desktop
- **Animazioni fluide** e effetti hover interattivi

### Sezioni del Sito
1. **Homepage** con introduzione personale e statistiche Tv Time
2. **6 categorie di serie** con descrizioni personalizzate:
   - 🎓 I teen drama da non perdere
   - 😭 Prepara i fazzoletti
   - 🇮🇹 Fiction italiana
   - 🤣 Se vuoi divertirti
   - 💣 Un po' d'azione
   - 👶 Per tornare bambini
3. **Sezione "Chi sono"** con presentazione di Brunella
4. **Footer** con copyright e informazioni

### Funzionalità Tecniche
- **Bootstrap 5** per layout responsive
- **Scroll smooth** tra le sezioni
- **Pulsante "Scroll to top"** dinamico
- **Download PDF** della guida completa
- **Sistema di notifiche** per feedback utente
- **Lazy loading** per le immagini
- **Accessibilità** completa (ARIA, focus management)
- **Performance ottimizzate** con throttling e debouncing

## 🚀 Come Utilizzare

### Apertura del Sito
1. Apri il file `index.html` in un browser web
2. Il sito è completamente funzionale senza server

### Navigazione
- **Header fisso** con menu di navigazione
- **Scroll automatico** cliccando sui link del menu
- **Pulsante "Scopri le categorie"** nella homepage
- **Pulsante "Scarica PDF"** per salvare la guida

### Mobile Experience
- **Menu hamburger** per dispositivi mobili
- **Layout ottimizzato** per schermi piccoli
- **Touch-friendly** con aree di tocco adeguate

## 📱 Compatibilità

### Browser Supportati
- ✅ Chrome (raccomandato)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

### Dispositivi
- ✅ Smartphone (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)

## 🎨 Palette Colori

```css
--primary-pink: #ffe6f0    /* Rosa pastello principale */
--secondary-pink: #ffb3d1  /* Rosa secondario */
--accent-magenta: #c2185b  /* Magenta accento */
--dark-magenta: #8e0038    /* Magenta scuro */
--light-pink: #fff0f5      /* Rosa chiaro sfondo */
--text-dark: #2c1810       /* Testo scuro */
--text-light: #6b4f5f      /* Testo chiaro */
```

## 📁 Struttura File

```
tesi-brunella/
├── index.html          # Pagina principale
├── style.css           # Stili CSS completi
├── script.js           # Funzionalità JavaScript
└── README.md           # Documentazione
```

## 🔧 Personalizzazione

### Modificare le Serie
Per aggiungere o modificare le serie, editare la sezione corrispondente in `index.html`:

```html
<div class="series-card">
    <div class="series-image">
        <img src="URL_IMMAGINE" alt="Titolo Serie" class="img-fluid">
    </div>
    <div class="series-content">
        <h4>Titolo Serie</h4>
        <p>Descrizione personalizzata</p>
        <span class="platform">Piattaforma</span>
    </div>
</div>
```

### Modificare i Colori
I colori sono definiti come variabili CSS in `style.css`. Modifica i valori in `:root` per cambiare la palette.

### Aggiungere Categorie
1. Copia una sezione `category-card` esistente
2. Modifica l'emoji e il titolo
3. Aggiungi le nuove serie nella griglia

## 📊 Performance

### Ottimizzazioni Implementate
- **Lazy loading** per le immagini
- **Throttling** per eventi scroll
- **Debouncing** per resize
- **Intersection Observer** per animazioni
- **CSS variables** per performance

### Metriche Target
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🌟 Caratteristiche Speciali

### QR Code Integration
Il sito è progettato per essere collegato a un QR code nella bomboniera di laurea, permettendo agli ospiti di accedere facilmente alla guida.

### Download PDF
Il pulsante "Scarica PDF" genera un file di testo con tutte le raccomandazioni, perfetto per salvare offline.

### Animazioni
- **Fade-in** per le sezioni
- **Hover effects** per le cards
- **Pulse** per le emoji
- **Bounce** per le categorie
- **Smooth transitions** ovunque

## 🎓 Contesto Laurea

Questo sito è stato creato come parte di una bomboniera di laurea in televisione, combinando:
- **Passione personale** per le serie tv
- **Competenze tecniche** in web development
- **Creatività** nel design e nella scrittura
- **Condivisione** con amici e familiari

## 📞 Supporto

Per modifiche o personalizzazioni:
1. Modifica i file HTML/CSS/JS direttamente
2. Testa su diversi dispositivi
3. Verifica la compatibilità dei browser

## 🎬 Serie Incluse

### Teen Drama
- Gossip Girl (Netflix)
- The Vampire Diaries (Prime Video)
- Riverdale (Netflix)

### Emozioni
- This Is Us (Disney+)
- A Million Little Things (Prime Video)
- The Good Doctor (Disney+)

### Fiction Italiana
- Mare Fuori (RaiPlay)
- Baby (Netflix)
- Suburra (Netflix)

### Commedia
- Brooklyn Nine-Nine (Netflix)
- The Office (Prime Video)
- Parks and Recreation (Prime Video)

### Azione
- Stranger Things (Netflix)
- The Boys (Prime Video)
- Wednesday (Netflix)

### Per Tutti
- Avatar: The Last Airbender (Netflix)
- The Mandalorian (Disney+)
- The Good Place (Netflix)

---

**Creato con 💖 da Brunella per la sua laurea in televisione**

*"Le serie tv sono come la vita: a volte ti fanno ridere, a volte piangere, ma ti lasciano sempre qualcosa di speciale."* 