export default function getFormattedDate (dateString: string): string {
  return new Intl.DateTimeFormat('es-EC', { dateStyle: 'long' }).format(
    new Date(dateString)
  )
}
