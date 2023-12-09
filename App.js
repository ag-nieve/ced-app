import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Input from './components/Input';
import { useState } from 'react';
import DashboardScreen from './screens/Dashboard';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Reports from "./screens/Reports";

const Stack = createNativeStackNavigator();
export default function App() {

  const [isLogin, setIsLogin] = useState(false);


  return (
      <NavigationContainer>

        <View className={'flex flex-1'}>
        <StatusBar style="auto" />
        {isLogin ?
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Dashboard" component={DashboardScreen} />
                <Stack.Screen name="Reports" component={Reports} />
            </Stack.Navigator> :  <LoginScreen setIsLogin={setIsLogin} />}
        </View>
      </NavigationContainer>
  );
}
