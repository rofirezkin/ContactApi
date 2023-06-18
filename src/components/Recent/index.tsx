import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../utils/fonts';
import Gap from '../Gap';

const Recent = ({data}: any) => {
  return (
    <View style={styles.recentView}>
      <Gap height={20} />
      <Image
        source={{
          uri:
            data?.photo !== 'N/A'
              ? data?.photo
              : 'https://placeimg.com/640/480/people',
        }}
        style={styles.image}
      />
      <Text style={styles.text}>{data?.firstName}</Text>
    </View>
  );
};

export default Recent;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: fonts.primary[700],
    fontSize: 15,
    marginTop: 8,
  },
  recentView: {alignItems: 'center', flex: 1},
  image: {width: 60, height: 60, borderRadius: 60 / 2},
});
