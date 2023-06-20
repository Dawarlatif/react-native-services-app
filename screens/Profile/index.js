import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons';
import { useAuth } from '../../hooks/useAuth';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from "react-redux";
import { changeImage } from '../../redux/reducer/userDataSlice';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
   const { user } = useAuth();
   const [image, setImage] = useState(null);
   const dispatch = useDispatch();
   const navigation = useNavigation();

   const changeProfile = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
      });
      console.log(result);
      if (!result.canceled) {
         console.log(result.assets[0].uri);
         // dispatch(changeImage(result.assets[0].uri.toString()));
         setImage(result.assets[0].uri);
      }
   };

   return (
      <SafeAreaView className="bg-white flex-1 relative p-[15px] bg-[#F2F2F2] rounded-xl">
         <View className="w-full  rounded-xl bg-white  p-[10px] ">
            <Text className="font-Inter text-[24px] text-gray-500 text-[#172B4D] font-bold mt-[10px]">
               | Profile
            </Text>
            <View className="flex-row justify-center items-center">
               <View>
                  <TouchableOpacity className=""
                     onPress={changeProfile}
                  >
                     <Entypo name="circle-with-plus" size={35} color="blue" />
                  </TouchableOpacity>
                  <TouchableOpacity className=""
                     onPress={() => navigation.navigate('TakeImage')}
                  >
                     <AntDesign name="camera" size={35} color="black" />
                  </TouchableOpacity>
               </View>
               <View className=" w-[200px] h-[200px] rounded-full justify-between items-center bg-gray-50 self-center">
                  <Image source={{ uri: image }} className="w-[200px] h-[200px] rounded-full" />
               </View>
            </View>

            <Text className="self-center ">{user?.email}&nbsp;</Text>

         </View>
      </SafeAreaView>
   )
}

export default Profile