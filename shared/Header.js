import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text1}>Welcome Ecommerce</Text>
      </View>
      <View>
        <Text style={styles.text2}>Syed Muhemin Ali</Text>
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal:10
  },
  text1: {
    fontSize: 20,
    fontFamily:'sans-serif-condensed',
    fontStyle:'italic'
  },
  text2:{
    fontFamily:'sans-serif-condensed',
    fontWeight:'bold',
    fontStyle:'italic'
  },
  container1:{
  
  }

})