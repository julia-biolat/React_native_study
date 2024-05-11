import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import { ImageListScreen } from "../screen/ImageListScreen";
import { FavoriteImageListScreen } from "../screen/FavoriteImageListScreen";
import { TabIcon } from "../TabIcon";

const Tabs = createBottomTabNavigator();

export const BootomTabNavigations = () =>{
    return(
        <Tabs.Navigator
            screenOptions={({route})=>({
                headerShown:false,
                tabBarIcon: ({focused, color,size})=>{

                    const getIconName = () =>{
                        if(route.name == 'ImgaeList'){
                            return 'home'
                        }
                        if(route.name === 'FavoriteImage')
                            return 'stat'
                    }

                    const iconName = getIconName();

                    return(
                        <TabIcon iconName = {iconName} iconColor={color}/>
                    )
                }
            })}>
            <Tabs.Screen name='ImageList' component={ImageListScreen}></Tabs.Screen>
            <Tabs.Screen name='FavoriteImageList' component={FavoriteImageListScreen}></Tabs.Screen>
        </Tabs.Navigator>
    )
}

