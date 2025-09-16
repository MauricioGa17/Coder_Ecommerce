import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import OrderScreen from '../../screens/OrderScreen';

const Stack = createNativeStackNavigator();

const OrderStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="OrderScreen" component={OrderScreen} options={{ title: "Order" }} />
        </Stack.Navigator>
    )
}

export default OrderStack