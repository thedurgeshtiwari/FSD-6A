const http=require('http');
const multer  = require('multer')

const myserver=http.createServer((req,res)=>{
    // console.log('server1');
    // res.end('Hi, this is my first server');
    if(req.url=='/'){
        res.end("ABES Engineering College")
    }
    if(req.url=='/about'){
        res.end("I am a student of IT")
    }
    if(req.url=='/Contact'){
        res.end("9058860864")
    }
    if(req.url=='/about'){
        res.end("I am a student of IT")
    }

    else{
        res.end("404 Page not found")
    }
});

myserver.listen(8000,()=>{console.log('server is running');
})

const fs=require('fs')
// fs.writeFileSync("./it-a.text","we are students of it-a")
// const result=fs.readFileSync("./it-a.text","utf-8")
// console.log(result);

//fs.writeFile("./ad.text","coding is a very good time pass",() => { })
// fs.readFile("./ad.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err)
//     }
//     else{
//         console.log(result)
//     }
// })

//fs.appendFileSync("./ad.txt",'and i am happy');

// fs.appendFile("./ad.txt", " and i am happy", (err) => {
// if (err) {
//     console.log("Error appending file:", err);
// }
//  else {
//     console.log("Data appended successfully");
// }
// });

//fs.cpSync("./a1.txt","b1.txt");


const os=require('os');
console.log("platform",os.platform());
console.log("userinfo",os.userInfo());
console.log("CPU",os.arch());

console.log("free memory",os.freemem());
console.log("total memory",os.totalmem());
console.log("uptime",os.uptime());
console.log("home dir",os.homedir());
console.log("hostname",os.hostname());