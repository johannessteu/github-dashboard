import colors, { ColorInterface } from './colors';
require('./icons');

export interface ThemeInterface {
  colors: ColorInterface;
}

const theme: ThemeInterface = {
  colors
};

export default theme;
