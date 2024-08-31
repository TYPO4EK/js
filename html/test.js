// Операторы

// const a = 10;
// const b = 5;
// let c = 1;

// 1. Арифметические (+ - / * % ++ -- **)

// ++ Инкремент (плюс 1)
// -- Декремент (минус 1)

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a ** b);
// console.log(a % b);
// console.log(c);

// c--;

// console.log(c);



// 2. Приоритет арифметики ()

// console.log((2 + 2) * 2)


// 3. + для строк и чисел

// console.log(5 + 5);
// console.log('Hello' + ' ' + 'world');


// 4. Присваивания (=   +=   -=   /=   *=)

// let z = 0;

// feqfjeqof..

// z = z + 1;
// z += 1;

// z = z - 1;
// z -= 1;


// 5. Сравнения (== !=   === !==   > >=   < <=)

// // console.log('hello' != 'hello');
// // console.log('hello' !== 'hello');
// // console.log('5' === 5);

// console.log(10 >= 11);
// console.log(10 >= 10);
// console.log(10 >= 9);

// console.log(10 <= 11);
// console.log(10 <= 10);
// console.log(10 <= 9);


// === значению + типу
// == значению (лучше не использовать)


// 6. Унарные (+ -)

// console.log(typeof +'5')
// console.log(+'5' + 5)

// const z = -5;
// console.log(-z);

// 7. Логические (&(и)& |(или)| (отрицание)!)
// На следующую тему


// 8. in
// const obj = {
// 	name: 'Alex',
// 	age: 51,
// };




/*const arr = [1, 2, 6, 4, 5];


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}*/

/*const ex = addProduct(true);
console.log(ex);

function addProduct(IgnoreBlocked = false) {

    

    const isAvailable = isProductAvailable();

    if (!isAvailable) {
        console.log("Товара нет в наличие");
        return;
    }

    if (!IgnoreBlocked) {
        const Blocked = isBlocked();

        if (Blocked) {
            console.log('Вы заблокированы');
            return;
        }
    }

    

       
    const possibleDelivery = possibleToDelivery();

            if (!possibleDelivery) {
                console.log("Товар не доступен вашем регионе");
                return;
            }

            console.log("Товар добавлен в корзину");
            
            return "Все хорошо";
        }


    

   

function isProductAvailable() {
    const result = true;

    return result; 
}

function isBlocked() {
    const result = true;

    return result;
}

function possibleToDelivery() {
    const result = true;

    return result;
}*/













/*function Average(array) {
   let Array = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        Array += element
       
   }
    return Array / array.length
}

console.log(Average([6,7,7,5,8]))*/





/*function getStrings(array, maxLength = 0) {

     const result = [];

    if (maxLength === 0) {
         return result;
     }

     for (let i = 0; i < array.length; i++) {
         const value = array[i];

         if (value.length >= maxLength) {
 const x = result.length;
 result[x] = value;

 result.push(value);
         }
     }

     return result;
 }

console.log(getStrings(['привет', 'Мир'], 4)) */

/*
function findMinMax(arr) {

    let min = arr[0]
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
       if (element < min) {
         min = element
       }
        if (element > max) {
            max = element
        }
    }
    return { min, max } 
}
console.log(findMinMax([10, 3, 6, 5, 83]))*/


const brokeLinks = ['vk', 'youtube', 'facebook']

 function array  () {
    let correctedLinks = []
     for (let i = 0; i < brokeLinks.length; i++) {
         const element = 'https://' + brokeLinks[i] + '.org'
         correctedLinks.push(element)
    }
    return correctedLinks;
}





