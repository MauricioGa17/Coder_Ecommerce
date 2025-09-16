import { View, Text } from "react-native"
import { useSelector } from "react-redux"

const HomeScreen = () => {

    const categorias = useSelector(state => state.shopReducer.categorias)

    return(
        <View>
            <Text>HomeScreen</Text>
            <Text>{ JSON.stringify(categorias) }</Text>
        </View>
    )
}

export default HomeScreen