export interface ThemeColors {
  '--bg-color': string;
  '--text-color': string;
  '--primary-color': string;
  '--secondary-color': string;
  '--accent-color': string;
  '--border-color': string;
  '--bg-input': string;
}

export interface InitialThemeProps {
  initialTheme: string;
}

export type ConvertionFunc = (value: number, root: number) => number;

export interface PageHeaderProps {
  title: string;
  description?: string;
}
