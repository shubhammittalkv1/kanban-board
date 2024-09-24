/* Below is the code for the Get Random Color function */
const getRandomColor = () => {
    let r = Math.floor(Math.random() * 100);
    let g = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);

    // Convert RGB to hex
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};
export default getRandomColor;
/* End of the above code */