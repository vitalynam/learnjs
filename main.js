//OBJECT раздел 4

// Напишите код, выполнив задание из каждого пункта отдельной строкой:
//  1 - Создайте пустой объект user.
//  2 - Добавьте свойство name со значением John.
//  3 - Добавьте свойство surname со значением Smith.
//  4 - Измените значение свойства name на Pete.
//  5 - Удалите свойство name из объекта.

// let user = {};
// user.name = 'John';
//     console.log(user.name);
// user.surname = 'Smith';
//     console.log(user.surname);
// user.name = 'Pete';
//     console.log(user.name);
// delete user.name;
//     console.log(user);



// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// let obj = {}
// function isEmpty (obj) {
//     if(Object.keys(obj).length == 0){
//         console.log('объект пустой');
//     }else{
//         console.log('объект не пуст');
//     }
// }
// isEmpty(obj);
// isEmpty(user);



// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// function getSum (obj){
//     let sum = 0;
//     for(let key in obj){
//         sum += obj[key];
//     }
//     console.log(sum);
// }
// getSum(salaries);



// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Например:
// до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// multiplyNumeric(menu);
// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// function multiplyNumeric (obj){
//     for(key in obj){
//         if(typeof(obj[key]) == typeof(1)){
//             obj[key] *= 2;
//         }else{
//             continue;
//         }
//     }
//     console.log(obj);
// }
// multiplyNumeric(menu);

////////////////////////////////////////////////////

//THIS

// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let culc = {
    first:'',
    second: '',
    read : function(){
        let a = prompt();
        let b = prompt();

        if(a && b){
            this.first = a;
            this.second = b;
        }else{
            alert('Вы не ввели числа!');
        }
    },
    sum: function(){
        let sum = +this.first + +this.second;
        return sum;
    },
    mul: function(){
        let mul = +this.first * +this.second;
        return mul;
    }
}

culc.read();
alert(`Cумма: ${culc.sum()}`);
alert(`Произведение: ${culc.mul()}`);