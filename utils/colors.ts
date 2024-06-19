import { ThemeColors } from '@/types';

export const LIGHT_THEME: ThemeColors = {
  '--bg-color': 'var(--clr-white-400)',
  '--text-color': 'var(--clr-black-800)',
  '--primary-color': 'var(--clr-green-700)',
  '--secondary-color': 'var(--clr-green-400)',
  '--accent-color': 'var(--clr-blue-100)',
  '--border-color': 'var(--clr-black-400)',
  '--bg-input': 'var(--clr-white-500)',
};

export const DARK_THEME: ThemeColors = {
  '--bg-color': 'var(--clr-black-800)',
  '--text-color': 'var(--clr-white-500)',
  '--primary-color': 'var(--clr-green-600)',
  '--secondary-color': 'var(--clr-blue-100)',
  '--accent-color': 'var(--clr-green-500)',
  '--border-color': 'var(--clr-black-400)',
  '--bg-input': 'var(--clr-black-700)',
};
