// Change type any
export const justNumbersFn = (e: any) => {
  if (!Number(e.key) && e.key !== 'Backspace') {
    e.preventDefault();
  }
};
