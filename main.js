
difference=0
rightWristX=0
leftWristX=0
function setup(){
    video=createCapture(VIDEO)
    video.size(550,500)
    
    canvas=createCanvas(500,400)
    canvas.position(570,130)

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotposes)
}
function modelLoaded(){
    console.log("poseNet is initialized")
}



function gotposes(results){
if(results.length>0){
    console.log(results)

    leftWristX=results[0].pose.leftWrist.x
    rightWristX=results[0].pose.rightWrist.x
    difference=floor(leftWristX- rightWristX)
    console.log(" leftWrist x "+ leftWristX + "rightWrist x" + rightWristX +"difference" + difference)
}
}

function draw(){
    background( "#808080")
    document.getElementById("TEXT_sides").innerHTML="width and height of the TEXT will be="+difference
    fill('#4C329F')
    textSize(difference)
    text('Family', 10,60)

}