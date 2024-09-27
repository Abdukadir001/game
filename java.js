let randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.querySelector('#guessInput')
const sumbitBtn = document.querySelector('#sumbitBtn')
const result = document.querySelector('#result')

sumbitBtn.addEventListener('click', () => {
   const userGuess  = Number(guessInput.value)


   if (!userGuess|| userGuess < 1 || userGuess > 100) {
      result.innerText = 'Введите число от 1 до 100'
      
   } 
   else if (userGuess === randomNumber) {
      result.innerText = 'Поздравляю! Вы угадалb число ✅'
      setTimeout(() => {
          randomNumber = Math.floor(Math.random() * 100) + 1
          result.innerText = 'Згаданнле число обновлено! Угадайте снова🥳'
      }, 3000);
   }
   else if (userGuess < randomNumber) {
      result.innerText = 'Загаданное число больше 📈'
   }
   else{
      result.innerText = 'Загаданное число меньше 📉'
   }
})