import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Location from 'expo-location';
import * as Contacts from 'expo-contacts';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ServiceCard from './../../components/serviceCard';
import CategoryCard from '../../components/categoryCard';
import { useAuth } from './../../hooks/useAuth';
import { Cleaning1, Cleaning2 } from '../../assets';

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

const servicesArray = [
   {
      image: Cleaning1,
      description: 'Carpet Cleaning',
   },
   {
      image: Cleaning2,
      description: 'Home Cleaning',
   },
   {
      image: Cleaning2,
      description: 'kitchen Cleaning',
   },
   {
      image: Cleaning2,
      description: 'Laundary Cleaning',
   },
   {
      image: Cleaning2,
      description: 'Garden Cleaning',
   },
   // Add more objects as needed
];


const HomeScreen = ({ navigation }) => {
   const { user } = useAuth();
   const [location, setLocation] = useState(null);
   const [errorMsg, setErrorMsg] = useState(null);

   useEffect(() => {
      (async () => {

         let { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
         }

         let location = await Location.getCurrentPositionAsync({});
         setLocation(location);
      })();
   }, []);

   let text = 'Waiting..';
   if (errorMsg) {
      text = errorMsg;
   } else if (location) {
      text = JSON.stringify(location);
   }
   // console.log('status: ', text)
   // console.log('location: ', location)

   useEffect(() => {
      (async () => {
         const { status } = await Contacts.requestPermissionsAsync();
         if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
               fields: [Contacts.Fields.Emails],
            });

            if (data.length > 0) {
               const contact = data[5];
               console.log(contact);
            }
         }
      })();
   }, []);




   return (
      <SafeAreaView className="bg-white flex-1 relative p-[20px] bg-[#F2F2F2] space-y-2">

         <View className="w-full rounded-xl bg-white p-[12px] space-y-2">
            <View className="flex-row items-center ">
               <Text className="font-Inter text-[15px] text-gray-500 ">
                  Hellow! {user?.email}&nbsp;
               </Text>
               <MaterialCommunityIcons name="hand-wave" size={24} color="#FAC153" />
            </View>
            <Text className="font-Inter text-[34px] text-bold">
               What are you looking for today
            </Text>

            <View className="flex-row items-center justify-between">
               <TextInput className="p-[10px] rounded-xl bg-gray-100 w-[80%] h-[50px] items-center justify-center"
                  placeholder='Search'
               />
               <TouchableOpacity className="rounded-xl bg-[#6759FF] w-[16%] h-[50px] items-center justify-center">
                  <Feather name="search" size={24} color="#F2F2F2" />
               </TouchableOpacity>
            </View>

         </View>

         <ScrollView className="space-y-2">

            <View className="w-full rounded-xl bg-white py-[12px] px-[5px]">
               <View className="flex-row justify-between p-[16px]">
                  <Text className="font-Inter text-[18px] text-[#172B4D]">
                     | Categories
                  </Text>
                  <TouchableOpacity className="rounded-full border border-gray-300 py-[5px] px-[10px]"
                     onPress={() => navigation.navigate('AllCategories')}
                  >
                     <Text className="font-Inter text-[15px] text-gray-500 ">
                        See All
                     </Text>
                  </TouchableOpacity>
               </View>
               <FlatList
                  horizontal
                  data={categoryArray}
                  renderItem={({ item }) => {
                     return (
                        <CategoryCard
                           icon={item.icon}
                           color={item.color}
                           discription={item.description}
                        />
                     )
                  }}
                  keyExtractor={item => item.color}
               />
            </View>

            <View className="w-full rounded-xl bg-white py-[12px] px-[5px]">
               <View className="flex-row justify-between p-[16px]">
                  <Text className="font-Inter text-[18px] text-[#172B4D]">
                     | Cleaning Services
                  </Text>
                  <TouchableOpacity className="rounded-full border border-gray-300 py-[5px] px-[10px]"
                     onPress={() => navigation.navigate('Services')}
                  >
                     <Text className="font-Inter text-[15px] text-gray-500 ">
                        See All
                     </Text>
                  </TouchableOpacity>
               </View>

               <FlatList
                  horizontal
                  data={servicesArray}
                  renderItem={({ item }) => {
                     return (
                        <ServiceCard
                           image={item.image}
                           discription={item.description}
                        />
                     )
                  }}
                  keyExtractor={item => item.color}
               />
            </View>

         </ScrollView>

      </SafeAreaView>
   )
}

export default HomeScreen