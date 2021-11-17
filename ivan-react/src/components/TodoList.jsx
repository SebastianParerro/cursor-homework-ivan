import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, removeListItem }) => {
	return (
		<div>
			{todos.map((todo, i) => {
				return <TodoListItem item={todo} key={todo.id} onDelete={removeListItem} />;
			})}
		</div>
	)
}

export default TodoList;