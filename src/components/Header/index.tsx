import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ICArrowLeft} from '../../assets/icon';
import {fonts} from '../../utils/fonts';

const Header = ({onPress, title}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={{flexDirection: 'row'}}>
      <ICArrowLeft />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: fonts.primary[700],
    fontSize: 20,
    marginLeft: 20,
  },
});
