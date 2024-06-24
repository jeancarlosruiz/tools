import { CustomInputProps } from '@/types';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import styles from './customInput.module.css';

function CustomInput({
  id,
  inputValue,
  inputOnchange,
  selectValue,
  selectOnchange,
  selectItemsArr,
  children,
}: CustomInputProps) {
  return (
    <div className={styles.inputWrapper}>
      <Input
        id={id}
        value={inputValue}
        onClick={inputOnchange}
        type='number'
        className={styles.input}
      />
      <Select value={selectValue} onValueChange={selectOnchange}>
        <SelectTrigger className={styles.selectTrigger}>
          <SelectValue placeholder='Select a convertion' />
        </SelectTrigger>
        <SelectContent className={styles.selectContent}>
          {selectItemsArr &&
            selectItemsArr.map((el) => (
              <SelectItem key={el} value={el} className={styles.selectItem}>
                {el}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
      {children}
    </div>
  );
}

export default CustomInput;
