var fairy = 0;
var dead = false;
var exit = false;
var user = prompt("You wake up in the middle of a forrest, do you head north, south, east, or west?");
user.toLowerCase();
switch(user){
    case 'north':
        console.log('You find nothing!');
        break;
    case 'south':
        console.log('You find a fairy that will resurrect you!');
        fairy = fairy++;
        break;
    case 'east':
        console.log('A troll kills you');
        dead = true;
        break;
    case 'west':
        console.log('You find the exit, congrats!');
        exit= true;
        break;
    default:
        console.log('You are killed by a wizard who says "That was not a direction"');
};
if (!dead && exit){
    console.log("You win!")
}
else if( dead || !exit){
    console.log("You lose")
}

