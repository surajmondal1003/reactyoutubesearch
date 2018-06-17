import React,{ Component } from 'react';

//functional based component
// const SearchBar = () =>{
//     return <input/>;
// };
//class based component

class SearchBar extends Component{
constructor(props){
    super(props);

    this.state={ term:'' };
}

    // render(){
    //     return <input onChange={this.onInputChange}/>;
    // }

    //using ES6 arrow function
    // render(){
    //     return <input onChange={(event)=>console.log(event.target.value)}/>;
    // }

    render(){
        return (
            <div>
                <input value = {this.state.term} onChange={this.onInputChange} />
            </div>
        );
    }
    onInputChange = (event) => {
        this.setState({term: event.target.value});
        this.props.onSearch(event.target.value)
        console.log(event.target.value);
    }
}

export default SearchBar;