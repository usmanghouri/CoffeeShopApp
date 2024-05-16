import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TouchableOpacity,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './Screens/Signup';
import { app, auth } from './firebase';
import login from './Screens/Login';
import landingpage from './Screens/landingpage';
import Home1 from './Screens/Home1';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name='landingpage' component={landingpage}></Stack.Screen>
      <Stack.Screen name='login' component={login}></Stack.Screen>
      <Stack.Screen name='Signup' component={Signup}></Stack.Screen>
      <Stack.Screen name='Home1' component={Home1}></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red'
  },
});
