import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const searchscreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
 
    
    const filterR = (price) => {
      
        return results.filter(result =>{
            
            return result.restaurant.price_range===price;
        });
    };

    
     return (
        <>
            
            <SearchBar

             term={term}
             ontermsubmit ={()=>{searchApi(term)} }
              ontermchange={setTerm}></SearchBar>
              {errorMessage?<Text>{errorMessage}</Text>:null}
           
            
            <ScrollView>

           <ResultsList results={filterR(2)} title="Cost Effective"/>
           <ResultsList results={filterR(3)} title="Bit Pricier"/>
            <ResultsList results={filterR(4)} title="Big Spender"/>
            </ScrollView>

            
          
  
         
            

           
        </>
    );
};

const styles = StyleSheet.create({

});

export default searchscreen;