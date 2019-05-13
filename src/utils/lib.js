export function cleanString(string = '') {
  if (!string) return '';
  return string
    .replace(' ', '_')
    .toLowerCase()
    .replace(/\W/g, '');
}
