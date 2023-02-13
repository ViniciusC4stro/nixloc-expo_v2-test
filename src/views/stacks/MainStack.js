import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Preload from '../auth/Preload'
import Login from '../auth/Login'
import MainTab from './MainTab'

const Stack = createNativeStackNavigator()

export default () => (
    <Stack.Navigator
    initialRouteName='Preload'
    screenOptions={{ 
        headerShown: false
    }}
    >
        <Stack.Screen name='Preload' component={Preload}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='MainTab' component={MainTab}/>
    </Stack.Navigator>
)