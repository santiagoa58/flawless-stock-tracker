export const isPartOf = (properties: string[], testedObject: any): boolean => {
  properties.forEach(property => {
    if (!(property in testedObject)) {
      return false;
    }
  });
  return true;
};
