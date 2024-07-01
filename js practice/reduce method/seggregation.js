// seggregation

let decimalNumberArray = [1.2, 2.3,1.1, 1.3, 2.1, 2.2, 5.5];
/* need result like 
{
    1:  [1.1,1.2,1.3],
    2:  [2.1,2.2],
    5:  [5.5]
}
*/

let sortedArray = decimalNumberArray.sort();

const result = sortedArray.reduce((previsousVal, currentVal, currentIndex, array)=>{
    // check if floored Key exist
    // if not exist, create one and initialize with empty array
    // else push the current value into matched array;

        const flooredValue= Math.floor(currentVal);

        if(!previsousVal[flooredValue]){
            previsousVal[flooredValue] = [];
        };

        previsousVal[flooredValue].push(currentVal);

        return previsousVal;

},{});

console.log(result)



// omptimized code
// let decimalNumberArray = [1.2, 1.1, 1.3, 2.1, 2.2, 5.5];

// Group the numbers without sorting
const groupedResult = decimalNumberArray.reduce((acc, num) => {
    const key = Math.floor(num);
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(num);
    return acc;
}, {});

// Create a new sorted result
const sortedResult = Object.keys(groupedResult)
    .sort((a, b) => a - b) // Sort the keys numerically --> not required in case of js
    .reduce((acc, key) => {
        acc[key] = groupedResult[key].sort((a, b) => a - b); // Sort each group numerically
        return acc;
    }, {});

console.log(sortedResult);
