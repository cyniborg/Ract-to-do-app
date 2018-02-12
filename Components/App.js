var React = require('react')
var Header = require('./Header');
var TaskHandler = require('./InputTask');

// Header To do App (presentation)
//input form
//display results (state) add and remove the results

class App extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <TaskHandler />
            </div>
        );
    }
};

module.exports = App;