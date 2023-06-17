import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ICArrowLeft} from '../../assets/icon';
import {fonts} from '../../utils/fonts';

const Header = ({onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={{flexDirection: 'row'}}>
      <ICArrowLeft />
      <Text
        style={{
          color: 'white',
          fontFamily: fonts.primary[700],
          fontSize: 20,
          marginLeft: 20,
        }}>
        Detail Contact
      </Text>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({});
