import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../utils/fonts';

interface AvatarProps {
  data?: {
    photo: string;
    firstName: string;
    lastName: string;
  };
}
const Avatar = ({data}: AvatarProps) => {
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

      <Text style={styles.text}>
        {data?.firstName} {data?.lastName}
      </Text>
      <Text style={styles.subText}>{data ? 'Banten, Indonesia' : ''}</Text>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: fonts.primary[900],
    fontSize: 20,
    marginTop: 10,
  },
  subText: {color: 'white', fontFamily: fonts.primary[300], fontSize: 15},
});
