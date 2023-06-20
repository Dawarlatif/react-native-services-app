import { View, Text, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Cleaning1 } from '../assets';



const ListCardVertical = ({ image, rating, totalSold, title, price }) => {
   return (
      <View className="flex-row w-full justify-between bg-white p-[10px] ">
         <View className="flex-row ">
            <Image
               source={image}
               className="w-[100px] h-[120px] object-cover"
            />
            <View className="ml-5 space-y-2">
               <View className="flex-row ">
                  <AntDesign name="star" size={18} color="#FAC153" />
                  <Text>{rating} &nbsp;</Text>
                  <Text className="color-[#6F767E]">({totalSold})</Text>
               </View>
               <Text>{title}</Text>
               <Text>Starts From</Text>
               <View className="rounded-2xl bg-[#B5E4CA] items-center justify-center p-1">
                  <Text>${price}</Text>
               </View>
            </View>
         </View>

         {/* <Entypo name="dots-three-horizontal" size={24} color="#6F767E"
            className=""
         /> */}
      </View>
   )
}

export default ListCardVertical