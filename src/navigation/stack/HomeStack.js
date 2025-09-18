import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

//Screens
import CategoriasScreen from '../../screens/HomeScreen/CategoriasScreen';
import ProductosScreen from '../../screens/HomeScreen/ProductosScreen';
import DetalleScreen from '../../screens/HomeScreen/DetalleScreen';

//Components
import Header from '../../components/ui/Header';

const Stack = createNativeStackNavigator();

const HomeStack = () => {

    const categoriaSeleccionada = useSelector((state) => state.shopReducer.categoriaSeleccionada)

    return (
        <Stack.Navigator
            screenOptions={({ route }) => {
                const mostrarCategoriaSeleccionada = route.name === 'ProductosScreen';
                return {
                    header: () => (
                        <Header
                            titulo="Coder Ecommerce"
                            subTitulo={mostrarCategoriaSeleccionada ? categoriaSeleccionada.name : null}
                        />
                    ),
                };
            }}
        >
            <Stack.Screen name="CategoriasScreen" component={CategoriasScreen} options={{ title: "Categorias" }} />
            <Stack.Screen name="ProductosScreen" component={ProductosScreen} options={{ title: "Productos" }} />
            <Stack.Screen name="DetalleScreen" component={DetalleScreen} options={{ title: "Detalle" }} />
        </Stack.Navigator>
    )
}

export default HomeStack