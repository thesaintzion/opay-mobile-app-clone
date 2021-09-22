import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../Components/Onboarding/Onboarding';
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';
import DashboardRoot from '../Components/Dashboard/DashboardRoot';

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
        <Stack.Screen name="Dashboard" component={DashboardRoot} options={{ title: 'Dashboard' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
