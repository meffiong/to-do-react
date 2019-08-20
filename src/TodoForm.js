import React, { Component } from 'react'
import uuid from 'uuid'

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state = { task: "" }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value //Computed property
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createTodo({...this.state, id: uuid() })
        this.setState({task: ""})
    }

    //Call it, then create it

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">To do</label>
                    <input 
                        type="text" 
                        placeholder="New to do" 
                        id="task"
                        value = {this.state.task}
                        onChange = {this.handleChange}
                        name="task"
                        />
                        <button>Add To-do</button>
                </form>
            </div>
        )
    }
}

export default TodoForm