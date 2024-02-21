import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import MovieScreen from "./src/screens/MovieScreen";
import { StatusBar } from 'expo-status-bar';


const App = () => {
  return (
    <SafeAreaView style={styles.container} >

      <View >
        <MovieScreen />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }
});

export default App;
