import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

interface ITodo {
  id: number;
  name: string;
}

export default function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if(!todo) return;
    setListTodo([...listTodo, 
      {id: randomInteger(1, 10000), name: todo}
    ])
    setTodo("")
  }

  // jsx
  return (
    <View style={styles.container}>
      {/* header */}
      <Text style={styles.header}>Todo App</Text>

      {/* form */}
      <View style={styles.body}>
        {/* <TextInput style={styles.todoInput}></TextInput> */}
        <TextInput 
          value={todo}
          style={styles.todoInput}
          onChangeText={(value) => setTodo(value)}
        />

        <Button 
          title='Add todo'
          onPress={handleAddTodo}
        />
      </View>

      {/* list todo */}
      <View style={[styles.body, {flex: 1}]}> 
        {/* thêm flex: 1 để fix lỗi ko cuộn xem đc all item */}
        {/* <Text>List todo: {todo}</Text>
        <Text>{JSON.stringify(listTodo)}</Text> */}
        <FlatList
          data={listTodo}
          keyExtractor={item => item.id + ""}
          renderItem={data => {
            return (
              <Text style={styles.todoItem}>{data.item.name}</Text>
            )
          }}
        />
      </View>
    </View>
  );
}

// css in javascript
const styles = StyleSheet.create({
  header:{
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    // paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "orange",
    padding: 5,
    margin: 15,
  },
  body: {
    padding: 10,
    marginBottom: 20,
  },
  todoItem: {
    fontSize: 20,
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 10,
    padding: 10,
  }
});
