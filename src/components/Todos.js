import React from "react";
import {
	connect
} from "react-redux";

import {
	handleAddTodo,
	handleDeleteTodo,
	handleToggleTodo
} from "../actions/todos";

import List from "./List";

class Todos extends React.Component {
	addItem = (e) => {
		e.preventDefault();
		
		this.props.dispatch(handleAddTodo(
			this.input.value,
			() => this.input.value = ''
		));
	}
	
	removeItem = (todo) => {
		this.props.dispatch(handleDeleteTodo(todo));
	}
	
	toggleItem = (id) => {
		this.props.dispatch(handleToggleTodo(id));
	}
	
	render() {
		return (
			<div>
				<h2>TODOS</h2>
				<input type="text" placeholder="Add Todo"
				       ref={(input) => this.input = input} />
				<button type="button"
				        onClick={this.addItem}>Add Todo
				</button>
				<List items={this.props.todos}
				      toggleItem={this.toggleItem}
				      removeItem={this.removeItem} />
			</div>
		);
	}
}

export default connect((state) => ({
	todos: state.todos
}))(Todos);