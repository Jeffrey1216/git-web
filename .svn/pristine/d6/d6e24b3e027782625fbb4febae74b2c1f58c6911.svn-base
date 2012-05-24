$(document).ready(function(){
	
//new cat:
	var CatX = new Cat('CatX');
	CatX.runAway();
	CatX.bindTimes();

        (new Cat('CatX',1200,200)).runAway().bindTimes();
	(new Cat('CatX',500,400)).runAway().bindTimes();
	(new Cat('CatX',800,300)).runAway().bindTimes('100ms');
	(new Cat('CatX',400,350)).runAway().bindTimes('100ms');
	(new Cat('CatX',400,550)).runAway().bindTimes('100ms');
	(new Cat('CatX',100,450)).runAway().bindTimes('100ms');
        //(((new Cat('CatX')).runAway()).bindTimes());
	
//new Cat
	var MouseX = new Mouse('MouseX');

	$(document).keydown(function(event){
		
	        if(ActionStatus){	
		var keyCode = event.which;
		console.log(keyCode);
		if(keyCode == 37) MouseX.catMove('left');
		if(keyCode == 38) MouseX.catMove('up');
		if(keyCode == 39) MouseX.catMove('right');
		if(keyCode == 40) MouseX.catMove('down');
		}
	});
});


