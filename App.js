import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CounterScreen } from './src/screens/CounterScreen';
import { Provider as StoreProvider} from 'react-redux';
import store from './src/store/store';
import { CounterScreen } from './src/screens/CounterScreen';
import { RecoilRoot } from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import { RootNavigation } from './src/navigations/RootNavigations';



export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootNavigation/>
      </Provider>
    </NavigationContainer>
  );
}

/*
export default function App() {
  const counterState = useState(0);

  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <View style={styles.container}>
          <CounterScreen />
          <StatusBar style="auto" />
        </View>
      </RecoilRoot>
    </SafeAreaProvider>
  );
}

/////다른것
export const CounterContext = createContext();


export default function App() {
  const counterState = useState(0);

  return (
    <SafeAreaProvider>
      <CounterContext.Provider value={counterState}>
        <View style={styles.container}>
          <CounterScreen />
          <StatusBar style="auto" />
        </View>
      </CounterContext.Provider>
    </SafeAreaProvider>
  );
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
