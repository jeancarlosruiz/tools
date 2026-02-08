import { ThemeColors } from '@/types';

export const LIGHT_THEME: ThemeColors = {
  '--bg-color': 'oklch(1 0 0)',
  '--text-color': 'oklch(0.145 0 0)',
  '--primary-color': 'var(--teal)',
  '--secondary-color': 'var(--teal-light)',
  '--accent-color': 'var(--teal-dark)',
  '--border-color': 'oklch(0.922 0 0)',
  '--bg-input': 'oklch(0.97 0 0)',
  '--select-item-hover': 'oklch(0.97 0 0 / 0.5)',
};

export const DARK_THEME: ThemeColors = {
  '--bg-color': 'var(--zinc-tinted-900)',
  '--text-color': 'var(--text-primary)',
  '--primary-color': 'var(--teal)',
  '--secondary-color': 'var(--teal-light)',
  '--accent-color': 'var(--teal-dark)',
  '--border-color': 'var(--zinc-tinted-700)',
  '--bg-input': 'var(--zinc-tinted-800)',
  '--select-item-hover': 'oklch(0.225 0.01 200 / 0.5)',
};
