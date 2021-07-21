import React from 'react';
import SearchBar from './SearchBar'
import axios from 'axios';

class App extends React.Component {

    state = {images: []};

    onSearchSubmit = async (term) => {
        const response = await axios
            .get('https://api.unsplash.com/search/photos', {
                params: {
                    query: term
                },
                headers: {
                    Authorization: 'Client-ID iYSkPfb2uSVlqLXwqVGUZm6MsLA-JR-8vuTB2V0fLN0'
                }
            });
        this.setState({images: response.data.results})
    }
    render() {
        return (
            <div className="ui container" style={{ margin: '10px' }}>
                <SearchBar submitCallback={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;