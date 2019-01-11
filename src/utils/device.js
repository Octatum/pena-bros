export const numberValues = {
  mobile: 764,
  tablet: 1024,
  laptop: 1440,
  desktop: 2560,
};

export const device = Object.keys(numberValues).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = numberValues[label] / 16;
  accumulator[label] = `@media (max-width: ${emSize}em)`;
  return accumulator;
}, {});
