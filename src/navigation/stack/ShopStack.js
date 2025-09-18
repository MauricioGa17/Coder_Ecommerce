import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import ShopScreen from '../../screens/ShopScreen';
import Header from '../../components/ui/Header';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => <Header/> // Este es un components
            }}
        >
            <Stack.Screen name="ShopScreen" component={ShopScreen} options={{ title: "Shop" }} />
        </Stack.Navigator>
    )
}

export default ShopStack