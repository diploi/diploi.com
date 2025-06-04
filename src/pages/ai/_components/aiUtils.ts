export const createBackgroundSvg = ({
  size: items = 4,
  gap = 18,
  primary = 'black',
  secondary = 'black',
  strokeWidth = 16,
  fill,
  chance = 1,
}: {
  size?: number;
  gap?: number;
  primary?: string;
  secondary?: string;
  strokeWidth?: number;
  fill?: boolean;
  chance?: number;
}) => {
  const square = ({ x, y }: { x: number; y: number }) =>
    `<path transform="translate(${x} ${y})" d="M16 8H64C68.4183 8 72 11.5817 72 16V64C72 68.4183 68.4183 72 64 72H16C11.5817 72 8 68.4183 8 64V16C8 11.5817 11.5817 8 16 8Z" fill="${
      fill ? primary : 'none'
    }" stroke="${primary}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const triangle = ({ x, y }: { x: number; y: number }) =>
    `<path transform="translate(${x} ${y})" d="M45.573 10.8591L73.3287 63.6835C75.2741 67.4052 72.7606 72 68.7556 72H13.2444C9.23938 72 6.72595 67.4052 8.67132 63.6835L36.427 10.8591C38.4263 7.04696 43.5737 7.04696 45.573 10.8591Z" fill="${
      fill ? secondary : 'none'
    }" stroke="${secondary}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>`;

  const tile = 80 + gap;
  const size = items * tile;

  let svg = '';
  for (let x = 0; x < items; x++) {
    for (let y = 0; y < items; y++) {
      if (Math.random() > chance) continue;
      const position = { x: x * tile, y: y * tile };
      if ((x + y) % 2 === 0) {
        svg += square(position);
      } else {
        svg += triangle(position);
      }
    }
  }

  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">${svg}</svg>`.replaceAll(
    '#',
    '%23'
  );
};

export const createStackBackgroundUri = ({
  gap,
  size = 4,
  primary = 'currentColor',
  secondary = 'currentColor',
  strokeWidth,
  fill,
  chance = 1,
}: {
  size?: number;
  gap?: number;
  primary?: string;
  secondary?: string;
  strokeWidth?: number;
  fill?: boolean;
  chance?: number;
}) => `url('data:image/svg+xml,${createBackgroundSvg({ size, gap, primary, secondary, strokeWidth, fill, chance })}')`;
