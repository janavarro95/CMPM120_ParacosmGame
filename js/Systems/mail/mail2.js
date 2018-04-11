//-------------------
var mail2Group;
var m;
//-------------------
var letter;
var message;

var deliveredAllmail2;
//--------------------------------------------------------------------------
//depending on the stage time load the notes with different sets of text then assign them a value

var Mail2 = function(game,key){
Phaser.Sprite.call(this,game,game.camera.x+game.camera.width/2,game.camera.y+game.camera.height/2,key,null);
	console.log("Make my mail2Bag");
	this.scale.setTo(30,20);
	this.anchor.setTo(.5,.5);
	this.smoothed=false;
}

Mail2.prototype= Object.create(Phaser.Sprite.prototype);
Mail2.prototype.constructor=Mail2;


Mail2.prototype.makeGrid=function(){
	//when mail2 is made visible this function will be called
	//it orients the actual mail2 on the mail2bag in a set grid
	//mail2Group.createMultiple(5,'mail2',true);
	//mail2Group.scale.setTo(10,10);
	//mail2Group.align(game.world.centerX,game.world.centerY, 500, 500);

	for (var i=0;i<mail2Group.length;i++) {
		if(i<6){
			mail2Group.children[i].y=game.camera.y+game.camera.height/2-150;
			mail2Group.children[i].x=game.camera.x+game.camera.width/2-(375)+((i)*150);
		}else{
			mail2Group.children[i].y=game.camera.y+game.camera.height/2+125;
			mail2Group.children[i].x=game.camera.x+game.camera.width/2-(375)+((i-6)*150);
		}
	}
}
Mail2.prototype.addToGroup=function(stage){
	console.log("is this even being used");
	if(!mail2Group){
		mail2Group=game.add.group();
	}
	var letterSetUp=game.add.sprite(game.world.centerX,game.world.centerY,'mail');
	letterSetUp.inputEnabled = true;
	letterSetUp.scale.setTo(8,8);
	letterSetUp.anchor.setTo(.5,.5);
	letterSetUp.smoothed=false;
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
			letter.mail2Key="key";
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
						//console.log(mail2Group.children[0].mail2Key);
						printText("Dear Terry, \n     I’m going to attach a new recipe to this letter. I’ve named it the Stonewall Quiche. You will understand why when you read the recipe. While I’m writing, I just wanted to say how much it means to me that you have taken over the business for me. I’ve put so much love into the restaurant. I don’t know what I would do if it went out of business. I do hope you decide to keep working at it and stand for what the restaurant represents; good food. Be sure to write back to me what you think of the recipe and say hello to your family for me. \n     With love, Your Mother");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+150&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail2Group.children[1].mail2Key);
						printText("Dear Fredstaire,     \nIt's your mother. Why don’t you ever write me anymore? You know I get worried about you. Are you making sure to eat enough? You never did take proper care of yourself. Have you found yourself anyone interesting yet? Whatever happened to that woman who joined the council recently? You seemed pretty interested in her. I’m not getting any younger and I expect grandchildren! Write me back! \n     Your Mother \n");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(2*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail2Group.children[2].mail2Key);
						printText("Dear Em, \n     Its your sister again. Ms Fluffins is sick right now. I thought you should know. I know you loved her a lot and miss her. You always say as much. Anyway, if you want to say goodbye… well you should come visit home. I know Mom and Dad miss you too. You should bring that man along with you. I know you say that there is nothing going on between you two but do you really expect me to believe that? You are always talking so highly of him. I think I deserve to see this man. \n     Anyway sis, whatever you decide, know that the family misses you. The bakery job is going well. \n     Your loving sister");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(3*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						printText("Dr. Amy Tanice, \n     This is a follow up letter to thank you for your expressed interest in our movement. We would like to inform you that we are dedicated to informing the populace and promoting healthy individuals across the land. We would also like to inform you that our progress is currently being blocked. While we see this as merely a temporary matter, we hope to see help from you in future endeavours as well. \n Hopefully you will keep us updated and informed about the goings on of your town. We here are currently fighting against several industrial projects in the area. Normally our work involves helping the individual in pain. However, these projects put people in danger as they pose safety hazards and unhealthy environmental conditions. \n     Signed, Dr Felipe");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(4*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						printText("Dear Walter, \n     It’s your cousin Roggy. It has been real trouble getting mail to you considering the state of relations between our two countries right now. I don’t know when the next time I am going to be able to write to you will be. It has come to my attention that many leaders across your country are throwing away facts and ruining the standards that your country used to stand for. Well, that is what our leaders are saying at least. I have heard that discussions have broken down on several occasions between our two countries. \n     In short, I am scared for you cousin. I know some guys over here, I could get you a job and a place to stay for a while. Family has always been important to us. If you can, send this letter along to your niece and let her know that the offer goes for her as well. It doesn’t look like you are going to be welcome over there for much longer. \n     Roggy, your cousin\n");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(5*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						printText("Gerald, \n     This notice is to inform you that your unlawful choice of living arrangement is subject to fine and potentially imprisonment. If you choose to continue to loiter in this way, legal action will be taken to remove you, by force if necessary, and transplant you to a government sanctioned facility. If for disability reasons you are unable to read this, please consult your local government department. \n     -The Office of the Mayor");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(0*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Dear Winchell Family, \n     We are writing to thank you for your sale of the mine to our corporation; Mines Inc. The money agreed upon will be sent to you soon. Please know that our corporation has discussed the requests you have made regarding safety conditions around the mine. The HR department has agreed upon the following statement. \n     Mines Inc, is and always will be dedicated to the wellbeing of its employees and their families. We will keep a close and careful eye on the surrounding environment as well, with special consideration to the river which lies close to the mine and is a key source of water for the town. Our interests coincide with the interests of the town and its people. \n     Signed, John Johnson, Mine Inc. Exec");
					}
					else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(1*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Dear Jo, \n     Why do we have to talk through letters like this? We are in the same class. Be sure to bring the frog next time! \n     -Jenny");
					}
					else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(2*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Ms. Ann, \n     It occurs to me that you have teaching our children some questionable things. Including topics that include unpleasant details regarding our leader. I am very aware that he is a figure of much controversy however it is not your business telling our children how they should think. It is the duty of the parent to inform their child about these topics and discussions about our leaders should be KEPT OUT of the schooling system. If this sort of behavior continues then I will be forced to go the the Department of Education and seek action on their part in handling this. \n     Sincerely, A Concerned Parent");
					}
					else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(3*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Dear Jus, \n     Hey, I’m just writing you about your next shipment of furs from our side of the world. Looks like permissions have been given to hunt more in our neck of the woods. A lot of sanctions have been lifted that had been intended to protect the local wildlife. I can’t say that I’m a fan, however it looks like I’ll be able to add onto the shipment heading your way in the next couple of months. If this is something that would interest you, respond as soon as you can. Otherwise I’ll send the normal amount of goods as agreed. \n     Also, if you have any news regarding what’s happening in your town, you know I like to stay informed. It helps predict the flow of trade. Between you and me, goods may be increasing but I expect trade to be suffering in the years to come. Let us hope not though. \n     Signed Timber Peltson");
					}
					else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(4*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Phil, \n     They are sending me to the mines. The mayor himself came to the prison and thanked us for our contribution to society. I guess work is work but there is only so much they can ask of us in our current living conditions. They will be guarding us in the mines while we work. I haven’t heard good things about the conditions in there so if for some reason something goes wrong… well let ma know I lover her. \n     -Steve");
					}
			console.log("after switch");

		}, this);
	//Initialize the mail2 keys for the stage here.
	mail2Group.add(letterSetUp);
	console.log(mail2Group.length);
}

Mail2.prototype.setKeys=function(stage){
	//Use this area to set which npc's that day get mail2.
			console.log("OK, here we go.")
			mail2Group.children[0].mail2Key="Terry";
			mail2Group.children[1].mail2Key="Fredstaire";
			mail2Group.children[2].mail2Key="Em";
			mail2Group.children[3].mail2Key="Amy Tanice";
			mail2Group.children[4].mail2Key="Walter P.";
			mail2Group.children[5].mail2Key="Gerald";
			mail2Group.children[6].mail2Key="Winchell";
			mail2Group.children[7].mail2Key="Jo";
			mail2Group.children[8].mail2Key="Ann";
			mail2Group.children[9].mail2Key="Jus";
			mail2Group.children[10].mail2Key="Phil";

}

Mail2.prototype.setUp=function(stage){
	//change these values to set how many mail2 pieces need to be delivered for the day.
	//look through and reenable everything
	for(var i=0;i<mail2Group.length;i++){
		mail2Group.children[i].visible=true;
		if(message){
			console.log("message exists");
			message.visible=true;
		}
		//letter.visible=true;
	}
			for(var i=11;i<mail2Group.length;i++){
				mail2.giveLetter(i);
			}
}

Mail2.prototype.doesKeyMatch=function(npcName){
	for (var i = mail2Group.length - 1; i >= 0; i--) {
       //console.log("This is a mail2 key2222");
       //console.log(mail2Group.children[i].mail2Key);
       if(mail2Group.children[i].mail2Key==npcName) this.giveLetter(i);
    }
}

Mail2.prototype.hasDeliveredAllmail2=function(){
	for (var i = mail2Group.length - 1; i >= 0; i--) {
       //console.log("This is a mail2 key2222");
       //console.log(mail2Group.children[i].mail2Key);
       if(mail2Group.children[i].visible==true) return false
    }
	return true;
}

Mail2.prototype.center=function(){
	this.x=game.camera.x+game.camera.width/2;
	this.y=game.camera.y+game.camera.height/2;
}
Mail2.prototype.makeVisible=function(){
	this.visible=true;
	mail2Group.visible=true;
	//place the group
	this.center();
	this.makeGrid();
}
Mail2.prototype.checkUp=function(){
	if(this.visible==true){
		//its visible
		return true;
	}
}
Mail2.prototype.makeInvisible=function(){
	this.visible=false;
	mail2Group.visible=false;
}

Mail2.prototype.deleteFromGroup=function(object){
	//clear the group
	if(mail2Group){
		mail2Group.removeAll(true);
		console.log("mail2group undefined");
	}else{

	}
}
Mail2.prototype.killLetter=function(){
	if(letter){
		letter.kill();
		if(message){
			message.kill();
		}
		if(escText) escText.kill();
	}
}
Mail2.prototype.giveLetter=function(index){
	mail2Group.children[index].visible=false;
	mail2Group.children[index].inputEnabled=false;
}
Mail2.prototype.resetBag=function(){
	for(var i;i<mail2Group.length;i++){
		mail2Group.children[i].visible=true;
		mail2Group.children[i].inputEnabled=true;
	}
}
Mail2.prototype.update=function(){
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
	for(var i=0;i<mail2Group.length;i++){
		if(mail2Group.children[i].input.pointerOver()){
			//check for click event

			mail2Group.children[i].scale.setTo(7,7);
		}else{
			mail2Group.children[i].scale.setTo(6,6);
		}	
	}
}
