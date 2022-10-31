import { NavigationHelpersContext } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, Image, View,} from "react-native";
import Style from "../assets/css/Css";
import { Text, Card, Button, Icon, Avatar, Input } from "@rneui/themed";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login({ navigation }) {
 
  const [erroLogin, setErroLogin] = useState(0);
  const [Email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [Senha, setSenha] = useState("");


  function ValidarLogin() {
    if (Email == "" || Email != "@") {
      setErro("Preencha o seu Email");
    } else {
      setErro('');
    }

    if (Senha == "" || Senha.length < 8 || Senha.length < 16) {
      setErro("Senha inválida");
    } else {
      setErro('');
    }

  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={Style.container}
    >
      <View style={Style.login__logomarca}>
        <Image source={require("../assets/img/logomarca.png")} />
      </View>

      <View style={Style.login__form}>
        <Input
        style={{ color: 'white' }}
          placeholder="E-mail"
          onChangeText={(EmailDigitado) => setEmail(EmailDigitado)}
          rightIcon={<MaterialCommunityIcons name="email-outline" size={24} color="white" />}
        />


        {

          erro != '' ? <Text style={Style.login__logomarca}>Digite o seu Email</Text> : ''
        }

        <Input
        style={{ color: 'white' }}
          placeholder="Senha"
          onChangeText={(SenhaDigitado) => setSenha(SenhaDigitado)}
          rightIcon={<AntDesign name="lock" size={24} color="white" />}
        />
        {

          erro != '' ? <Text style={Style.login__logomarca}>Senha inválida</Text> : ''
        }


        <Button type="outline" onPress={() => ValidarLogin()}>
          ENTRAR
        </Button>

        <Button type="outline" onPress={() => navigation.navigate("Cadastro")}>
          CADASTRAR-SE
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
