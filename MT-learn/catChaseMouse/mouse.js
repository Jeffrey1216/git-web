//Mouse Class
var Mouse = new Class({
	name  : '',
	status : true,
	options : {
		Llign : "left",
		Rlign :  100
	}
	,initialize : function(name){
		this.name = name;
		this.$ele = $('<div id="div_mouse" name="' + this.name + '"><img src="../images/mouse.jpg" width="70" height="70"></div>');
		var browserHeight = $(window).height();
		$(this.$ele).css({"position":"absolute","left":"100","top":10});
		$('body').append(this.$ele);
	}
	,catMove : function(action){
		if(action == 'left'){
			var mathMove = parseInt($(this.$ele).css('left')) - 10;
			var sideMove = 'left';
		}
		if(action == 'right'){
			var mathMove = parseInt($(this.$ele).css('left')) + 10;
			var sideMove = 'left';
		}
		if(action == 'up') {
			var mathMove = parseInt($(this.$ele).css('top')) - 10;
			var sideMove = 'top';
		}
		if(action == 'down')  {
			var mathMove = parseInt($(this.$ele).css('top')) + 10;
			var sideMove = 'top';
		}
		
		$(this.$ele).css(sideMove,mathMove);
		
	}

});

