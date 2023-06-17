import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Contact from '../pages/Contact';
import DetailContact from '../pages/DetailContact';

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
    </Stack.Navigator>
  );
};

export default Router;
