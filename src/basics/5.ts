
enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean =>
  DayOfWeek[day] === 'Saturday' || DayOfWeek[day] === 'Sunday';
