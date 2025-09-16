import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import CartScreen from '../../screens/CartScreen';

const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CartScreen" component={CartScreen} options={{ title: "Cart" }} />
        </Stack.Navigator>
    )
}

export default CartStack