!function(e){function t(t){for(var i,l,o=t[0],h=t[1],c=t[2],d=0,y=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&y.push(r[l][0]),r[l]=0;for(i in h)Object.prototype.hasOwnProperty.call(h,i)&&(e[i]=h[i]);for(n&&n(t);y.length;)y.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],i=!0,o=1;o<s.length;o++){var h=s[o];0!==r[h]&&(i=!1)}i&&(a.splice(t--,1),e=l(l.s=s[0]))}return e}var i={},r={0:0},a=[];function l(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=i,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(s,i,function(t){return e[t]}.bind(null,i));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window.webpackJsonp=window.webpackJsonp||[],h=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var n=h;a.push([7,1]),s()}({6:function(e,t){function s(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}s.keys=function(){return[]},s.resolve=s,e.exports=s,s.id=6},7:function(e,t,s){"use strict";s.r(t);var i=s(0),r=s.n(i);s(2);class a extends r.a.Physics.Arcade.Sprite{constructor(e,t,s){super(e,t,s,"dude"),e.add.existing(this),e.physics.add.existing(this),e.playerList.push(this),this.setSize(28,40),this.setOffset(10,7),this.setCollideWorldBounds(!0),this.setVisible(!1),e.physics.add.collider(this,e.collision_layer),e.physics.add.collider(this,e.object_collision_layer),e.physics.add.collider(this,e.church_collision_layer),e.physics.add.collider(this,e.church_roof_collision_layer)}}class l extends r.a.Physics.Arcade.Sprite{constructor(e,t,s){super(e,t,s,"beer"),e.add.existing(this),e.physics.add.existing(this),e.beerGroup.add(this),this.setScale(2),this.setBounce(1),this.setCollideWorldBounds(!0),e.moveIndividualBeer(this),this.setSize(28,36),this.setOffset(10,10)}}const o=[["right","up","left","down","turn"],["right1","up1","left1","down1","turn1"],["right2","up2","left2","down2","turn2"],["right3","up3","left3","down3","turn3"]];class h extends r.a.Scene{constructor(e){super("PlayScene"),this.config=e,this.dead=0,this.startLayer=null,this.overlapStart=null,this.gameStarted=!1,this.playersReady=0,this.playerReadyStatus=[!1,!1,!1,!1],this.playerReadyText=null,this.globalFlag=!1,this.controller=null,this.simplePeer=null,this.scanned=!1,this.playerList=[],this.goodItemDelay=1e4,this.badItemDelay=4e3,this.beerItemDelay=15e3,this.collision_layer=null,this.object_collision_layer=null,this.church_collision_layer=null,this.church_roof_collision_layer=null,this.player=null,this.player2=null,this.player3=null,this.player4=null,this.numberOfScans=0,this.scores=[480,480,480,480],this.playerScoreText=null,this.player2ScoreText=null,this.player3ScoreText=null,this.player4ScoreText=null,this.scoresText=null,this.badItems=null,this.beer=null,this.beer2=null,this.beer3=null,this.beer4=null,this.beer5=null,this.playerVelocities=[200,200,200,200],this.item=null,this.goodItem=null,this.itemBounds=null,this.itemArray=null,this.beerGroup=null,this.beerGroupArray=null,this.text=null,this.initialTime=150,this.startOnce=!0,this.reloaded=!1}preload(){this.loadImages()}create(){this.createCode(),this.createCollidableMap(),this.createCharacters(),this.createNonCollidablemMap(),this.add.image(this.config.width/2-7.5,25,"uofg_wall_logo").setScale(.5),this.add.image(312.5,25,"uofg_wall_logo").setScale(.5),this.add.image(952,25,"uofg_wall_logo").setScale(.5),this.badItems=this.physics.add.group(),this.beerGroup=this.physics.add.group(),this.goodItems=this.physics.add.group(),this.createPlayerAnimation(["left","right","up","down"],[12,24,36,0],[14,26,38,2],["turn",1]),this.createPlayerAnimation(["left1","right1","up1","down1"],[15,27,39,3],[17,29,41,5],["turn1",4]),this.createPlayerAnimation(["left2","right2","up2","down2"],[18,30,42,6],[20,32,44,8],["turn2",7]),this.createPlayerAnimation(["left3","right3","up3","down3"],[60,72,84,48],[62,74,86,50],["turn3",49]),this.createPlayerScores(),this.scoresText=[this.playerScoreText,this.player2ScoreText,this.player3ScoreText,this.player4ScoreText],this.playerNumbersText=[this.playerNumberText,this.player2NumberText,this.player3NumberText,this.player4NumberText],this.scale.displaySize.setAspectRatio(this.width/this.height),this.scale.refresh(),this.text=this.add.text(500,50,"Graduating in: "+this.formatTime(this.initialTime)+" minutes",{fontSize:"40px",fill:"#000"}),this.text.setVisible(!1),this.playerReadyText=this.add.text(400,50,"Players ready: "+this.playersReady+"/"+this.numberOfScans,{fontSize:"40px",fill:"#000"}),this.startInstructions=this.add.text(450,130,"Head to START when ALL students have enrolled!",{font:"bold 15px Arial",fill:"#000"}),this.maxPlayerText=this.add.text(10,160,"Max Players: 4",{font:"bold 20px Arial",fill:"#000"})}update(){this.updateText(),this.itemArray=this.badItems.children.getArray(),this.beerGroupArray=this.beerGroup.children.getArray(),this.removeItem(),this.removeBeerSprite(),this.removeGoodItem(),this.initialTime<=3&&this.updateCountdown();for(let e=0;e<this.playerReadyStatus.length;e++)this.physics.overlap(this.playerList[e],this.overlapStart)&&0==this.playerReadyStatus[e]&&(this.playersReady+=1,this.playerReadyStatus[e]=!0),this.playersReady==this.numberOfScans&&0!=this.playersReady&&1==this.startOnce&&(this.startOnce=!1,this.gameStarted=!0);this.gameStarted&&(this.gameStarted=!1,this.checkPlayers=!0,this.timedItem(),this.timedBeer(),this.timedGoodItem(),this.maxPlayerText.setVisible(!1),this.startInstructions.setVisible(!1),this.playerReadyText.setVisible(!1),document.getElementById("qrcode").style.display="none",this.start=this.add.text(400,300,"START",{font:"bold 100px Arial",fill:"#FFFF00"}),this.time.addEvent({delay:3e3,callback:this.updateStartText,callbackScope:this,loop:!1}),this.text.setVisible(!0),this.time.addEvent({delay:1e3,callback:this.onEvent,callbackScope:this,loop:!0}),this.time.addEvent({delay:15e4,callback:this.gameover,callbackScope:this,loop:!1})),this.checkPlayersScore(),this.playerScoreText.x=this.player.body.position.x-20,this.playerScoreText.y=this.player.body.position.y-15,this.player2ScoreText.x=this.player2.body.position.x-20,this.player2ScoreText.y=this.player2.body.position.y-15,this.player3ScoreText.x=this.player3.body.position.x-20,this.player3ScoreText.y=this.player3.body.position.y-15,this.player4ScoreText.x=this.player4.body.position.x-20,this.player4ScoreText.y=this.player4.body.position.y-15,this.playerNumberText.x=this.player.body.position.x-10,this.playerNumberText.y=this.player.body.position.y+40,this.player2NumberText.x=this.player2.body.position.x-10,this.player2NumberText.y=this.player2.body.position.y+40,this.player3NumberText.x=this.player3.body.position.x-10,this.player3NumberText.y=this.player3.body.position.y+40,this.player4NumberText.x=this.player4.body.position.x-10,this.player4NumberText.y=this.player4.body.position.y+40;var e=this.simplePeer.controllerList,t=Object.keys(e).length;for(let s=0;s<t;s++)e[Object.keys(e)[s]].isActive&&void 0!==e[Object.keys(e)[s]].state.angle.degree?e[Object.keys(e)[s]].state.angle.degree>295||e[Object.keys(e)[s]].state.angle.degree<=45?(this.playerList[s].body.velocity.x=this.playerVelocities[s],this.playerList[s].body.velocity.y=0,this.playerList[s].anims.play(o[s][0],!0)):e[Object.keys(e)[s]].state.angle.degree>45&&e[Object.keys(e)[s]].state.angle.degree<=115?(this.playerList[s].body.velocity.y=-this.playerVelocities[s],this.playerList[s].body.velocity.x=0,this.playerList[s].anims.play(o[s][1],!0)):e[Object.keys(e)[s]].state.angle.degree>115&&e[Object.keys(e)[s]].state.angle.degree<=225?(this.playerList[s].body.velocity.x=-this.playerVelocities[s],this.playerList[s].body.velocity.y=0,this.playerList[s].anims.play(o[s][2],!0)):e[Object.keys(e)[s]].state.angle.degree>225&&e[Object.keys(e)[s]].state.angle.degree<=295&&(this.playerList[s].body.velocity.y=this.playerVelocities[s],this.playerList[s].body.velocity.x=0,this.playerList[s].anims.play(o[s][3],!0)):(this.playerList[s].body.velocity.y=0,this.playerList[s].body.velocity.x=0,this.playerList[s].anims.play(o[s][4],!0))}updateText(){this.playerReadyText.setText("Players ready: "+this.playersReady+"/"+this.numberOfScans)}updateCountdown(){this.text.setColor("#FF0000"),this.text.setFontSize("70px"),this.text.setPosition(300,350),this.text.setText("Graduating in "+this.formatTime(this.initialTime))}updateStartText(){this.start.destroy()}removeItem(){var e=this.badItems.children.getArray();for(let t=0;t<this.itemArray.length;t++)if(this.physics.overlap(this.player,e[t])&&this.numberOfScans>=1)e[t].destroy(),this.scores[0]-=20,this.playerScoreText.setText("Credits: "+this.scores[0]);else if(this.physics.overlap(this.player2,e[t])&&this.numberOfScans>=2)e[t].destroy(),this.scores[1]-=20,this.player2ScoreText.setText("Credits: "+this.scores[1]);else if(this.physics.overlap(this.player3,e[t])&&this.numberOfScans>=3)e[t].destroy(),this.scores[2]-=20,this.player3ScoreText.setText("Credits: "+this.scores[2]);else{if(!(this.physics.overlap(this.player4,e[t])&&this.numberOfScans>=4))continue;e[t].destroy(),this.scores[3]-=20,this.player4ScoreText.setText("Credits: "+this.scores[3])}}removeGoodItem(){var e=this.goodItems.children.getArray();for(let t=0;t<this.itemArray.length;t++)if(this.physics.overlap(this.player,e[t])&&this.numberOfScans>=1)e[t].destroy(),this.scores[0]+=10,this.playerScoreText.setText("Credits: "+this.scores[0]);else if(this.physics.overlap(this.player2,e[t])&&this.numberOfScans>=2)e[t].destroy(),this.scores[1]+=10,this.player2ScoreText.setText("Credits: "+this.scores[1]);else if(this.physics.overlap(this.player3,e[t])&&this.numberOfScans>=3)e[t].destroy(),this.scores[2]+=10,this.player3ScoreText.setText("Credits: "+this.scores[2]);else{if(!(this.physics.overlap(this.player4,e[t])&&this.numberOfScans>=4))continue;e[t].destroy(),this.scores[3]+=10,this.player4ScoreText.setText("Credits: "+this.scores[3])}}removeBeerSprite(){var e=this.beerGroup.children.getArray();for(let t=0;t<this.beerGroupArray.length;t++)if(this.physics.overlap(this.player,e[t])&&this.numberOfScans>=1)e[t].destroy(),this.playerVelocities[0]/=2;else if(this.physics.overlap(this.player2,e[t])&&this.numberOfScans>=2)e[t].destroy(),this.playerVelocities[1]/=2;else if(this.physics.overlap(this.player3,e[t])&&this.numberOfScans>=3)e[t].destroy(),this.playerVelocities[2]/=2;else{if(!(this.physics.overlap(this.player4,e[t])&&this.numberOfScans>=4))continue;e[t].destroy(),this.playerVelocities[3]/=2}}checkPlayersScore(){for(let e=0;e<this.scores.length;e++)this.scores[e]<=0&&(this.playerList[e].disableBody(!0,!0),this.scoresText[e].setVisible(!1),this.playerNumbersText[e].setVisible(!1));1==this.numberOfScans?this.scores[0]<=0&&this.scene.start("GameoverScene",{scores:this.scores,numberOfPlayers:this.numberOfScans}):2==this.numberOfScans?this.scores[0]<=0&&this.scores[1]<=0&&this.scene.start("GameoverScene",{scores:this.scores,numberOfPlayers:this.numberOfScans}):3==this.numberOfScans?this.scores[0]<=0&&this.scores[1]<=0&&this.scores[2]<=0&&this.scene.start("GameoverScene",{scores:this.scores,numberOfPlayers:this.numberOfScans}):4==this.numberOfScans&&this.scores[0]<=0&&this.scores[1]<=0&&this.scores[2]<=0&&this.scores[3]<=0&&this.scene.start("GameoverScene",{scores:this.scores,numberOfPlayers:this.numberOfScans})}createBadItem(){var e=["netflix","instagram","youtube","facebook","tiktok"],t=Math.floor(Math.random()*e.length),s=t<.5?0:2e3;this.item=this.badItems.create(s,-700*Math.random()+720,e[t]),this.item.setBounce(1).setCollideWorldBounds(!0),this.moveIndividual(this.item)}createGoodItem(){var e=Math.random(),t=e<.5?0:2e3;this.goodItem=this.goodItems.create(t,-700*e+720,"uofg"),this.goodItem.setBounce(1).setCollideWorldBounds(!0),this.moveIndividual(this.goodItem),this.goodItem.setSize(60,60)}createBeerItem(){this.anims.create({key:"floating",frames:this.anims.generateFrameNumbers("beer",{start:0,end:7}),frameRate:10,repeat:-1});var e=Math.random(),t=e<.5?-100:1500;this.beer=new l(this,-1200*e+1200,t),this.beer.anims.play("floating",this);for(let e=0;e<this.playerVelocities.length;e++)this.playerVelocities[e]=200}timedItem(){this.timedEvent=this.time.addEvent({delay:this.badItemDelay,callback:this.createBadItem,callbackScope:this,loop:!0})}timedBeer(){this.timedEvent=this.time.addEvent({delay:this.goodItemDelay,callback:this.createBeerItem,callbackScope:this,loop:!0})}timedGoodItem(){this.timedEvent=this.time.addEvent({delay:this.beerItemDelay,callback:this.createGoodItem,callbackScope:this,loop:!0})}moveIndividual(e){e.setVelocity(r.a.Math.Between(10,300),r.a.Math.Between(10,300))}moveIndividualBeer(e){e.setVelocity(r.a.Math.Between(10,150),r.a.Math.Between(10,150))}createCharacters(){this.player=new a(this,100,450),this.player2=new a(this,200,450),this.player3=new a(this,300,450),this.player4=new a(this,400,450)}createPlayerScores(){this.playerScoreText=this.add.text(this.player.x,0,"Credits: "+this.scores[0],{font:"bold 12px Arial",color:"#000"}),this.player2ScoreText=this.add.text(this.player2.x,0,"Credits: "+this.scores[1],{font:"bold 12px Arial",color:"#000"}),this.player3ScoreText=this.add.text(this.player3.x,0,"Credits: "+this.scores[2],{font:"bold 12px Arial",color:"#000"}),this.player4ScoreText=this.add.text(this.player4.x,0,"Credits: "+this.scores[3],{font:"bold 12px Arial",color:"#000"}),this.playerNumberText=this.add.text(this.player.x,0,"Player 1",{font:"bold 12px Arial",color:"#FFF"}),this.player2NumberText=this.add.text(this.player2.x,0,"Player 2",{font:"bold 12px Arial",color:"#FFF"}),this.player3NumberText=this.add.text(this.player3.x,0,"Player 3",{font:"bold 12px Arial",color:"#FFF"}),this.player4NumberText=this.add.text(this.player4.x,0,"Player 4",{font:"bold 12px Arial",color:"#FFF"}),this.playerNumberText.setVisible(!1),this.player2NumberText.setVisible(!1),this.player3NumberText.setVisible(!1),this.player4NumberText.setVisible(!1),this.playerScoreText.setVisible(!1),this.player2ScoreText.setVisible(!1),this.player3ScoreText.setVisible(!1),this.player4ScoreText.setVisible(!1)}createCode(){this.simplePeer=new smartcontroller.JoystickSmartController,this.simplePeer.createQrCode("https://smartcontrollerjs.github.io/Controllers/joystick.html","qrcode",170,170);var e=this;this.simplePeer.on("connection",(function(){e.numberOfScans++,e.scanned=!0,e.player.setVisible(!0),e.playerScoreText.setVisible(!0),e.playerNumberText.setVisible(!0),2==e.numberOfScans?(e.physics.add.collider(e.player,e.player2),e.player2.setVisible(!0),e.player2ScoreText.setVisible(!0),e.player2NumberText.setVisible(!0),e.badItemDelay=3e3,e.goodItemDelay=1e4,e.beerItemDelay=13e3):3==e.numberOfScans?(e.physics.add.collider(e.player,e.player3),e.physics.add.collider(e.player2,e.player3),e.player3.setVisible(!0),e.player3ScoreText.setVisible(!0),e.player3NumberText.setVisible(!0),e.badItemDelay=2500,e.goodItemDelay=8e3,e.beerItemDelay=1e4):4==e.numberOfScans&&(e.physics.add.collider(e.player,e.player4),e.physics.add.collider(e.player2,e.player4),e.physics.add.collider(e.player3,e.player4),e.player4.setVisible(!0),e.player4ScoreText.setVisible(!0),e.player4NumberText.setVisible(!0),document.getElementById("qrcode").style.display="none",e.badItemDelay=2e3,e.goodItemDelay=8e3,e.beerItemDelay=8500)}))}formatTime(e){var t=e%60;return`${Math.floor(e/60)}:${t=t.toString().padStart(2,"0")}`}onEvent(){this.initialTime-=1,this.text.setText("Graduating in: "+this.formatTime(this.initialTime)+" minutes")}gameover(){this.scene.start("GameoverScene",{scores:this.scores,numberOfPlayers:this.numberOfScans})}createPlayerAnimation(e,t,s,i){for(let i=0;i<t.length;i++)this.anims.create({key:e[i],frames:this.anims.generateFrameNames("dude",{start:t[i],end:s[i]}),frameRate:10,repeat:-1});this.anims.create({key:i[0],frames:[{key:"dude",frame:i[1]}],frameRate:10})}createCollidableMap(){const e=this.make.tilemap({key:"tilemap"}),t=e.addTilesetImage("background","base_tiles"),s=e.addTilesetImage("hyptosis_tile-art-batch-1","church_tiles");e.createLayer("Bottom of floor",t),e.createLayer("Top of floor",t),this.startLayer=e.createLayer("Start layer",t),e.createLayer("Fauna and flora",t),this.collision_layer=e.createLayer("Outside",t).setCollisionByExclusion([-1]),this.object_collision_layer=e.createLayer("Furniture and trees",t).setCollisionByExclusion([-1]),this.church_collision_layer=e.createLayer("Church",t).setCollisionByExclusion([-1]),this.church_roof_collision_layer=e.createLayer("Church roof",s).setCollisionByExclusion([-1]),this.overlapStart=e.createFromObjects("Start game",{id:19}),this.overlapStart.forEach((e=>{this.physics.world.enable(e)}))}createNonCollidablemMap(){const e=this.make.tilemap({key:"tilemap"}),t=e.addTilesetImage("background","base_tiles");e.createLayer("Wall Decoration",t);const s=e.addTilesetImage("church staoined glass","stained_glass_tiles"),i=e.addTilesetImage("hyptosis_tile-art-batch-1","church_tiles");e.createLayer("Church roof no collision",i),e.createLayer("Church window",s)}loadImages(){this.load.image("base_tiles","assets/base_tiles.png"),this.load.image("church_tiles","assets/church_tiles.png"),this.load.image("stained_glass_tiles","assets/stained_glass_tiles.png"),this.load.tilemapTiledJSON("tilemap","assets/base_tiles.json"),this.load.spritesheet("dude","assets/dude.png",{frameWidth:48,frameHeight:48}),this.load.spritesheet("beer","assets/beer.png",{frameWidth:48,frameHeight:48}),this.load.image("tiktok","assets/tiktok.png"),this.load.image("facebook","assets/facebook.png"),this.load.image("instagram","assets/instagram.png"),this.load.image("netflix","assets/netflix.png"),this.load.image("youtube","assets/youtube.png"),this.load.image("uofg","assets/uofg.png"),this.load.image("uofg_wall_logo","assets/uofg_wall_logo.png")}}var c=h,n={font:"64px Arial",fill:"#ffffff",boundsAlignH:"center",boundsAlignV:"middle"},d={font:"20px Arial",fill:"#808080"};class y extends r.a.Scene{constructor(e){super("GameoverScene"),this.config=e,this.scoreText=null,this.max=0,this.playerImages=["player1","player2","player3","player4"],this.reload=!1}init(e){this.scores=e.scores,this.numberOfPlayers=e.numberOfPlayers}preload(){this.load.image("player1","assets/player1.PNG"),this.load.image("player2","assets/player2.PNG"),this.load.image("player3","assets/player3.PNG"),this.load.image("player4","assets/player4.PNG")}create(){this.scoreText=this.add.text(this.config.width/2-170,this.config.height/2-200,"CREDITS",n).setOrigin(0,0),this.add.text(this.config.width/2-250,this.config.height/2-250,"Thank you for playing Gotta Graduate!",{font:"24px Arial",fill:"#00FFFF"}).setOrigin(0,0),this.createScoreText(),this.saveBestScore();const e=localStorage.getItem("bestScore");this.add.text(this.config.width/2-350,this.config.height/2-320,"All-time Highscore: "+e,{font:"64px Arial",fill:"#ffff00"}),this.timedReload()}update(){}createScoreText(){var e=60;for(let t=0;t<this.numberOfPlayers;t++)this.max<this.scores[t]&&(this.max=this.scores[t]),0==t?(this.player1ScoreText=this.add.text(this.scoreText.width+200,200+e,"Credits: "+this.scores[t],n),this.add.text(this.scoreText.width+115,165+e,"Player "+(t+1),{font:"20px Arial",fill:"#ffffff",boundsAlignH:"center",boundsAlignV:"middle"}),this.add.image(this.scoreText.width+150,230+e,"player1")):1==t?(this.player2ScoreText=this.add.text(this.scoreText.width+200,200+e,"Credits: "+this.scores[t],n),this.add.text(this.scoreText.width+115,165+e,"Player "+(t+1),{font:"20px Arial",fill:"#ffffff",boundsAlignH:"center",boundsAlignV:"middle"}),this.add.image(this.scoreText.width+150,230+e,"player2")):2==t?(this.player3ScoreText=this.add.text(this.scoreText.width+200,200+e,"Credits: "+this.scores[t],n),this.add.text(this.scoreText.width+115,165+e,"Player "+(t+1),{font:"20px Arial",fill:"#ffffff",boundsAlignH:"center",boundsAlignV:"middle"}),this.add.image(this.scoreText.width+150,230+e,"player3")):3==t&&(this.player4ScoreText=this.add.text(this.scoreText.width+200,200+e,"Credits: "+this.scores[t],n),this.add.text(this.scoreText.width+115,165+e,"Player "+(t+1),{font:"20px Arial",fill:"#ffffff",boundsAlignH:"center",boundsAlignV:"middle"}),this.add.image(this.scoreText.width+150,230+e,"player4")),e+=120;for(let e=0;e<this.numberOfPlayers;e++)this.max==this.scores[e]&&(0==e?(this.player1ScoreText.setText("Credits: "+this.scores[e]+" - BIG BRAIN"),this.player1ScoreText.setColor("green")):1==e?(this.player2ScoreText.setText("Credits: "+this.scores[e]+" - BIG BRAIN"),this.player2ScoreText.setColor("green")):2==e?(this.player3ScoreText.setText("Credits: "+this.scores[e]+" - BIG BRAIN"),this.player3ScoreText.setColor("green")):3==e&&(this.player4ScoreText.setText("Credits: "+this.scores[e]+" - BIG BRAIN"),this.player4ScoreText.setColor("green")));var t=[this.player1ScoreText,this.player2ScoreText,this.player3ScoreText,this.player4ScoreText],s=60;for(let e=0;e<this.numberOfPlayers;e++)this.scores[e]<=0?this.add.text(2*t[e].width-180,165+s,"Looks like you dropped out",d):this.scores[e]>0&&this.scores[e]<=120?this.add.text(2*t[e].width-180,165+s,"Looks like you must be a first year...",d):this.scores[e]>120&&this.scores[e]<=240?this.add.text(2*t[e].width-180,165+s,"Looks like you must be a second year...",d):this.scores[e]>240&&this.scores[e]<=360?this.add.text(2*t[e].width-180,165+s,"Looks like you must be a third year...",d):this.scores[e]>360&&this.scores[e]<=480?this.add.text(2*t[e].width-180,165+s,"Looks like you must be a fourth year...",d):this.scores[e]>480&&this.add.text(2*t[e].width-180,165+s,"Are you some kind of genius?",d),s+=120}saveBestScore(){const e=localStorage.getItem("bestScore"),t=e&&parseInt(e,10);(!t||this.max>t)&&localStorage.setItem("bestScore",this.max)}timedReload(){this.time.addEvent({delay:2e4,callback:this.reloadOnStart,callbackScope:this,loop:!1})}reloadOnStart(){window.localStorage&&0==this.reload&&(this.reload=!0,window.location.reload())}}const p={width:1280,height:720},m=[c,y],u=e=>new e(p),b={type:r.a.AUTO,backgroundColor:"#000000",physics:{default:"arcade",arcade:{}},scale:{parent:"game",mode:r.a.Scale.FIT,autoCenter:r.a.Scale.CENTER_BOTH,...p},scene:m.map(u)};new r.a.Game(b)}});