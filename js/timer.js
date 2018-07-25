function watchTimer(elem){
	let time =0; //to keep current time
	let interval; //to keep running update function
	let offset; //to calculate how much time has passed


	function update(){

		if(this.isOn){
		time += timePass(); //add whatever we get from time pass function to time variable 
	}

		let formerTime = formatter(time);

		elem.textContent = formerTime;

	}

	function timePass(){
		let now = Date.now();
		let timePassed = now - offset;
		offset = now // to ensure that next the function is run the now = to the last offset


		return timePassed


	}



	//calculating  how  much time has passed
	function formatter(timeInMilliseconds){

		let time = new Date(timeInMilliseconds);

		let minutes = time.getMinutes().toString();
		let seconds = time.getSeconds().toString();
		let milliseconds = time.getMilliseconds().toString();
			if(minutes.length < 2){
			minutes = `0${minutes}`;
		}

			if(seconds.length < 2){
			seconds = `0${seconds}`;
		}


		while(milliseconds.length < 3){
			milliseconds = `0${milliseconds}`;

		}

		return `mins - ${minutes} : secs - ${seconds}. milisecs -${milliseconds}`;


	};




	//to format time

	this.isOn = false;

	this.start = function(){
		if(!this.isOn){
			interval = setInterval(update.bind(this), 10 )//every 10miliseconds);
			offset = Date.now();
			this.isOn = true;
		}
	};

	this.stop = function(){

		if(this.isOn){
			clearInterval(interval); // this clear the interval that is set by start f{}
			interval = null;
			this.isOn=false;
		}
	};



	this.reset = function(){


		if(!this.isOn){
		time = 0;

		update();

	}	
	};


}


//var watch = new watchTimer();
//watch.start();

