export function cleanString(string) {
  return string
    .replace(' ', '_')
    .toLowerCase()
    .replace(/\W/g, '');
}
