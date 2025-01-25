import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function OnOpenColseModalComponent({ onOpenColseModal }) {
    return (
        <View style={[styles.viewContainer, { paddingHorizontal: 8 }]}>
            <TouchableOpacity
                activeOpacity={0.9}
                style={styles.addBtnItem}
                onPress={onOpenColseModal}
            >
                <Text style={styles.addBtnText}>Ajouter un element </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        width: "100%",
        flexDirection: "row",
        paddingTop: 60,
        marginBottom: 16,
        justifyContent: "center",
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
});
