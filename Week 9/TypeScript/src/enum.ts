// Final value stored at runtime is still a number [0,1,2,3]
enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right,  // 3
}
// Also give values to it 
enum Direction2{
    Up="up",
    Down="down" ,
    Left="left" ,
    Right="right"
}

enum Direction3{
   Up=1,       // start numbering from 1
  Down,  
  Left,   
  Right,
}
function doSomething(keyPressed: Direction) {
  if (keyPressed == Direction.Up) {
  }
}

doSomething(Direction.Up);
doSomething(Direction.Down);
console.log(Direction.Up);
console.log(Direction.Down);