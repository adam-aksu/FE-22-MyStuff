const cl = [
	"chartreuse",
	"gold",
	"blue",
	"cyan",
	"magenta"];	
	
let x = 0;

// ---------------------------------------------------------------
const d = new Date() // today, now

dString = d.toString()
dDate = dString.substr(0, 15);
dTime = dString.substr(16, 8);
dZone = dString.substr(25, 8);

console.log(dDate);
console.log(dTime);
console.log(dZone);

// ---------------------------------------------------------------



setInterval( function() {
	let d = new Date();
	dString = d.toString()

	document.getElementById("date").innerHTML = dString.substr(0, 15);
	document.getElementById("time").innerHTML = dString.substr(16, 8);
	document.getElementById("zone").innerHTML = dString.substr(25, 8);


	document.getElementById("datebox").style.background = cl[x++];

	if(x >= cl.length)
		x=0;
	

}, 1000);