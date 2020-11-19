export function getImageFromApi(name: string): string {
  return `https://image.tmdb.org/t/p/w300${name}`;
}

export function minuteToHour(minutes: number): string {
  const hour: number = Math.floor(minutes / 60);
  const minute: number = minutes % 60;

  return (hour ? hour + "h" : "") + ("0" + minute).slice(-2) + "min";
}
