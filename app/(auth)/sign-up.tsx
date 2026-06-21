import {View, Text} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const SignUp = () => {
    return (
        <View>
            <Text>Sign In</Text>

            <Link href="/(auth)/sign-in">Sign Up</Link>
        </View>
    )
}

export default SignUp;