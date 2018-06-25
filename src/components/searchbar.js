import React, { Component } from "react";
import axios from 'axios';
import ToggleDisplay from 'react-toggle-display';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      term: "",
      suggestions: [],
      shown:true
      
   };
    
  }

  getVideos = (input) => {
    const url = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${input}`;
    axios.get(url)
      .then((response) => {
        //console.log(response);
        this.setState({suggestions: response.data[1]});
        //const {suggestions = []} = this.state;

      });
  }

  handleClick(suggestion) {
    this.props.onSearchTermChange(suggestion);
    this.setState({
			shown: !this.state.shown
		});

  }

  renderVideos = () => {
    const {suggestions = []} = this.state;

    var shown = {
			display: this.state.shown ? "block" : "none"
		};
		
    return suggestions.map((suggestion, index) => {
        return (
         
            <div key={index} className="list-group" onClick={() => this.handleClick(suggestion)} style={ shown }>
              
                <li className="list-group-item">{suggestion}</li>
              
            </div>
          
        );
    });
}
  

  render() {
    
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
        
        {this.renderVideos()}
        
        
      </div>
    );
  }

  onInputChange(term) {
     
    this.setState({ term });
    this.setState({shown:true});
    this.getVideos(term);
  
    
  }
}

export default SearchBar;