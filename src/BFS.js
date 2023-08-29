import { position } from "./position";
import { xMap } from "./position";

// implementation of breadth first search algorithm for finding the shortest path

export default function knightMoves(start, end) {
  const q = [];
  q.push(position(start));
  let path = bfs(q, end);

  return reconstructPath(path);
}

function reconstructPath(path) {
  path.pos[0] = xMap[path.pos[0]];
  let pathArr = [];

  let pathString = path.pos[0] + path.pos[1];
  pathArr.push(pathString);

  while (path.parent) {
    path = path.parent;
    path.pos[0] = xMap[path.pos[0]];
    let pathString = path.pos[0] + path.pos[1];
    pathArr.push(pathString);
  }

  return pathArr;
}

function bfs(q, end) {
  while (q.length > 0) {
    let positionProcessing = q.shift();
    let arr = positionProcessing.pos;

    if (arr[0] === end[0] && arr[1] === end[1]) return positionProcessing;

    if (arr[0] + 2 <= 8 && arr[1] + 1 <= 8) {
      q.push(
        position(
          [arr[0] + 2, arr[1] + 1],
          positionProcessing,
          positionProcessing.move + 1
        )
      );
    }

    if (arr[0] + 2 <= 8 && arr[1] - 1 >= 1) {
      q.push(
        position(
          [arr[0] + 2, arr[1] - 1],
          positionProcessing,
          positionProcessing.move + 1
        )
      );
    }

    if (arr[0] - 2 >= 1 && arr[1] - 1 >= 1) {
      q.push(
        position(
          [arr[0] - 2, arr[1] - 1],
          positionProcessing,
          positionProcessing.move + 1
        )
      );
    }

    if (arr[0] - 2 >= 1 && arr[1] + 1 <= 8) {
      q.push(
        position(
          [arr[0] - 2, arr[1] + 1],
          positionProcessing,
          positionProcessing.move + 1
        )
      );
    }

    if (arr[0] + 1 <= 8 && arr[1] - 2 >= 1) {
      q.push(
        position(
          [arr[0] + 1, arr[1] - 2],
          positionProcessing,
          positionProcessing.move + 1
        )
      );
    }

    if (arr[0] - 1 >= 1 && arr[1] - 2 >= 1) {
      q.push(
        position(
          [arr[0] - 1, arr[1] - 2],
          positionProcessing,
          positionProcessing.move + 1
        )
      );
    }

    if (arr[0] + 1 <= 8 && arr[1] + 2 <= 8) {
      q.push(
        position(
          [arr[0] + 1, arr[1] + 2],
          positionProcessing,
          positionProcessing.move + 1
        )
      );
    }

    if (arr[0] - 1 >= 1 && arr[1] + 2 <= 8) {
      q.push(
        position(
          [arr[0] - 1, arr[1] + 2],
          positionProcessing,
          positionProcessing.move + 1
        )
      );
    }
  }
}
