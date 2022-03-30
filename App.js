import React from 'react';
import { StyleSheet } from 'react-native';
import TheMainNavigator from './routes/DrawerNav';

export default function App() {
  
  return (
    <TheMainNavigator
    color = {styles.textScreen}
    />
  );
}

const styles = StyleSheet.create({
  textScreen: {
    fontSize:100,
  },
});
