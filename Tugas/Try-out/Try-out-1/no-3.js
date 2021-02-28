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



const request = require('request');
const cheerio = require('cheerio');

const URL = "https://www.cgv.id/en/movies/info/21002000"; 
request(URL, function (err, res, body) {
    if(err)
    {
        console.log(err);
    }
    else
    {
        let $ = cheerio.load(body);
        $('div.main-container>div.main-wrapper>div.main-body-container.skin>div.body-wrapper>div.movie-detail-body').each(function(index){
            const title = $(this).find('div.movie-info-wrapper>div.movie-info-title').text();
            const synopsis = $(this).find('div.movie-info-wrapper>div.synopsis-section>div.movie-synopsis.right').text();
            const info = $(this).find('div.movie-info-wrapper>div.synopsis-section>div.movie-add-info.left').text();
            console.log(title,synopsis, info)
            const log = new Log();
            log.createMessages(`Crawling Data dari ${URL}`)
        });
    }
});



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

