import React, {useState,useEffect} from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native';
import Style from '../assets/css/Css'

export default function Salas()
{
const [erroLogin, setErroLogin] = useState(0);

    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={Style.container}>
            <View style={Style.login__logomarca}>
                <Image source={require('../assets/img/logomarca.png')} />
            </View>
            <text><h1>Suas Salas</h1></text>
            
        </KeyboardAvoidingView>
    );
}


