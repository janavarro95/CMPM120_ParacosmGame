//-------------------
var mail6Group;
var m;
//-------------------
var letter;
var message;

var deliveredAllmail6;
//--------------------------------------------------------------------------
//depending on the stage time load the notes with different sets of text then assign them a value

var Mail6 = function(game,key){
Phaser.Sprite.call(this,game,game.camera.x+game.camera.width/2,game.camera.y+game.camera.height/2,key,null);
	console.log("Make my mail6Bag");
	this.scale.setTo(30,20);
	this.anchor.setTo(.5,.5);
	this.smoothed=false;
}

Mail6.prototype= Object.create(Phaser.Sprite.prototype);
Mail6.prototype.constructor=Mail6;


Mail6.prototype.makeGrid=function(){
	//when mail6 is made visible this function will be called
	//it orients the actual mail6 on the mail6bag in a set grid
	//mail6Group.createMultiple(5,'mail6',true);
	//mail6Group.scale.setTo(10,10);
	//mail6Group.align(game.world.centerX,game.world.centerY, 500, 500);

	for (var i=0;i<mail6Group.length;i++) {
		if(i<6){
			mail6Group.children[i].y=game.camera.y+game.camera.height/2-150;
			mail6Group.children[i].x=game.camera.x+game.camera.width/2-(375)+((i)*150);
		}else{
			mail6Group.children[i].y=game.camera.y+game.camera.height/2+125;
			mail6Group.children[i].x=game.camera.x+game.camera.width/2-(375)+((i-6)*150);
		}
	}
}
Mail6.prototype.addToGroup=function(stage){
	console.log("is this even being used");
	if(!mail6Group){
		mail6Group=game.add.group();
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
			letter.mail6Key="key";
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
						//console.log(mail6Group.children[0].mail6Key);
						printText("Terry, \n     We are leaving our home. We have arranged transport to the border where we plan on crossing over. The borders are closed so it may be difficult but it is better than staying. The children need hope in their lives and so do I. I hope you are here when we leave. I hope you give up that restaurant in that forsaken town and come with us. The children need you. Please be there when we leave. Please come home. \nYour Wife");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+150&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail6Group.children[1].mail6Key);
						printText("Guard Phil, \n     This is a notice to inform you that due to recent health complications, your incarcerated brother has expired. You are listed as the next of kin for notification. It is our duty to inform you that he died doing a service to his town and its people. For further inquiries, please direct your questions to the office of the Mayor directly. \nOffice of the Mayor, Corrections Dept.");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(2*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail6Group.children[2].mail6Key);
						printText("Dear Em, \n     I am just writing to inform you that everything here is great. The leader definitely has our best interest in mind in my town. The family misses you.\nYour Sister");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(3*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						printText("Guard Phil, \n     This is a notice to inform you that due to recent health complications, your incarcerated brother has expired. You are listed as the next of kin for notification. It is our duty to inform you that he died doing a service to his town and its people. For further inquiries, please direct your questions to the office of the Mayor directly. \nOffice of the Mayor, Corrections Dept.");
					}
			console.log("after switch");

		}, this);
	//Initialize the mail6 keys for the stage here.
	mail6Group.add(letterSetUp);
	console.log(mail6Group.length);
}

Mail6.prototype.setKeys=function(stage){
	//Use this area to set which npc's that day get mail6.
			console.log("OK, here we go.")
			mail6Group.children[0].mail6Key="Terry";
			mail6Group.children[1].mail6Key="Phil";
}

Mail6.prototype.setUp=function(stage){
	//change these values to set how many mail6 pieces need to be delivered for the day.
	//look through and reenable everything
	for(var i=0;i<mail6Group.length;i++){
		mail6Group.children[i].visible=true;
		if(message){
			console.log("message exists");
			message.visible=true;
		}
		//letter.visible=true;
	}
	for(var i=2;i<mail6Group.length;i++){
		mail6.giveLetter(i);
	}
}

Mail6.prototype.doesKeyMatch=function(npcName){
	for (var i = mail6Group.length - 1; i >= 0; i--) {
       //console.log("This is a mail6 key2222");
       //console.log(mail6Group.children[i].mail6Key);
       if(mail6Group.children[i].mail6Key==npcName) this.giveLetter(i);
    }
}

Mail6.prototype.hasDeliveredAllmail6=function(){
	for (var i = mail6Group.length - 1; i >= 0; i--) {
       //console.log("This is a mail6 key2222");
       //console.log(mail6Group.children[i].mail6Key);
       if(mail6Group.children[i].visible==true) return false
    }
	return true;
}

Mail6.prototype.center=function(){
	this.x=game.camera.x+game.camera.width/2;
	this.y=game.camera.y+game.camera.height/2;
}
Mail6.prototype.makeVisible=function(){
	this.visible=true;
	mail6Group.visible=true;
	//place the group
	this.center();
	this.makeGrid();
}
Mail6.prototype.checkUp=function(){
	if(this.visible==true){
		//its visible
		return true;
	}
}
Mail6.prototype.makeInvisible=function(){
	this.visible=false;
	mail6Group.visible=false;
}

Mail6.prototype.deleteFromGroup=function(object){
	//clear the group
	if(mail6Group){
		mail6Group.removeAll(true);
		console.log("mail6group undefined");
	}else{

	}
}
Mail6.prototype.killLetter=function(){
	if(letter){
		letter.kill();
		if(message){
			message.kill();
		}
		if(escText) escText.kill();
	}
}
Mail6.prototype.giveLetter=function(index){
	mail6Group.children[index].visible=false;
	mail6Group.children[index].inputEnabled=false;
}
Mail6.prototype.resetBag=function(){
	for(var i;i<mail6Group.length;i++){
		mail6Group.children[i].visible=true;
		mail6Group.children[i].inputEnabled=true;
	}
}
Mail6.prototype.update=function(){
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
	for(var i=0;i<mail6Group.length;i++){
		if(mail6Group.children[i].input.pointerOver()){
			//check for click event

			mail6Group.children[i].scale.setTo(7,7);
		}else{
			mail6Group.children[i].scale.setTo(6,6);
		}	
	}
}
