enum Direction {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right",
}


function move(direction: Direction) {
    if(direction == Direction.Up) {
        console.log("Moving up!");
    }
}

move(Direction.Up); 
