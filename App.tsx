import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigator } from './src/navigation/root.ts';
import { SystemBars } from 'react-native-edge-to-edge';

function App() {
  return (
    <SafeAreaProvider>
      <SystemBars style={"dark"} />
      <Navigator />
    </SafeAreaProvider>
  );
}

export default App;
