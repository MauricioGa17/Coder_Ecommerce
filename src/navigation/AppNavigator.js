import { NavigationContainer } from "@react-navigation/native";

//Tab Navigation
import TabNavigator from "./TabNavigator";

//Stacks
import AuthStack from "./stack/AuthStack";
import { useSelector } from "react-redux";

const AppNavigator = () => {

    const email = useSelector((state) => state.userReducer.email)
    //const { cartItems, total } = useSelector((state) => state.cartReducer)

    return (
        <NavigationContainer>
            { email ? <TabNavigator/> : <AuthStack/>}  
        </NavigationContainer>
    );
}

export default AppNavigator