var fs = require('fs');

const Show=(namaFile)=>{
    fs.readFile(`${namaFile}`,(err, data)=>{
        if(err){
            console.log("Error while reading file", err)
        }else{
            let dataJson=JSON.parse(data)
            dataJson.map((e)=>{
                !e.status?
                console.log(`${e.id} ${e.todo}`):
                console.log(`${e.id} ${e.todo} ${e.status}`)
            })
            
        }    
    })
}


const Add=(namaFile, todo)=>{
    fs.readFile(`${namaFile}`,(err, data)=>{
        if(err){
            const databaru=[]
            databaru.push({id:1, todo:todo})
            return fs.appendFile(`${namaFile}`, JSON.stringify(databaru), (err) => {
                if (err) console.log('Error writing file:', err)
                else console.log(`Adding data success`)
            })

        }else{
            let dataJson=JSON.parse(data)
            const dataTodo ={
                id: dataJson.length+1,
                todo:todo
            }
            dataJson.push(dataTodo)
            return fs.writeFile(`${namaFile}`, JSON.stringify(dataJson), (err) => {
                if (err) console.log('Error writing file:', err)
                else console.log(`Adding data success`)
            })
            
        }    
    })
}


const Update=(namaFile,id,todo)=>{
    fs.readFile(`${namaFile}`,(err, data)=>{
        if(err){
            console.log("Error while reading file", err)
        }else{
            let dataJson=JSON.parse(data)
            const listData=dataJson.find((f)=>f.id==id)
            listData.todo=todo
            return fs.writeFile(`${namaFile}`, JSON.stringify(dataJson), (err) => {
                if (err) console.log('Error writing file:', err) 
                else console.log(`Updating data with ID = ${id} success`)
            })
            
        }    
    })
}

const Delete=(namaFile,id)=>{
    fs.readFile(`${namaFile}`,(err, data)=>{
        if(err){
            console.log("Error while reading file", err)
        }else{
            let dataJson=JSON.parse(data)
            const listData=dataJson.find((f)=>f.id==id)
            delete listData.todo
            delete listData.id
            return fs.writeFile(`${namaFile}`, JSON.stringify(dataJson), (err) => {
                if (err) console.log('Error writing file:', err) 
                else console.log(`Data with ID = ${id} has been deleted`)
            })
            
        }    
    })
}

const Clear=(namaFile)=>{
    fs.readFile(`${namaFile}`,(err, data)=>{
        if(err){
            console.log("Error while reading file", err)
        }else{
            let dataJson=JSON.parse(data)
            dataJson=[]
            return fs.writeFile(`${namaFile}`, JSON.stringify(dataJson), (err) => {
                if (err) console.log('Error writing file:', err) 
                else console.log(`Todo list has been cleared`)
            })
            
        }    
    })
}


const setCompleted=(namaFile,id)=>{
    fs.readFile(`${namaFile}`,(err, data)=>{
        if(err){
            console.log("Error while reading file", err)
        }else{
            let dataJson=JSON.parse(data)
            const listData=dataJson.find((f)=>f.id==id)
            listData['status']="(DONE)"
            return fs.writeFile(`${namaFile}`, JSON.stringify(dataJson), (err) => {
                if (err) console.log('Error writing file:', err) 
                else console.log(`Data with ID = ${id} set tobe Done`)
            })
            
        }    
    })
}

const setUnCompleted=(namaFile,id)=>{
    fs.readFile(`${namaFile}`,(err, data)=>{
        if(err){
            console.log("Error while reading file", err)
        }else{
            let dataJson=JSON.parse(data)
            const listData=dataJson.find((f)=>f.id==id)
            delete listData['status']
            return fs.writeFile(`${namaFile}`, JSON.stringify(dataJson), (err) => {
                if (err) console.log('Error writing file:', err) 
                else console.log(`Re set data with ID = ${id} to be Uncompleted`)
            })
            
        }    
    })
}

module.exports={Show,Add,Update, Delete,Clear,setCompleted,setUnCompleted}