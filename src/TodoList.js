import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: []
        }
        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
    }

    remove(id){
        this.setState({
            todos: this.state.todos.filter(t =>  t.id !== id )
        })
    }

    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    update(id, newTask){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: newTask}
            }
            return todo
        })

        this.setState({todos: updatedTodos})
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo key={todo.id} id={todo.id} task={todo.task} removeTodo={this.remove} updateTodo={this.update}/>
        });


        return (
            <div>
                <h1>Todo List!</h1>
                <ul>
                    <TodoForm createTodo = {this.create} removeTodo={this.remove} />
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList