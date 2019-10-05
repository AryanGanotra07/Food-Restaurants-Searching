import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, ontermchange, ontermsubmit}) => {
    return (
        <View style={styles.background}>
            <Feather 
            name="search" 
            style={styles.icon}>
            </Feather>
            <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
             placeholder="Search"
             value={term}
             onChangeText={ontermchange}
             onEndEditing={ontermsubmit}
             >
             </TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginTop:10
       
        

    },
    input:{
        flex:1,
        marginHorizontal:5,
        fontSize:18
    },
    icon:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:10
    }

});

export default SearchBar;
