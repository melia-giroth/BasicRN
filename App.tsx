import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Programmer from './assets/Programmer.jpg';

const App = () => {
  return (
    <ScrollView>
      <Text style={style.title}>Basic Component in React Native</Text>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{width: 150, height: 100, backgroundColor: 'red'}} />
        <View style={{width: 150, height: 100, backgroundColor: 'blue'}} />
        <View style={{width: 150, height: 100, backgroundColor: 'black'}} />
      </View>
      <Image
        source={require('./assets/Programmer.jpg')}
        style={{height: 300, width: 300}}
      />
      <Image source={Programmer} style={{height: 300, width: 300}} />
      <TextInput
      placeholder="Masukkan nama anda"
      style={{
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        padding: 10
      }} />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  }
})

export default App;