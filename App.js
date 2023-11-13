import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';


import increment from './redux/actions'

import store from './redux/store'



export default function App() {
  var [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}> This is count: {count}  </Text> 
      <Pressable style={styles.press} onPress={() => {
        store.dispatch(increment);
        // console.log(store.getState());
        setCount(store.getState().count)
      }}>
        <Text style={{fontSize: 30}}>Press</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  press: {
    height: 100,
    width: 100,
    backgroundColor: 'violet',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
