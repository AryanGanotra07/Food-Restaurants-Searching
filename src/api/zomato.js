import axios from 'axios';


export default axios.create({
    baseURL: 'https://developers.zomato.com',
    headers:{
       'user-key':'00d9130567ac6b5c5ce83be20f7aab63'
    }
    
});

