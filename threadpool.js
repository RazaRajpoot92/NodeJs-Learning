const crypto = require('crypto')
const os = require('os')

// not work here
//process.env.UV_THREADPOOL_SIZE = 6

// crypto.pbkdf2("againpass","salt",800000, 50, "sha512", (err, key)=>{
//  console.log("1 - crypto.pbkdf2")
// })


// crypto.pbkdf2("againpass",'salt',800000,50,'sha512',()=>{
//     console.log("2 - crypto.pbkdf2")
// })

// crypto.pbkdf2('againpass','salt',800000,50,'sha512',()=>{
//     console.log("3 - crypto.pbkdf2")
// })

// crypto.pbkdf2('againpass','salt',800000,50,'sha512',()=>{
//     console.log("4 - crypto.pbkdf2")
// })

// crypto.pbkdf2('againpass','salt',800000,50,'sha512',()=>{
//     console.log("5 - crypto.pbkdf2")
// })

// crypto.pbkdf2('againpass','salt',800000,50,'sha512',()=>{
//     console.log("6 - crypto.pbkdf2")
// })


// crypto.pbkdf2('againpass','salt',800000,50,'sha512',()=>{
//     console.log("7 - crypto.pbkdf2")
// })


// crypto.pbkdf2('againpass','salt',800000,50,'sha512',()=>{
//     console.log("7 - crypto.pbkdf2")
// })


// console.time("start");

// for (let i = 1; i <= 9; i++) {
//   crypto.pbkdf2("pass", "salt", 800000, 50, "sha512", () => {
//     console.log(i);
//   });
// }



console.log(os.cpus().length)



