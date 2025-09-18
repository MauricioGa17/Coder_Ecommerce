import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { formatoMonedaMXN } from '../../helpers/formatoMoneda'

//Screens
import CartScreen from '../../screens/CartScreen';
import Header from '../../components/ui/Header';

//Redux
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const CartStack = () => {

    const { cartItems, total } = useSelector((state) => state.cartReducer)

    return (
        <Stack.Navigator
            screenOptions={{
                header: () => <Header titulo={'Mi Carrito'} subTitulo={`Productos: ${cartItems.length} Total: ${formatoMonedaMXN(total.toString())}`}/> 
            }}
        >
            <Stack.Screen name="CartScreen" component={CartScreen} options={{ title: "Cart" }} />
        </Stack.Navigator>
    )
}

export default CartStack