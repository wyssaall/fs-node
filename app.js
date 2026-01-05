import fs from "fs";

fs.writeFile('./filetest.txt', 'testing', 'utf8', (err, data)=>{
    if(err){
        console.log('error');
    }else{
        console.log('success');
    }
})


fs.readFile('./filetest.txt', 'utf8', (err, data)=>{
    if(err){
        console.log('error');
    }else{
        console.log(data);
    }
})