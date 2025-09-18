import { View, Text, ActivityIndicator, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native"

//Redux
import { useDispatch } from "react-redux"
import { setCategoriaSeleccionada } from '../../redux/slices/shopSlice';

//RTK Query
import { useGetCategoriasQuery } from '../../services/shopApi'

const CategoriasScreen = ({ navigation }) => {

    const { data:categorias, isLoading, error } = useGetCategoriasQuery()
    const dispatch = useDispatch(); // Despachar acciones

    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => [dispatch(setCategoriaSeleccionada(item)), navigation.navigate('ProductosScreen')]} style={{ width: '50%', marginTop: 15}}>
            <Image
                style={styles.image}
                source={{ uri: item.imagen }}
                resizeMode="cover"
            />
            <View style={{ padding: 5, backgroundColor: '#2D90C4' }}>
                <Text style={styles.titulo}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    return(
        <View style={styles.container}>
            { isLoading 
                ? <ActivityIndicator/>
                : (
                    <FlatList
                        data={categorias}
                        numColumns={2}
                        columnWrapperStyle={{ gap: 15 }}
                        initialNumToRender={10} 
                        renderItem={renderItem} 
                        keyExtractor={(item) => item.id.toString()} 
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        flex: 1,
    },
    image:{
        width: '100%',
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    titulo:{
        textAlign: 'center',
        fontSize: 12,
        color: '#fff'
    }
})

export default CategoriasScreen