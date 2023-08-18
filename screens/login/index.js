import { View, Text, TouchableOpacity, Image } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { styled } from "nativewind";
import { useState } from "react";
import CampoInput from "../../assets/components/textinput"
import { app } from "../../firebaseConfig";
import CustomButton from "../../assets/components/custombutton";
import PasswordCases from "../../assets/components/passwordcases";


function Login({ navigation }) {
    const [name, setName] = useState("nome@nome.nome")
    const [password, setPassword] = useState("senha123456")

    const doLogin = () => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, name, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert('logou');
            })
            .catch((error) => {
                alert('erro');
                alert(error.message)
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <View className='bg-purple-bright flex-1 h-full justify-center grid grid-rows-2 gap-8'>
            <View className="w-full flex-[0.4] items-center justify-end ">
                <Image className="w-[170px] h-[160px]" source={require("../../assets/logo.png")} />
                <Text className="text-white text-[22px]">
                    Welcome back
                </Text>
            </View>
            <View className="flex-[0.7] flex">
                <View className="flex h-4/5 justify-evenly items-center">
                    <CampoInput texto={"E-mail"} textoplaceholder={"Enter your E-mail"} />
                    <CampoInput texto={"Password"} textoplaceholder={"Enter your password"} />
                    <PasswordCases />
                    <CustomButton name={"Login"} evento={() => navigation.navigate("mainMenu")} />
                </View>
                <View className="items-center">
                    <TouchableOpacity onPress={() => { navigation.navigate("Cadastro") }}>
                        <Text className="text-[#EACEF6]">
                            {"Don’t have an account yet?"}
                        </Text>
                    </TouchableOpacity>
                    <Text className="text-[#FF48E2]">
                        {"Sign up"}
                    </Text>
                </View>
            </View>

        </View>
    );
}

export default Login;