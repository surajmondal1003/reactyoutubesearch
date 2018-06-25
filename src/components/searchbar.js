import React, { Component } from "react";
import axios from 'axios';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      term: "",
      suggestions: []
   };
    
  }

  getVideos = (input) => {
    const url = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${input}`;
    axios.get(url)
      .then((response) => {
        this.setState({suggestions: response.data[1]});
        
      });
  }

  renderVideos = () => {
    const {suggestions = []} = this.state;

    return suggestions.map((suggestion, index) => {
        const {suggestion_name} = suggestion;

        return (
            <div key={index} >
                <h3>{suggestion_name}</h3>
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
    this.props.onSearchTermChange(term);
    this.getVideos(term);

    //console.log(this.state.suggestions)
  }
}

export default SearchBar;