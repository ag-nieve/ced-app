import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Input from './components/Input';
import { useState } from 'react';
import DashboardScreen from './screens/Dashboard';
import LoginScreen from './screens/LoginScreen';

export default function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <View className={'flex flex-1'}>
    <StatusBar style="auto" />
    {isLogin ? <DashboardScreen /> : <LoginScreen setIsLogin={setIsLogin} />}
    </View>
  );
}
