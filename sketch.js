var ball,database,position

function setup(){
    database = firebase.database();

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition = database.ref('ball/position');
    ballPosition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown("A")){
        changePosition(-1,0);
    }
    else if(keyDown("D")){
        changePosition(1,0);
    }
    else if(keyDown("W")){
        changePosition(0,-1);
    }
    else if(keyDown("S")){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("ball/position").set({
        'x':position.x+x,
        'y':position.y+y
    })
}

function readPosition(data) {
position = data.val();
ball.x = position.x;
ball.y = position.y;
}

function showError() {
    console.log("hello")
}