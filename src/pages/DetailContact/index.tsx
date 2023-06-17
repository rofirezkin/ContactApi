import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import List from '../../components/List';
import {fonts} from '../../utils/fonts';
import Search from '../../components/Search';
import Recent from '../../components/Recent';
import Gap from '../../components/Gap';
import Avatar from '../../components/Avatar';
import Header from '../../components/Header';
import ListDetail from '../../components/ListDetail';

const Contact = ({navigation}) => {
  return (
    <SafeAreaView style={styles.homeView}>
      <Header onPress={() => navigation.goBack()} />
      <Gap height={40} />
      <Avatar />
      <ListDetail />
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  homeView: {
    backgroundColor: '#1A2421',
    padding: 20,
    flex: 1,
  },
  titleHeader: {
    color: 'white',
    fontSize: 30,
    fontFamily: fonts.primary[800],
  },
  friendText: {
    color: 'white',
    fontSize: 20,
    fontFamily: fonts.primary[900],
    marginVertical: 15,
  },
});
