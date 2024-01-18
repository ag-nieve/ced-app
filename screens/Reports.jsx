import {Dimensions, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Background from "../assets/background-light.png";
import {useEffect, useState} from "react";
import Logs from "./reports/Logs";
import MyCharts from "./reports/MyCharts";

export default function Reports(props){

    const { navigation } = props;
    const [isViewLogs, setIsViewLogs] = useState(false);

    return <View className={'flex flex-1'}>
        <Image source={Background} className={'-z-10 absolute w-full h-full'} />
        <View className={'h-1/5 justify-center py-4 px-4 rounded-b-[64px] bg-[#80aa92]'}>
            <TouchableOpacity onPress={()=> {
            //     codes here..
                navigation.navigate('Dashboard');
            }} className={''}>
                <Ionicons name="close" size={30} color="#fff" />
            </TouchableOpacity>
            <Text className={'text-4xl font-bold text-white text-center'}>Reports</Text>
        </View>
        {
            isViewLogs ? <Logs /> : <MyCharts />
        }
        <TouchableOpacity onPress={()=> {
            //     CODES HERE...
            setIsViewLogs(prev => !prev);
            }} className={'bg-[#80aa92] mt-3 py-4 rounded-full w-full'}>
                <Text className={'text-white text-center text-2xl'}>{isViewLogs ? 'View Charts': 'View Logs'}</Text>
            </TouchableOpacity>
    </View>
}
