var DayOneButtonEnabled;
var DayOneButton;
var DayOneButtonText;

var DayTwoButtonEnabled;
var DayTwoButton;
var DayTwoButtonText;

var DayThreeButtonEnabled;
var DayThreeButton;
var DayThreeButtonText;

var DayFourButtonEnabled;
var DayFourButton;
var DayFourButtonText;

var DayFiveButtonEnabled;
var DayFiveButton;
var DayFiveButtonText;

var DaySixButtonEnabled;
var DaySixButton;
var DaySixButtonText;

var DaySevenButtonEnabled;
var DaySevenButton;
var DaySevenButtonText;

var stage;

var DaySelectionMenu=function(game){
DayOneButtonEnabled=true;
DayTwoButtonEnabled=false;
DayThreeButtonEnabled=false;
DayFourButtonEnabled=false;
DayFiveButtonEnabled=false;
DaySixButtonEnabled=false;
DaySevenButtonEnabled=false;

};

function testThisThing(){
DayOneButtonEnabled=true;
DayTwoButtonEnabled=true;
DayThreeButtonEnabled=true;
DayFourButtonEnabled=true;
DayFiveButtonEnabled=true;
DaySixButtonEnabled=true;
DaySevenButtonEnabled=true;
}

DaySelectionMenu.prototype.preload=function(){
  console.log("Loading Day Selection Menu again");
}
//Create the day selection menu with a bunch of buttons and see how far the player can progress based on their progress.
DaySelectionMenu.prototype.create=function(){
 
  // PlayButton= game.add.button(game.world.centerX - 95, 400, 'PlayButton', actionOnClick, this, 2, 1, 0);
  game.world.setBounds(0,0,1280,720);
  game.add.sprite(0, 0, 'Title')
  if(DayOneButtonEnabled==true){
    DayOneButton = game.add.sprite(game.world.centerX*.1, game.world.centerY*.1, 'BlankButton');
    var DayOneButtonStyle = { font: "bold 32px Arial", fill: "#0000FF", wordWrap: true, wordWrapWidth: DayOneButton.width, align: "center" };
    DayOneButtonText = game.add.text(DayOneButton.centerX*.7, DayOneButton.centerY*.75, "Day 1", DayOneButtonStyle);
    DayOneButton.inputEnabled=true;
    DayOneButton.events.onInputDown.add(this.startDayOne, this);
  }
    if(DayTwoButtonEnabled==true){
    DayTwoButton = game.add.sprite(game.world.centerX*.5, game.world.centerY*.1, 'BlankButton');
    var DayTwoButtonStyle = { font: "bold 32px Arial", fill: "#0000FF", wordWrap: true, wordWrapWidth: DayOneButton.width, align: "center" };
    DayTwoButtonText = game.add.text(DayTwoButton.centerX*.9, DayTwoButton.centerY*.75, "Day 2", DayTwoButtonStyle);
    DayTwoButton.inputEnabled=true;
    DayTwoButton.events.onInputDown.add(this.startDayTwo, this);
  }
    if(DayThreeButtonEnabled==true){
    DayThreeButton = game.add.sprite(game.world.centerX*.9, game.world.centerY*.1, 'BlankButton');
    var DayThreeButtonStyle = { font: "bold 32px Arial", fill: "#0000FF", wordWrap: true, wordWrapWidth: DayOneButton.width, align: "center" };
    DayThreeButtonText = game.add.text(DayThreeButton.centerX*.945, DayThreeButton.centerY*.75, "Day 3", DayThreeButtonStyle);
    DayThreeButton.inputEnabled=true;
    DayThreeButton.events.onInputDown.add(this.startDayThree, this);
  }
    if(DayFourButtonEnabled==true){
    DayFourButton = game.add.sprite(game.world.centerX*1.3, game.world.centerY*.1, 'BlankButton');
    var DayFourButtonStyle = { font: "bold 32px Arial", fill: "#0000FF", wordWrap: true, wordWrapWidth: DayOneButton.width, align: "center" };
    DayFourButtonText = game.add.text(DayFourButton.centerX*.95, DayFourButton.centerY*.75, "Day 4", DayFourButtonStyle);
    DayFourButton.inputEnabled=true;
    DayFourButton.events.onInputDown.add(this.startDayFour, this);
  }
    if(DayFiveButtonEnabled==true){
    DayFiveButton = game.add.sprite(game.world.centerX*1.7, game.world.centerY*.1, 'BlankButton');
    var DayFiveButtonStyle ={ font: "bold 32px Arial", fill: "#0000FF", wordWrap: true, wordWrapWidth: DayOneButton.width, align: "center" };
    DayFiveButtonText = game.add.text(DayFiveButton.centerX*.965, DayFiveButton.centerY*.75, "Day 5", DayFiveButtonStyle);
    DayFiveButton.inputEnabled=true;
    DayFiveButton.events.onInputDown.add(this.startDayFive, this);
  }
    if(DaySixButtonEnabled==true){
    DaySixButton = game.add.sprite(game.world.centerX*.1, game.world.centerY*.6, 'BlankButton');
    var DaySixButtonStyle ={ font: "bold 32px Arial", fill: "#0000FF", wordWrap: true, wordWrapWidth: DayOneButton.width, align: "center" };
    DaySixButtonText = game.add.text(DaySixButton.centerX*.70, DaySixButton.centerY*.93, "Day 6", DaySixButtonStyle);
    DaySixButton.inputEnabled=true;
    DaySixButton.events.onInputDown.add(this.startDaySix, this);
  }
    if(DaySevenButtonEnabled==true){
    DaySevenButton = game.add.sprite(game.world.centerX*.5, game.world.centerY*.6, 'BlankButton');
    var DaySevenButtonStyle ={ font: "bold 32px Arial", fill: "#0000FF", wordWrap: true, wordWrapWidth: DayOneButton.width, align: "center" };
    DaySevenButtonText = game.add.text(DaySevenButton.centerX*.9, DaySevenButton.centerY*.93, "Day 7", DaySevenButtonStyle);
    DaySevenButton.inputEnabled=true;
    DaySevenButton.events.onInputDown.add(this.startDaySeven, this);
  }
  cursor= game.add.sprite(0,0,"cursor");
  cursor.scale.setTo(5,5);
  cursor.smoothed=false;
}


DaySelectionMenu.prototype.update=function(){
  game.world.setBounds(0,0,1280,720);
	cursor.x=game.input.x;
	cursor.y=game.input.y;
}

DaySelectionMenu.prototype.render=function(){

}

//A bunch of checks to see what button was clicked.

DaySelectionMenu.prototype.startDayOne=function(){
  stage=1;
  game.state.start("DayTransition1");
}

DaySelectionMenu.prototype.startDayTwo=function(){
  stage=2;
 game.state.start("DayTransition2");
 // game.state.start("main");
}

DaySelectionMenu.prototype.startDayThree=function(){
  stage=3;
 game.state.start("DayTransition3");
 // game.state.start("main");
}
DaySelectionMenu.prototype.startDayFour=function(){
  stage=4;
 game.state.start("DayTransition4");
 // game.state.start("main");
}
DaySelectionMenu.prototype.startDayFive=function(){
  stage=5;
 game.state.start("DayTransition5");
 // game.state.start("main");
}
DaySelectionMenu.prototype.startDaySix=function(){
  stage=6;
 game.state.start("DayTransition6");
 // game.state.start("main");
}
DaySelectionMenu.prototype.startDaySeven=function(){
  stage=7;
 game.state.start("DayTransition7");
 // game.state.start("main");
}
