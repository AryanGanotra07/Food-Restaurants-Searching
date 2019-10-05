import axios from 'axios';


export default axios.create({
    baseURL: 'https://developers.zomato.com',
    headers:{
       'user-key':'9652aab3339b8ce23260293e1be595ea'
    }
    
});

