import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LoginScreen = () => {
  const insets = useSafeAreaInsets();
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormFilled = url && email && password;

  return (
    <SafeAreaView style={{ paddingTop: insets.top }} className="flex-1 bg-white px-4">
      <View className="flex-row justify-between items-center py-4">
        <Text className="text-blue-500 font-medium">Cancel</Text>
      </View>

      <Text className="text-3xl font-semibold text-black mb-2">Login</Text>
      <Text className="text-base text-gray-500 mb-6">
        Please enter your First, Last name and your phone number in order to register
      </Text>

      <View className="gap-4">
        <TextInput
          placeholder="URL"
          value={url}
          onChangeText={setUrl}
          className="border border-gray-200 rounded-md px-4 py-3 bg-gray-50 text-black"
        />
        <TextInput
          placeholder="Username / Email"
          value={email}
          onChangeText={setEmail}
          className="border border-gray-200 rounded-md px-4 py-3 bg-gray-50 text-black"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="border border-gray-200 rounded-md px-4 py-3 bg-gray-50 text-black"
        />
      </View>

      <TouchableOpacity
        disabled={!isFormFilled}
        className={`mt-8 py-4 rounded-md ${
          isFormFilled ? 'bg-blue-600' : 'bg-gray-200'
        }`}>
        <Text className={`text-center font-semibold ${
          isFormFilled ? 'text-white' : 'text-gray-400'
        }`}>
          Login
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
