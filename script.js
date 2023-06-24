function rot13(encodedString) {
  let decodedString = "";

  for (let i = 0; i < encodedString.length; i++) {
    const charCode = encodedString.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      let decodedCharCode = charCode - 13;

      if (decodedCharCode < 65) {
        decodedCharCode += 26;
      }

      decodedString += String.fromCharCode(decodedCharCode);
    } else {
      decodedString += encodedString.charAt(i);
    }
  }

  return decodedString;
}

// Example usage
const encodedString = "EBG13 rknzcyr.";
const decodedString = rot13(encodedString);
console.log(decodedString); // "ROT13 example."
