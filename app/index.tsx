import { StyleSheet, Text, View } from "react-native";
import { theme } from "./theme";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  itemContainer: {
    justifyContent: "center",
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 200,
  },
});
