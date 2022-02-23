import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreen from './Screens/OnBoardScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Route from './Routes/Route'
const Stack = createNativeStackNavigator()
import { Provider } from 'react-redux'
import Store from './Redux/Store'


const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);


  useEffect(() => {
    const appData = AsyncStorage.getItem('isFirstLaunch');
    if (appData == null) {
      setIsFirstLaunch(true);
      AsyncStorage.setItem('isFirstLaunch', "false")
    } else {
      setIsFirstLaunch(false)
    }
  }, [])

  return (
    isFirstLaunch != null && (
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator>
            {isFirstLaunch && <Stack.Screen name='OnBoardScreen' component={OnBoardScreen} options={{ headerShown: false }} />}

            <Stack.Group>
              <Stack.Screen name='Route' component={Route} options={{ headerShown: false }} />
            </Stack.Group>

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )

  )
}

export default App
























// import React from 'react'
// import { Provider as PaperProvider } from 'react-native-paper';
// import Card from './Screens/Card';
// import Header from './shared/Header'
// import Banner from './shared/Banner'
// import Product from './Screens/Product';
// import ProductList from './Screens/ProductList';

// function App() {
//   return (
//     <PaperProvider>
//       <Header />
//       <Product />
//       <Banner />
//       <ProductList/>
//     </PaperProvider>
//   );
// }



// export default App