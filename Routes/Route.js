import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()
import Signup from '../Screens/Signup';
import Signin from '../Screens/Signin';
import Main from '../Navigator/Main';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../Redux/Actions/actions';
import { auth } from '../Config';

const Route = () => {
    const { user } = useSelector(state => state.AuthReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    uid: user.uid
                }))
            } else {
                dispatch(logout())
            }
        })
    }, [])
    return (
        <Stack.Navigator>
            {!user ? <>
                <Stack.Screen name='Signin' component={Signin} options={{ headerShown: false }} />
                <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
            </> : <Stack.Screen name='Main' component={Main} options={{ headerShown: false }} />}

        </Stack.Navigator>
    )
}


export default Route