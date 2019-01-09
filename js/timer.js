 class WatchTimer{
 	
 	constructor(elem){
 	this.elem = elem;
	this.time=0; //to keep current time
	let interval; //to keep running update function
	let offset; //to calculate how much time has passed
	this.isOn = false;
	
	}


	update(){

	if(this.isOn){
		this.time += this.timePass(); //add whatever we get from time pass function to time variable 
	}

		let timeFormatter = this.formatter(this.time);

		this.elem.textContent = timeFormatter;

	}
	

	start(){
		if(!this.isOn){
		this.interval = setInterval(this.update.bind(this), 1000 )//every 1000miliseconds);
		this.offset = Date.now();

		this.isOn = true;
		}
	};



	stop(){

		if(this.isOn){
			clearInterval(this.interval); 
			this.interval = null;
			this.isOn=false;
		}
	};




	timePass(){
	 let now = new Date();
	 let timeDiff = now - this.offset;
	 this.offset = now 
     return timeDiff;

	}



	//calculating  how  much time has passed
	formatter(timeInMilliseconds){

	 	let time = new Date(timeInMilliseconds);

	 	
	 	let hours = Math.floor((this.time % (1000*60*60*24))/ (1000*60*60))
	 	 console.log(hours);

	 	let minutes = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));

		let seconds = Math.floor((this.time % (1000 * 60))/1000);
		
			
			if(hours< 10){
			hours = `0${hours}`;
		}

			if(minutes < 10){
			minutes = `0${minutes}`;
		}

		if (seconds < 10){
			seconds = `0${seconds}`;

		}

		return `${hours} : ${minutes} : ${seconds}`;


	};




	
	reset(){


		if(!this.isOn){
		this.time = 0;

		this.update();

	}	
	};


}



