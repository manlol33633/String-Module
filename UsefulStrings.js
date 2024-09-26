// Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

function scramble(str) {
  var scr = [];
  var org = str.split('');
  for (var i of org) {
    let randInd = math.floor(math.random() * org.length - 1);
    scr.push(org.splice(randInd, 1));
  }

  return scr.join('');
}

function removeOddChars(str) {
  return str.split('').filter((char, index) => index % 2 === 0).join('');
}

function pigLatin(str) {
  return str.split(' ').map(word => {
    return word.slice(1) + word[0] + 'ay';
  }).join(' ');
}

function isPalindrome(str) {
  return str === reverseString(str);
}

function isAnagram(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

function shuffle(str) {
  let sub1 = str.substring(0, str.length / 2).split('');
  let sub2 = str.substring(str.length / 2).split('');
  let shuffled = [];
  while (sub1.length > 0 && sub2.length > 0) {
    shuffled.push(sub1.shift());
    shuffled.push(sub2.shift());
  }
  return shuffled.join('');
}

function makePalindrome(str) {
  return str + reverseString(str);
}

function reverseShuffle() {
  return reverseString(shuffle(str));
}

// Export the functions as a module
module.exports = {
  capitalizeFirstLetter,
  reverseString,
  scramble,
  removeOddChars,
  pigLatin,
  isPalindrome,
  isAnagram,
  shuffle,
  makePalindrome,
  reverseShuffle
};
