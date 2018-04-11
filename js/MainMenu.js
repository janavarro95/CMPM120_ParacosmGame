var PlayButton;
var PlayButtonText;


var QuitButton;
var QuitButtonText;

var OptionsButton;
var OptionsButtonText;

var cursor;

var fullScreenButton;
var fullScreenButtonText

var MainMenu=function(game){
};

MainMenu.prototype.preload=function(){
console.log("Loading Main Menu. Fresh off the press v1.1.0");
}

//Create the Main Menu
MainMenu.prototype.create=function(){
  // PlayButton= game.add.button(game.world.centerX - 95, 400, 'PlayButton', actionOnClick, this, 2, 1, 0);
  Title = game.add.sprite(0, 0, 'Title')
  PlayButton = game.add.sprite(game.world.centerX*1.5, game.world.centerY, 'PlayButton');
  PlayButton.anchor.x=0.5;
  PlayButton.anchor.y=0.5;
  
  QuitButton = game.add.sprite(game.world.centerX*1.5, game.world.centerY*1.5, 'QuitButton');
  QuitButton.anchor.x=0.5;
  QuitButton.anchor.y=0.5;

  fullScreenButton = game.add.sprite(game.world.centerX*1.5, game.world.centerY*1.75, 'Full');
  fullScreenButton.anchor.x=0.5;
  fullScreenButton.anchor.y=0.5;


  PlayButton.inputEnabled=true;
  PlayButton.events.onInputDown.add(actionOnClick, this);
  QuitButton.inputEnabled=true;
  QuitButton.events.onInputDown.add(quitFunction,this);

  fullScreenButton.inputEnabled=true;
  fullScreenButton.events.onInputDown.add(fullScreenClick,this);
  cursor= game.add.sprite(0,0,"cursor");
  cursor.scale.setTo(5,5);
  cursor.smoothed=false;
}

//Move out custom cursor around.
MainMenu.prototype.update=function(){
	
	cursor.x=game.input.x;
	cursor.y=game.input.y;
}

MainMenu.prototype.render=function(){

}

//Check if the play button is clicked.
function actionOnClick () {
    game.state.start("nameSelectionMenu");
}

//Check to see if the quit button is clicked.
function quitFunction(){
	game.destroy();
}
//Activate the full screen feature.
function fullScreenClick(){
   if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }
}