import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
    ScrollView,
    SafeAreaView,
    FlatList,
} from "react-native";
import { useState } from "react";
export default function App() {
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState([]);
    const onPressBtn = () => {
        setItems((prev) => [...prev, inputValue]);
    };
    return (
        // { ScrollView: permet de scroller pour les composants avec des tailles fix ou pas qui debordent de l'ecran}
        // {SafeAreaView: pour les ios afin que le code ne s'affiche pas sous la barre de baterie et de reseau}: composant principale
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={setInputValue}
                    onSubmitEditing={onPressBtn} // si le user appuie sur le button
                />
                {/*  la propriété onPress que pour les composant comme Button, équivalent de onClick sur React JS  */}
                <Button title="valider" onPress={onPressBtn} />
            </View>
            <View style={styles.itemsContainer}>
                {/* // FlatList: composant fourni par React Native pour optimiser l'affichage des listes */}
                <FlatList
                    // showsVerticalScrollIndicator: pour la bare de scroll vertival: defaultValue = true
                    showsVerticalScrollIndicator={false}
                    data={items}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.item}>
                                <Text key={index} style={styles.text}>
                                    {" "}
                                    {item}
                                </Text>
                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    inputContainer: {
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 8,
        paddingTop: 60,
    },
    input: {
        width: "80%",
        backgroundColor: "white",
        borderWidth: 1,
        marginRight: 4,
        borderRadius: 6,
        borderColor: "grey",
    },
    itemsContainer: {
        width: "100%",
        padding: 8,
    },
    item: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 38,
        marginVertical: 12,
        borderRadius: 8,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    text: {
        color: "white",
        fontSize: 20,
    },
});
