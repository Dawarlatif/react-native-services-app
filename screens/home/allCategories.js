import React from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CategoryCard from '../../components/categoryCard';

const categoryArray = [
   {
      color: "#FFBC99",
      icon: <MaterialCommunityIcons name="air-conditioner" size={24} color="black" />,
      description: "AC repair",
   },
   {
      color: "#CABDFF",
      icon: <Entypo name="flat-brush" size={24} color="black" />,
      description: "Beauty",
   },
   {
      color: "#B1E5FC",
      icon: <MaterialCommunityIcons name="fridge-alert-outline" size={24} color="black" />,
      description: "Appliance",
   },
   {
      color: "#B5EBCD",
      icon: <FontAwesome5 name="paint-roller" size={24} color="black" />,
      description: "Painting",
   },
   {
      color: "#FFD88D",
      icon: <MaterialIcons name="dry-cleaning" size={24} color="black" />,
      description: "Cleaning",
   },
   {
      color: "#CBEBA4",
      icon: <FontAwesome5 name="tools" size={24} color="black" />,
      description: "Plumbing",
   },
   {
      color: "#FB9B9B",
      icon: <MaterialCommunityIcons name="switch" size={24} color="black" />,
      description: "Electronics",
   },
   {
      color: "#F8B0ED",
      icon: <MaterialCommunityIcons name="truck-cargo-container" size={24} color="black" />,
      description: "Shifting",
   },
   {
      color: "#AFC6FF",
      icon: <Entypo name="scissors" size={24} color="black" />,
      description: "Men`s Salon",
   },
   // Add more objects as needed
];

const AllCategories = () => {
   return (
      <SafeAreaView className="bg-white flex-1 relative p-[15px] bg-[#F2F2F2] rounded-xl">
         <View className="w-full h-full rounded-xl bg-white  p-[10px] ">
            <Text className="font-Inter text-[24px] text-gray-500 text-[#172B4D] font-bold mt-[10px]">
               | All Categories
            </Text>
            <View className="flex-row flex-wrap mt-[10px]">
               {categoryArray.map((item) => {
                  return (
                     <View className="w-[120px] h-[120px]">
                        <CategoryCard
                           icon={item.icon}
                           color={item.color}
                           discription={item.description}
                        />
                     </View>
                  )
               })}
            </View>
         </View>
      </SafeAreaView>
   )
}

export default AllCategories