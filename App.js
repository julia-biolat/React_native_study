import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Typography } from './src/components/Typography';
import { LocalImage } from './src/components/LocalImage';
import { RemoteImage } from './src/components/RemoteImage';
import { Icon } from './src/components/Icons';
import { Badge } from './src/components/Badge';
import { Button } from 'react-native';
import { Divider } from './src/components/Divider';
import { Spacer } from './src/components/Spacer';
import { TabIcon } from './src/components/Tabicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HeaderWithoutCompound } from './src/components/HeaderWithoutCompound';
import { Header } from 'react-native/Libraries/NewAppScreen';



export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{flex:1, }}>
        {/*<HeaderWithoutCompound title='HEADER'/>*/}
      <Header>
        <Header.Group>
          <Header.Icon iconName='arrow-back'></Header.Icon>
          <Header.Title title='HEADER'></Header.Title>
        </Header.Group>

        <Header.Icon iconName='close'></Header.Icon>
      </Header>
      </View>
    </SafeAreaProvider>
    
  );
}


/*
export default function App() {
  return (
    <View style={styles.container}>

        <Typography color='red' fontSize={20}> 
          이것은 
          <Typography color='orange' fontSize={'ASDS'}> 
          텍스트
          </Typography>
          입니다
        </Typography>
        <Spacer sapce={100}/>
        <LocalImage localAsset={require('./assets/favicon.png')}
        width = {50} height = {50}/>

        <RemoteImage
          url={'https://www.hammermarketing.com/wp-content/uploads/sites/2/2020/11/react-native_large.jpg'}
          width={200}
          height={100}
        />
        <Icon name='home' size={40} color='green'/>
      <Spacer sapce={100}/>
      <Divider>
        <View style={{flexDirection:'row'}}>
        <Badge fontSize={10}>
        <Typography> BAGE</Typography>
       </Badge>

       <Badge fontSize={5}>
        <Icon name = 'home' size = {50} color='black'/>
       </Badge>
        </View>
       </Divider>

    </View>
  );
}

--------------------------
1. Spacer가 안됨..
2. 버튼 오류남..

<View style={{flexDirection:'row', margin:32}}>
          <Button onPress={() => {
            console.log('PRESSED BUTTON')
          }}>
            <Typography>
              TextButton
            </Typography>

          </Button>
        
          <Button onPress={() => {
            console.log('PRESSED ICON BUTTON')
          }}>
            <Icon name = 'home' size={50} color='green'></Icon>
          </Button>
        </View>*/

