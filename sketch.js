var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "orange";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "pink";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "green";
   
    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "blue";

    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = "red";
    ball.setVelocity(4,9);

   

}

function draw() {
    background(rgb(169,169,169));

    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if(ball.isTouching(block1) &&  ball.bounceOff(block1)){

        ball.shapeColor = "orange";
        music.play();
    }

    if(block2.isTouching(ball)){

        ball.shapeColor = "pink";
        ball.setVelocity(0,0);
        music.stop();
    }

    if(ball.isTouching(block3) &&  ball.bounceOff(block3)){

        ball.shapeColor = "green";
    }

    if(ball.isTouching(block4) &&  ball.bounceOff(block4)){

        ball.shapeColor = "blue";
    }
    drawSprites();
}
