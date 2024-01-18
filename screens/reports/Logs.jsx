import { FlashList } from "@shopify/flash-list";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Logs(){

    const [logs, setLogs] = useState([]);
    const [logsDetails, setLogsDetails] = useState();

    useEffect(()=> {

        // interval repeats the function/s inside for a certain amount of time...

        (async ()=> {
            // static or consts...

            const base_url = "https://mushroom-1d82e-default-rtdb.asia-southeast1.firebasedatabase.app/";

            // using await will wait for the fetch to be over or executed....
            const response = await fetch(`${base_url}plant_sensors.json`);

            // pag convert from text to json and pass it to a variable....
            const result = await response.json();
            
            const resultKeys = Object.keys(result);

            setLogsDetails(result);
            setLogs(resultKeys);
        })();


    }, []);
    
    return <View className={'flex flex-1 px-2 mt-3'}>
        <FlashList
            data={logs}
            renderItem={({ item }) => <View className={'mb-3 rounded-lg shadow  p-5 bg-white'}>
                <Text>{logsDetails[item].dateTime}</Text>
                <Text>Temperature: {logsDetails[item].temperature}</Text>
                <Text>Humidity: {logsDetails[item].humidity}</Text>
                <Text>Water Level: {logsDetails[item].waterlevel}</Text>
            </View>}
            estimatedItemSize={1000}
            />
    </View>
}