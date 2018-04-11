var DaySix=function(game){
console.log("Playing my awesome game:");
};

DaySix.prototype.preload=function(){

}
DaySix.prototype.mail6Bag=function(){
	//generate a mail6bag
	mail6=new Mail6(game,'mailBag');
	console.log("mail6bag");
	game.add.existing(mail6);
	
}

DaySix.prototype.createAllNPCS=function(){
	npc1 = new NPC1(game.world.centerX-600,game.world.centerY,"Jus");
	this.game.physics.arcade.enable(npc1);
	npc1.enableBody=true;
	npc1.body.collideWorldBounds=true;
	npc1.body.immovable=true;
	npc1.body.enable=true;
	npc1.dialogueIndex=5;
	npc1.inputEnabled = true;
    npc1.events.onInputDown.add(clickToTalk, this);

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
	npc2.dialogueIndex=5;
	npc2.inputEnabled = true;
    npc2.events.onInputDown.add(clickToTalk, this);
    npc2.scale.setTo(2,2);
	game.add.existing(npc2);
	npc2.animations.add("Idle",[0,1,2,3],2,true);
	npc2.smoothed=false;


	npc5= new NPC5(game.world.centerX+600,game.world.centerY+200,"Ann");
	this.game.physics.arcade.enable(npc5);
	npc5.enableBody=true;
	npc5.body.collideWorldBounds=true;
	npc5.body.immovable=true;
	//npc4.body.enable=true;
	npc5.dialogueIndex=5;
	npc5.inputEnabled = true;
    npc5.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc5);
	npc5.scale.setTo(1,1);
	npc5.animations.add("Idle",[0,1],2,true);
	npc5.smoothed=false;
	//town guard
	npc6= new NPC6(game.world.centerX+200,game.world.centerY+200,"Phil");
	this.game.physics.arcade.enable(npc6);
	npc6.enableBody=true;
	npc6.body.collideWorldBounds=true;
	npc6.body.immovable=true;
	//npc4.body.enable=true;
	npc6.dialogueIndex=5;
	npc6.inputEnabled = true;
    npc6.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc6);
	npc6.scale.setTo(1,1);
	npc6.animations.add("Idle",[0,1],2,true);
	npc6.smoothed=false;
	//Chef
	npc7= new NPC7(game.world.centerX-500,game.world.centerY-200,"Terry");
	this.game.physics.arcade.enable(npc7);
	npc7.enableBody=true;
	npc7.body.collideWorldBounds=true;
	npc7.body.immovable=true;
	//npc4.body.enable=true;
	npc7.dialogueIndex=5;
	npc7.inputEnabled = true;
    npc7.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc7);
	npc7.scale.setTo(1,1);
	npc7.animations.add("Idle",[0,1],2,true);
	npc7.smoothed=false;
	//WinchellFamily
	npc8= new NPC8(game.world.centerX+600,game.world.centerY-125,"Winchell");
	this.game.physics.arcade.enable(npc8);
	npc8.enableBody=true;
	npc8.body.collideWorldBounds=true;
	npc8.body.immovable=true;
	//npc4.body.enable=true;
	npc8.dialogueIndex=5;
	npc8.inputEnabled = true;
    npc8.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc8);
	npc8.scale.setTo(1,1);
	npc8.animations.add("Idle",[0,1,2,3],2,true);
	npc8.smoothed=false;
	//Doctor
	npc9= new NPC9(game.world.centerX-100,game.world.centerY+300,"AmyTanice");
	this.game.physics.arcade.enable(npc9);
	npc9.enableBody=true;
	npc9.body.collideWorldBounds=true;
	npc9.body.immovable=true;
	//npc4.body.enable=true;
	npc9.dialogueIndex=5;
	npc9.inputEnabled = true;
    npc9.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc9);
	npc9.scale.setTo(1,1);
	npc9.animations.add("Idle",[0,1],2,true);
	npc9.smoothed=false;
	//
	npc10= new NPC10(game.world.centerX+300,game.world.centerY-250,"Walter P.");
	this.game.physics.arcade.enable(npc10);
	npc10.enableBody=true;
	npc10.body.collideWorldBounds=true;
	npc10.body.immovable=true;
	//npc4.body.enable=true;
	npc10.dialogueIndex=5;
	npc10.inputEnabled = true;
    npc10.events.onInputDown.add(clickToTalk, this);
	game.add.existing(npc10);
	npc10.scale.setTo(1,1);
	npc10.animations.add("Idle",[0,1],2,true);
	npc10.smoothed=false;
	//homelessGuy

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

	npc1.dialogueIndex=5;
	npc2.dialogueIndex=5;
	npc5.dialogueIndex=5;
	npc6.dialogueIndex=5;
	npc7.dialogueIndex=5;
	npc8.dialogueIndex=5;
	npc9.dialogueIndex=5;
	npc10.dialogueIndex=5;
}

DaySix.prototype.createCharacter=function(){
	character= new player(game.world.centerX,game.world.centerY);
	this.game.physics.arcade.enable(character);
	character.enableBody=true;
	character.body.collideWorldBounds=true;
	character.body.onCollide = new Phaser.Signal();
	character.body.onCollide.add(character.talk, this);
	game.add.existing(character);	
	//character.scale.setTo(2,2);
	//character.body.setSize(character.width/.4,character.height/.7,0,character.height*1.1);
	character.animations.add("IdleRight",[0,1],1,true);
    character.animations.add("rightWalk",[2,3],10,true);
    character.animations.add("leftWalk",[4,5],10,true);
    character.animations.add("IdleLeft",[6,7],1,true);
    character.smoothed=false;
}

DaySix.prototype.createTrees=function(){
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
DaySix.prototype.leafs=function(){
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

DaySix.prototype.loadTiles=function(){
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

DaySix.prototype.create=function(){
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
 	game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

	//game.input.onDown.add(this.gofull, this);

	this.leafs();

    //console.log("sfsdjkhgkje");
	this.mail6Bag();
	mail6.addToGroup(stage);
	mail6.makeInvisible();
	for(var i=0;i<11;i++){
		mail6.addToGroup(stage);
	}
	mail6.setKeys(stage);


	mail6.setUp(stage);


	//default to mail6 not being open
	mail6Menu=false;
	cursor= game.add.sprite(0,0,"cursor");
	cursor.scale.setTo(5,5);
	//cursor.anchor(0.5,0.5);
	cursor.anchor.setTo(0,0);
	cursor.smoothed=false;

}
//this.game.stage.scale.refresh();


DaySix.prototype.listener=function(){
	counter++;
//text.text="You clicked "+ counter + " times!";
}

DaySix.prototype.update=function(){
		npc1.animations.play("Idle");
	npc2.animations.play("Idle");
	npc5.animations.play("Idle");
	npc6.animations.play("Idle");
	npc7.animations.play("Idle");
	npc8.animations.play("Idle");
	npc9.animations.play("Idle");


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

	if(game.input.keyboard.justPressed(Phaser.Keyboard.M)){
		if(!flipflop){
			flipflop=true;
			if(mail6.visible==true){
				mail6.makeInvisible();
				mail6.killLetter();
				canPlayerMove=true;
			}else if(mail6.visible==false){
				mail6.makeVisible();
				canPlayerMove=false;


					for (var i = mail6Group.length - 1; i >= 0; i--) {
						console.log("I HAVE LOTS OF MAIL " + i);
						console.log(mail6Group.children[i].mail6Key);
					}
			}
		}
	}
	if(game.input.keyboard.justReleased(Phaser.Keyboard.M)){
		flipflop=false;
	}
}

DaySix.prototype.render=function(){
   // game.debug.bodyInfo(character, 32, 32);

   // game.debug.body(character);

}