/*
    TASK 1

    Вывести в консоль с помощью цикла  WHILE, все нечетные числа от 30 до 40

*/

    // var num = 30; 
    // while(num<40){
    // num++;
    // if(num%2) console.log(num); 
    // }

   
/*
    TASK 2

    Вывести в консоль с помощью цикла FOR, все четные числа от 70 до 40.
    Первым четным числом должно быть 70. 
    
*/

//     for (let i = 70; i > 38; i--) {
//     if (i % 2 == 0) 
//     console.log(i)
//   }

/*
    TASK 3

    Переведите цикл FOR из задания 2, в цикл WHILE.  
    
*/

  
        // var num = 72;

        // while(num>40){
        // num--;
        // if(num%2 == 0) console.log(num); 
        // }

/*
    TASK 4

    С помощью любого известного Вам цикла из JavaScript, 
    найдите сумму чисел от 1 до 100, и выведите результат в консоль.   
    
*/
                // let sum = 0;
                // for (let i = 1; i <= 100; i++) {
                //     sum += i;
                // }
                // console.log(sum);

/*
    TASK 5

    Вывести 10 строчек со смайликом : ':)'. 
    На первой строчке один смайлик, на второй два,и так далее. 
    На последней должно быть 10 смайликов.   
    
*/
       
// function displaySmiles(count) {
//     const result = [];
  
//     for (let i = 1; i <= count; i++) {
//       result.push(`:)`.repeat(i));
//     }
//     return result.join('\n');
//   }

// console.log(displaySmiles(10))

/*
    TASK 6

    Напишите программу, которая выводит на экран числа от 1 до 50. 
    При этом вместо чисел, кратных трем, программа должна выводить слово «Java»,
    а вместо чисел, кратных пяти — слово «Script». 
    Если число кратно и 3, и 5, то программа должна выводить слово «JavaScript»   
    
*/

    //  for (var num=1; num < 51 ; num++) {
    //     if(num % 3 == 0 && num % 5 == 0) {
    //     console.log("JavaScript")
    //  } else if (num % 3 == 0) {
    //     console.log("Java")
    //  } else if (num % 5 == 0) {
    //     console.log("Script")
    //  } else  
    //    console.log(num) 
    // }

    
/* 
    TASK 7
    У нас есть число 1000
    Делите его на 2 столько раз, пока результат деления не станет меньше 50.
    Посчитайте количество итераций необходимых для выхода из цикла 
    и выведите результат в консоль

*/

// let n = 1000;

// let i = 0;

// while (n > 50) {

//   n /= 2;

//   i++;

// }

// console.log(`number: ${n}`); 

// console.log(`iteration: ${i}`);
    


/*
    TASK 8
    Напишите программу, которая используя цикл while 
    выведет все числа от 45 до 170, кратные 10.

*/

    // var num = 45;
    // while(num<170) {
    //     num++;
    //     if(num % 10 == 0) console.log(num);
    // }


 
/*
    TASK 9
    Напиши программу, которая используя любоге известное Тебе цикла
    выведет 3 раза в консоль 3 последовательные цифры.
		
		Пример:
		
		5 6 7
		8 9 10
		11 12 13

*/ 

// const numbersInRow = 3;
// const from = 5;
// const to = 14;
 
// let result = "";
 
// for (let i = from; i < to; i++) {
//   if ((from - i) % numbersInRow == 0 && i != from) {
//     result += "\n";
//   }
//   result += i.toString() + " ";
// }
 
// console.log(result);