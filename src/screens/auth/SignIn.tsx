import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {Fragment, useState} from 'react';

const SignIn = () => {
  const [modeOfLogin, setModeOfLogin] = useState({
    name: 'email',
    current: true,
  });
  return (
    <View className="bg-white flex justify-between flex-1 h-screen">
      <View className="flex px-5 relative">
        <Image
          source={require('../../assets/logo.png')}
          className="w-48 h-48 mt-10  -ml-16"
        />
        <View className="absolute inset-x-0 px-5 mt-44">
          <Text className="text-black pl-1 text-4xl font-semibold">Login</Text>
          {modeOfLogin.name === 'email' ? (
            <Text className="text-[16px] pl-1 mt-3">
              We will send you a verification code via Email
            </Text>
          ) : (
            <Text className="text-[16px] pl-1 mt-3">
              We will send you a verification code via SMS
            </Text>
          )}
        </View>
        <View className="flex mt-8 items-center justify-between flex-row rounded-md h-[50px] px-1 bg-gray-200">
          <TouchableWithoutFeedback
            onPress={() => setModeOfLogin({name: 'email', current: true})}>
            <View
              className={
                modeOfLogin.name === 'email' && modeOfLogin.current === true
                  ? 'bg-blue-600 rounded-md w-1/2 p-2 flex justify-center items-center'
                  : 'rounded-md w-1/2 p-2 flex justify-center items-center'
              }>
              <Text
                className={
                  modeOfLogin.name === 'phone' && modeOfLogin.current === true
                    ? 'text-lg text-blue-400'
                    : 'text-lg text-white'
                }>
                Email
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => setModeOfLogin({name: 'phone', current: true})}>
            <View
              className={
                modeOfLogin.name === 'phone' && modeOfLogin.current === true
                  ? 'bg-blue-600 rounded-md w-1/2 p-2 flex justify-center items-center'
                  : 'rounded-md w-1/2 p-2 flex justify-center items-center'
              }>
              <Text
                className={
                  modeOfLogin.name === 'email' && modeOfLogin.current === true
                    ? 'text-lg text-blue-400'
                    : 'text-lg text-white'
                }>
                Phone
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        {modeOfLogin.name === 'email' ? (
          <Fragment>
            <View className="mt-7">
              <TextInput
                className="border-[0.5px] mb-4 px-5 py-4 rounded-md border-gray-400"
                placeholder="Email"
              />
              <TextInput
                className="border-[0.5px] px-5 py-4 rounded-md border-gray-400"
                placeholder="Password"
              />
            </View>
            <View className="flex justify-end items-end mt-4">
              <Text className="text-blue-500 font-medium">
                Forgot Password?
              </Text>
            </View>
            <View className="mt-7">
              <TouchableOpacity
                className="bg-blue-600 rounded-md  h-14 flex items-center justify-center"
                onPress={() => {
                  console.log('Signing In...');
                }}>
                <Text className="text-2xl text-white font-medium">Login</Text>
              </TouchableOpacity>
            </View>
          </Fragment>
        ) : (
          <Fragment>
            <View className="mt-7">
              <TextInput
                className=" border-[0.5px] mb-4 px-5 py-4 rounded-md border-gray-400"
                placeholder="+233  |  (___) ___-__-__"
              />
            </View>
            <View className="mt-7">
              <TouchableOpacity
                className="bg-blue-600 rounded-md  h-14 flex items-center justify-center"
                onPress={() => {
                  console.log('Signing In...');
                }}>
                <Text className="text-xl text-white ">Send me SMS</Text>
              </TouchableOpacity>
            </View>
          </Fragment>
        )}
      </View>
      <View className="flex justify-center items-center mb-14">
        <Text className="text-base">
          New member?{' '}
          <Text className="text-blue-500">Create an Account {' >'}</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignIn;
