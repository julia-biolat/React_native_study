import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { Button } from '../components/Button';
import {Header} from '../components/Header/Header';
import { Spacer } from '../components/Spacer';
import { Typography } from '../components/Typography';
import { LottoNumberView } from '../components/LottoNumberView'
import { getRandomSixNumber } from '../utils/Utils';
import { useDispatch, useSelector } from 'react-redux';
import { createNewNumbers } from '../actions/lottoNumbers';


export const HomeScreen = (props)=>{
    
    const numbers = useSelector((state)=> state.numbers.currentNumber)

    const dispatch = useDispatch();


    const onPressGetNumber = useCallback (()=>{
        //const randomNumber = getRandomSixNumber();
        //setNumbers(randomNumbers);
        dispatch(createNewNumbers());
    }, []) 

    return (
        <View style={{flex:1}}>
            <Header>
                <Header.Title title='HOME'></Header.Title>
            </Header>

            <View style={{flex:1,flexDirection:'column', justifyContent:'center', paddingHorizontal:12}}>
                <View style={{
                    height:250, 
                    flexDirection:'column', 
                    paddingHorizontal:24, 
                    backgroundColor:'white', 
                    borderColor:'gray'}}>
                    

                    {/*bin일때는 안들어가게끔 함. 6개일때만 보여주도록 함*/}
                    {numbers.length === 6 && (
                        <LottoNumberView numbers={numbers}/>
                    )}
                
                </View>
                <Spacer space={20}/>

                <Button onPress={onPressGetNumber}>
                    <View style={{backgroundColor:'black', paddingVertical:24, alignItems:'center' }}>
                        <Typography color='white' fontSize={18}>로또 번호 추출하기</Typography>
                    </View>
                </Button>
            </View>
        </View>
    )
}