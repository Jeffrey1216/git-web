//new Class : 灯的类
var XLamp = new Class({
	name:'',
	status:false,
	initialize:function(name){
		this.name = name;
	//this.addLight();
	},
	isOn : function(){
		return this.status;
	},
	powerOn : function(){
		this.status = true;
		//var aa = this.lightDiv.html(this.name + ' 方式：亮了');
		var aa = $('img',this.lightDiv).attr('src','../images/1.jpg');
		var pThis = this;
		aa.bind('mouseenter',function(){
			//alert('haha');
			});
		console.log(this.status);
	},
	powerOff : function(){
		this.status = false;
		//var aa = this.lightDiv.html(this.name + ' 方式：灯灭了');
		$('img',this.lightDiv).attr({
			src:'../images/2.jpg',
			alt:'turn off',
			height:'70',
			width :'90'
		});
		console.log(this.status);
	},
	switchStatus : function(){
		if(this.isOn()){
			this.powerOff();
		}else{
			this.powerOn();
		}
	}
	,
	addLight : function(){
		var lightDiv = this.lightDiv = $("<div name='" +this.name + "'><img src='../images/2.jpg' alt='original' width='60' height='50'></div><br/>");
		$('#nimei').append(lightDiv);
		XLamp.lights.push(this);  //加入到数组中

		$(this.lightDiv).bind('click',function(){
			this.switchStatus();
		}.bind(this));

	}
});
XLamp.lights = [];
XLamp.contro = function(what){
	for(var i = 0; i < XLamp.lights.length ;++i){
		XLamp.lights[i][what]();
	}
}

//new Class :增加相似功能的button ;
var Button = new Class({
	initialize : function(name,what){
		this.name = name;
		this.what = what;
		this.$ele = $('<input type="button">')
		this.$ele.attr('value',this.name);
		this.$ele.bind('click',function(){
			XLamp.contro(this.what);
		}.bind(this));
	}
	,appendTo : function(pt){
		this.$ele.appendTo(pt);
		$(pt).append('&nbsp;&nbsp;');
	}
});

//=================================================================
//new page to app:
var cid = 0;      //全局变量
//var lights = [];  //全局变量，存储所有 新增的灯 的对象


$(document).ready(function(){
	var n1 = new  XLamp('L1');
	n1.addLight();
	var n2 = new  XLamp('L2');
	n2.addLight();
	var n3 = new  XLamp('L3'); //这个 不会生成灯

	$('#addLight').bind('click',function(){
		var tmp = new XLamp('X' + (++cid));
		tmp.addLight();
		//lights.push(tmp);
		
	});
	$('#sub').bind('click',function(){
		//this.
	});
	(new Button('turn On All','powerOn')).appendTo($('#Buttons'));
	(new Button('turn Off All','powerOff')).appendTo($('#Buttons'));
	/*
	$('#turnOnAll').bind('click',function(){
		XLamp.doIt('powerOn');
	});
	$('#turnOffAll').bind('click',function(){
		XLamp.doIt('powerOff');
	})
	*/
});
