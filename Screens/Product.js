import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';

const Product = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder='Search...'
        value={search}
        onChangeText={(e) => setSearch(e)}
        style={{marginHorizontal: 8}}
      />
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  }
})