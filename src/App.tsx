import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Provider} from 'react-redux';
import {store, useAppSelector} from './redux/store';
import FlashMessage from 'react-native-flash-message';
import Loading from './components/Loading';

const MainApp = () => {
  const {isLoading} = useAppSelector(state => state.contact);
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
