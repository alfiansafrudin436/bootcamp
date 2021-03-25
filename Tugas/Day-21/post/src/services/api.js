import axios from 'axios'

const instance= axios.create({
    headers:{
        'Content-Type':'application/json'
    },
    baseURL:'http://simple-wms.herokuapp.com'
})

export default instance
