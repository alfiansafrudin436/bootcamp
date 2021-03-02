const axios=require('axios')
// axios.get(`https://mul14.github.io/data/employees.json`)
//     .then((res)=>{
//         // for(i=0;i<res.data.length;i++){
//         // if(res.data[i].salary>15000000){
//         //     console.log(res.data[i])
//         // }}
//         let filter=res.data.filter((fil)=>{
//             return fil.salary>15000000
//         })
//         console.log(filter)
//     })
//     .catch((err)=>{
//         console.log(err.response)
//     })

// axios.get(`https://mul14.github.io/data/employees.json`)
//     .then((res)=>{
//         // for(i=0;i<res.data.length;i++){
//         //     for(j=0;j<res.data[i].addresses.length;j++){
//         //         if(res.data[i].addresses[j]['city']=="DKI Jakarta"){
//         //             console.log(res.data[i])
//         //         }
//         //     }
//         // }

//         let filter=res.data.filter((fil)=>{
//             return fil.addresses.filter((filCity)=>{
//                 filCity['city']=='DKI Jakarta'
//             })
//         })
//         console.log(filter)
// })
// .catch((err)=>{
//     console.log(err.response)
// })

// axios.get(`https://mul14.github.io/data/employees.json`)
// .then((res)=>{
//     // for(i=0;i<res.data.length;i++){
//     //     if(res.data[i].birthday.charAt(6)=='3'){
//     //         console.log(res.data[i])
//     //     }
//     // }
//     const filter=res.data.filter((fil)=>{
//         return fil.birthday.charAt(5)==0 && fil.birthday.charAt(6)==3
//     })
//     console.log(filter)
// })
// .catch((err)=>{
//     console.log(err)
// })

// axios.get(`https://mul14.github.io/data/employees.json`)
// .then((res)=>{
//     // for(i=0;i<res.data.length;i++){
//     //     if(res.data[i].department['name']=='Research and development'){
//     //         console.log(res.data[i])
//     //     }
//     // }
//     const filter= res.data.filter((fil)=>{
//         return fil.department['name']=='Research and development';
//     })
//     console.log(filter)
// })
// .catch((err)=>{
//     console.log(err)
// })

// axios.get(`https://mul14.github.io/data/employees.json`)
// .then((res)=>{
//     // for(i=0;i<res.data.length;i++){
//     //     let count=0
//     //     for(j=0;j<res.data[i].presence_list.length;j++){
//     //         if(res.data[i].presence_list[j].substring(5,7)=="10"){
//     //             count+=1;
//     //         }
//     //     }
//     //     console.log(`${res.data[i].id} ,JUMLAH HADIR : ${count}`)
//     // }
//     const filter=res.data.filter((fil)=>{
//         return fil.presence_list.filter((filPresesmce)=>{
//             filPresesmce.reduce((e)=>{
//                 console.log(e)
//             })
//         })
//     })
//     console.log(filter)
// })
// .catch((err)=>{
//     console.log(err)
// })
