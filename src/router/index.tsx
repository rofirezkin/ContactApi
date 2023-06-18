import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Contact from '../pages/Contact';
import DetailContact from '../pages/DetailContact';
import AddContact from '../pages/AddContact';
import EditContact from '../pages/EditContact';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailContact"
        component={DetailContact}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddContact"
        component={AddContact}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditContact"
        component={EditContact}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
