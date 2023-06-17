import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../utils/fonts';
import Gap from '../Gap';

const Recent = () => {
  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <Gap height={20} />

      <Image
        style={{width: 60, height: 60, borderRadius: 60 / 2}}
        source={{uri: 'https://placeimg.com/640/480/people'}}
      />
      <Text
        style={{
          color: 'white',
          fontFamily: fonts.primary[700],
          fontSize: 15,
          marginTop: 8,
        }}>
        Tommyy
      </Text>
    </View>
  );
};

export default Recent;

const styles = StyleSheet.create({});
