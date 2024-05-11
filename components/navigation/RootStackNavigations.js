import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { BootomTabNavigations } from "./ButtomTabNavigations";
import { ImageDetailScreen } from "../screen/ImageDetailScreen";

const Stack = createNativeStackNavigator();

export const RootStackNavigations = ()=>{
    return(

        <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name = 'BottomTab' component={BootomTabNavigations}></Stack.Screen>
            <Stack.Screen name = 'ImageDetail' component={ImageDetailScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}