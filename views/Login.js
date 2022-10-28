import { NavigationHelpersContext } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Image,
  View,
} from "react-native";
import Style from "../assets/css/Css";
import { Text, Card, Button, Icon, Avatar, Input } from "@rneui/themed";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login({ navigation }) {
  const [erroLogin, setErroLogin] = useState(0);

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
          placeholder="E-mail"
          rightIcon={<MaterialCommunityIcons name="email-outline" size={24} color="white" />}
        />
        <Input
          placeholder="Senha"
          rightIcon={<AntDesign name="lock" size={24} color="white" />}
        />
        <Button type="outline" onPress={() => navigation.navigate("Salas")}>
        ENTRAR
        </Button>

        <Button type="outline" onPress={() => navigation.navigate("Cadastro")}>
        CADASTRAR-SE
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
