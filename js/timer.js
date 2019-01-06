 class WatchTimer{
 	constructor(elem){
 	this.elem = elem;
	this.time=0; //to keep current time
	let interval; //to keep running update function
	let offset; //to calculate how much time has passed
	this.isOn = false;
	
	}

	//to format time



	update(){

	if(this.isOn){
		this.time += this.timePass(); //add whatever we get from time pass function to time variable 
	}

		let formerTime = this.formatter(this.time);

		this.elem.textContent = formerTime;

	}
	

	start(){
		if(!this.isOn){
		this.interval = setInterval(this.update.bind(this), 1000 )//every 10miliseconds);
		this.offset = Date.now();
		this.isOn = true;
		}
	};



	stop(){

		if(this.isOn){
			clearInterval(this.interval); // this clear the interval that is set by start f{}
			this.interval = null;
			this.isOn=false;
		}
	};




	timePass(){
	 let now = new Date();
	 let timeDiff = now - this.offset;
	 this.offset = now // to ensure that next the function is run the now = to the last offset
     return timeDiff


	}



	//calculating  how  much time has passed
	formatter(timeInMilliseconds){

	 	let time = new Date(timeInMilliseconds);

	 	let hours = time.getHours().toString();
	 	console.log(hours);
		let minutes = time.getMinutes().toString();
		let seconds = time.getSeconds().toString();
			
			if(hours.length < 2){
			hours = `0${hours}`;
		}

			if(minutes.length < 2){
			minutes = `0${minutes}`;
		}

		while(seconds.length < 2){
			seconds = `0${seconds}`;

		}

		return `hrs - ${hours} : mins - ${minutes} : secs -${seconds}`;


	};




	
	reset(){


		if(!this.isOn){
		this.time = 0;

		this.update();

	}	
	};


}

//var watch = new watchTimer();
//watch.start();

