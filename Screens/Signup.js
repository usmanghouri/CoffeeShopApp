import React, { useState } from "react";
import { Text,View,TouchableOpacity,Button,TextInput, Alert,ImageBackground } from "react-native";

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { getAuth } from 'firebase/auth';
import { useNavigation } from "@react-navigation/native";

export default function Signup() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigation = useNavigation();

    const handleEmail= (text) =>{
        setEmail(text);
    };
    const handlePassword= (text) =>{
        setPassword(text);
    };
    const handleButtonPress = () => {
        navigation.replace("login");
      };

    const handleSubmit = async ()=>{
        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth,email,password);
            const user = userCredential.user;
            console.log("USER CREATED SUCCESSFULLY ",user);
            Alert.alert("New User has been created!You can now Login! ");
            navigation.replace('Home');
        } catch (error) {
            console.error('Error registering user:', error);
            Alert.alert('Error', error.message);
        }
    };

    return(
        <View className="flex flex-col items-center justify-center h-full w-max m-0 p-0 bg-orange-400">
          <ImageBackground
            source={require("../Images/background.jpg")}
            resizeMode="cover"
            className="flex-1 w-full h-full justify-center items-center"
          >
            <View className="flex flex-col items-center justify-center">
            <TextInput 
             placeholder="Email"
             value={email}
             className="w-72 h-12 p-2 mb-4 border border-slate-200 border-solid rounded-lg bg-slate-300"
              
              onChangeText={handleEmail}
            //className='w-72 h-11 border-2  border-slate-500 rounded-xl placeholder-slate-600 bg-gray-400 opacity-60 text-black py-2 pl-9 pr-3 placeholder:text-base placeholder:font-bold '
             
            secureTextEntry
        />
        <TextInput
        
            value={password}
          onChangeText={handlePassword}
          //className='w-72 h-11 border-2  border-slate-500 rounded-xl placeholder-slate-600 bg-gray-400 opacity-60 text-black py-2 pl-9 pr-3 placeholder:text-base placeholder:font-bold '
          placeholder="Password"
          className="w-72 h-12 p-2 mb-4 border border-slate-200 border-solid rounded-lg bg-slate-300"
          secureTextEntry
          //keyboardType="numeric"
        
        />
        <TouchableOpacity onPress={handleSubmit}
        className="w-20 h-9 bg-orange-950 rounded-full flex items-center justify-center text-white font-semibold transition-colors duration-300 hover:bg-red">
        <Text className="color-white font-style:normal text-base font-semi-bold">
          Sign Up
        </Text>
      </TouchableOpacity> 
      <Text className="mt-8 mb-2 font-medium color-white">
        <Text className="color-black">If you already </Text>have an account.Click below
      </Text>
          <TouchableOpacity onPress={handleButtonPress} 
          className="w-20 h-9 bg-orange-950 rounded-full flex items-center justify-center text-white font-semibold transition-colors duration-300 hover:bg-red"
          >
            <Text className="color-white font-style:italic text-base font-bold"
            >Login</Text>
          </TouchableOpacity>
          </View>
          </ImageBackground>
        </View>
        
    );
};

