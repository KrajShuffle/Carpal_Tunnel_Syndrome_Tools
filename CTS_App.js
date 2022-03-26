import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from "react";
import {Animated, StyleSheet, Text, View, Dimensions, Linking, TouchableOpacity} from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';



export default function App() {
  const {height, width} = Dimensions.get('window') // Returns usable window size for Android
  var counter = 0;
  const [pos, setPos] = useState(0);
  const [cpos, setCpos] = useState(0);
  const [timer, setTimer] = useState(0);

  const midStart = () => {                         // Timer Function
    setInterval(() => counter += 1, 100);
  }

  const clickHandler = () => {                     // Displays Timer Value, Updates Circle Position, Updates Circle Position Text
    const randomNumber = ((Math.floor(Math.random() * 11) + 1) / 6);
    console.log(counter)
    setCpos(cpos + 1); // cpos + 1
    setPos(pos + 1/6); // pos + 1/6

    setTimer((counter+1)/10)
    counter = 0;
    }
  const reset_time_pos = () => {                  // Resets Circle Position Text & Timer Value
      setCpos(0);
      setTimer(0);
    };
  return(
  <View style={styles.container}>
  <Svg height="100%" width="100%">
    <View style={styles.textc}>
          <Text style = {{fontSize: 40, fontWeight: 'bold', color: 'pink'}}> CTS Detection App </Text>
          <Text style = {{fontSize: 30, fontWeight: 'bold', color: 'orange', marginTop: 30}}> Circle Position: {cpos} </Text>
          <Text style = {{fontSize: 30, fontWeight: 'bold', color: 'cyan', marginTop: 5}}> Time Value: {timer} seconds </Text>
    </View>
    <Circle cx= {width/2} cy= {height * (2/3)} r="152" stroke="green" strokeWidth="2.5" fill="" />
    <Circle cx= {width/2} cy= {height * (2/3)} r="20" stroke="red" strokeWidth="2.5" fill="" onPress = {midStart}  />
    <Circle cx={width/2 + (120*Math.cos((pos*Math.PI)))} cy= {(height *(2/3)) - (120*Math.sin((pos*Math.PI)))} r="20" stroke = 'black' onPress= {clickHandler} onLongPress = {reset_time_pos} />
  </Svg>
  </View>
 )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  textc: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    top: 40,
  },
});
