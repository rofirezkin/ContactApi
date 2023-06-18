import {StyleSheet, Text, TextInput as Input, View} from 'react-native';
import React from 'react';

interface TextInputProps {
  value: string;
  placeholder: string;
  onChangeText: (value: string) => void;
  type?: string;
}

const TextInput = ({
  value,
  placeholder,
  onChangeText,
  type,
}: TextInputProps) => {
  return (
    <>
      <Input
        keyboardType={type}
        onChangeText={onChangeText}
        style={styles.inputContainer}
        placeholderTextColor="white"
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#5C6361',
    paddingVertical: 10,
    borderRadius: 20,
    color: 'white',
    marginBottom: 20,
    paddingLeft: 15,
  },
});
