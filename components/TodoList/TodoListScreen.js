import React, { useState } from 'react';
import { View, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import TodoListItem from './TodoListItem';

const TodoListScreen = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [searchText, setSearchText] = useState('');

  const addTodo = () => {
    if (newTodoTitle.trim() !== '') {
      const newTodo = {
        id: Math.random().toString(),
        title: newTodoTitle,
      };
      setTodos([...todos, newTodo]);
      setNewTodoTitle('');
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const reversedTodos = [...filteredTodos].reverse();

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher par titre"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

      <FlatList
        data={reversedTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoListItem todo={item} onDelete={deleteTodo} />
        )}
      />

      <View style={styles.addTodoContainer}>
        <TextInput
          style={styles.addTodoInput}
          placeholder="Nouvelle Todo"
          value={newTodoTitle}
          onChangeText={(text) => setNewTodoTitle(text)}
        />
        <Button title="Ajouter" onPress={addTodo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  searchContainer: {
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  addTodoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addTodoInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 10,
  },
});

export default TodoListScreen;
