class Fetcher{
    constructor() {
    }
    
    static async Get(api){
        let data=[]
        let axios=require('axios')
        await axios.get(`${api}`)
        .then((res)=>{
             data.push(res.data)
        })
        .catch((err)=>{
             data.push(err)
        })
        return data
    }
    static async Delete(api){
        let data=[]
        let axios=require('axios')
        await axios.delete(`${api}`)
        .then((res)=>{
             data.push(res.data)
        })
        .catch((err)=>{
             data.push(err)
        })
        return data
    }
    static async Post(api,json){
        let data=[]
        let axios=require('axios')
        await axios.post(`${api}`,json)
        .then((res)=>{
             data.push(res.data)
        })
        .catch((err)=>{
             data.push(err)
        })
        return data
    }

    static async Put(api,json){
        let data=[]
        let axios=require('axios')
        await axios.put(`${api}`,json)
        .then((res)=>{
             data.push(res.data)
        })
        .catch((err)=>{
             data.push(err)
        })
        return data
    }

    static async Patch(api,json){
        let data=[]
        let axios=require('axios')
        await axios.patch(`${api}`,json)
        .then((res)=>{
             data.push(res.data)
        })
        .catch((err)=>{
             data.push(err)
        })
        return data
    }
}
const caller=async()=>{
    let get= await Fetcher.Get("https://httpbin.org/get");
    let del = await Fetcher.Delete("https://httpbin.org/delete");
    var datapost ={
        "id": 30,
        "name": "Someone"
      };
    var post = await Fetcher.Post("https://httpbin.org/post", datapost);
    var dataput ={
        "id": 30,
        "name": "Alfian"
      };
    var put = await Fetcher.Put("https://httpbin.org/put", dataput);
    var datapatch ={
        "name": "Chika"
      };
    var patch = await Fetcher.Patch("https://httpbin.org/patch", datapatch);
    console.log(get, del, post,put, patch)
}

caller()