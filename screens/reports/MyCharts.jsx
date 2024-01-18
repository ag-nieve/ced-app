import { useEffect, useState } from "react";
import LineChartComponent from "../../components/LineChartComponent";

import {ScrollView, Text} from "react-native";

export default function MyCharts(){

    const [temperatureChartData, setTemperatureChartData] = useState({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ]
    });

    const [humidityChartData, setHumidityChartData] = useState({
        labels: ['July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ]
    });

    const [waterLevelChartData, setWaterLevelChartData] = useState({
        labels: ['July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ]
    });

    useEffect(()=> {

            (async ()=> {
                // mao ni ang process sa pagkuha sa data gikan firebase
                const base_url = "https://mushroom-1d82e-default-rtdb.asia-southeast1.firebasedatabase.app/";
                const response = await fetch(`${base_url}plant_sensors.json`);

                //   gikan ni pag kuha sa data sa firebase
                const result = await response.json();

                //   mao ni ang pag kuha sa mga ulo sa object nga gihimong array...
                const resultKeys = Object.keys(result);

                //   mao ni ang pag initialize sa mga variable nga gamiton sa loop sa ubos
                const dummy = {};
                const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                const humidityValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                const tempValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                const waterLevelValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

                //   mao ni ang pag colecta sa overall ph og temperature
                let avgHumidity = 0;
                let avgTemperature = 0;
                let avgWaterLevel = 0;

                //   diri gi isa.x og loop ang item sa resultkeys (katung ulo) para makuha ang sulod nga mga data katung naay dateTime, humidity og temperature
                for(let i = 0; i < resultKeys.length; i++){
                    const myDate = result[resultKeys[i]].dateTime;
                    
                    // mao ni ang pag kuha sa months gikan sa data ex. 04/11/2023:20:22 ---> 04 mao mana ang month
                    const thisDate = new Date(myDate);

                    

                    //console.log(myDate.split("/"));
                    console.log("thisDate: ", myDate !== undefined ? myDate.split('/'): '');
                    
                    const theMonth = myDate !== undefined ? (parseInt(myDate.split('/')[0]) - 1): 0

                    humidityValues[0] = 0;
                    waterLevelValues[0] = 0;
                    
                    humidityValues[theMonth] += parseInt(result[resultKeys[i]].humidity);
                    tempValues[theMonth] += parseInt(result[resultKeys[i]].temperature);
                    waterLevelValues[theMonth] += 80;

                    // kung nahuman na og loop, e total niya ang average humidity og average temperature...
                    if(i === resultKeys.length - 1){

                        console.log(humidityValues[theMonth]);
                        avgHumidity = parseInt(humidityValues[theMonth]) / resultKeys.length;
                        avgTemperature = parseInt(tempValues[theMonth]) / resultKeys.length;
                        avgWaterLevel = waterLevelValues[theMonth] / resultKeys.length;
                        humidityValues[theMonth] = avgHumidity
                        tempValues[theMonth] = avgTemperature
                        waterLevelValues[theMonth] = avgWaterLevel
                    }

                }

                //   diri gawas na sa loop gi kuha sa global variable tanan data para e pasa sa chart katung <LineChart /> nga component...

                console.log("tempvalues: ", tempValues);
                setTemperatureChartData({
                    labels:labels,
                    datasets: [
                        {
                            data: tempValues
                        }
                    ]
                })

                console.log("humidity: ", humidityValues);
                setHumidityChartData({
                    labels: labels,
                    datasets: [
                        {
                            data: humidityValues
                        }
                    ]
                })

                console.log("water Level: ", waterLevelValues);
                setWaterLevelChartData({
                    labels: labels,
                    datasets: [
                        {
                            data: waterLevelValues
                        }
                    ]
                })

            })();


    },[]);

    return <ScrollView contentContainerStyle={{alignItems: "center", justifyContent:"flex-start", padding:10}}>
    <Text className={'mt-3 text-white'}>Temperature Readings</Text>
    <LineChartComponent data={temperatureChartData} symbol={'°C'} />
    <Text className={'mt-3 text-white'}>Humidity Readings</Text>
    <LineChartComponent data={humidityChartData} symbol={'%'} />
    <Text className={'mt-3 text-white'}>Water Level Readings</Text>
    <LineChartComponent data={waterLevelChartData} symbol={'%'} />
    
</ScrollView>
}