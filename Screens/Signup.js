import { StyleSheet, Text, View, ToastAndroid, TouchableOpacity, Platform, TextInput, StatusBar } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';
import Materialicon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { register } from '../Redux/Actions/actions';
import { db, auth } from '../Config'


const Signin = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    Check_textInputChange: false,
    securityTextEntry: true
  })



  const signupform = () => {
    auth.createUserWithEmailAndPassword(data.email, data.password).then((res) => {
      navigation.navigate('Main')

      dispatch(register({
        name: data.name,
        email: res.user.email,
        uid: res.user.uid
      }))
      db.collection('users').add({
        name: data.name,
        email: data.email,
        date: new Date().toLocaleTimeString(),
        admin: false
      })
      res.user.sendEmailVerification()
      ToastAndroid.show('SignUn Successfully!', ToastAndroid.TOP)
    }).catch((err) => {
      ToastAndroid.show(err.message, ToastAndroid.TOP)
    })
  }


  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        name: val,
        Check_textInputChange: true
      })
    } else {
      setData({
        ...data,
        email: val,
        name: val,
        Check_textInputChange: false
      })
    }
  }

  const textInput = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        name: val,
        Check_text: true
      })
    } else {
      setData({
        ...data,
        name: val,
        Check_text: false
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
        <Text style={styles.text_header}>Register Now</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Name</Text>
        <View style={styles.action}>
          <Materialicon name='user' size={20} color='#05375a' />
          <TextInput placeholder='Enter Your Name...' style={styles.textInput} onChangeText={(e) => textInput(e)} />
          {data.Check_text ?
            <Animatable.View animation='bounceIn'>
              <Feather name='user-check' color='#333' size={20} />
            </Animatable.View>
            : null
          }
        </View>
        {/*  */}
        <Text style={[styles.text_footer, { marginTop: 10 }]}>Email</Text>
        <View style={styles.action}>
          <Icon1 name='email' size={20} color='#05375a' />
          <TextInput placeholder='Enter Your Email...' style={styles.textInput} autoCapitalize='none' onChangeText={(e) => textInputChange(e)} />
          {data.Check_textInputChange ?
            <Animatable.View animation='bounceIn'>
              <Feather name='check-circle' color='#333' size={20} />
            </Animatable.View>
            : null
          }
        </View>
        {/*  */}
        <Text style={[styles.text_footer, { marginTop: 10 }]}>Password</Text>
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
          <TouchableOpacity style={styles.signIn} onPress={signupform}>
            <LinearGradient colors={['lightgray', '#333']} style={styles.signIn}>
              <Text style={[styles.textSign, { color: '#fff' }]}>
                Signup
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          {/*  */}

          <TouchableOpacity
            onPress={() => navigation.navigate('Signin')}
            style={[styles.signIn, {
              borderColor: '#333',
              borderWidth: 1,
              marginTop: 15
            }]}
          >
            <Text style={[styles.textSign, {
              color: 'gray'
            }]}>Sign In</Text>
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