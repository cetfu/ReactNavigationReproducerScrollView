import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigator } from './src/navigation/root.ts';
import { StatusBar } from 'react-native';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"dark-content"} />
      <Navigator />
    </SafeAreaProvider>
  );
}

export default App;
