var trPOP;

var DayTransition3= function(game){
console.log("THIS IS THE DAY TRANSITION SCRENE");
}

DayTransition3.prototype.preload=function(){

}

DayTransition3.prototype.create=function(){
 	game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
	//var	sfx=game.audio.add("Pop");
	trPOP=game.add.audio("Pop");
}

DayTransition3.prototype.style1= { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
DayTransition3.prototype.style2={ font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };


DayTransition3.prototype.update=function(){

if(this.counter==1){
	console.log("SHOW THE DATE TEXT!!!");
    var text1 = game.add.text(game.world.centerX, (game.world.centerY/2)+100, "Day 3", this.style1);
        text1.anchor.setTo(.5,.5);
}

if(this.counter==2){
	var text2 = game.add.text((game.world.centerX),(game.world.centerY), "June 9, 1996", this.style2);
	    text2.anchor.setTo(.5,.5);
}

if(this.counter==3){
	console.log("SHOW THE START TEXT");
	this.counter=0;
	game.state.start("DayThree");
}

}

DayTransition3.prototype.render=function(){

}

DayTransition3.prototype.counter=0;

DayTransition3.prototype.updateCounter=function(){
	this.counter++;
	trPOP.play();
}
