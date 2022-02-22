// Task 1: Create an array holding 5 names.
const names = ['Kajsa', 'Kalle', 'Knatte', 'Fnatte', 'Tjatte'];
console.log(names);

// Task 2: Remove the last element of the array.
names.pop();
console.log(names);

// Task 3: Change the value of the second element (index=1).
names[1] = 'Jocke';
console.log(names);

// Task 4: Add 'Joakim' to the array.
names.push('Joakim');
console.log(names);

// Task 5: Sort the array alfabetically.
names.sort();
console.log(names);

// Task 6: Print the index of 'Joakim'.
console.log(names.indexOf('Joakim'));

// Task 7: Remove element 'Joakim'.
names.splice(names.indexOf('Joakim'), 1);
console.log(names);

// Task 8: Print each name to the console
// looping through the array.
for(let i = 0; i < names.length; i++)
	console.log(names[i]);