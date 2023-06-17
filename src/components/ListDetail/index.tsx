import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ICTwitter} from '../../assets/icon';
import {fonts} from '../../utils/fonts';

const List = ({onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.listView}>
      <Image
        source={{uri: 'https://placeimg.com/640/480/people'}}
        style={{width: 60, height: 60, borderRadius: 60 / 2}}
      />
      <View style={{flex: 1, marginLeft: 20}}>
        <Text style={styles.title}>Rofi Rezkin</Text>
        <Text style={styles.desc}>088573717171</Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        <ICTwitter />
      </View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  listView: {
    paddingVertical: 10,
    borderBottomColor: '#5C6361',
    borderBottomWidth: 1,
    marginBottom: 20,
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 17,
    fontFamily: fonts.primary[700],
  },
  desc: {
    marginTop: 5,
    color: '#DDE4E2',
    fontSize: 15,
    fontFamily: fonts.primary[300],
  },
});
