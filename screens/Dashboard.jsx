import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import ReportsModal from "./ReportsModal";
import { useEffect, useState } from "react";


export default function DashboardScreen(){

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [temperatureCurrentValue, setTemperatureCurrentValue] = useState(22);
    const [humidityCurrentValue, setHumidityCurrentValue] = useState(22);
    const [waterLevelCurrentValue, setWaterLevelCurrentValue] = useState(22);


    useEffect(()=> {
        const interval = setInterval(function() {

            (async ()=> {
                const base_url = "https://ced-app-d69aa-default-rtdb.asia-southeast1.firebasedatabase.app/";
                const response = await fetch(`${base_url}plant_sensors.json`);
                
                const result = await response.json();
                setTemperatureCurrentValue(result[Object.keys(result)[Object.keys(result).length - 1]].temperature);
                setHumidityCurrentValue(result[Object.keys(result)[Object.keys(result).length - 1]].humidity);
                setWaterLevelCurrentValue(result[Object.keys(result)[Object.keys(result).length - 1]].waterlevel);
            })();

            console.log("eyy!");
        }, 5000);

        
    }, []);

    return (
        <View className={'flex flex-1'}>
        <ReportsModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} />
            <View className={'h-1/5 justify-center py-4 px-4 rounded-b-[64px] bg-[#80aa92]'}>
                <Text className={'text-4xl font-bold text-white text-center'}>Dashboard</Text>
            </View>
            <View className={'px-5'}>

            {/* Temperature */}
            <LinearGradient className={' mt-5 flex flex-row items-center justify-between rounded-2xl p-5'} colors={['#f66f04', '#fda11a']} >
                <View className={''}>
                    <Text className={'text-2xl text-white'}>Temperature</Text>
                        <Text className={'text-5xl text-white mt-3'}>{temperatureCurrentValue} °C</Text>
                    </View>
                <View>
                    <Ionicons name="thermometer-outline" size={90} color="#fff" />
                </View>
            </LinearGradient>

            {/* Humidity */}
            <LinearGradient className={' mt-5 flex flex-row items-center justify-between rounded-2xl p-5'} colors={['#20629c', '#71bff0']} >
                <View className={''}>
                    <Text className={'text-2xl text-white'}>Humidity</Text>
                        <Text className={'text-5xl text-white mt-3'}>{humidityCurrentValue}% rH</Text>
                    </View>
                <View>
                    <Ionicons name="water-outline" size={90} color="#fff" />
                </View>
            </LinearGradient>

            {/* Water Level */}
            <LinearGradient className={' mt-5 flex flex-row items-center justify-between rounded-2xl p-5'} colors={['#1553a6', '#327acf']} >
                <View className={''}>
                    <Text className={'text-2xl text-white'}>Water Level</Text>
                        <Text className={'text-5xl text-white mt-3'}>{waterLevelCurrentValue > 50 ? 'Good' : 'Low Level'}</Text>
                    </View>
                <View>
                    <FontAwesome5 name="water" size={70} color="#fff" />
                </View>
            </LinearGradient> 

            <TouchableOpacity onPress={()=> {
                setIsModalVisible(true);
            }} className={'bg-[#80aa92] mt-5 py-4 rounded-full'}>
                <Text className={'text-white text-center text-2xl'}>Reports</Text>
            </TouchableOpacity>

            </View>

        </View>
        
    )
}