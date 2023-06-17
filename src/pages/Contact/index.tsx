import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import List from '../../components/List';
import {fonts} from '../../utils/fonts';
import Search from '../../components/Search';
import Recent from '../../components/Recent';
import Gap from '../../components/Gap';

const Contact = ({navigation}) => {
  return (
    <SafeAreaView style={styles.homeView}>
      <View>
        <Text style={styles.titleHeader}>My Contact</Text>
        <Gap height={40} />
        <Search />
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <Recent />
          <Gap width={20} />
          <Recent />
          <Gap width={20} />
          <Recent />
          <Gap width={20} />
          <Recent />
          <Gap width={20} />
          <Recent />
          <Gap width={20} />
          <Recent />
        </ScrollView>
      </View>
      <Gap height={20} />
      <Text style={styles.friendText}>Friends (200)</Text>
      <ScrollView>
        <List onPress={() => navigation.navigate('DetailContact')} />
        <List />
        <List />
        <List />
        <List />
      </ScrollView>
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
