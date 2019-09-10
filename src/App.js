import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'code, commit, code again',
                completed: false
            },
            {
                id: 2,
                title: 'check emails',
                completed: false
            },
            {
                id: 3,
                title: 'contribute to open source',
                completed: false
            }
        ]
    }
    render() {
        return (
             <div className = "App" >
            <Todos todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;