import { z } from 'zod'

const requiredText = (message) => z.string().trim().min(1, message)
const nameRegex = /^[A-Za-zÀ-žА-Яа-яЉЊЏЂЋЈљњџђћј\s-]+$/
const phoneRegex = /^[+\d\s()-]+$/

const nameField = (label) => requiredText(`${label} je obavezno.`).regex(nameRegex, `${label} može sadržati slova, razmake i crtice.`)
const phoneField = (label) => requiredText(`${label} je obavezan.`)
  .regex(phoneRegex, `${label} može sadržati cifre, razmake, crtice, zagrade i znak +.`)
  .refine((value) => value.replace(/\D/g, '').length >= 7 && value.replace(/\D/g, '').length <= 15, `${label} mora imati razuman broj cifara.`)

const parentRequired = true

export const registrationSchema = z.object({
  student: z.object({
    firstName: nameField('Ime'),
    lastName: nameField('Prezime'),
    institution: requiredText('Škola, fakultet ili ustanova je obavezna.'),
    studyProgram: z.string().trim().optional(),
    phone: phoneField('Broj telefona'),
    email: requiredText('Mejl adresa je obavezna.').email('Unesite ispravnu mejl adresu.'),
  }),
  parent: z.object({
    firstName: parentRequired ? nameField('Ime roditelja') : z.string().trim().optional(),
    lastName: parentRequired ? nameField('Prezime roditelja') : z.string().trim().optional(),
    phone: parentRequired ? phoneField('Broj telefona roditelja') : z.string().trim().optional(),
    email: parentRequired ? requiredText('Mejl adresa roditelja je obavezna.').email('Unesite ispravnu mejl adresu roditelja.') : z.string().trim().optional(),
  }),
  courseId: requiredText('Izaberite željeni smer na kursu.'),
})
