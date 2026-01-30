import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const Card: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>CARD</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10000,
    width: "100%",
    experimental_backgroundImage: "linear-gradient(red, black)",
    paddingHorizontal: 24,
  },
});

export { Card };
