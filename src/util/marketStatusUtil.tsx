export function getDateTimeString(dateNow: Date): string {
  const dateTime = `${dateNow.toDateString()} ${dateNow.toLocaleTimeString()}`;

  return `${dateTime} ${getLocalTimeZone(dateNow)}`;
}

function getLocalTimeZone(dateNow: Date): string {
  const date = dateNow.toString();
  const timeZone = String(date.match(/\(.*/g))[0].substring(1);

  let timeZoneCaptialLetters: string[] = timeZone
    .split(' ')
    .map(function getFirstLetter(word) {
      return word[0];
    });
  return timeZoneCaptialLetters.join('');
}

export const isMarketOpen = (timeInMilliseconds: number): boolean => {
  const dateNow = new Date(timeInMilliseconds);
  const marketOpen = new Date().setUTCHours(13, 30, 0, 0);
  const marketClose = new Date().setUTCHours(20, 0, 0, 0);

  return dateNow.getTime() > marketOpen && dateNow.getTime() < marketClose;
};
