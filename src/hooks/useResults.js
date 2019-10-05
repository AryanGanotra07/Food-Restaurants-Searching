
import {useEffect, useState} from 'react';
import zomato from '../api/zomato';


export default ()=> {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        try{
       const response = await zomato.get('/api/v2.1/search',{
           params: {
               
               q:searchTerm,
               entity_id:4,
               entity_type:'city'
               

           }
       });
        setResults(response.data.restaurants);
        
    }
    catch(e){
        console.log(e);
        setErrorMessage('Something went wrong');
    }

 
 
};
//
useEffect(()=>{
    searchApi('chinese');
},[]);

return [searchApi, results, errorMessage];

}
