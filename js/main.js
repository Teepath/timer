
//variables
let time = document.getElementById('time');
let togglebt= document.getElementById('toggle');
let btnreset =document.getElementById('reset');
let btnPause= document.getElementById('pause');


<<<<<<< HEAD
//class instatiation
=======
let watch = new WatchTimer(time);

>>>>>>> c10e9a401eac265af9c5bacaf6bcfa85bed96dcf

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
<<<<<<< HEAD
}

function reset(){
  watch.reset();
  setTimeout(()=>{
    btnPause.textContent = "Pause";
  },1000);
}


//listerrners
eventListerners();
=======
	togglebt.textContent ="pause";
}


document.addEventListener('DOMContentLoaded', function(){
>>>>>>> c10e9a401eac265af9c5bacaf6bcfa85bed96dcf

 function eventListerners(){

togglebt.addEventListener('click', function(){
 start();
});


btnreset.addEventListener('click', function(){
    stop();
  isStop = true;
  
});

<<<<<<< HEAD
btnPause.addEventListener('click', function(){
	if(isStop){
    watch.reset();
    isStop = false;
  } 
  
  pause();
})

}
=======
})
>>>>>>> c10e9a401eac265af9c5bacaf6bcfa85bed96dcf
