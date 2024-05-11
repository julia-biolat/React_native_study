import React from "react";
import { View } from "react-native-web";
import { Typography } from "../Typography";


export const FavoriteImageListScreen = (props)=>{
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'
        }}>
            <Typography>
                Favorite Image
            </Typography>
        </View>
    )
}