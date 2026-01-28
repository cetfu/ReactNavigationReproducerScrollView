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
    height: 326,
    width: "100%",
    backgroundColor: 'red',
    paddingHorizontal: 24,
  },
});

export { Card };
