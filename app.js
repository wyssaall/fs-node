import fs from "fs";

fs.writeFile('./file.txt', 'creating and writhing this in the txt file', 'utf8', (err, data)=>{
    if(err){
        console.log('error');
    }else{
        console.log('success');
    }
})