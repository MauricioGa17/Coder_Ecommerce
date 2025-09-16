import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import ShopScreen from '../../screens/ShopScreen';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ShopScreen" component={ShopScreen} options={{ title: "Shop" }} />
        </Stack.Navigator>
    )
}

export default ShopStack