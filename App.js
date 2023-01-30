import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import MoviesContainer from './src/components/containers/MoviesContainer';
import Header from './src/components/layout/Header';
import TopTabsNavigator from './src/components/navigators/TopTabsNavigator';

const App = () => {
  return (
    <NativeBaseProvider>
      <Header />
      {/*<MoviesContainer />*/}
      <TopTabsNavigator />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}

export default App