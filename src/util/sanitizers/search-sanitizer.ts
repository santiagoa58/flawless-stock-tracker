export const sanitizeSearch = (input: string) => {
  if (input.split('(')[1] === undefined) {
    return input;
  }
  const symbolWithParentheses = input.split('(')[1];
  return symbolWithParentheses.substr(0, symbolWithParentheses.length - 1);
};
