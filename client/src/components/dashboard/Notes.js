import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
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
        <td>{note.title}</td>
        <td>{note.note}</td>

    </tr>
    });
      

  return (
          <div className="col s12 center-align">
            <p>{notesList}</p>
              
         
          
      </div>
    );
  }
}

Notes.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Notes);