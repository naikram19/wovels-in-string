//The program recognizes a single vowel.

var cats = [prompt("Enter your sentence:")];
var vowels1 = cats.split();
var vowels = vowels1.map(function(cat1) {
  return cat1.toLowerCase();
});
alert(vowels.length);
