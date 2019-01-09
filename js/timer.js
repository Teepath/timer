 class WatchTimer{
<<<<<<< HEAD
 	
=======
>>>>>>> c10e9a401eac265af9c5bacaf6bcfa85bed96dcf
 	constructor(elem){
 	this.elem = elem;
	this.time=0; //to keep current time
	let interval; //to keep running update function
	let offset; //to calculate how much time has passed
	this.isOn = false;
	
<<<<<<< HEAD
	}


	update(){
=======
	}

	//to format time



	update(){

	if(this.isOn){
		this.time += this.timePass(); //add whatever we get from time pass function to time variable 
	}

		let formerTime = this.formatter(this.time);

		this.elem.textContent = formerTime;
>>>>>>> c10e9a401eac265af9c5bacaf6bcfa85bed96dcf

	if(this.isOn){
		this.time += this.timePass(); //add whatever we get from time pass function to time variable 
	}
	

<<<<<<< HEAD
		let timeFormatter = this.formatter(this.time);
=======
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
>>>>>>> c10e9a401eac265af9c5bacaf6bcfa85bed96dcf

		this.elem.textContent = timeFormatter;

	}
	

	start(){
		if(!this.isOn){
		this.interval = setInterval(this.update.bind(this), 1000 )//every 1000miliseconds);
		this.offset = Date.now();

		this.isOn = true;
		}
	};

<<<<<<< HEAD


	stop(){

		if(this.isOn){
			clearInterval(this.interval); 
			this.interval = null;
			this.isOn=false;
		}
	};


=======
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
>>>>>>> c10e9a401eac265af9c5bacaf6bcfa85bed96dcf


<<<<<<< HEAD
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




=======
		return `hrs - ${hours} : mins - ${minutes} : secs -${seconds}`;


	};




>>>>>>> c10e9a401eac265af9c5bacaf6bcfa85bed96dcf
	
	reset(){


		if(!this.isOn){
		this.time = 0;

		this.update();

	}	
	};


}

<<<<<<< HEAD

=======
//var watch = new watchTimer();
//watch.start();
>>>>>>> c10e9a401eac265af9c5bacaf6bcfa85bed96dcf

