import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Dashboard } from './scr/screens/Dashboard';


export default function App() {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Dashboard/>
    </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 72,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


