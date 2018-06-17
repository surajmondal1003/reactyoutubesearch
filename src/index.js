import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
const API_KEY='AIzaSyCoZQroz6O4BpS2C12_lVGOOqSA_Rv1OmY';




class App extends Component{
    //return <div>Hi !! Welcome To React</div>
    constructor(props){
        super(props);
        this.state={ videos:[] };
    }
    
    componentWillMount() {
        YTSearch({key : API_KEY, term : 'surfboards'} , (videos) => {
            this.setState({ videos });
            //console.log(videos);
        });
    }

    onSearch = term => {
        console.log(term);
        YTSearch({key : API_KEY, term} , videos => {
            this.setState({ videos });
            console.log(videos);
        });
    }

    render(){
        return (<div>
                    <SearchBar onSearch={this.onSearch}/>
                    <VideoList videos={this.state.videos}/>
                </div>
            );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
