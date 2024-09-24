/* Below is the code for the Get Turncate Text function */
const getTurncareText = (source, size) => {
  return source.length > size ? source.slice(0, size - 1) + "…" : source;
};
export default getTurncareText;
/* End of the above code */