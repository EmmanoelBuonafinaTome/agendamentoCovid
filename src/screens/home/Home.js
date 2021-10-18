import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Title } from 'react-native-paper';

const Home = ({navigation}) => {
  return(
    <View style={styles.mainView}>
      <View style={styles.viewImage}>
        <Image 
          style={styles.mainImageHome}
          source={require('../../assets/images/vaccine.png')}
        />
      </View>
      <View style={styles.viewContent}>
        <Title>Vacinação covid-19</Title>
        <Text style={styles.textContent}>
          It is a long established fact that a 
          reader will be distracted by the readable content of a page when 
          looking at its layout. The point of using Lorem Ipsum is that it has 
          a more-or-less normal distribution of letters, as opposed to using 'Content here, 
          content here', making it look like readable English. Many desktop 
          publishing packages and web page editors now use Lorem Ipsum as their 
          default model text, and a search for 'lorem ipsum' will uncover many web 
          sites still in their infancy. Various versions have evolved over the years, 
          sometimes by accident, sometimes on purpose (injected humour and the like).
        </Text>
        <TouchableOpacity 
          style={styles.buttonHome}
          onPress={() => navigation.navigate('Scheduling')}
        >
          <Text>Agendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#6fbbd3',
    alignItems: 'center',
    height: '100%'
  },
  viewImage: {
    paddingTop: 15,
  },
  mainImageHome: {
    width: 200,
    height: 150
  },
  viewContent: {
    margin: 20,
    alignItems: 'center',
  },
  textContent: {
    letterSpacing: 1,
    textAlign: 'center'
  },
  buttonHome: {
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: '#DB901A',
    padding: 10,
    alignItems: 'center',
    width: 250
  }
});