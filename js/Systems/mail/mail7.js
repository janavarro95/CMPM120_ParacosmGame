//-------------------
var mail7Group;
var m;
//-------------------
var letter;
var message;

var deliveredAllmail7;
//--------------------------------------------------------------------------
//depending on the stage time load the notes with different sets of text then assign them a value

var Mail7 = function(game,key){
Phaser.Sprite.call(this,game,game.camera.x+game.camera.width/2,game.camera.y+game.camera.height/2,key,null);
	console.log("Make my mail7Bag");
	this.scale.setTo(30,20);
	this.anchor.setTo(.5,.5);
	this.smoothed=false;
}

Mail7.prototype= Object.create(Phaser.Sprite.prototype);
Mail7.prototype.constructor=Mail7;


Mail7.prototype.makeGrid=function(){
	//when mail7 is made visible this function will be called
	//it orients the actual mail7 on the mail7bag in a set grid
	//mail7Group.createMultiple(5,'mail7',true);
	//mail7Group.scale.setTo(10,10);
	//mail7Group.align(game.world.centerX,game.world.centerY, 500, 500);

	for (var i=0;i<mail7Group.length;i++) {
		if(i<6){
			mail7Group.children[i].y=game.camera.y+game.camera.height/2-150;
			mail7Group.children[i].x=game.camera.x+game.camera.width/2-(375)+((i)*150);
		}else{
			mail7Group.children[i].y=game.camera.y+game.camera.height/2+125;
			mail7Group.children[i].x=game.camera.x+game.camera.width/2-(375)+((i-6)*150);
		}
	}
}
Mail7.prototype.addToGroup=function(stage){
	console.log("is this even being used");
	if(!mail7Group){
		mail7Group=game.add.group();
	}
	var letterSetUp=game.add.sprite(game.world.centerX,game.world.centerY,'mail');
	letterSetUp.inputEnabled = true;
	letterSetUp.scale.setTo(8,8);
	letterSetUp.anchor.setTo(.5,.5);
	letterSetUp.smoothed=false;
	//letterSetUp.visible=false;
	console.log(stage+ "is the sdfgdfgdfhdfhdfhdfh stage");
	letterSetUp.events.onInputDown.add(
		function(){
			//console.log("clicked");
			//check the stage nad the index of the object clicked
			//then display a new sprite on the screen with the text overlaying it
			//depending on letterSetUps current pos print different text to the box
			//console.log(letterSetUp.x);
			//console.log(letterSetUp.y);
			if(letter){
				letter.kill();
				if(escText) escText.kill();
				if(message){
					message.kill();
				}
			}
			console.log("making the letter");
			letter=game.add.sprite(game.camera.x+game.camera.width/2,game.camera.y+game.camera.height/2,'letter');
			letter.smoothed=false;
			letter.anchor.setTo(.5,.5);
			letter.scale.setTo(20,20);
			game.add.existing(letter);
			letter.mail7Key="key";
			var printText=function(string){
				console.log("tater tots");
				var style = { font: "12px Arial", fill: "#000", 
		        align: "left", // the alignment of the text is independent of the bounds, try changing to 'center' or 'right'
		        boundsAlignH: "left", 
		        boundsAlignV: "top", 
		        wordWrap: true, wordWrapWidth: 300 };
        		message=game.add.text(game.camera.x+game.camera.width/2,game.camera.y+game.camera.height/2,string,style);
				message.setTextBounds(0, 0, 300, 568);
				message.anchor.setTo(.5,.5);
				if(message){
					message.visible=true;
				}
			}	
			var printText2=function(string){
				console.log("tater tots");
				var style = { font: "16px Arial", fill: "#000", 
		        align: "left", // the alignment of the text is independent of the bounds, try changing to 'center' or 'right'
		        boundsAlignH: "left", 
		        boundsAlignV: "top", 
		        wordWrap: true, wordWrapWidth: 300 };
        		escText=game.add.text(game.camera.x+game.camera.width/2,game.camera.y+game.camera.height*.8,string,style);
				escText.setTextBounds(0, 0, 300, 568);
				escText.anchor.setTo(.5,.5);
				if(escText){
					escText.visible=true;
				}
			}

			printText2("[Press escape to close]");					
			//console.log("1010101010101010101010101-----------");
			console.log("STAGE: "+stage);
					if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail7Group.children[0].mail7Key);
						printText("Dear Citizen,\n     In this weekly newsletter brought to you directly from the Mayor himself, we will discuss ways to improve your work output and keep an eye out for dissenters. A reminder: dissenters want to hurt you and your families. They are scum that want to tear down the order and peace that has been established for you by the Mayor. \n     In other news, new job openings have been posted for the progressive industry created by our Leader. Both the mine and the Lumber operations are hiring. These jobs offer great benefits for you and your family and are guaranteed to see you better off than you began. See your local government office to inquire now about how you can get started today. \n     Keep yourselves posted on further updates brought to you by the Office of the Mayor including notifications about wanted and dangerous criminals and their lies. \nOffice of the Mayor");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+150&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail7Group.children[1].mail7Key);
						printText("Dear Citizen,\n     In this weekly newsletter brought to you directly from the Mayor himself, we will discuss ways to improve your work output and keep an eye out for dissenters. A reminder: dissenters want to hurt you and your families. They are scum that want to tear down the order and peace that has been established for you by the Mayor. \n     In other news, new job openings have been posted for the progressive industry created by our Leader. Both the mine and the Lumber operations are hiring. These jobs offer great benefits for you and your family and are guaranteed to see you better off than you began. See your local government office to inquire now about how you can get started today. \n     Keep yourselves posted on further updates brought to you by the Office of the Mayor including notifications about wanted and dangerous criminals and their lies. \nOffice of the Mayor");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(2*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail7Group.children[2].mail7Key);
						printText("Dear Citizen,\n     In this weekly newsletter brought to you directly from the Mayor himself, we will discuss ways to improve your work output and keep an eye out for dissenters. A reminder: dissenters want to hurt you and your families. They are scum that want to tear down the order and peace that has been established for you by the Mayor. \n     In other news, new job openings have been posted for the progressive industry created by our Leader. Both the mine and the Lumber operations are hiring. These jobs offer great benefits for you and your family and are guaranteed to see you better off than you began. See your local government office to inquire now about how you can get started today. \n     Keep yourselves posted on further updates brought to you by the Office of the Mayor including notifications about wanted and dangerous criminals and their lies. \nOffice of the Mayor");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(3*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail7Group.children[2].mail7Key);
						printText("Dear Citizen,\n     In this weekly newsletter brought to you directly from the Mayor himself, we will discuss ways to improve your work output and keep an eye out for dissenters. A reminder: dissenters want to hurt you and your families. They are scum that want to tear down the order and peace that has been established for you by the Mayor. \n     In other news, new job openings have been posted for the progressive industry created by our Leader. Both the mine and the Lumber operations are hiring. These jobs offer great benefits for you and your family and are guaranteed to see you better off than you began. See your local government office to inquire now about how you can get started today. \n     Keep yourselves posted on further updates brought to you by the Office of the Mayor including notifications about wanted and dangerous criminals and their lies. \nOffice of the Mayor");
					}
					else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(4*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail7Group.children[2].mail7Key);
						printText("Dear Citizen,\n     In this weekly newsletter brought to you directly from the Mayor himself, we will discuss ways to improve your work output and keep an eye out for dissenters. A reminder: dissenters want to hurt you and your families. They are scum that want to tear down the order and peace that has been established for you by the Mayor. \n     In other news, new job openings have been posted for the progressive industry created by our Leader. Both the mine and the Lumber operations are hiring. These jobs offer great benefits for you and your family and are guaranteed to see you better off than you began. See your local government office to inquire now about how you can get started today. \n     Keep yourselves posted on further updates brought to you by the Office of the Mayor including notifications about wanted and dangerous criminals and their lies. \nOffice of the Mayor");
					}
					else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(5*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail7Group.children[2].mail7Key);
						printText("Dear Citizen,\n     In this weekly newsletter brought to you directly from the Mayor himself, we will discuss ways to improve your work output and keep an eye out for dissenters. A reminder: dissenters want to hurt you and your families. They are scum that want to tear down the order and peace that has been established for you by the Mayor. \n     In other news, new job openings have been posted for the progressive industry created by our Leader. Both the mine and the Lumber operations are hiring. These jobs offer great benefits for you and your family and are guaranteed to see you better off than you began. See your local government office to inquire now about how you can get started today. \n     Keep yourselves posted on further updates brought to you by the Office of the Mayor including notifications about wanted and dangerous criminals and their lies. \nOffice of the Mayor");
					}
			console.log("after switch");

		}, this);
	//Initialize the mail7 keys for the stage here.
	mail7Group.add(letterSetUp);
	console.log(mail7Group.length);
}

Mail7.prototype.setKeys=function(stage){
	//Use this area to set which npc's that day get mail7.
			console.log("OK, here we go.")
			mail7Group.children[0].mail7Key="Jus";
			mail7Group.children[1].mail7Key="Jo";
			mail7Group.children[2].mail7Key="Ann";
			mail7Group.children[3].mail7Key="Phil";
			mail7Group.children[4].mail7Key="Amy Tanice";
			mail7Group.children[5].mail7Key="Winchell";
}

Mail7.prototype.setUp=function(stage){
	//change these values to set how many mail7 pieces need to be delivered for the day.
	//look through and reenable everything
	for(var i=0;i<mail7Group.length;i++){
		mail7Group.children[i].visible=true;
		if(message){
			console.log("message exists");
			message.visible=true;
		}
		//letter.visible=true;
	}
	for(var i=6;i<mail7Group.length;i++){
		mail7.giveLetter(i);
	}
}

Mail7.prototype.doesKeyMatch=function(npcName){
	for (var i = mail7Group.length - 1; i >= 0; i--) {
       //console.log("This is a mail7 key2222");
       //console.log(mail7Group.children[i].mail7Key);
       if(mail7Group.children[i].mail7Key==npcName) this.giveLetter(i);
    }
}

Mail7.prototype.hasDeliveredAllmail7=function(){
	for (var i = mail7Group.length - 1; i >= 0; i--) {
       //console.log("This is a mail7 key2222");
       //console.log(mail7Group.children[i].mail7Key);
       if(mail7Group.children[i].visible==true) return false
    }
	return true;
}

Mail7.prototype.center=function(){
	this.x=game.camera.x+game.camera.width/2;
	this.y=game.camera.y+game.camera.height/2;
}
Mail7.prototype.makeVisible=function(){
	this.visible=true;
	mail7Group.visible=true;
	//place the group
	this.center();
	this.makeGrid();
}
Mail7.prototype.checkUp=function(){
	if(this.visible==true){
		//its visible
		return true;
	}
}
Mail7.prototype.makeInvisible=function(){
	this.visible=false;
	mail7Group.visible=false;
}

Mail7.prototype.deleteFromGroup=function(object){
	//clear the group
	if(mail7Group){
		mail7Group.removeAll(true);
		console.log("mail7group undefined");
	}else{

	}
}
Mail7.prototype.killLetter=function(){
	if(letter){
		letter.kill();
		if(message){
			message.kill();
		}
		if(escText) escText.kill();
	}
}
Mail7.prototype.giveLetter=function(index){
	mail7Group.children[index].visible=false;
	mail7Group.children[index].inputEnabled=false;
}
Mail7.prototype.resetBag=function(){
	for(var i;i<mail7Group.length;i++){
		mail7Group.children[i].visible=true;
		mail7Group.children[i].inputEnabled=true;
	}
}
Mail7.prototype.update=function(){
	if(game.input.keyboard.justPressed(Phaser.Keyboard.ESC)){
		//letter.kill();
		console.log("esc");
		if(letter){
			letter.kill();
		}
		if(message){
			message.kill();
		}
		if(escText) escText.kill();
	}
	for(var i=0;i<mail7Group.length;i++){
		if(mail7Group.children[i].input.pointerOver()){
			//check for click event

			mail7Group.children[i].scale.setTo(7,7);
		}else{
			mail7Group.children[i].scale.setTo(6,6);
		}	
	}
}
