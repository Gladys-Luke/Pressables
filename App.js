import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLoginPress = () => {
    // Toggle the login status
    setLoggedIn(!isLoggedIn);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Little Lemon</Text>
      </View>

      {!isLoggedIn ? (
        <View style={styles.login}>
          <View>
            <Text style={styles.intro}>Welcome to Little{"\n"} Lemon</Text>
            <Text style={styles.loginText}>Login to continue</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Pressable
            style={({ pressed }) => [
              styles.loginButton,
              { backgroundColor: pressed ? "#EDEFEE" : "#EE9972" },
            ]}
            onPress={handleLoginPress}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.successContainer}>
        <Text style={styles.intro}>Welcome to Little{"\n"} Lemon</Text>
          <Text style={styles.successMessage}>You are logged in!</Text>
        </View>
      )}

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          All rights reserved by Little Lemon, 2022
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EE9972",
  },
  header: {
    marginVertical: 40,
    color: "#000",
    fontSize: 30,
    textAlign: "center",
  },

  login: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  intro: {
    marginTop: 30,
    marginBottom: 50,
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
  },
  loginText: {
    color: "#fff",
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  loginButton: {
    backgroundColor: "#EE9972",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  successContainer: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  successMessage: {
    marginTop: 20,
    color: "#fff",
    fontSize: 30,
    fontWeight: "400",
  },
  footer: {
    backgroundColor: "#EE9972",
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    color: "#000",
    fontStyle: "italic",
    fontWeight: "700",
  },
});

export default LoginScreen;






