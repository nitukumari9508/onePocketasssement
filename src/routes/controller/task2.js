function sumOfArray(array) {
    if (!Array.isArray(array)) {
        throw new error("input is not an array")
    }
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i]))
            sum += array[i]
        else throw new error("input is non integer")
    }
    return sum
}
const result = sumOfArray([2, 4, 5, 6])
console.log(result)

module.exports = sumOfArray