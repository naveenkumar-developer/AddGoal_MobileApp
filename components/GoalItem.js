import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={{ color: "#FFF", padding: 8 }}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#3f37c9",
  },
  pressedItem: {
    opacity: 0.6,
  },
});
