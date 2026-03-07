// understanding how we can block the main thread with synchronious prgram

const crypto = require('crypto')

console.log("hello world")

crypto.pbkdf2("hello", 'salt', 500000, 100,'sha512', (err, key)=>{
    console.log(key.toString("hex"))
})

console.log("working")
