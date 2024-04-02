// 1-Misol
// Soatni minutga o’tkazib beruvchi function

// function hoursToMinutes(hours) {
//     return hours * 60;
//   }
  
//   console.log(hoursToMinutes(2)); 



// 2-Misol
// Intergerdan keyingi son

// let number = 10.123;

// let decimalPart = number - Math.floor(number);
// console.log(decimalPart);

// let decimalString = number.toFixed(2); 
// console.log(decimalString); 

// let decimalString2 = number.toString().split('.')[1];
// console.log(decimalString2); 



// 3-Misol
// “something” so’zini xar doim qo’shib qaytaring


// function alwaysReturnSomething() {
//     return "something";
// }
// console.log(alwaysReturnSomething());



// 4-Misol
// So’zni kesish kerak


// function truncateWord(word, maxLength) {
//     if (word.length <= maxLength) {
//         return word;
//     } else {
//         return word.substring(0, maxLength) + "...";
//     }
// }

// console.log(truncateWord("JavaScript", 5));




// 5-Misol
// Ikkita sonni ko’paytiradigan funksiyani tuzing. Natijani alert qilib chiqarib berish kerak.


// function multiplyNumbers(num1, num2) {
//     var result = num1 * num2;
//     alert("The result of multiplying " + num1 + " and " + num2 + " is: " + result);
// }

// multiplyNumbers(5, 10);




// 6-Misol
// - Foydalanuvchidan joriy yilni so’rang. So’ng joriy oyni so’rang. So’ng joriy kunni so’rang. Keyin esa 1970 yildan nechi kun o’tganini hisoblab bering. Funksiyadan foydalanishingiz shart



// function calculateDaysPassed() {
//     var currentYear = prompt("Enter the current year:");
//     var currentMonth = prompt("Enter the current month (1-12):");
//     var currentDay = prompt("Enter the current day of the month:");

//     var currentDate = new Date(currentYear, currentMonth - 1, currentDay);

//     var millisecondsSince1970 = currentDate.getTime();

//     var daysPassed = millisecondsSince1970 / (1000 * 60 * 60 * 24);

//     alert("Days passed since January 1, 1970: " + Math.floor(daysPassed));
// }

// calculateDaysPassed();