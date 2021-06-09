var hypnoticBall, database;
var position;
var gameState=0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  
  var cgs=new GameState(); 
  cgs.getState();
  cgs.start();
}

function draw(){
 
  
   
    drawSprites();
  
}




