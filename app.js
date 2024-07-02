const http = require('http')
const fs = require('fs')
const path = require('path')
const fileServe = require('./module/fileServe')
const ItemList = require('./module/ItemList');


let server = http.createServer((req, res)=>{    

  console.log(req.method,"  and  ",req.url)

  if(req.method === "GET"){
    if(req.url === "/list"){
      ItemList(res);
    } else{
      fileServe(req,res,__dirname)
    }
  }
})


let PORT = 8080
server.listen(PORT,()=>{
  console.log(`Running on this address :   http://localhost:${PORT}/`)
})