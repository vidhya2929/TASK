// map function syntax => map(callbackfn)  
// callback fn to execute for each element in the array. 

//Map
let array=[2,4,6,8];
function myMap(arr,callback){
    let output = [];
    for(let i = 0; i<arr.length; i++){
    output.push(callback(arr[i]));
    }
    return output
}

function addTwo(num) {
    return num + 2;
}
console.log(myMap(array, addTwo)); 

//Filter
let array2=[1,2,3,4,5,6];
function myFilter(arr,callback){
    let output = [];
    for(let i = 0; i<arr.length; i++){
    output.push(callback(arr[i]));
    }
    return output
}

function isEven(num) {
    return num % 2 === 0;
}
console.log(myFilter(array2, isEven)); 



