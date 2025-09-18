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
document.addEventListener('DOMContentLoaded', function() {
const iframe = document.getElementById('liveRegionIframe');
iframe.onload = function() {
const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
const submitButton = iframeDocument.getElementById('submitButton');
const liveRegion = iframeDocument.getElementById('liveRegion');
submitButton.addEventListener('click', function() {
const randomWords = generateRandomWords(3);
liveRegion.innerHTML = `<pre tabindex="-1">${randomWords.join(' ')}</pre>`;
});
};
});