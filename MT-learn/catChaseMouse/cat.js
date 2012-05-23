//老鼠类
var Mouse = new Class({
	name   : '',
	status : true,
	options :{
		align:"left",
		vlign:"top",
		xleft:500,
		xtop: 600
	}, 
	initialize : function(name){
		this.name = name;
		this.$ele = $('<div id="div_mouse" name="'+ this.name +'"><img src="../images/mouse.jpg" width="70" height="70"></div>');
		var browserHeight = $(window).height() - 100; 
		$(this.$ele).css({"position":"absolute","left":'500px',"top":browserHeight});
		$('#screenDiv').after(this.$ele);
	},
	getStatus  : function(){
		return this.status;
	},
	runAway : function(){
		//this.$ele
	}
	
});


//new page:
 function test(){
	console.log('555');
}
$(document).ready(function(){
 new Mouse('mouse');
 var temp = 0;
 //$('body').everyTime('200ms',test);
 $('body').everyTime('1s',test);

 /*($('body').everyTime('1s','C',function(){
    //执行一个会超过20秒以上的程式
    console.log(++temp)
},1000,true);
*/

});


