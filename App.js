import { StyleSheet, Text, TextInput, View } from 'react-native';
import Box from './components/Box';
import { useEffect, useState } from 'react';

export default function App() {
  const [color, setColor] = useState("");

useEffect(()=>{
  setTimeout(displayMessage, 5000);
},[]);

const displayMessage = () => {
    console.log("hello");
}

  console.log(color);
  return (
    <View>
      <View style={styles.container}>
        <Text style={{
          fontWeight: "bold",
          fontSize: 20,
        }}>Color Box</Text>
      </View>
      <Box backgroundcolor={color.toLowerCase()} />
      <TextInput
        style={{
          margin: 10,
          borderWidth: 2,
          borderColor: "gray",
          height: 35,
        }}
        onChangeText={(value) => setColor(value)}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
  },
});
