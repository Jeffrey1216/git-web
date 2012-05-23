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
		//$(document).ready(function(){  ....  });
		var aa = this.lightDiv.html(this.name + ' 方式：亮了');
		var pThis = this;
		aa.bind('click',function(){
			pThis.switchStatus();
			alert('abbba');
		});
		/*aa.bind('click',function(){
			aa.switchStatus();
		}.bind(this));*/
		//$('div',this.lightDiv).html(this.name + '方式：亮了');
		/*this.lightDiv.bind('click',function(){
			this.switchStatus();
		}.bind(this));*/
		console.log(this.status);
	},
	powerOff : function(){
		this.status = false;
		//$(document).ready(....
		//$('#img').html(this.name + '方式：灯灭了');
		var aa = this.lightDiv.html(this.name + ' 方式：灯灭了');
		//$('div',this.lightDiv).html(this.name + ' 方式：灯灭了');
		/*this.lightDiv.bind('click',function(){
			this.switchStatus();
		}.bind(this));*/
		console.log(this.status);
	},
	switchStatus : function(){
		if(this.isOn()){
			this.powerOff();
		}else{
			this.powerOn();
		}
	}
	,addLight : function(n){
		var lightDiv = this.lightDiv = $("<div name='" +n + "'><img src='../images/1.png'></div><br/>");
		$('#nimei').append(lightDiv);
		$(this.lightDiv).bind('click',function(){
		      //alert(this.name);
			  this.switchStatus();
	        }.bind(this));
	}
});

var cid = 0;
var lights = [];

$(document).ready(function(){
    var n1 = new  XLamp('L1'); n1.addLight('L1');
	var n2 = new  XLamp('L2'); n2.addLight('L2');
	var n3 = new  XLamp('L3');
	$('#addLight').bind('click',function(){
		var tmp = new XLamp('X' + (++cid));
		tmp.addLight('X' +(cid));
		lights.push(tmp);
		
	});
	$('#sub').bind('click',function(){
		//this.
	});
	$('#OpenAll').bind('click',function(){
		for(var i = 0; i < lights.length; ++i){
			lights[i].powerOn();
		}

	});
});
