import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import zomato from '../api/zomato';

const ResultShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);
    console.log(result);
    const getResult = async (id) => {

       const response = await zomato.get(`/restaurant?res_id=${id}`);
       setResult(response.data);

    };

    useEffect(()=>{
        getResult(id);
    }, [])
    return (
        <View>
            <Text>{navigation.getParam('id')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ResultShowScreen;

