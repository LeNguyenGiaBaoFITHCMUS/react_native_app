import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // jsx
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Welcome</Text>
        <Text style={styles.parent}>
          Parent
          <Text style={styles.child}>Child</Text>
        </Text>
        
      </View>
      <Text style={styles.hello1}>Hello world! Rock is learning SE</Text>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hello world! Rock is learning SE</Text>
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
  },
  header: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  hello1: {
    color: 'orange',
    borderWidth: 2,
    borderColor: 'blue',
    padding: 10
  },
  parent: {
    color: 'brown',
    padding: 10,
    borderColor: 'brown',
    borderWidth: 2
  },
  child: {
    color: 'violet',
    padding: 10,
    borderColor: 'violet',
    borderWidth: 2
  }
});
