import { View, Image, StyleSheet } from "react-native";
import logo from "../assets/biblia.png"
import { Background } from "@react-navigation/elements";

export default function Header() {
    return (
    <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
    </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#3B221B",
    },
    logo: {
        width: 50,
        height: 50,
        margin: 10,
    }
});