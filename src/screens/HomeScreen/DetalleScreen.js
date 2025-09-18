import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons';

const DetalleScreen = ({ route }) => {

    const item = route.params;

    return (
        <View style={{ paddingHorizontal: 10 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>{ item.name }</Text>
                <View style={{ flexDirection: 'row', gap:4, marginVertical: 5 }}>
                    <View style={{ flexDirection: 'row', gap: 3 }}>
                        <Icon name="star" size={15} color="blue" />
                        <Text style={{ fontSize: 12 }}>{item.valoracion}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 12 }}>| Stock: {item.stock} </Text>
                    </View>
                </View>
            </View>

            <Image
                resizeMode='stretch'
                source={{
                    uri: item.image_url
                }}
                style={{
                    width: '100%',
                    height: 350
                }}
            />

            <View style={{ padding: 10 }}>
                <Text>{ item.description }</Text>
                <Text>$ { item.price }</Text>
            </View>
            
            <TextInput
                style={{ backgroundColor: '#f5f5f5' }}
            />

            <TouchableOpacity style={{ width: '100%', backgroundColor: '#2D90C4', padding: 10 , borderRadius: 10}}>
                <Text style={{ textAlign: 'center', color: "#fff" }}>Agregar al Carrito</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DetalleScreen