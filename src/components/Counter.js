import {Text, View, Pressable , StyleSheet } from "react-native"
import React from "react";
import { connect } from "react-redux";
import increment from "../../redux/actions";

const Counter = ({count, increment}) => {
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 30}}> This is count: {count}  </Text> 
            <Pressable style={styles.press} onPress={increment}>
                <Text style={{fontSize: 30}}>Press</Text>
            </Pressable>
        </View>
    )
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
      alignItems: 'center',
      borderRadius: 10,
    }
  });

var mapStateToProps = (state) => ({
    count: state.count
})

var mapDispatchToProps = (dispatch)=> ({
    increment : () => {
        dispatch(increment)
    }
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Counter);