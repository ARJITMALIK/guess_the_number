"use strict";
// TODO: add alert

let ans = Math.trunc(Math.random() * 21);
let count = 20;
let highScore;
document
  .querySelector(".check")
  .addEventListener("click", function () {
    const num = Number(document.querySelector(".inputvalue").value);
    function modulus(ans, num) {
      if (ans > num) {
        return ans - num;
      } else {
        return num - ans;
      }
    }
    if (!num) {
      document.querySelector(".status").textContent =
        "Enter a number to check...";
    } else if (num > 20) {
      document.querySelector(".status").textContent =
        "Hint: Its less than 20...";
    } else {
      if (modulus(ans, num) <= 5 && modulus(ans, num) !== 0) {
        document.querySelector(".status").textContent = "Too High...";
      } else if (modulus(ans, num) <= 7 && modulus(ans, num) !== 0) {
        document.querySelector(".status").textContent = "High Guess...";
      } else if (num === ans) {
        document.querySelector(".status").textContent = "You got it";
        document.querySelector(".guessBlock p").textContent = ans;
        document.querySelector("body").style.backgroundColor = "rgb(0, 251, 0)";
        document.querySelector(".guessBlock").style.width = "100%";
        document.querySelector(".highscore").textContent = count;
        count++;
        highScore = count;
      } else {
        document.querySelector(".status").textContent = "Too Low...";
      }

      let j = String(count - 1);
      count--;
      document.querySelector(".currentscore").textContent = j;
    }
  });

  document.querySelector('.again').addEventListener('click' , function () {
    ans = Math.trunc(Math.random() * 21);
    document.querySelector("body").style.backgroundColor = "rgb(44, 44, 44)";
    document.querySelector(".currentscore").textContent = '20';
    count = 20;
    document.querySelector(".guessBlock p").textContent = '?';
    document.querySelector(".inputvalue").value = '';
    document.querySelector(".guessBlock").style.width = "150px";
    document.querySelector(".highscore").textContent = highScore;

  })

  
