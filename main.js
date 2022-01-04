music_1="";
music_2="";
leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;
function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
poseNet=ml5.posenet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw() {
	image(video, 0, 0, 600, 500);
}
function preload(){
	music_2=loadSound("music_2.mp3");	
 music_1=loadSound("music_1.mp3");
}
function draw(){
image(video,0,0,600,500);
}
function gotPoses(results)
{
	if(results.length>0)
	{
		console.log(results);
		leftWristX=results[0].pose.leftWrist.x;
		leftWristY=results[0].pose.leftWrist.y;	
	console.log("leftWristX="+leftWristX+"leftWristY= "+leftWristY);
	rightWristX=results[0].pose.rightWrist.x;
	rightWristY=results[0].pose.rightWrist.y;	
	console.log("rightWristX="+rightWristX+"rightWristY= "+rightWristY);
	}
	}
