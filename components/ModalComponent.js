import {
    Modal,
    KeyboardAvoidingView,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
} from "react-native";

const logo = require("../assets/logo-react-native.png");
import ButtonComponent from "./ButtonComponent";
export default function ModalComponent({
    isModalVisible,
    inputValue,
    setInputValue,
    addItem,
    onOpenColseModal,
}) {
    return (
        <Modal visible={isModalVisible} animationType="slide">
            <KeyboardAvoidingView style={styles.keyBordView} behavior="heigh">
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
                            />
                        </View>
                        <View style={styles.viewBtnContainer}>
                            <ButtonComponent
                                text="Ajouter"
                                onPress={addItem}
                                color="blue"
                            />
                            <ButtonComponent
                                text="Fermer"
                                onPress={onOpenColseModal}
                                color="red"
                            />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
}

const styles = StyleSheet.create({
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
    viewContainer: {
        width: "100%",
        flexDirection: "row",
        paddingTop: 60,
        marginBottom: 16,
        justifyContent: "center",
    },
    viewBtnContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
