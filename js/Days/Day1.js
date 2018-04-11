//RNG number generator.s
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var counter=0;
var text;

var character;
var npc1;
var npc2;
var npc3;
var npc4;
var npc5;
var npc6;
var npc7;
var npc8;
var npc9;
var npc10;
var npc13;
var mail1Box;
var house;
var house2;
var house3;
var house4;
var house5;

var trees;

var tileSprite;

var worldWidth=1920;
var worldHeight=1088;

var BGM;
//used to flipflop the mail1 state
var flipflop;

var mail1;

var mail1Menu;

var cursor;

var leaf;
//true if mail1 is open so the player cannot move
//false if mail1 is not open so the player can move
var DayOne=function(game){
console.log("Playing my awesome game I GUESS:");
};

DayOne.prototype.preload=function(){

}
//make the mailbag for the game.
DayOne.prototype.mail1Bag=function(){
	//generate a mail1bag
	mail1=new Mail1(game,'mailBag');
	console.log("Making mailbag1");
	game.add.existing(mail1);
	
}
//Create all of the npcs that will be used in the level.
DayOne.prototype.createAllNPCS=function(){
	npc1 = new NPC1(game.world.centerX-600,game.world.centerY,"Jus");
	this.game.physics.arcade.enable(npc1);
	npc1.enableBody=true;
	npc1.body.collideWorldBounds=true;
	npc1.body.immovable=true;
	npc1.body.enable=true;
	npc1.dialogueIndex=0;
	npc1.inputEnabled = true;
    npc1.events.onInputDown.add(clickToTalk, this);
    npc1.sentences=[
	[4,
	"Hi " + playerName + "!",
	"Weather sure is nice today.",
	"Good weather means people are more likely to go shopping.",
	"Oh a letter? Thank you!"
	],
	
	[3,
	"Mail, my favorite part of the day.",
	"You see they opened the mine up?",
	"Might help business."
	],
	
	[2,
	"Have you seen that nice man who usually sits on the corner?",
	"He sometimes comes around to buy an apple."
	],
	
	[4,
	"Had to let go of one of my workers today.",
	"He came from a neighboring country that we aren't allied with.",
	"New law states that him and people like him aren't allowed to work here anymore.",
	"I also heard that we stopped taking imports from that country."
	],
	
	[2,
	"Not a lot of business now a days....",
	"The mayor brought into town a new grocier and most folks aren't buying the same way they used to."
	],
	
	[1,
	"I'm closing down the shop for the day. It just doesn't feel right."
	],
	
	[1,
	"Praise the mayor."
	]];

    //has to be done for npcs that use variables that are determined after initalization of the game. Otherwise the variables will be undefined.
	
	npc1.scale.setTo(1,1);
	game.add.existing(npc1);
	npc1.animations.add("Idle",[0,1,2,3],2,true);
	npc1.smoothed=false;

	npc2= new NPC2(game.world.centerX+550,game.world.centerY+210,"Jo");
	this.game.physics.arcade.enable(npc2);
	npc2.enableBody=true;
	npc2.body.collideWorldBounds=true;
	npc2.body.immovable=true;
	npc2.body.enable=true;
	npc2.dialogueIndex=0;
	npc2.inputEnabled = true;
    npc2.events.onInputDown.add(clickToTalk, this);
    npc2.scale.setTo(2,2);
	game.add.existing(npc2);
	npc2.animations.add("Idle",[0,1,2,3],2,true);
	npc2.smoothed=false;
	npc2.sentences=[
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
	npc3= new NPC3(game.world.centerX+200,game.world.centerY-150,"Fredstaire");
	this.game.physics.arcade.enable(npc3);
	npc3.enableBody=true;
	npc3.body.enable=true;
	npc3.body.collideWorldBounds=true;
	npc3.body.immovable=true;
	npc3.dialogueIndex=0;
	npc3.inputEnabled = true;
    npc3.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc3);
	npc3.scale.setTo(1,1);
	npc3.animations.add("Idle",[0,1,2,3],2,true);
	npc3.smoothed=false;
	npc3.sentences=[
	[2,
	"This election has me concerned " + playerName + ".",
	"You might not think it but the position of mayor is important."],
	
	[2,
	"This mayor went and opened that mine without council approval!",
	"People should be furious!"],
	
	[2,
	"This is completely unacceptable. People will be furious.",
	"I may need you to hand out fliers about this."],
	
	[1,
	"We have organized a protest. You should check it out."],
	
	[2,
	"The other council members and I are going to step in and remove the mayor from power in the coming days.",
	"A letter from the mayor? Thank you."],
	//npc3.body.setSize(npc3.width/.4,npc3.height/.4,);
	];
	npc4= new NPC4(game.world.centerX,game.world.centerY-150,"Em");
	this.game.physics.arcade.enable(npc4);
	npc4.enableBody=true;
	npc4.body.collideWorldBounds=true;
	npc4.body.immovable=true;
	//npc4.body.enable=true;
	npc4.dialogueIndex=0;
	npc4.inputEnabled = true;
    npc4.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc4);
	npc4.scale.setTo(1,1);
	npc4.animations.add("Idle",[0,1],2,true);
	npc4.smoothed=false;

	npc4.sentences=[
	[2,
	"My colleague and I have one thing in common; we aren't fans of the new mayor.",
	"Ah a letter from the committee? Why thank you " + playerName + "."],
	
	[2,
	"The mine may bring in business but it was closed for a reason...",
	"Oh a letter, thank you."],
	
	[1,
	"My colleague and I are arranging a public meeting to discuss recent changes."],
	
	[1,
	"After the protest, we are having a town hall meeting to confront the mayor."],
	
	[2,
	"Its been a difficult road but we have gotten most of the council to agree to depose the mayor.",
	"A lot of members of his party were particularly difficult to persuade."],
	];
	npc5= new NPC5(game.world.centerX+600,game.world.centerY+200,"Ann");
	this.game.physics.arcade.enable(npc5);
	npc5.enableBody=true;
	npc5.body.collideWorldBounds=true;
	npc5.body.immovable=true;
	//npc4.body.enable=true;
	npc5.dialogueIndex=0;
	npc5.inputEnabled = true;
    npc5.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc5);
	npc5.scale.setTo(1,1);
	npc5.animations.add("Idle",[0,1],2,true);
	npc5.smoothed=false;

	npc5.sentences=[
	[3,
	"Hi " + playerName + "! The kids just got out of class.",
	"What a bright bunch I have got this year.",
	"A letter from the committee? Why thank you."
	],
	
	[2,
	"A lot of people going to work in those mines.",
	"My father worked in those before he passed."
	],
	
	[2,
	"A letter from Jannett? Thanks...",
	"She says she is having troubles in her home town too."
	],
	
	[4,
	"There is just too much going on for people to pay attention to.",
	"Now we are taking actions against our own citizens.",
	"Students are being forced into separated classes.",
	"Its not even on the orders of our mayor but at the behest of the school board."
	],
	
	[3,
	"People keep giving in to the mayor and now there is talk of moving the children of foreigners to an entirely different schooling location.",
	"What have the people of this town come to?",
	"Thanks for the letter... apparently this is not a localized trend. I'm scared for the future."
	],
	
	[2,
	"I can't believe this is happening.",
	"I'd leave town but I cant just abandon the children."
	],
	
	[1,
	"Praise the mayor."
	]
	];

	//town guard
	npc6= new NPC6(game.world.centerX+200,game.world.centerY+200,"Phil");
	this.game.physics.arcade.enable(npc6);
	npc6.enableBody=true;
	npc6.body.collideWorldBounds=true;
	npc6.body.immovable=true;
	//npc4.body.enable=true;
	npc6.dialogueIndex=0;
	npc6.inputEnabled = true;
    npc6.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc6);
	npc6.scale.setTo(1,1);
	npc6.animations.add("Idle",[0,1],2,true);
	npc6.smoothed=false;
	
	npc6.sentences= [

	[3,
	"I for one look forward to the policy changes our new mayor is going to make.",
	"We need better law and order if you ask me!",
	"Have you seen these kids?!"
	],
	
	[2,
	"Reopening the mines is exactly what this town needs! Busy people commit less crimes!",
	"Ah a letter from the city watch association."
	],
	
	[2,
	"Sending the homeless around here to work in the mines was a brilliant idea.",
	"You can bet there will be a lot less crime happening around here."
	],
	
	[2,
	"The mayor assures us in the guard that things are getting better. He has my trust.",
	"He has done nothing but good things for this town."
	],
	
	[2,
	"There has been a lot of trouble from the town.",
	"We in the guard are sworn to keep the peace."
	],
	
	[2,
	"The mayor himself has assigned me to look into the arson of the town hall.",
	"Say, do you know anything about that."
	],
	
	[1,
	"Praise the mayor."
	]];

	//Chef
	npc7= new NPC7(game.world.centerX-500,game.world.centerY-200,"Terry");
	this.game.physics.arcade.enable(npc7);
	npc7.enableBody=true;
	npc7.body.collideWorldBounds=true;
	npc7.body.immovable=true;
	//npc4.body.enable=true;
	npc7.dialogueIndex=0;
	npc7.inputEnabled = true;
    npc7.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc7);
	npc7.scale.setTo(1,1);
	npc7.animations.add("Idle",[0,1],2,true);
	npc7.smoothed=false;

	npc7.sentences=[

	[1,
	"Hello " + playerName + ", would you like some food?"
	],
	
	[3,
	"I sure hope the materials from the mines don't seep into the river.",
	"We get a lot of fish from there.",
	"Ah a new recipe from my mother. She has started this restaurant a long time ago."
	],
	
	[2,
	"I'm not sure it is a good idea to keep selling the fish from around here.",
	"Maybe its just me, but the water tastes a little weird."
	],
	
	[3,
	"Yeah, I stopped selling fish from around here.",
	"And now that one of our biggest imorters has been banned, well...",
	"we will have to resort to other foods."
	],
	
	[2,
	"Mail? Oh thanks.",
	"Looks like another ingredients supplier cant come through."
	],
	
	[2,
	"I'm leaving town.",
	"You should too before its too late."
	],
	
	[1,
	"Praise the mayor."
	],	
	];

	//WinchellFamily
	npc8= new NPC8(game.world.centerX+600,game.world.centerY-125,"Winchell");
	this.game.physics.arcade.enable(npc8);
	npc8.enableBody=true;
	npc8.body.collideWorldBounds=true;
	npc8.body.immovable=true;
	//npc4.body.enable=true;
	npc8.dialogueIndex=0;
	npc8.inputEnabled = true;
    npc8.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc8);
	npc8.scale.setTo(1,1);
	npc8.animations.add("Idle",[0,1,2,3],2,true);
	npc8.smoothed=false;
	npc8.sentences= [

	[2,
	"H: How's the mail business " + playerName + "? Think the new mayor is going to affect your job?",
	"W: You're making him worry!"
	],
	
	[3,
	"H: I heard there is talk of mail screening in the future.",
	"W: Apparently the mayor is scared of ilicit packages from spies...",
	"W: I heard it from my friend on the city council."
	],
	
	[2,
	"H: We are planning on going to the twon meeting.",
	"W: We are hoping something can be done to get rid of this new mayor."
	],
	
	[4,
	"H: Have you noticed the shady people around the post office?",
	"H: Maybe your boss knows something...",
	"W: We have thought about leaving town and moving somewhere else.",
	"W: Anyway, hope to see you at the rally today."
	],
	
	[2,
	"H: Seems like there is no where we can go where things are better right now.",
	"W: At least that last protest maed our voices heard."
	],
	
	[2,
	"H: We had a lot of friends in the council.",
	"W: I cant believe they are all gone."
	],
	
	[2,
	"H: Praise the mayor.",
	"W: Praise the mayor."
	]];
	//Doctor
	npc9= new NPC9(game.world.centerX-100,game.world.centerY+300,"AmyTanice");
	this.game.physics.arcade.enable(npc9);
	npc9.enableBody=true;
	npc9.body.collideWorldBounds=true;
	npc9.body.immovable=true;
	//npc4.body.enable=true;
	npc9.dialogueIndex=0;
	npc9.inputEnabled = true;
    npc9.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc9);
	npc9.scale.setTo(1,1);
	npc9.animations.add("Idle",[0,1],2,true);
	npc9.smoothed=false;
	npc9.sentences=[

	[1,
	"Hey " + playerName + "! Want a quick check up?"
	],
	
	[2,
	"The mine has been reopen.",
	"Hopefully I dont get patients with injuries from the mine."
	],

	[2,
	"Have you tasted the water? Hmmm....",
	"I need to send a letter to my colleagues and get their advice."
	],	
	
	[3,
	"The water has a high concentration of metals in it.",
	"Its only been a few months since the mine opened.",
	"Not to mention workers from the mines are getting sick a lot recently."
	],
	
	[3,
	"I cant believe this!",
	"The mayor has informed me that it would be unlawful to tell citizens that the water is undrinkable!",
	"I shouldn't even be telling you this."
	],
	
	[1,
	"Don't drink the water. Its not safe."
	],
	
	[1,
	"Praise the mayor."
	]];
	//
	npc10= new NPC10(game.world.centerX+300,game.world.centerY-250,"Walter P.");
	this.game.physics.arcade.enable(npc10);
	npc10.enableBody=true;
	npc10.body.collideWorldBounds=true;
	npc10.body.immovable=true;
	//npc4.body.enable=true;
	npc10.dialogueIndex=0;
	npc10.inputEnabled = true;
    npc10.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc10);
	npc10.scale.setTo(1,1);
	npc10.animations.add("Idle",[0,1],2,true);
	npc10.smoothed=false;

	npc10.sentences=[

	[1,
	"Must produce these crops!"
	],
	
	[2,
	"The mine opening means people will be hungrier.",
	"Maybe I can get the store to buy my crops at a higher price."
	],
	
	[1,
	"Hey, sorry but you'll have to come back later. I need to go water my crops."
	],
	
	[3,
	"They took the farm away from me. Said I couldn't be trusted with the town's food supply.",
	"Now I'm being forced to work in the mines.",
	"I've lived in this town for most of my life!"
	],
	
	[2,
	"The guard have made me register as a foreigner.",
	"I'm scheduled to begin work in the mine. Its the only place I'm allowed to work."
	],
	
	[2,
	"They won't let me leave.",
	"I threatened to leave town and they said I couldn't."
	],
	
	[1,
	"Praise the mayor."
	],	
	
];
	//homelessGuy
	npc13= new NPC13(game.world.centerX,game.world.centerY-250,"Gerald");
	this.game.physics.arcade.enable(npc13);
	npc13.enableBody=true;
	npc13.body.collideWorldBounds=true;
	npc13.body.immovable=true;
	//npc4.body.enable=true;
	npc13.dialogueIndex=0;
	npc13.inputEnabled = true;
    npc13.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc13);
	npc13.scale.setTo(1,1);
	npc13.animations.add("Idle",[0,1],2,true);
	npc13.smoothed=false;

	npc13.sentences=[

	[2,
	"Oh hi. Kind of you to stop by.",
	"Could you spare some food."],
	
	[2,
	"I saw the mayor pass by the other day.",
	"He didnt seem happy to see me."]];

	mailBox= new MailBox(game.world.centerX*1.1,game.world.centerY*0.7,"MailBox");
	this.game.physics.arcade.enable(mailBox);
	mailBox.enableBody=true;
	mailBox.body.collideWorldBounds=true;
	mailBox.body.immovable=true;
	mailBox.scale.setTo(2.5,2.5);
	mailBox.smoothed=false;
	mailBox.inputEnabled = true;
    mailBox.events.onInputDown.add(clickToTalk, this);
	game.add.existing(mailBox);
	mailBox.createEx();
	console.log("MAKE ALL THE NPCS OR ELSE THINGS ARE GOING TO BREAK SOME THINGS");

	npc1.dialogueIndex=0;
	npc2.dialogueIndex=0;
	npc3.dialogueIndex=0;
	npc4.dialogueIndex=0;
	npc5.dialogueIndex=0;
	npc6.dialogueIndex=0;
	npc7.dialogueIndex=0;
	npc8.dialogueIndex=0;
	npc9.dialogueIndex=0;
	npc10.dialogueIndex=0;
	npc13.dialogueIndex=0;
}
//Create the player character and shove him into the world.
DayOne.prototype.createCharacter=function(){
	character= new player(game.world.centerX,game.world.centerY);
	this.game.physics.arcade.enable(character);
	character.enableBody=true;
	character.body.collideWorldBounds=true;
	character.body.onCollide = new Phaser.Signal();
	character.body.onCollide.add(character.talk, this);
	game.add.existing(character);	
	character.scale.setTo(1,1);
	//character.scale.setTo(2,2);
	//character.body.setSize(character.width/2,character.height/2,0);
	character.animations.add("IdleRight",[0,1],1,true);
    character.animations.add("rightWalk",[2,3],10,true);
    character.animations.add("leftWalk",[4,5],10,true);
    character.animations.add("IdleLeft",[6,7],1,true);
    character.smoothed=false;

}

//Create a really ugly tree barrier for each of the levels to make sure the player can't walk off the map.
DayOne.prototype.createTrees=function(){
	trees= game.add.group();
	trees=game.add.physicsGroup();
	trees.immovable=true;
	
	//top border
	for(var treeCount=0; treeCount<45;treeCount++){
		var tree = game.add.sprite(game.world.centerX*.05*treeCount,game.world.centerY*.001,"Tree1");	
		this.game.physics.arcade.enable(tree);
		tree.enableBody=true;
		tree.body.collideWorldBounds=true;
		tree.body.immovable=true;
		trees.add(tree);
	}

	//bottom border
	for(var treeCount=0; treeCount<45;treeCount++){
		var tree = game.add.sprite(game.world.centerX*.05*treeCount,game.world.centerY*2,"Tree1");	
		this.game.physics.arcade.enable(tree);
		tree.enableBody=true;
		tree.body.collideWorldBounds=true;
		tree.body.immovable=true;
		trees.add(tree);
	}

	//left border
	for(var treeCount=0; treeCount<45;treeCount++){
		var tree = game.add.sprite(game.world.centerX*0,game.world.centerY*.2*treeCount,"Tree1");	
		this.game.physics.arcade.enable(tree);
		tree.enableBody=true;
		tree.body.collideWorldBounds=true;
		tree.body.immovable=true;
		trees.add(tree);
	}

	//right border
	for(var treeCount=0; treeCount<45;treeCount++){
		var tree = game.add.sprite(game.world.centerX*2,game.world.centerY*.2*treeCount,"Tree1");	
		this.game.physics.arcade.enable(tree);
		tree.enableBody=true;
		tree.body.collideWorldBounds=true;
		tree.body.immovable=true;
		trees.add(tree);
	}

	console.log("OAK AND PINE MAKE NO RESEIN.")
}
var _emitter;

//Make a particle effect system with leafs!
DayOne.prototype.leafs=function(){
	_emitter=game.add.emitter(game.centerX,game.centerY,600);
	_emitter.makeParticles('leaf');
		_emitter.start(false, 14000, 100);
	_emitter.x=game.world.centerX;
	_emitter.y=0;
	_emitter.width=game.world.width;
	_emitter.maxParticleScale = 3;
    _emitter.minParticleScale = 2;
    _emitter.setYSpeed(10, 20);


}

//Create all of the houses for the village.
DayOne.prototype.loadTiles=function(){
		house=this.game.add.sprite(game.world.centerX,game.world.centerY*.2,"Building");
		house2=this.game.add.sprite(game.world.centerX-300,game.world.centerY+100,"Building");
		house3=this.game.add.sprite(game.world.centerX+500,game.world.centerY-350,"Building");
		house4=this.game.add.sprite(game.world.centerX-550,game.world.centerY-400,"Building");
		house5=this.game.add.sprite(game.world.centerX+300,game.world.centerY,"Building");

		this.game.physics.arcade.enable(house);
		house.enableBody=true;
		house.body.collideWorldBounds=true;
		house.body.immovable=true;

		this.game.physics.arcade.enable(house2);
		house2.enableBody=true;
		house2.body.collideWorldBounds=true;
		house2.body.immovable=true;

		this.game.physics.arcade.enable(house3);
		house3.enableBody=true;
		house3.body.collideWorldBounds=true;
		house3.body.immovable=true;

		this.game.physics.arcade.enable(house4);
		house4.enableBody=true;
		house4.body.collideWorldBounds=true;
		house4.body.immovable=true;

		this.game.physics.arcade.enable(house5);
		house5.enableBody=true;
		house5.body.collideWorldBounds=true;
		house5.body.immovable=true;
}

//Set everything up for the level.
DayOne.prototype.create=function(){
	tileSprite = game.add.sprite(0, 0, 'level');
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	game.world.setBounds(0,0,worldWidth,worldHeight); //make the world larger than the camera viewport
	
	this.createTrees();
	this.createAllNPCS();
	this.loadTiles();
	this.createCharacter();
	river=game.add.tileSprite(256,64,game.world.centerX,game.world.centerY,"river");
	river.scale.setTo(2,2);
	river.smoothed=false;
	river.x=0;
	river.y=950;
	this.game.physics.arcade.enable(river);
	river.enableBody=true;
	//river.body.collideWorldBounds=true;
	river.body.immovable=true;
	river.body.setSize(1920,128);
	game.camera.follow(character);
	game.time.events.loop(Phaser.Timer.SECOND, dialogueCountDown, this);
	isDialogueUp=false;

	BGM= game.add.audio("village");
	BGM.loop=true;
	BGM.play();
 	//game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

	//game.input.onDown.add(this.gofull, this);

	this.leafs();

	//game.add.existing(cursor);

    console.log("Day1");
	this.mail1Bag();
	//reset them
	//mail1.resetBag();
	mail1.addToGroup(stage);
	mail1.makeInvisible();
	for(var i=0;i<11;i++){
		mail1.addToGroup(stage);
	}
	mail1.setKeys(stage);


	mail1.setUp(stage);


	//default to mail1 not being open
	mail1Menu=false;
	cursor= game.add.sprite(0,0,"cursor");
	cursor.scale.setTo(5,5);
	//cursor.anchor(0.5,0.5);
	cursor.anchor.setTo(0,0);
	cursor.smoothed=false;
}

DayOne.prototype.listener=function(){
	counter++;
}

//The update function that makes sure everything runs each and every frame.
DayOne.prototype.update=function(){
	npc1.animations.play("Idle");
	npc2.animations.play("Idle");
	npc3.animations.play("Idle");
	npc4.animations.play("Idle");
	npc5.animations.play("Idle");
	npc6.animations.play("Idle");
	npc7.animations.play("Idle");
	npc8.animations.play("Idle");
	npc9.animations.play("Idle");


	npc13.animations.play("Idle");
	river.tilePosition.x-=.1;
	cursor.x=game.input.x+game.camera.x;
	cursor.y=game.input.y+game.camera.y;
	//game.physics.arcade.moveToPointer(cursor, 800);
	 //collision detection between player and entities is checked in Player.js
	this.game.canvas.style.cursor="ship";
	if (game.input.keyboard.isDown(Phaser.Keyboard.ESC) && isDialogueUp==true)
	    {
	    	cleanDialogue();
	    }
	//game.debug.inputInfo(32, 32);


//Functionality to open/close the mail menu.
	if(game.input.keyboard.justPressed(Phaser.Keyboard.M)){
		if(!flipflop){
			flipflop=true;
			if(mail1.visible==true){
				mail1.makeInvisible();
				mail1.killLetter();
				canPlayerMove=true;
			}else if(mail1.visible==false){
				console.log("make the mail1 visible yo");
				mail1.makeVisible();
				canPlayerMove=false;


					for (var i = mail1Group.length - 1; i >= 0; i--) {
						console.log("I HAVE LOTS OF mail1 " + i);
						console.log(mail1Group.children[i].mail1Key);
					}
			}
		}
	}
	if(game.input.keyboard.justReleased(Phaser.Keyboard.M)){
		flipflop=false;
	}
}

DayOne.prototype.render=function(){

}