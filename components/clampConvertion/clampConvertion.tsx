"use client";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import copy from "copy-to-clipboard";

import styles from "./clampConvertion.module.css";

const ClampConvertion = () => {
  const [minWidthUnit, setMinWidthUnit] = useState<string>("px");
  const [minWidth, setMinWidth] = useState<string>("375");
  const [minFontsizeUnit, setMinFontsizeUnit] = useState<string>("px");
  const [minFontsize, setMinFontsize] = useState<string>("30");
  const [maxWidthUnit, setMaxWidthUnit] = useState<string>("px");
  const [maxWidth, setMaxWidth] = useState<string>("768");
  const [maxFontsizeUnit, setMaxFontsizeUnit] = useState<string>("px");
  const [maxFontsize, setMaxFontsize] = useState<string>("48");
  const [clamp, setClamp] = useState<string | undefined>("");
  // const { toast } = useToast();

  const clampGenerator = (
    minVw: number,
    maxVw: number,
    minFs: number,
    maxFs: number,
    rootFs: number = 16
  ) => {
    if ([minVw, maxVw, minFs, maxFs, rootFs].some((el) => !Number(el))) return;

    const minFsRem = minFs / rootFs;
    const maxFsRem = maxFs / rootFs;
    const minWidthRem = minVw / rootFs;
    const maxWidthRem = maxVw / rootFs;

    const slope = (maxFsRem - minFsRem) / (maxWidthRem - minWidthRem);
    const base: number = -minWidthRem * slope + minFsRem;

    const result = `clamp(${minFsRem}rem, ${base.toFixed(4)}rem + ${(
      slope * 100
    ).toFixed(4)}vw, ${maxFsRem}rem)`;

    return result;
  };

  const copyToClipboard = () => {
    copy(`${clamp}`);
    toast("Copied to clipboard.", {
      className: "my-toast",
    });
  };

  useEffect(() => {
    const result = clampGenerator(
      Number(minWidth),
      Number(maxWidth),
      Number(minFontsize),
      Number(maxFontsize)
    );

    setClamp(result);
  }, [minFontsize, minWidth, maxFontsize, maxWidth]);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <Select
            value={minWidthUnit}
            onValueChange={(e) => setMinWidthUnit(e)}
          >
            <SelectTrigger className={styles.selectTrigger}>
              <SelectValue placeholder="Select a convertion" />
            </SelectTrigger>
            <SelectContent className={styles.selectContent}>
              <SelectItem value="px" className={styles.selectItem}>
                px
              </SelectItem>
              <SelectItem value="rem" className={styles.selectItem}>
                rem
              </SelectItem>
            </SelectContent>
          </Select>
          <Label htmlFor="min-width--input">
            <strong>Min width</strong>
          </Label>
          <Input
            id="min-width--input"
            type="number"
            value={minWidth}
            onChange={(e) => setMinWidth(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Select
            value={minFontsizeUnit}
            onValueChange={(e) => setMinFontsizeUnit(e)}
          >
            <SelectTrigger className={styles.selectTrigger}>
              <SelectValue placeholder="Select a convertion" />
            </SelectTrigger>
            <SelectContent className={styles.selectContent}>
              <SelectItem value="px" className={styles.selectItem}>
                px
              </SelectItem>
              <SelectItem value="rem" className={styles.selectItem}>
                rem
              </SelectItem>
            </SelectContent>
          </Select>
          <Label htmlFor="min-width--input">
            <strong>Min font-size</strong>
          </Label>
          <Input
            id="max-width--input"
            type="number"
            value={minFontsize}
            onChange={(e) => setMinFontsize(e.target.value)}
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <Select
            value={maxWidthUnit}
            onValueChange={(e) => setMaxWidthUnit(e)}
          >
            <SelectTrigger className={styles.selectTrigger}>
              <SelectValue placeholder="Select a convertion" />
            </SelectTrigger>
            <SelectContent className={styles.selectContent}>
              <SelectItem value="px" className={styles.selectItem}>
                px
              </SelectItem>
              <SelectItem value="rem" className={styles.selectItem}>
                rem
              </SelectItem>
            </SelectContent>
          </Select>
          <Label htmlFor="min-width--input">
            <strong>Max viewport width</strong>
          </Label>
          <Input
            id="min-width--input"
            type="number"
            value={maxWidth}
            onChange={(e) => setMaxWidth(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Select
            value={maxFontsizeUnit}
            onValueChange={(e) => setMaxFontsizeUnit(e)}
          >
            <SelectTrigger className={styles.selectTrigger}>
              <SelectValue placeholder="Select a convertion" />
            </SelectTrigger>
            <SelectContent className={styles.selectContent}>
              <SelectItem value="px" className={styles.selectItem}>
                px
              </SelectItem>
              <SelectItem value="rem" className={styles.selectItem}>
                rem
              </SelectItem>
            </SelectContent>
          </Select>
          <Label htmlFor="min-width--input">
            <strong>Max font-size</strong>
          </Label>
          <Input
            id="min-width--input"
            type="number"
            value={maxFontsize}
            onChange={(e) => setMaxFontsize(e.target.value)}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.resultWrapper}>
        <Label htmlFor="result-input">
          <strong>Font-size: </strong>
        </Label>
        <div className={styles.clampResultWrapper}>
          <span className={styles.clampResult}>{clamp}</span>
          <Button
            size="icon"
            className={`${styles.copyBtn} ${styles.copyIcon}`}
            onClick={copyToClipboard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="20"
              height="20"
              role="img"
              className={styles.svg}
            >
              <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
              <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClampConvertion;
