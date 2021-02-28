const axios = require('axios')
const url='https://www.cgv.id/'
axios.get(url)
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})