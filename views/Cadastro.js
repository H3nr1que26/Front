import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, Image, View } from "react-native";
import Style from "../assets/css/Css";
import { Text, Button, Input } from "@rneui/themed";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
export default function Cadastro({ navigation }) {
  const [Nome, setNome] = useState("");
  const [erro, setErro] = useState("");

  function ValidarLogin() {
    if (Nome == "") {
      setErro("Preencha o nome");
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

      <Text style={Style.login__logomarca}>Realize o seu cadastro</Text>
      <View style={Style.login__form}>

        <Input
          style={{ color: 'white' }}
          placeholder="Nome"
          onChangeText={(NomeDigitado) => setNome(NomeDigitado)}
          rightIcon={<AntDesign name="user" size={24} color="white" />}
        />
        {

          erro != '' ? <Text style={{ color: 'white', alignItems: 'center' }}>Digite o seu nome</Text> : ''
        }
        <Input
          style={{ color: 'white' }}
          placeholder="E-mail"
          rightIcon={
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="white"
            />
          }
        />
        <Input
          style={{ color: 'white' }}
          placeholder="Senha"
          rightIcon={<AntDesign name="lock" size={24} color="white" />}
        />
        <Input
          style={{ color: 'white' }}
          placeholder="Confirma Senha"
          rightIcon={<AntDesign name="lock" size={24} color="white" />}
        />
        <Button type="outline" onPress={() => ValidarLogin()}>
          CADASTRAR
        </Button>

        <Button type="outline" onPress={() => navigation.navigate("Login")}>
          VOLTAR
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
