import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import Css from '../assets/css/Css';

export default function Salas({navigation}) {
  const users = [
    {
      name: "brynn",
      avatar: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg",
    },
    {
      name: "thot leader",
      avatar:
        "https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
    },
    {
      name: "jsa",
      avatar: "https://uifaces.co/our-content/donated/bUkmHPKs.jpg",
    },
    {
      name: "talhaconcepts",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "andy vitale",
      avatar: "https://uifaces.co/our-content/donated/NY9hnAbp.jpg",
    },
    {
      name: "katy friedson",
      avatar:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg",
    },
  ];

  return (
    <>
      <ScrollView>
        <View style={Css.containerSalas}>
          <Card>
            <Card.Title>CARD WITH DIVIDER</Card.Title>
            <Card.Divider />
            {users.map((u, i) => {
              return (
                <View key={i} style={Css.user}>
                  <Image
                    style={Css.image}
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                  />
                  <Text style={Css.name}>{u.name}</Text>
                </View>
              );
            })}
          </Card>
          <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title>FONTS</Card.Title>
            <Card.Divider />
            <Text style={Css.fonts} h1>
              h1 Heading
            </Text>
            <Text style={Css.fonts} h2>
              h2 Heading
            </Text>
            <Text style={Css.fonts} h3>
              h3 Heading
            </Text>
            <Text style={Css.fonts} h4>
              h4 Heading
            </Text>
            <Text style={Css.fonts}>Normal Text</Text>
          </Card>
          <Card>
            <Card.Title>HELLO WORLD</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={{
                uri:
                  "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
              }}
            />
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Button
            onPress={()=> navigation.navigate('Login')}
              icon={
                <Icon
                  name="arrow-left"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="VIEW NOW"
            />
          </Card>
        </View>
      </ScrollView>
    </>
  );
}

