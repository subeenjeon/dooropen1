var openCount;
var open;
var count;

function setup(){
	createCanvas(420,600);
	count=0;
  	open=0;
  	openCount=0;
}

function draw() {

	drawBG();


	drawDoor(30, 370, 10, open);
	open=open-1;
	if(open>-10){
		open=-10;
	}
	openCount=openCount+1;
	if(openCount>200){
		open=0;
		openCount=0;
	}
}

/*translate(60,timing*250);*/

function drawDoor(x,y,w,h){
	fill(209,225,44);
    rect(x,y,w,h);
}