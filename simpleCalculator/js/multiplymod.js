exports.multiply = function(req,res,vals){
    const product = parseFloat(vals.first) * parseFloat(vals.second);
    res.writeHead(200,{"Content-Type":"text/html"});

    const content = `<html>
                        <head>
                            <title>Add</title>
                        </head>
                        <body>
                            <p> Product is : ${String(product)}</p>
                        </body>
                    </html>`
    res.write(content);
    res.end()
}