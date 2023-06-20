import React from "react";
import { Modal, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Feather from "react-native-vector-icons/Feather";
import Home from "../screens/home";
import Orders from "../screens/orders";
import Notifications from "../screens/notifications";
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Profile from "../screens/Profile";
// import { Ionicons } from '@expo/vector-icons';


const UserStack = () => {
   const Tab = createBottomTabNavigator();


   return (
      <NavigationContainer>
         <Tab.Navigator
            screenOptions={{
               headerShown: false,
               tabBarStyle: { backgroundColor: "white" },
               tabBarActiveTintColor: 'red',
               tabBarInactiveTintColor: 'gray',
            }}
            sceneContainerStyle={{ backgroundColor: "#F2F2F2" }}

         >
            <Tab.Screen
               name="Home"
               component={Home}
               options={{
                  tabBarShowLabel: false,
                  tabBarIcon: ({ focused }) => (
                     <Feather name="home" size={24} color="black" />
                  ),
               }}
            />
            <Tab.Screen
               name="Profile"
               component={Profile}
               options={{
                  tabBarShowLabel: false,
                  tabBarIcon: ({ focused }) => (
                     <Octicons name="person" size={24} color="black" />
                  ),
               }}
            />
            <Tab.Screen
               name="Orders"
               component={Orders}
               options={{
                  tabBarShowLabel: false,
                  tabBarIcon: ({ focused }) => (
                     <Ionicons name="ios-document-text-outline" size={24} color="black" />
                  ),
               }}
            />
            <Tab.Screen
               name="Notifications"
               component={Notifications}
               listeners={{
                  tabPress: (e) => {
                     e.preventDefault();
                  },
               }}
               options={{
                  tabBarShowLabel: false,
                  tabBarIcon: () => (
                     <Ionicons name="ios-notifications-outline" size={24} color="black" />
                  ),
               }}
            />
         </Tab.Navigator>
      </NavigationContainer>
   )
}

export default UserStack