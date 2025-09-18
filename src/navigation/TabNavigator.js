import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from '@expo/vector-icons/Ionicons';

//Stacks
import HomeStack from "./stack/HomeStack";
import CartStack from "./stack/CartStack";
import OrderStack from "./stack/OrderStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                headerShown: false, // Ocultar el header
                tabBarActiveTintColor: '#2D90C4', //Color del texto
                tabBarInactiveTintColor: '#d9d9d9',
                tabBarLabelStyle: { fontSize: 10, fontFamily: 'Roboto', fontWeight: "700" },
                tabBarIcon: ({ focused }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = 'home';
                } else if (route.name === 'Cart') {
                    iconName = 'cart';
                } else if (route.name === 'Order') {
                    iconName = 'bag';
                }

                return (
                        <Icon
                            name={iconName}
                            size={focused ? 24 : 20}
                            color={focused ? '#2D90C4' : '#d9d9d9'}
                        />
                    );
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeStack}/>
            <Tab.Screen name="Cart" component={CartStack}/>
            <Tab.Screen name="Order" component={OrderStack}/>
        </Tab.Navigator>       
    );
}

export default TabNavigator