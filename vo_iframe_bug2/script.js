 document.getElementById('updateButton').addEventListener('click', function() {
          const randomWords = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
          const shuffledWords = randomWords.sort(() => 0.5 - Math.random()).slice(0, 3).join(' ');
          document.getElementById('liveRegion').textContent = shuffledWords;
        });