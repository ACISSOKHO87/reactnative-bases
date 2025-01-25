import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonComponent({ text, onPress, color }) {
    return (
        <TouchableOpacity
            style={[styles.modalBtn, { backgroundColor: color }]}
            onPress={onPress}
        >
            <Text style={styles.modalBtnText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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
