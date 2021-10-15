import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../../screens/home/Home';
import Scheduling from '../../screens/scheduling/Scheduling';
import About from '../../screens/about/About';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default drawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Home' 
      drawerContent={props => <DrawerContent {...props} /> } 
    >
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Scheduling' component={Scheduling} />
      <Drawer.Screen name='About' component={About} />
    </Drawer.Navigator>
  );
};