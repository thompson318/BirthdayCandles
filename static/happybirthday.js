//========================================================================
// Happy Birthday front end
//========================================================================

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
		if (index == 0)
		  htmlel = document.getElementById('candle0')
		if (index == 1)
		  htmlel = document.getElementById('candle1')
		if (index == 2)
		  htmlel = document.getElementById('candle2')
		if (index == 3)
		  htmlel = document.getElementById('candle3')
		if (index == 4)
		  htmlel = document.getElementById('candle4')
		if (index == 5)
		  htmlel = document.getElementById('candle5')
		if (index == 6)
		  htmlel = document.getElementById('candle6')
		if (index == 7)
		  htmlel = document.getElementById('candle7')
		if (index == 8)
		  htmlel = document.getElementById('candle8')
//		console.log("voltage = ", voltage, htmlel)
		htmlel.innerHTML = voltage
	  });
     })
    .catch(err => {
      console.log("An error occured while getting voltage", err.message);
    });
}

async function update_voltages(){
	//console.log("Updating voltage")
		while (true){
		  	htmlel = document.getElementById('candle0img')
			htmlel.style.display ="block"; 
			console.log('showing' , htmlel)
			var i;
			for (i = 0; i < 10 ; i++){
				var candle;
				for (candle = 0 ; candle < 9 ; candle++){
					get_voltage(candle);
				}
				await sleep(0400);
			}
			console.log('hiding' , htmlel)
			htmlel.style.display = "none";
			for (i = 0; i < 10 ; i++){
				var candle;
				for (candle = 0 ; candle < 9 ; candle++){
					get_voltage(candle);
				}
				await sleep(0400);
			}
		
		}
	}

update_voltages()


