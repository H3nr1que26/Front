import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, Image, View } from "react-native";
import Style from "../assets/css/Css";
import { Text, Button, Input } from "@rneui/themed";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import instance from "../api/ApiManager";

export default function Cadastro({ navigation }) {
  // useEffect(() => {
  //   instance
  //     .post("http://usuario/cadastro", {
  //       usu_nome: Nome,
  //       usu_email: Email,
  //       usu_senha: Senha,

  //     })
  //     .then((response) => setUser(response.data))
  //     .catch((err) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  // }, []);


  const [Nome, setNome] = useState("");
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [Confirma, setConfirma] = useState("");
  const [erronome, setnome] = useState("");
  const [erroemail, setemail] = useState("");
  const [errosenha, setsenha] = useState("");
  const [erroconfirma, setconfirma] = useState("");

  function ValidaCadastro() {
    setnome("");
    if (Nome == "") {
      setnome("Preencha o nome");
    }

    setemail("");
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(Email) === false) {
      console.log("Email is Not Correct");
      setemail("Preencha um E-Mail válido!");
    }

    // setsenha("");
    // let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    // if (reg.test(Senha) === false) {
    //   ///console.log("Email is Not Correct");
    //   setsenha("Preencha um E-Mail válido!");
    // }

    setconfirma("");
    if (Confirma != Senha || Confirma == "") {
      setconfirma("Senha diferentes");
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
          style={{ color: "white" }}
          placeholder="Nome"
          onChangeText={(NomeDigitado) => setNome(NomeDigitado)}
          rightIcon={<AntDesign name="user" size={24} color="white" />}
        />
        {erronome != "" ? (
          <Text style={Style.mensagenNome}>Digite o seu nome</Text>
        ) : (
          ""
        )}
        <Input
          style={{ color: "white" }}
          placeholder="E-mail"
          onChangeText={(EmailDigitado) => setEmail(EmailDigitado)}
          rightIcon={
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="white"
            />
          }
        />

        {erroemail != "" ? (<Text style={Style.mensagenEmail}>Email inválida</Text>) : ("")}

        <Input
          style={{ color: "white" }}
          placeholder="Senha"
          secureTextEntry
          onChangeText={(SenhaDigitado) => setSenha(SenhaDigitado)}
          rightIcon={<AntDesign name="lock" size={24} color="white" />}
        />

        {errosenha != "" ? (
          <Text style={Style.mensagenConfirma}>Senha inválida</Text>
        ) : (
          ""
        )}

        <Input
          style={{ color: "white" }}
          placeholder="Confirma Senha"
          secureTextEntry
          onChangeText={(ConfirmaDigitado) => setConfirma(ConfirmaDigitado)}
          rightIcon={<AntDesign name="lock" size={24} color="white" />}
        />
        {erroconfirma != "" ? (
          <Text style={Style.mensagenConfirma}> Senha não corespondem </Text>
        ) : (
          ""
        )}

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
