import "./style.css";
import bfs from "./BFS";
import position from "./position";

function knightMoves(start, end) {
  if (
    start === null ||
    end === null ||
    start[0] < 0 ||
    start[0] > 8 ||
    start[1] < 0 ||
    start[1] > 8 ||
    start.length != 2 ||
    end[0] < 0 ||
    end[0] > 8 ||
    end[1] < 0 ||
    end[1] > 8 ||
    end.length != 2
  )
    return null;

  const q = [];
  q.push(position(start));
  let path = bfs(q, end);

  return `You made it in ${
    path.move
  } moves! Here's your path:\n${reconstructPathInString(path)}`;
}

function reconstructPathInString(path) {
  const xMap = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
  };

  path.pos[0] = xMap[path.pos[0]];
  path.pos[1] = path.pos[1] + 1;
  let pathString = path.pos;

  while (path.parent) {
    path = path.parent;
    path.pos[0] = xMap[path.pos[0]];
    path.pos[1] = path.pos[1] + 1;
    pathString = `${path.pos} -> ${pathString}`;
  }

  return pathString;
}

console.log(knightMoves([0, 0], [0, 2]));
console.log(knightMoves([1, 0], [0, 2]));
