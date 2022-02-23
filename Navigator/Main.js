import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Card from '../Screens/Card';
import Contact from '../Screens/Contact';
import Product from '../Screens/Product';
import Service from '../Screens/Services';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { db } from '../Config';

const Main = () => {
    const [users, setUser] = useState([]);


    useEffect(() => {
        db.collection("users").get().then((snapshot) => {
            snapshot.forEach((elm) => {
                let data = elm.data();
                setUser(arr => [...arr, data])
            })
        }).catch((err) => {
            console.log(err.message)
        })
        return (() => {
            setUser([])
        })
    }, [])

    let check = users.map((elm) => {
        return elm.admin
    })

    console.log('check', check)
    return (
        <Tab.Navigator>
            <Tab.Group>

                <Tab.Screen name='Home' component={Card} options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={30} style={{ position: 'relative' }} />
                    ),
                    headerShown: false
                }} />
                <Tab.Screen name='Cart' component={Contact} options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="shopping-cart" color={color} size={30} style={{ position: 'relative' }} />
                    ),
                    headerShown: false
                }} />


                {check === true ? <Tab.Screen name='Admin' component={Product} options={{
                    tabBarIcon: ({ color }) => (
                        <Icon1 name="settings" color={color} size={30} style={{ position: 'relative' }} />
                    ),
                    headerShown: false
                }} /> : null}



                <Tab.Screen name='User' component={Service} options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="user" color={color} size={30} style={{ position: 'relative' }} />
                    ),
                    headerShown: false
                }} />
            </Tab.Group>
        </Tab.Navigator>

    )
}

export default Main

const styles = StyleSheet.create({})