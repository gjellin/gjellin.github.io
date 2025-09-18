document.getElementById('submitButton').addEventListener('click', function() {
  
const liveRegion = document.getElementById('liveRegion');
const randomWords = generateRandomWords(3);
liveRegion.textContent = randomWords.join(' ');
});
function generateRandomWords(num) {
const words = [
'apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon',
'mango', 'nectarine', 'orange', 'papaya', 'quince', 'raspberry', 'strawberry', 'tangerine', 'ugli', 'vanilla'
];
let randomWords = [];
for (let i = 0; i < num; i++) {
const randomIndex = Math.floor(Math.random() * words.length);
randomWords.push(words[randomIndex]);
}
return randomWords;


}