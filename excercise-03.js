/* 
Write a program that create a string that represent a 8 x 8 grid using a new line character to separate lines.
at each position of the grid there is either a "" (space) or a "#" character.

Pass then the string to the console to output the chess board-like grid.
*/
let result = "";
for (let y = 0; y < 8; y++) {
  for (let x = 0; x < 8; x++) {      
    (x + y) % 2 === 0 ? result += " " : result += "#";
  }
  result += "\n";
}

console.log(result);

/*
# # # #
 # # # #
# # # # 
 # # # #
*/
