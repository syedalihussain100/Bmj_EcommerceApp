import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity, Platform, TextInput, StatusBar } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';
import Materialicon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../Config';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Actions/actions'

const Signin = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
    Check_textInputChange: false,
    securityTextEntry: true
  })



  const signindata = () => {
    auth.signInWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        dispatch(login({
          name: user.user.displayName,
          email: user.user.email,
          uid: user.user.uid
        }))
        ToastAndroid.show('SignIn Successfully!', ToastAndroid.TOP)
        navigation.navigate('Main')
      }).catch((err) => {
        ToastAndroid.show(err.message, ToastAndroid.TOP)
      })
  }

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        Check_textInputChange: true
      })
    } else {
      setData({
        ...data,
        email: val,
        Check_textInputChange: false
      })
    }
  }

  const handlePasswordChange_Text = (val) => {
    setData({
      ...data,
      password: val
    })
  }

  const updateSecurityTextEntry = () => {
    setData({
      ...data,
      securityTextEntry: !data.securityTextEntry
    })
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#333'} barStyle='light-content' />
      <View style={styles.header}>
        <Text style={styles.text_header}>Login Now</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <Materialicon name='user-o' size={20} color='#05375a' />
          <TextInput placeholder='Enter Your Email...' style={styles.textInput} autoCapitalize='none' onChangeText={(e) => textInputChange(e)} />
          {data.Check_textInputChange ?
            <Animatable.View animation='bounceIn'>
              <Feather name='check-circle' color='#333' size={20} />
            </Animatable.View>
            : null
          }
        </View>
        {/*  */}
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <Materialicon name='lock' size={20} color='#05375a' />
          <TextInput placeholder='Enter Your Password...' style={styles.textInput} autoCapitalize='none' secureTextEntry={data.securityTextEntry ? true : false} onChangeText={(e) => handlePasswordChange_Text(e)} />
          <TouchableOpacity onPress={updateSecurityTextEntry}>
            {data.securityTextEntry ?
              <Feather name='eye-off' color='#333' size={20} />
              : <Feather name='eye' color='#333' size={20} />
            }
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={signindata}>
            <LinearGradient colors={['lightgray', '#333']} style={styles.signIn}>
              <Text style={[styles.textSign, { color: '#fff' }]}>
                Sign in
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          {/*  */}

          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={[styles.signIn, {
              borderColor: '#333',
              borderWidth: 1,
              marginTop: 15
            }]}
          >
            <Text style={[styles.textSign, {
              color: 'gray'
            }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}



export default Signin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#efefef',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'sans-serif-condensed'
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});