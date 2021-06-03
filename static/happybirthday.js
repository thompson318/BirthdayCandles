//========================================================================
// Happy Birthday front end
//========================================================================

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var candleson = [ true, true, true, true, true, true, true, true, true ];
var threshold = 0.1

function get_voltage(index) {
  
 //    console.log("getting voltage:", index)
     fetch("/get_voltage", {
        method: "POST",
        headers: {
        	"Content-Type": "application/json"
        },
        body: JSON.stringify(index)
     })
    .then(resp => {
        if (resp.ok)
          resp.json().then(data => {
		//console.log("response = ", data);
		voltage = data.voltage;
		var htmlel = 0
		var image = 0
		if (index == 0){
		  htmlel = document.getElementById('candle0')
		  image = document.getElementById('candle0img')
		};
		if (index == 1){
		  htmlel = document.getElementById('candle1')
		  image = document.getElementById('candle1img')
};
		if (index == 2){
		  htmlel = document.getElementById('candle2')
		  image = document.getElementById('candle2img')
};
		if (index == 3){
		  htmlel = document.getElementById('candle3')
		  image = document.getElementById('candle3img')
};
		if (index == 4){
		  htmlel = document.getElementById('candle4')
		  image = document.getElementById('candle4img')
};
		if (index == 5)
{
		  htmlel = document.getElementById('candle5')
		  image = document.getElementById('candle5img')
};
		if (index == 6)
{
		  htmlel = document.getElementById('candle6')
		  image = document.getElementById('candle6img')
};
		if (index == 7)
{
		  htmlel = document.getElementById('candle7')
		  image = document.getElementById('candle7img')
};
		if (index == 8)
{
		  htmlel = document.getElementById('candle8')
		  image = document.getElementById('candle8img')
};
		if ( voltage > threshold )
		  {
			  candleson[index] = false;
			  image.style.display = "none";
			  console.log('turning off: ', index, image);
		  }

//		console.log("voltage = ", voltage, htmlel)
		htmlel.innerHTML = voltage
	  });
     })
    .catch(err => {
      console.log("An error occured while getting voltage", err.message);
    });
}

document.addEventListener("keydown", event => {
	if (event.keyCode == 49) {
		candleson[0] = ! candleson[0]
        	console.log('Candle 0 is ' , candleson[0])
		image = document.getElementById('candle0img')
		if (candleson[0])
			image.style.display ="block";
		else
			image.style.display ="none";
	};
	if (event.keyCode == 50) {
		candleson[1] = ! candleson[1]
        	console.log('Candle 1 is ' , candleson[1])
		image = document.getElementById('candle1img')
		if (candleson[1])
			image.style.display ="block";
		else
			image.style.display ="none";
	};
	if (event.keyCode == 51) {
		candleson[2] = ! candleson[2]
        	console.log('Candle 2 is ' , candleson[2])
		image = document.getElementById('candle2img')
		if (candleson[2])
			image.style.display ="block";
		else
			image.style.display ="none";
	};
	if (event.keyCode == 52) {
		candleson[3] = ! candleson[3]
        	console.log('Candle 3 is ' , candleson[3])
		image = document.getElementById('candle3img')
		if (candleson[3])
			image.style.display ="block";
		else
			image.style.display ="none";
	};
	if (event.keyCode == 53) {
		candleson[4] = ! candleson[4]
        	console.log('Candle 4 is ' , candleson[4])
		image = document.getElementById('candle4img')
		if (candleson[4])
			image.style.display ="block";
		else
			image.style.display ="none";
	};
	if (event.keyCode == 54) {
		candleson[5] = ! candleson[5]
        	console.log('Candle 5 is ' , candleson[5])
		image = document.getElementById('candle5img')
		if (candleson[5])
			image.style.display ="block";
		else
			image.style.display ="none";
	};
	if (event.keyCode == 55) {
		candleson[6] = ! candleson[6]
        	console.log('Candle 6 is ' , candleson[6])
		image = document.getElementById('candle6img')
		if (candleson[6])
			image.style.display ="block";
		else
			image.style.display ="none";
	};
	if (event.keyCode == 56) {
		candleson[7] = ! candleson[7]
        	console.log('Candle 7 is ' , candleson[7])
		image = document.getElementById('candle7img')
		if (candleson[7])
			image.style.display ="block";
		else
			image.style.display ="none";
	};
	if (event.keyCode == 57) {
		candleson[8] = ! candleson[8]
        	console.log('Candle 8 is ' , candleson[8])
		image = document.getElementById('candle8img')
		if (candleson[8])
			image.style.display ="block";
		else
			image.style.display ="none";
	};
});

async function update_voltages(){
	//console.log("Updating voltage")
		while (true){
		  	htmlel = document.getElementById('candle0img')
			//htmlel.style.display ="block"; 
			var i;
			for (i = 0; i < 10 ; i++){
				var candle;
				for (candle = 0 ; candle < 9 ; candle++){
					if (candleson[candle])
						get_voltage(candle);
				}
				await sleep(400);
			}
		
		}
	}

update_voltages()


