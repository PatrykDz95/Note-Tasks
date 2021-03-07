import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";
//import axios from 'axios';

class Notes extends Component {


  constructor(props) {
    super(props)
    this.state ={
      notes:[]    
    }
}

  onLogoutClick = e => {
  e.preventDefault();
  this.props.logoutUser();
};
  

componentDidMount() {
  fetch('/notes/all')
    .then(response => response.json())
    .then(data => this.setState({notes: data}));
}

render() {
  //const { user } = this.props.auth;
  const { notes } = this.state;

  const notesList = notes.map(note => {
    return <tr key={note._id}> 
    <div class="row s3">
    <div class="row s3">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{note.title}</span>
          <p>{note.note}</p>
        </div>
        <div class="card-action">
        </div>
      </div>
    </div>
  </div> 

  {/* <div class="140px">
    <div class="col s12 m6">
      <div class="card-panel teal">
        <span class="white-text">{note.title}
        {note.note}
        </span>
      </div>
    </div>
  </div> */}

    </tr>
    });
      
      

  return (
    
            <p>{notesList}</p>
              
         
        );
  }
}

// Notes.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth
// });

export default Notes;