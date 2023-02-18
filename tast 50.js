// Задача 50. Напишите программу, 
// которая на вход принимает позиции элемента в двумерном массиве,
//   и возвращает значение этого элемента или же указание,
//     что такого элемента нет.

// Например, задан массив:

// 1 4 7 2

// 5 9 2 3

// 8 4 2 4

// 17 -> такого числа в массиве нет

let m = +prompt("Задайте колличество массивов")
let n = +prompt("Задайте количество значений в массивах")
let indexArr = +prompt("Задайте координаты i")
let indexElemArr = +prompt("Задайте координаты j")


function getArray(array,elem,min,max){
  let arr = []
  for(let i = 0; i < m; i++){
    arr[i] = []
    for(let j = 0; j < n; j++){
      arr[i][j] = Math.trunc(Math.random()*(max - min + 1) + min)
    }
  }
  return arr
}

let startFunction = getArray(m,n,10,99)
 indexArr < startFunction.length && indexElemArr < startFunction[0].length ? 
   console.log(`Вы задали координаты: [${indexArr},${indexElemArr}] Числа: ${startFunction[indexArr][indexElemArr]}`) :
   console.log("такой координаты не существует");

console.log(startFunction);




// let m = prompt("количество массивов в массиве")
// let n = prompt("количество элементов в массиве")
// let checkNum = prompt("Задайте число которое хотите проверить")
// let convertM = Number(m)
// let convertN = Number(n)
// function getArray(m,n,min,max){
//   let arr = new Array()
//   for(let i = 0;i < convertM; i++){
//     arr[i] = new Array()
//     for(let j = 0;j < convertN; j++){
//       arr[i][j] = Math.trunc(Math.random()*(max - min + 1) + min)
//     }
//   }
//   return arr
// }
// function showMatrix(array){
//   for(let i = 0; i < array.length; i++){
//     for(let j = 0; j < array[1].length; j++){
//       document.write(array[i][j] + " ");
//     }
//     document.write("<br>");
//   }
//   return array
// }
// function checkElement(array,num){
//   for(let i = 0; i < array.length; i++){
//     for(let j = 0 ; j < array[i].length; j++){
//       if (array[i][j] == checkNum){
//       return `число: ${checkNum} под индексом ${[i,j]} в матрице найдено`
//     }}
//   }
//   return `${checkNum} -> такого числа в массиве нет`
// }

// function main(){
//   let newArray = getArray(convertM,convertN,1,9);
//   let myArray = showMatrix(newArray);
//   let elemIsTrue = checkElement(myArray,checkNum);
//   return elemIsTrue
// }
// console.log(main())