import React, { useState } from "react";
import { Text, View, Button, TextInput} from "react-native";
import { useSelector, useDispatch } from "react-redux";


const Component_A = (props) => {
    const [name, setName] = useState("");
    const [num, setNum] = useState("");
    const myCounter = useSelector(globalState => globalState.counter);
    const dispatch = useDispatch();

    function converter(number){
        if (number<1 || number>3999){
            alert('Please enter a number between 1 and 3.999')
        }
        else{
        let Roman_numbers = {0:'',1:'I', 2:'II',3:'III', 4:'IV', 5:'V', 6:'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10:'X', 20:'XX', 30:'XXX', 40:'XL', 50:'L', 60:'LX', 70:'LXX', 80:'LXXX', 90:'XC', 100:'C', 200:'CC', 300:'CCC', 400:'CD', 500:'D', 600:'DC', 700:'DCC', 800:'DCC', 900:'CM', 1000:'M', 2000:'MM', 3000:'MMM' };
        // number = String(number);
        let x = number.length-1;
        let rNumber='';
        for (let i of number){
            i = Number(i)*10**x,
            x -= 1,
            rNumber += Roman_numbers[i]
        }
        
        return rNumber
        }
    }
  
    return(

        <View style={{backgroundColor: "#eceff1", flex:1}}>
            <Text>Component_A</Text>
            <Text style={{fontSize: 50}}>Counter: {myCounter}</Text>
            <Button 
                title = "INCREASE"
                onPress = {() => dispatch({ type: "INCREASE_COUNTER"})}
            />
            <Button 
                title = "DECREASE"
                onPress = {() => dispatch({ type: "DECREASE_COUNTER"})}
            />

            <TextInput
                placeholder= "Enter your group name"
                onChangeText={(value) => setName(value)}
            />

            <Button 
                title = "SET USER NAME"
                onPress = {() => dispatch({
                    type: "SET_USERNAME",
                    payload: {
                        newUserName: name
                    }
                })}
            />

            <TextInput
                placeholder= "Enter a number between '1 and 3999' to convert roman number"
                onChangeText={(value) => setNum(value)}
            />

            <Button 
                title = "CONVERTER TO ROMAN NUMBER"
                onPress = {() => dispatch({
                    type: "CONVERT_NUMBER",
                    payload: {
                        myRomanNumber: converter(num)
                    }
                    
                    
                })}
            />

        </View>
    );
};

export default Component_A;