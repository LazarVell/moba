# Moba - sajt

Statički React sajt (Vite + react-i18next), srpski i engleski.

## Pokretanje

```bash
npm install
npm run dev      # lokalni server
npm run build    # produkcijski build u dist/
npm run preview  # pregled builda
```

## Prevodi

Svi tekstovi su u `src/locales/sr.json` i `src/locales/en.json`, sa istim ključevima u oba fajla.
Novi jezik: dodati JSON fajl i unos u `LANGUAGES` u `src/i18n.js`.

## Objavljivanje na GitHub Pages

1. Postaviti ovaj folder kao koren GitHub repozitorijuma i push-ovati na `main`.
2. Na GitHub-u: **Settings → Pages → Source: GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` pri svakom push-u na `main` pravi build i objavljuje sajt.

`base: './'` u `vite.config.js` omogućava da sajt radi pod bilo kojim imenom repozitorijuma.
