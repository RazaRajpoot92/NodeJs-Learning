// for testing async code

const fs = require('fs')
const https = require("https")

console.log("hello world")

fs.readFile("file.txt","utf-8", (err, data)=>{
    console.log(data)
})

https.get("https://dummyjson.com/products/1", (res)=>{
    res.resume()
    console.log("data fetched!")
})

setTimeout(()=>{
    console.log("setTimeout called after 5000 MS")
},5000)

let a = 900000
let b = 900333

function multiply(a,b){
    let result = a * b
    return result
}

const result = multiply(a,b)

console.log(result)

