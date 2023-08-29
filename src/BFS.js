import position from "./position";

// implementation of breadth first search algorithm for finding the shortest path

export default function bfs(q, end) {
  while (q.length > 0) {
    let positionProcessing = q.shift();
    let arr = positionProcessing.pos;

    if (arr[0] === end[0] && arr[1] === end[1]) return positionProcessing;

    if (arr[0] + 2 < 8 && arr[1] + 1 < 8) {
      q.push(
        position(
          [arr[0] + 2, arr[1] + 1],
          positionProcessing,
          positionProcessing.move + 1
        )
      );
    }

    if (arr[0] + 2 < 8 && arr[1] - 1 >= 0) {
      q.push(
        position(
          [arr[0] + 2, arr[1] - 1],
          positionProcessing,
          positionProcessing.move + 1
        )
      );
    }

    if (arr[0] - 2 >= 0 && arr[1] - 1 >= 0) {
      q.push(
        position(
          [arr[0] - 2, arr[1] - 1],
          positionProcessing,
          positionProcessing.move + 1
        )
      );
    }

    if (arr[0] - 2 >= 0 && arr[1] + 1 < 8) {
      q.push(
        position(
          [arr[0] - 2, arr[1] + 1],
          positionProcessing,
          positionProcessing.move + 1
        )
      );
    }

    if (arr[0] + 1 < 8 && arr[1] - 2 >= 0) {
      q.push(
        position(
          [arr[0] + 1, arr[1] - 2],
          positionProcessing,
          positionProcessing.move + 1
        )
      );
    }

    if (arr[0] - 1 >= 0 && arr[1] - 2 >= 0) {
      q.push(
        position(
          [arr[0] - 1, arr[1] - 2],
          positionProcessing,
          positionProcessing.move + 1
        )
      );
    }

    if (arr[0] + 1 < 8 && arr[1] + 2 < 8) {
      q.push(
        position(
          [arr[0] + 1, arr[1] + 2],
          positionProcessing,
          positionProcessing.move + 1
        )
      );
    }

    if (arr[0] - 1 >= 0 && arr[1] + 2 < 8) {
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
