import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../Components/Onboarding/Onboarding';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{}}>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{title: 'Onboarding', headerBackVisible: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
