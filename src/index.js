import "./style.css";
import bfs from "./BFS";
import position from "./position";

function knightMoves(start, end) {
  if (
    start === null ||
    end === null ||
    start[0] < 1 ||
    start[0] > 8 ||
    start[1] < 1 ||
    start[1] > 8 ||
    start.length != 2 ||
    end[0] < 1 ||
    end[0] > 8 ||
    end[1] < 1 ||
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
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
  };

  path.pos[0] = xMap[path.pos[0]];
  let pathString = path.pos;

  while (path.parent) {
    path = path.parent;
    path.pos[0] = xMap[path.pos[0]];
    pathString = `${path.pos} -> ${pathString}`;
  }

  return pathString;
}

console.log(knightMoves([1, 1], [8, 8]));
