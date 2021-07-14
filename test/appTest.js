const assert = require('chai').assert
const arrayToString = require('../app').arrayToString


test1 = {
    "input": [1,2,3,4,5,6,7,8],
    "result": "1-8"
}
test2 = {
    "input": [1,3,4,5,6,7,8],
    "result": "1,3-8"
}
test3 = {
    "input": [1,3,4,5,6,7,8,10,11,12],
    "result": "1,3-8,10-12"
}


test4 = {
    "input": [1,2,3],
    "result": "1-3"
}
test5 = {
    "input": [1,2],
    "result": "1,2"
}
test6 = {
    "input": [1,2,4],
    "result": "1,2,4"
}


test7 = {
    "input": [1,2,4,5,6],
    "result": "1,2,4-6"
}
test8 = {
    "input": [1,2,3,7,8,9,15,17,19,20,21],
    "result": "1-3,7-9,15,17,19-21" 
}
test9 = {
    "input": [1,2,3,4,5,6,100,1091,1999,2000,2001,2002],
    "result": "1-6,100,1091,1999-2002"
}


test10 = {
    "input": [1],
    "result": "1"
}
test11 = {
    "input": [1,3,5,7,9,11],
    "result": "1,3,5,7,9,11"
}


describe('Превращает массив в строку', function(){

    it("Тест 1: " + test1['input'], async () => {
        const result = await arrayToString(test1['input'])
        assert.equal(result, test1['result'])
    })

    it("Тест 2: " +  test2['input'], async () => {
        const result = await arrayToString(test2['input'])
        assert.equal(result, test2['result'])
    })

    it("Тест 3: " + test3['input'], async () => {
        const result = await arrayToString(test3['input'])
        assert.equal(result, test3['result'])
    })



    it("Тест 4: " +  test2['input'], async () => {
        const result = await arrayToString(test4['input'])
        assert.equal(result, test4['result'])
    })

    it("Тест 5: " + test5['input'], async () => {
        const result = await arrayToString(test5['input'])
        assert.equal(result, test5['result'])
    })

    it("Тест 6: " +  test6['input'], async () => {
        const result = await arrayToString(test6['input'])
        assert.equal(result, test6['result'])
    })



    it("Тест 7: " +  test7['input'], async () => {
        const result = await arrayToString(test7['input'])
        assert.equal(result, test7['result'])
    })

    it("Тест 8: " +  test8['input'], async () => {
        const result = await arrayToString(test8['input'])
        assert.equal(result, test8['result'])
    })

    it("Тест 9: " +  test9['input'], async () => {
        const result = await arrayToString(test9['input'])
        assert.equal(result, test9['result'])
    })



    it("Тест 10: " +  test10['input'], async () => {
        const result = await arrayToString(test10['input'])
        assert.equal(result, test10['result'])
    })

    it("Тест 11: " +  test11['input'], async () => {
        const result = await arrayToString(test11['input'])
        assert.equal(result, test11['result'])
    })

})
