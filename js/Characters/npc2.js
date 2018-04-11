//npc2 is school child

var playerName;

//temp var for dialogue
var d;
var temp;
var temp2;
var temp3;
var active = false;

var NPC2 = function(xPos, yPos, npcString){
	Phaser.Sprite.call(this, game, xPos, yPos, npcString, null);
	console.log("Make npc2");
}

NPC2.prototype = Object.create(Phaser.Sprite.prototype);
NPC2.prototype.constructor = NPC2;
NPC2.prototype.create = function() {
	
}
//This is the schoolchlild
NPC2.prototype.name = "Jo";

//first numeric value represents the number of strings in the dialogue list

NPC2.prototype.sentences = [

	[3,
	"Oh hey " + playerName + "....",
	"Man there is too much to read in school.", 
	"Is that a letter to me from Jenny?!"
	],
	
	[2,
	"My dad said he is going to go work that new mine. Cooler than being a mailman.",
	"Do you have any more mail from Jenny?"
	],
	
	[2,
	"Dad is gone a lot. He says the mine is good work though.",
	"Jenny said her dad works there too now."
	],
	
	[2,
	"Dad has been sick lately.",
	"The doctor said working in the mine has been bad on his health."
	],
	
	[1,
	"Doc says that dad should stay away from the mine for a bit but the mayor insists that the mines can't spare any labor."
	],
	
	[2,
	"The town hall burned down. My dad saw it happen.",
	"The mayor says he doesn't have to work in the mines anymore though."],
	
	[1,
	"Praise the mayor."],
	

];

NPC2.prototype.dialogueCount = 1;
NPC2.prototype.dialogueIndex = 1;

NPC2.prototype.talk = function(){
	
	if(dialogueTimmer != -1)
		return;
	if(this.dialogueCount > (this.sentences[this.dialogueIndex][0])){
		this.dialogueCount = 1;
	}
	else{
		
	}
	
	//do more logic checking here to get the correct list of npc dialogue
	
	temp = [...this.sentences[this.dialogueIndex][this.dialogueCount]];
	d = createDialogueSetUp(this.sentences[this.dialogueIndex][this.dialogueCount],this);
	temp2 = d.text;
	d.text = "";
	temp3 = [...temp2];
	
	console.log("Index: " + this.dialogueIndex);
	active = true;
	console.log("activated");   //console.log(d.text);
	
	switch(stage){
		case 1:
			mail1.doesKeyMatch(this.name);
		break;
		case 2:
			mail2.doesKeyMatch(this.name);
		break;
		case 3:
			mail3.doesKeyMatch(this.name);
		break;
		case 4:
			mail4.doesKeyMatch(this.name);
		break;
		case 5:
			mail5.doesKeyMatch(this.name);
		break;
		case 6:
			mail6.doesKeyMatch(this.name);
		break;
		case 7:
			mail7.doesKeyMatch(this.name);
		break;
	}
	
}

var i = 0;

NPC2.prototype.update = function() {
	/*
	console.log("MEH");
	console.log("sdfsdf");
	console.log("safsdfsg");
	
	if(temp3){
		console.log(temp3.length);
	}
	if(temp){
		console.log(temp.length);
	}
	*/
	if(active){
		if(this.dialogueIndex == 0){
			if(i < temp3.length){
				bloop.play();
				d.text = d.text + temp3[i];
				console.log(d.text);
				i++;
			}
			else{
				active = false;
				console.log("Deactivated");
				i = 0;
			}
		}
		else{
			if(i < temp3.length){
				d.text = d.text + temp3[i];
				//console.log(d.text);
				i++;
			}
			else{
				active = false;
				console.log(this.dialogueCount);
				console.log(this.dialogueIndex);
				console.log("Deactivatedsss");
				i = 0;
			}
		}
	}
}