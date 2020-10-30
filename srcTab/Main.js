import React from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import Component_A from "./pages/Component_A";
import Component_B from "./pages/Component_B";
import Component_C from "./pages/Component_C";


import { reducer, initialState } from "./context";



const store = createStore(reducer, initialState);

const Main = (props) => {
    return (
        <Provider store={ store }>
            <NavigationContainer>
                <Tab.Navigator>
                        <Tab.Screen name="Component_A" component={Component_A} />
                        <Tab.Screen name="Component_B" component={Component_B} />
                        <Tab.Screen name="Component_C" component={Component_C} />
                </Tab.Navigator>
            </NavigationContainer>    
        </Provider>
    );
};
 
export default Main;

