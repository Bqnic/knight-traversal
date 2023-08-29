import { xMap } from "./position";
import startSimulation from "./simulation";

export function createChessboard() {
  const chessboard = document.querySelector(".chessboard");

  for (let i = 8; i >= 1; i--) {
    for (let j = 0; j <= 8; j++) {
      if (j === 0) {
        const sideNotation = document.createElement("div");
        sideNotation.classList.add("notation-side");
        sideNotation.textContent = i;
        chessboard.appendChild(sideNotation);
      } else {
        const chessblock = document.createElement("div");
        chessblock.classList.add("chess-block");
        chessblock.id = `${xMap[j]}${i}`;

        if (i % 2 !== 0) {
          if (j % 2 !== 0) chessblock.classList.add("black");
          else chessblock.classList.add("white");
        } else {
          if (j % 2 === 0) chessblock.classList.add("black");
          else chessblock.classList.add("white");
        }

        addListenersToBlocks(chessblock);
        chessboard.appendChild(chessblock);
      }
    }
  }

  for (let i = 0; i <= 8; i++) {
    const notation = document.createElement("div");
    notation.classList.add("notation");
    if (i !== 0) notation.textContent = xMap[i];
    chessboard.appendChild(notation);
  }
}

export function resetChessboard() {
  const chessboard = document.querySelector(".chessboard");
  while (chessboard.firstChild) chessboard.removeChild(chessboard.firstChild);

  createChessboard();
}

export function resetPathText() {
  const pathText = document.querySelector(".path-text");
  while (pathText.firstChild) pathText.removeChild(pathText.firstChild);
}

let knightActive = true;
let startPos = null;
let endPos = null;

function addListenersToBlocks(chessBlock) {
  const knightIcon = document.createElement("img");
  knightIcon.src = "images/chess-knight.svg";
  knightIcon.alt = "K";

  const flagIcon = document.createElement("img");
  flagIcon.src = "images/flag-checkered.svg";
  flagIcon.alt = "End";

  chessBlock.addEventListener("mouseenter", () => {
    if (knightActive === true) {
      chessBlock.appendChild(knightIcon);
    } else if (knightActive === false && !chessBlock.firstChild)
      chessBlock.appendChild(flagIcon);
  });

  chessBlock.addEventListener("mouseleave", () => {
    if (knightActive === true) chessBlock.removeChild(knightIcon);
    else if (knightActive === false && chessBlock.firstChild === flagIcon)
      chessBlock.removeChild(flagIcon);
  });

  chessBlock.addEventListener("click", () => {
    if (knightActive === true) {
      chessBlock.appendChild(knightIcon);
      startPos = chessBlock.id;
      knightActive = false;
    } else if (knightActive === false && chessBlock.firstChild !== knightIcon) {
      chessBlock.appendChild(flagIcon);
      knightActive = true;
      endPos = chessBlock.id;

      startSimulation(startPos, endPos);
    }
  });
}
