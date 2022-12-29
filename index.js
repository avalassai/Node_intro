// const fs = require('fs');

// fs.readFile('hello.txt', function(err,res){
//     console.log('file read complete');
// });

// var data = fs.readFileSync('hello.txt'); --> readfilesync will follow progrsm order but readfile doesnt
// console.log(data.toString());

// console.log('hello');

const http = require('http');

var todos=[{
    id : 1,
    status:'Active',
    description:"this is the first todo"
}]


function handleHttp(req, res){
    res.write('Hello guys and codes');
    // console.log(req);

    if(req.url==='/todos' && req.method==='GET'){
        res.write(JSON.stringify(todos));
        res.end();
    }



    if(req.url==='/todos' && req.method==='POST'){

        req.on('data',function(data){
            var d = JSON.parse(data.toString());
            todos.push(d) 
        })
        res.write('post added');
        res.end();
    }
    res.end();//this line is very very important or else we cant print what is in res.write()
 
    
    
}


const server = http.createServer(handleHttp);

server.listen(3000);
