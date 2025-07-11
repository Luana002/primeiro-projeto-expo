import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

export default function SearchInput({ onSearch }: { onSearch: (text: string) => void }) {
    const [value, setValue] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <Feather name="search" size={20} color="#ccc" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Digite o versículo que deseja. Ex: João 3:16"
                    placeholderTextColor="#888"
                    value={value}
                    onChangeText={setValue}
                    onSubmitEditing={() => onSearch(value)}
                    returnKeyType="search"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        width: "90%"
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 5,
        backgroundColor: "#ffffff",
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 5,
        fontSize: 16,
    },
});