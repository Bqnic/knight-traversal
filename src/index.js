import "./style.css";
import { createChessboard } from "./chessboard";

// First a chessboard is created
// Upon creating chessboard assign event listeners to each of the 64 blocks
// assign unique ID to each of the 64 blocks

// When both knight and end position are assigned simulation is called
// Simulation calls the bfs algorithm which returns the array of shortest moves
// After that, the path is animated and shown on chessboard
// Upon clicking reset button, the chessboard is reset and you can play again

createChessboard();
