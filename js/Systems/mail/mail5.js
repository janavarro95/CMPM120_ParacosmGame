//-------------------
var mail5Group;
var m;
//-------------------
var letter;
var message;

var deliveredAllmail5;
//--------------------------------------------------------------------------
//depending on the stage time load the notes with different sets of text then assign them a value

var Mail5 = function(game,key){
Phaser.Sprite.call(this,game,game.camera.x+game.camera.width/2,game.camera.y+game.camera.height/2,key,null);
	console.log("Make my mail5Bag");
	this.scale.setTo(30,20);
	this.anchor.setTo(.5,.5);
	this.smoothed=false;
}

Mail5.prototype= Object.create(Phaser.Sprite.prototype);
Mail5.prototype.constructor=Mail5;


Mail5.prototype.makeGrid=function(){
	//when mail5 is made visible this function will be called
	//it orients the actual mail5 on the mail5bag in a set grid
	//mail5Group.createMultiple(5,'mail5',true);
	//mail5Group.scale.setTo(10,10);
	//mail5Group.align(game.world.centerX,game.world.centerY, 500, 500);

	for (var i=0;i<mail5Group.length;i++) {
		if(i<6){
			mail5Group.children[i].y=game.camera.y+game.camera.height/2-150;
			mail5Group.children[i].x=game.camera.x+game.camera.width/2-(375)+((i)*150);
		}else{
			mail5Group.children[i].y=game.camera.y+game.camera.height/2+125;
			mail5Group.children[i].x=game.camera.x+game.camera.width/2-(375)+((i-6)*150);
		}
	}
}
Mail5.prototype.addToGroup=function(stage){
	console.log("is this even being used");
	if(!mail5Group){
		mail5Group=game.add.group();
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
			letter.mail5Key="key";
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
						//console.log(mail5Group.children[0].mail5Key);
						printText("Dear Terry, \n     I’m writing to inform you that your recent request for ingredient will have to be denied. For a variety of compounding reasons, we will be unable to fulfill your request. You have always been a valued customer of our business and we hope to do business with you in the future. However this time we won’t be able to come through for you. You may wish to start looking locally for the items you need. We understand you have a number of shops in your town. \nBest Wishes, Allgoods");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+150&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail5Group.children[1].mail5Key);
						printText("This letter works at least");
						console.log("Camera: "+game.camera.x+game.camera.width/2-(375));
						console.log(letterSetUp.x+", "+letterSetUp.y);
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(2*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						//console.log(mail5Group.children[2].mail5Key);
						printText("Councilman Fredstaire, \n     It has come to my direct attention that you and several of the other council member have been spreading falsehoods. I would remind you that I am who the people of this great town have elected. You have no right to lie about me and my policies. I demand absolute loyalty from my subordinates in government. And you are my subordinate in case you have forgotten. Direct action will be taken to deal with these accusations including potential legal action. I am the leader of this town and I will have loyalty. \nYour Mayor");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(3*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						printText("Dear Em, \n     I am planning on going to a protest today. It will be a few weeks before you get this probably so expect a letter right after this one telling you how things went. The town is tired of how our leader has been acting. Even the council members of our town are partaking in the protest to make a point. Hopefully by the end of this we will have a new mayor. Most of us just want things to go back to the way things were. People are at their pressure point here. \n     Mom and Dad are even talking about going. Its exciting to think about so many people taking to the streets to enact change. Both of them are doing alright by the way. They are worried about you and all that of course. So am I. Hopefully once our mayor changes, things will change for a lot of other towns when they see that things can be changed. \nWith love, Your Sister");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(4*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						printText("Dr. Tanice \n     Your services and hardwork are appreciated by the town. However any further claims regarding the safety of the river will result in your immediate arrest. Unlawful and untruthful claims aimed at creating dissent amongst the good people of this town will not be tolerated. We have done a thorough investigation into the safety conditions of the river with the cooperation of the professionals at Mines Inc, and our conclusion is that the river contains safe levels of all potential threats. As a result, disturbing the peace of the town in both unethical and unacceptable. Keep this in mind in the future. \nOffice of the Mayor");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(5*150)&&letterSetUp.y==game.camera.y+game.camera.height/2-150){
						printText("Dear Ann, \n     The school board over here has agreed to relocate the children of foreigners here. They are being moved to a separate “learning facility” just outside of town. I’m not even being allowed to teach them anymore. They are having someone from the mayor’s office teach. Those people don’t even know how to run a town much less teach some children. People need to do something over here. These children are in a delicate time and changes like this are going to be so harmful. I hope things are better where you are. Maybe you could give me some advice of how to combat this. I just don’t see why we would treat children this way. They are innocents in all of this. \nJannett");
					}else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(0*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Jus, \n     I am writing to inform you that our new business in town is looking forward to engaging in healthy competition with you. We were brought in in a joint effort by the mayor as an attempt to create competition and stimulate the local economy. You will find that our prices are at a low and competitive price. You must not feel ashamed if you yourself decide to to shop at our wonderful store. We are, after all a government sanctioned shopping location sourcing government certified and approved goods. I personally look forward to seeing you in person within the coming weeks. \n-Eric from Home Shoppers");
					}
					else if(letterSetUp.x==game.camera.x+game.camera.width/2-(375)+(1*150)&&letterSetUp.y==game.camera.y+game.camera.height/2+125){
						printText("Guard Phil, \n     This is a notice from the Office of the Mayor. With consideration to the loss of our previous Head of the Guard, we are looking to replace him. We are considering a number of candidates and as such you are being considered for the position. If you do receive this honored rank, you will be taking your orders directly from the mayor. This mean absolute loyalty. Not everyone has the clairvoyance of our leader and as such you will sometimes have to trust in his judgement despite what you may think. Trust in our Mayor. \nOffice of the Mayor");
					}
			console.log("after switch");

		}, this);
	//Initialize the mail5 keys for the stage here.
	mail5Group.add(letterSetUp);
	console.log(mail5Group.length);
}

Mail5.prototype.setKeys=function(stage){
	//Use this area to set which npc's that day get mail5.
			console.log("OK, here we go.")
			mail5Group.children[0].mail5Key="Terry";
			mail5Group.children[1].mail5Key="Fredstaire";
			mail5Group.children[2].mail5Key="Em";
			mail5Group.children[3].mail5Key="Amy Tanice";
			mail5Group.children[4].mail5Key="Ann";
			mail5Group.children[5].mail5Key="Jus";
			mail5Group.children[6].mail5Key="Phil";
}

Mail5.prototype.setUp=function(stage){
	//change these values to set how many mail5 pieces need to be delivered for the day.
	//look through and reenable everything
	for(var i=0;i<mail5Group.length;i++){
		mail5Group.children[i].visible=true;
		if(message){
			console.log("message exists");
			message.visible=true;
		}
		//letter.visible=true;
	}

	for(var i=7;i<mail5Group.length;i++){
		mail5.giveLetter(i);
	}
}

Mail5.prototype.doesKeyMatch=function(npcName){
	for (var i = mail5Group.length - 1; i >= 0; i--) {
       //console.log("This is a mail5 key2222");
       //console.log(mail5Group.children[i].mail5Key);
       if(mail5Group.children[i].mail5Key==npcName) this.giveLetter(i);
    }
}

Mail5.prototype.hasDeliveredAllmail5=function(){
	for (var i = mail5Group.length - 1; i >= 0; i--) {
       //console.log("This is a mail5 key2222");
       //console.log(mail5Group.children[i].mail5Key);
       if(mail5Group.children[i].visible==true) return false
    }
	return true;
}

Mail5.prototype.center=function(){
	this.x=game.camera.x+game.camera.width/2;
	this.y=game.camera.y+game.camera.height/2;
}
Mail5.prototype.makeVisible=function(){
	this.visible=true;
	mail5Group.visible=true;
	//place the group
	this.center();
	this.makeGrid();
}
Mail5.prototype.checkUp=function(){
	if(this.visible==true){
		//its visible
		return true;
	}
}
Mail5.prototype.makeInvisible=function(){
	this.visible=false;
	mail5Group.visible=false;
}

Mail5.prototype.deleteFromGroup=function(object){
	//clear the group
	if(mail5Group){
		mail5Group.removeAll(true);
		console.log("mail5group undefined");
	}else{

	}
}
Mail5.prototype.killLetter=function(){
	if(letter){
		letter.kill();
		if(message){
			message.kill();
		}
		if(escText) escText.kill();
	}
}
Mail5.prototype.giveLetter=function(index){
	mail5Group.children[index].visible=false;
	mail5Group.children[index].inputEnabled=false;
}
Mail5.prototype.resetBag=function(){
	for(var i;i<mail5Group.length;i++){
		mail5Group.children[i].visible=true;
		mail5Group.children[i].inputEnabled=true;
	}
}
Mail5.prototype.update=function(){
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
	for(var i=0;i<mail5Group.length;i++){
		if(mail5Group.children[i].input.pointerOver()){
			//check for click event

			mail5Group.children[i].scale.setTo(7,7);
		}else{
			mail5Group.children[i].scale.setTo(6,6);
		}	
	}
}
