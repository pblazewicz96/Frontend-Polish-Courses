const userAge = [20, 21, 22, 44];

userAge.forEach(age => console.log(`Każdy z nich za rok ma ${age +1}lat`))

let usersTotalAge = 0;

userAge.forEach(age => usersTotalAge += age);
console.log(usersTotalAge);