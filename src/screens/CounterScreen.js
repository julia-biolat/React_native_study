import React, { useCallback, useState } from 'react';
import {View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, deleteCount } from '../actions/counter';
import { Button } from '../components/Button';
import {Header} from '../components/Header/Header';
import { Icon } from '../components/Icons';
import { Spacer } from '../components/Spacer';
import { Typography } from '../components/Typography';
import { counterState } from '../states/counter';
import { useRecoilValue } from 'recoil';


// Context API 사용
const CounterTitle = (props)=>{
    //const [count] = useContext(CounterContext);

    const count = useRecoilValue(counterState);

    return (
        <Typography fontSize={20}>
            {`${count}개`}
        </Typography>
    )
}
const counterMultiplier = ()=>{
    const result = useRecoilValue(counterMultiplier);

    return (
        <Typography fontSize={20}>
            {`*5 = ${result}`}
        </Typography>
    )
}

export const CounterScreen = ()=>{
    
    /* Redux 사용
    const [value, setValue] = useState(0); //useDispatch를 불러옴으로써 필요없어짐.
    const dispatch = useDispatch(); //hook을 불러옴

    const count = useSelector((state)=> state.count.count)

    const onPressPlus = useCallback(()=>{
        // setValue((value)=> value+1)
        dispatch(addCount());
    }, [])

    const onPressMinus = useCallback(()=>{
        // setValue((value)=> value-1)
        dispatch(deleteCount());
    }, [])*/

    //Context API 사용
    //const [count, setCount] = useContext(CounterContext);
    //const [value, setValue] = useState(0);

    const [count, setCount] = useRecoilState(counterState);
    const onPressPlus = useCallback(()=>{
        //setCount((value)=> value+1)
        setCount((value)=> value+1)
    }, [])
    const onPressMinus = useCallback(()=>{
        //setCount((value)=> value-1)
        setCount((value)=> value-1)
    }, [])

    return (
        <View style={{flex:1}}>
            <Header>
                <Header.Title title='COUNTER' />
            </Header>

            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>

                    <Button paddingHorizontal={4} paddingVertical={4} onPress={onPressMinus}>
                        <Icon name='remove' size={20}/>
                    </Button>


                    <Spacer horizontal space={20}/> {/*여백 주기*/}
                    {/* Redux사용
                    <Typography fontSize={20}>
                        {`${count}개`}
                    </Typography>
                    */}

                    {/*Context API 사용*/}
                    <CounterTitle/>
                    <Spacer horizontal space={20}/>


                    <Button paddingHorizontal={4} paddingVertical={4} onPress={onPressPlus}>
                        <Icon name='add' size={20}/>
                    </Button>
                </View>
                <counterMultiplier/>
                
            </View>
        </View>
    )
}