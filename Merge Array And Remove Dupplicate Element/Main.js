// Create function to merge 2 arrays and remove dupplicate element
// ["1", "2", "a", "b"] + ["3", "4", "a", "b"] = ["1", "2", "a", "b", "3", "4"]

function mergeArrays(firstArr, secondArr) {
    let totalArr = firstArr.concat(secondArr);
    let mergerArray = [];
    for (let i = 0; i < totalArr.length; i++) {
        if (!mergerArray.includes(totalArr[i])) {
            mergerArray.push(totalArr[i]);
        }
    }
    return mergerArray;
}

console.log(mergeArrays(["1", "b", "a", "b"], ["3", "4", "a", "b"]));