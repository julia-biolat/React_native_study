import React from 'react-native';
import {View} from 'react-native';
import { Typography } from '../Typography';
import { Header} from '../Header/Header';
import { FlatList } from 'react-native-web';
import { IMAGE_LIST } from '../constants';
import { PhotoListitem } from '../PhotoListitem';

export const ImageListScreen = (props)=>{
    return(
        <View style={{flex:1}}>
            <Header>
                <Header.Group>
                    <Headers.Title title='IMAGE LIST'/>
                </Header.Group>
            </Header>
            <FlatList style = {{flex:1}}
                data = {IMAGE_LIST}
                renderItem={({item})=>{
                    return(
                        <PhotoListitem url={item}/>
                    )
                }}
            />
        </View>
    )
}
