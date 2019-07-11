export function urlFormatter(url: string): string {
  let regEx: RegExp = /(https?:\/\/)/g;
  return url.replace(regEx, '');
}
