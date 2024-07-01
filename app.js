const http = require('http')
const fs = require('fs')
const path = require('path')
const fileServe = require('./module/fileServe')



let server = http.createServer((req, res)=>{    

  console.log(req.method,"  and  ",req.url)

  if(req.method === "GET"){
    if(req.url === "/"){
      // console.log(__dirname)
      let landPath = path.join(__dirname,"public","html","index.html")
      // console.log(landPath)
      fs.readFile(landPath,"utf-8",(err,data)=>{
        if(err){
          res.writeHead(500, {"content-type" : "text/plain"})
          res.write("server error")
        } else {
          // console.log(data)
          res.writeHead(200, {"content-type" : "text/html"})
          res.write(data)
          res.end()
        }
      })
    } else {

      fileServe(req,res,__dirname)

    }
  }
})


let PORT = 8080
server.listen(PORT,()=>{
  console.log(`Running on this address :   http://localhost:${PORT}/`)
})