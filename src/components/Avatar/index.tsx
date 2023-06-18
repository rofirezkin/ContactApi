import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../utils/fonts';

const Avatar = ({data}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={{
          uri:
            data?.photo !== undefined
              ? data?.photo
              : 'https://placeimg.com/640/480/people',
        }}
        style={{width: 110, height: 110, borderRadius: 110 / 2}}
      />

      <Text
        style={{
          color: 'white',
          fontFamily: fonts.primary[900],
          fontSize: 20,
          marginTop: 10,
        }}>
        {data?.firstName} {data?.lastName}
      </Text>
      <Text
        style={{color: 'white', fontFamily: fonts.primary[300], fontSize: 15}}>
        {data ? 'Banten, Indonesia' : ''}
      </Text>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
