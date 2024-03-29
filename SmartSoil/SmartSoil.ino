/* The true ESP32 chip ID is essentially its MAC address.
This sketch provides an alternate chip ID that matches 
the output of the ESP.getChipId() function on ESP8266 
(i.e. a 32-bit integer matching the last 3 bytes of 
the MAC address. This is less unique than the 
MAC address chip ID, but is helpful when you need 
an identifier that can be no more than a 32-bit integer 
(like for switch...case).

created 2020-06-07 by cweinhofer
with help from Cicicok */
#include <DHT11.h>
#include <ESP32Firebase.h>

// Variables to be used to connect to wifi....
#define _SSID "AG_DEV"          // Your WiFi SSID
#define _PASSWORD "nieve123"      // Your WiFi Password
#define REFERENCE_URL "https://ced-app-d69aa-default-rtdb.asia-southeast1.firebasedatabase.app/"  // Your Firebase project reference url
int relayPin = 25;

// setup firebase reference url..
Firebase firebase(REFERENCE_URL);

// setup dht11 pin depends on what number of pin it is connected..
DHT11 dht11(26);

uint32_t chipId = 0;

void setup() {
	Serial.begin(115200);

  pinMode(relayPin, OUTPUT);

  // Wifi Connection
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(1000);

  // Connect to WiFi
  Serial.println();
  Serial.println();
  Serial.print("Connecting to: ");
  Serial.println(_SSID);
  WiFi.begin(_SSID, _PASSWORD);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print("-");
  }

  Serial.println("");
  Serial.println("WiFi Connected");
}

void loop() {

    // reading temperature & humidity using DHT11 
    int temperature = dht11.readTemperature();
    int humidity = dht11.readHumidity();

    if(temperature >= 30 || humidity <= 69) {
      digitalWrite(relayPin, LOW);
    }else{
      digitalWrite(relayPin, HIGH);
    }

    // Check the results of the readings.
    // If there are no errors, print the temperature and humidity values.
    // If there are errors, print the appropriate error messages.
    if (temperature != DHT11::ERROR_CHECKSUM && temperature != DHT11::ERROR_TIMEOUT &&
        humidity != DHT11::ERROR_CHECKSUM && humidity != DHT11::ERROR_TIMEOUT)
    {

      // Examples of setting String, integer and float values.


        // firebase.pushString("Example/setString", "It's Working");
        // firebase.pushInt("Example/setInt", 123);
        // firebase.pushFloat("Example/setFloat", 45.32);

        firebase.json(true); 

        Serial.print("Temperature: ");
        Serial.print(temperature);
        Serial.println(" °C");

        Serial.print("Humidity: ");
        Serial.print(humidity);
        Serial.println(" %");
    }
    else
    {
        if (temperature == DHT11::ERROR_TIMEOUT || temperature == DHT11::ERROR_CHECKSUM)
        {
            Serial.print("Temperature Reading Error: ");
            Serial.println(DHT11::getErrorString(temperature));
        }
        if (humidity == DHT11::ERROR_TIMEOUT || humidity == DHT11::ERROR_CHECKSUM)
        {
            Serial.print("Humidity Reading Error: ");
            Serial.println(DHT11::getErrorString(humidity));
        }
    }
  
	delay(1000);

}
