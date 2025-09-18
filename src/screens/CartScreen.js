import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from "react-native"
import { formatoMonedaMXN } from '../helpers/formatoMoneda'

//Redux
import { useDispatch, useSelector } from "react-redux"
import { clearCart, removeItems } from '../redux/slices/cartSlice'

const CartScreen = () => {

    const { cartItems, total } = useSelector((state) => state.cartReducer)
    const dispatch = useDispatch()

    const onVaciarCarrito = () => {
        Alert.alert(
            "Confirmacion",
            "¿Estás seguro de que deseas vaciar el carrito?",
            [
                { text: "No", style: "cancel" },
                { text: "Sí", onPress: () => dispatch(clearCart()) }
            ],
            { cancelable: true }
        );
    }

    const onEliminarProducto = (idProduct) => {
        Alert.alert(
            "Confirmacion",
            "¿Estás seguro de remover este producto de tu carrito?",
            [
                { text: "No", style: "cancel" },
                { text: "Sí", onPress: () => dispatch(removeItems(idProduct)) }
            ],
            { cancelable: true }
        );
    }

    const renderItem = ({item}) => (
        <View style={{ flexDirection: 'row', gap: 10, marginTop: 15 }}>
            <Image
                source={{
                    uri: item.image_url
                }}
                resizeMode="stretch"
                style={{ width: 100, height: 100 }}
            />
            <View style={{ flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>{ item.name }</Text>
                    <Text style={{ fontSize: 13 }}>Cantidad: { item.cantidad }</Text>
                    <Text style={{ fontSize: 13 }}>Total: { formatoMonedaMXN(item.price * item.cantidad) }</Text>
                </View>

                <TouchableOpacity onPress={() => onEliminarProducto(item.id)} style={{ alignSelf: 'flex-start', padding: 4 }}>
                    <Text style={{ color: 'red' }}>Eliminar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return(
        <View style={styles.container}>
            { cartItems.length > 0 && (
                <TouchableOpacity onPress={() => onVaciarCarrito()} style={{ width: '100%', backgroundColor: '#2D90C4', padding: 10 , borderRadius: 10}}>
                    <Text style={{ textAlign: 'center', color: "#fff" }}>Vaciar Carrito</Text>
                </TouchableOpacity>
            )}

            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        paddingTop: 10
    }
})

export default CartScreen