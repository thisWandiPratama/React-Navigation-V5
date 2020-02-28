import 'react-native-gesture-handler';

import * as React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

function Screen1({ navigation }) {

  navigateToScreen=()=>{

    navigation.navigate('Screen2');

  }

  return (
    <View style={styles.MainContainer}>

      <Text style={styles.text}> Screen2 </Text>

      <Button onPress={this.navigateToScreen} title="Navigate To Screen2" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  text: {
    textAlign: 'center',
    margin: 18,
    fontSize: 24,
    fontWeight: "200",
  },
 
});

export default Screen1 ;