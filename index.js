// Program that declares a variable price as a number, product as a string, and isAvailable as a boolean.
const price = 30;
const product = 'Crisps';
const isAvailable = true;

console.log(typeof price, typeof product, typeof isAvailable);

// Declare an array of numbers
const numbers = [10, 20, 30, 40, 50];

// Car Object
const car = {make: 'Suzuki', model: 'Escudo', year: 2014};

// Modify one of the properties
car.model = 'Alto';
console.log(car);

// == and ===
const a = '1';
const b = 1;

// Loose equality operator: Returns true because a and b values are equal
console.log(a == b);

// Strict equality operator: Returns false because a and b data types are not equal but the values ae equal.
console.log(a === b);

// isLexicographicallySmaller
const str1 = 'cat';
const str2 = 'dog';

function isLexicographicallySmaller(str1, str2){
    return str1 < str2;
}

if(isLexicographicallySmaller(str1, str2)){
    console.log(`${str1} is lexicographically smaller than ${str2}`);
} else {
    console.log(`${str1} is NOT lexicographically smaller than ${str2}`);
}

// Child and age
function determineBracket(child) {
    if(child < 13){
        console.log('You are a child!');
    } else if (child >= 13 && child <= 19){
        console.log('You are a teenager!');
    } else {
        console.log('You are an adult!')
    }
}

determineBracket(10);
determineBracket(15);
determineBracket(22);

// Scores and grade
let grade = '';

function determineGrade(score){
    switch(true){
        case (score >= 90): 
            grade = 'A';
            break;
        case (score >= 80 && score <= 89) : 
            grade = 'B';
            break;
        case (score >= 70 && score <= 79) : 
            grade = 'C';
            break;
        case (score >= 60 && score <= 69) : 
            grade = 'D';
            break;
        default:
            grade = 'F';
            break;
    }
    console.log(grade);
    return grade;
}

determineGrade(91);
determineGrade(84);
determineGrade(77);
determineGrade(60);
determineGrade(59);

// Program that checks if a given number num is both positive and even
function isPositiveAndEven(number) {
    if(number % 2 == 0 && number >= 0){
        console.log('The number is positive and even');
    } else {
        console.log('The number does not meet both conditions');
    }
}

isPositiveAndEven(3);
isPositiveAndEven(-3);
isPositiveAndEven(2);
isPositiveAndEven(-2);

// Admin or valid subscription
const users = [
    {
        name: 'Eston',
        isAdmin: true,
        hasValidSubscription: false,
    },
    {
        name: 'Kigo',
        isAdmin: false,
        hasValidSubscription: true,
    },
    {
        name: 'Subira',
        isAdmin: false,
        hasValidSubscription: false,
    }
]

function isAdminOrHasSubscription(name){
    const user = users.find(user => user.name === name);

    if(!user){
        console.log('User does not exist!');
    } else {
        if(user.isAdmin || user.hasValidSubscription){
            console.log('Access Granted!');
        } else {
            console.log('Access Denied!');
        }
    }
}

isAdminOrHasSubscription('Eston');
isAdminOrHasSubscription('Kigo');
isAdminOrHasSubscription('Subira');
isAdminOrHasSubscription('Craig');

// Loops 1-20 but skips multiple of 3
for(let i = 1; i <= 20; i++){
    if(i % 3 !== 0){
        console.log(i);
    }
}

// Printing days of the week
function dayOfTheWeek(number){
    switch(number){
        case 0: 
            console.log('Sunday');
            break;
        case 1: 
            console.log('Monday');
            break;
        case 2: 
            console.log('Tuesday');
            break;
        case 3: 
            console.log('Wednesday');
            break;
        case 4: 
            console.log('Thursday');
            break;
        case 5: 
            console.log('Friday');
            break;
        case 6: 
            console.log('Saturday');
            break;
        default: 
            console.log('Invalid day number');
            break;
    }
}

const dayNumber = 4;
dayOfTheWeek(dayNumber);

// While loop to calculate and print the sum of all integers from 1 to n
function allSum(n){
    let sum = 0;
    let counter = 1;

    while(counter <= n){
        sum += counter; // 0 + 1  // 1 + 2 // 3 + 3 // 6 + 4 = 10
        counter++;      // 1 + 1  // 2 + 1 // 3 + 1 // 4 + 1 = 5
    }
 
    console.log(sum);
}

allSum(4);




