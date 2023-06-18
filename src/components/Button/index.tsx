import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>Submit</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});
