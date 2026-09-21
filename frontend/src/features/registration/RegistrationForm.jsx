import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { mathPrograms } from '../../data/courses'
import { submitRegistration } from '../../services/registrationService'
import { registrationSchema } from './registrationSchema'
import styles from './RegistrationForm.module.css'

const defaultValues = {
  student: { firstName: '', lastName: '', institution: '', studyProgram: '', phone: '', email: '' },
  parent: { firstName: '', lastName: '', phone: '', email: '' },
  courseId: '',
}

function Field({ label, error, required = true, children, hint }) {
  return (
    <label className={styles.field}>
      <span>{label} {required ? <strong>*</strong> : <em>(neobavezno)</em>}</span>
      {children}
      {hint ? <small>{hint}</small> : null}
      {error ? <p role="alert">{error.message}</p> : null}
    </label>
  )
}

export function RegistrationForm() {
  const [searchParams] = useSearchParams()
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState('')
  const courseFromUrl = searchParams.get('course') || ''
  const validCourseFromUrl = useMemo(() => mathPrograms.some((program) => program.id === courseFromUrl) ? courseFromUrl : '', [courseFromUrl])

  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: { ...defaultValues, courseId: validCourseFromUrl },
    shouldFocusError: true,
  })

  useEffect(() => {
    setValue('courseId', validCourseFromUrl)
  }, [setValue, validCourseFromUrl])

  const onSubmit = async (values) => {
    setSubmitMessage('')
    setSubmitError('')
    try {
      await submitRegistration(values)
      setSubmitMessage('Demo prijava je uspešno obrađena. Podaci nisu poslati edukativnom centru.')
    } catch (error) {
      setSubmitError(error.message || 'Došlo je do greške pri demo slanju. Pokušajte ponovo.')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.notice}>Ovo je demonstraciona prijava. Podaci se trenutno ne šalju edukativnom centru.</div>
      {submitMessage ? <div className={styles.success} role="status">{submitMessage}</div> : null}
      {submitError ? <div className={styles.errorBox} role="alert">{submitError}</div> : null}

      <fieldset>
        <legend>Podaci o polazniku</legend>
        <div className={styles.grid}>
          <Field label="Ime" error={errors.student?.firstName}><input {...register('student.firstName')} autoComplete="given-name" /></Field>
          <Field label="Prezime" error={errors.student?.lastName}><input {...register('student.lastName')} autoComplete="family-name" /></Field>
          <Field label="Škola / fakultet" error={errors.student?.institution} hint="Za predškolce unesite naziv vrtića ili „Ne pohađa ustanovu“."><input {...register('student.institution')} /></Field>
          <Field label="Smer u školi / na fakultetu" error={errors.student?.studyProgram} required={false}><input {...register('student.studyProgram')} /></Field>
          <Field label="Broj telefona" error={errors.student?.phone} hint="Za dete bez sopstvenog telefona može se uneti kontakt roditelja."><input type="tel" {...register('student.phone')} autoComplete="tel" /></Field>
          <Field label="Mejl adresa" error={errors.student?.email} hint="Za dete bez sopstvenog mejla može se uneti mejl roditelja."><input type="email" {...register('student.email')} autoComplete="email" /></Field>
        </div>
      </fieldset>

      <fieldset>
        <legend>Podaci o roditelju</legend>
        <div className={styles.grid}>
          <Field label="Ime roditelja" error={errors.parent?.firstName}><input {...register('parent.firstName')} /></Field>
          <Field label="Prezime roditelja" error={errors.parent?.lastName}><input {...register('parent.lastName')} /></Field>
          <Field label="Broj telefona roditelja" error={errors.parent?.phone}><input type="tel" {...register('parent.phone')} /></Field>
          <Field label="Mejl adresa roditelja" error={errors.parent?.email}><input type="email" {...register('parent.email')} /></Field>
        </div>
      </fieldset>

      <fieldset>
        <legend>Izbor kursa</legend>
        <Field label="Željeni smer na kursu" error={errors.courseId}>
          <select {...register('courseId')}>
            <option value="">Izaberite kurs</option>
            {mathPrograms.map((program) => <option key={program.id} value={program.id}>{program.title}</option>)}
          </select>
        </Field>
      </fieldset>

      <button className="button" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Slanje demo prijave...' : 'Pošalji demo prijavu'}</button>
    </form>
  )
}
