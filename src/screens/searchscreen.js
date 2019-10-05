import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import zomato from '../api/zomato';

const searchscreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async() => {
       const response = await zomato.get('api/v2.1/search',{
           params: {
               
               q:term,
               

           }
       });
        setResults(response.data.restaurants);
        
    };

    return (
        <View>
            <Text>Search Screen</Text>
            <SearchBar
             term={term}
             ontermsubmit ={searchApi}
              ontermchange={setTerm}></SearchBar>
            <Text>We have found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default searchscreen;