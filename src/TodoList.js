import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import './TodoList.css'
import './Todo.css'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: []
        }
        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
        this.toggleCompleted = this.toggleCompleted.bind(this)
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
    
    toggleCompleted(id){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo
        })

        this.setState({todos: updatedTodos})
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo key={todo.id} id={todo.id} task={todo.task} removeTodo={this.remove} updateTodo={this.update} completed={todo.completed} toggleTodo={ this.toggleCompleted }/>
        });


        return (
            <div className="TodoList">
                <h1>Todo List!<span>Make a plan and execute it</span></h1>
                <ul>
                    <TodoForm createTodo = {this.create} removeTodo={this.remove} />
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList