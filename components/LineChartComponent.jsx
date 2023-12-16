import {Dimensions} from "react-native";
import {LineChart} from "react-native-chart-kit";

export default function LineChartComponent(props){

    const { data, symbol } = props;

    if(!data){
        return <Text>Loading....</Text>
    }

    return <LineChart
        data={data}
        width={Dimensions.get("window").width - 15} // from react-native
        height={220}
        // yAxisLabel="°C"
        yAxisSuffix={symbol}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
            backgroundColor: "#6eb480",
            backgroundGradientFrom: "#80aa92",
            backgroundGradientTo: "#91b4a0",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16,
            },
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#86a693"
            }
        }}
        bezier
        style={{
            marginVertical: 8,
            borderRadius: 16
        }}
    />
}
