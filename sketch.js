var openCount;
var open;
var count;

function setup(){
	createCanvas(1000,600);
	count=0;
  	open=0;
  	openCount=0;
}

function draw() {

	drawBG();


	drawDoor(30, 370, open, 400);
	open=open-1;
	if(open>-10){
		open=-10;
	}
	openCount=openCount+1;
	if(openCount>400){
		open=0;
		openCount=0;
	}
}

/*translate(60,timing*250);*/

function drawDoor(x,y,w,h){
	fill(255,0,0);
    rect(1000,y,w,h);
}

function drawBG(){
	noStroke();

	fill(255);
	rect(0, 0, 420, 600);
}