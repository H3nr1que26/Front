import React, {useState,useEffect} from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native';
import Style from '../assets/css/Css'

export default function Cadastro()
{
const [erroLogin, setErroLogin] = useState(0);

    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={Style.container}>
            <View style={Style.login__logomarca}>
                <Image source={require('../assets/img/logomarca.png')} />
            </View>
            <text><h1>Realize o seu cadastro</h1></text>
            <View style={Style.login__form}>
                <TextInput style={Style.login__input} placeholder='Usuário:' />
                <TextInput style={Style.login__input} placeholder='E-mail:' />
                <TextInput style={Style.login__input} placeholder='Senha:' secureTextEntry={true} />
                <TextInput style={Style.login__input} placeholder='Confirme a Senha:' secureTextEntry={true} />
                <TouchableOpacity style={Style.login__button} >
                    <Text style={Style.login__buttonText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}


