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
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input type="text" value={this.state.task} name="task" onChange={this.handleChange}/>
                        <button>Done</button>
                    </form>
                </div>
        }else{
            result =
            <div className="Todo">
                 <p>{this.props.task}</p>
            <div className="Todo-buttons">
                <button onClick={this.showForm}><i class="fas fa-edit"></i></button>
                <button onClick={this.handleClick}><i class="fas fa-trash"></i></button>
            </div>
            </div>
        }

        return result
    }
}

export default Todo;