import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({ icon, color, discription }) => {
   return (
      <TouchableOpacity className="bg-white p-[10px] space-y-2 items-center">
         <View className="w-[60px] h-[60px] rounded-full items-center justify-center"
            style={{ backgroundColor: color }}
         >
            {icon}
         </View>
         <Text className="text-center">{discription}</Text>
      </TouchableOpacity>
   )
}

export default CategoryCard