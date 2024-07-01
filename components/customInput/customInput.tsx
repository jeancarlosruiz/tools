import { useId } from "react";
import { CustomInputProps } from "@/types";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { uniqueID } from "@/utils/helpers";
import styles from "./customInput.module.css";
import { Label } from "../ui/label";

function CustomInput({
  id,
  inputValue,
  inputOnchange,
  selectValue,
  selectOnchange,
  selectItemsArr,
  children,
}: CustomInputProps) {
  const reactID = useId();
  const selectId = `${reactID}-select-unit`;

  return (
    <div className={styles.inputWrapper}>
      <Input
        id={id}
        type="number"
        value={inputValue}
        onChange={inputOnchange}
        className={styles.input}
      />
      <Label htmlFor={selectId} className="visually-hidden">
        Unit select
      </Label>
      <Select value={selectValue} onValueChange={selectOnchange}>
        <SelectTrigger
          id={selectId}
          name="unit-select"
          aria-label="Unit Selection Button"
          className={styles.selectTrigger}
        >
          <SelectValue placeholder="Select a convertion" />
        </SelectTrigger>
        <SelectContent className={styles.selectContent}>
          {selectItemsArr &&
            selectItemsArr.map((el) => {
              const id = uniqueID();
              return (
                <SelectItem key={id} value={el} className={styles.selectItem}>
                  {el}
                </SelectItem>
              );
            })}
        </SelectContent>
      </Select>
      {children}
    </div>
  );
}

export default CustomInput;
