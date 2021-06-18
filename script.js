"use strict";
// TODO: add alert
alert(
  "Welcome...\n\nEnter a number into the provided field to check its the hidden number or not. \n\nToo High means you missed it by a little margin \nHigh Guess means you are close \nToo Low means you have a bad guess\n\nYou got 20 chances to guess the hidden number\n\n\nEnjoy!!"
);
document.querySelector(".inputvalue").value = "";
let ans = Math.trunc(Math.random() * 21);
let count = 20;
let highScore;
function reset() {
  ans = Math.trunc(Math.random() * 21);
  document.querySelector("body").style.backgroundColor = "rgb(44, 44, 44)";
  document.querySelector(".currentscore").textContent = "20";
  count = 20;
  document.querySelector(".guessBlock p").textContent = "?";
  document.querySelector(".inputvalue").value = "";
  document.querySelector(".guessBlock").style.width = "150px";
  document.querySelector(".highscore").textContent = highScore;
  document.querySelector(".status").textContent = "Start Guessing...";
  document.querySelector(".inputvalue").disabled = false;
}
document.querySelector(".check").addEventListener("click", function () {
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
    document.querySelector(".status").textContent = "Hint: Its less than 20...";
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
      highScore = count - 1;
    } else {
      document.querySelector(".status").textContent = "Too Low...";
    }

    let j = String(count - 1);
    count--;
    document.querySelector(".currentscore").textContent = j;
  }
});

document.querySelector(".again").addEventListener("click", reset);

document.addEventListener("keydown", function (pressedKey) {
  if (pressedKey.key === "Enter") {
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
      if (Number(count) - 1 === 0) {
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector(".status").textContent = "You Lost...";
        document.querySelector(".currentscore").textContent = "0";
        document.querySelector(".check").disabled = true;
        document.querySelector(".inputvalue").disabled = true;
        highScore = 0;
      } else if (modulus(ans, num) <= 5 && modulus(ans, num) !== 0) {
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
        highScore = count - 1;
        document.querySelector(".inputvalue").disabled = true;
      } else {
        document.querySelector(".status").textContent = "Too Low...";
      }

      let j = String(count - 1);
      count--;
      document.querySelector(".currentscore").textContent = j;
    }
  }
});
