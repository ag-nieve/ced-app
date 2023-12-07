import { Ionicons } from "@expo/vector-icons";
import { Modal, Text, TouchableOpacity, View } from "react-native";


export default function ReportsModal(props){

    const { isVisible, setIsVisible } = props;

    return <Modal
    className={'flex'}
    animationType="slide"
    transparent={false}
    visible={isVisible}
    onRequestClose={() => {
      setIsVisible(!isVisible);
    }}
  >
    <View className={'flex flex-1'}>
    
        <View className={'h-1/5 justify-center py-4 px-4 rounded-b-[64px] bg-[#80aa92]'}>
        <TouchableOpacity onPress={()=> setIsVisible(false)} className={''}>
            <Ionicons name="close" size={30} color="#fff" />
        </TouchableOpacity>
            <Text className={'text-4xl font-bold text-white text-center'}>Reports</Text>
        </View>
        <View className={'flex h-full justify-center items-center'}>
            <Text>No Reports.</Text>
        </View>
    </View>
    
  </Modal>
}