import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({title, results}) => {
    return (<View>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
        data={results}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={result => result.restaurant.id}
        renderItem={({item})=> {
            
            return <ResultsDetail result={item.restaurant}/>
        }}
        />
   
    </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },

});

export default ResultsList;