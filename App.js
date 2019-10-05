import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import searchscreen from './src/screens/searchscreen';

const Navigator= createStackNavigator({
  search : searchscreen

},{
  initialRouteName: 'search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
});

export default createAppContainer(Navigator);