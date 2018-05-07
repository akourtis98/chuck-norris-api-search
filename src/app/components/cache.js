import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { fetchCachedJokes } from '../actions/cacheActions';
import { connect } from "react-redux"

class Cache extends React.Component {

    deleteJoke = id => {
        console.log(id);
        localStorage.removeItem(id);
        console.log("under me fetch");
        fetchCachedJokes();
        console.log("under me force");
        this.forceUpdate();
        console.log("called")
    }

    render() {
        console.log(this.props.cachedJokes);
        const cachedJokes = this.props.cachedJokes.map(joke => (
            <div key={joke.id}>
                <button onClick={() => this.deleteJoke(joke.id)}/>
                <h3>{joke.value}</h3>
            </div>
        ))
        return (
            <div>
                {cachedJokes}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cachedJokes: state.cachedJokes.cachedJokes
});


export default connect(mapStateToProps, { fetchCachedJokes })(Cache);