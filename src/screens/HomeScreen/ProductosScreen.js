import { useEffect } from "react"
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native"
import Icon from '@expo/vector-icons/Ionicons';

//RTK Query
import { useGetProductosPorCategoriaQuery } from '../../services/shopApi'
import { useSelector } from "react-redux"

const ProductsScreen = ({ navigation }) => {

    const categoriaSeleccionada = useSelector((state) => state.shopReducer.categoriaSeleccionada)
    const { data:productos, isLoading, error } = useGetProductosPorCategoriaQuery(categoriaSeleccionada.name) 

    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate("DetalleScreen", item)} style={{ padding: 10, flexDirection: 'row', gap:10 }}>
            <Image
                source={{
                    uri: item.image_url
                }}
                resizeMode='cover'
                style={{ height: 100, width: 100 }}
            />
            <View>
                <Text style={{ fontSize: 15, fontWeight: '600' }}>{item.name}</Text>
                <View style={{ flexDirection: 'row', gap:4, marginVertical: 5 }}>
                    <View style={{ flexDirection: 'row', gap: 3 }}>
                        <Icon name="star" size={15} color="blue" />
                        <Text style={{ fontSize: 12 }}>{item.valoracion}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 12 }}>| Stock: {item.stock} </Text>
                    </View>
                </View>
                <Text style={{ fontSize: 12 }}>${item.price}</Text>
            </View>
        </TouchableOpacity>
    );

    useEffect(() => {
    }, [])

    return(
        <View style={styles.container}>
            { isLoading 
                ? <ActivityIndicator/> 
                : (
                    <FlatList
                        data={productos}
                        renderItem={renderItem}
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})

export default ProductsScreen