import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>One</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Two</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Three</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Four</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  card: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardElevated: {
    backgroundColor: 'teal',
    elevation: 10,
  },
  container: {
    padding: 10,
  },
});
