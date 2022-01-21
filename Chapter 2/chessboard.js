let size = 8;
let chessboard = "";
for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        ((x + y) % 2 == 0) ? chessboard += " " : chessboard += "#";
    }
    chessboard += "\n";
}
console.log(chessboard);