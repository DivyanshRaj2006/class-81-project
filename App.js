import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './Navigation/Drawernavigator';


const Tab = createBottomTabNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}