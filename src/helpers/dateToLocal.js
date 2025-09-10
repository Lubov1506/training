import { formatDistanceToNow } from "date-fns"
import eoLocale from "date-fns/locale/uk"
export const dateToLocal = (date, formatDate = "dd MMM yyyy") => {
  return formatDistanceToNow(date, { addSuffix: true, locale: eoLocale })
}
