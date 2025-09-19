import { NavigationContainer } from "@react-navigation/native";

//Tab Navigation
import TabNavigator from "./TabNavigator";

//Stacks
import AuthStack from "./stack/AuthStack";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfilePictureQuery } from "../services/perfilApi";
import { useEffect, useState } from "react";
import { setEmail, setLocalId, setUserImage } from "../redux/slices/userSlice";

//SQLITE
import { getSession, initSessionTable } from '../db'
import { ActivityIndicator, View } from "react-native";

const AppNavigator = () => {

    const email = useSelector((state) => state.userReducer.email)
    const localId = useSelector((state) => state.userReducer.localId)
    const [ checkingSession, setCheckingSession ] = useState(true)

    const dispatch = useDispatch();

    const { data:profilePicture, isLoading, error } = useGetProfilePictureQuery(localId)

    useEffect(() => {
        const bootstrap = async () => {
            await initSessionTable();
            const session = await getSession()
            if(session){
                console.log("Session:", session);
                dispatch(setEmail(session.email))
                dispatch(setLocalId(session.localId))
            }
            setCheckingSession(false)
        }
        bootstrap()
    }, [])

    useEffect(() => {
        if(profilePicture){
            dispatch(setUserImage(profilePicture.image))
        }
    }, [profilePicture])

    if(checkingSession){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large'/>
            </View>
        )
    }

    return (
        <NavigationContainer>
            { email ? <TabNavigator/> : <AuthStack/>}  
        </NavigationContainer>
    );
}

export default AppNavigator