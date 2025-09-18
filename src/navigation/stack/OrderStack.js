import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import OrderScreen from '../../screens/OrderScreen';
import Header from '../../components/ui/Header';

const Stack = createNativeStackNavigator();

const OrderStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => <Header/> // Este es un components
            }}
        >
            <Stack.Screen name="OrderScreen" component={OrderScreen} options={{ title: "Order" }} />
        </Stack.Navigator>
    )
}

export default OrderStack