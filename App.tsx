import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>("Rock");
  const [test, setTest] = useState({
    name: "Bao",
    age: 22
  });
  const [count, setCount] = useState(0);
  // jsx
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>Hello world! {test.name} is learning SE</Text>
      <Text style={{color: 'red', fontSize: 60}}>count = {count}</Text>
      <View>
        {/* <Button title='Increase' onPress={() => alert("tap tap")}/> */}
        <Button color={'brown'} title='Increase' onPress={() => setCount(count + 2)}/>
      </View>
    </View>
  );
}

// css in javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
