// src/screens/LoginScreen.jsx
import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

//Redux
import { useLoginMutation } from '../../services/authApi'
import { setEmail, setLocalId } from '../../redux/slices/userSlice.js'
import { useDispatch } from "react-redux";

const LoginScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const [mostrarPassword, setMostrarPassword] = useState(true);
    const [error, setError] = useState("");
    const [ triggerLogin, result ] = useLoginMutation();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Email inválido").required("Requerido"),
        password: Yup.string().min(6, "Mínimo 6 caracteres").required("Requerido"),
    });

    const handleLogin = async (values) => {
        triggerLogin(values)
    };

    useEffect(() => {
        if(result.status === "fulfilled"){
            dispatch(setEmail(result.data.email))
            dispatch(setLocalId(result.data.localId))
        }
    }, [result])

    return (
        <View style={styles.container}>
            <Text style={styles.brand}>Coder Ecommerce</Text>
            <Text style={styles.title}>Iniciar sesión</Text>

            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
                    <View style={{ width: "100%" }}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={[styles.input, touched.email && errors.email && styles.inputError]}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            placeholder="tu@correo.com"
                            value={values.email}
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                        />
                        {touched.email && errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

                        <Text style={[styles.label, { marginTop: 12 }]}>Contraseña</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={[styles.input, { flex: 1 }, touched.password && errors.password && styles.inputError]}
                                placeholder="••••••"
                                secureTextEntry={mostrarPassword}
                                value={values.password}
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                            />
                            <TouchableOpacity onPress={() => setMostrarPassword(!mostrarPassword)} style={styles.toggleBtn}>
                                <Text style={styles.toggleText}>{mostrarPassword ? "Mostrar" : "Ocultar"}</Text>
                            </TouchableOpacity>
                        </View>
                        {touched.password && errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

                        {error ? <Text style={[styles.errorText, { marginTop: 12 }]}>{error}</Text> : null}

                        <TouchableOpacity
                            style={[styles.button, isSubmitting && { opacity: 0.7 }]}
                            onPress={handleSubmit}
                            disabled={isSubmitting}
                        >
                            <Text style={styles.buttonText}>{isSubmitting ? "Entrando..." : "Login"}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
                            <Text style={styles.link}>No tienes una cuenta? Crea Una</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 24, 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "#fff",
    },
    brand: { 
        fontSize: 18, 
        color: "#666", 
        marginBottom: 6 
    },
    title: { 
        fontSize: 26, 
        fontWeight: "600", 
        marginBottom: 16 
    },
    label: { 
        fontSize: 15, 
        color: "#333",
        fontFamily: 'Roboto'
    },
    input: {
        borderWidth: 1, 
        borderColor: "#ddd", 
        padding: 12, 
        borderRadius: 12, 
        marginTop: 10, 
        backgroundColor: "#fafafa",
    },
    inputError: { 
        borderColor: "#e53935", 
        backgroundColor: "#fff5f5" 
    },
    passwordContainer: { 
        flexDirection: "row", 
        alignItems: "center" 
    },
    toggleBtn: { 
        marginLeft: 8, 
        paddingVertical: 10, 
        paddingHorizontal: 12 
    },
    toggleText: { 
        color: "#1e88e5", 
        fontWeight: "500" 
    },
    button: {
        marginTop: 18, 
        backgroundColor: "#2D90C4", 
        paddingVertical: 14, 
        borderRadius: 12, 
        alignItems: "center",
    },
    buttonText: { 
        color: "#fff", 
        fontSize: 16, 
        fontWeight: "600" 
    },
    link: { marginTop: 12, textAlign: "center", color: "#2D90C4" },
    errorText: { color: "#e53935", marginTop: 6 },
});

export default LoginScreen
