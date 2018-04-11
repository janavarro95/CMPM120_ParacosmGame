//-------------------
var mail3Group;
var m;
//-------------------
var letter;
var message;

var deliveredAllmail3;
//--------------------------------------------------------------------------
//depending on the stage time load the notes with different sets of text then assign them a value

var Mail3 = function(game,key){
Phaser.Sprite.call(this,game,game.camera.x+game.camera.width/2,game.camera.y+game.camera.height/2,key,null);
	console.log("Make my mail3Bag");
	this.scale.setTo(30,20);
	this.anchor.setTo(.5,.5);
	this.smoothed=false;
}

Mail3.prototype= Object.create(Phaser.Sprite.prototype);
Mail3.prototype.constructor=Mail3;


Mail3.prototype.makeGrid=function(){
	//when mail3 is made visible this function will be called
	//it orients the actual mail3 on the mail3bag in a set grid
	//mail3Group.createMultiple(5,'mail3',true);
	//mail3Group.scale.setTo(10,10);
	//mail3Group.align(game.world.centerX,game.world.centerY, 500, 500);

	for (var i=0;i<mail3Group.length;i++) {
		if(i<6){
			mail3Group.children[i].y=game.camera.y+game.camera.height/2-150;
			mail3Group.children[i].x=game.camera.x+game.camera.width/2-(375)+((i)*150);
		}else{
			mail3Group.children[i].y=game.camera.y+game.camera.height/2+125;
			mail3Group.children[i].x=game.camera.x+game.camera.width/2-(375)+((i-6)*150);
		}
	}
}
Mail3.prototype.addToGroup=function(stage){
	console.log("is this even being used");
	if(!mail3Group){
		mail3Group=game.add.group();
	}
	var letterSetUp=game.add.sprite(game.world.centerX,game.world.centerY,'mail');
	letterSetUp.inputEnabled = true;
	letterSetUp.scale.setTo(8,8);
	letterSetUp.anchor.setTo(.5,.5);
	letterSetUp.smoothed=false;
	//letterSetUp.visible=false;
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
			letter.mail3Key="key";
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
						//console.log(mail3Group.children[0].mail3Key);
						printText("Terry, \n     Your concern regarding the town water supply has been noted. However we can assure you that you have no need to worry. There are special investigators assigned to look into this matter. These men from Mines Inc, are trained in all the best ways as to how to handle potential pollution from the mines. That being said, we have no reason to suspect that the mining operations are producing any concerning environmental damages. Claims of such that may damage the profits of the mine will be considered unlawful and slanderous. This policy is in place to protect the wellbeing of the people. If anything of concern is discovered, you and the rest of the town will be notified. \n     Office of the Mayor");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+150&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail3Group.children[1].mail3Key);
						printText("To whom it may concern, \n     We are being blocked in our investigation regarding the last election cycle and the rise of several unexpected candidates. Several key members of the Council of Towns have been fired upon being accused of negligence to their work. I am sure you can imagine who did this firing. In any case we are very concerned about these recent events. It may be beneficial for you to communicate with your townsfolk in order to arrange action to evoke change from your mayor. The mayors causing this trouble can’t stand against the people if they voice their concerns out loud. We hope you relay this information to your fellow council members and come up with a plan suitable for the conditions in your town. It is important that we act fast. \n     Signed Philius Cornbee; Council Head");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(2*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail3Group.children[2].mail3Key);
						printText("Councilwoman Emily and all others concerned, \n     It has come to my attention that you and several members of the council are concerned about the recent policies made regarding the homeless vagrants occupying our beautiful town. I will remind you that these criminals were occupying town spaces unlawfully. Everything the guards and my office have accomplished has been within the law and its boundaries. I assure you that these changes are best for our town and ensuring it enters into a new and great period of strength. I expect your full compliance and loyalty. Any obstruction by the law will not go unpunished. \nOffice of the Mayor\n");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(3*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						printText("Dr. Tanice \n     Your concern regarding the town water supply has been noted. However we can assure you that you have no need to worry. There are special investigators assigned to look into this matter. These men from Mines Inc, are trained in all the best ways as to how to handle potential pollution from the mines. That being said, we have no reason to suspect that the mining operations are producing any concerning environmental damages. Claims of such that may damage the profits of the mine will be considered unlawful and slanderous. This policy is in place to protect the wellbeing of the people. If anything of concern is discovered, you and the rest of the town will be notified. \nOffice of the Mayor");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(4*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						printText("Walter, \n     Its your niece, I’m writing you to let you know that I am leaving the country while I can. You know my pursuit has always been science and I don’t feel like this country is where I can do that anymore. Furthermore, I do not feel welcome here by the government. I have plenty of friends who I know will always support me but I don’t think they will be able to help me if things turn south with the government going the way it is. We have a lot of differences in belief and pursuit but I hope you choose to leave too. We are family after all. You can leave with me and we can meet on the road. Write back fast, I am leaving soon. \nYour Niece");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(5*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						printText("Dear Winchells, \n     Hi guys! Its been a long time but Sheryl and I are planning on visiting in a couple months. Or rather we will be in the area and were wondering if you guys would like to get together and grab some dinner while we are in the neighborhood. I know its certainly been a while and things have been tense lately for a lot of people including ourselves. A couple days away from all of that would be wonderful. If you both would like to get together please let us know at your convenience. In the meantime I hope you both are well. If you remember our puppy Jaal, he is all grown up now. You would barely recognize them anymore. We are hoping to bring him along so he can say hi! \n     Sincerely, the Mitchel Family");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(0*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Dear Jo, \n     Watching you fall on your butt last time was really funny! Now that are dad’s are gone so often we can go on adventures more often now at least. I have a great one planned! Meet me at the usual place! \n-Jenny");
					}
					else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(1*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Dear Ann,\n     It's been awhile since we have written to each other. I’m not sure we have talked since university actually. Things aren’t great over here. Being a teacher I sought to educate the generations of the future and try to give them the materials they need to be successful in life. However, there has been talk of banning certain topics in the classroom. Initially this was just about our political leaders but more recently there has been talk about banning certain traditional topics from being taught. What’s worse is that not everyone is opposed. Some families are in favor of this educational direction. Things are scary and I fear the worst.\n     I just thought I should check in with you  and see how things are going in your town. You are one of the only other teachers I know on a close enough level. Surely we can’t stand for this. I look forward and hearing back from you. Perhaps you can give me some measure of hope. \nYour old Friend Jannett");
					}
					else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(2*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Dear Jus, \n     Regarding your most recent inquiry about the sale of precious minerals. Normally I would be happy to import these sorts of products. Precious metals can be sold to all sorts. However, several of our buyers are concerned about the sourcing of your goods as of recent. This seems to be an attempt at boycotting some of the leaders’ most recent joint policies. I can’t truthfully say that I disagree with them on this. I really am sorry on account of the damage this may do to your town’s economy. However, it may also convince your Mayor that Mining isn’t the best option. I don’t know if you agree with that or not and maybe it isn’t my town’s citizens place to judge but I hope things fair well for you. Apologies again. \nSigned Rus");
					}
					else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(3*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Dear Phil, \n     Hello Phil. I’m writing to inquire about your brother. I worry about how he is doing in prison. I can barely write out the word. It is so awful that they through him in there. I knew you boys should have come home sooner. I know its important for you boys to go and make lives of your own but look where you two ended up. You were supposed to look out for each other. He is your brother Phil. I don’t know what happened to you. \nYour mother");
					}
			console.log("after switch");

		}, this);
	//Initialize the mail3 keys for the stage here.
	mail3Group.add(letterSetUp);
	console.log(mail3Group.length);
}

Mail3.prototype.setKeys=function(stage){
	//Use this area to set which npc's that day get mail3.
			console.log("OK, here we go.")
			mail3Group.children[0].mail3Key="Terry";
			mail3Group.children[1].mail3Key="Fredstaire";
			mail3Group.children[2].mail3Key="Em";
			mail3Group.children[3].mail3Key="Amy Tanice";
			mail3Group.children[4].mail3Key="Walter P.";
			mail3Group.children[5].mail3Key="Winchell";
			mail3Group.children[6].mail3Key="Jo";
			mail3Group.children[7].mail3Key="Ann";
			mail3Group.children[8].mail3Key="Jus";
			mail3Group.children[9].mail3Key="Phil";
}

Mail3.prototype.setUp=function(stage){
	//change these values to set how many mail3 pieces need to be delivered for the day.
	//look through and reenable everything
	for(var i=0;i<mail3Group.length;i++){
		mail3Group.children[i].visible=true;
		if(message){
			console.log("message exists");
			message.visible=true;
		}
		//letter.visible=true;
	}
	for(var i=10;i<mail3Group.length;i++){
		mail3.giveLetter(i);
	}
}

Mail3.prototype.doesKeyMatch=function(npcName){
	for (var i = mail3Group.length - 1; i >= 0; i--) {
       //console.log("This is a mail3 key2222");
       //console.log(mail3Group.children[i].mail3Key);
       if(mail3Group.children[i].mail3Key==npcName) this.giveLetter(i);
    }
}

Mail3.prototype.hasDeliveredAllmail3=function(){
	for (var i = mail3Group.length - 1; i >= 0; i--) {
       //console.log("This is a mail3 key2222");
       //console.log(mail3Group.children[i].mail3Key);
       if(mail3Group.children[i].visible==true) return false
    }
	return true;
}

Mail3.prototype.center=function(){
	this.x=game.camera.x+game.camera.width/2;
	this.y=game.camera.y+game.camera.height/2;
}
Mail3.prototype.makeVisible=function(){
	this.visible=true;
	mail3Group.visible=true;
	//place the group
	this.center();
	this.makeGrid();
}
Mail3.prototype.checkUp=function(){
	if(this.visible==true){
		//its visible
		return true;
	}
}
Mail3.prototype.makeInvisible=function(){
	this.visible=false;
	mail3Group.visible=false;
}

Mail3.prototype.deleteFromGroup=function(object){
	//clear the group
	if(mail3Group){
		mail3Group.removeAll(true);
		console.log("mail3group undefined");
	}else{

	}
}
Mail3.prototype.killLetter=function(){
	if(letter){
		letter.kill();
		if(message){
			message.kill();
		}
		if(escText) escText.kill();
	}
}
Mail3.prototype.giveLetter=function(index){
	mail3Group.children[index].visible=false;
	mail3Group.children[index].inputEnabled=false;
}
Mail3.prototype.resetBag=function(){
	for(var i;i<mail3Group.length;i++){
		mail3Group.children[i].visible=true;
		mail3Group.children[i].inputEnabled=true;
	}
}
Mail3.prototype.update=function(){
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
	for(var i=0;i<mail3Group.length;i++){
		if(mail3Group.children[i].input.pointerOver()){
			//check for click event

			mail3Group.children[i].scale.setTo(7,7);
		}else{
			mail3Group.children[i].scale.setTo(6,6);
		}	
	}
}
