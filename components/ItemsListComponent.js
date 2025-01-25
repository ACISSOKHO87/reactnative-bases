import { View, FlatList, Text, StyleSheet } from "react-native";

export default function ItemsListComponent({ datas }) {
    return (
        <View style={styles.viewItemsContainer}>
            {/* // FlatList: composant fourni par React Native pour optimiser l'affichage des listes */}
            <FlatList
                // showsVerticalScrollIndicator: pour la bare de scroll vertival: defaultValue = true
                showsVerticalScrollIndicator={false}
                data={datas}
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
    );
}

const styles = StyleSheet.create({
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
});
