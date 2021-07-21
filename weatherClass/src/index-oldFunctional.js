import { id } from 'postcss-selector-parser';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (postion) => console.log(postion),
        (err) => console.log(err)
    );
    return <div> Hi there!</div>;
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)