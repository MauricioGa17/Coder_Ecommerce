import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

//Redux
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/slices/cartSlice.js'

const DetalleScreen = ({ route }) => {

    const item = route.params;
    const dispatch = useDispatch(); // Despachar acciones

    const [ cantidad, setCantidad ] = useState(1)

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

            <View style={{ paddingVertical: 10 }}>
                <Text style={{ textAlign: 'justify' }}>{ item.description }</Text>
                <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10 }}>$ { item.price }</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <TouchableOpacity onPress={() => cantidad > 1 && setCantidad(cantidad - 1)} style={{ backgroundColor: '#C24229', width: 40, borderRadius: 10 }}>
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>-</Text>
                </TouchableOpacity>
                <TextInput
                    keyboardType="numeric"
                    style={{ backgroundColor: '#fff', flex: 1, color: '#000', borderRadius: 10, paddingHorizontal: 10 }}
                    value={`Cantidad: ${String(cantidad)}`}
                    editable={false}
                />
                <TouchableOpacity onPress={() => cantidad < item.stock && setCantidad(cantidad + 1)} style={{ backgroundColor: '#249148', width: 40, borderRadius: 10 }}>
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>+</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => [dispatch(addItemToCart({ producto: item, cantidad: cantidad })), setCantidad(1)]} style={{ width: '100%', backgroundColor: '#2D90C4', padding: 10 , borderRadius: 10}}>
                <Text style={{ textAlign: 'center', color: "#fff" }}>Agregar al Carrito</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DetalleScreen