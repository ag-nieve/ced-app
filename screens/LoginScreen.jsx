import {View, Text, TextInput, TouchableOpacity, Image,} from "react-native";
import Background from '../assets/background.png';
import Logo from '../assets/logo-white-01.png';

export default function LoginScreen(props){

    const { setIsLogin } = props;

    return  <View className={`flex flex-1 w-full justify-end items-center relative`}>
                <Image source={Background} className={'-z-10 absolute w-full h-full'} />
                <Image source={Logo} className={'w-40 h-40 mb-10'} />
                <Text className={'text-center text-4xl font-bold mb-20 text-white'}>SHROOMIFY</Text>

                <View className={'bg-white shadow-lg w-full py-10 px-5 border rounded-3xl border-gray-200'}>
                <Text className={'text-[#80aa92] text-2xl font-bold'}>Welcome</Text>
                <Text className={'mb-10'}>Please login your information</Text>
                  <TextInput className={'border rounded-lg border-gray-200 py-2 px-4 mb-5'} placeholder='Enter Email Address:' />
                  <TextInput className={'border rounded-lg border-gray-200 py-2 px-4 mb-5'} placeholder='Enter Password:' />
                  <TouchableOpacity onPress={()=> {
                    setIsLogin(true);
                  }} className={'bg-[#80aa92] py-4 rounded-full'}>
                    <Text className={'text-center text-white'}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
}
