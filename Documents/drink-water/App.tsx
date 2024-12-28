import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { Routes} from './scr/Routes/routes';

export default function App() {
  return (
    <NativeBaseProvider>
        <StatusBar style="auto" />
        <Routes/>    
    </NativeBaseProvider>
  );
}
