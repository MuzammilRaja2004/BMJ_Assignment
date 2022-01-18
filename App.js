import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './Navigation/BottomNavigation';

function App() {
  return (
    <>
      {/* <StackNavigation/> */}
      <BottomNavigation/>
    </>
  );
}

const Root = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

export default Root;

const styles = StyleSheet.create({

});
