import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { theme } from "./theme";

export default function Index() {
  const handleDelete = () => {
    // Alert.alert works on mobile builds but not on react-native-web
    Alert.alert(
      "Are you sure you want to delete this?",
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => console.log("Ok, deleting"),
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleDelete}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
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
    borderBottomColor: theme.colors.cerulean,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 18,
    fontWeight: 200,
  },
  button: {
    backgroundColor: theme.colors.black,
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
