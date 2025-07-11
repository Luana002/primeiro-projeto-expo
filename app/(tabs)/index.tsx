import { View, Image, StyleSheet } from "react-native";
import Header from "./Header";
import SearchInput from "./SearchInput";
import largeImage from "../assets/imagemGemini.png"
//import VerseDisplay from "./VerseDisplay";
import { useState } from "react";

export default function Index() {
  const [searchText, setSearchText] = useState("");
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={largeImage} style={styles.mainImage} />
        <SearchInput onSearch={setSearchText} />
        {/* <VerseDisplay searchText={searchText} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bda385ff",
    flex: 1,
  },
  content: {
    alignItems: "center",
  },
  mainImage: {
    width: "100%",
    height: 200,
  },
});