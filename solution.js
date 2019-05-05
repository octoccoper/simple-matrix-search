function findWord(text, data) {

  let colNumber = data[0].length;
  let strNumber = data.length;
  let flag = false;

  for (let i = 0; i < strNumber; i++) {

    let currentStr = data[i];
    let reversedStr = currentStr.split("").reverse().join("");

    if (currentStr.indexOf(text) !== -1 || reversedStr.indexOf(text) !== -1) {
      return flag = true;
    }

  }

  for (let m = 0; m < colNumber; m++) {
    let newStr = "";
    let newReversStr = "";
    for (let n = 0; n < strNumber; n++) {
      newStr = newStr + data[n][m];
    }

    newReversStr = newStr.split("").reverse().join("");
    if (newStr.indexOf(text) !== -1 || newReversStr.indexOf(text) !== -1) {
      return flag = true;
    }
  }

  if (!flag) {
    return false;
  } 
}
