import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {STYLES} from '../../Styles/Styles';

const Onboarding = ({navigation}) => {
  return (
    <View style={STYLES.container}>
      <Text>Onboarding</Text>
    <Button  onPress={() => navigation.navigate('Login')} title="To to Login"></Button>
    </View>
  );
};

export default Onboarding;
