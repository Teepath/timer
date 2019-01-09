
//variables
let time = document.getElementById('time');
let togglebt= document.getElementById('toggle');
let btnreset =document.getElementById('reset');
let btnPause= document.getElementById('pause');


//class instatiation

const watch = new WatchTimer(time);

let isStop = false;
// functions
function start(){
(isStop)?reset(): watch.start(); 
  watch.start();
}


function pause(){
	if(watch.isOn){
		stop();
	btnPause.textContent = "Continue";
	btnPause.style.color = "white";
	btnPause.style.backgroundColor = '#23f435';

}else{
		start();
	setTimeout(()=>{
		btnPause.textContent = 'Pause';
	}, 3000)

}

}


function stop(){
	watch.stop();
}

function reset(){
  watch.reset();
  setTimeout(()=>{
    btnPause.textContent = "Pause";
  },1000);
}


//listerrners
eventListerners();

 function eventListerners(){

togglebt.addEventListener('click', function(){
 start();
});


btnreset.addEventListener('click', function(){
    stop();
  isStop = true;
  
});

btnPause.addEventListener('click', function(){
	if(isStop){
    watch.reset();
    isStop = false;
  } 
  
  pause();
})

}