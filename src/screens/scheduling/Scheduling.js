import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';
import { Title } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

const Scheduling = () => {

  const [cursos] = useState(['Android','NodeJs','Python','PHP','Asp']);
  const [cursoSelecionando, setCursoSelecionando] = useState([])

  return(
    <View style={styles.mainViewScheduling}>
      <View>
        <Image
          style={styles.imageScheduling}
          source={require('../../assets/images/vaccinebanner.png')}
        />
      </View>
      <View>
        <Picker
          selectedValue={cursoSelecionando}
          onValueChange={(itemValue) => 
            setCursoSelecionando(itemValue)
          }
        >
          {
            cursos.map(cr => {
              return <Picker.Item label={cr} value={cr} key={cr} />
            })
          }
        </Picker>
      </View>
    </View>
  );
};

export default Scheduling;

const styles = StyleSheet.create({
  mainViewScheduling: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  imageScheduling: {
    width: '100%',
    height: 100
  },  
  teste: {
    alignItems: 'center'
  },
  aaa: {
    width: '90%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  }
});