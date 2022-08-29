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

// let obj = {};
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
// };
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

// let culc = {
//     first:'',
//     second: '',
//     read : function(){
//         this.first = +prompt();
//         this.second = +prompt();
//     },
//     sum: function(){
//         let sum = this.first + this.second;
//         if(isNaN(sum)){
//             alert('Вы ввели не числа')
//         }else{
//             return sum;
//         }
        
//     },
//     mul: function(){
//         let mul = this.first * this.second;
//         if(!isNaN(mul)){
//             return mul;
//         }
//     }
// };

// culc.read();
// alert(`Cумма: ${culc.sum()}`);
// alert(`Произведение: ${culc.mul()}`);


// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().down().showStep(); // 1
// Такой подход широко используется в библиотеках JavaScript.

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { 
//       alert( this.step );
//       return this;
//     }
//   };

//   ladder.up().up().down().showStep();