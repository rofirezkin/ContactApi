import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import List from '../../components/List';
import {fonts} from '../../utils/fonts';
import Search from '../../components/Search';
import Recent from '../../components/Recent';
import Gap from '../../components/Gap';

import {fetchContact} from '../../redux/contact/contactSlice';
import {useAppDispatch, useAppSelector} from '../../redux/store';

const Contact = ({navigation}: any) => {
  const contact = useAppSelector(state => state.contact.contact);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.homeView}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.titleHeader}>My Contact</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddContact')}>
            <Text style={styles.titleHeader}>+</Text>
          </TouchableOpacity>
        </View>
        <Gap height={20} />
        <Search />
        <Gap height={10} />
        <Text style={styles.friendText}>Recent</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {contact.map((res: any) => {
            return (
              <>
                <Recent data={res} key={res.id} />
                <Gap width={20} />
              </>
            );
          })}
        </ScrollView>
      </View>
      <Gap height={20} />
      <Text style={styles.friendText}>Friends ({contact.length})</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {contact.map((res: any) => {
          return (
            <List
              key={res.id}
              data={res}
              onPress={() => navigation.navigate('DetailContact', res.id)}
            />
          );
        })}
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
    marginVertical: 10,
  },
});
