import { StyleSheet, View, Text, Button, ToastAndroid } from 'react-native'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/Actions/actions';
import { auth } from '../Config';

const Card = () => {
  const data = useSelector(state => state.AuthReducer);
  console.log('some checking data', data);
  const dispatch = useDispatch();
  // const show = () => {
  //   ToastAndroid.show('Hello here!',
  //     ToastAndroid.TOP
  //   )
  // }

  const handle_logout = () => {
    dispatch(logout(auth.signOut()));
  }

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', fontStyle: 'italic' }}>Welcome: {data.user.email}</Text>
      <View style={{ marginTop: 30 }}>
        <Button title='Logout' onPress={handle_logout} />
      </View>
    </View>
  )
}

export default Card


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
