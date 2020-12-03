//Create variables here

var dog, dogHappy;
var database;
var foodS, foodStock;

function preload()
{
  loadImage("images/dogImg.png");
  loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  readStock();
  writeStock();

  drawSprites();
  //add styles here

  textSize(18);
  fill(0);
  stroke(5);
  text ("foodStock"+writeStock(foodS),460,-400);
  
}

function readStock(data){
  foodS=data.val();

}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })

}



