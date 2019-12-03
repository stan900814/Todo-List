import React, { Component } from 'react'
import Button from 'antd/es/button';
import { Input } from 'antd'
import './TodoItem.css'
class TodoItem extends Component {
    render() {
        return (
            <div className="TodoItem">
                <Input value={this.props.todo.title} readOnly='true'
                    onChange={this.toggle.bind(this)} />
                <Button type="primary" onClick={this.delete.bind(this)}>Delete</Button>
            </div>
        )
    }
    toggle(e) {
        this.props.onToggle(e, this.props.todo)
    }
    delete(e) {
        this.props.onDelete(e, this.props.todo)
    }
}
export default TodoItem