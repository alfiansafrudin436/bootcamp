
axios.get(`https://mul14.github.io/data/employees.json`)
    .then((res)=>{
        for(i=0;i<res.data.length;i++){
        if(res.data[i].salary>15000000){
            console.log(res.data[i])
        }}
    })
    .catch((err)=>{
        console.log(err.response)
    })

axios.get(`https://mul14.github.io/data/employees.json`)
.then((res)=>{
    for(i=0;i<res.data.length;i++){
        for(j=0;j<res.data[i].addresses.length;j++){
            if(res.data[i].addresses[j]['city']=="DKI Jakarta"){
                console.log(res.data[i])
            }
    }
}
})
.catch((err)=>{
    console.log(err.response)
})

axios.get(`https://mul14.github.io/data/employees.json`)
.then((res)=>{
    for(i=0;i<res.data.length;i++){
        if(res.data[i].birthday.charAt(6)=='3'){
            console.log(res.data[i])
        }
    }
})
.catch((err)=>{
    console.log(err)
})

axios.get(`https://mul14.github.io/data/employees.json`)
.then((res)=>{
    for(i=0;i<res.data.length;i++){
        if(res.data[i].department['name']=='Research and development'){
            console.log(res.data[i])
        }
    }
})
.catch((err)=>{
    console.log(err)
})

axios.get(`https://mul14.github.io/data/employees.json`)
.then((res)=>{
    for(i=0;i<res.data.length;i++){
        let count=0
        for(j=0;j<res.data[i].presence_list.length;j++){
            if(res.data[i].presence_list[j].substring(5,7)=="10"){
                count+=1;
            }
        }
        console.log(`${res.data[i].id} ,JUMLAH HADIR : ${count}`)
    }
})
.catch((err)=>{
    console.log(err)
})
