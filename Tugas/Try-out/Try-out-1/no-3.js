class Fetcher{
  constructor() {
  }
  
  static async Get(api){
    let data=[]
    let axios=require('axios')
    await axios.get(`${api}`)
    .then((res)=>{
        data.push(res.data)
        const log = new Log();
        log.createMessages(`Get Data from ${api}`)
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
        const log = new Log();
        log.createMessages(`Delete Data ${api}`)
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
        const log = new Log();
        log.createMessages(`Post Data ${api}`)
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
        const log = new Log();
        log.createMessages(`Put Data ${api}`)
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
        const log = new Log();
        log.createMessages(`Patch Data ${api}`)
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
  // console.log(get, del, post,put, patch)
}

caller()



const axios = require('axios')
const url='https://www.cgv.id/'
axios.get(url)
.then((res)=>{
  // console.log(res)
  const log = new Log();
  log.createMessages(`Get Data ${url}`)
})
.catch((err)=>{
  // console.log(err)
})




const fs = require("fs");

class Log {
constructor() {
}

getDate() {
  let d = new Date();
  return d.toUTCString();
}

createMessages(message) {
  let responseMessage = `[${this.getDate()}] ${message}`;
  this.#saveLog(responseMessage);
  return responseMessage;
}

#saveLog(message = "") {
  if (message) {
    fs.appendFile("app.log", message + "\r\n", (error) => {
      if (error) {
        console.log({ error });
      }
      console.log("file created");
    });
  }
}
}

