import React, { useState, useEffect } from 'react';
import { View } from  'react-native';

export default ()=>{
const [step1, setStepIncrement] = useState(1);
const [step2] = useState(1);
const [step3] = useState(1);
const changeStyleAttribute =(color, step)=>{
    return {
        width: step*50,
        height: 100,
        color,
    }
  
};
return (
    <View style={{flex: 5}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 1, backgroundColor: 'steelblue'}} />
      </View>
)
}
