import React, { Component } from 'react'
import propTypes from 'prop-types';

export class Todoitem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

//proptypes
Todoitem.propTypes = {
    todo: propTypes.object.isRequired
}
export default Todoitem
