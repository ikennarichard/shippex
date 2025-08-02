import BlueLogoText from "@/assets/images/blue-logo-text.svg";
import { Colors } from "@/constants/Colors";
import { loginSchema } from "@/constants/validation/loginSchema";
import { useAuth } from "@/context/AuthContext";
import { Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const [isMail, setIsMail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const handleSubmit = (values: { email: string; password: string }) => {
    try {
      login(values);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <ActivityIndicator color={Colors.light} />;
  }

  return (
    <SafeAreaView className="flex-1 bg-white px-4 py-5">
      <View className="flex-row justify-between py-6">
        <BlueLogoText style={{ borderWidth: 1 }} />
        <TouchableOpacity
          className="flex-row gap-2 items-center"
          onPress={() => router.navigate("/(auth)")}
        >
          <Octicons name="chevron-left" size={22} color={Colors.light} />
          <Text className="text-primary-light font-medium">Cancel</Text>
        </TouchableOpacity>
      </View>

      <Text className="text-3xl font-semibold text-black mb-2">Login</Text>
      <Text className="text-base text-gray-600 mb-6">
        Please enter your credentials in order to continue.
      </Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, values, errors, touched, isValid }) => (
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
          >
            <View className="gap-4 flex-1 flex-col justify-between">
              {/* <View className="gap-2 text-gray-600">
                <Text className="text-sm">URL</Text>
                <View className="flex-row gap-2  h-16 rounded-md text-sm bg-gray-50 items-center">
                  <Text className="border-r px-2 border-r-gray-200 h-6 bg-gray-50 text-gray-400">
                    https://
                  </Text>
                  <TextInput
                    placeholder="URL"
                    value={values.url}
                    placeholderTextColor={Colors.ritual_cyan}
                    onChangeText={handleChange("url")}
                    onBlur={handleBlur("url")}
                    className="bg-gray-50 text-primary-light w-2/3"
                  />
                </View>
                {touched.url && errors.url && (
                  <Text className="text-red-500 text-xs mt-1">
                    {errors.url}
                  </Text>
                )}
              </View> */}

              <View className="flex-col gap-4">
                <View className="gap-2 text-gray-600">
                  <Text className="text-sm font-regular">Username/Email</Text>
                  <TextInput
                    placeholder="Username / Email"
                    value={values.email}
                    placeholderTextColor={Colors.ritual_cyan}
                    onChangeText={handleChange("email")}
                    onFocus={() => setIsMail(true)}
                    onBlur={() => setIsMail(false)}
                    className={`rounded-md px-4 h-16 text-primary-light bg-gray-50 ${isMail ? "border border-primary-light" : ""}`}
                  />
                  {touched.email && errors.email && (
                    <Text className="text-red-500 text-xs">{errors.email}</Text>
                  )}
                </View>
                <View className="gap-2">
                  <Text className="text-sm text-gray-600 font-regular">
                    Password
                  </Text>
                  <TextInput
                    placeholder="Password"
                    value={values.password}
                    onChangeText={handleChange("password")}
                    placeholderTextColor={Colors.ritual_cyan}
                    onFocus={() => setIsPassword(true)}
                    onBlur={() => setIsPassword(false)}
                    secureTextEntry
                    className={`rounded-md px-4 h-16 text-primary-light bg-gray-50 ${isPassword ? "border border-primary-light" : ""}`}
                  />
                  {touched.password && errors.password && (
                    <Text className="text-red-500 text-xs">
                      {errors.password}
                    </Text>
                  )}
                </View>
              </View>

              <TouchableOpacity
                onPress={() => handleSubmit()}
                disabled={!isValid}
                className={`py-4 rounded-lg w-full ${
                  isValid ? "bg-primary" : "bg-gray-200"
                }`}
              >
                <Text
                  className={`text-center font-semibold ${
                    isValid ? "text-white" : "text-gray-400"
                  }`}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginScreen;
