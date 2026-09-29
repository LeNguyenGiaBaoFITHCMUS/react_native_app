import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [students, setStudent] = useState([
    {id: 1, name: 'Rock1', age: 22},
    {id: 2, name: 'Rock2', age: 22},
    {id: 3, name: 'Rock3', age: 22},
    {id: 4, name: 'Rock4', age: 22},
    {id: 5, name: 'Rock5', age: 22},
    {id: 6, name: 'Rock6', age: 22},
    {id: 7, name: 'Rock7', age: 22},
    {id: 8, name: 'Rock8', age: 22},
    {id: 9, name: 'Rock9', age: 22},
    {id: 10, name: 'Rock10', age: 22},
  ]);

  // jsx
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>Hello world!</Text>
      <FlatList
        data={students}
        // numColumns={2}
        keyExtractor={item => item.id + ''} // string
        renderItem={data => { // renderItem={{item} => {... <Text>{item.name}</Text> ...}}
          return (
            <View style={{
              padding: 30,
              backgroundColor: 'blue',
              marginBottom: 20,
              marginHorizontal: 30,
            }}>
              <Text>{data.item.name}</Text>
            </View>
          )
        }}
      />
      {/* <ScrollView>
        {students.map(item => {
          return (
            <View key={item.id} style={{
              padding: 30,
              backgroundColor: 'orange',
              marginBottom: 20,
            }}>
              <Text>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
    </View>
  );
}

// css in javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
