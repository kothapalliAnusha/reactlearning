import { StatusBar, TextInput } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, { backgroundColor: '#FA8072' }]}>
      <View style={styles.topRightButtons}>
        <View style={styles.topRightButtonContainer}>
          <Text style={styles.buttonText}>Home</Text>
          <TouchableOpacity style={styles.topRightButton}>
            <Text style={styles.buttonText}>🏠</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.topRightButtonContainer}>
          <Text style={styles.buttonText}>Share</Text>
          <TouchableOpacity style={styles.topRightButton}>
            <Text style={styles.buttonText}>📤</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>Welcome to My reactlearn App</Text>
      <View style={styles.middleContent}>
        <Text style={styles.text}>Name: K. Anusha</Text>
        <Text style={styles.text}>Registration Number: 22MIS1032</Text>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.textBox}>
          <Text style={styles.text}>Enter Username:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.text}>Enter Password:</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
      </View>
      <TouchableOpacity style={styles.bottomRightButton}>
        <Text style={styles.messageText}>Any Message→</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const handleLoginPress = () => {
  // Handle login button press event
  alert('Login!');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topRightButtons: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topRightButtonContainer: {
    alignItems: 'center',
  },
  topRightButton: {
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 5,
  },
  middleContent: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0000FF', // Blue color for title
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1E90FF', // Blue shining button type
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  bottomRightButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  messageText: {
    fontSize: 16,
    color: '#FFFFFF',
    backgroundColor: '#FF69B4', // Pink color for message button
    padding: 10,
    borderRadius: 5,
  },
  textBox: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    borderRadius: 5,
    width: 200,
  },
});
