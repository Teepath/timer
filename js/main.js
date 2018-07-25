let time = document.getElementById('time');
let togglebt= document.getElementById('toggle');
let btnreset =document.getElementById('reset');


let watch = new watchTimer(time);



function start(){
	watch.start();
	togglebt.textContent = "stop";
}


function stop(){
	watch.stop();
	togglebt.textContent ="start";
}



togglebt.addEventListener('click', function(){

	(watch.isOn)? stop() : start();
		
});


btnreset.addEventListener('click', function(){
	watch.reset();
});


