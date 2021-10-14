import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Scheduling from '../../screens/home/Home';
import Home from '../../screens/scheduling/Scheduling';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default drawer = () => {

  return (
    <Drawer.Navigator initialRouteName='Home' drawerContent={props => <DrawerContent {...props} /> } >
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Scheduling' component={Scheduling} />
    </Drawer.Navigator>
  );
};