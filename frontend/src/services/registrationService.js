export async function submitRegistration(data) {
  await new Promise((resolve) => setTimeout(resolve, 900))

  if (data.student.email.toLowerCase().includes('greska') || data.parent.email.toLowerCase().includes('greska')) {
    throw new Error('Demo servis trenutno odbija ovu prijavu. Proverite podatke i pokušajte ponovo.')
  }

  return { ok: true }
}
