import { View, Text, Image } from 'react-native'
import React from 'react'

const ServiceCard = ({ image, discription }) => {
   return (
      <View className="bg-white p-[10px] space-y-2">
         <Image
            source={image}
            className="w-[140px] h-[160px] object-cover"
         />
         <Text className="text-center">{discription}</Text>
      </View>
   )
}

export default ServiceCard