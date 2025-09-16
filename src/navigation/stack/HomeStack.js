import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import HomeScreen from '../../screens/HomeScreen';
import Header from '../../components/ui/Header';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => <Header/> // Este es un components
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Home" }} />
        </Stack.Navigator>
    )
}

export default HomeStack