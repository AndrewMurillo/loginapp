//var http = require('http');
//var fs = require('fs').promises;
const express = require('express');
const path = require('path')

//console.log(path.resolve(__dirname));

const app = express();

//app.use(express.static('./public'));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve('../frontend/signup.html'));
    //res.status(200).send("New home page");
});

app.all('*',(req,res)=>{
    res.status(404).send("Page not found")
})

app.listen(8080,()=>{
    console.log("listening on port 8080...");
})
/*
const server = http.createServer();

server.on('request', async (req,res)=>{
    try{
        const data = await fs.readFile('./frontend/signup.html', {'encoding':'utf8'});
        console.log(data);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    }
    catch(err){
        console.log(err);
    }
})

server.listen(8080)
*/

