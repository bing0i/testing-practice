const arrayAnalysis = (arr) => {
  return {
    average:
      arr.reduce((accumulator, currentValue) => accumulator + currentValue) /
      arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

export default arrayAnalysis;
