//-------------------
var mail1Group;
var m;
//-------------------
var letter;
var message;

var deliveredAllmail1;
//--------------------------------------------------------------------------
//depending on the stage time load the notes with different sets of text then assign them a value

var Mail1 = function(game,key){
Phaser.Sprite.call(this,game,game.camera.x+game.camera.width/2,game.camera.y+game.camera.height/2,key,null);
	console.log("Make my Mail1Bag for the game.");
	this.scale.setTo(30,20);
	this.anchor.setTo(.5,.5);
	this.smoothed=false;
}

Mail1.prototype= Object.create(Phaser.Sprite.prototype);
Mail1.prototype.constructor=Mail1;


Mail1.prototype.makeGrid=function(){
	//when mail1 is made visible this function will be called
	//it orients the actual mail1 on the mail1bag in a set grid
	//mail1Group.createMultiple(5,'mail1',true);
	//mail1Group.scale.setTo(10,10);
	//mail1Group.align(game.world.centerX,game.world.centerY, 500, 500);

	for (var i=0;i<mail1Group.length;i++) {
		if(i<6){
			mail1Group.children[i].y=game.camera.y+game.camera.height/2-150;
			mail1Group.children[i].x=game.camera.x+game.camera.width/2-(375)+((i)*150);
		}else{
			mail1Group.children[i].y=game.camera.y+game.camera.height/2+125;
			mail1Group.children[i].x=game.camera.x+game.camera.width/2-(375)+((i-6)*150);
		}
	}
}
Mail1.prototype.addToGroup=function(stage){
	console.log("is this even being used");
	if(!mail1Group){
		mail1Group=game.add.group();
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
			letter.mail1Key="key";
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
			console.log("STAGE: "+stage);			
			//add in all of the text to the letters in the game.
					if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail1Group.children[0].mail1Key);
						printText("Dear Terry, \n     Sounds like the kids and I will be coming to town for a bit to do some business. We can’t wait till you can come back with us one of these days. The kids are always talking about how much they miss you back home. I know you believe you need to save up a lot of money to provide for us but I know that if you just come and join us we can make things work. I know it is your mother’s and she put a lot of work into it but you don’t have to tie yourself down to this one job. But we have talked about this a lot already… Just wanted to let you know that we will be in town next week (assuming this letter reaches you in time).\n     Jasmine wanted dearly to talk to you about her adventures in the forest and Jim has started carving wood just like his grandfather. Just thought you would like to know.\nSincerely, \nYour loving wife \n");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+150&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail1Group.children[1].mail1Key);
						printText("Dear Em, \n     I heard you found yourself a spot on the council. Well, I just want to tell you that everyone back home is really proud of you. Especially Mom and Dad. We can’t wait for you to visit us again when you find the time. I know it must be hard now that you are a hot shot politician.\n     By the way, Ms. Fluffins is doing well for a cat of 17. She misses you dearly. The kids around town always stop by to play with her. I recently got a job at the local bakery. There is a cute boy working there. Maybe I’ll get to work with him! Anyway, hope you find satisfaction in your new job. \n     Love, Your favorite sister");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(2*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail1Group.children[2].mail1Key);
						printText("To whom it may concern, \n     Hello, it has come to my attention that your recent election saw the rise of an unpopular candidate. The council of towns would like consistent updates on the happenings within the next term. Your town is not the only one to see the rise of a questionable candidate. How your town runs and manages itself is not of our jurisdiction, however, you should be made aware that there have been some questions being asked about this new trend of elected officials. An official investigation is being arranged. In an attempt to save paper, I leave you to relay this information to your fellow council members. \n     Signed Philius Cornbee; Council Head \n");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(3*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						printText("Dear Dr. Amy Tanice, \n     We in the medical community in the next town over from you are concerned about the recent turn of events regarding the elections this season and were seeking to inquire with you as to whether you were having similar concerns in your town. A leader who does not understand the necessities of health and medicine can’t reasonably be trusted with the safety of our towns and the governing of our people. Furthermore, attached you will find a petition that you may sign your name to and send back to us so that we may send it to our mayor and potentially yours as well. This petition outlines our concerns and will, we hope, lead to a more informed administration in the coming years. \n     Signed, Dr Felipe \n");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(4*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						printText("Dear Walter Potatoson, \n     You are hereby being awarded by the Association of Farmers for your hard work and dedication in your community. We have looked into the efforts of farmers from towns across the continent and your efforts stand out amongst them. You are being awarded the Gold Carrot certificate. We would like to have you as a guest speaker at our next farming convention in a couple months. A letter will come shortly after this one detailing that event and the dates it will take place during. \n     -AoF Rep; Joseph Peppers \n");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(5*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						printText("Dear Winchell Family, \n     It has come to our attention here at Mines inc, that you have some land available for purchase. We have deigned to inform you of our willingness to purchase the old mine just outside of town. It is in conjunction with your new mayor that we seek to use that land for a joint business-state purpose that is intended to bring in money to you and your community. \nYou would be doing your friends and family a service by selling this land and allowing it to be developed by our corporation. We have been instructed to offer you a starting bid at 30,000 rumins. If you find this bid satisfactory or wish to counter our offer, please let us know as soon as you find it possible. \n     Signed, John Johnson, Mine Inc. Exec");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(0*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Dear Jo, \n     Meet me behind the schoul at 3. \n     -Jenny \n");
					}
					else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(1*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Dear Ann, \n     The school committee is receiving a new head of department soon. You should be informed that they heartily endorse our new Mayor and there is talk of far reaching policy reforms in the school system. You can expect a lot of changes in the coming years. You will of course be expected to implement these changes to the best of your ability whether you agree with our new leader or not. We will, after all, be working very closely with him to ensure the best for our children. They are the future. \n      Signed, Nancy; Secretary to the Dept. Head");
					}
					else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(2*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Dear Jus, \n     The next shipment is being a bit delayed. You know how tumultuous election season is. Well anyway, I am sending along an extra package of parsnips with this shipment to makeup for it. We have had a new farmer in town so we have had a surplus. In any case, say hi to your family for me. \nShipment: \nx40 parsnips \nx60 units alcohol \nx100 units assorted vegetables (the usual agreed amount) \nx30 units of specialty foods (avocados, strawberries, etc…) \n     Signed Rus");
					}
					else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(3*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Hey Phil, \n     Its your brother Steve. I just wanted to say sorry to you and the family. I know this isn’t the life we expected for each other in the future. I must have let you all down, especially you and Mom. Dad never did expect much from me. Anyway, the prison only allows me a letter every so often and not a lot of time to write it. I hope you can forgive me one day.\n     -Steve");
					}		
			console.log("after switch");

		}, this);
	//Initialize the mail1 keys for the stage here.
	mail1Group.add(letterSetUp);
	console.log(mail1Group.length);
}

Mail1.prototype.setKeys=function(stage){
	//Use this area to set which npc's that day get mail1.
			console.log("OK, here we go.")
			mail1Group.children[0].mail1Key="Terry";
			mail1Group.children[1].mail1Key="Em";
			mail1Group.children[2].mail1Key="Fredstaire";
			mail1Group.children[3].mail1Key="Amy Tanice";
			mail1Group.children[4].mail1Key="Walter P.";
			mail1Group.children[5].mail1Key="Winchell";
			mail1Group.children[6].mail1Key="Jo";
			mail1Group.children[7].mail1Key="Ann";
			mail1Group.children[8].mail1Key="Jus";
			mail1Group.children[9].mail1Key="Phil";
}

Mail1.prototype.setUp=function(stage){
	//change these values to set how many mail1 pieces need to be delivered for the day.
	//look through and reenable everything
	for(var i=0;i<mail1Group.length;i++){
		mail1Group.children[i].visible=true;
		if(message){
			console.log("message exists");
			message.visible=true;
		}
		//letter.visible=true;
	}		
			for(var i=10;i<mail1Group.length;i++){
				mail1.giveLetter(i);
			}	
}

Mail1.prototype.doesKeyMatch=function(npcName){
	for (var i = mail1Group.length - 1; i >= 0; i--) {
       //console.log("This is a mail1 key2222");
       //console.log(mail1Group.children[i].mail1Key);
       if(mail1Group.children[i].mail1Key==npcName) this.giveLetter(i);
    }
}

Mail1.prototype.hasDeliveredAllmail1=function(){
	for (var i = mail1Group.length - 1; i >= 0; i--) {
       //console.log("This is a mail1 key2222");
       //console.log(mail1Group.children[i].mail1Key);
       if(mail1Group.children[i].visible==true) return false
    }
	return true;
}

Mail1.prototype.center=function(){
	this.x=game.camera.x+game.camera.width/2;
	this.y=game.camera.y+game.camera.height/2;
}
Mail1.prototype.makeVisible=function(){
	this.visible=true;
	mail1Group.visible=true;
	//place the group
	this.center();
	this.makeGrid();
}
Mail1.prototype.checkUp=function(){
	if(this.visible==true){
		//its visible
		return true;
	}
}
Mail1.prototype.makeInvisible=function(){
	this.visible=false;
	mail1Group.visible=false;
}

Mail1.prototype.deleteFromGroup=function(object){
	//clear the group
	if(mail1Group){
		mail1Group.removeAll(true);
		console.log("mail1group undefined");
	}else{

	}
}
Mail1.prototype.killLetter=function(){
	if(letter){
		letter.kill();
		if(message){
			message.kill();
		}
		if(escText) escText.kill();
	}

}
Mail1.prototype.giveLetter=function(index){
	mail1Group.children[index].visible=false;
	mail1Group.children[index].inputEnabled=false;
}
Mail1.prototype.resetBag=function(){
	for(var i;i<mail1Group.length;i++){
		mail1Group.children[i].visible=true;
		mail1Group.children[i].inputEnabled=true;
	}
}
Mail1.prototype.update=function(){
	if(game.input.keyboard.justPressed(Phaser.Keyboard.ESC)){
		//letter.kill();
		console.log("esc");
		if(letter){
			letter.kill();
		}
		if(message){
			message.kill();
		}
		if(escText)escText.kill();

	}
	for(var i=0;i<mail1Group.length;i++){
		if(mail1Group.children[i].input.pointerOver()){
			//check for click event

			mail1Group.children[i].scale.setTo(7,7);
		}else{
			mail1Group.children[i].scale.setTo(6,6);
		}	
	}
}
