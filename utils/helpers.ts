// Change type any
export const justNumbersFn = (e: any) => {
  if (isNaN(e.key) && e.key !== 'Backspace') {
    e.preventDefault();
  }
};

export const uniqueID = (): string => {
  const id = crypto.randomUUID();

  return id;
};
