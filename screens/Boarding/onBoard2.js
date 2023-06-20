import React, { useLayoutEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OnBoardingIcon, OnboardingImage2, } from '../../assets'

const OnBoard2 = () => {
   const navigation = useNavigation()

   useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false,
      })
   }, [])
   return (
      <SafeAreaView className="bg-white flex-1 relative">
         <View className="w-[270px] h-[270px] absolute bg-[#FFCACA] rounded-full -top-36 -left-40" ></View>
         <TouchableOpacity className="justify-center items-center w-20 h-10 rounded-2xl bg-[#B5EBCD] self-end mr-5"
            onPress={() => navigation.navigate("login")}
         >
            <Text>Skip</Text>
         </TouchableOpacity>

         <View className="w-full items-center justify-center">
            <Image
               className="w-full h-[500px] object-cover"
               source={OnboardingImage2}
            />
         </View>

         <View className=" items-center space-y-[12px] ">
            <Text className="font-Inter justify-center items-center text-[34px] text-center px-12">Beauty parlour at your home</Text>
            <Text className="font-Inter justify-center items-center text-[15px] text-gray-500 text-center px-5"> Lorem ipsum is a placeholder text commonly used to demonstrate the visual.</Text>
         </View>

         <TouchableOpacity className="w-full items-center absolute bottom-10"
            onPress={() => navigation.navigate("onboarding3")}
         >
            <Image
               source={OnBoardingIcon}
            />
         </TouchableOpacity>

      </SafeAreaView>
   )
}

export default OnBoard2