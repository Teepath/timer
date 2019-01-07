let time = document.getElementById('time');
let togglebt= document.getElementById('toggle');
let btnreset =document.getElementById('reset');


let watch = new WatchTimer(time);



function start(){
	watch.start();
	togglebt.textContent = "stop";
}


function stop(){
	watch.stop();
	togglebt.textContent ="pause";
}


document.addEventListener('DOMContentLoaded', function(){

togglebt.addEventListener('click', function(){

	(watch.isOn)? stop() : start();
		
});


btnreset.addEventListener('click', function(){
	watch.reset();
});

})