import 'react-native-gesture-handler';

import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';

function Screen2() {
  return (
    <View style={styles.MainContainer}>

      <Text style={styles.text}> Screen2 </Text>

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
    fontSize: 24,
    fontWeight: "200",
  },
 
});

export default Screen2 ;