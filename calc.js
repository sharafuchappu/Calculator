var h = []
var a = []
var val = ''

function btnclick(a){
    document.getElementById("display").innerHTML += a
    h.push(a)
    console.log(h)
}

function btnclear(){
    document.getElementById("display").innerHTML = ''
    h = []
    a = []
    console.log("working")
}

function btnoperator(operator) {
    var number = h.join('')
    h = []
    if (number) a.push(Number(number))
    val = operator
    document.getElementById("display").innerHTML = ''
}

function btnresult() {
    var number = h.join('')
    if (number) a.push(Number(number))
    if (val === '+') {
        add()
    } else if (val === '-') {
        sub()
    } else if (val === '*') {
        mul()
    } else if (val === '/') {
        div()
    } else if (val === '%') {
        mod()
    }
    document.getElementById("display").innerHTML = result
    h = [result.toString()]
    a = []
    val = ''
}

function displayResult(result) {
    document.getElementById("display").innerHTML = result
}

function add() {
    result = a.reduce((num1, num2) => num1 + num2)
    displayResult(result)
}

function sub() {
    result = a.reduce((num1, num2) => num1 - num2)
    displayResult(result)
}

function mul() {
    result = a.reduce((num1, num2) => num1 * num2)
    displayResult(result)
}

function div() {
    result = a.reduce((num1, num2) => num1 / num2)
    displayResult(result)
}

function mod() {
    result = a.reduce((num1, num2) => num1 % num2)
    displayResult(result)
}

// var h =[]
// var a =[]
// function btnclick(a){
//     document.getElementById("display").innerHTML+=a
//     h.push(a)
//     console.log(h)
// }

// function btnclear(){
//     document.getElementById("display").innerHTML=''
//     a=[]
//     console.log("working")
// }

// function btnoperator(operator) {
//     var number = h.join('')
//     h = []
//     if (number) a.push(Number(number))

//     if (operator === '/' || operator === '*' || operator === '-' || operator === '+' || operator === '%') {
//         val = operator
//     } else {
//         act2()
//     }

//     document.getElementById("display").innerHTML = ''
// }

// function act2() {
//     console.log('Calculating')
//     if (val === '+') {
//         add()
//     } else if (val === '-') {
//         sub()
//     } else if (val === '*') {
//         mul()
//     } else if (val === '/') {
//         div()
//     } else if (val === '%') {
//         mod()
//     }
//     }
//     var result
//     function add() {
//         var result = a.reduce((num1, num2) => num1 + num2)
//         displayResult(result)
//     }

//     function sub() {
//         var result = a.reduce((num1, num2) => num1 - num2)
//         displayResult(result)
//     }

//     function mul() {
//         var result = a.reduce((num1, num2) => num1 * num2)
//         displayResult(result)
//     }

//     function div() {
//         var result = a.reduce((num1, num2) => num1 / num2)
//         displayResult(result)
//     }

//     function mod() {
//         var result = a.reduce((num1, num2) => num1 % num2)
//         displayResult(result)
//     }

// function btnvalue() {
//     document.getElementById("display").innerHTML = result
//     console.log('Result:', result)
//     a = [result]// Store the result for further operations
// }


// var h = []
// var a = []
// var val = ''

// function btnclick(a){
//     document.getElementById("display").innerHTML += a
//     h.push(a)
//     console.log(h)
// }

// function btnclear(){
//     document.getElementById("display").innerHTML = ''
//     h = []
//     a = []
//     console.log("working")
// }

// function btnoperator(operator) {
//     var number = h.join('')
//     h = []
//     if (number) a.push(Number(number))
//     val = operator
//     document.getElementById("display").innerHTML = ''
// }

// function btnresult() {
//     var number = h.join('')
//     if (number) a.push(Number(number))
//     if (val === '+') {
//         add()
//     } else if (val === '-') {
//         sub()
//     } else if (val === '*') {
//         mul()
//     } else if (val === '/') {
//         div()
//     } else if (val === '%') {
//         mod()
//     }
//     document.getElementById("display").innerHTML = result
//     h = [result.toString()]
//     a = []
//     val = ''
// }

// function displayResult(result) {
//     document.getElementById("display").innerHTML = result
// }

// function add() {
//     result = a.reduce((num1, num2) => num1 + num2)
//     displayResult(result)
// }

// function sub() {
//     result = a.reduce((num1, num2) => num1 - num2)
//     displayResult(result)
// }

// function mul() {
//     result = a.reduce((num1, num2) => num1 * num2)
//     displayResult(result)
// }

// function div() {
//     result = a.reduce((num1, num2) => num1 / num2)
//     displayResult(result)
// }

// function mod() {
//     result = a.reduce((num1, num2) => num1 % num2)
//     displayResult(result)
// }

// var h =[]
// var a =[]
// function btnclick(a){
//     document.getElementById("display").innerHTML+=a
//     h.push(a)
//     console.log(h)
// }

// function btnclear(){
//     document.getElementById("display").innerHTML=''
//     a=[]
//     console.log("working")
// }

// function btnoperator(operator) {
//     var number = h.join('')
//     h = []
//     if (number) a.push(Number(number))

//     if (operator === '/' || operator === '*' || operator === '-' || operator === '+' || operator === '%') {
//         val = operator
//     } else {
//         act2()
//     }

//     document.getElementById("display").innerHTML = ''
// }

// function act2() {
//     console.log('Calculating')
//     if (val === '+') {
//         add()
//     } else if (val === '-') {
//         sub()
//     } else if (val === '*') {
//         mul()
//     } else if (val === '/') {
//         div()
//     } else if (val === '%') {
//         mod()
//     }
//     }
//     var result
//     function add() {
//         var result = a.reduce((num1, num2) => num1 + num2)
//         displayResult(result)
//     }

//     function sub() {
//         var result = a.reduce((num1, num2) => num1 - num2)
//         displayResult(result)
//     }

//     function mul() {
//         var result = a.reduce((num1, num2) => num1 * num2)
//         displayResult(result)
//     }

//     function div() {
//         var result = a.reduce((num1, num2) => num1 / num2)
//         displayResult(result)
//     }

//     function mod() {
//         var result = a.reduce((num1, num2) => num1 % num2)
//         displayResult(result)
//     }

// function btnresult() {
//     document.getElementById("display").innerHTML = result
//     console.log('Result:', result)
//     a = [result]// Store the result for further operations
// }