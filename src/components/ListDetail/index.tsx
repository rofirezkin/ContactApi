import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ICAge,
  ICGmail,
  ICImgTwitter,
  ICMessage,
  ICPhoneNumber,
} from '../../assets/icon';
import {fonts} from '../../utils/fonts';

interface ListDetailProps {
  type: 'twitter' | 'phone' | 'gmail' | 'age';
  title: string;
  desc: string;
}

const ListDetail = ({type, title, desc}: ListDetailProps) => {
  const IconImage = () => {
    if (type === 'twitter') {
      return <ICImgTwitter />;
    } else if (type === 'phone') {
      return <ICPhoneNumber />;
    } else if (type === 'gmail') {
      return <ICGmail />;
    } else if (type === 'age') {
      return <ICAge />;
    } else {
      return <ICImgTwitter />;
    }
  };

  return (
    <View style={styles.listView}>
      <IconImage />
      <View style={{flex: 1, marginLeft: 20}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        <ICMessage />
      </View>
    </View>
  );
};

export default ListDetail;

const styles = StyleSheet.create({
  listView: {
    paddingVertical: 10,
    borderBottomColor: '#5C6361',
    borderBottomWidth: 1,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
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
