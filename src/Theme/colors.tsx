export interface ColorInterface {
  main: string;
  secondary: string;
  dark: string;
  light: string;
  contrast: string;
  white: string;

  success: string;
  warning: string;
  error: string;
}

const colors: ColorInterface = {
  main: '#46899b',
  secondary: '#f2ceb9',
  dark: '#383838',
  light: '#f4f4f4',
  contrast: '#e8e8e8',
  white: '#ffffff',

  success: '#7fd466',
  warning: '#ffd900',
  error: '#ff5a5a'
};

export default colors;
