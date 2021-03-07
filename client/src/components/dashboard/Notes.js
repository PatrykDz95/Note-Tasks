import React, { Component } from "react";

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
  const { notes } = this.state;

  const notesList = notes.map(note => {
    return <tr key={note._id}> 
      <td>{note.title}</td>
      <td>{note.note}</td>
  </tr>
    });
      
      

  return (
    
    <table class="col s6">
    <thead>
      <tr>
          <th>Title</th>
          <th>Note</th>
      </tr>
    </thead>
    <tbody>
      {notesList}
    </tbody>
  </table>
              
         
        );
  }
}

export default Notes;