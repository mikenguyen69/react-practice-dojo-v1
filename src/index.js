import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class List extends Component {
    render() {
        return (
            <ol>
                {this.props.tasks.map((task, index) => <li key={index}> {task} </li>)}
            </ol>
        )
    }
}

class Title extends Component {
    render() {
        return (
            <h1> {this.props.title} </h1>
        )
    }
}

class Main extends Component {
    render() {
        return(
            <div>
                <Title title={["Task List 1"]} />
                <List tasks={["Do", "Think", "Act"]}/>

                <List tasks={["Run", "Breath", "Drink"]}/>
            </div>
        )
    }
}

//const element = React.createElement('ol', null, tasks.map((task, index) => React.createElement('li', {key: index}, task)));
ReactDOM.render(<Main />, document.getElementById('root'));