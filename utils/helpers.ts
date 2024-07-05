import { SetStateAction } from 'react'

// Change type any
export const justNumbersFn = (e: any) => {
  if (isNaN(e.key) && e.key !== 'Backspace') {
    e.preventDefault()
  }
}

export const uniqueID = (): string => {
  const id = crypto.randomUUID()

  return id
}

export const handleOnBlur = (
  value: string,
  setState: (value: SetStateAction<string>) => void
) => {
  if (value === '0' || '') {
    setState('16')
  }
}
