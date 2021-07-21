import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    //arrow functions solve the binding issue
    onFormSubmit = (event) => {
        event.preventDefault();
        //when using probs in a class, be sure to add 'this'
        this.props.submitCallback(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={(event) => this.onFormSubmit(event)}>
                    <div className='field'>Image Seach</div>
                    <input type='text' value= {this.state.term} onChange={(event) => this.setState({term: event.target.value})}/>

                </form>
            </div>

        )
    }
}
export default SearchBar;