// let arr = [11, -2, 34, 45, 19, 6];
// console.log(getMaxSubSum(arr));
// console.assert(getMaxSubSum(arr) == 115);
// Sukurkite funkciją`getMaxSubSum(arr)`, 
// kuri sugrąžins masyvo (Array) visų įvestų skaičių, kurie yra didesni nei 0 sumą.

const arr = [11, -2, 34, 45, 19, 6];

const getMaxSubSum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + arr[i];
        }      
    }
    return sum;
} 
console.log(getMaxSubSum(arr));
console.assert(getMaxSubSum(arr) == 115, 'Nėra lygu');
// ----------------------------------------------------------------------------Uždaviniai-------------------------------------------------------------------------------------------------