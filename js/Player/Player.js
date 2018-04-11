/*
This is the code for the player character.
*/

var playerName;
var canPlayerMove;
var playerLastDirection;

var somevar1;
var somevar2;

var player = function(xPos,yPos){
Phaser.Sprite.call(this,game,xPos,yPos,"Player",null);
console.log("Make my player");
}

player.prototype= Object.create(Phaser.Sprite.prototype);
player.prototype.constructor=player;

player.prototype.create=function(){

}

//The functionality to make the player talk to whatever npc he is facing.
player.prototype.talk=function(player, npc){
    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && isDialogueUp==false){
		if(npc==null || npc.name==null || npc.name==undefined || npc.talk==null) return;
        if(npc.talk()!=null)  npc.talk(); 
    }    
}
//The same as the above but with mouse functionality instead.
player.prototype.yell=function(player,npc){
    console.log("YELLING");
    if(isDialogueUp==false) npc.talk();
}


player.prototype.update=function(){
//console.log("MEH");
    if(playerLastDirection==null) playerLastDirection="Left";
	if(isDialogueUp==true) {
		this.animations.paused = true;
		if (playerLastDirection=="Left") this.animations.frame = 4;
		else this.animations.frame = 0;
	}
	if(isDialogueUp==true || canPlayerMove==false) return;
	//console.log("This is running");

 	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || game.input.keyboard.isDown(Phaser.KeyCode.A))
    {
        this.body.x -= 4;
        character.animations.play("leftWalk");
        playerLastDirection="Left";
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)|| game.input.keyboard.isDown(Phaser.KeyCode.D) )
    {
        this.body.x += 4;
        character.animations.play("rightWalk");
        playerLastDirection="Right";
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP) || game.input.keyboard.isDown(Phaser.KeyCode.W))
    {
        this.body.y -= 4;
        if(playerLastDirection=="Left")character.animations.play("leftWalk");
        if(playerLastDirection=="Right")character.animations.play("rightWalk");
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)|| game.input.keyboard.isDown(Phaser.KeyCode.S))
    {
        this.body.y += 4;
        if(playerLastDirection=="Left")character.animations.play("leftWalk");
        if(playerLastDirection=="Right")character.animations.play("rightWalk");
    }
    if(!game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && !game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && !game.input.keyboard.isDown(Phaser.Keyboard.UP)&& !game.input.keyboard.isDown(Phaser.Keyboard.DOWN)&& !game.input.keyboard.isDown(Phaser.KeyCode.A)&& !game.input.keyboard.isDown(Phaser.KeyCode.W) && !game.input.keyboard.isDown(Phaser.KeyCode.S) && !game.input.keyboard.isDown(Phaser.KeyCode.D) ){
      if(playerLastDirection=="Left")character.animations.play("IdleLeft");
      if(playerLastDirection=="Right")character.animations.play("IdleRight");
        console.log("TIME FOR A NAP!!");
    }

  //Checks for all of the collisions that can happen between the player and the world.
   game.physics.arcade.collide(character,npc1);
   game.physics.arcade.collide(character,npc2);
   game.physics.arcade.collide(character,npc3);
   game.physics.arcade.collide(character,npc4);
   game.physics.arcade.collide(character,npc5);
   game.physics.arcade.collide(character,npc6);
   game.physics.arcade.collide(character,npc7);
   game.physics.arcade.collide(character,npc8);
   game.physics.arcade.collide(character,npc9);
   game.physics.arcade.collide(character,npc10);
   game.physics.arcade.collide(character,npc13);
   game.physics.arcade.collide(character,mailBox);
   game.physics.arcade.collide(character,house);
   game.physics.arcade.collide(character,house2);
   game.physics.arcade.collide(character,house3);
   game.physics.arcade.collide(character,house4);
   game.physics.arcade.collide(character,house5);
   game.physics.arcade.collide(character,tutorialMayor);
   game.physics.arcade.collide(character, trees, this.collisionHandler, null, this);
   game.physics.arcade.collide(character,river);
    //console.log("AHHHH");
}

player.prototype.collisionHandler=function(){
//console.log("TREE");
}
