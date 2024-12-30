import { Dayjs } from 'dayjs'

export class DateUtils {
  static removeTime(date: Dayjs) {
    return date.set('hour', 0).set('minute', 0).set('second', 0)
  }
}
