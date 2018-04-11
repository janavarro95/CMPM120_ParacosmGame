var creditsGroup;

//A credits screen that is used to give credit to all of the amazing Paracosm team members.
var CreditsScreen= function(game){

}

CreditsScreen.prototype.once=false;

CreditsScreen.prototype.text1;

CreditsScreen.prototype.preload=function(){

}
//Counter used to see when to go back to the day selection menu. Gets updated every second.
CreditsScreen.prototype.counter=0;

CreditsScreen.prototype.create=function(){
 	//game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
	//var	sfx=game.audio.add("Pop");
	game.add.sprite(0, 0, 'Title')
	creditsGroup=game.add.group();
    this.text1 = game.add.text(game.world.centerX-96, (game.world.centerY*2), "Credits:", this.style1);
    this.text1.stroke = '#000000';
    this.text1.strokeThickness = 6;
	creditsGroup.add(this.text1);

    this.text1 = game.add.text(game.world.centerX/3, (game.world.centerY*2), "\nMichael Harrold - Lead Design, Story Builder, and Programmer\nBrian Lambrigger - Artist and Programmer\nJoshua Navarro - Lead Programmer\nMichael Ettinger - Music and Programmer\nManuel Rosales - Story Builder and Programmer", this.style1);
	creditsGroup.add(this.text1);
	this.text1.stroke = '#000000';
    this.text1.strokeThickness = 6;

	this.text1 = game.add.text(game.world.centerX-96, (game.world.centerY*3), "THE END\n", this.style3);
	this.text1.stroke = '#000000';
    this.text1.strokeThickness = 6;
	creditsGroup.add(this.text1);

	game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
}
//Styles for the credits screen text/
CreditsScreen.prototype.style1= { font: "bold 32px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle" };
CreditsScreen.prototype.style2={ font: "bold 32px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle" };
CreditsScreen.prototype.style3={ font: "bold 36px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle" };

//An update function that is used to make the credits scroll.
CreditsScreen.prototype.update=function(){

	for (var i = creditsGroup.length - 1; i >= 0; i--) {
		if(i==creditsGroup.length-1){
			if(creditsGroup.children[i].y!=game.world.centerY) creditsGroup.children[i].y--;
		}
		else creditsGroup.children[i].y--;
	}

}
//An update counter to see when to force the game to go back to the day selection menu.
CreditsScreen.prototype.updateCounter=function(){
		if(creditsGroup.children[creditsGroup.length-1].y==game.world.centerY) this.counter++;
		if(this.counter==3) game.state.start("DaySelectionMenu");	
}

CreditsScreen.prototype.render=function(){

}
