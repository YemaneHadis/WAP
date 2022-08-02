exports.add = function(req,res,vals){
    const sum = parseFloat(vals.first) + parseFloat(vals.second);
    res.writeHead(200,{"Content-Type":"text/html"});

    const content = `<html>
                        <head>
                            <title>Add</title>
                        </head>
                        <body>
                            <p> sum is : ${String(sum)}</p>
                        </body>
                    </html>`
    res.write(content);
    res.end()
}