import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';


const OnBoardScreen = () => {
    const navigation = useNavigation();
    return (
        <Onboarding
            onSkip={() => navigation.replace('Signin')}
            onDone={() => navigation.navigate('Signin')}
            pages={[
                {
                    backgroundColor: '#333',
                    image: <Image source={require('../assets/images/one.png')} style={{ resizeMode: 'contain', marginTop: -100 }} />,
                    title: 'Bmj Ecommerce',
                    subtitle: 'E-commerce, maintaining relationships and conducting business',
                },
                {
                    backgroundColor: '#333',
                    image: <Image source={require('../assets/images/two.png')} style={{ resizeMode: 'contain', marginTop: -100 }} />,
                    title: 'Bmj Ecommerce',
                    subtitle: 'E-commerce, maintaining relationships and conducting business',
                },
                {
                    backgroundColor: '#333',
                    image: <Image source={require('../assets/images/three.png')} style={{ resizeMode: 'contain', marginTop: -100 }} />,
                    title: 'Bmj Ecommerce',
                    subtitle: 'E-commerce, maintaining relationships and conducting business',
                },

            ]}
        />
    )
}

export default OnBoardScreen

const styles = StyleSheet.create({

})