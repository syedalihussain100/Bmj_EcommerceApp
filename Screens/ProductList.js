import { StyleSheet, Text, View, Dimensions, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

var { height } = Dimensions.get('window');
const ProductList = (props) => {
    const data = props.route.params.Option.obj
    const navigaton = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{data.name}</Text>
            <View style={{ marginTop: 20 }}>
                <Button title='Go Back' onPress={() => navigaton.goBack()} />
            </View>
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})