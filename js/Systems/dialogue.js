var dialogue;
var escapeText;

var dialogueTimmer=-1;

var dialogueBox;
var portraitBox;
var nameTagBox;

var npcName;
var npcPortrait;


var isDialogueUp;

//A timer that will automaticall remove all dialogue from the screen after 5 seconds.
function dialogueCountDown(){
	
	if(dialogueTimmer==0){
		//clear dialogue
		cleanDialogue();
	}
	else if(dialogueTimmer>0){
			console.log(dialogueTimmer);
			dialogueTimmer--;
			//console.log(isDialogueUp);
	}
}

//Gets rid of all of the dialogue boxes and text on the screen.
function cleanDialogue(){
		dialogue.destroy();
		dialogueTimmer=-1;
		dialogueBox.kill();
		//portraitBox.kill();
		nameTagBox.kill();
		npcName.kill();
		npcPortrait.kill();
		escapeDialogue.kill();
		console.log("Boom BAM");
		isDialogueUp=false;
}
//Draw all of my dialogue to the screen by passing in an npc to use as a portrait reference, and the string for the actual dialogue.
function createDialogueSetUp(dialogueString,npc){
	console.log("create some dialoguessss");
	dialogueBox = game.add.sprite(game.camera.x, game.camera.y+game.height-200, 'DialogueBox');
	dialogueBox.scale.setTo(1.78,1);
	//portraitBox= game.add.sprite(game.camera.x+game.width-200,game.camera.y+game.height-200,"PortraitBox");
	nameTagBox=game.add.sprite(game.camera.x+game.width-200,game.camera.y+game.height-250,"NameTagBox");
	nameTagBox.scale.setTo(3,3);
	npcName= game.add.text(game.camera.x+game.width-175,game.camera.y+game.height-240,{fill:"#abcdef"});
	if(npc.name=="mailBox") {
		npcPortrait=game.add.sprite(nameTagBox.centerX*.975,nameTagBox.centerY,"PlayerPortrait");
		npcPortrait.smoothed=false;
		npcPortrait.scale.setTo(5,5);
		npcName.text=playerName;
	}
	else{

		npcPortrait=game.add.sprite(nameTagBox.centerX*.975,nameTagBox.centerY,npc.name);
		npcPortrait.frame=0;
		npcPortrait.smoothed=false;		
		//if(npc.name!="Mayor")npcPortrait.scale.setTo(5,5);
		npcName.text=npc.name;
	} 

	if(npcName.text==playerName)npcPortrait.scale.setTo(3,3);

	dialogue= game.add.text(game.camera.x+100,game.camera.y+game.height-175,{fill: "#abcdef"});
	var style1234 = { font: "32px Arial", fill: "#C0C0C0", align: "center" };
	escapeDialogue= game.add.text(game.camera.x+100,game.camera.y+game.height-75,"Press escape to close.",style1234);
	escapeDialogue.addColor("#COCOCO",0)
	var stringy="";
	var onceonce=false;
	for(var i=0; i<dialogueString.length;i++){
		 var c = dialogueString.charAt(i);
		 if(c=='\n') onceonce=true;
		 if(c==' ' && i>=60 && i<=70 && onceonce==false){
		 	stringy+="\n";
		 	onceonce=true;
		 }
		 stringy+=c;
	}
	once=false;
	dialogue.text=stringy;
	dialogueTimmer=5;
	isDialogueUp=true;
	npc.dialogueCount++;
	return dialogue;
}

//A special dialogue function that is used strictly on the dialogue stage since that follows slightly different rules.
function tutorialDialogueSetUp(dialogueString,npc){
	console.log("create some dialoguessss");
	dialogueBox = game.add.sprite(game.camera.x, game.camera.y+game.height-200, 'DialogueBox');
	dialogueBox.scale.setTo(1.78,1);
	//portraitBox= game.add.sprite(game.camera.x+game.width-200,game.camera.y+game.height-200,"PortraitBox");
	nameTagBox=game.add.sprite(game.camera.x+game.width-200,game.camera.y+game.height-250,"NameTagBox");
	nameTagBox.scale.setTo(3,3);
	npcName= game.add.text(game.camera.x+game.width-175,game.camera.y+game.height-240,{fill:"#abcdef"});


		npcPortrait=game.add.sprite(nameTagBox.centerX*.975,nameTagBox.centerY,"PlayerPortrait");
		npcPortrait.frame=0;
		npcPortrait.smoothed=false;
		npcPortrait.scale.setTo(5,5);
		npcName.text=playerName;
	

	if(npcName.text==playerName)npcPortrait.scale.setTo(3,3);

	dialogue= game.add.text(game.camera.x+100,game.camera.y+game.height-175,{fill: "#abcdef"});
	var style1234 = { font: "32px Arial", fill: "#C0C0C0", align: "center" };
	escapeDialogue= game.add.text(game.camera.x+100,game.camera.y+game.height-75,"Press escape to close.",style1234);
	escapeDialogue.addColor("#COCOCO",0)
	dialogue.text=dialogueString;
	dialogueTimmer=5;
	//isDialogueUp=true;
	//npc.dialogueCount++;
	return dialogue;
}

//Check if the player tries to get out of dialogue.
function dialogueUpdate(){
	if (game.input.keyboard.isDown(Phaser.Keyboard.ESC) && isDialogueUp==true)
    {
    	console.log("Escape from socializing!!!");
    	cleanDialogue();
    }
}

//You probably didn't know you could click on npcs did you?
function clickToTalk(npc){
	console.log("Ok? I am clicking");
	
	if(canPlayerMove==false) return;
	character.yell(character,npc);
}