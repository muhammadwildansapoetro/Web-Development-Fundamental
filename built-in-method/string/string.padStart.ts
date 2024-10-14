/* String.prototype.padStart()

The padStart() method of String values pads this string with another string 
(multiple times, if needed) until the resulting string reaches the given length. 

The padding is applied from the start of this string.

Syntax:
    padStart(targetLength)
    padStart(targetLength, padString)

Parameters:

targetLength
    The length of the resulting string once the current str has been padded. 
    If the value is less than or equal to str.length, then str is returned as-is.

padString (Optional)
    The string to pad the current str with. 
    If padString is too long to stay within the targetLength, 
    it will be truncated from the end. 
    The default value is the unicode "space" character (U+0020).

Return value
    A String of the specified targetLength with padString applied from the start.

*/

const str7 = '5';

console.log(str7.padStart(2, '0'));
// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: "************5581"