//STEP 1
// Create an application that gets the number of days in a month. Display that result within the console window.

// function getDaysInCurrentMonth() {
//     const date = new Date();
  
//     return new Date(
//       date.getFullYear(),
//       date.getMonth() + 1,
//       0
//     ).getDate();
//   }
  
//   const result = getDaysInCurrentMonth();
//   console.log(result);
  

//STEP 2
// Create an application that gets the month name from a particular date. Display that result within the console window.
// var month_name = function(dt){
//     mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//       return mlist[dt.getMonth()];
//     };
//     console.log(month_name(new Date("04/13/2022")));


//STEP 3
// Create an application that tests whether a date is a weekend. Display that result within the console window.

// function isWeekend(date = new Date()) {
//     return date.getDay() === 6 || date.getDay() === 0;
//   }
  
//   const d1 = new Date('2022-04-24');
//   console.log(d1); // 👉️ Saturday Sep 24 2022
  
//   console.log(d1.getDay()); // 👉️ 6
  
//   console.log(isWeekend(d1)); // 👉️ true
  
//   const d2 = new Date('2022-01-27');
//   console.log(d2); // 👉️ Friday Sep 23 2022
  
//   console.log(isWeekend(d2)); // 👉️ false
  

//STEP 4  
// Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday. 

// let dayNames = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

// let now = new Date();
// document.write(dayNames[now.getDay()==0?6:now.getDay()] );

//STEP 5 
// Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window
// let date = new Date()
// let today = date.getDay() +1; 
// switch (today) {  
//     case 1: today = 'Sunday'; break;
//     case 2: today = 'Monday'; break;
//     case 3: today = 'Tuesday'; break;
//     case 4: today = 'Wednesday'; break;
//     case 5: today = 'Thursday'; break;
//     case 6: today = 'Friday'; break;
//     case 7: today = 'Saturday'; break;

//     default: break;
// }
// console.log(today.charAt(0));
