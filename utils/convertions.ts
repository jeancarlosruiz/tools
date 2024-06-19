import { ConvertionFunc } from '@/types/index';

const convertPxToRem = (px: number, root: number): number => px / root;
const convertRemToPx = (rem: number, root: number): number => rem * root;
const convertPxToEm = (px: number, root: number): number => px / root;
const convertEmToPx = (em: number, root: number): number => em * root;
const convertPxToPerc = (px: number, root: number): number => (px / root) * 100;
const convertPercToPx = (perc: number, root: number): number =>
  (perc * root) / 100;

export const convertionFunctions: { [key: string]: ConvertionFunc } = {
  'px:rem': convertPxToRem,
  'rem:px': convertRemToPx,
  'px:em': convertPxToEm,
  'em:px': convertEmToPx,
  'px:%': convertPxToPerc,
  '%:px': convertPercToPx,
};
