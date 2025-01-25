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
import ModalComponent from "./components/ModalComponent";
import ItemsListComponent from "./components/ItemsListComponent";
import OnOpenColseModalComponent from "./components/OpenCloseModalComponent";
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
        onOpenColseModal();
    };
    return (
        // { ScrollView: permet de scroller pour les composants avec des tailles fix ou pas qui debordent de l'ecran}
        // {SafeAreaView: pour les ios afin que le code ne s'affiche pas sous la barre de baterie et de reseau}: composant principale
        <SafeAreaView style={styles.container}>
            <OnOpenColseModalComponent onOpenColseModal={onOpenColseModal} />
            <ItemsListComponent datas={items} />
            <ModalComponent
                isModalVisible={isModalVisible}
                inputValue={inputValue}
                setInputValue={setInputValue}
                addItem={addItem}
                onOpenColseModal={onOpenColseModal}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
});
