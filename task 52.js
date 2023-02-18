// Задача 52. Задайте двумерный массив из целых чисел. 
// Найдите среднее арифметическое элементов в каждом столбце.

// Например, задан массив:
// 1 4 7 2
// 5 9 2 3
// 8 4 2 4
// Среднее арифметическое каждого столбца: 4,6; 5,6; 3,6; 3.


let m = prompt("Задайте колличество массивов")
let n = prompt("Задайте колличество значений в массиве")
let countArray = Number(m)
let countNumInArray = Number(n)

function getArray(m,n,min,max){
  let arr = new Array();
  for(let i = 0; i < m; i++){
       arr[i] = new Array();
    for(let j = 0; j < n;j++){
      arr[i][j] = Math.trunc(Math.random()*(max - min + 1) + min)
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

function calcIndex(array){
  let sum
  let result = []
  let resultArifmetic = 0
  for(let i = 0; i < array[0].length; i++){
    sum = 0
      for(let j = 0; j < array.length;j++){
          sum += array[j][i]
          console.log(sum)
      }
   resultArifmetic = sum / array.length
   result.push(Math.trunc(resultArifmetic))
   console.log(result)
    }
  return result
}
function main(){
  let createArray = getArray(countArray,countNumInArray,1,9);
  let newMatrix = showMatrix(createArray);
  let countIndexArray = calcIndex(newMatrix)
    return countIndexArray
}
console.log(main());