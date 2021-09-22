import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../Components/Onboarding/Onboarding';
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';
import Home from '../Components/Home/Home';
import Details from '../Components/Details/Details';
import Finance from '../Components/Finance/Finance';
import Me from '../Components/Me/Me';
import Friends from '../Components/Friends/Friends';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{title: 'Onboarding'}}
        />

        {/* Auth */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: 'Register'}}
        />

        {/* Dashboard */}
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Details'}}
        />

        <Stack.Screen
          name="Finance"
          component={Finance}
          options={{title: 'Finance'}}
        />

        <Stack.Screen
          name="Friends"
          component={Friends}
          options={{title: 'Friends'}}
        />

        <Stack.Screen name="Me" component={Me} options={{title: 'Me'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
