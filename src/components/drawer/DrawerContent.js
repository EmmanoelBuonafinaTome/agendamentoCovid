import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = (props) => {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return(
    <View style={styles.mainView} >
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <View>
            <View style={{flexDirection:'row'}}>
              <Image
                style={styles.drawerMainImage}
                source={require('../../assets/images/prefeitura-de-braganca-paulista-sp.png')}
              />
              <View>
                <Title style={styles.mainTitle}>
                  Bragança Paulista
                </Title>
                <Caption style={styles.captionTitleMain}>
                  Prefeitura municipal
                </Caption>
              </View>
            </View>
            <View>
              <Drawer.Section style={styles.drawerSection} >
                <DrawerItem
                  label='Home'
                  onPress={() => {props.navigation.navigate('Home')}}
                />
                <DrawerItem
                  label='Scheduling'
                  onPress={() => {props.navigation.navigate('Scheduling')}}
                />
              </Drawer.Section>
              <Drawer.Section title='Preferences'>
                <TouchableRipple onPress={() => {toggleTheme()}}>
                  <View style={styles.preference}>
                    <Text>Dark Theme</Text>
                    <View pointerEvents='none'>
                      <Switch value={isDarkTheme}/>
                    </View>
                  </View>
                </TouchableRipple>
              </Drawer.Section>
            </View>
          </View>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section>
        <DrawerItem
          label="About"
          icon={({color, size}) => (
            <Icon
              name='information-variant'
              color={color}
              size={size}
            />
          )}
          onPress={() => {props.navigation.navigate('About')}}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#6fbbd3'
  },
  drawerContent: {
    flex: 1,
  },
  drawerMainImage: {
    height: 50,
    width: 50,
    resizeMode: 'stretch'
  },
  mainTitle: {
    marginLeft: 10
  },
  captionTitleMain: {
    marginLeft: 10
  },
  drawerSection: {
    marginTop: 15
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  }
});