import { Ionicons } from "@expo/vector-icons";
import {Dimensions, Modal, Text, TouchableOpacity, View} from "react-native";

import {
    LineChart,
} from "react-native-chart-kit";

export default function LogsModal(props){

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


  </Modal>
}
