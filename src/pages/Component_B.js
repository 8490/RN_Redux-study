import React from "react";
import {SafeAreaView, Text, View} from "react-native";
import { useSelector } from "react-redux";

const Component_B = (props) => {
    const ourCounter = useSelector(myGlobalState => myGlobalState.counter);
    const myUserName = useSelector(newUser => newUser.userName);
    const romanNum = useSelector(newNumber => newNumber.romanNumber)
        
    return(
        <View style={{backgroundColor: "#bdbdbd", flex:1}}>
            <Text>Component_B</Text>
            <Text style={{fontSize: 50}}>Counter: {ourCounter}</Text>
            <Text style={{fontSize: 50}}>Name: {myUserName}</Text>
            <Text style={{fontSize: 30}}>Roman Number: {romanNum}</Text>

        </View>
    );
};

export default Component_B;