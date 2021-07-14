async function gatherResultString(string, array) {
    if (array.length < 3) {
        string += array.join(',')
    } else {
        string += array[0] + '-' + array[array.length - 1]
    }
    return string += ','
}

async function arrayToString(array) {
    let resultString = ''
    let subarray = [array[0]]

    for (let i = 1; i < array.length; i++) {

        if (array[i - 1] + 1 == array[i]) {
            subarray.push(array[i])
        } else {
            resultString = await gatherResultString(resultString, subarray)
            subarray = [array[i]]
        }
    }
    resultString = await gatherResultString(resultString, subarray)
    return resultString.slice(0, -1)
}

module.exports.arrayToString = arrayToString