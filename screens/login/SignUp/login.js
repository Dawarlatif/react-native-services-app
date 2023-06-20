import React, { useLayoutEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppleIcon, FacebookIcon, GoogleIcon, LogoBlue, OnBoardingIcon } from '../../../assets'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const Login = () => {
   const navigation = useNavigation()
   const [value, setValue] = React.useState({
      email: "",
      password: "",
      error: "",
   });

   async function signIn() {
      if (value.email === "" || value.password === "") {
         setValue({
            ...value,
            error: "Email and password are mandatory.",
         });
         return;
      }

      try {
         await signInWithEmailAndPassword(auth, value.email, value.password);
      } catch (error) {
         setValue({
            ...value,
            error: error.message,
         });
      }
   }

   useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false,
      })
   }, [])

   return (
      <SafeAreaView className="bg-white flex-1 relative">
         <View className="w-full items-center justify-center mt-10">
            <Image
               className="w-[200px] h-[150px] object-cover"
               source={LogoBlue}
            />
         </View>

         <View className="mt-10 p-[20px] space-y-[10px]">
            <Text className="text-[32px] font-bold mt-[20px] ">
               Sign In
            </Text>

            <Text className="text-[15px] font-semibold ">
               Email
            </Text>
            <TextInput
               className="w-full h-[50px] rounded-xl bg-gray-100 border-gray-300 border-[1px] p-[10px]"
               value={value.email}
               placeholder="Email"
               onChangeText={(text) => setValue({ ...value, email: text })}
            />
            <Text className="text-[15px] font-semibold ">
               Password
            </Text>
            <TextInput
               className="w-full h-[50px] rounded-xl bg-gray-100 border-gray-300 border-[1px] p-[10px]"
               value={value.password}
               placeholder="Password"
               onChangeText={(text) => setValue({ ...value, password: text })}
               secureTextEntry={true}
            />

            <TouchableOpacity className="w-full h-[50px] items-center "
               onPress={signIn}
            >
               <View className="rounded-xl w-full h-full bg-[#6759FF] justify-center items-center">
                  <Text className="text-gray-200">Sign In</Text>
               </View>
            </TouchableOpacity>
         </View>

         <View className="w-full items-center justify-center mt-[50px]">
            <Text>
               Sign in with
            </Text>
            <View className="w-[70%] flex-row items-center justify-around mt-[20px]">
               <TouchableOpacity className="rounded-2xl border-gray-300 border-[1px] w-[50px] h-[50px] justify-center items-center ">
                  <Image source={GoogleIcon} />
               </TouchableOpacity>
               <TouchableOpacity className="rounded-2xl border-gray-300 border-[1px] w-[50px] h-[50px] justify-center items-center ">
                  <Image source={FacebookIcon} />
               </TouchableOpacity>
               <TouchableOpacity className="rounded-2xl border-gray-300 border-[1px] w-[50px] h-[50px] justify-center items-center ">
                  <Image source={AppleIcon} />
               </TouchableOpacity>
            </View>
         </View>

         <View className="w-full items-center justify-center mt-[60px] ">
            <TouchableOpacity className="w-[70%] h-[50px] items-center "
               onPress={() => navigation.navigate("home")}
            >
               <View className="rounded-xl w-full h-full bg-[#6759FF] justify-center items-center">
                  <Text className="text-gray-200">Continue as Guest</Text>
               </View>
            </TouchableOpacity>
            <View className="flex-row space-x-1  mt-[10px]">
               <Text className="text-[15px] text-gray-400 font-semibold ">
                  Create a New account?
               </Text>
               <TouchableOpacity
                  onPress={() => navigation.navigate("signup")}
               >
                  <Text className="text-[15px] text-[#6759FF] font-semibold ">
                     sign up
                  </Text>
               </TouchableOpacity>
            </View>
         </View>

      </SafeAreaView>
   )
}

export default Login