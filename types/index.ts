import { ReactNode } from 'react';

export interface ThemeColors {
  '--bg-color': string;
  '--text-color': string;
  '--primary-color': string;
  '--secondary-color': string;
  '--accent-color': string;
  '--border-color': string;
  '--bg-input': string;
  '--select-item-hover': string;
}

export interface InitialThemeProps {
  initialTheme: string;
}

export type ConvertionFunc = (value: number, root: number) => number;

export interface PageHeaderProps {
  title: string;
  description?: string;
}

export interface CustomInputProps {
  id?: string;
  inputValue: string;
  inputOnchange: (e: any) => void;
  selectValue: string;
  selectOnchange: (e: string) => void;
  selectItemsArr: string[];
  children?: ReactNode;
}
