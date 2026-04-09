import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';

type WoofCardProps = {
  name: string;
  avatar: string;
};

const WoofCard = ({ name, avatar }: WoofCardProps) => {
  return (
    <View style={styles.card}>
      <Avatar url={avatar} />
      <Text style={styles.title}>{name.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
    marginRight: 16,
    width: 100,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
    color: '#333',
  },
});

export default WoofCard;