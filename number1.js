let sumToTarget = (array, target) => {
    let hasil = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++){
            if (array[i] + array[j] === target) hasil.push(i, j)
        }
    }
    return hasil
}
console.log(sumToTarget([2, 3, 4, 1], 6))