import { id } from 'postcss-selector-parser';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'


class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {lat: null, errorMessage:false};
    // }

    state = {lat: null, errorMessage:false};
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (postion) => this.setState({ lat: postion.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        //note that render was just called.
        console.log('component was just updated')
    }


    //self made helper method for rendering
    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner text="Waiting On User"/>
    }

    render() {
        return(
            <div className="appRoot">
                {this.renderContent()}
            </div>
        )
    }


}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
