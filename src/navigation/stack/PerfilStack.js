import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import PerfilScreen from '../../screens/PerfilScreen';
import Header from '../../components/ui/Header';

const Stack = createNativeStackNavigator();

const PerfilStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => <Header titulo={'Mi Perfil'}/> // Este es un components
            }}
        >
            <Stack.Screen name="PerfilScreen" component={PerfilScreen} options={{ title: "Perfil" }} />
        </Stack.Navigator>
    )
}

export default PerfilStack