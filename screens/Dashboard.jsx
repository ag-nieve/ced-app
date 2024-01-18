import {Image, Text, TouchableOpacity, View} from "react-native";
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import LogsModal from "./LogsModal";
import { useEffect, useState } from "react";
import Background from "../assets/background-light.png";
import WarningPopup from "./WarningPopup";


export default function DashboardScreen(props){

    const { navigation } = props;

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [temperatureCurrentValue, setTemperatureCurrentValue] = useState(22);
    const [humidityCurrentValue, setHumidityCurrentValue] = useState(22);
    const [waterLevelCurrentValue, setWaterLevelCurrentValue] = useState(22);


    // Object Oriented...
    const person1 = {
        
    }

    const person2 = {
      
    }

    const arrStr = ["str1", "str2"];
    const arrNum = [1, 2, 3];

    
    const students = [
        {
            name: "AG",
            age: 25,
            gender: "male",
            walk: function(){
                console.log("walking...");
            }
        },
        {
            name: "Cedie",
            age: 25,
            gender: "male"
        }
    ];

    students[1].name;



    useEffect(()=> {

        // interval repeats the function/s inside for a certain amount of time...

        const interval = setInterval(function() {


            // async executes a function/s without waiting for the next line or funciton below.
            (async ()=> {
                // static or consts...

                const base_url = "https://mushroom-1d82e-default-rtdb.asia-southeast1.firebasedatabase.app/";

                // using await will wait for the fetch to be over or executed....
                const response = await fetch(`${base_url}plant_sensors.json`);

                // pag convert from text to json and pass it to a variable....
                const result = await response.json();
                
                if(result[Object.keys(result)[Object.keys(result).length - 1]].humidity < 80) {
                    setIsModalVisible(true);
                }

                setTemperatureCurrentValue(result[Object.keys(result)[Object.keys(result).length - 1]].temperature);
                setHumidityCurrentValue(result[Object.keys(result)[Object.keys(result).length - 1]].humidity);
                setWaterLevelCurrentValue(result[Object.keys(result)[Object.keys(result).length - 1]].waterlevel);
            })();

        }, 10000);


    }, []);

    return (
        <View className={'flex flex-1'}>
        <WarningPopup isVisible={isModalVisible} setIsVisible={setIsModalVisible} />
            <Image source={Background} className={'-z-10 absolute w-full h-full'} />
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
                navigation.navigate('Reports');
            }} className={'bg-[#80aa92] mt-5 py-4 rounded-full'}>
                <Text className={'text-white text-center text-2xl'}>Reports</Text>
            </TouchableOpacity>

            </View>

        </View>

    )
}
