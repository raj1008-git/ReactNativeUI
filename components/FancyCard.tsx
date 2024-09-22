import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Gadgets</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://mudita.com.np/media/catalog/product/cache/036aa47742df3225beb764097d8b4fe8/m/a/macbook-pro-2023-m3-pro-price-in-nepal-2024.webp',
          }}
          style={styles.cardImage}></Image>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Apple</Text>
          <Text style={styles.cardLabel}>Mac Book Pro</Text>
          <Text style={styles.cardDescription}>Best & Reliable Machine</Text>
          <Text style={styles.cardFooter}>$1000</Text>
        </View>
      </View>
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
    width: 360,
    height: 360,
    borderRadius: 20,
    // paddingLeft: 20,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    // backgroundColor: 'pink',
    marginLeft: 20,
    color: '#000000',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 20,
    marginBottom: 4,
  },
  cardDescription: {
    color: '#000000',
    marginTop: 6,
    fontSize: 16,
  },
  cardFooter: {
    marginTop: 10,
    color: 'green',
    fontSize: 20,
  },
});
