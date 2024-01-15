#include <HCSR04.h>

byte triggerPin = 10;
byte echoPin = 13;
int relayPin = 8;

void setup () {
  Serial.begin(9600);
  HCSR04.begin(triggerPin, echoPin);
  pinMode(relayPin, OUTPUT);
}

void loop () {

  double* distances = HCSR04.measureDistanceCm();
  
  Serial.print("1: ");
  Serial.print(distances[0]);
  Serial.println(" cm");
  
  Serial.println("---");

  if(distances[0] >= 7) {
      digitalWrite(relayPin, LOW);
  }else{
      digitalWrite(relayPin, HIGH);
  }

  delay(250);
}