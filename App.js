//const {sum, ipAddress} = require('./Sum.js')
//require('./Test.js')
// import "./calculate/Test.js"

// import {sum, ipAddress} from "./calculate/Sum.js"


const {sum, multiply} = require("./calculate/index.js")
const {sum, multiply} = require("./calculate")

let printMessage = "Let's start learning Node.js"

console.log(printMessage)
console.log(sum(2,3))
console.log(multiply(3,3))
//console.log(ipAddress)