oS.Init({PName:[oPeashooter,oSunFlower,oCherryBomb,oWallNut,oPotatoMine],ZName:[oZombie,oConeheadZombie,oPoleVaultingZombie],PicArr:function(){var a=oSnowPea.prototype,b=a.PicArr;return["images/interface/background1.jpg","images/interface/crater1.png",b[a.CardGif],b[a.NormalGif]]}(),backgroundImage:"images/interface/background1.jpg",CanSelectCard:0,LevelName:"关卡 1-6",LargeWaveFlag:{9:$("imgFlag1")},LoadMusic:function(){NewEle("oEmbed","embed","width:0;height:0",{src:"music/Look up at the.swf"},EDAll)}},{ArZ:[oZombie,oZombie,oZombie,oZombie,oZombie,oZombie,oZombie,oConeheadZombie,oConeheadZombie,oPoleVaultingZombie],FlagNum:9,SumToZombie:{1:7,2:10,"default":10},FlagToSumNum:{a1:[3,5,8],a2:[1,2,3,9]},FlagToMonitor:{8:[ShowFinalWave,0]},FlagToEnd:function(){NewImg("imgSF","images/card/plants/SnowPea.png","left:827px;top:525px",EDAll,{onclick:function(){GetNewCard(this,oSnowPea,7)}});NewImg("PointerUD","images/interface/PointerDown.gif","top:490px;left:836px",EDAll)}});