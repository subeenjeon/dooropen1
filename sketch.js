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
	drawDoor(10, 10, 50, open);
	open=open+1;
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