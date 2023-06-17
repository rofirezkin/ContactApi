import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../utils/fonts';

const Avatar = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={{uri: 'https://placeimg.com/640/480/people'}}
        style={{width: 110, height: 110, borderRadius: 110 / 2}}
      />

      <Text
        style={{
          color: 'white',
          fontFamily: fonts.primary[900],
          fontSize: 20,
          marginTop: 10,
        }}>
        Annye Mercury
      </Text>
      <Text
        style={{color: 'white', fontFamily: fonts.primary[300], fontSize: 15}}>
        Banten, Indonesia
      </Text>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
