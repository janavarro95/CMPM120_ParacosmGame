var confirmNameButton;
var confirmNameButtonText;

var namefield;

var nameSelectionMenu=function(frame){
//Phaser.Sprite.call(this,game, 0,0,"cursor",frame);

};


 nameSelectionMenu.prototype.preload=function(){

}

nameSelectionMenu.prototype.create=function(){
 
    game.add.sprite(0, 0, 'Title')
    //A super cool name input plugin made this possible!
	 namefield = game.add.inputField(game.world.centerX-83, game.world.centerY*.8, {
    font: '18px Arial',
    fill: '#212121',
    fontWeight: 'bold',
    width: 150,
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    placeHolder: 'Your name here',
    type: PhaserInput.InputType.text
});
    
	confirmNameButton = game.add.sprite(game.world.centerX, game.world.centerY *1.1, 'PlayButton');
    confirmNameButton.anchor.setTo(.5,.5);
    var confirmNameButtonStyle = { font: "16px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: confirmNameButton.width, align: "center" };
  
    confirmNameButton.inputEnabled=true;
    confirmNameButton.events.onInputDown.add(this.actionOnClick, this);

	cursor= game.add.sprite(0,0,"cursor");
	cursor.scale.setTo(5,5);
	cursor.smoothed=false;
}


nameSelectionMenu.prototype.update=function(){
	cursor.x=game.input.x;
	cursor.y=game.input.y;
}

nameSelectionMenu.prototype.render=function(){

}

//Check to see if the player input a name so they can progress to the next level.
nameSelectionMenu.prototype.actionOnClick=function(){
if(namefield.value.toString()=="") return;
playerName=namefield.value.toString();
console.log(playerName);
stage=0;
game.state.start("DayTransition0");
}