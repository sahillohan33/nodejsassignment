

const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("<h1>I am Happy to Lean Full Stack Web Development from PW Skill</h1>")
    }
    res.end();
})
server.listen(4000);
console.log(`HTTP server at running on port number is 4000`);

