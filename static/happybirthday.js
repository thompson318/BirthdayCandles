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
		var htmlstring = new String('candle' + index.toString());
		var imagestring = new String('candle' + index.toString() + 'img');
		var htmlel = document.getElementById(htmlstring)
		var  image = document.getElementById(imagestring)
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
	var candleid = event.keyCode - 49
	if (candleid >= 0) {
		if (candleid <= 8) {
		candleson[candleid] = ! candleson[candleid]
        	console.log('Candle ', candleid.toString() , 'is ' , candleson[candleid])
		var imagestring = new String('candle' + candleid.toString() + 'img');
		image = document.getElementById(imagestring)
		if (candleson[candleid])
			image.style.display ="block";
		else
			image.style.display ="none";
	};
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

//update_voltages()


