"use client";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import copy from "copy-to-clipboard";
import styles from "./pxConvertion.module.css";

const PxConvertion = () => {
  const [root, setRoot] = useState<string>("16");
  const [toBeConverted, setToBeConverted] = useState("px");
  const [unitValue, setUnitValue] = useState<string>("");
  const [convertedSelected, setConvertedSelected] = useState("rem");
  const [result, setResult] = useState<string | number>("");

  const handleOnBlur = (value: string) => {
    if (value === "0" || "") {
      setRoot("16");
    }
  };

  const calcResult = () => {
    if (Number.isNaN(root) || Number.isNaN(unitValue)) return;

    const totalValue: number = Number(unitValue) / Number(root);

    setResult(totalValue);
  };

  const copyToClipboard = () => {
    copy(`${result}rem`);
  };

  useEffect(() => {
    calcResult();
  }, [unitValue]);

  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <div className={styles.rootBox}>
          <Label htmlFor="root-input">
            <strong>Root:</strong>
          </Label>
          <div className={styles.inputWrapper}>
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
      </header>
      <div className={styles.flexWrapper}>
        <div className={styles.inputWrapper}>
          <Select
            value={toBeConverted}
            onValueChange={(value) => setToBeConverted(value)}
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
              <SelectItem value="em" className={styles.selectItem}>
                em
              </SelectItem>
              <SelectItem value="unit-px" className={styles.selectItem}>
                Percentage
              </SelectItem>
            </SelectContent>
          </Select>
          <div className={styles.inputWrapper}>
            {/* Poner el valor elejido */}
            <Label htmlFor="conveter-input" className="visually-hidden">
              <strong>px</strong>
            </Label>
            <Input
              id="conveter-input"
              type="number"
              value={unitValue}
              onChange={(e) => {
                setUnitValue(e.target.value);
                calcResult();
              }}
              className={styles.input}
              disabled={false}
            />
          </div>
        </div>
        <Button size="icon" className={styles.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="20"
            height="20"
            role="img"
            aria-labelledby="switch-icon"
            className={styles.switchIcon}
          >
            <title id="switch-icon">Switch convertion</title>
            <path d="M5.22 14.78a.75.75 0 0 0 1.06-1.06L4.56 12h8.69a.75.75 0 0 0 0-1.5H4.56l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3Zm5.56-6.5a.75.75 0 1 1-1.06-1.06l1.72-1.72H2.75a.75.75 0 0 1 0-1.5h8.69L9.72 2.28a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3Z"></path>
          </svg>
        </Button>
        <div className={styles.inputWrapper}>
          <Select
            value={convertedSelected}
            onValueChange={(value) => setConvertedSelected(value)}
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
              <SelectItem value="em" className={styles.selectItem}>
                em
              </SelectItem>
              <SelectItem value="unit-px" className={styles.selectItem}>
                Percentage
              </SelectItem>
            </SelectContent>
          </Select>
          <div className={styles.inputWrapper}>
            <Label htmlFor="result-input" className="visually-hidden">
              <strong>px</strong>
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    className={`${styles.button} ${styles.copyIcon}`}
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
                </TooltipTrigger>
                <TooltipContent side="right" className={styles.tooltipContent}>
                  <small>
                    <strong>Copy</strong>
                  </small>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Input
              id="result-input"
              type="number"
              className={styles.input}
              value={result}
              onChange={(e) => console.log(e.target.value)}
              readOnly={true}
              // disabled={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PxConvertion;
