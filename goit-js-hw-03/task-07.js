'use strict'; 
// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {},

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {},

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };

/*
 ЗАДАЧКА
*/

const someGoods = [
    { name: 'Радар', bonus: 1300, times: 4 },
    { name: 'Сканер', bonus: 2700, times: 3 , category:'MFO'},
    { name: 'Дроид', bonus: 800, times: 7 },
    { name: 'Захват', bonus: 1200, times: 2 },
  ];
  const getValuesByKey = function(arr, prop) {
    const rezult = [];

    for (let i = 0; i < arr.length; i++){
        if(Object.keys(arr[i]).includes(prop)){
            const curElement = arr[i]
            rezult.push(curElement[prop]);
        }
    }
    return rezult
  };
  const concatAllProps = function(arr, prop) {
    const cRezult = '';
    for (let i = 0; i<arr.length){
        
    }
};
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(getValuesByKey(someGoods, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
  console.log(getValuesByKey(someGoods, 'times')); // [4, 3, 7, 2]
  console.log(getValuesByKey(someGoods, 'category')); // ['MFO']
  console.log(concatAllProps(someGoods, 'name')); // 'Радар, Сканер, Дроид, Захват'
  console.log(concatAllProps(someGoods, 'times')); // 16
  console.log(concatAllProps(someGoods, 'bonus')); // 6000

//////////////
///////////////
//////////////

// Math.sum = (...args)=>Array.from(args).reduce((acc,el)=>acc+el);
// Math.sum = function(){
//     const array = Array.from(arguments);
//     let sum=0;
//     for (let i=0;i<array.length;i++){
//       sum += array[i];
//     }
//     return sum;
//   }
//   console.log(Math.sum(7,3,5));
//   const someGoods = [
//     { name: 'Радар', bonus: 1300, times: 4 },
//     { name: 'Сканер', bonus: 2700, times: 3 , category:'MFO'},
//     { name: 'Дроид', bonus: 800, times: 7 },
//     { name: 'Захват', bonus: 1200, times: 2 , category:'FFO'},
//   ];
//   const getByKeyValue = function(arr, value) {
//     for (let i=0;i<arr.length;i++){
//       const cObj = arr[i];
//         for (const key in cObj){
//             const cValue = cObj[key];
//             if (cValue == value){
//               return cObj.name + ' : ' + key + ' : ' + value;
//             }
//         }
//     }
//   };
//   const getValuesByKey = function(arr, prop) {
//     const rez = [];
//     for (let i=0;i<arr.length;i++){
//       if (arr[prop]){
//           rez.push(arr[prop]);
//       }
//     }
//     return rez;
//   };
//   const concatAllProps = function(arr, prop) {
//     const DELIMITER = ', ';
//     let rezString = '';
//     let rezNumber = 0; 
//     for (let i=0;i<arr.length;i++){
//       if (typeof arr[i][prop] === 'string'){
//         rezString += arr[i][prop] + DELIMITER;
//       }else{
//         rezNumber += arr[i][prop];
//       }
//     }
//     return rezNumber?rezNumber:rezString.slice(0,-DELIMITER.length);
//   };
//   console.log(getByKeyValue(someGoods, 'MFO')); // Сканер: category: MFO
//   console.log(getByKeyValue(someGoods, '800')); // Дроид: bonus : 800
//   console.log(concatAllProps(someGoods, 'name')); // 'Радар, Сканер, Дроид, Захват'  ​
//   console.log(concatAllProps(someGoods, 'times')); // 16  ​
//   console.log(concatAllProps(someGoods, 'bonus')); // 6000