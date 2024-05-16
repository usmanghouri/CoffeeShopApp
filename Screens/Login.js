import React, { useState } from "react";
import { Text,View,TouchableOpacity,Button,TextInput, Alert,ImageBackground } from "react-native";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useNavigation } from "@react-navigation/native";
import Signup from './Signup';
import { signInWithEmailAndPassword } from "firebase/auth";
import Home1 from "./Home1";


export default function login()  {
    const [email,setEmail]= useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation("");

  const handleEmail= (text) =>{
    setEmail(text);
};
const handlePassword= (text) =>{
    setPassword(text);
};
const handleButtonPress = () => {
    navigation.replace("Signup");
  };

  const handlelogin = async()=>{
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
            const user = userCredential.user;
            console.log("USER CREATED SUCCESSFULLY ",user);
            Alert.alert("You have successfully Logged in! ");
            navigation.replace('Home1');
        }
    
        catch (error) {
            console.error('Error registering user:', error);
            Alert.alert('Error', error.message);
        }
    
} ;
    return(
        // <View className="flex flex-col items-center justify-center h-full w-max m-0 p-0 bg-orange-400">
        //   <ImageBackground
        //     source={require("../Images/1.jpg")}
        //     resizeMode="cover"
        //     className="flex-1 justify-center"
        //   >
        //     <TextInput
        //     //style={{width: 200,height:100,backgroundColor:'gray'}}
        //       value={email}
        //       onChangeText={handleEmail}
        //       placeholder="Email"
        //       secureTextEntry
        //       className="w-72 h-12 p-2 mb-4 border border-slate-800 border-solid rounded-lg"

        //       //className="w-72 h-11 border-2  border-slate-500 rounded-xl placeholder-slate-600 bg-gray-400 opacity-80   py-2 pl-9 pr-3 placeholder:text-base placeholder:font-bold  text-black"
        //     />
        //     <TextInput
        //     //style={{width: 200,height:100,backgroundColor:'gray'}}
        //       value={password}
        //       onChangeText={handlePassword}
        //       className="w-72 h-12 p-2 mb-4 border border-slate-800 border-solid rounded-lg"
        //       //className=" w-72 h-11 border-2  border-slate-500 rounded-xl placeholder-slate-600 bg-gray-400  opacity-80 py-2 pl-9 pr-3 placeholder:text-base placeholder:font-bold text-black "
        //       placeholder="Password"
        //       secureTextEntry
        //     />
          

        //   <TouchableOpacity
        //   className="w-20 h-9 bg-slate-950 rounded-full flex items-center justify-center text-white font-semibold transition-colors duration-300 hover:bg-red "
        //   //style={{width: 30,height:50,backgroundColor:"black"}}
        //     onPress={handlelogin}
        //     //className="w-16 h-9 border-2 rounded-xl justify-center items-center bg-zinc-500 opacity-80 border-slate-700  "
        //   >
        //     <Text className="color-white font-style: normal text-base font-semi-bold">
        //       Login
        //     </Text>
        //   </TouchableOpacity>
        
        //     <Text className="mt-8 mb-2 font-medium" >
        //       If you don't have an account. Click below
        //     </Text>
        //     <TouchableOpacity
        //     className="w-20 h-9 bg-slate-950 rounded-full flex items-center justify-center text-white font-semibold transition-colors duration-300 hover:bg-red "
        //       onPress={handleButtonPress}
        //       //className="w-20 h-9  justify-center items-center "
        //     >
        //       <Text className="color-white font-style: italic text-base font-bold">
        //         Sign Up
        //       </Text>
        //     </TouchableOpacity>
        //     </ImageBackground>
        // </View>
        <View className="flex flex-col items-center justify-center h-full w-full m-0 p-0 bg-orange-400">
  <ImageBackground
    source={require("../Images/background.jpg")}
    resizeMode="cover"
    className="flex-1 w-full h-full justify-center items-center"
  >
    <View className="flex flex-col items-center justify-center">
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={handleEmail}
        className="w-72 h-12 p-2 mb-4 border border-slate-200 border-solid rounded-lg bg-slate-300"
        secureTextEntry
        
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={handlePassword}
        secureTextEntry
        className="w-72 h-11 p-2 mb-4 border border-slate-200 border-solid rounded-lg bg-slate-300 "
      />
      <TouchableOpacity
        className="w-20 h-9 bg-orange-950 rounded-full flex items-center justify-center text-white font-semibold transition-colors duration-300 hover:bg-red"
        onPress={handlelogin}
      >
        <Text className="color-white font-style:normal text-base font-semi-bold">
          Login
        </Text>
      </TouchableOpacity>

      <Text className="mt-8 mb-2 font-medium color-white">
        <Text className="color-black">  If you don't  </Text>have an account. Click below
      </Text>
      <TouchableOpacity
        className="w-20 h-9 bg-orange-950 rounded-full flex items-center justify-center text-white font-semibold transition-colors duration-300 hover:bg-red"
        onPress={handleButtonPress}
      >
        <Text className="color-white font-style:italic text-base font-bold">
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
</View>

    );
}