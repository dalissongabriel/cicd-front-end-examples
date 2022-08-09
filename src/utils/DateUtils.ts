abstract class DateUtils {
  static printDateTimeNow() {
    return Intl.DateTimeFormat("pt-BR").format(new Date());
  }
}

export default DateUtils;
