import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';

import {fonts} from '../../utils/fonts';

import Gap from '../../components/Gap';
import Avatar from '../../components/Avatar';
import Header from '../../components/Header';
import ListDetail from '../../components/ListDetail';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {fetchDetailContact} from '../../redux/contact/contactSlice';

const Contact = ({navigation, route}: any) => {
  const {detailContact} = useAppSelector(state => state.contact);
  const dispatch = useAppDispatch();
  const param = route.params;

  useEffect(() => {
    dispatch(fetchDetailContact(param));
  }, [dispatch, param]);
  console.log({detailContact});
  return (
    <SafeAreaView style={styles.homeView}>
      <Header onPress={() => navigation.goBack()} title="Detail Contact" />
      <Gap height={40} />
      <Avatar data={detailContact} />
      <Gap height={20} />
      <TouchableOpacity
        onPress={() => navigation.navigate('EditContact', detailContact)}>
        <Text style={{textAlign: 'center', color: 'white'}}>Edit Contact</Text>
      </TouchableOpacity>
      <Gap height={30} />
      <ListDetail title="0857718233" type="phone" desc="Number Phone" />
      <ListDetail title="testing@gmail.com" desc="Email Account" type="gmail" />
      <ListDetail
        type="age"
        title={`${detailContact.age} years old`}
        desc="Age"
      />
      <ListDetail type="twitter" title="@oke.lestari" desc="Twitter Account" />
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
