import React from 'react'
import { View, Text, Button } from 'react-native'
import { STYLES } from '../../Styles/Styles';

const Login = ({navigation}) => {
    return (
        <View style={STYLES.container}>
      <Text>Login</Text>
    <Button  onPress={() => navigation.navigate('Home')} title="To to Dashboard"></Button>
    </View>
    )
}

export default Login;
