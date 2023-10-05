function convertToRoman(num) {
  // Define arrays for Roman numeral symbols and their corresponding values
  const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let roman = "";

  // Loop through the values and build the Roman numeral
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      roman += romanNumerals[i];
      num -= values[i];
    }
  }

  return roman;
}

console.log(convertToRoman(36)); // Should return "XXXVI"
console.log(convertToRoman(2)); // Should return "II"
console.log(convertToRoman(3)); // Should return "III"
console.log(convertToRoman(4)); // Should return "IV"
console.log(convertToRoman(5)); // Should return "V"
console.log(convertToRoman(9)); // Should return "IX"
console.log(convertToRoman(12)); // Should return "XII"
console.log(convertToRoman(16)); // Should return "XVI"
console.log(convertToRoman(29)); // Should return "XXIX"
console.log(convertToRoman(44)); // Should return "XLIV"
console.log(convertToRoman(45)); // Should return "XLV"
console.log(convertToRoman(68)); // Should return "LXVIII"
console.log(convertToRoman(83)); // Should return "LXXXIII"
console.log(convertToRoman(97)); // Should return "XCVII"
console.log(convertToRoman(99)); // Should return "XCIX"
console.log(convertToRoman(400)); // Should return "CD"
console.log(convertToRoman(500)); // Should return "D"
console.log(convertToRoman(501)); // Should return "DI"
console.log(convertToRoman(649)); // Should return "DCXLIX"
console.log(convertToRoman(798)); // Should return "DCCXCVIII"
console.log(convertToRoman(891)); // Should return "DCCCXCI"
console.log(convertToRoman(1000)); // Should return "M"
console.log(convertToRoman(1004)); // Should return "MIV"
console.log(convertToRoman(1006)); // Should return "MVI"
console.log(convertToRoman(1023)); // Should return "MXXIII"
console.log(convertToRoman(2014)); // Should return "MMXIV"
console.log(convertToRoman(3999)); // Should return "MMMCMXCIX"