import React from 'react';
import { StyleSheet } from 'react-native';
import { Fab } from 'react-native-paper';

const AddTodoButton = () => (
    <Fab
      style={styles.fab}
      small
      icon="plus"
      onPress={() => console.log('Pressed')}
    />
  );

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  })

export default AddTodoButton;