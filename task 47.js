// Задача 47. Задайте двумерный массив размером m×n, заполненный случайными вещественными числами.

// m = 3, n = 4.

// 0,5 7 -2 -0,2

// 1 -3,3 8 -9,9

// 8 7,8 -7,1 9

let m = prompt("Задайте колличество массивов")
let n = prompt("Задайте колличество столбцов в массиве")
let preM = Number(m)
let preN = Number(n)

function getArray(m,n,min,max){
  let arr = new Array();
  for(let i = 0; i < m; i++){
       arr[i] = new Array();
    for(let j = 0; j < n;j++){
      let random = (Math.random()*(max - min + 1) + min).toFixed(1)
      arr[i][j] = Number(random);
    }
  }
  return arr
}

function showMatrix(array){
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){
      document.write(array[i][j] + " ");
    }
    document.write("<br>");
  }
  return array
}


let createArray = getArray(preM,preN,10,99);
console.log(showMatrix(createArray));