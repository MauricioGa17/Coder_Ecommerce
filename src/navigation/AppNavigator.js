import { NavigationContainer } from "@react-navigation/native";

//Tab Navigation
import TabNavigator from "./TabNavigator";

//Stacks
import AuthStack from "./stack/AuthStack";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfilePictureQuery } from "../services/perfilApi";
import { useEffect } from "react";
import { setUserImage } from "../redux/slices/userSlice";

const AppNavigator = () => {

    const email = useSelector((state) => state.userReducer.email)
    const localId = useSelector((state) => state.userReducer.localId)

    const dispatch = useDispatch();

    const { data:profilePicture, isLoading, error } = useGetProfilePictureQuery(localId)

    useEffect(() => {
        if(profilePicture){
            dispatch(setUserImage(profilePicture.image))
        }
    }, [profilePicture])

    return (
        <NavigationContainer>
            { email ? <TabNavigator/> : <AuthStack/>}  
        </NavigationContainer>
    );
}

export default AppNavigator