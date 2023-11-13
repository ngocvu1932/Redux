import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './src/components/Counter';


import increment from './redux/actions'

import store from './redux/store'



export default function App() {
  var [count, setCount] = useState(0);
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}


