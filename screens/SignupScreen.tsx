import React, { useState } from "react";
import { Alert, Image, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Divider, Text, TextInput, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Space from "../components/Space";
import { ROUTES } from "../navigation";
import { supabase } from "../utils/supabase";

export const SignupScreen = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

 
  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  const signupWithGoogle = () => {};

  const signupWithFacebook = () => {};
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 10, marginTop: "auto", marginBottom: "auto" }}
    >
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <View style={{}}>
          <Text variant="displaySmall" style={{ color: theme.colors.primary }}>
            Sign Up
          </Text>

          <TextInput
            label="Email"
            value={email}
            mode="outlined"
            style={{ width: "100%" }}
            onChangeText={(text) => setEmail(text)}
          />
          <View style={{ height: 20 }} />
          <TextInput
            style={{ width: "100%" }}
            label="Password"
            mode="outlined"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Space />

          <Button onPress={signUpWithEmail} mode="contained">
            Sign up
          </Button>
          <Space />

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                height: 1,
                width: "45%",
                backgroundColor: theme.colors.onBackground,
              }}
            />
            <Text>Or</Text>
            <View
              style={{
                height: 1,
                width: "45%",
                backgroundColor: theme.colors.onBackground,
              }}
            />
          </View>

          <Space />
          <Space />
          <Button
            style={{ borderColor: theme.colors.onBackground }}
            icon={() => <Image source={require("../assets/google.png")} />}
            mode="outlined"
            onPress={signupWithGoogle}
          >
            Continue with Google
          </Button>

          <Space space={10} />
          <Button
            style={{ borderColor: theme.colors.onBackground }}
            mode="outlined"
            onPress={signupWithFacebook}
            icon={() => <Image source={require("../assets/facebook.png")} />}
          >
            Continue with Facebook
          </Button>
        </View>
        <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text variant="labelLarge">Create an  Account?</Text>

            <Button
              mode="text"
                
              onPress={() => navigation.navigate(ROUTES.login)}
            >
              Login
            </Button>
          </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
