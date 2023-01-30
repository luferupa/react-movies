import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import MoviesContainer from './assets/src/components/containers/MoviesContainer';
import Header from './assets/src/components/layout/Header';

const App = () => {
  return (
    <NativeBaseProvider>
      <Header />
      <StatusBar style="auto" />
      <MoviesContainer />
    </NativeBaseProvider>
  );
}

export default App