const caesarCipher = (str, key) => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    let newCharCode = charCode - key;
    switch (true) {
      case charCode >= 65 && charCode <= 90:
        if (newCharCode < 65) {
          newCharCode = 90 - (65 - newCharCode) + 1;
        } else if (newCharCode > 90) {
          newCharCode = 65 + (newCharCode - 90) - 1;
        }
        break;
      case charCode >= 97 && charCode <= 122:
        if (newCharCode < 97) {
          newCharCode = 122 - (97 - newCharCode) + 1;
        } else if (newCharCode > 122) {
          newCharCode = 97 + (newCharCode - 122) - 1;
        }
        break;
      default:
        newCharCode = charCode;
        break;
    }

    newStr = newStr.concat(String.fromCharCode(newCharCode));
  }

  return newStr;
};

export default caesarCipher;
