import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in NayYug?</Text>
        </View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7opNpBXT3Re6cn8zW9_poS6C7KEHZ2mKzIA&s',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          {/* <Text numberOfLines={3}>
            Just like every year, NayaYug brings in new features. This year,
            Macnook is bringing 4 new features, which are almost in production
            rollout.
          </Text> */}
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              )
            }>
            <Text style={styles.readMoreButton}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/hiteshchoudharyofficial/')
            }>
            <Text style={styles.socialLinks}>Follow Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: 'orange',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  card: {
    width: 300,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    marginHorizontal: 20,
    width: 367,
    height: 260,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  cardImage: {
    height: 130,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  readMoreButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'orange', // Updated to orange
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 6,
  },
  socialLinks: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'purple',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 6,
  },
});
