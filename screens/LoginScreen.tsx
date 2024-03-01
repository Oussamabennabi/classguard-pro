import React, { useState } from "react";
import { Alert, Image, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Divider, Text, TextInput, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Space from "../components/Space";
import { ROUTES } from "../navigation";
import { supabase } from "../utils/supabase";
import GoogleSignIn from "../config/google-signin";

export const LoginScreen = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = () => {};

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  const signInWithFacebook = () => {};
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 10, marginTop: "auto", marginBottom: "auto" }}
    >
      <KeyboardAwareScrollView enableOnAndroid={true}  >
        <View style={{justifyContent:"center"}}>
          <Text variant="displaySmall" style={{ color: theme.colors.primary }}>
            Welcome back!
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

          <Button 
          disabled={loading} onPress={signInWithEmail} mode="contained">
            Sign in
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
            disabled={loading}
            onPress={signInWithGoogle}
          >
            Continue with Google
          </Button>

          <Space space={10} />
          <Button
            style={{ borderColor: theme.colors.onBackground }}
            mode="outlined"
            onPress={signInWithFacebook}
            disabled={loading}
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
            <Text variant="labelLarge">Dont have an Account?</Text>

            <Button
              mode="text"
                disabled={loading}
              onPress={() => navigation.navigate(ROUTES.signup)}
            >
              SignUp
            </Button>
          </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
