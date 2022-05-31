
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTM'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
];
// Write a function which filter users who has scoresGreaterThan85, 
console.log(users.filter(function (person) {
    return person.scores > 85;
}));

// Write a function which addUser to the user array only if the user does not exist.
var index = users.findIndex(person => person.name == "bob");
// here you can check specific property for an object whether it exist in your array or not

index === -1 ? users.push({
    name: 'bob', scores: 100,
    skills: ['HTM', 'CSS', 'python'], age: 32
}) : console.log("object already exists");
console.log(users);

