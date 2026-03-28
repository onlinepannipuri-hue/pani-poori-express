export function isStoreOpen(): boolean {
  const now = new Date();
  const day = now.getDay(); // 0=Sun
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const time = hours * 60 + minutes;

  if (day === 0) {
    // Sunday 8:30 AM – 10:30 PM
    return time >= 510 && time <= 1350;
  }
  // Mon-Sat 5:30 PM – 10:30 PM
  return time >= 1050 && time <= 1350;
}

export function getTimingText(): string {
  const now = new Date();
  const day = now.getDay();
  if (day === 0) return "Today: 8:30 AM – 10:30 PM";
  return "Today: 5:30 PM – 10:30 PM";
}
