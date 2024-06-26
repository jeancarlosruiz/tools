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
import { uniqueID } from '@/utils/helpers';

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
        onChange={inputOnchange}
        type='number'
        className={styles.input}
      />
      <Select value={selectValue} onValueChange={selectOnchange}>
        <SelectTrigger className={styles.selectTrigger}>
          <SelectValue placeholder='Select a convertion' />
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
