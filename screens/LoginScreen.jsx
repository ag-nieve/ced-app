import { View, Text, TextInput, TouchableOpacity, } from "react-native";


export default function LoginScreen(props){

    const { setIsLogin } = props;

    return  <View className={'flex flex-1 w-full justify-end items-center bg-white'}>
    <Text className={'text-center text-2xl font-bold mb-20'}>SHROOMIFY</Text>

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