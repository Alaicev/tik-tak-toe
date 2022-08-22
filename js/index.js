const area = document.querySelector(".area");
const btnRes = document.querySelector(".res");
const boxes = document.querySelectorAll(".box");
const player = document.querySelector(".player");
const playWin = document.querySelector(".player-win");
const win = document.querySelector(".win");
const close = document.querySelector(".close");
const winBack = document.querySelector("body");
const points = document.querySelector(".points");

let result = "";
let move = 0;

area.addEventListener("click", (even) => {
  if (even.target.classList.contains("box")) {
    if (even.target.innerHTML == "") {
      if (move % 2 === 0) {
        even.target.innerHTML = "X";
        even.target.classList.add("click");
        player.innerHTML = "O";
        move++;
      } else {
        even.target.innerHTML = "O";
        player.innerHTML = "X";
        even.target.classList.add("click");
        move++;
      }
    }
    // move % 2 === 0? even.target.innerHTML = "X": even.target.innerHTML = "0"
    // move % 2 === 0? player.innerHTML = "0": player.innerHTML = "X"
    console.log(move);
    check();
  }
});

const check = () => {
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0]].innerHTML == "X" &&
      boxes[arr[i][1]].innerHTML == "X" &&
      boxes[arr[i][2]].innerHTML == "X"
    ) {
      result = "X";
      prepareResult(result);
    }
    if (
      boxes[arr[i][0]].innerHTML == "O" &&
      boxes[arr[i][1]].innerHTML == "O" &&
      boxes[arr[i][2]].innerHTML == "O"
    ) {
      result = "O";
      prepareResult(result);
    }
  }
};

const clear = () => {
  boxes.forEach((element) => {
    element.innerHTML = "";
    element.classList.remove("click");
    player.innerHTML = "X";
    move = 0;
  });
};

btnRes.addEventListener("click", clear);

const prepareResult = (winner) => {
  playWin.innerHTML = `${winner}`;
  points.innerHTML = move;
  winBack.classList.add("back");
  win.classList.add("win-go");
};

close.addEventListener("click", () => {
  win.classList.remove("win-go");
  winBack.classList.remove("back");
  clear();
});
