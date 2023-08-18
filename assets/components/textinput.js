import { View, Text, TouchableOpacity,  TextInput} from "react-native"; 

const CaixaInput = ({mudanca, texto,  textoplaceholder}) => {
    return (
        <View className="w-[80%]" >
            <Text className="text-white font-semibold pb-2">{texto}</Text> 
            <TextInput className="p-3 rounded-lg text-[#cccbcb] border border-[#BB0FD7]" onChange={mudanca} placeholder={textoplaceholder}>
            </TextInput>
        </View>
    );
}

export default CaixaInput;