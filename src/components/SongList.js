import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    // this.props === { songs: state.songs };
    return <div>SongList</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);



/*
This object is going to have a key of songs and its value will be state songs like so.
So the object that we return from the map state to props function is going to show up as props inside of our component.

So we're essentially saying by returning this object right here, we're essentially saying that at some point in time, the future inside of our song, this component, if we say this props, it's going to be equal to exactly that object right there.

It's going to be an object that has a song's property and that will contain the list or the array of all of our songs.

So that is exactly how we make use of the React Redux library to get data from our Redux store into a component.

It's always going to be the exact same scenario. We're always going to import connect at the top. We're always going to call, connect and then pass in our component as the second function call. We're always going to define map state to props.

Map state to props is always going to get a first argument of state, and we're always going to return an object that is going to show up as props inside of our component.
*/