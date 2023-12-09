import {Dimensions, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import Background from "../assets/background-light.png";
import LineChartComponent from "../components/LineChartComponent";


export default function Reports(props){

    const { navigation } = props;

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
        <ScrollView contentContainerStyle={{alignItems: "center", justifyContent:"flex-start", padding:10}}>
            <Text className={'mt-3 text-white'}>Temperature Readings</Text>
            <LineChartComponent />
            <Text className={'mt-3 text-white'}>Humidity Readings</Text>
            <LineChartComponent />
            <TouchableOpacity onPress={()=> {
            //     CODES HERE...
            }} className={'bg-[#80aa92] mt-3 py-4 rounded-full w-full'}>
                <Text className={'text-white text-center text-2xl'}>View Logs</Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
}
