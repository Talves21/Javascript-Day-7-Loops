for(let i = 0; i < 5; i++) {
    console.log(`(for): ${i}`);
}

// Outer Loop
for (let month = 1; month <= 12; month++) {
    console.log(`month: ${month}`);
// Inner Loop
    for(let day = 1; day <= 30; day++)
        console.log(`day: ${day}`);
}

// While Loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++
}

// Do While Loops
let password;
do {
    input = prompt('Enter Password');
} while (input != '123') {
    console.log('Password Correct');
}

// Arrays
const numbers = [1, 2 ,3 ,4, 5];

numbers.forEach((element) => {
    console.log(element);
})