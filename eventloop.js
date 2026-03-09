const fs = require('fs')
// start of program
// last line of program
// nextTick
// here i'm
// solved
// setTime
//Immediate
// file

console.log("start of program..")

setTimeout(()=>{
    console.log("setTime")
    setTimeout(()=>console.log("settime2"),0)
    process.nextTick(()=>console.log("secondProcess"))
},0)
setImmediate(()=>console.log("Immediate"))

fs.readFile('./file.txt','utf-8',()=>{
    console.log('file')
})

process.nextTick(()=>{
    process.nextTick(()=>console.log("here i'm"))
    console.log("nextTick")
})

Promise.resolve("solved").then(console.log)

console.log("Last line of program")

