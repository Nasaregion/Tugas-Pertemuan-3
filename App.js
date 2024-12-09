import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import UserListScreen from './src/screens/UserListScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <UserListScreen />
    </SafeAreaView>
  );
};

export default App;
