const fs = require('fs')
const readDir=()=>{
    return new Promise((resolve, rej)=>{
        fs.readdir('/', (err, result) => {
            if(true){
                resolve(result)
            }else{
                rej(err)
            }
        })
    })
}

readDir().then((res)=>{console.log(res)})