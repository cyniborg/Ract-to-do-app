const React = require('react');
const PropTypes = require('prop-types');

function ListEachTask(props){
    const value = props.value;
    return(
        
        <li className='fadeInDown'>{value}<a className='app-list-button' onClick={props.whenClicked.bind(null,value)}>Task Completed</a></li>
    );
}

class ListTask extends React.Component {
    
    render(){
        const value = this.props.inputData;
        return(
            <ul className='app-list'>
                
                {value.map((el)=>{
                    return (
                            <ListEachTask key={el.id} value={el.text} whenClicked={this.props.whenClicked} />
                    );
                })}
            </ul>

        );
    }
}
ListTask.propTypes = {
    inputData: PropTypes.array.isRequired
};

module.exports = ListTask;