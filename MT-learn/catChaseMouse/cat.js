//cat类---图片是 在跑的猫
var ActionStatus =  true;
var Cat = new Class({
	name   : '',
	status : true,
	options :{
		Llign:"left",
		Rlign:"up",
		xleft:500,
		xtop: 600
	}, 
	initialize : function(name,left,right){
		this.left = left || 1500;
		this.right = right || $(window).height(); 
		this.name = name;
		this.$ele = $('<div id="div_cat" name="'+ this.name +'"><img src="../images/cat.png" width="70" height="70"></div>');
		$(this.$ele).css({"position":"absolute","left": this.left,"top": this.right});
		$('body').append(this.$ele);
	},
	getStatus  : function(){
		return this.status;
	},
	runAway : function(){
		//this.$ele
		var nowLeft = parseInt($(this.$ele).css('left'));
		var nowTop  = parseInt($(this.$ele).css('top'));
		if(nowLeft < 20)   this.options.Llign = "right";
		if(nowLeft > 1800) this.options.Llign = "left";
		if(nowTop  < 10)   this.options.Rlign = "down";
		if(nowTop  > 980)  this.options.Rlign = "up";
		/*if(nowTop < 20)  {
			$('body').stopTime('mouseRuning');
			return 'STOP';
		}*/
		//1920 * 520
		var Rrand = (Math.random()* 35) +1;
		var Hrand = (Math.random()* 15) +1;
		if(this.options.Llign == "right"){
			var newLeft = nowLeft + Rrand;	
		}else{
			var newLeft = nowLeft - Rrand;
		}
		if(this.options.Rlign == "up"){
			var newTop= nowTop - Hrand;	
		}else{
			var newTop= nowTop + Hrand;	
		}
	
		//var newTop = nowTop - 100;
		$(this.$ele).css({"left":parseInt(newLeft),"top":parseInt(newTop)});
		//判断 相遇事件:这里是增加一个新类 Extend 好 还是？？
		this.checkMouseLocation();
		//var Log = 'Left: ' + parseInt(newLeft) + '; Top: ' + parseInt(newTop) ;
		//console.log(Log);
		return this;
	}
	,checkMouseLocation  : function(){
		var catLocationX   = parseInt($(this.$ele).css("left"));
		var catLocationY   = parseInt($(this.$ele).css("top"));
		var mouseLocationX = parseInt($('#div_mouse').css("left"));
		var mouseLocationY = parseInt($('#div_mouse').css("top"));
		var disX = Math.abs(catLocationX - mouseLocationX);
		var disY = Math.abs(catLocationY - mouseLocationY);
		
		if(disX < 55 & disY <55 ) {
			$('body').stopTime('runEvent');
			ActionStatus = false;
			$('#div_mouse img').attr({'src':'../images/bone.png','width':300,'height':400});
			//alert('You are die;'); 
		}
	}
	,bindTimes : function(times,name){
		var pThis = this;
		var tName = name || 'runEvent';
		var tTimes = times || '200ms';
		//$('body').everyTime('200ms',test);
		$('body').everyTime(tTimes,tName,function(){
				pThis.runAway();
		});
	}
	
});

//===========================================


