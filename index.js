var randomNumber1 = Math.random();
randomNumber1 *= 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random();
randomNumber2 *= 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

document.querySelectorAll("img")[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector(".result").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector(".result").innerHTML = "🚩 Player 2 Wins!";
}
else {
    document.querySelector(".result").textContent = "Draw!";
}