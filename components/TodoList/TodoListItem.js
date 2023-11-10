import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodoListItem = ({ todo, onDelete }) => {
  return (
    <View>
      <Text style={styles.txtPrimary}>{todo.title}</Text>
      <TouchableOpacity onPress={() => onDelete(todo.id)}>
        <Text style={styles.txtRed}>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    txtPrimary: {
        fontSize: 18,
        color: 'black',
    },
    txtRed: {
        color: 'red',
        fontSize: 10,
    },
  });

export default TodoListItem;
