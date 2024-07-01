const readFile = () => {
  let imagePath = path.join(__dirname,"public","resource",req.url.split("/")[1])
  fs.readFile(imagePath,(err,data)=>{
    if(err){
      res.writeHead(500, {"content-type" : "text/plain"})
      res.write("server error")
    } else {
      res.writeHead(200, {"content-type" : "image/png"})
      res.write(data)
      res.end()
    }
  })
}