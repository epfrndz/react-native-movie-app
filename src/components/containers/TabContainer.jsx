import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoviesScreen from '../screens/MoviesScreen';
import SearchScreen from '../screens/SearchScreen';
import TVScreen from '../screens/TVScreen';

const Tab = createMaterialTopTabNavigator();

export default function TabContainer({navigation}) {
  return (
    <Tab.Navigator screenOptions={{tabBarLabelStyle: {fontWeight: 'bold', fontSize: 11}, tabBarIndicatorStyle: {backgroundColor: '#2c3e50'}}}>
      <Tab.Screen name="Movies" component={MoviesScreen} initialParams={{navigation: navigation}} />
      <Tab.Screen name="Search Results" component={SearchScreen} initialParams={{navigation: navigation}}/>
      <Tab.Screen name="TV Shows" component={TVScreen} initialParams={{navigation: navigation}}/>
    </Tab.Navigator>
  );
}