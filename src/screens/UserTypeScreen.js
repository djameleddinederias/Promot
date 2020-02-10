import React, { memo, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";

const UserTypeScreen = ({navigation}) => (
    
    <Background>
        <BackButton goBack={() => navigation.navigate("HomeScreen")} />
    
        <Logo />
    
        <Header>Vous êtes ?</Header>
    
        <Button mode="contained" onPress={() => navigation.navigate("RegisterScreen")}>
          Achteur
        </Button>
        <Header>Ou</Header>
        <Button 
         mode="outlined" 
        onPress={() => navigation.navigate("StoreScreen")}>
          Un magasin
        </Button>

    
        <View style={styles.row}>
        <Text style={styles.label}>J'ai déja un compte, </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.link}>S'identifier</Text>
        </TouchableOpacity>
        </View>
        
    </Background>
);
const styles = StyleSheet.create({
    label: {
      color: theme.colors.secondary
    },
    button: {
      marginTop: 24
    },
    row: {
      flexDirection: "row",
      marginTop: 4
    },
    link: {
      fontWeight: "bold",
      color: theme.colors.primary
    }
  });

  export default memo(UserTypeScreen);