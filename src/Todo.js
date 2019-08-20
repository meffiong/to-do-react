import React, { Component } from 'react'

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = { isEditing: false, task: this.props.task }
        this.handleClick = this.handleClick.bind(this)
        this.showForm = this.showForm.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick(){
        return this.props.removeTodo(this.props.id)
    }

    showForm(){
        this.setState({isEditing: !this.state.isEditing})
    }

    handleUpdate(e){
        e.preventDefault()
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({isEditing: !this.state.isEditing})
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value //Computed property
        })   
    }

    render() {
        let result;
        if(this.state.isEditing){
            result = 
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type="text" value={this.state.task} name="task" onChange={this.handleChange}/>
                        <button>Done</button>
                    </form>
                </div>
        }else{
            result =
            <div className="Todo">
                 <p>{this.props.task}</p>
                <button onClick={this.showForm}>Edit</button>
                <button onClick={this.handleClick}>X</button>
            </div>
        }

        return result
    }
}

export default Todo;