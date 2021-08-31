// Your code here
function saturdayFun (activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
} 

function mondayWork(task="go to the office") {
    return `This Monday, I will ${task}.`
}

function wrapAdjective(stuff="*") {
    return function(adj="special"){
        return `You are ${stuff}${adj}${stuff}!`
    }
}

let Calculator = {
    add: function(a, b){
        return a + b
    },
    subtract: function(a, b){
        return a - b
    },
    multiply: function(a, b){
        return a * b
    }, 
    divide: function(a, b){
        return a/b
    }
}

function actionApplyer (integer, array) {
    let a = integer 

    for (let i=0; i<array.length; i++) {
        a = array[i](a)
    }
    return a
}
