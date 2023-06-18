import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../utils/fonts';
import Gap from '../Gap';

const Recent = ({data}) => {
  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <Gap height={20} />
      <Image
        source={{
          uri:
            data?.photo !== 'N/A'
              ? data?.photo
              : 'https://placeimg.com/640/480/people',
        }}
        style={{width: 60, height: 60, borderRadius: 60 / 2}}
      />
      <Text
        style={{
          color: 'white',
          fontFamily: fonts.primary[700],
          fontSize: 15,
          marginTop: 8,
        }}>
        {data?.firstName}
      </Text>
    </View>
  );
};

export default Recent;

const styles = StyleSheet.create({});
