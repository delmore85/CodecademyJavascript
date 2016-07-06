// Write your code below!
var run = 0;
var chance = function(){
  for (var i = 0; i < 10; i+=5){
      do{
          run=Math.random();
          console.log(run);
          if (run >= 0.9){
              console.log("10% chance success");
          }
      }
      while(run <= 0.9);
  }
};
chance();

