import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just and Extra Ordinary Teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Bisheshwor Chhetri',
      status: 'Senior Backend Scientist',
      imageUrl:
        'https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/367392614_3602250906758925_291200697115016723_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KWyeyUp8wwMQ7kNvgFD6cIV&_nc_ht=scontent.fktm6-1.fna&_nc_gid=AOpTb5NrhYvLNhR3gF7kiAa&oh=00_AYDPIl-B16riGYYBRLtiijL2fuIOZ_f6uox2AFnPnqc4MQ&oe=66F0DE07',
    },
    {
      uid: 3,
      name: 'Raj Singh',
      status: 'Senior Flutter Engineer',
      imageUrl:
        'https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/459067020_1041626390790532_7788576404133419327_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JysaI4fsg-EQ7kNvgFs_y1X&_nc_ht=scontent.fktm6-1.fna&_nc_gid=A-xTzyCXKLoMpvkrwadj69e&oh=00_AYDE9Eg7OEGkdP8yMTnIeOHHzALY3cghbWx5DAEjp_aNMA&oe=66F0D2EB',
    },
    {
      uid: 4,
      name: 'Bina Mam',
      status: 'Senior Graphic Designer',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdF3V_2ChXsiL9hdq9Wihzx5jqg7TEn47bg&s',
    },

    {
      uid: 5,
      name: 'Rohan Shrestha',
      status: 'Senior NextJs Engineer',
      imageUrl:
        'https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-1/316114508_1281958809013576_7689457327476519862_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=eIEKQo5I6lkQ7kNvgFZ4skT&_nc_ht=scontent.fktm6-1.fna&_nc_gid=AopjTHTfaUNnweNHEbkHrKE&oh=00_AYAYstRle-BohcPGZn36lda1sbmzFrwr8CYrFegHXtjYGg&oe=66F0F9E1',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View style={styles.textContainer}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginTop: 20,
    color: 'teal',
  },
  container: {
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  userImage: {
    width: 60,
    borderRadius: 100,
    height: 60,
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontWeight: '700',
    fontSize: 18,
    color: 'black',
  },
  userStatus: {
    fontSize: 15,
    color: 'grey',
  },
  followButton: {
    backgroundColor: '#0A79DF',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  followButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
