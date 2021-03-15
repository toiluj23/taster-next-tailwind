import { isValid, parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  if (!isValid(parseISO(dateString))) {
    return 'No date'
  }
  const date = parseISO(dateString)
  return <time dateTime={dateString} className="uppercase text-xs text-yellow-800">{format(date, 'LLLL	d, yyyy')}</time>
}
