const useful = require('./UsefulStrings');

test('should return a string with the first letter capitalized', () => {
  expect(useful.capitalize('hello')).toBe('Hello');
});

test('should return a string with the first letter capitalized', () => {
  expect(useful.capitalize('crazy')).toBe('Crazy');
});

test('should return a string with the first letter capitalized', () => {
  expect(useful.capitalize('pot luck')).toBe('Pot Luck');
});

test('should return a string with it\'s characters reversed', () => {
  expect(useful.reverse('goodbye')).toBe('eybdoog');
});

test('should return a string with it\'s characters reversed', () => {
  expect(useful.reverse('Visual Studio')).toBe('odutS lausiV');
});

test('should return a string with it\'s characters reversed', () => {
  expect(useful.reverse('Obessesion')).toBe('noissebeO');
});

test('should return a string with it\'s characters scrambled', () => {
  expect(useful.scramble('parseInt')).not.toBe('parseInt');
});

test('should return a string with it\'s characters scrambled', () => {
  expect(useful.scramble('NFT')).not.toBe('NFT');
});

test('should return a string with it\'s characters scrambled', () => {
  expect(useful.scramble('scramble')).not.toBe('scramble');
});

test('should return a string with odd characters removed', () => {
  expect(useful.removeOddChars('bird view')).toBe('brve');
});

test('should return a string with odd characters removed', () => {
  expect(useful.removeOddChars('We had a nice game today')).toBe('W a ics ae oay');
});

test('should return a string with odd characters removed', () => {
  expect(useful.removeOddChars('Socratic Seminar')).toBe('oai eia');
});

test('should return a string in pig latin', () => {
  expect(useful.pigLatin('dangerously funny')).toBe('angerouslyday unnyfay');
});

test('should return a string in pig latin', () => {
  expect(useful.pigLatin('ratatouille')).toBe('atatouilleray');
});

test('should return a string in pig latin', () => {
  expect(useful.pigLatin('Burning the midnight oil')).toBe('urningBay hetay idnightmay iloay');
});

test('should return true if the string is a palindrome', () => {
  expect(useful.isPalindrome('racecar')).toBe(true);
});

test('should return true if the string is a palindrome', () => {
  expect(useful.isPalindrome('madam')).toBe(true);
});

test('should return true if the string is a palindrome', () => {
  expect(useful.isPalindrome('crayon')).not.toBe(true);
});

test('should return true if the strings are anagrams', () => {
  expect(useful.isAnagram('listen', 'silent')).toBe(true);
});

test('should return true if the strings are anagrams', () => {
  expect(useful.isAnagram('triangle', 'integral')).toBe(true);
});

test('should return true if the strings are anagrams', () => {
  expect(useful.isAnagram('sadder', 'dreads')).toBe(true);
});

test('should return a string with it\'s characters shuffled', () => {
  expect(useful.shuffle('Github')).toBe('Gtihub');
});

test('should return a string with it\'s characters shuffled', () => {
  expect(useful.shuffle('Convoluted')).toBe('Covnoluted');
});

test('should return a string with it\'s characters shuffled', () => {
  expect(useful.shuffle('shuffle')).toBe('suhflfe');
});

test('should return a string with it\'s characters repeated', () => {
  expect(useful.makePalindrome('hello')).toBe('helloolleh');
});

test('should return a string with it\'s characters repeated', () => {
  expect(useful.makePalindrome('Nodejs')).toBe('NodejsjsedoN');
});

test('should return a string with it\'s characters repeated', () => {
  expect(useful.makePalindrome('Negative')).toBe('NegativeevitaN');
});

test('should return a string with it\'s characters reversed and shuffled', () => {
  expect(useful.reverseShuffle('Kinesthetics')).toBe('scitsehtineK');
});

test('should return a string with it\'s characters reversed and shuffled', () => {
  expect(useful.reverseShuffle('Palindrome')).toBe('emordnilaP');
});

test('should return a string with it\'s characters reversed and shuffled', () => {
  expect(useful.reverseShuffle('Positive')).toBe('evitisoP');
});