import React from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { AcRepair, Cleaning1, Cleaning2 } from '../../assets';
import ListCardVertical from '../../components/listCardVertical';

const servicesArray = [
   {
      id: 1,
      image: AcRepair,
      rating: 4.5,
      totalSold: 100,
      title: "Service 1",
      price: 9.99
   },
   {
      id: 2,
      image: AcRepair,
      rating: 3.8,
      totalSold: 50,
      title: "Service 2",
      price: 19.99
   },
   {
      id: 3,
      image: AcRepair,
      rating: 4.2,
      totalSold: 200,
      title: "Service 3",
      price: 14.99
   },
   {
      id: 4,
      image: AcRepair,
      rating: 4.7,
      totalSold: 75,
      title: "Service 4",
      price: 24.99
   },
   {
      id: 5,
      image: AcRepair,
      rating: 4.0,
      totalSold: 120,
      title: "Service 5",
      price: 12.99
   },
   {
      id: 6,
      image: AcRepair,
      rating: 4.9,
      totalSold: 90,
      title: "Service 6",
      price: 29.99
   },
   {
      id: 7,
      image: AcRepair,
      rating: 4.6,
      totalSold: 150,
      title: "Service 7",
      price: 17.99
   },
   {
      id: 8,
      image: AcRepair,
      rating: 3.5,
      totalSold: 80,
      title: "Service 8",
      price: 21.99
   },
   {
      id: 9,
      image: AcRepair,
      rating: 4.3,
      totalSold: 110,
      title: "Service 9",
      price: 15.99
   },
   {
      id: 10,
      image: AcRepair,
      rating: 4.8,
      totalSold: 180,
      title: "Service 10",
      price: 34.99
   }
   // Add more objects as needed
];


const Services = () => {
   return (
      <SafeAreaView className="bg-white flex-1 relative p-[15px] bg-[#F2F2F2] rounded-xl">
         <View className="w-full h-full rounded-xl bg-white  p-[10px] ">
            <View className="flex-row justify-between items-center">
               <Text className="font-Inter text-[24px] text-gray-500 text-[#172B4D] font-bold mt-[10px]">
                  | Appliance Repair
               </Text>
               <TouchableOpacity className="rounded-xl bg-gray-100 w-[16%] h-[50px] items-center justify-center drop-shadow-2xl">
                  <AntDesign name="menu-fold" size={24} color="#6759FF" />
               </TouchableOpacity>
            </View>
            <ScrollView className="flex-row flex-wrap mt-[10px] w-[100%]">
               <FlatList
                  data={servicesArray}
                  renderItem={({ item }) => {
                     return (
                        <ListCardVertical
                           key={item.id}
                           image={item.image}
                           rating={item.rating}
                           totalSold={item.totalSold}
                           title={item.title}
                           price={item.price}
                        />
                     )
                  }}
                  keyExtractor={item => item.color}
               />
               {/* {servicesArray.map((item) => {

                  return (
                     <ListCardVertical
                        key={item.id}
                        image={item.image}
                        rating={item.rating}
                        totalSold={item.totalSold}
                        title={item.title}
                        price={item.price}
                     />
                  )
               })} */}
            </ScrollView>
         </View>
      </SafeAreaView>
   )
}

export default Services