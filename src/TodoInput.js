import React, { Component } from 'react'
import { Input } from 'antd'
import { Icon } from 'antd'
import './TodoInput.css'
class TodoInput extends Component {
    render() {
        return <Input addonBefore={<Icon type="edit" theme="twoTone" />} type="text" value={this.props.content} className="TodoInput" placeholder="请输入您的待办事件"
            onChange={this.changeTitle.bind(this)}
            onKeyPress={this.submit.bind(this)} />
    }
    submit(e) {
        if (e.key === 'Enter') {
            this.props.onSubmit(e)
        }
    }
    changeTitle(e) {
        this.props.onChange(e)
    }
}
export default TodoInput