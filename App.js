import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import Main from './src/pages/main/index';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>App ASTROLOGIA GEORGIA</Text>
      <Main />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#000',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
