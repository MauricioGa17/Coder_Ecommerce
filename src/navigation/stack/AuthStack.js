import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import LoginScreen from '../../screens/Auth/LoginScreen';
import RegisterScreen from '../../screens/Auth/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: "Login" }} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: "Registro" }} />
        </Stack.Navigator>
    )
}

export default AuthStack