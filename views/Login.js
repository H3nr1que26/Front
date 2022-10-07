import React, {useState,useEffect} from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native';
import Style from '../assets/css/Css'

export default function Login()
{
const [erroLogin, setErroLogin] = useState(0);

    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={Style.container}>
            <View style={Style.login__logomarca}>
                <Image source={require('../assets/img/logomarca.png')} />
            </View>

            <View style={Style.login__form}>
                <TextInput style={Style.login__input} placeholder='Usuário:' />
                <TextInput style={Style.login__input} placeholder='Senha:' secureTextEntry={true} />
                <TouchableOpacity style={Style.login__button} >
                    <Text style={Style.login__buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}


