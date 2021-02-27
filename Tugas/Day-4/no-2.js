let axios=require('axios');

axios.get(`https://jsonplaceholder.typicode.com/posts`)
.then((result)=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res)=>{
        for(i=0;i<result.data.length;i++){
            for(j=0;j<res.data.length;j++){
                if(result.data[i].id==res.data[j].id){
                    Object.assign(result.data[i],{'user':res.data[j]})
                    console.log(result.data[i])
                }
            }
        }

    })
    .catch((err)=>{
        console.log(err.response)
    })
})
.catch((err)=>{
    console.log(err.response)
})










