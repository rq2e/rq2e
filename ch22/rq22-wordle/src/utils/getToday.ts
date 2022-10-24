export function getToday(offset = 0) {
  const now = new Date();
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + offset
  ).getTime();
}

export function getYesterday() {
  return getToday(-1);
}

export function getTomorrow() {
  return getToday(1);
}
