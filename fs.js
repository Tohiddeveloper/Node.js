let fs = require('fs');

fs.writeFile('myCode.txt','we are using node.js \n',()=>{
    console.log('File Created')
})

fs.appendFile('myCode.txt', 'This is append File \n',()=>{
    console.log('File Appended')
})

fs.readFile('myCode.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data) 
})

fs.rename('myCode.txt','nodeFile.txt',(err)=>{
    if(err) throw err;
    console.log('File Renamed')
})

fs.unlink('myCode.txt',(err)=>{
    if(err) throw err;
    console.log('File Deleted')
})