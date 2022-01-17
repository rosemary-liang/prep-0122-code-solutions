var person = {
  firstName: 'Steve',
  lastName: 'Martin',
  hobby: 'Banjo playing'
};

var fullName = (person.firstName + ' ' + person.lastName);
console.log("The person's name is", fullName);

person.job = 'Actor';
console.log("The person's current job is", person.job);

person.previousJob = 'Waiter';
console.log("The person's previous job is", person.previousJob);

console.log(person);
