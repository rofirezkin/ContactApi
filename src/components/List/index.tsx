import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ICTwitter} from '../../assets/icon';
import {fonts} from '../../utils/fonts';

const List = ({onPress, data}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.listView}>
      <Image
        source={{
          uri:
            data?.photo !== 'N/A'
              ? data.photo
              : 'https://placeimg.com/640/480/people',
        }}
        style={{width: 60, height: 60, borderRadius: 60 / 2}}
      />
      <View style={{flex: 1, marginLeft: 20}}>
        <Text style={styles.title}>
          {data.firstName} {data.lastName}
        </Text>
        <Text style={styles.desc}>088573717171</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
        <ICTwitter />
        <Text style={styles.username}>@halo.dhs</Text>
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
  username: {
    color: 'white',
    fontSize: 12,
    fontFamily: fonts.primary[400],
  },
});
