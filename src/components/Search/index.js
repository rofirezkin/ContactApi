import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Search = () => {
  return (
    <TextInput
      style={styles.inputCOntainer}
      placeholderTextColor="white"
      placeholder="Search"
    />
  );
};

export default Search;

const styles = StyleSheet.create({
  inputCOntainer: {
    backgroundColor: '#5C6361',
    padding: 8,
    borderRadius: 20,
    color: 'white',
  },
});
