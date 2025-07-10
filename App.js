import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
export default function App() {
  const [enteredGoalText, setEnteredGoalText] =  useState('')
  const [goals, setGoals] = useState([])
  function goalInputHandler(text){
    setEnteredGoalText(text)
  }
  function addGoalHandler(){
    setGoals( (prevGoals)=> [...prevGoals, enteredGoalText])
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Enter your goal here..." onChangeText={goalInputHandler}/>
        <View>
        <Button title="Add Goal" onPress={addGoalHandler}/>
        </View>
      </View>
      <View style={styles.goalsContainer}>
      <ScrollView >
        {
          goals.map( (goal, index)=>(
            // GIVING INDEX AS A KEY NOT GOOD BECAUSE IF YOU DELETE ONE VALUE IN THE ARRAY THEN ALL LIST SHOULD RE-INDEXING ALL VALUES. IT IS PROBLEM***
            <View key={index} style={styles.goalItem}>
            <Text style={{color: "#FFF"}}>{goal}</Text>
            </View>
              
          ))
        }
      </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex:1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#3f37c9",
  }
});
