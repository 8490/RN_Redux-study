import React from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Component_A from "./pages/Component_A";
import Component_B from "./pages/Component_B";
import Component_C from "./pages/Component_C";


import { reducer, initialState } from "./context";



const store = createStore(reducer, initialState);

const Main = (props) => {
    return (
        <Provider store={ store }>
            <NavigationContainer>
                <Drawer.Navigator 
                    initialRouteName="A"
                    sty>
                        <Drawer.Screen name="A" component={Component_A} options={{title: "Buttons"}}  />
                        <Drawer.Screen name="B" component={Component_B} options={{title: "View Page"}}/>
                        <Drawer.Screen name="C" component={Component_C} options={{title: "Extra Page"}}/>
                </Drawer.Navigator>
            </NavigationContainer>    
        </Provider>
    );
};
 
export default Main;

