console.log("Welcome To Tic Tac Toe Game");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";
let winner = false;

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
//check for win
const checkWin = () => {
  let a = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
]

  let bt = document.getElementsByClassName("boxtext");
  a.forEach((e) => {
    if (
      bt[e[0]].innerText === bt[e[1]].innerText &&
      bt[e[2]].innerText === bt[e[1]].innerText &&
      bt[e[0]].innerText !== ""
    ) {
      let a = document.querySelector("#info");
      a.style.color = "rgb(245,0,0)";
      document.querySelector("#reset").style.backgroundColor = "rgb(245,0,0)"
      document.querySelector("#info").innerText = bt[e[0]].innerText + " Wins";
      winner = true;
      document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      document.querySelector(".line").style.width = "20vw";
    }
  });
};

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let btext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (btext.innerText === "") {
      btext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      console.log(winner);
      if (winner == false) {
        console.log("Hii66");
        console.log(document.getElementById("info").innerText);
        document.getElementById("info").innerText = "Turn for " + turn;
      }
    }
  });
});
//Reset Logic
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    winner = false;
    document.querySelector(".line").style.width = "0vw";
    let a = document.querySelector("#info");
    a.style.color = "rgb(38, 5, 70)";
    document.querySelector("#reset").style.backgroundColor = "rgb(97, 224, 12)"
    document.getElementById("info").innerText  = "Turn for " + turn;
})
