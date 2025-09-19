import { StyleSheet, Text, View } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons';

const CamaraIcono = () => {
    return (
        <View style={styles.iconContainer}>
            <Icon name="camera" size={32} color="#fff" />
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: 40,
        height: 40,
        borderRadius: 32
    }
})

export default CamaraIcono