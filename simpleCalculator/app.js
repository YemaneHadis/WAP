const http = require("http");
const url = require("url");
const fs = require("fs");
const addmod = require("./js/addmod");
const multiplymod = require("./js/multiplymod");
const submod = require("./js/submod");
const divmod = require("./js/divmod");


http.createServer(function(req,res){
    const endPointURL = url.parse(req.url,true);
    const endPointURLFileName = "."+endPointURL.pathname
    console.log(endPointURL.pathname)
    if(endPointURL.pathname == "/add.js"){
        console.log("Adding")
        addmod.add(req,res,endPointURL.query);
    }
    else if(endPointURL.pathname == "/multiply.js"){
        multiplymod.multiply(req,res,endPointURL.query);
    }else if(endPointURL.pathname == "/divistion.js"){
        divmod.div(req,res,endPointURL.query);
    }else if(endPointURL.pathname == "/sub.js"){
        submod.sub(req,res,endPointURL.query);
    }else{
        fs.readFile(endPointURLFileName,function(err,data){
            if(err){
                res.writeHead(404,{"Content-Type":"text/html"});
                return res.end("<h2 style='color:red;'>404 Not Found</h2>");
            }
            res.writeHead(200)
            res.write(data)
            return res.end();
        })

    }
}).listen(8081)


console.log("Server is started at 8081")