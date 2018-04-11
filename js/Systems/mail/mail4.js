//-------------------
var mail4Group;
var m;
//-------------------
var letter;
var message;

var deliveredAllmail4;
//--------------------------------------------------------------------------
//depending on the stage time load the notes with different sets of text then assign them a value

var Mail4 = function(game,key){
Phaser.Sprite.call(this,game,game.camera.x+game.camera.width/2,game.camera.y+game.camera.height/2,key,null);
	console.log("Make my mail4Bag");
	this.scale.setTo(30,20);
	this.anchor.setTo(.5,.5);
	this.smoothed=false;
}

Mail4.prototype= Object.create(Phaser.Sprite.prototype);
Mail4.prototype.constructor=Mail4;


Mail4.prototype.makeGrid=function(){
	//when mail4 is made visible this function will be called
	//it orients the actual mail4 on the mail4bag in a set grid
	//mail4Group.createMultiple(5,'mail4',true);
	//mail4Group.scale.setTo(10,10);
	//mail4Group.align(game.world.centerX,game.world.centerY, 500, 500);

	for (var i=0;i<mail4Group.length;i++) {
		if(i<6){
			mail4Group.children[i].y=game.camera.y+game.camera.height/2-150;
			mail4Group.children[i].x=game.camera.x+game.camera.width/2-(375)+((i)*150);
		}else{
			mail4Group.children[i].y=game.camera.y+game.camera.height/2+125;
			mail4Group.children[i].x=game.camera.x+game.camera.width/2-(375)+((i-6)*150);
		}
	}
}
Mail4.prototype.addToGroup=function(stage){
	console.log("is this even being used");
	if(!mail4Group){
		mail4Group=game.add.group();
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
			letter.mail4Key="key";
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
						//console.log(mail4Group.children[0].mail4Key);
						printText("Dear Terry,\n     The kids miss you. It’s time to leave town Terry. Things are scary and the kids are especially scared for you. The news we get is never good and the Mayor clearly can’t be trusted. Our cabin outside of town is a great place to get away from all of this. I know its far away from everything but maybe thats for the best right now. Please just come home. Maybe we can still leave the country and start a new life somewhere less threatening. It will be better for the kids too. I don’t want them growing up in this environment. Jasmine is getting so much better at reading. She is looking forward to reading to you her favorite story. Jim’s carving skills have improved so much. He made me a wooden squirrel just the other day. They always ask why you are gone. \nLovingly, your wife");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+150&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail4Group.children[1].mail4Key);
						printText("Dear Fredstaire, \n     Its your mother. I know things have been busy for you lately what with the Mayor the way he is. I do wish you would write more often but thats not what this letter is going to be about. I am worried about you. I don’t trust these government men. I know you strongly believe in the power of democracy but I am scared about how far people like this will go. Always follow your heart but please do take care of yourself. I’m too old to leave the country now but you always could. These people are parasites honey. I love you very much so please take care of yourself and that lady you always mention in your letters. \n     Your loving mother");
						console.log("Camera: "+game.camera.x+game.camera.width/2-(375));
						console.log(letterSetUp.x+", "+letterSetUp.y);
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(2*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail4Group.children[2].mail4Key);
						printText("Dear Em, \n     Its your sister. They took away the boy who works in the bakery with me. It was really scary. Men with weapons came in and took him away declaring that he was not fit to work in that job and that he may be part of activities that are “subversive toward the government.” What’s worse is that these men were the town guard. The very people I grew up around looking up to as the protectors of our small town. Now they are dragging away their own people. Oh Em… I don’t know what to do. Everyone is uncertain about everything and no one knows what to believe. People would like to believe that our leader has our best interest in mind but… well whose interest is he even protecting anymore? I probably shouldn’t be even writing this. I feel like I can’t speak my mind anymore. I miss you sis. Take care of yourself. I will look after mom  and dad as best I can. \nSincerely, You Sister");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(3*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						printText("Dr. Tanice, \n     We are uncertain about whether or not we can comment on the status of the water in your town. We have considered the matter and have decided that you should trust the judgement of your government on this. We apologize for being unable to help you this time. Please always follow your medical instinct and pursuit of health and science. \nSigned Dr. Felipe");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(4*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						printText("Uncle, \n     I am leaving this letter with a friend of mine. I have instructed them to send it your way. I do wish you had decided to come with me and leave the country. As I write this I am standing just before the border, just about to cross. It is good I left when I did. News I have gotten has not been good. I can only imagine what you must be going through right. I am crying for you uncle. \nYour Niece");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(5*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						printText("Winchells, \n     This may be the last letter we send for a while. We are being restrained by the government and our right to travel has been restricted. I guess maybe we should have left sooner. Anyway, I am writing this to inform you that we will no longer be able to visit. Maybe everything will blow over and we can resume our plans but until then we won’t be able to leave our town. They are probably reading our mail since we are under suspicion of subversion towards the government. Hope you are well. \nMitchel Family");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(0*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Dear Jo, \n     I might not be able to talk to you for a bit and my father says I can’t go out alone anymore. He is really scaring me. And now I am being moved to a different classroom with Bof and Mel. I don’t know how much longer they will let me stay in your class. I don’t think I am going to be allowed to play with you for a while… \nJenny");
					}
					else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(1*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Ann, \n     The board is having me write to you to address current problems we have been having with your performance. We must warn you that non-compliance with school and board policy will result. Furthermore, any more unjustified allegations of “corruption” will also result in repercussions and potentially laying you off. The board agrees that we can’t have someone with such continued disregard for what is best for the school, its students, and the community acting in such an important position. \nIf you have any questions or concerns please schedule a meeting with the board through one of our secretaries.  Please note that your performance is being closely monitored. \nSigned, the Dept. Head");
					}
					else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(2*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Jus, \n     Hey Jus, I have just been issued an edict demanding that I import minerals from your mine. Despite my attempts to affect change alongside my peers, it would seem I have been pushed into a corner. While I have no qualms about taking imports from you, you know my stance about accepting imports from the mine over there. A lot of other things going on though that are bothering me that don’t bode well for trade. But I suppose there isn’t helping that and I’m not one to talk politics. Please include a shipment of minerals in your next caravan. Take care Jus. \nRus");
					}
					else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(3*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Guard Phil, \n     This is a notice from the Office of the Mayor. You and the rest of the watch are being intrusted to reign in any individuals claiming that the river water is unsafe. These are lies being spread by our enemies in an attempt to confuse and weaken our citizen’s resolve. What the people need is a strong leader and a strong town guard. You are the frontline in our defenses. \n     Regarding the firing and subsequent imprisonment of the prior head of the guard, rest assured that the situation is under control. The mayor is personally overlooking this matter and a special investigator is being implemented to look into allegations made against the former head of the guard.\nOffice of the Mayor");
					}
			console.log("after switch");

		}, this);
	//Initialize the mail4 keys for the stage here.
	mail4Group.add(letterSetUp);
	console.log(mail4Group.length);
}

Mail4.prototype.setKeys=function(stage){
	//Use this area to set which npc's that day get mail4.
			console.log("OK, here we go.")
			mail4Group.children[0].mail4Key="Terry";
			mail4Group.children[1].mail4Key="Fredstaire";
			mail4Group.children[2].mail4Key="Em";
			mail4Group.children[3].mail4Key="Amy Tanice";
			mail4Group.children[4].mail4Key="Walter P.";
			mail4Group.children[5].mail4Key="Winchell";
			mail4Group.children[6].mail4Key="Jo";
			mail4Group.children[7].mail4Key="Ann";
			mail4Group.children[8].mail4Key="Jus";
			mail4Group.children[9].mail4Key="Phil";
}

Mail4.prototype.setUp=function(stage){
	//change these values to set how many mail4 pieces need to be delivered for the day.
	//look through and reenable everything
	for(var i=0;i<mail4Group.length;i++){
		mail4Group.children[i].visible=true;
		if(message){
			console.log("message exists");
			message.visible=true;
		}
		//letter.visible=true;
	}

	for(var i=10;i<mail4Group.length;i++){
		mail4.giveLetter(i);
	}
}

Mail4.prototype.doesKeyMatch=function(npcName){
	for (var i = mail4Group.length - 1; i >= 0; i--) {
       //console.log("This is a mail4 key2222");
       //console.log(mail4Group.children[i].mail4Key);
       if(mail4Group.children[i].mail4Key==npcName) this.giveLetter(i);
    }
}

Mail4.prototype.hasDeliveredAllmail4=function(){
	for (var i = mail4Group.length - 1; i >= 0; i--) {
       //console.log("This is a mail4 key2222");
       //console.log(mail4Group.children[i].mail4Key);
       if(mail4Group.children[i].visible==true) return false
    }
	return true;
}

Mail4.prototype.center=function(){
	this.x=game.camera.x+game.camera.width/2;
	this.y=game.camera.y+game.camera.height/2;
}
Mail4.prototype.makeVisible=function(){
	this.visible=true;
	mail4Group.visible=true;
	//place the group
	this.center();
	this.makeGrid();
}
Mail4.prototype.checkUp=function(){
	if(this.visible==true){
		//its visible
		return true;
	}
}
Mail4.prototype.makeInvisible=function(){
	this.visible=false;
	mail4Group.visible=false;
}

Mail4.prototype.deleteFromGroup=function(object){
	//clear the group
	if(mail4Group){
		mail4Group.removeAll(true);
		console.log("mail4group undefined");
	}else{

	}
}
Mail4.prototype.killLetter=function(){
	if(letter){
		letter.kill();
		if(message){
			message.kill();
		}
		if(escText) escText.kill();
	}
}
Mail4.prototype.giveLetter=function(index){
	mail4Group.children[index].visible=false;
	mail4Group.children[index].inputEnabled=false;
}
Mail4.prototype.resetBag=function(){
	for(var i;i<mail4Group.length;i++){
		mail4Group.children[i].visible=true;
		mail4Group.children[i].inputEnabled=true;
	}
}
Mail4.prototype.update=function(){
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
	for(var i=0;i<mail4Group.length;i++){
		if(mail4Group.children[i].input.pointerOver()){
			//check for click event

			mail4Group.children[i].scale.setTo(7,7);
		}else{
			mail4Group.children[i].scale.setTo(6,6);
		}	
	}
}
