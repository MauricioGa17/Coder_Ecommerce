import { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import CamaraIcono from '../components/CamaraIcono';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker'
import * as Location from 'expo-location'

import { usePutProfilePictureMutation } from '../services/perfilApi'
import { setUserImage } from '../redux/slices/userSlice'
import MapView, { Marker } from 'react-native-maps';

const PerfilScreen = () => {

    const [ location, setLocation ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ locationLoaded, setLocationLoaded ] = useState(true)
    const [ errorMessage, setErrorMessage] = useState("");

    const user = useSelector((state) => state.userReducer.email)
    const localId = useSelector((state) => state.userReducer.localId)
    const image = useSelector((state) => state.userReducer.image)

    const dispatch = useDispatch();

    const [ triggerPutProfilePicture, result ] = usePutProfilePictureMutation()

    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1,1],
            quality: 0.7,
            base64: true
        })
        
        if(!result.canceled){
            const imageBase64 = `data:image/jprg;base64, ${result.assets[0].base64}`
            dispatch(setUserImage(imageBase64))
            triggerPutProfilePicture({localId:localId, image:imageBase64})
        }
    }

    useEffect(() => {
        async function getCurrentLocation(){
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if(status !== 'granted'){
                    setErrorMessage('Permiso a la ubicacion negada')
                    return;
                }

                let location = await Location.getCurrentPositionAsync({});
                
                if(location){
                    const response = await fetch(
                        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=${process.env.EXPO_PUBLIC_MAPS_KEY}`
                    )
                    const data = await response.json()
                    setLocation(location)
                    setAddress(data.result[0].formatted_address)
                    console.log("Datos", data)
                }
            }catch (error) {
                setErrorMessage(error)
            } finally {
                setLocationLoaded(false)
            }
        }
        getCurrentLocation()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.perfilImagenContainer}>
                { image 
                    ? <Image source={{ uri: image }} resizeMode='cover' style={styles.perfilImagen}/>
                    : <Text style={styles.textPerfilPlaceHolder}>{ String(user).toUpperCase().charAt(0) }</Text>
                }

                <Pressable onPress={() => pickImage()} style={({ pressed }) => [{ opacity: pressed ? 0.90 : 1 }, styles.cameraIcon]}>
                    <CamaraIcono/>
                </Pressable>
            </View>

            <Text style={styles.perfilDatos}>Email: {user}</Text>

            <View style={styles.mapContainer}>
                {
                    location
                    ? (
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421
                            }}
                        >
                            <Marker coordinate={{ "latitude": location.coords.latitude, "longitude": location.coords.longitude }} title='Ecommerce'/>
                        </MapView>
                    )
                    : locationLoaded
                        ? <Text>Hubo un problema al obtener la ubicacion</Text>
                        : <ActivityIndicator/>
                }

                <View>
                    <View>
                        <Text>{ address || '' }</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>{ address || '' }</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 32,
        justifyContent: 'center',
        alignItems: 'center'    
    },
    perfilImagenContainer:{
        backgroundColor: '#2D90C4',
        borderRadius: 100,
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textPerfilPlaceHolder:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 90
    },
    cameraIcon:{
        position: 'absolute',
        bottom: 0,
        right: 10
    },
    perfilDatos:{
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10
    },
    perfilImagen:{
        borderRadius: 100,
        height: 150,
        width: 150,
    },
    mapContainer: {
        width: '100%',
        height: 220,
        overflow: 'hidden',
        elevation: 5,
        marginVertical: 16
    },
    map: {
        height: 240
    },
    mapTitle:{
        fontWeight: '700',
    },
    placeDescription:{
        flexDirection: 'row',
        gap: 10
    }
})

export default PerfilScreen