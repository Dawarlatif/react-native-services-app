import React, { useLayoutEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LogoBlueSmall, } from '../../../assets'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const auth = getAuth();

const SignUp = () => {
   const navigation = useNavigation({ navigation })
   const [value, setValue] = React.useState({
      email: '',
      password: '',
      error: ''
   })

   async function signUp() {
      if (value.email === '' || value.password === '') {
         setValue({
            ...value,
            error: 'Email and password are mandatory.'
         })
         return;
      }

      try {
         await createUserWithEmailAndPassword(auth, value.email, value.password);
         navigation.navigate('Sign In');
      } catch (error) {
         setValue({
            ...value,
            error: error.message,
         })
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
               className="w-[100px] h-[100px] object-cover"
               source={LogoBlueSmall}
            />
         </View>

         <View className="mt-10 p-[20px] space-y-[10px]">
            <Text className="text-[32px] font-bold mt-[20px] ">
               Sign Up
            </Text>

            {/* <Text className="text-[15px] font-semibold ">
               First Name
            </Text>
            <TextInput
               className="w-full h-[50px] rounded-xl bg-gray-100 border-gray-300 border-[1px] p-[10px]"
               value={name1}
               placeholder="First Name"
               keyboardType="default"
               onChangeText={handleName1Change}
            />
            <Text className="text-[15px] font-semibold ">
               Last Name
            </Text>
            <TextInput
               className="w-full h-[50px] rounded-xl bg-gray-100 border-gray-300 border-[1px] p-[10px]"
               value={name2}
               placeholder="Last Name"
               keyboardType="default"
               onChangeText={handleName2Change}
            /> */}
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

         </View>
         <View className="w-full items-center justify-center mt-[60px] ">
            <TouchableOpacity className="w-[70%] h-[50px] items-center "
               onPress={signUp}
            >
               <View className="rounded-xl w-full h-full bg-[#6759FF] justify-center items-center">
                  <Text className="text-gray-200">Sign Up</Text>
               </View>
            </TouchableOpacity>


            <View className="flex-row space-x-1  mt-[10px]">
               <Text className="text-[15px] text-gray-400 font-semibold ">
                  Already have an account?
               </Text>
               <TouchableOpacity
                  onPress={() => navigation.navigate("login")}
               >
                  <Text className="text-[15px] text-[#6759FF] font-semibold ">
                     sign in
                  </Text>
               </TouchableOpacity>
            </View>
         </View>

      </SafeAreaView>
   )
}

export default SignUp