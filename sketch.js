var downCount;
var down;
var draw;
var drawSpider;

function setup(){
	createCanvas(420,600);
	bg = loadImage("BG.png");
	frame = 0;
	//system = new ParticleSystem(createVector(width/2, 50));
	r = random(255);
    g = random(255);
    b = random(255);

  	count=0;
  	down=0;
  	downCount=0;
}

 //translate(60,timing*250);
    drawSpider(60,timing*250);
	noStroke();

//거미
function drawSpider(){
  fill(0);

  triangle(310+37,230*time,320+37,225*time,315+37,230*time);
  triangle(310+37,230*time,315+37,230*time,325+37,240*time);
  triangle(305+37,235*time,310+37,240*time,325+37,240*time);
  triangle(305+37,235*time,310+37,240*time,315+37,255*time);
  triangle(325+37,245*time,305+37,255*time,310+37,255*time);
  triangle(320+37,265*time,305+37,255*time,310+37,255*time);
  triangle(335+37,225*time,345+37,230*time,340+37,230*time);
  triangle(330+37,240*time,345+37,230*time,340+37,230*time);
  triangle(330+37,240*time,350+37,235*time,345+37,240*time);
  triangle(340+37,255*time,350+37,235*time,345+37,240*time);
  triangle(330+37,245*time,350+37,255*time,345+37,255*time);
  triangle(335+37,265*time,350+37,255*time,345+37,255*time);

  ellipse(327+37,250*time,15,20);
  ellipse(327+37,237*time,5,5);
}