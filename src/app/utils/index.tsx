export const convertLinkString = (string: string): string => {
  return string
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
};
