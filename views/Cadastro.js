import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, Image, View } from "react-native";
import Style from "../assets/css/Css";
import { Text, Button, Input } from "@rneui/themed";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Cadastro({ navigation }) {
  
  const [Nome, setNome] = useState("");
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [Confirma, setConfirma] = useState("");
  const [erro, setErro] = useState("");
  function ValidaCadastro() {
    if (Nome == "") {
      setErro("Preencha o nome");
    } else {
      setErro('');
    }

    if (Email == "" || Email != "@") {
      setErro("Preencha o seu Email");
    } else {
      setErro('');
    }

    if (Senha == "" || Senha != "(/^(? =. *[A-Z]. +$/)" || Senha != "(/^(? =. *[a-z]. +$/)" || Senha != "(/^(? =. *[0-9]. +$/)" || Senha.length < 8 || Senha.length < 16) {
      setErro("Senha Senha inválida");
    } else {
      setErro('');
    }

    if (Confirma != Senha || Confirma == "") {
      setErro("Senha diferentes");
    } else {
      setErro('')
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

          erro != '' ? <Text style={Style.login__logomarca}>Digite o seu nome</Text> : ''
        }
        <Input
          style={{ color: 'white' }}
          placeholder="E-mail"
          onChangeText={(EmailDigitado) => setEmail(EmailDigitado)}
          rightIcon={<MaterialCommunityIcons name="email-outline" size={24} color="white" />
          }
        />

        {
          erro != '' ? <Text style={Style.login__logomarca}>Email inválida</Text> : ''
        }

        <Input
          style={{ color: 'white' }}
          placeholder="Senha"
          secureTextEntry
          onChangeText={(SenhaDigitado) => setSenha(SenhaDigitado)}
          rightIcon={<AntDesign name="lock" size={24} color="white" />}
        />

        {
          erro != '' ? <Text style={Style.login__logomarca}>Senha inválida</Text> : ''
        }

        <Input
          style={{ color: 'white' }}
          placeholder="Confirma Senha"
          secureTextEntry
          onChangeText={(ConfirmaDigitado) => setConfirma(ConfirmaDigitado)}
          rightIcon={<AntDesign name="lock" size={24} color="white" />}
        />
        {
          erro != '' ? <Text style={Style.login__logomarca}>Senha inválida</Text> : ''
        }



        <Button type="outline" onPress={() => ValidaCadastro()}>
          CADASTRAR
        </Button>

        <Button type="outline" onPress={() => navigation.navigate("Login")}>
          VOLTAR
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
