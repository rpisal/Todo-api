var person = {
	name: 'Rahul',
	age: 21
};

function updatePerson (obj) {
	obj.age = 24;
};

updatePerson(person);
console.log(person);

var grades = [15, 88];

function addGrades (gradesArr) {
	gradesArr.push(55);
	debugger;
	//grades = [12, 33, 99];
};

addGrades(grades);
console.log(grades);