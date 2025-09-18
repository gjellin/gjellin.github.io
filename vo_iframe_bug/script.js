document.getElementById('submitButton').addEventListener('click', function() {
const iframe = document.getElementById('liveRegionIframe');
const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
const liveRegion = iframeDocument.getElementById('liveRegion');
const randomWords = generateRandomWords(10);
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