
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {NatigationContainer} from '@react-navigation/native'; 
import {createsStackNavigator} from '@react-navigation/start'; 

import Inicio from './Vistas/Bienvenido/Inicio';

const stack = createStackNavigator();

const App: () => React$Node = () => {
    return ( 
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Inicio"
                    component={inicio}
                    options={{title: 'Bienvenido'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
/*
const style = StyleSheet.create ({
    container: {
        backgroundColor: '#FFFF00',
        flex: 1
    },
    textico :{
        testAlign: 'center'
    }
})
*/
export default App;