import { FlatList, StyleSheet, View, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function startAddGoalHandler() {
    setModalVisible(true);
  }
  function endAddGoalHandler() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: enteredGoalText, id: new Date() },
    ]);
    setModalVisible(false);
  }

  function deleteGoalHandler(id) {
    setGoals((goals) => {
      return goals.filter((goalItem) => goalItem.id !== id);
    });
  }
  return (
    <>
      <StatusBar style='inverted' />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={isModalVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={(item) => {
              return (
                <GoalItem
                  text={item.item.text}
                  id={item.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
