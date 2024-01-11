// Array di nomi
const nomi = [
    'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Isabella', 'Sophia', 'Jackson', 'Amelia', 'Lucas',
    'Ethan', 'Mia', 'Aiden', 'Harper', 'Evelyn', 'Abigail', 'Emily', 'Alexander', 'James', 'Benjamin',
    'Henry', 'Avery', 'Sophie', 'Samuel', 'Michael', 'Grace', 'Daniel', 'Lily', 'Ella', 'Nathan',
    'Wyatt', 'Matthew', 'Charlotte', 'Joseph', 'Scarlett', 'David', 'Oliver', 'Chloe', 'Logan', 'Emma',
    'Brooklyn', 'Liam', 'Mason', 'Ella', 'Carter', 'Grace', 'Aubrey', 'Luke', 'Hudson'
];

// Array di cognomi
const cognomi = [
    'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor',
    'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson',
    'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King',
    'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter',
    'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards'
];

let nomiCognomi = [];

const startButton = document.getElementById('startButton');
const inviteOutput = document.getElementById('inviteOutput');
let generatedName;


function generateRandomNumber(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}


for (let i = 0; i < nomi.length ** 2; i++) {

    generatedName = `${nomi[generateRandomNumber(0, 49)]} ${cognomi[generateRandomNumber(0, 49)]}`
    nomiCognomi.push(generatedName)
}

console.log(nomiCognomi)

startButton.addEventListener('click', function () {

    inviteOutput.value = nomiCognomi[generateRandomNumber(0, 2400)];


})
