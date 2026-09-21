# Korak napred frontend

React frontend za edukativni centar „Korak napred”. Backend nije uključen u ovu fazu.

## Komande

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Organizacija

- `src/app` - router i zajednički layout.
- `src/components` - zajedničke UI komponente.
- `src/pages` - stranice aplikacije.
- `src/features/registration` - prijava na kurs, forma i Zod validacija.
- `src/data` - početni sadržaj, kursevi, vesti, galerije i video linkovi.
- `src/services` - servisni sloj za buduće povezivanje sa backendom.
- `src/styles` - globalne CSS promenljive i osnovni stilovi.
- `src/assets` - lokalni logo i fotografije.
- `src/utils` - pomoćne funkcije.

## Izmene sadržaja

- Kursevi i opcije prijave menjaju se u `src/data/courses.js`.
- Vesti se menjaju u `src/data/news.js`.
- Galerija i video sadržaji menjaju se u `src/data/media.js`.
- Boje i osnovna tema menjaju se u `src/styles/global.css`.

## Mock servis

`src/services/registrationService.js` izlaže `submitRegistration(data)`. UI poziva samo tu funkciju, pa se kasnije može zameniti Spring Boot HTTP klijentom bez promene forme. Demo neuspeh se može proveriti unosom mejl adrese koja sadrži `greska`.

Objekat prijave trenutno ima oblik:

```js
{
  student: { firstName, lastName, institution, studyProgram, phone, email },
  parent: { firstName, lastName, phone, email },
  courseId
}
```

Ovo nije konačan API ugovor.

## Sadržaj za potvrdu

- Cene i fondovi časova su preneti iz referentnog sajta i treba ih potvrditi pre objavljivanja.
- Datumi vesti su arhivski i ne treba ih predstavljati kao nove objave.
- Video izbor u sekciji „Zanimljivosti” treba potvrditi ako se menja zvanični YouTube sadržaj.
- Za „Kako do nas” je korišćena dostupna fotografija prostora i link ka Google mapi; dodatne originalne mape/fotografije treba dodati ako budu dostupne.
