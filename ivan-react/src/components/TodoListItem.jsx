import React from "react";
import Button from "./Button";

const TodoListItem = ({ item, onDelete }) => {
	const onClickHandler = (message) => {
		onDelete(message);
	};
	return (
		<div>
			<div>{item.value}</div>
			<Button onClick={() => onClickHandler(item.id)}>Delete</Button>
			<hr />
		</div>
	);
};

export default TodoListItem;
