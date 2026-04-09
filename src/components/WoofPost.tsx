import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type WoofPostProps = {
  image: string;
  title: string;
  description: string;
};

const WoofPost = ({ image, title, description }: WoofPostProps) => {
  return (
    <View style={styles.container}>
        
      <Image source={{ uri: image }} style={styles.image} />
      
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    flex: 1,
    height: 100,
    resizeMode: 'cover'
  },
  content: {
    flex: 2,
    padding: 12,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default WoofPost;