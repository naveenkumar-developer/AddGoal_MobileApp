import { StyleSheet, View, Text } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={{ color: "#FFF" }}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
      goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#3f37c9",
  },
});
