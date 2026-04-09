import React from 'react';
import { Image, StyleSheet } from 'react-native';

type AvatarProps = {
  url: string;
};

const Avatar = ({ url }: AvatarProps) => {
  return (
    <Image 
      source={{ uri: url }} 
      style={styles.avatar} 
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 64, 
    height: 64,
    borderRadius: 32,
    backgroundColor: '#ccc',
  },
});

export default Avatar;