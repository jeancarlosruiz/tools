import { Label } from '../ui/label'
import { Input } from '../ui/input'
import styles from './root.module.css'
import { RootProps } from '@/types'
const Root = ({ root, onchange, onblur }: RootProps) => {
  return (
    <div className={styles.rootBox}>
      <Label htmlFor="root-input">
        <strong>Root:</strong>
      </Label>
      <div className={styles.inputWrapper}>
        <Input
          type="number"
          id="root-input"
          value={root}
          onChange={onchange}
          onBlur={onblur}
          className={styles.rootInput}
        />
        <span>
          <strong>px</strong>
        </span>
      </div>
    </div>
  )
}

export default Root
