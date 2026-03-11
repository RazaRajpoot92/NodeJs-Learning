const http = require('http')

const server = http.createServer((req, res)=>{

    switch(req.url){
        case "/data":
            let data = {name:'raza', age:25}
            res.end(JSON.stringify(data))
            break

        default:
            res.end("Hello Node Javascript")
    }
})


server.listen(1234)