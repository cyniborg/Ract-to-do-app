const React = require('react');
const ListTask = require('./ListTask');


class InputTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            inputData: [],
            input:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(value, event){
        event.preventDefault();
        var array = this.state.inputData.filter(item=>item.text!==value);
        this.setState({inputData: array});
    }

    incrementId() {
        this.setState((prevState) => {
          // Important: read `prevState` instead of `this.state` when updating.
          return {id: prevState.count + 1}
        });
      }

      handleInput(e){
          this.setState({input: e.target.value});
      }
      

    handleSubmit(event){
        event.preventDefault();
        this.incrementId();
        var data = {id: this.state.id, text: this.state.input};
        this.setState(prevState => ({
            inputData: [...prevState.inputData, data],
            input: ''
          }));
    }

    render(){
        return(
            <div>
                <form className='app-form' onSubmit={this.handleSubmit}>
                    <input 
                    type='text'
                    value={this.state.input}
                    onChange = {this.handleInput}
                    placeholder='Enter your Task'
                    />
                    <button
                    type = 'submit'
                    className='app-input-button'
                    disabled = {this.state.input?false:true}>+</button>
                </form>
                
                {this.state.inputData.length<=0 ? <h2>Please enter a new task</h2> : <ListTask inputData={this.state.inputData} whenClicked={this.handleDelete} />}
                    
            </div>
        );
    }
}


module.exports = InputTask;