var openCount;
var open;
var count; 

function setup(){
	createCanvas(1000,1000;
	count=0;
  	open=0;
  	openCount=0;
}

function draw() {

	drawBG();


	drawDoor(30, 370, open, 200);
	open=open-1;
	if(open>+10){
		open=+10;
	}
	openCount=openCount+1;
	if(openCount>200){
		open=0;
		openCount=0;
	}
}

/*translate(60,timing*250);*/

function drawDoor(x,y,w,h){
	fill(255,0,0);
    rect(x,y,w,h);
}

function drawBG(){
	noStroke();

	fill(255);
	rect(0, 0, 420, 600);
}