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
		  	//htmlel.classList.remove("hidden");
			htmlel.style.display ="block"; 
			console.log('showing' , htmlel)
			var i;
			for (i = 0; i < 10 ; i++){
				get_voltage(0);
				await sleep(200);
			}
			console.log('hiding' , htmlel)
		  	//htmlel.classList.add("hidden");
			htmlel.style.display = "none";
			for (i = 0; i < 10 ; i++){
				get_voltage(0);
				await sleep(200);
			}
		
		}
	}

update_voltages()


