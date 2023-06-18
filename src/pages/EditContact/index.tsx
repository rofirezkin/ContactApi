import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Avatar from '../../components/Avatar';
import Gap from '../../components/Gap';
import TextInput from '../../components/TextInput';
import useForm from '../../components/hooks/useForm';
import Button from '../../components/Button';

import {useAppDispatch, useAppSelector} from '../../redux/store';
import {saveContact} from '../../redux/contact/contactSlice';

const EditContact = ({navigation, route}) => {
  const detailParam = route.params;
  const dispatch = useAppDispatch();

  const [form, setForm] = useForm({
    firstName: detailParam.firstName,
    lastName: detailParam.lastName,
    age: detailParam.age,
    photo: detailParam.photo,
  });

  console.log('dispac param', detailParam.age);
  const saveContactHandling = () => {
    console.log('form ,', form);
    dispatch(editContact({form, navigation}));
  };

  return (
    <View style={styles.homeView}>
      <Header title="Edit Contact" onPress={() => navigation.goBack()} />
      <Gap height={40} />
      <Avatar data={form} />
      <Gap height={20} />
      <TextInput
        value={form.firstName}
        placeholder="First Name"
        onChangeText={value => setForm('firstName', value)}
      />
      <TextInput
        value={form.lastName}
        placeholder="Last Name"
        onChangeText={value => setForm('lastName', value)}
      />
      <TextInput
        type="numeric"
        value={String(form.age)}
        placeholder="Age"
        onChangeText={value => setForm('age', value)}
      />
      <Button onPress={saveContactHandling} />
    </View>
  );
};

export default EditContact;

const styles = StyleSheet.create({
  homeView: {
    backgroundColor: '#1A2421',
    padding: 20,
    flex: 1,
  },
});
