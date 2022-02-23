import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import Swiper from 'react-native-swiper';

var { width, height } = Dimensions.get('window');
const Banner = () => {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        setBanner([
            `https://icms-image.slatic.net/images/ims-web/d2497ba5-5e2a-4008-afa9-b01a8ec979e4.jpg`,
            `https://icms-image.slatic.net/images/ims-web/58551082-f6f8-4265-be50-57abc5277483.jpg_1200x1200.jpg`,
            `https://icms-image.slatic.net/images/ims-web/e64cbd78-6d93-43e9-9bc8-9bc1a622e4f1.png`,
            `https://icms-image.slatic.net/images/ims-web/c9ddf314-e0e2-450d-a148-b2b5f32d2747.jpg`
        ])
        return () => {
            setBanner([]);
        }
    }, [])
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.swiper}>
                    <Swiper
                        style={{ height: width / 2 - 10 }}
                        showButtons={false}
                        autoplay={true}
                        autoplayTimeout={2}
                    >
                        {banner.map((item) => {
                            return (
                                <Image
                                    key={item}
                                    style={styles.imageBanner}
                                    resizeMode="contain"
                                    source={{ uri: item }}
                                />
                            );
                        })}
                    </Swiper>
                    <View style={{ height: 10 }}></View>
                </View>
                <Text>Some data here</Text>
            </View>
        </ScrollView>
    );
};

export default Banner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
     backgroundColor: "lightgray",
    },
    swiper: {
        width: width,
        alignItems: "center",
        marginTop: 10,
    },
    imageBanner: {
        height: height / 4,
        width: width,
        borderRadius: 10,
        //   marginHorizontal: 20,
    },
});























// import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import Swiper from 'react-native-swiper';

// var { height, width } = Dimensions.get('window');

// const Banner = () => {
//     const [banner, setBanner] = useState([]);

//     useEffect(() => {
//         setBanner([
//             `https://icms-image.slatic.net/images/ims-web/d2497ba5-5e2a-4008-afa9-b01a8ec979e4.jpg`,
//             `https://icms-image.slatic.net/images/ims-web/58551082-f6f8-4265-be50-57abc5277483.jpg_1200x1200.jpg`,
//             `https://icms-image.slatic.net/images/ims-web/e64cbd78-6d93-43e9-9bc8-9bc1a622e4f1.png`,
//             `https://icms-image.slatic.net/images/ims-web/c9ddf314-e0e2-450d-a148-b2b5f32d2747.jpg`
//         ])
//         return (() => {
//             setBanner([])
//         })
//     }, [])
//     return (
//         <ScrollView>
//             <View style={styles.container}>
//                 <View style={styles.swipper}>
//                     <Swiper
//                         showButtons={false}
//                         autoplay={true}
//                         autoplayTimeout={2}
//                     >
//                         {banner.map((item, i) => {
//                             return (
//                                 <Image
//                                     key={i}
//                                     resizeMode='contain'
//                                     source={{ uri: item }}
//                                     style={styles.imageContainer}
//                                 />
//                             )
//                         })}

//                     </Swiper>
//                 </View>
//             </View>
//         </ScrollView>
//     )
// }

// export default Banner

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#D3D3D3'
//     },
//     swipper: {
//         alignItems: 'center',
//         marginTop: 5,
//         width: width
//     },
//     imageContainer: {
//         width: width,
//         height: height / 4,
//         borderRadius: 5
//     }
// })