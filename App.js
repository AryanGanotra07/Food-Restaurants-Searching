import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import searchscreen from './src/screens/searchscreen';
import ResultShowScreen from './src/screens/ResultShowScreen';
const Navigator= createStackNavigator({
  search : searchscreen,
  result : ResultShowScreen

},{
  initialRouteName: 'search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
});

export default createAppContainer(Navigator);