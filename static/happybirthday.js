//========================================================================
// Happy Birthday front end
//========================================================================

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var candle0on = true 
var candle1on = true 
var candle2on = true 
var candle3on = true 
var candle4on = true 
var candle5on = true 
var candle6on = true 
var candle7on = true 
var candle8on = true

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

document.addEventListener("keydown", event => {
	if (event.keyCode == 49) {
		candle0on = ! candle0on
        	console.log('Candle 0 is ' , candle0on)
	};
	if (event.keyCode == 50) {
		candle1on = ! candle1on
        	console.log('Candle 1 is ' , candle1on)
	};
	if (event.keyCode == 51) {
		candle2on = ! candle2on
        	console.log('Candle 2 is ' , candle2on)
	};
	if (event.keyCode == 52) {
		candle3on = ! candle3on
        	console.log('Candle 3 is ' , candle3on)
	};
	if (event.keyCode == 53) {
		candle4on = ! candle4on
        	console.log('Candle 4 is ' , candle4on)
	};
	if (event.keyCode == 54) {
		candle5on = ! candle5on
        	console.log('Candle 5 is ' , candle5on)
	};
	if (event.keyCode == 55) {
		candle6on = ! candle6on
        	console.log('Candle 6 is ' , candle6on)
	};
	if (event.keyCode == 56) {
		candle7on = ! candle7on
        	console.log('Candle 7 is ' , candle7on)
	};
	if (event.keyCode == 57) {
		candle8on = ! candle8on
        	console.log('Candle 8 is ' , candle8on)
	};
});

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


