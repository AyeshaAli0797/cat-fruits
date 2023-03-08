var cat
function setup(){

    createCanvas(1000,600)
    cat = createSprite(250,250,50,50)
}

function draw(){

    background("black")
    // cat.velocityX = 5
if(keyDown(LEFT_ARROW)){
    cat.x = cat.x - 5

}

if(keyDown(RIGHT_ARROW)){
    cat.x = cat.x + 5

}

    drawSprites()
}