import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native'

const Header = ({titulo, subTitulo}) => {
    return (
        <View style={styles.container}>
            {Platform.OS === 'android' && (
                <StatusBar backgroundColor="#fff" barStyle="light-content" />
            )}
            <View style={styles.container_titulo}>
                <Text style={styles.titulo}>{ titulo }</Text>
                { subTitulo && <Text style={styles.subTitulo}>{ subTitulo }</Text> }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2D90C4',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container_titulo:{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 19
    },
    subTitulo:{
        color: '#fff',
        fontWeight: '500',
        fontSize: 12,
        marginTop: 2
    }
})

export default Header