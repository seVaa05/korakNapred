export const mathPrograms = [
  { id: 'math-preschool', title: 'Matematika za predškolce' },
  { id: 'math-primary-standard', title: 'Matematika za osnovce — standardna nastava' },
  { id: 'math-small-graduation', title: 'Matematika — priprema za malu maturu' },
  { id: 'math-primary-competition', title: 'Matematika — priprema za takmičenja za osnovce' },
  { id: 'math-gymnasium-entry', title: 'Matematika — priprema za upis u Matematičku gimnaziju' },
  { id: 'math-high-standard', title: 'Matematika za srednjoškolce — standardna nastava' },
  { id: 'math-faculty-entry', title: 'Matematika — priprema za prijemni ispit na fakultetu' },
  { id: 'advanced-analysis', title: 'Napredna matematika — analiza' },
  { id: 'advanced-geometry', title: 'Napredna matematika — geometrija' },
  { id: 'math-high-competition', title: 'Matematika — priprema za takmičenja za srednjoškolce' },
  { id: 'math-students-exams', title: 'Matematika za studente — kolokvijumi i ispiti' },
]

export const courseCategories = [
  {
    slug: 'kursevi-za-predskolce',
    shortTitle: 'Predškolci',
    title: 'Kursevi za predškolce',
    summary: 'Kurs je namenjen deci uzrasta od 4 do 7 godina. Cilj je upoznavanje sa ciframa, brojevima, osnovnim računskim operacijama, geometrijom i razvoj logičkog mišljenja.',
    sections: [
      {
        title: 'Standardni kurs',
        text: 'Planirana veličina grupe je oko 5 učenika. Plaćanje se može izvršiti u više mesečnih rata.',
        items: ['Fond: 30 dvočasa (60 časova)', 'Cena jednog dvočasa: 2.100 dinara', 'Cena za ceo kurs: 42.000 dinara', 'Cena individualnog dvočasa je 2.800 dinara.'],
        courseIds: ['math-preschool'],
      },
    ],
  },
  {
    slug: 'kursevi-za-osnovce',
    shortTitle: 'Osnovci',
    title: 'Kursevi za osnovce',
    summary: 'Za učenike osnovnih škola organizujemo standardnu nastavu, pripremu za malu maturu, takmičenja i upis u Matematičku gimnaziju.',
    sections: [
      {
        title: 'Pripremna nastava za polaganje male mature',
        text: 'Za učenike VIII razreda organizujemo pripreme za maturski ispit iz matematike, srpskog jezika i kombinovanog testa. Planirana veličina grupe je od 10 do 15 učenika.',
        items: ['Fond: 30 dvočasa (60 časova)', 'Cena jednog dvočasa: 2.200 dinara', 'Cena za ceo kurs: 45.000 dinara', 'Cena individualnog dvočasa je 2.900 dinara.'],
        courseIds: ['math-small-graduation'],
      },
      {
        title: 'Standardni kursevi',
        text: 'Za učenike osnovnih škola organizujemo pripreme iz matematike, fizike i informatike, namenjene boljem savladavanju školskog gradiva.',
        items: ['Planirana veličina grupe je od 10 do 15 učenika.', 'Fond: 30 dvočasa (60 časova)', 'Cena za ceo kurs: 45.000 dinara'],
        courseIds: ['math-primary-standard'],
      },
      {
        title: 'Pripremna nastava za takmičenja i upis u Matematičku gimnaziju',
        text: 'Sa učenicima VI, VII i VIII razreda koji se pripremaju za takmičenja iz matematike i upis u Matematičku gimnaziju radi se individualno.',
        items: ['Cena individualnog dvočasa je 2.900 dinara.'],
        courseIds: ['math-primary-competition', 'math-gymnasium-entry'],
      },
    ],
  },
  {
    slug: 'kursevi-za-srednjoskolce',
    shortTitle: 'Srednjoškolci',
    title: 'Kursevi za srednjoškolce',
    summary: 'Programi za gimnazije i srednje stručne škole pokrivaju standardnu nastavu, prijemne ispite, napredne oblasti i takmičarske pripreme.',
    sections: [
      {
        title: 'Pripremna nastava za upis na fakultet',
        text: 'Za učenike IV razreda organizujemo pripreme za polaganje prijemnih ispita za upis na fakultete. Planirana veličina grupe je oko 15 učenika.',
        items: ['Fondovi zavise od predmeta.', 'Cena jednog dvočasa: 2.200 dinara', 'Cena za ceo kurs: 56.000 dinara', 'Cena individualnog dvočasa je 3.400 dinara.'],
        courseIds: ['math-faculty-entry'],
      },
      {
        title: 'Standardni kursevi',
        text: 'Kursevi su namenjeni učenicima koji žele da bolje savladaju školsko gradivo iz matematike, fizike i informatike.',
        items: ['Planirana veličina grupe je od 10 do 15 učenika.', 'Fond: 30 dvočasa (60 časova)', 'Cena jednog dvočasa: 2.600 dinara'],
        courseIds: ['math-high-standard'],
      },
      {
        title: 'Napredni kursevi',
        text: 'Za učenike Matematičke gimnazije i đake drugih škola koji žele matematiku po programu Matematičke gimnazije.',
        items: ['Analiza i geometrija.', 'Planirana veličina grupe je od 10 do 15 učenika.', 'Cena individualnog dvočasa je 3.400 dinara.'],
        courseIds: ['advanced-analysis', 'advanced-geometry'],
      },
      {
        title: 'Takmičarski kursevi',
        text: 'Pripreme iz matematike, fizike, informatike i astronomije za takmičenja u A i B kategoriji.',
        items: ['Planirana veličina grupe je od 5 do 10 učenika.', 'Cena jednog dvočasa u grupi je 2.600 dinara.', 'Cena individualnog dvočasa je 3.400 dinara.'],
        courseIds: ['math-high-competition'],
      },
    ],
  },
  {
    slug: 'kursevi-za-studente',
    shortTitle: 'Studenti',
    title: 'Kursevi za studente',
    summary: 'Nastava za studente ETF-a, FON-a, TMF-a, Matematičkog, Građevinskog, Mašinskog, Ekonomskog, Saobraćajnog i drugih fakulteta.',
    sections: [
      {
        title: 'Pripremna nastava za polaganje kolokvijuma i ispita',
        text: 'Organizujemo nastavu iz matematike, fizike, programiranja i drugih predmeta. Planirana veličina grupe je od 5 do 10 studenata.',
        items: ['Cena jednog dvočasa u grupi se formira prema veličini grupe i broju časova.', 'Cena individualnog dvočasa je 3.800 dinara.'],
        courseIds: ['math-students-exams'],
      },
    ],
  },
]

export function getProgramById(id) {
  return mathPrograms.find((program) => program.id === id)
}
