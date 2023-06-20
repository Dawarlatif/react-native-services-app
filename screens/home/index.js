import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './homeScreen';
import AllCategories from './allCategories';
import Services from './servicesList';
import Takeimg from '../../components/takeImg';


const HomeStack = createNativeStackNavigator();

const Home = () => {
   const navigation = useNavigation()

   useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false,
      })
   }, [])

   return (
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
         <HomeStack.Screen name="Home" component={HomeScreen} />
         <HomeStack.Screen name="AllCategories" component={AllCategories} />
         <HomeStack.Screen name="Services" component={Services} />
         <HomeStack.Screen name="TakeImage" component={Takeimg} />
      </HomeStack.Navigator>
   )
}

export default Home

