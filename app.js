const http = require('http')
const fs = require('fs')
const path = require('path')
const fileServe = require('./module/fileServe')



let server = http.createServer((req, res)=>{    
  if(req.url.startsWith("/module")){
    const normalize = path.normalize(req.url)
    let test = path.extname(normalize).substring(1)
    const filePath = path.join(__dirname,normalize)
    console.log(filePath)
    console.log(test)

  }
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



    // else if(req.url.split(".")[1]=== "html"){
    //    // console.log(__dirname)
    //   let landPath = path.join(__dirname,"public","html",req.url.split("/")[1])
    //   // console.log(htmlpath)
    //   fs.readFile(landPath,"utf-8",(err,data)=>{
    //     if(err){
    //       res.writeHead(500, {"content-type" : "text/plain"})
    //       res.write("server error")
    //     } else {
    //       // console.log(data)
    //       res.writeHead(200, {"content-type" : "text/html"})
    //       res.write(data)
    //       res.end()
    //     }
    //   })
    // }
    // else if(req.url.split(".")[1] === "png"){
    //   let imagePath = path.join(__dirname,"public","resource",req.url.split("/")[1])
    //   fs.readFile(imagePath,(err,data)=>{
    //     if(err){
    //       res.writeHead(500, {"content-type" : "text/plain"})
    //       res.write("server error")
    //     } else {
    //       res.writeHead(200, {"content-type" : "image/png"})
    //       res.write(data)
    //       res.end()
    //     }
    //   })
    // }
    // else if(req.url.split(".")[1] === "js"){
    //   // console.log(__dirname)
    //   let jspath = path.join(__dirname,"public",req.url)
    //   // console.log(jspath)
    //   fs.readFile(jspath,"utf-8",(err,data)=>{
    //     if(err){
    //       res.writeHead(500, {"content-type" : "text/plain"})
    //       res.write("server error")
    //     } else {
    //       // console.log(data)
    //       res.writeHead(200, {"content-type" : "application/javaScript"})
    //       res.write(data)
    //       res.end()
    //     }
    //   })
    // }
    // else if(req.url.split(".")[1] === "css"){
    //   let csspath = path.join(__dirname,"public","css",req.url.split("/")[1])
    //   // console.log(jspath)
    //   fs.readFile(csspath,"utf-8",(err,data)=>{
    //     if(err){
    //       res.writeHead(500, {"content-type" : "text/plain"})
    //       res.write("server error")
    //     } else {
    //       // console.log(data)
    //       res.writeHead(200, {"content-type" : "text/css"})
    //       res.write(data)
    //       res.end()
    //     }
    //   })
    // }
    // else if(req.url.startsWith("/list")){
    //   let landPath = path.join(__dirname,"public","html","list.html")
    //   fs.readFile(landPath,(err,data)=>{
    //     if(err){
    //       console.log(err)
    //       res.end("오류")
    //     }else{
    //       res.write(data)
    //       res.end()
          
    //     }
    //   })

    // }
  }
})


let PORT = 8080
server.listen(PORT,()=>{
  console.log(`Running on this address :   http://localhost:${PORT}/`)
})