noseX = 0;
noseY = 0;
headX = 0;
headY = 0;
function preload(){
    mustache = loadImage("https://i.postimg.cc/RhCgMbGW/mustache.png");
    hair = loadImage("https://i.postimg.cc/J0wPXz1B/men-hair.png");
    glass = loadImage("https://i.postimg.cc/26xt10dc/glasses.png");
    bow_tie = loadImage("https://i.postimg.cc/BbTxgvQM/Untitled-1.png");
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        //nose
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.x;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        //head
        headX = results[0].pose.leftEar.x;
        headY = results[0].pose.leftEar.y;
        console.log("head x =" + headX);
        console.log("head y =" + headY);
        //
    }
}
function draw(){
    image(video, 0, 0, 600, 500);
    image(mustache, headX-95, headY, 70, 70,);
    image(hair, headX-135, headY-120, 140, 140)
    image(glass, headX-95, headY-35, 70, 70);
    image(bow_tie,headX-95, headY+50, 70, 40,)

}
//Notes: Do the last two filters and figure out how to activate with a button