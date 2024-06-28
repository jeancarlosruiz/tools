"use client";
import { useEffect, useState, useId } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import styles from "./clampConvertion.module.css";
import CustomInput from "@/components/customInput/customInput";
import CodeResult from "../codeResult/codeResult";

const SELECT_ITEMS_VALUES = ["px", "rem"];

const ClampConvertion = () => {
  const [minWidthUnit, setMinWidthUnit] = useState<string>("px");
  const [minWidth, setMinWidth] = useState<string>("375");
  const [minFontsizeUnit, setMinFontsizeUnit] = useState<string>("px");
  const [minFontsize, setMinFontsize] = useState<string>("30");
  const [maxWidthUnit, setMaxWidthUnit] = useState<string>("px");
  const [maxWidth, setMaxWidth] = useState<string>("768");
  const [maxFontsizeUnit, setMaxFontsizeUnit] = useState<string>("px");
  const [maxFontsize, setMaxFontsize] = useState<string>("48");
  const [root, setRoot] = useState<string>("16");
  const [clamp, setClamp] = useState<string | undefined>("");

  // Change any
  const switchValueFn = (unit: string, value: string): any | string => {
    if (!Number(value)) return;

    if (unit === "px") {
      const newValue = Number(value) * Number(root);
      return newValue.toString();
    }

    const newValue = Number(value) / Number(root);
    return newValue.toString();
  };

  const handleOnBlur = (value: string) => {
    if (value === "0" || "") {
      setRoot("16");
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

    const minFsRem = minFontsizeUnit === "px" ? minFs / rootFs : minFs;
    const maxFsRem = maxFontsizeUnit === "px" ? maxFs / rootFs : maxFs;
    const minWidthRem = minWidthUnit === "px" ? minVw / rootFs : minVw;
    const maxWidthRem = maxWidthUnit === "px" ? maxVw / rootFs : maxVw;

    const slope = (maxFsRem - minFsRem) / (maxWidthRem - minWidthRem);
    const base: number = -minWidthRem * slope + minFsRem;

    const result = `clamp(${minFsRem}rem, ${base.toFixed(4)}rem + ${(
      slope * 100
    ).toFixed(4)}vw, ${maxFsRem}rem)`;

    return result;
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
        <Label htmlFor="root-input">
          <strong>Root:</strong>
        </Label>
        <div className={styles.rootWrapper}>
          <Label htmlFor="root-input" className={styles.label}>
            <strong>px</strong>
          </Label>
          <Input
            type="number"
            id="root-input"
            value={root}
            onChange={(e) => setRoot(e.target.value)}
            onBlur={(e) => handleOnBlur(e.target.value)}
            className={styles.rootInput}
          />
        </div>
      </div>
      <div className={styles.wrapper}>
        <Label htmlFor="min-width">
          <strong>Min viewport width:</strong>
        </Label>
        <CustomInput
          id="min-width"
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
        <Label htmlFor="min-fs">
          <strong>Min font-size:</strong>
        </Label>
        <CustomInput
          id="min-fs"
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
        <Label htmlFor="max-width">
          <strong>Max viewport width:</strong>
        </Label>
        <CustomInput
          id="max-width"
          inputValue={maxWidth}
          inputOnchange={(e) => setMaxWidth(e.target.value)}
          selectValue={maxWidthUnit}
          selectOnchange={(e) => {
            setMaxWidthUnit(e);
            const newValue = switchValueFn(e, maxWidth);
            setMaxWidth(newValue);
          }}
          selectItemsArr={SELECT_ITEMS_VALUES}
        />
        <Label htmlFor="max-fs">
          <strong>Max font-size:</strong>
        </Label>
        <CustomInput
          id="max-fs"
          inputValue={maxFontsize}
          inputOnchange={(e) => setMaxFontsize(e.target.value)}
          selectValue={maxFontsizeUnit}
          selectOnchange={(e) => {
            setMaxFontsizeUnit(e);
            const newValue = switchValueFn(e, maxFontsize);
            setMaxFontsize(newValue);
          }}
          selectItemsArr={SELECT_ITEMS_VALUES}
        />
      </div>
      <CodeResult clamp={clamp} />
    </section>
  );
};

export default ClampConvertion;
