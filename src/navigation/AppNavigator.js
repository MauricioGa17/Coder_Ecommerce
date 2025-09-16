import { NavigationContainer } from "@react-navigation/native";

//Tab Navigation
import TabNavigator from "./TabNavigator";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    );
}

export default AppNavigator