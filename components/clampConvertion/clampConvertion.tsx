'use client';
import { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import copy from 'copy-to-clipboard';
import { justNumbersFn } from '@/utils/helpers';

import styles from './clampConvertion.module.css';
import CustomInput from '@/app/customInput/customInput';

const SELECT_ITEMS_VALUES = ['px', 'rem'];

const ClampConvertion = () => {
  const [minWidthUnit, setMinWidthUnit] = useState<string>('px');
  const [minWidth, setMinWidth] = useState<string>('375');
  const [minFontsizeUnit, setMinFontsizeUnit] = useState<string>('px');
  const [minFontsize, setMinFontsize] = useState<string>('30');
  const [maxWidthUnit, setMaxWidthUnit] = useState<string>('px');
  const [maxWidth, setMaxWidth] = useState<string>('768');
  const [maxFontsizeUnit, setMaxFontsizeUnit] = useState<string>('px');
  const [maxFontsize, setMaxFontsize] = useState<string>('48');
  const [root, setRoot] = useState<string>('16');
  const [clamp, setClamp] = useState<string | undefined>('');

  // Change any
  const switchValueFn = (unit: string, value: string): any | string => {
    if (!Number(value)) return;

    if (unit === 'px') {
      const newValue = Number(value) * Number(root);
      return newValue.toString();
    }

    const newValue = Number(value) / Number(root);
    return newValue.toString();
  };

  const handleOnBlur = (value: string) => {
    if (value === '0' || '') {
      setRoot('16');
    }
  };

  const clampGenerator = (
    minVw: number,
    maxVw: number,
    minFs: number,
    maxFs: number,
    rootFs: number
  ) => {
    if ([minVw, maxVw, minFs, maxFs, rootFs].some((el) => !Number(el))) return;

    const minFsRem = minFontsizeUnit === 'px' ? minFs / rootFs : minFs;
    const maxFsRem = maxFontsizeUnit === 'px' ? maxFs / rootFs : maxFs;
    const minWidthRem = minWidthUnit === 'px' ? minVw / rootFs : minVw;
    const maxWidthRem = maxWidthUnit === 'px' ? maxVw / rootFs : maxVw;

    const slope = (maxFsRem - minFsRem) / (maxWidthRem - minWidthRem);
    const base: number = -minWidthRem * slope + minFsRem;

    const result = `clamp(${minFsRem}rem, ${base.toFixed(4)}rem + ${(
      slope * 100
    ).toFixed(4)}vw, ${maxFsRem}rem)`;

    return result;
  };

  const copyToClipboard = () => {
    if (!clamp) return;

    copy(`${clamp}`);
    toast('Copied to clipboard.', {
      className: 'my-toast',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          width='16'
          height='16'
        >
          <path
            strokeLinecap='round'
            fill='#012b37'
            d='M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z'
          ></path>
        </svg>
      ),
    });
  };

  useEffect(() => {
    const result = clampGenerator(
      Number(minWidth),
      Number(maxWidth),
      Number(minFontsize),
      Number(maxFontsize),
      Number(root)
    );

    setClamp(result);
  }, [minFontsize, minWidth, maxFontsize, maxWidth, root]);

  return (
    <section className={styles.section}>
      <div className={styles.rootBox}>
        <Label htmlFor='root-input'>
          <strong>Root:</strong>
        </Label>
        <div className={styles.inputWrapper}>
          <Label htmlFor='root-input' className={styles.label}>
            <strong>px</strong>
          </Label>
          <Input
            type='number'
            id='root-input'
            value={root}
            onChange={(e) => setRoot(e.target.value)}
            onBlur={(e) => handleOnBlur(e.target.value)}
            className={styles.rootInput}
          />
        </div>
      </div>
      <div className={styles.wrapper}>
        <Label htmlFor='min-width--input'>
          <strong>Min width:</strong>
        </Label>
        <CustomInput
          inputValue={minWidth}
          inputOnchange={(e) => setMinWidth(e.target.value)}
          selectValue={minWidthUnit}
          selectOnchange={(e) => {
            setMinWidthUnit(e);
            const newValue = switchValueFn(e, minWidth);
            setMinWidth(newValue);
          }}
          selectItemsArr={SELECT_ITEMS_VALUES}
        />
        <Label htmlFor='min-width--input'>
          <strong>Min font-size:</strong>
        </Label>
        <CustomInput
          inputValue={minFontsize}
          inputOnchange={(e) => setMinFontsize(e.target.value)}
          selectValue={minFontsizeUnit}
          selectOnchange={(e) => {
            setMinFontsizeUnit(e);
            const newValue = switchValueFn(e, minFontsize);
            setMinFontsize(newValue);
          }}
          selectItemsArr={SELECT_ITEMS_VALUES}
        />
      </div>
      <div className={styles.wrapper}>
        <Label htmlFor='min-width--input'>
          <strong>Max viewport width:</strong>
        </Label>
        <CustomInput
          inputValue={maxWidth}
          inputOnchange={(e) => setMaxWidthUnit(e.target.value)}
          selectValue={maxWidthUnit}
          selectOnchange={(e) => {
            setMaxWidthUnit(e);
            const newValue = switchValueFn(e, maxWidth);
            setMaxWidth(newValue);
          }}
          selectItemsArr={SELECT_ITEMS_VALUES}
        />
        <Label htmlFor='min-width--input'>
          <strong>Max font-size:</strong>
        </Label>
        <CustomInput
          inputValue={maxFontsize}
          inputOnchange={(e) => setMaxFontsize(e.target.value)}
          selectValue={maxWidthUnit}
          selectOnchange={(e) => {
            setMaxFontsizeUnit(e);
            const newValue = switchValueFn(e, maxFontsize);
            setMaxFontsize(newValue);
          }}
          selectItemsArr={SELECT_ITEMS_VALUES}
        />
      </div>
      <div className={styles.resultWrapper}>
        <Label htmlFor='result-input'>
          <strong>Font-size:</strong>
        </Label>
        <div className={styles.clampResultWrapper}>
          <span className={styles.clampResult}>{clamp}</span>
          <Button
            size='icon'
            className={`${styles.copyBtn} ${styles.copyIcon}`}
            onClick={copyToClipboard}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              width='20'
              height='20'
              role='img'
              className={styles.svg}
            >
              <path d='M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z'></path>
              <path d='M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z'></path>
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClampConvertion;
