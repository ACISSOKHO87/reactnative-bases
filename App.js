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
    Modal,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
const logo = require("./assets/logo-react-native.png");
export default function App() {
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState([]);
    // state pour rendre visible ou non le modal
    const [isModalVisible, setIsModalVisible] = useState(false);
    // function qui permet d'ouvrir ou de fermer le modal
    const onOpenColseModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    // fonction pour ajout d'un element dans la liste
    const addItem = () => {
        setItems((prev) => [...prev, inputValue]);
        setInputValue("");
    };
    return (
        // { ScrollView: permet de scroller pour les composants avec des tailles fix ou pas qui debordent de l'ecran}
        // {SafeAreaView: pour les ios afin que le code ne s'affiche pas sous la barre de baterie et de reseau}: composant principale
        <SafeAreaView style={styles.container}>
            <View style={[styles.viewContainer, { paddingHorizontal: 8 }]}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.addBtnItem}
                    onPress={onOpenColseModal}
                >
                    <Text style={styles.addBtnText}>Ajouter un element </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewItemsContainer}>
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
            <Modal visible={isModalVisible} animationType="slide">
                <KeyboardAvoidingView
                    style={styles.keyBordView}
                    behavior="heigh"
                >
                    <View style={styles.modalViewContainer}>
                        <View style={styles.imageContainer}>
                            <Image source={logo} style={styles.image} />
                        </View>
                        <View style={styles.modalView}>
                            <View style={styles.viewContainer}>
                                <TextInput
                                    style={styles.input}
                                    value={inputValue}
                                    onChangeText={setInputValue}
                                    onSubmitEditing={() => {
                                        addItem();
                                        onOpenColseModal();
                                    }}
                                />
                            </View>
                            <View style={styles.viewBtnContainer}>
                                <TouchableOpacity
                                    style={[
                                        styles.modalBtn,
                                        { backgroundColor: "blue" },
                                    ]}
                                    onPress={() => {
                                        addItem();
                                        onOpenColseModal();
                                    }}
                                >
                                    <Text style={styles.modalBtnText}>
                                        Ajouter
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.modalBtn,
                                        { backgroundColor: "red" },
                                    ]}
                                    onPress={() => {
                                        onOpenColseModal();
                                    }}
                                >
                                    <Text style={styles.modalBtnText}>
                                        close
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    viewContainer: {
        width: "100%",
        flexDirection: "row",
        paddingTop: 60,
        marginBottom: 16,
        justifyContent: "center",
    },
    input: {
        width: "100%",
        height: 42,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "grey",
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    addBtnItem: {
        width: "100%",
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
    },
    addBtnText: {
        color: "white",
        fontSize: 20,
    },
    viewItemsContainer: {
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
    keyBordView: {
        flex: 1,
    },
    modalViewContainer: {
        flex: 1,
        backgroundColor: "grey",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingHorizontal: 24,
    },

    imageContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 12,
    },
    modalView: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    viewBtnContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    modalBtn: {
        width: "40%",
        height: 42,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    modalBtnText: {
        color: "white",
        fontSize: 20,
    },
});
