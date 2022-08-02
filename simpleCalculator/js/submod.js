exports.sub = function(req,res,vals){
    const sub = parseFloat(vals.first) - parseFloat(vals.second);
    res.writeHead(200,{"Content-Type":"text/html"});

    const content = `<html>
                        <head>
                            <title>Add</title>
                        </head>
                        <body>
                            <p> subb is : ${String(sub)}</p>
                        </body>
                    </html>`
    res.write(content);
    res.end()
}