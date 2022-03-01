/*	TASK 1:
	Define a function with the following characteristics:
	
	Input:
		- width
		- length
		- heigth

	Output:
		- volume (of a rectangular block)
*/

function volume(width, length, heigth) {
	return width * length * heigth;
}

[w, l, h] = [3, 4, 5];

vol = volume(w, l, h);

console.log(`A rectangular block with width = ${w} cm, length = ${l} cm
and heigth = ${h} cm has the volume of ${vol} cm\u00B3.`);

/*	TASK 2:
	Define a function with the following characteristics:
	
	Input:
		- circle diameter

	Output:
		- circle area
*/

const area = diameter => Math.PI*Math.pow( diameter/2, 2 );

// Rounds to 2 digits after the decimal point.
console.log(Math.round(area(3) * 100) / 100);