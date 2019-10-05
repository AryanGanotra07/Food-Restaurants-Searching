import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const searchscreen = () => {
    const [term, setTerm] = useState('');
    return (
        <View>
            <Text>Search Screen</Text>
            <SearchBar
             term={term}
             ontermsubmit ={()=>console.log('submitted')}
              ontermchange={newTerm => setTerm(newTerm)}></SearchBar>
            <Text>{term}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default searchscreen;