var tutorialMayor;
var showtextOnce; //should really show it twice though
var river;
var DayZero=function(game){
console.log("Starting the tutorial.");
};

DayZero.prototype.preload=function(){

}
DayZero.prototype.mailBag=function(){ //function to initiallize the mail bag that you can open and use in game. (to go through peoples mail) shhhh
		mail=new Mail(game,'mailBag');
		console.log("mailbag");
		game.add.existing(mail);
}

DayZero.prototype.createAllNPCS=function(){ //this creates all npcs. Including the mailbox! Isn't that novel. Noval. Novle. Currently, only the mailbox and the mayor are being made and initialized here
	tutorialMayor= new TutorialMayor(game.world.centerX*0.5,game.world.centerY*1,"Mayor"); //init mayor
	this.game.physics.arcade.enable(tutorialMayor); //establish mayor physics
	tutorialMayor.enableBody=true;
	tutorialMayor.body.collideWorldBounds=true;
	tutorialMayor.body.immovable=true;
	tutorialMayor.body.enable=true;
	tutorialMayor.dialogueIndex=0;
	tutorialMayor.inputEnabled = true;
    tutorialMayor.events.onInputDown.add(clickToTalk, this);

//has to be done for npcs that use variables that are determined after initalization of the game. Otherwise the variables will be undefined.
	tutorialMayor.sentences=[
    //first numeric value represents the number of strings in that dialogue list.
    //[0,x]
    /*
    [3,
    "Hello",
    "Boop",
    "This is Some Text"
    ],
    */
    //[1,x]
   	[2,
    "Ahh "+playerName+" are you here to deliver my mail to me?\nCome here and let me see it.",
    "Hmm more junk it seems. This mayor business is hard work...\nAnyway good work today, I'll see you tomorrow to discuss your role\n in the town"
    ]

];
	//tutorialMayor.scale.setTo(2.5,2.5);
	tutorialMayor.smoothed=false;
	tutorialMayor.frame=0;
	game.add.existing(tutorialMayor);
	tutorialMayor.animations.add("Idle",[0,1,3,4],2,true); //add animations

	mailBox= new MailBox(game.world.centerX*1.1,game.world.centerY*1.4,"MailBox"); //here we add the iconic mailbox npc. The mail box is your in-game best friend
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
}

DayZero.prototype.createCharacter=function(){ //this creates you. Talk about existential terror
	character= new player(game.world.centerX,game.world.centerY); //isn't it great to think that you are created at the very center of this world. Neigh, the center of this universe
	this.game.physics.arcade.enable(character); 
	character.enableBody=true;
	character.body.collideWorldBounds=true;
	character.body.onCollide = new Phaser.Signal();
	character.body.onCollide.add(character.talk, this);
	game.add.existing(character);	
	//character.scale.setTo(2,2);
	//character.body.setSize(character.width/.4,character.height/.7,0,character.height*1.1);
	character.animations.add("IdleRight",[0,1],1,true); //character animations. Idle right and idle left are how you stand while idling
    character.animations.add("rightWalk",[2,3],10,true);
    character.animations.add("leftWalk",[4,5],10,true);
    character.animations.add("IdleLeft",[6,7],1,true);
    character.smoothed=false;
}

DayZero.prototype.createTrees=function(){ //the trees are created here. They aren't npcs because you can't interact with them. In case you were wondering what made the mailbox so special
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
var _emitter; //oooh. The emitter. This emitts leaves. Infinitely. Like magic. 
DayZero.prototype.leafs=function(){
	_emitter=game.add.emitter(game.centerX,game.centerY,600);
	_emitter.makeParticles('leaf');
		_emitter.start(false, 14000, 500);
	_emitter.x=game.world.centerX;
	_emitter.y=0;
	_emitter.width=game.world.width;
	_emitter.maxParticleScale = 3;
    _emitter.minParticleScale = 2;
    _emitter.setYSpeed(0, 2);


}

DayZero.prototype.loadTiles=function(){
		house=this.game.add.sprite(game.world.centerX,game.world.centerY*.2,"Building");
		//house.scale.setTo(3,3);
		this.game.physics.arcade.enable(house);
		house.enableBody=true;
		house.body.collideWorldBounds=true;
		house.body.immovable=true;
}

DayZero.prototype.create=function(){
	tileSprite = game.add.sprite(0, 0, 'level0');
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	//game.world.setBounds(0,0,worldWidth,worldHeight); //make the world larger than the camera viewport
	showtextOnce=false;
	this.createTrees();
	this.createAllNPCS();
	this.loadTiles();
	river=game.add.tileSprite(256,64,game.world.centerX,game.world.centerY,"river");
	river.scale.setTo(2,2);

	river.smoothed=false;
	river.x=0;
	river.y=600;
	this.game.physics.arcade.enable(river);
	river.enableBody=true;
	//river.body.collideWorldBounds=true;
	river.body.immovable=true;
	river.body.setSize(1920,128);
	this.createCharacter();
	game.camera.follow(character);
	game.time.events.loop(Phaser.Timer.SECOND, dialogueCountDown, this);
	isDialogueUp=false;

	BGM= game.add.audio("village", .5);
	BGM.loop=true;
	BGM.play();
 	game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
	
	this.leafs();
	//game.add.existing(cursor);
    console.log("sfsdjkhgkje");
	this.mailBag();
	mail.deleteFromGroup();
	mail.addToGroup(stage);
	mail.makeInvisible();
	for(var i=0;i<11;i++){
		mail.addToGroup(stage);
	}
	mail.setKeys(stage);


	mail.setUp(stage);


	//default to mail not being open
	mailMenu=false;
	cursor= game.add.sprite(0,0,"cursor");
	cursor.scale.setTo(5,5);
	//cursor.anchor(0.5,0.5);
	cursor.anchor.setTo(0,0);
	cursor.smoothed=false;
	clickToTalk(tutorialMayor);
}
//this.game.stage.scale.refresh();


DayZero.prototype.listener=function(){
	counter++;
//text.text="You clicked "+ counter + " times!";
}

DayZero.prototype.update=function(){
	river.tilePosition.x-=.1;
	if(isDialogueUp==false && showtextOnce==false){
		tutorialDialogueSetUp("Press SPACE while walking into an npc to deliver mail to them.\nPress the M key to view your mail.\nFinish the day by delivering all the mail and returning to the mail box!",null);
		showtextOnce=true;
	} 
	tutorialMayor.animations.play("Idle");
	cursor.x=game.input.x+game.camera.x;
	cursor.y=game.input.y+game.camera.y;
	if (game.input.keyboard.isDown(Phaser.Keyboard.ESC) && isDialogueUp==true)
	    {
	    	cleanDialogue();
	    }
	//game.debug.inputInfo(32, 32);

	if(game.input.keyboard.justPressed(Phaser.Keyboard.M)){
		if(!flipflop){
			flipflop=true;
			if(mail.visible==true){
				mail.makeInvisible();
				mail.killLetter();
				canPlayerMove=true;
			}else if(mail.visible==false){
				mail.makeVisible();
				canPlayerMove=false;
					for (var i = mailGroup.length - 1; i >= 0; i--) {
						console.log("I HAVE LOTS OF MAIL " + i);
						console.log(mailGroup.children[i].mailKey);
					}
			}
		}
	}
	if(game.input.keyboard.justReleased(Phaser.Keyboard.M)){
		flipflop=false;
	}
}

DayZero.prototype.render=function(){
}