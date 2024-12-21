import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { Dashboard } from './scr/screens/Dashboard';

export default function App() {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <Text>Open Yasmin ffffffup App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Dashboard/>
    </View>
    </NativeBaseProvider>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
