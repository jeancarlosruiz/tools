// Change type any
export const justNumbersFn = (e: any) => {
  if (isNaN(e.key) && e.key !== "Backspace") {
    e.preventDefault();
  }
};
