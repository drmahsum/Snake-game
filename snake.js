function Snake() {
	this.x =0;
	this.y= 0;
	this.yspeed = 0;
	this.xspeed = 1;
	this.total=0;
	this.tail=[];
	this.update = function () {
		if(this.x>width){
			this.x=0;
		}
		if(this.x<0){
			this.x=floor(width/scl)*scl;//just fiexed here
		}
		if(this.y>height){
			this.y=0;
		}
		if(this.y<0){
			this.y=height;
		}
		if(this.total===this.tail.length){
			for(let i = 0;i<this.tail.length-1;i++){
				this.tail[i]=this.tail[i+1];
			}
		}
		this.tail[this.total-1]=createVector(this.x,this.y);
		this.x += this.xspeed*scl;
		this.y += this.yspeed*scl;
	//	this.x = constrain(this.x,0,width-scl);
	//	this.y = constrain(this.y,0,height-scl);
	}
	this.show = function (){
		noStroke();
		fill(255);
		for(let i = 0;i<this.tail.length;i++){
			rect(this.tail[i].x,this.tail[i].y,scl,scl);
			
		}
		rect(this.x,this.y,scl,scl);
	}
	this.eat = function(pos){
		let distance = dist(this.x,this.y,pos.x,pos.y);
		if(distance<1){
			console.log(this.tail);
			this.total++;
			return true;
		}else{
			return false;
		}
	}
	this.dir= function (x,y){
		this.xspeed=x;
		this.yspeed = y;
		
	}
}
