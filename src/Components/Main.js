import React, {Component} from 'react';
import List from './List';
import Title from './Title';

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

export default Main