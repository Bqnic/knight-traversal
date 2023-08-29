import { xMapReverse } from "./position";
import knightMoves from "./BFS";
import { resetChessboard, resetPathText } from "./chessboard";

export default function startSimulation(startPos, endPos) {
  document.querySelector(".chessboard").classList.add("unclickable");

  let startArr = startPos.split("");
  let endArr = endPos.split("");

  startArr[0] = xMapReverse[startArr[0]];
  endArr[0] = xMapReverse[endArr[0]];

  startArr[1] = Number(startArr[1]);
  endArr[1] = Number(endArr[1]);

  let pathArr = knightMoves(startArr, endArr);
  pathArr.reverse();

  animatePath(pathArr);
}

async function animatePath(pathArr) {
  const delay = 1000;

  const pathText = document.querySelector(".path-text");
  pathText.appendChild(document.createElement("p")).textContent = `Path in ${
    pathArr.length - 1
  } moves:`;

  if (pathArr.length === 2) {
    const chessBlock = document.getElementById(pathArr[0]);
    const nextChessBlock = document.getElementById(pathArr[1]);

    const knightIcon = document.createElement("img");
    knightIcon.src = "images/chess-knight.svg";
    knightIcon.alt = "K";

    await new Promise((resolve) => setTimeout(resolve, delay));

    chessBlock.removeChild(chessBlock.firstChild);
    nextChessBlock.removeChild(nextChessBlock.firstChild);
    nextChessBlock.appendChild(knightIcon);

    chessBlock.appendChild(document.createElement("p")).textContent = "1";
    pathText.appendChild(
      document.createElement("p")
    ).textContent = `1. ${pathArr[0]}`;
  }

  for (let i = 1; i < pathArr.length - 1; i++) {
    const prevPosition = pathArr[i - 1];
    const currentPosition = pathArr[i];
    const nextPosition = pathArr[i + 1];

    const prevChessBlock = document.getElementById(prevPosition);
    const chessBlock = document.getElementById(currentPosition);
    const nextChessBlock = document.getElementById(nextPosition);

    const circleIcon = document.createElement("img");
    circleIcon.src = "images/circle-outline.svg";
    circleIcon.alt = ".";

    const knightIcon = document.createElement("img");
    knightIcon.src = "images/chess-knight.svg";
    knightIcon.alt = "K";

    chessBlock.appendChild(circleIcon);

    if (nextPosition) {
      await new Promise((resolve) => setTimeout(resolve, delay));

      prevChessBlock.removeChild(prevChessBlock.firstChild);
      chessBlock.removeChild(circleIcon);

      prevChessBlock.appendChild(document.createElement("p")).textContent = i;
      pathText.appendChild(
        document.createElement("p")
      ).textContent = `${i}. ${pathArr[i]}`;
      chessBlock.appendChild(knightIcon);
    }

    if (nextChessBlock.firstChild) {
      await new Promise((resolve) => setTimeout(resolve, delay));

      nextChessBlock.removeChild(nextChessBlock.firstChild);
      nextChessBlock.appendChild(knightIcon);
      chessBlock.appendChild(document.createElement("p")).textContent = i + 1;
      pathText.appendChild(document.createElement("p")).textContent = `${
        i + 1
      }. ${pathArr[i + 1]}`;
    }
  }

  const restartButton = document.createElement("button");
  restartButton.id = "restart";
  restartButton.textContent = "Restart";

  restartButton.addEventListener("click", () => {
    resetChessboard();
    resetPathText();
    document.querySelector(".chessboard").classList.remove("unclickable");
  });

  pathText.appendChild(restartButton);
}
